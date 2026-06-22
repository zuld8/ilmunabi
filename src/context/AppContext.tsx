"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { objectsData } from "@/data/objects";
import { createClient } from "@/lib/supabase/client";

export interface ChildProfile {
  id: string;
  name: string;
  age: number;
  zone: "balita" | "anak" | "explorer";
  points: number;
  completedObjects: string[]; // slugs
  unlockedCards: string[]; // slugs
  badges: string[]; // e.g. "Ahli Serangga", "Penjelajah Gurun"
}

interface AppContextType {
  children: ChildProfile[];
  activeChildId: string | null;
  activeChild: ChildProfile | null;
  streak: number;
  trialDaysRemaining: number;
  isSubscribed: boolean;
  subscriptionStatus: "trial" | "subscribed" | "expired";
  lang: "id" | "en" | "ar";
  isLoading: boolean;
  setLang: (lang: "id" | "en" | "ar") => void;
  addProfile: (name: string, age: number, zoneOverride?: "balita" | "anak" | "explorer") => Promise<string>;
  switchProfile: (id: string) => void;
  deleteProfile: (id: string) => Promise<void>;
  completeObject: (slug: string, pointsEarned: number) => Promise<void>;
  unlockCard: (slug: string) => Promise<void>;
  subscribe: () => Promise<void>;
  awardBadge: (badgeName: string) => Promise<void>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [profiles, setProfiles] = useState<ChildProfile[]>([]);
  const [activeChildId, setActiveChildId] = useState<string | null>(null);
  const [streak, setStreak] = useState(1);
  const [trialEndsAt, setTrialEndsAt] = useState<string | null>(null);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [lang, setLang] = useState<"id" | "en" | "ar">("id");
  const [isLoading, setIsLoading] = useState(true);

  const supabase = createClient();

  // Load state and synchronize with Supabase
  useEffect(() => {
    // Read local storage settings (lang, streak, etc.)
    try {
      const storedStreak = localStorage.getItem("ilmunabi_streak");
      const storedLang = localStorage.getItem("ilmunabi_lang");
      if (storedStreak) setStreak(parseInt(storedStreak, 10));
      if (storedLang) setLang(storedLang as "id" | "en" | "ar");
    } catch (e) {
      console.error("Failed loading local storage", e);
    }

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      setIsLoading(true);
      if (session) {
        try {
          const userId = session.user.id;
          
          // 1. Fetch parent profile
          const { data: profileData, error: profileErr } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', userId)
            .single();
          
          if (!profileErr && profileData) {
            setIsSubscribed(profileData.subscription_status === 'active');
            setTrialEndsAt(profileData.trial_ends_at);
          }
          
          // 2. Fetch children profiles
          const { data: childrenData, error: childrenErr } = await supabase
            .from('children')
            .select('*')
            .eq('parent_id', userId);
          
          if (!childrenErr && childrenData) {
            const childrenProfiles: ChildProfile[] = [];
            
            for (const child of childrenData) {
              // Fetch child progress
              const { data: progressData } = await supabase
                .from('progress')
                .select('*')
                .eq('child_id', child.id);
              
              // Fetch child badges
              const { data: badgesData } = await supabase
                .from('badges')
                .select('*')
                .eq('child_id', child.id);
              
              const completed = progressData
                ? progressData.filter(p => p.is_completed).map(p => p.objek_slug)
                : [];
              
              const points = progressData
                ? progressData.reduce((sum, p) => sum + (p.poin_earned || 0), 0)
                : 0;
              
              const badgesList = badgesData
                ? badgesData.map(b => b.badge_slug)
                : [];

              const unlocked = progressData
                ? progressData.map(p => p.objek_slug)
                : [];
              
              childrenProfiles.push({
                id: child.id,
                name: child.name,
                age: child.age,
                zone: child.zona as "balita" | "anak" | "explorer",
                points,
                completedObjects: completed,
                unlockedCards: unlocked,
                badges: badgesList,
              });
            }
            
            setProfiles(childrenProfiles);
            
            // Restore active child selection
            const storedActiveId = localStorage.getItem("ilmunabi_active_id");
            if (storedActiveId && childrenProfiles.some(c => c.id === storedActiveId)) {
              setActiveChildId(storedActiveId);
            } else if (childrenProfiles.length > 0) {
              setActiveChildId(childrenProfiles[0].id);
              localStorage.setItem("ilmunabi_active_id", childrenProfiles[0].id);
            } else {
              setActiveChildId(null);
            }
          } else {
            setProfiles([]);
            setActiveChildId(null);
          }
        } catch (err) {
          console.error("Error fetching data from Supabase", err);
        } finally {
          setIsLoading(false);
        }
      } else {
        // Reset states if logged out
        setProfiles([]);
        setActiveChildId(null);
        setIsSubscribed(false);
        setTrialEndsAt(null);
        setIsLoading(false);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [supabase]);

  // Save localized settings to local storage on state change
  useEffect(() => {
    localStorage.setItem("ilmunabi_streak", streak.toString());
    localStorage.setItem("ilmunabi_lang", lang);
  }, [streak, lang]);

  // Calculate Trial Remaining
  const getTrialDaysRemaining = (): number => {
    if (!trialEndsAt) return 7;
    const end = new Date(trialEndsAt);
    const today = new Date();
    const diffTime = end.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return Math.max(0, diffDays);
  };

  const trialDaysRemaining = getTrialDaysRemaining();

  let subscriptionStatus: "trial" | "subscribed" | "expired" = "trial";
  if (isSubscribed) {
    subscriptionStatus = "subscribed";
  } else if (trialDaysRemaining <= 0) {
    subscriptionStatus = "expired";
  }

  const addProfile = async (name: string, age: number, zoneOverride?: "balita" | "anak" | "explorer"): Promise<string> => {
    let suggestedZone: "balita" | "anak" | "explorer" = "balita";
    if (age >= 6 && age <= 8) {
      suggestedZone = "anak";
    } else if (age >= 9) {
      suggestedZone = "explorer";
    }
    const finalZone = zoneOverride || suggestedZone;

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return "";

    const { data, error } = await supabase
      .from('children')
      .insert({
        parent_id: user.id,
        name,
        age,
        zona: finalZone
      })
      .select()
      .single();

    if (error) {
      console.error("Failed to add profile to database", error);
      return "";
    }

    const newProfile: ChildProfile = {
      id: data.id,
      name: data.name,
      age: data.age,
      zone: data.zona as "balita" | "anak" | "explorer",
      points: 0,
      completedObjects: [],
      unlockedCards: [],
      badges: [],
    };

    setProfiles((prev) => [...prev, newProfile]);
    setActiveChildId(data.id);
    localStorage.setItem("ilmunabi_active_id", data.id);
    return data.id;
  };

  const switchProfile = (id: string) => {
    setActiveChildId(id);
    localStorage.setItem("ilmunabi_active_id", id);
  };

  const deleteProfile = async (id: string) => {
    const { error } = await supabase
      .from('children')
      .delete()
      .eq('id', id);

    if (error) {
      console.error("Failed to delete child profile from DB", error);
      return;
    }

    setProfiles((prev) => prev.filter((p) => p.id !== id));
    if (activeChildId === id) {
      const remaining = profiles.filter((p) => p.id !== id);
      const nextActiveId = remaining.length > 0 ? remaining[0].id : null;
      setActiveChildId(nextActiveId);
      if (nextActiveId) {
        localStorage.setItem("ilmunabi_active_id", nextActiveId);
      } else {
        localStorage.removeItem("ilmunabi_active_id");
      }
    }
  };

  const completeObject = async (slug: string, pointsEarned: number) => {
    if (!activeChildId) return;

    // 1. Save progress to Supabase
    const { error: progressErr } = await supabase
      .from('progress')
      .upsert({
        child_id: activeChildId,
        objek_slug: slug,
        is_completed: true,
        poin_earned: pointsEarned,
        completed_at: new Date().toISOString()
      }, {
        onConflict: 'child_id,objek_slug'
      });

    if (progressErr) {
      console.error("Failed to update progress in DB", progressErr);
      return;
    }

    // 2. Perform state updates and check badge achievements
    setProfiles((prev) =>
      prev.map((profile) => {
        if (profile.id !== activeChildId) return profile;

        const isAlreadyCompleted = profile.completedObjects.includes(slug);
        const updatedCompleted = isAlreadyCompleted
          ? profile.completedObjects
          : [...profile.completedObjects, slug];

        const isCardUnlocked = profile.unlockedCards.includes(slug);
        const updatedCards = isCardUnlocked
          ? profile.unlockedCards
          : [...profile.unlockedCards, slug];

        // Check badge achievements
        const updatedBadges = [...profile.badges];
        
        // 0. Dynamic "Ahli [Object]" badge
        const obj = objectsData.find((o) => o.slug === slug);
        if (obj) {
          const objectBadge = `${obj.icon} Ahli ${obj.name.id}`;
          if (!updatedBadges.includes(objectBadge)) {
            updatedBadges.push(objectBadge);
            supabase.from('badges').insert({
              child_id: activeChildId,
              badge_slug: objectBadge
            }).then(({ error }) => {
              if (error) console.error("Failed to save badge to DB", error);
            });
          }
        }
        
        // 1. Insect badge ("Ahli Serangga")
        const insectSlugs = ["lebah", "semut", "laba-laba", "nyamuk", "lalat"];
        const completedInsects = updatedCompleted.filter((s) => insectSlugs.includes(s));
        if (completedInsects.length >= 3 && !updatedBadges.includes("Ahli Serangga")) {
          updatedBadges.push("Ahli Serangga");
          supabase.from('badges').insert({ child_id: activeChildId, badge_slug: "Ahli Serangga" });
        }

        // 2. Desert badge ("Penjelajah Gurun")
        const desertSlugs = ["unta"];
        const completedDeserts = updatedCompleted.filter((s) => desertSlugs.includes(s));
        if (completedDeserts.length >= 1 && !updatedBadges.includes("Penjelajah Gurun")) {
          updatedBadges.push("Penjelajah Gurun");
          supabase.from('badges').insert({ child_id: activeChildId, badge_slug: "Penjelajah Gurun" });
        }

        // 3. Animal Kingdom badge ("Cendekiawan Hewan")
        if (updatedCompleted.length >= 5 && !updatedBadges.includes("Cendekiawan Cilik")) {
          updatedBadges.push("Cendekiawan Cilik");
          supabase.from('badges').insert({ child_id: activeChildId, badge_slug: "Cendekiawan Cilik" });
        }

        // 4. Plant badges
        const completedPlants = updatedCompleted.filter((s) => {
          const o = objectsData.find((item) => item.slug === s);
          return o && o.type === "tumbuhan";
        });
        
        if (completedPlants.length >= 1 && !updatedBadges.includes("Pekebun Muda")) {
          updatedBadges.push("Pekebun Muda");
          supabase.from('badges').insert({ child_id: activeChildId, badge_slug: "Pekebun Muda" });
        }
        if (completedPlants.length >= 5 && !updatedBadges.includes("Penjaga Kebun Allah")) {
          updatedBadges.push("Penjaga Kebun Allah");
          supabase.from('badges').insert({ child_id: activeChildId, badge_slug: "Penjaga Kebun Allah" });
        }
        const totalPlantsCount = objectsData.filter((o) => o.type === "tumbuhan").length;
        if (totalPlantsCount > 0 && completedPlants.length >= totalPlantsCount && !updatedBadges.includes("Ahli Botani Qur'an")) {
          updatedBadges.push("Ahli Botani Qur'an");
          supabase.from('badges').insert({ child_id: activeChildId, badge_slug: "Ahli Botani Qur'an" });
        }

        return {
          ...profile,
          points: isAlreadyCompleted ? profile.points : profile.points + pointsEarned,
          completedObjects: updatedCompleted,
          unlockedCards: updatedCards,
          badges: updatedBadges,
        };
      })
    );

    // Increment streak on completion if not done today
    setStreak((prev) => prev + 1);
  };

  const unlockCard = async (slug: string) => {
    if (!activeChildId) return;

    await supabase
      .from('progress')
      .upsert({
        child_id: activeChildId,
        objek_slug: slug,
        is_completed: false,
        poin_earned: 0
      }, {
        onConflict: 'child_id,objek_slug'
      });

    setProfiles((prev) =>
      prev.map((profile) => {
        if (profile.id !== activeChildId) return profile;
        if (profile.unlockedCards.includes(slug)) return profile;
        return {
          ...profile,
          unlockedCards: [...profile.unlockedCards, slug],
        };
      })
    );
  };

  const subscribe = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    const { error } = await supabase
      .from('profiles')
      .update({ subscription_status: 'active' })
      .eq('id', user.id);

    if (!error) {
      setIsSubscribed(true);
    } else {
      console.error("Failed to subscribe in database", error);
    }
  };

  const awardBadge = async (badgeName: string) => {
    if (!activeChildId) return;

    const { error } = await supabase
      .from('badges')
      .insert({
        child_id: activeChildId,
        badge_slug: badgeName
      });

    if (error && error.code !== '23505') { // Ignore duplicate key errors
      console.error("Failed to save badge to database", error);
      return;
    }

    setProfiles((prev) =>
      prev.map((profile) => {
        if (profile.id !== activeChildId) return profile;
        if (profile.badges.includes(badgeName)) return profile;
        return {
          ...profile,
          badges: [...profile.badges, badgeName],
        };
      })
    );
  };

  const activeChild = profiles.find((p) => p.id === activeChildId) || null;

  return (
    <AppContext.Provider
      value={{
        children: profiles,
        activeChildId,
        activeChild,
        streak,
        trialDaysRemaining,
        isSubscribed,
        subscriptionStatus,
        lang,
        isLoading,
        setLang,
        addProfile,
        switchProfile,
        deleteProfile,
        completeObject,
        unlockCard,
        subscribe,
        awardBadge,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}

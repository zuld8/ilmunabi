"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

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
  addProfile: (name: string, age: number, zoneOverride?: "balita" | "anak" | "explorer") => string;
  switchProfile: (id: string) => void;
  deleteProfile: (id: string) => void;
  completeObject: (slug: string, pointsEarned: number) => void;
  unlockCard: (slug: string) => void;
  subscribe: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [profiles, setProfiles] = useState<ChildProfile[]>([]);
  const [activeChildId, setActiveChildId] = useState<string | null>(null);
  const [streak, setStreak] = useState(1);
  const [trialStartDate, setTrialStartDate] = useState<string | null>(null);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from local storage
  useEffect(() => {
    try {
      const storedProfiles = localStorage.getItem("ilmunabi_profiles");
      const storedActiveId = localStorage.getItem("ilmunabi_active_id");
      const storedStreak = localStorage.getItem("ilmunabi_streak");
      const storedTrialDate = localStorage.getItem("ilmunabi_trial_start");
      const storedSub = localStorage.getItem("ilmunabi_subscribed");

      if (storedProfiles) setProfiles(JSON.parse(storedProfiles));
      if (storedActiveId) setActiveChildId(storedActiveId);
      if (storedStreak) setStreak(parseInt(storedStreak, 10));
      if (storedSub) setIsSubscribed(storedSub === "true");

      if (storedTrialDate) {
        setTrialStartDate(storedTrialDate);
      } else {
        const today = new Date().toISOString();
        setTrialStartDate(today);
        localStorage.setItem("ilmunabi_trial_start", today);
      }
    } catch (e) {
      console.error("Failed loading local storage", e);
    }
    setIsLoaded(true);
  }, []);

  // Save to local storage on state change
  useEffect(() => {
    if (!isLoaded) return;
    localStorage.setItem("ilmunabi_profiles", JSON.stringify(profiles));
    localStorage.setItem("ilmunabi_active_id", activeChildId || "");
    localStorage.setItem("ilmunabi_streak", streak.toString());
    localStorage.setItem("ilmunabi_subscribed", isSubscribed.toString());
  }, [profiles, activeChildId, streak, isSubscribed, isLoaded]);

  // Calculate Trial Remaining
  const getTrialDaysRemaining = (): number => {
    if (!trialStartDate) return 7;
    const start = new Date(trialStartDate);
    const today = new Date();
    const diffTime = today.getTime() - start.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const remaining = 7 - diffDays;
    return Math.max(0, remaining);
  };

  const trialDaysRemaining = getTrialDaysRemaining();

  let subscriptionStatus: "trial" | "subscribed" | "expired" = "trial";
  if (isSubscribed) {
    subscriptionStatus = "subscribed";
  } else if (trialDaysRemaining <= 0) {
    subscriptionStatus = "expired";
  }

  const addProfile = (name: string, age: number, zoneOverride?: "balita" | "anak" | "explorer"): string => {
    const id = Math.random().toString(36).substring(2, 9);
    
    // Auto suggest zone
    let suggestedZone: "balita" | "anak" | "explorer" = "balita";
    if (age >= 6 && age <= 8) {
      suggestedZone = "anak";
    } else if (age >= 9) {
      suggestedZone = "explorer";
    }

    const newProfile: ChildProfile = {
      id,
      name,
      age,
      zone: zoneOverride || suggestedZone,
      points: 0,
      completedObjects: [],
      unlockedCards: [],
      badges: [],
    };

    setProfiles((prev) => [...prev, newProfile]);
    if (!activeChildId) {
      setActiveChildId(id);
    }
    return id;
  };

  const switchProfile = (id: string) => {
    setActiveChildId(id);
  };

  const deleteProfile = (id: string) => {
    setProfiles((prev) => prev.filter((p) => p.id !== id));
    if (activeChildId === id) {
      const remaining = profiles.filter((p) => p.id !== id);
      setActiveChildId(remaining.length > 0 ? remaining[0].id : null);
    }
  };

  const completeObject = (slug: string, pointsEarned: number) => {
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
        
        // 1. Insect badge ("Ahli Serangga")
        const insectSlugs = ["lebah", "semut", "laba-laba", "nyamuk", "lalat"];
        const completedInsects = updatedCompleted.filter((s) => insectSlugs.includes(s));
        if (completedInsects.length >= 3 && !updatedBadges.includes("Ahli Serangga")) {
          updatedBadges.push("Ahli Serangga");
        }

        // 2. Desert badge ("Penjelajah Gurun")
        const desertSlugs = ["unta"];
        const completedDeserts = updatedCompleted.filter((s) => desertSlugs.includes(s));
        if (completedDeserts.length >= 1 && !updatedBadges.includes("Penjelajah Gurun")) {
          updatedBadges.push("Penjelajah Gurun");
        }

        // 3. Animal Kingdom badge ("Cendekiawan Hewan")
        if (updatedCompleted.length >= 5 && !updatedBadges.includes("Cendekiawan Cilik")) {
          updatedBadges.push("Cendekiawan Cilik");
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
    setStreak((prev) => prev + 1); // Simple mock increment
  };

  const unlockCard = (slug: string) => {
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

  const subscribe = () => {
    setIsSubscribed(true);
    localStorage.setItem("ilmunabi_subscribed", "true");
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
        addProfile,
        switchProfile,
        deleteProfile,
        completeObject,
        unlockCard,
        subscribe,
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

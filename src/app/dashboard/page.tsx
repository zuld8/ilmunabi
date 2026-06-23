"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useApp } from "@/context/AppContext";
import { objectsData, ObjectData, NabiData, AsmaulHusnaData } from "@/data/objects";
import KategoriFilter, { CategoryType } from "@/components/KategoriFilter";
import { createClient } from "@/lib/supabase/client";
import { 
  Sparkles, 
  Gamepad2, 
  Compass, 
  Plus, 
  Award, 
  Settings, 
  CheckCircle2, 
  Flame,
  LogOut
} from "lucide-react";

export default function Dashboard() {
  const router = useRouter();
  const { 
    children: profiles, 
    activeChild, 
    switchProfile, 
    streak, 
    trialDaysRemaining,
    subscriptionStatus,
    awardBadge,
    isLoading
  } = useApp();

  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [activeCategory, setActiveCategory] = useState<CategoryType>("semua");
  const [showParentModal, setShowParentModal] = useState(false);
  const [mathAnswer, setMathAnswer] = useState("");
  const [mathQuestion, setMathQuestion] = useState({ q: "", a: 0 });
  const [mathError, setMathError] = useState(false);
  const [showWelcomePopup, setShowWelcomePopup] = useState(false);

  // Trigger Welcome Popup after 1 second if child has 0 cards and 0 badges
  useEffect(() => {
    if (activeChild && activeChild.completedObjects.length === 0 && !activeChild.badges.includes("Penjelajah Baru")) {
      const timer = setTimeout(() => {
        setShowWelcomePopup(true);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setShowWelcomePopup(false);
    }
  }, [activeChild]);

  const dailyMotivations = [
    "Hari ini kita belajar tentang lebah! 🐝",
    "Setiap ilmu adalah cahaya. ✨",
    "Satu fakta baru hari ini, yuk! 🔬",
    "Allah menciptakan semua ini untukmu. 🌍",
  ];
  const dayIndex = new Date().getDay();
  const dailyMotivation = dailyMotivations[dayIndex % dailyMotivations.length];

  // Redirect to onboarding if no profiles exist
  useEffect(() => {
    if (!isLoading && profiles.length === 0) {
      router.push("/onboarding");
    }
  }, [profiles, isLoading, router]);

  // Generate simple math gate question for parent area
  const openParentArea = () => {
    const num1 = Math.floor(Math.random() * 8) + 2; // 2-9
    const num2 = Math.floor(Math.random() * 8) + 2; // 2-9
    setMathQuestion({
      q: `${num1} x ${num2}`,
      a: num1 * num2
    });
    setMathAnswer("");
    setMathError(false);
    setShowParentModal(true);
  };

  const handleParentGateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (parseInt(mathAnswer, 10) === mathQuestion.a) {
      setShowParentModal(false);
      router.push("/parents");
    } else {
      setMathError(true);
    }
  };

  if (isLoading || !activeChild) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <p className="text-charcoal/60 animate-pulse font-medium">Memuat profil belajar...</p>
      </div>
    );
  }

  // Active Zone Icon helper
  const ZoneIcon = {
    balita: Sparkles,
    anak: Gamepad2,
    explorer: Compass
  }[activeChild.zone];

  return (
    <div className="min-h-screen bg-cream pb-16">
      
      {/* Top Navbar Dashboard */}
      <header className="sticky top-0 z-40 border-b border-cream-dark/60 bg-cream/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          
          {/* Logo & Parent Area Trigger */}
          <div className="flex items-center gap-4">
            <span className="text-lg font-bold tracking-tight text-teal">
              Ilmu<span className="text-gold">Nabi</span>
            </span>
            <button
              onClick={openParentArea}
              className="inline-flex items-center gap-1 text-xs font-bold text-teal bg-teal-light px-2.5 py-1.5 rounded-full hover:bg-teal/10 transition"
            >
              <Settings className="h-3.5 w-3.5" />
              <span>Menu Orang Tua</span>
            </button>
          </div>

          {/* User Stats & Profile Switcher */}
          <div className="flex items-center gap-4">
            {/* Streak */}
            <div className="flex items-center gap-1 text-orange-600 bg-orange-50 px-3 py-1.5 rounded-full border border-orange-100 font-bold text-sm">
              <Flame className="h-4.5 w-4.5 fill-current" />
              <span>{streak} Hari</span>
            </div>

            {/* Points */}
            <div className="flex items-center gap-1 text-yellow-700 bg-yellow-50 px-3 py-1.5 rounded-full border border-yellow-100 font-bold text-sm">
              <Award className="h-4.5 w-4.5 text-gold fill-current" />
              <span>{activeChild.points} Pts</span>
            </div>

            {/* Profile Dropdown Trigger */}
            <div className="relative">
              <button
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="flex items-center gap-2 rounded-2xl bg-white border border-cream-dark p-2 hover:bg-cream-dark/20 transition duration-200"
              >
                <div className="h-8 w-8 rounded-xl bg-teal text-white flex items-center justify-center font-bold text-sm">
                  {activeChild.name.substring(0, 2).toUpperCase()}
                </div>
                <span className="text-sm font-bold text-charcoal hidden sm:inline">{activeChild.name}</span>
              </button>

              {/* Profile switcher menu overlay */}
              {showProfileMenu && (
                <div className="absolute right-0 mt-2 w-64 rounded-2xl border border-cream-dark bg-white p-3 shadow-xl z-50">
                  <span className="block text-[10px] font-bold text-charcoal/40 uppercase tracking-wider px-3 mb-2">
                    Pilih Profil Belajar
                  </span>
                  
                  {/* Profiles list */}
                  <div className="space-y-1 max-h-48 overflow-y-auto">
                    {profiles.map((p) => (
                      <button
                        key={p.id}
                        onClick={() => {
                          switchProfile(p.id);
                          setShowProfileMenu(false);
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left transition-all ${
                          p.id === activeChild.id
                            ? "bg-teal text-white font-bold"
                            : "hover:bg-cream-dark/40 text-charcoal/80"
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="text-xs">👶</span>
                          <div>
                            <span className="block text-xs leading-none">{p.name}</span>
                            <span className={`text-[9px] block mt-0.5 leading-none ${p.id === activeChild.id ? "text-white/80" : "text-charcoal/40"}`}>
                              Usia {p.age} thn • {p.zone}
                            </span>
                          </div>
                        </div>
                        {p.id === activeChild.id && <CheckCircle2 className="h-4 w-4" />}
                      </button>
                    ))}
                  </div>

                  <div className="border-t border-cream-dark mt-3 pt-2 space-y-2">
                    <button
                      onClick={() => {
                        setShowProfileMenu(false);
                        router.push("/onboarding");
                      }}
                      className="w-full flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-teal bg-teal-light hover:bg-teal/10 transition"
                    >
                      <Plus className="h-3.5 w-3.5" />
                      <span>Tambah Profil Anak</span>
                    </button>
                    <button
                      onClick={async () => {
                        setShowProfileMenu(false);
                        const supabase = createClient();
                        await supabase.auth.signOut();
                        router.push("/auth/login");
                      }}
                      className="w-full flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-red-600 bg-red-50 hover:bg-red-100 transition"
                    >
                      <LogOut className="h-3.5 w-3.5" />
                      <span>Keluar Akun</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Trial Notification Banner */}
      {subscriptionStatus === "trial" && (
        <div className="bg-yellow-50 border-b border-yellow-100 text-yellow-800 text-xs text-center py-2.5 px-4 font-semibold">
          ⏳ Periode uji coba gratis menyisakan {trialDaysRemaining} hari. Akses penuh 10+ objek aktif.
        </div>
      )}

      {subscriptionStatus === "expired" && (
        <div className="bg-red-50 border-b border-red-100 text-red-800 text-xs text-center py-3 px-4 font-bold flex justify-center items-center gap-3">
          🛑 Masa free trial habis. Silakan orang tua mengaktifkan paket langganan.
          <button onClick={openParentArea} className="bg-red-600 hover:bg-red-700 text-white rounded-lg px-3 py-1 font-bold shadow text-[10px]">
            Langganan Sekarang
          </button>
        </div>
      )}

      <main className="mx-auto max-w-7xl px-6 mt-10">
        
        {/* Child Profile Jumbotron */}
        <div className="rounded-3xl border border-cream-dark bg-white p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4 text-left">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-teal text-white text-2xl font-bold">
              👶
            </div>
            <div>
              <h2 className="text-2xl font-bold text-charcoal">
                Selamat Belajar, {activeChild.name}!
              </h2>
              <div className="mt-1.5 flex flex-col gap-1.5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-teal-light px-3 py-1 text-xs font-bold text-teal">
                    <ZoneIcon className="h-3.5 w-3.5" />
                    {activeChild.zone === "balita" && "Zona Balita (Usia 2-5)"}
                    {activeChild.zone === "anak" && "Zona Anak (Usia 6-8)"}
                    {activeChild.zone === "explorer" && "Zona Explorer (Usia 9-12)"}
                  </span>
                  <span className="text-xs text-charcoal/50 font-medium">
                    • Usia {activeChild.age} tahun
                  </span>
                </div>
                <p className="text-xs text-teal font-semibold italic mt-0.5 animate-pulse">
                  {dailyMotivation}
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            {/* Kartu Counter */}
            <div className="text-center bg-cream/50 border border-cream-dark px-4 py-2.5 rounded-2xl min-w-[100px] flex flex-col justify-between">
              <span className="block text-[10px] font-bold text-charcoal/40 uppercase">Kartu</span>
              {activeChild.unlockedCards.length === 0 ? (
                <>
                  <span className="text-lg font-extrabold text-teal block my-0.5">📦</span>
                  <span className="text-[9px] font-bold text-charcoal/40 leading-none">Koleksi kosong</span>
                </>
              ) : (
                <>
                  <span className="text-lg font-extrabold text-teal block my-0.5">{activeChild.unlockedCards.length}</span>
                  <span className="text-[9px] font-bold text-charcoal/40 leading-none">KARTU</span>
                </>
              )}
            </div>

            {/* Badge Counter */}
            <div className="text-center bg-cream/50 border border-cream-dark px-4 py-2.5 rounded-2xl min-w-[100px] flex flex-col justify-between">
              <span className="block text-[10px] font-bold text-charcoal/40 uppercase">Badge</span>
              {activeChild.badges.length === 0 ? (
                <>
                  <span className="text-lg font-extrabold text-gold block my-0.5">🏅</span>
                  <span className="text-[9px] font-bold text-charcoal/40 leading-none">Mulai belajar!</span>
                </>
              ) : (
                <>
                  <span className="text-lg font-extrabold text-gold block my-0.5">{activeChild.badges.length}</span>
                  <span className="text-[9px] font-bold text-charcoal/40 leading-none">BADGE</span>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Categories / Grid Header */}
        <div className="mt-12 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-cream-dark/60 pb-6">
          <div>
            <h3 className="text-xl font-bold text-charcoal">
              Jelajahi Ciptaan Allah
            </h3>
            <p className="text-xs text-charcoal/60 mt-1.5 font-semibold">
              {activeChild.zone === "balita" && "Mulai petualangan dari Lebah — hewan yang punya rahasia mengagumkan! 🐝"}
              {activeChild.zone === "anak" && "Lebah menyimpan fakta sains yang bikin kamu bilang WOW. Yuk mulai dari sini!"}
              {activeChild.zone === "explorer" && "10 ciptaan Allah yang disebut langsung dalam Al-Qur'an. Mulai eksplorasi!"}
            </p>
          </div>
          <KategoriFilter activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        </div>

        {/* Objects Grid */}
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {objectsData
            .filter((o) => activeCategory === "semua" || o.type === activeCategory)
            .map((obj, idx) => {
            const isCompleted = activeChild.completedObjects.includes(obj.slug);
            const isLocked = false; // Unlocked for review
            
            // Determine next unlock object (first locked object in list)
            const lockedObjects: typeof objectsData = [];
            const nextUnlockSlug = lockedObjects.length > 0 ? lockedObjects[0].slug : null;
            const isNextUnlock = nextUnlockSlug === obj.slug;

            // Get previous object name for hint
            let prevObjName = "";
            if (isNextUnlock && idx > 0) {
              const prevObj = objectsData[idx - 1];
              prevObjName = activeChild.zone === "balita" ? prevObj.name.id : prevObj.name.en;
            }

            return (
              <button
                key={obj.slug}
                id={`card-${obj.slug}`}
                disabled={isLocked && subscriptionStatus === "expired"}
                onClick={() => {
                  if (subscriptionStatus === "expired") {
                    openParentArea();
                    return;
                  }
                  if (isLocked) {
                    alert(`Kamu butuh ${obj.unlockedAtPoints} poin untuk membuka ${obj.name[activeChild.zone === "balita" ? "id" : "en"]}!`);
                    return;
                  }
                  router.push(`/learn/${obj.slug}`);
                }}
                className={`group flex flex-col justify-between text-left rounded-3xl border p-5 shadow-sm transition-all duration-300 relative bg-white min-h-[200px] ${
                  isLocked 
                    ? isNextUnlock
                      ? "border-cream-dark bg-cream-dark/5 cursor-pointer hover:bg-cream-dark/10 card-blur-light" 
                      : "border-cream-dark/50 bg-cream-dark/5 cursor-default card-blur-heavy"
                    : "border-cream-dark hover:-translate-y-1 hover:shadow-md cursor-pointer"
                }`}
              >
                
                {/* Complete Checkmark badge */}
                {isCompleted && (
                  <span className="absolute top-4 right-4 flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-white shadow-sm z-10">
                    <CheckCircle2 className="h-4 w-4" />
                  </span>
                )}

                <div className="w-full flex-grow flex flex-col justify-between h-full">
                  <div>
                    {/* Emoji Icon */}
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cream border border-cream-dark group-hover:scale-105 transition-transform duration-300 text-3xl">
                      {obj.icon}
                    </div>

                    {/* Name */}
                    <h4 className="mt-5 text-lg font-bold text-charcoal">
                      {activeChild.zone === "balita" ? obj.name.id : obj.name.en}
                    </h4>
                    
                    {/* Subtitle / Scientific Name (unlocked only) */}
                    {!isLocked && (
                      <p className="text-[11px] text-charcoal/50 italic leading-none mt-1">
                        {obj.type === "hewan" || obj.type === "tumbuhan" || obj.type === "alam" || obj.type === "tubuh" || obj.type === "langit"
                          ? (obj as ObjectData).scientificName
                          : obj.type === "nabi"
                          ? "Kisah Nabi & Rasul"
                          : (obj as AsmaulHusnaData).arabicWithHarakat}
                      </p>
                    )}

                    {/* Hint text for next unlock */}
                    {isLocked && isNextUnlock && (
                      <p className="text-[10px] text-teal font-bold leading-normal mt-2">
                        🔓 Selesaikan {prevObjName} untuk membuka ini
                      </p>
                    )}
                  </div>

                  {/* Footer status text (unlocked only) */}
                  {!isLocked && (
                    <div className="mt-8 border-t border-cream-dark/60 pt-4 flex items-center justify-between text-[11px] font-semibold">
                      <span className="text-teal-medium">
                        {obj.type === "hewan" || obj.type === "tumbuhan" || obj.type === "alam" || obj.type === "tubuh" || obj.type === "langit"
                          ? (obj as ObjectData).surahName
                          : obj.type === "nabi"
                          ? (obj as NabiData).surahReference
                          : "Asmaul Husna"}
                      </span>
                      <span className="text-green-600">
                        {isCompleted ? "Selesai" : "Mulai"}
                      </span>
                    </div>
                  )}
                </div>

              </button>
            );
          })}
        </div>
      </main>

      {/* Parental Gate Modal */}
      {showParentModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/60 backdrop-blur-sm p-4">
          <div className="w-full max-w-sm rounded-3xl bg-white border border-cream-dark p-6 shadow-2xl relative">
            <h3 className="text-xl font-bold text-charcoal text-center">🔐 Pintu Keamanan Orang Tua</h3>
            <p className="text-xs text-charcoal/60 text-center mt-2">
              Jawab pertanyaan matematika berikut untuk membuktikan Anda adalah orang tua.
            </p>

            <form onSubmit={handleParentGateSubmit} className="mt-6 space-y-4">
              <div className="text-center py-4 bg-cream rounded-2xl border border-cream-dark/50">
                <span className="text-3xl font-extrabold tracking-widest text-teal">
                  {mathQuestion.q} = ?
                </span>
              </div>

              <input
                type="number"
                required
                autoFocus
                placeholder="Hasil perkalian"
                value={mathAnswer}
                onChange={(e) => setMathAnswer(e.target.value)}
                className={`w-full text-center rounded-xl border px-3 py-3 text-lg font-bold outline-none ${
                  mathError ? "border-red-500 focus:ring-red-100" : "border-cream-dark focus:border-teal focus:ring-4 focus:ring-teal/5"
                }`}
              />

              {mathError && (
                <p className="text-xs font-bold text-red-500 text-center">
                  Jawaban salah. Coba lagi!
                </p>
              )}

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setShowParentModal(false)}
                  className="w-1/2 rounded-xl bg-cream-dark/40 py-3 text-center text-xs font-bold text-charcoal"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="w-1/2 rounded-xl bg-teal py-3 text-center text-xs font-bold text-white hover:bg-teal-dark shadow"
                >
                  Masuk
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Welcome Badge Modal with Confetti */}
      {showWelcomePopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/60 backdrop-blur-sm p-4">
          {/* Confetti Particles */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            {Array.from({ length: 45 }).map((_, i) => {
              const left = Math.random() * 100;
              const delay = Math.random() * 2;
              const duration = Math.random() * 2 + 1.5;
              const size = Math.random() * 8 + 6;
              const colors = ["#EAB308", "#14B8A6", "#F97316", "#EC4899", "#3B82F6"];
              const color = colors[Math.floor(Math.random() * colors.length)];
              return (
                <div
                  key={i}
                  className="absolute rounded-full animate-fall"
                  style={{
                    left: `${left}%`,
                    top: `-20px`,
                    width: `${size}px`,
                    height: `${size}px`,
                    backgroundColor: color,
                    animationDelay: `${delay}s`,
                    animationDuration: `${duration}s`,
                    animationIterationCount: "infinite",
                  }}
                />
              );
            })}
          </div>

          {/* Modal Body */}
          <div className="w-full max-w-md rounded-3xl bg-white border border-cream-dark p-8 shadow-2xl relative text-center z-10 scale-in-animation">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-yellow-50 text-gold text-4xl mb-4 animate-bounce">
              🌟
            </div>
            <h3 className="text-2xl font-extrabold text-charcoal">Badge Pertama Kamu!</h3>
            <p className="text-sm text-charcoal/70 mt-3 leading-relaxed">
              Selamat datang, <span className="font-bold text-teal">{activeChild.name}</span>!<br />
              Petualangan ilmu dimulai hari ini! 🌟
            </p>
            
            <div className="mt-6 p-4 bg-cream/50 rounded-2xl border border-cream-dark/50 inline-flex items-center gap-2">
              <span className="text-xl">🎖️</span>
              <span className="text-xs font-bold text-charcoal">Dapatkan Badge: &ldquo;Penjelajah Baru&rdquo;</span>
            </div>

            <div className="mt-8">
              <button
                onClick={async () => {
                  // 1. Scroll to Lebah card
                  document.getElementById("card-lebah")?.scrollIntoView({ behavior: "smooth", block: "center" });
                  // 2. Award Badge
                  await awardBadge("Penjelajah Baru");
                  // 3. Close Popup
                  setShowWelcomePopup(false);
                }}
                className="w-full rounded-2xl bg-teal py-4 text-center text-sm font-bold text-white hover:bg-teal-dark shadow-lg active:scale-[0.98] transition-all"
              >
                Ayo Mulai!
              </button>
            </div>
          </div>
          
          <style>{`
            @keyframes fall {
              0% {
                transform: translateY(0) rotate(0deg);
                opacity: 1;
              }
              100% {
                transform: translateY(100vh) rotate(360deg);
                opacity: 0;
              }
            }
            .animate-fall {
              animation-name: fall;
              animation-timing-function: linear;
            }
            @keyframes scaleIn {
              0% {
                transform: scale(0.9);
                opacity: 0;
              }
              100% {
                transform: scale(1);
                opacity: 1;
              }
            }
            .scale-in-animation {
              animation: scaleIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
            }
          `}</style>
        </div>
      )}

    </div>
  );
}

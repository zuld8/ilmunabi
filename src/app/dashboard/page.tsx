"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useApp } from "@/context/AppContext";
import { objectsData } from "@/data/objects";
import { 
  Sparkles, 
  Gamepad2, 
  Compass, 
  Plus, 
  Award, 
  Settings, 
  Lock, 
  CheckCircle2, 
  Flame
} from "lucide-react";

export default function Dashboard() {
  const router = useRouter();
  const { 
    children: profiles, 
    activeChild, 
    switchProfile, 
    streak, 
    trialDaysRemaining,
    subscriptionStatus
  } = useApp();

  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showParentModal, setShowParentModal] = useState(false);
  const [mathAnswer, setMathAnswer] = useState("");
  const [mathQuestion, setMathQuestion] = useState({ q: "", a: 0 });
  const [mathError, setMathError] = useState(false);

  // Redirect to onboarding if no profiles exist
  useEffect(() => {
    if (profiles.length === 0) {
      router.push("/onboarding");
    }
  }, [profiles, router]);

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

  if (!activeChild) {
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

                  <div className="border-t border-cream-dark mt-3 pt-2">
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
              <div className="mt-1.5 flex flex-wrap items-center gap-2">
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
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-center bg-cream/50 border border-cream-dark px-4 py-2.5 rounded-2xl min-w-[90px]">
              <span className="block text-[10px] font-bold text-charcoal/40 uppercase">Kartu</span>
              <span className="text-lg font-extrabold text-teal">{activeChild.unlockedCards.length}</span>
            </div>
            <div className="text-center bg-cream/50 border border-cream-dark px-4 py-2.5 rounded-2xl min-w-[90px]">
              <span className="block text-[10px] font-bold text-charcoal/40 uppercase">Badge</span>
              <span className="text-lg font-extrabold text-gold">{activeChild.badges.length}</span>
            </div>
          </div>
        </div>

        {/* Categories / Grid Header */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-charcoal">
            Jelajahi Ciptaan Allah
          </h3>
          <p className="text-xs text-charcoal/50 mt-1">
            Kumpulkan poin belajar untuk membuka hewan dan mengoleksi Kartu Ciptaan Allah.
          </p>
        </div>

        {/* Objects Grid */}
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {objectsData.map((obj) => {
            const isCompleted = activeChild.completedObjects.includes(obj.slug);
            const isLocked = activeChild.points < obj.unlockedAtPoints && subscriptionStatus !== "subscribed"; // Lock check based on points (except for subscribers)
            
            return (
              <button
                key={obj.slug}
                disabled={isLocked && subscriptionStatus === "expired"} // force block if expired
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
                className={`group flex flex-col justify-between text-left rounded-3xl border p-5 shadow-sm transition-all duration-300 relative bg-white ${
                  isLocked 
                    ? "border-cream-dark bg-cream-dark/20 opacity-70" 
                    : "border-cream-dark hover:-translate-y-1 hover:shadow-md cursor-pointer"
                }`}
              >
                
                {/* Complete Checkmark badge */}
                {isCompleted && (
                  <span className="absolute top-4 right-4 flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-white shadow-sm">
                    <CheckCircle2 className="h-4 w-4" />
                  </span>
                )}

                {/* Locked indicator */}
                {isLocked && (
                  <span className="absolute top-4 right-4 flex h-6 w-6 items-center justify-center rounded-full bg-charcoal/10 text-charcoal/40">
                    <Lock className="h-3.5 w-3.5" />
                  </span>
                )}

                <div>
                  {/* Emoji Icon */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cream border border-cream-dark group-hover:scale-105 transition-transform duration-300 text-3xl">
                    {obj.icon}
                  </div>

                  {/* Name */}
                  <h4 className="mt-5 text-lg font-bold text-charcoal">
                    {activeChild.zone === "balita" ? obj.name.id : obj.name.en}
                  </h4>
                  
                  {/* Scientific Name */}
                  <p className="text-[11px] text-charcoal/50 italic leading-none mt-1">
                    {obj.scientificName}
                  </p>
                </div>

                {/* Footer status text */}
                <div className="mt-8 border-t border-cream-dark/60 pt-4 flex items-center justify-between text-[11px] font-semibold">
                  <span className="text-teal-medium">{obj.surahName}</span>
                  {isLocked ? (
                    <span className="text-orange-500 flex items-center gap-0.5">
                      <Lock className="h-2.5 w-2.5" />
                      <span>{obj.unlockedAtPoints} Pts</span>
                    </span>
                  ) : (
                    <span className="text-green-600">
                      {isCompleted ? "Selesai" : "Mulai"}
                    </span>
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

    </div>
  );
}

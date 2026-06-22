"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useApp, ChildProfile } from "@/context/AppContext";

import { 
  ArrowLeft, 
  TrendingUp, 
  Clock, 
  Award, 
  HelpCircle, 
  ShieldCheck, 
  Trash2, 
  Sparkles, 
  BookOpen, 
  CreditCard,
  CheckCircle2
} from "lucide-react";

export default function ParentDashboard() {
  const router = useRouter();
  const { 
    children: profiles, 
    trialDaysRemaining, 
    subscriptionStatus, 
    subscribe, 
    deleteProfile 
  } = useApp();

  const [selectedChildId, setSelectedChildId] = useState<string | null>(
    profiles.length > 0 ? profiles[0].id : null
  );

  const selectedChild = profiles.find((p) => p.id === selectedChildId) || null;

  // Mock study minutes: Balita=3m, Anak=5m, Explorer=10m per completed object
  const calculateMinutes = (profile: ChildProfile) => {
    let multiplier = 3;
    if (profile.zone === "anak") multiplier = 5;
    if (profile.zone === "explorer") multiplier = 10;
    return profile.completedObjects.length * multiplier;
  };

  // Generate discussion starters based on completed objects
  const getDiscussionStarters = (profile: ChildProfile) => {
    const starters: { objectName: string; question: string }[] = [];

    profile.completedObjects.forEach((slug) => {
      if (slug === "lebah") {
        starters.push({
          objectName: "Lebah (An-Nahl)",
          question: `Tanyakan pada ${profile.name}: "Mengapa lebah berkomunikasi dengan menari? Dan bagaimana Al-Qur'an sudah mengisyaratkan tugas lebah membuat sarang 14 abad yang lalu?"`
        });
      }
      if (slug === "semut") {
        starters.push({
          objectName: "Semut (An-Naml)",
          question: `Tanyakan pada ${profile.name}: "Siapakah yang memimpin evakuasi koloni semut saat pasukan Nabi Sulaiman lewat? Mengapa semut pengintai tersebut berjenis kelamin betina?"`
        });
      }
      if (slug === "laba-laba") {
        starters.push({
          objectName: "Laba-laba (Al-Ankabut)",
          question: `Tanyakan pada ${profile.name}: "Sutra laba-laba kan sangat kuat melebihi baja, tapi mengapa Allah menyebut sarang laba-laba sebagai rumah yang paling rapuh secara kekeluargaan?"`
        });
      }
      if (slug === "unta") {
        starters.push({
          objectName: "Unta (Al-Ghashiyah)",
          question: `Tanyakan pada ${profile.name}: "Mengapa sel darah merah unta berbentuk oval dan sangat lentur? Apa hubungannya dengan kemampuannya meminum 100 liter air sekaligus?"`
        });
      }
      if (slug === "nyamuk") {
        starters.push({
          objectName: "Nyamuk (Al-Baqarah)",
          question: `Tanyakan pada ${profile.name}: "Betulkah ada makhluk hidup mikroskopis yang menumpang hidup di atas kepala nyamuk? Bagaimana hal ini menjelaskan Surah Al-Baqarah ayat 26?"`
        });
      }
    });

    // Default starter if no objects completed
    if (starters.length === 0) {
      starters.push({
        objectName: "Mulai Diskusi",
        question: `Ajak ${profile.name} keluar ke teras atau taman. Amati semut yang berjalan berbaris, lalu diskusikan bagaimana Allah mengatur kerja sama koloni mereka dengan sangat rapi.`
      });
    }

    return starters;
  };

  const handleSubscribeClick = () => {
    subscribe();
    alert("Terima kasih! Pembayaran simulasi sukses. Akun Anda kini aktif penuh.");
  };

  return (
    <div className="min-h-screen bg-cream pb-16">
      
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-cream-dark/60 bg-cream/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <button
            onClick={() => router.push("/dashboard")}
            className="inline-flex items-center gap-2 text-sm font-bold text-charcoal/80 hover:text-teal transition"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Kembali ke Belajar Anak</span>
          </button>
          <span className="text-sm font-extrabold text-teal">Dashboard Pemantau Orang Tua</span>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Children selector & Subscriptions */}
        <div className="space-y-8">
          
          {/* Children List */}
          <div className="bg-white border border-cream-dark rounded-3xl p-6 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-charcoal flex items-center gap-2">
              <span className="text-lg">👶</span> Anak Anda
            </h3>
            
            <div className="space-y-2">
              {profiles.map((p) => (
                <div
                  key={p.id}
                  className={`w-full flex items-center justify-between p-3.5 rounded-2xl border transition-all ${
                    selectedChildId === p.id
                      ? "border-teal bg-teal-light/20"
                      : "border-cream-dark bg-white hover:bg-cream/40"
                  }`}
                >
                  <button
                    onClick={() => setSelectedChildId(p.id)}
                    className="flex-grow text-left flex items-center gap-3"
                  >
                    <div className="h-10 w-10 rounded-xl bg-teal/10 text-teal flex items-center justify-center font-bold">
                      {p.name.substring(0,2).toUpperCase()}
                    </div>
                    <div>
                      <span className="block font-bold text-sm text-charcoal">{p.name}</span>
                      <span className="block text-[10px] text-charcoal/40 font-semibold uppercase mt-0.5">
                        Usia {p.age} • {p.zone}
                      </span>
                    </div>
                  </button>

                  <button
                    onClick={() => {
                      if (confirm(`Hapus profil ${p.name}? Semua data poin akan hilang.`)) {
                        deleteProfile(p.id);
                        if (selectedChildId === p.id) {
                          const remaining = profiles.filter((rem) => rem.id !== p.id);
                          setSelectedChildId(remaining.length > 0 ? remaining[0].id : null);
                        }
                      }
                    }}
                    className="p-2 text-charcoal/30 hover:text-red-500 rounded-lg hover:bg-red-50 transition"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>

            <button
              onClick={() => router.push("/onboarding")}
              className="w-full text-center border-2 border-dashed border-cream-dark hover:border-teal rounded-2xl py-3.5 text-xs font-bold text-teal transition"
            >
              + Tambah Profil Anak
            </button>
          </div>

          {/* Subscription Card */}
          <div className="bg-white border border-cream-dark rounded-3xl p-6 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-charcoal flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-teal" /> Status Berlangganan
            </h3>

            {subscriptionStatus === "subscribed" ? (
              <div className="rounded-2xl bg-green-50 border border-green-100 p-4 space-y-3">
                <div className="flex items-center gap-2 text-green-800 font-bold text-sm">
                  <ShieldCheck className="h-5 w-5 text-green-600 fill-current" />
                  <span>Akun Premium Aktif</span>
                </div>
                <p className="text-xs text-green-700 leading-relaxed">
                  Terima kasih telah berlangganan IlmuNabi. Semua 10+ materi ciptaan Allah dan fitur kuis terbuka penuh untuk seluruh keluarga Anda.
                </p>
              </div>
            ) : (
              <div className="rounded-2xl bg-yellow-50 border border-yellow-100 p-4 space-y-4">
                <div className="flex justify-between items-center text-xs font-bold text-yellow-800">
                  <span>Masa Uji Coba (Free Trial)</span>
                  <span>{trialDaysRemaining} Hari Tersisa</span>
                </div>
                <p className="text-xs text-yellow-700 leading-relaxed">
                  Uji coba gratis memberi Anda akses penuh. Aktifkan langganan bulanan sekarang untuk mendukung pengembangan IlmuNabi.
                </p>
                <button
                  onClick={handleSubscribeClick}
                  className="w-full rounded-xl bg-teal py-3 text-center text-xs font-bold text-white shadow hover:bg-teal-dark transition"
                >
                  Aktifkan Premium (Rp 79.000 / bln)
                </button>
              </div>
            )}
          </div>

        </div>

        {/* Right Column: Statistics & Discussion Starters */}
        <div className="lg:col-span-2 space-y-8">
          
          {selectedChild ? (
            <>
              {/* Statistics Panel */}
              <div className="bg-white border border-cream-dark rounded-3xl p-6 md:p-8 shadow-sm space-y-6">
                <h3 className="text-lg font-bold text-charcoal flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-teal" /> Progress Belajar: {selectedChild.name}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Minutes */}
                  <div className="bg-cream/40 border border-cream-dark p-5 rounded-2xl flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-teal/10 text-teal flex items-center justify-center">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold text-charcoal/40 uppercase">Durasi Belajar</span>
                      <span className="block text-2xl font-extrabold text-charcoal">{calculateMinutes(selectedChild)} Menit</span>
                    </div>
                  </div>

                  {/* Points */}
                  <div className="bg-cream/40 border border-cream-dark p-5 rounded-2xl flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-yellow-50 text-gold flex items-center justify-center">
                      <Award className="h-6 w-6" />
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold text-charcoal/40 uppercase">Poin Dikumpulkan</span>
                      <span className="block text-2xl font-extrabold text-charcoal">{selectedChild.points} Pts</span>
                    </div>
                  </div>

                  {/* Completed */}
                  <div className="bg-cream/40 border border-cream-dark p-5 rounded-2xl flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center">
                      <CheckCircle2 className="h-6 w-6" />
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold text-charcoal/40 uppercase">Objek Selesai</span>
                      <span className="block text-2xl font-extrabold text-charcoal">{selectedChild.completedObjects.length} / 10</span>
                    </div>
                  </div>
                </div>

                {/* Badge showcase */}
                {selectedChild.badges.length > 0 && (
                  <div className="border-t border-cream-dark pt-6 space-y-3">
                    <h4 className="text-xs font-bold text-charcoal/50 uppercase tracking-wider">Badge Penghargaan</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedChild.badges.map((badge, idx) => (
                        <span key={idx} className="inline-flex items-center gap-1.5 rounded-full bg-gold-light/40 border border-gold/30 px-3.5 py-1.5 text-xs font-bold text-yellow-800">
                          <Sparkles className="h-3.5 w-3.5 text-gold" />
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Discussion Starters Panel */}
              <div className="bg-white border border-cream-dark rounded-3xl p-6 md:p-8 shadow-sm space-y-6">
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-charcoal flex items-center gap-2">
                    <HelpCircle className="h-5 w-5 text-teal" /> Pertanyaan Diskusi Keluarga
                  </h3>
                  <p className="text-xs text-charcoal/50">
                    Gunakan pemantik ini untuk berdiskusi di meja makan berdasarkan materi yang dipelajari anak minggu ini.
                  </p>
                </div>

                <div className="space-y-4">
                  {getDiscussionStarters(selectedChild).map((starter, idx) => (
                    <div key={idx} className="p-5 border border-cream-dark rounded-2xl bg-cream/20 space-y-2">
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold text-teal bg-teal-light px-2.5 py-0.5 rounded-full uppercase">
                        <BookOpen className="h-3 w-3" />
                        {starter.objectName}
                      </span>
                      <p className="text-sm font-semibold leading-relaxed text-charcoal">
                        {starter.question}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className="bg-white border border-cream-dark rounded-3xl p-12 shadow-sm text-center">
              <span className="text-3xl">👶</span>
              <p className="text-sm font-bold text-charcoal/50 mt-3">Belum ada anak terdaftar. Klik &ldquo;+ Tambah Profil Anak&rdquo; di sebelah kiri.</p>
            </div>
          )}

        </div>

      </main>
    </div>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useApp } from "@/context/AppContext";
import { Sparkles, Gamepad2, Compass, ArrowRight, UserPlus } from "lucide-react";

export default function Onboarding() {
  const router = useRouter();
  const { addProfile } = useApp();

  const [name, setName] = useState("");
  const [ageStr, setAgeStr] = useState("");
  const [selectedZone, setSelectedZone] = useState<"balita" | "anak" | "explorer">("balita");
  const [isOverride, setIsOverride] = useState(false);

  const age = parseInt(ageStr, 10);

  // Auto suggest zone based on age if not overridden by parent
  useEffect(() => {
    if (isOverride || isNaN(age)) return;
    
    if (age <= 5) {
      setSelectedZone("balita");
    } else if (age >= 6 && age <= 8) {
      setSelectedZone("anak");
    } else {
      setSelectedZone("explorer");
    }
  }, [age, isOverride]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || isNaN(age) || age <= 0) return;

    addProfile(name.trim(), age, selectedZone);
    router.push("/dashboard");
  };

  const zones = [
    {
      id: "balita",
      name: "Zona Balita",
      ageText: "2 - 5 tahun",
      icon: Sparkles,
      desc: "Audio narasi otomatis, tombol besar, kuis gambar lucu.",
      color: "border-orange-200 text-orange-600 bg-orange-50/50",
      activeColor: "ring-4 ring-orange-500/20 border-orange-500 bg-orange-50",
    },
    {
      id: "anak",
      name: "Zona Anak",
      ageText: "6 - 8 tahun",
      icon: Gamepad2,
      desc: "Teks pendek + ilustrasi, kuis pilihan ganda, ayat Qur'an terjemahan.",
      color: "border-teal-200 text-teal bg-teal-light/30",
      activeColor: "ring-4 ring-teal/20 border-teal bg-teal-light/50",
    },
    {
      id: "explorer",
      name: "Zona Explorer",
      ageText: "9 - 12 tahun",
      icon: Compass,
      desc: "Anatomi mendalam, kuis drag-and-drop, keterkaitan sains-Islam WOW.",
      color: "border-yellow-200 text-yellow-700 bg-yellow-50/50",
      activeColor: "ring-4 ring-gold/20 border-gold bg-yellow-50",
    },
  ] as const;

  return (
    <div className="min-h-screen bg-cream flex items-center justify-center py-12 px-6">
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-teal-light/20 to-transparent -z-10" />

      <div className="w-full max-w-2xl bg-white rounded-3xl border border-cream-dark shadow-xl p-8 md:p-12">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-light text-teal">
            <UserPlus className="h-6 w-6" />
          </div>
          <h1 className="text-3xl font-bold text-charcoal">Buat Profil Belajar Anak</h1>
          <p className="text-sm text-charcoal/60 max-w-md mx-auto">
            Masukkan nama dan usia anak untuk merekomendasikan materi pembelajaran yang paling sesuai.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-10 space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Input Name */}
            <div className="md:col-span-2 space-y-2">
              <label htmlFor="name" className="text-sm font-bold text-charcoal">
                Nama Panggilan Anak
              </label>
              <input
                id="name"
                type="text"
                required
                placeholder="Contoh: Yusuf"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-2xl border border-cream-dark px-4 py-4 text-base focus:border-teal focus:ring-2 focus:ring-teal/10 outline-none transition-all"
              />
            </div>

            {/* Input Age */}
            <div className="space-y-2">
              <label htmlFor="age" className="text-sm font-bold text-charcoal">
                Usia Anak (Tahun)
              </label>
              <input
                id="age"
                type="number"
                required
                min="2"
                max="16"
                placeholder="Contoh: 7"
                value={ageStr}
                onChange={(e) => {
                  setAgeStr(e.target.value);
                  setIsOverride(false); // Reset override to recalculate suggestion
                }}
                className="w-full rounded-2xl border border-cream-dark px-4 py-4 text-base focus:border-teal focus:ring-2 focus:ring-teal/10 outline-none transition-all"
              />
            </div>
          </div>

          {/* Zone Selector */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm font-bold text-charcoal">Zona Belajar yang Disarankan</span>
              {!isNaN(age) && age > 0 && (
                <span className="text-xs font-semibold text-teal bg-teal-light px-2.5 py-1 rounded-full">
                  Rekomendasi Otomatis
                </span>
              )}
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {zones.map((zone) => {
                const Icon = zone.icon;
                const isActive = selectedZone === zone.id;
                
                return (
                  <button
                    key={zone.id}
                    type="button"
                    onClick={() => {
                      setSelectedZone(zone.id);
                      setIsOverride(true);
                    }}
                    className={`flex flex-col text-left p-5 rounded-2xl border-2 transition-all ${
                      isActive ? zone.activeColor : "border-cream-dark hover:border-cream-dark/80 bg-white"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div className={`p-1.5 rounded-lg ${isActive ? "bg-white" : ""}`}>
                        <Icon className="h-4.5 w-4.5" />
                      </div>
                      <div>
                        <span className="block font-bold text-sm text-charcoal leading-tight">
                          {zone.name}
                        </span>
                        <span className="block text-[10px] text-charcoal/50 font-medium">
                          {zone.ageText}
                        </span>
                      </div>
                    </div>
                    <p className="mt-3 text-xs text-charcoal/60 leading-relaxed">
                      {zone.desc}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Submit */}
          <div className="pt-4 border-t border-cream-dark">
            <button
              type="submit"
              disabled={!name.trim() || !ageStr}
              className="w-full flex items-center justify-center gap-2 rounded-2xl bg-teal py-4 text-center font-bold text-white shadow-lg hover:bg-teal-dark hover:shadow-xl active:scale-95 disabled:opacity-50 disabled:pointer-events-none transition-all duration-200"
            >
              <span>Mulai Belajar</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

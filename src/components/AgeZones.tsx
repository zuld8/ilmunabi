"use client";

import React from "react";
import { Sparkles, Gamepad2, Compass, ArrowRight } from "lucide-react";

interface AgeZonesProps {
  lang: "id" | "en";
}

export default function AgeZones({ lang }: AgeZonesProps) {
  const content = {
    id: {
      sectionId: "cara-kerja",
      title: "Satu Akun, Tiga Zona Belajar",
      subtitle: "Setiap tahap tumbuh kembang membutuhkan bahasa dan metode yang berbeda. IlmuNabi menyesuaikan konten agar pas dengan daya pikir anak Anda.",
      zones: [
        {
          age: "Usia 2–5 Tahun",
          name: "Zona Balita",
          icon: Sparkles,
          color: "bg-orange-50 text-orange-600 border-orange-100",
          accentColor: "bg-orange-500",
          features: [
            "Gambar besar & navigasi super simpel",
            "Audio narasi otomatis langsung main",
            "Animasi sayap & gerak interaktif sederhana",
            "Kuis pencarian gambar (bebas bacaan kaku)",
          ],
          duration: "Durasi: maks. 3 menit per objek",
        },
        {
          age: "Usia 6–8 Tahun",
          name: "Zona Anak",
          icon: Gamepad2,
          color: "bg-teal-light text-teal border-teal-light/60",
          accentColor: "bg-teal",
          features: [
            "Paragraf pendek dengan ilustrasi menarik",
            "3–5 poin fakta menarik yang mudah diingat",
            "Kuis pilihan ganda yang memicu berpikir kritis",
            "Koneksi 1 ayat Qur'an terjemahan langsung",
          ],
          duration: "Durasi: maks. 5 menit per objek",
        },
        {
          age: "Usia 9–12 Tahun",
          name: "Zona Explorer",
          icon: Compass,
          color: "bg-yellow-50 text-yellow-700 border-yellow-100",
          accentColor: "bg-gold",
          features: [
            "Eksplorasi dalam: anatomi, siklus hidup, habitat",
            "Ayat Qur'an + asbabun nuzul & konteks historis",
            "Kuis interaktif kompleks (drag & drop)",
            "Section khusus 'Fakta WOW': jembatan sains ke Islam",
          ],
          duration: "Belajar mendalam tanpa batas waktu",
        },
      ],
      cta: "Coba Sekarang"
    },
    en: {
      sectionId: "cara-kerja",
      title: "One Account, Three Learning Zones",
      subtitle: "Each stage of growth requires a different language and method. IlmuNabi tailors content to match your child's cognitive development.",
      zones: [
        {
          age: "Ages 2–5",
          name: "Toddler Zone",
          icon: Sparkles,
          color: "bg-orange-50 text-orange-600 border-orange-100",
          accentColor: "bg-orange-500",
          features: [
            "Large visuals & ultra-simple navigation",
            "Autoplay voice narration for toddlers",
            "Simple wing animations & interactive gestures",
            "Toddler-friendly image-based quizzes",
          ],
          duration: "Duration: max 3 mins per object",
        },
        {
          age: "Ages 6–8",
          name: "Kids Zone",
          icon: Gamepad2,
          color: "bg-teal-light text-teal border-teal-light/60",
          accentColor: "bg-teal",
          features: [
            "Short text blocks with bright illustrations",
            "3–5 quick bulleted scientific facts",
            "Simple multiple-choice quiz format",
            "Direct simple translation of 1 Quranic verse",
          ],
          duration: "Duration: max 5 mins per object",
        },
        {
          age: "Ages 9–12",
          name: "Explorer Zone",
          icon: Compass,
          color: "bg-yellow-50 text-yellow-700 border-yellow-100",
          accentColor: "bg-gold",
          features: [
            "Deep dives: anatomy, lifecycle, and habitats",
            "Quranic verses + historical context & relevance",
            "Complex interactive quiz mechanics",
            "The 'WOW Factor' section: science to Islam bridge",
          ],
          duration: "Self-paced deep-dive exploration",
        },
      ],
      cta: "Try Now"
    },
  };

  const t = content[lang];

  return (
    <section id={t.sectionId} className="bg-cream-dark/30 py-20 border-y border-cream-dark/50">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
            {t.title}
          </h2>
          <p className="mt-4 text-lg text-charcoal/80">
            {t.subtitle}
          </p>
        </div>

        {/* Zones Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {t.zones.map((zone, idx) => {
            const Icon = zone.icon;
            return (
              <div
                key={idx}
                className="group flex flex-col justify-between rounded-3xl border border-cream-dark bg-white p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  {/* Badge */}
                  <div className="flex items-center justify-between">
                    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-bold ${zone.color}`}>
                      {zone.age}
                    </span>
                    <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${zone.accentColor} text-white`}>
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  {/* Zone Name */}
                  <h3 className="mt-6 text-2xl font-bold text-charcoal">
                    {zone.name}
                  </h3>

                  {/* Bullet points */}
                  <ul className="mt-6 space-y-3">
                    {zone.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-sm text-charcoal/70">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-medium" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer / Duration Info */}
                <div className="mt-8 border-t border-cream-dark pt-6">
                  <div className="flex items-center justify-between text-xs font-medium text-charcoal/50">
                    <span>{zone.duration}</span>
                    <a href="#pricing" className="flex items-center gap-1 text-teal font-semibold group-hover:gap-1.5 transition-all">
                      <span>{t.cta}</span>
                      <ArrowRight className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

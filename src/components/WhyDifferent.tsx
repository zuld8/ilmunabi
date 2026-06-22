"use client";

import React from "react";
import { Compass, Lightbulb, HeartHandshake, X, Check } from "lucide-react";

interface WhyDifferentProps {
  lang: "id" | "en";
}

export default function WhyDifferent({ lang }: WhyDifferentProps) {
  const content = {
    id: {
      sectionId: "kenapa-beda",
      title: "Kenapa IlmuNabi Berbeda?",
      subtitle:
        "Anak Anda tidak perlu diyakinkan untuk percaya. Cukup tunjukkan fakta yang cukup mengagumkan — dan mereka akan sampai sendiri.",
      beforeTitle: "Sebelum IlmuNabi (✗)",
      beforeText: "“Lebah disebut di Al-Qur'an, kita harus percaya.”",
      afterTitle: "Sesudah IlmuNabi (✓)",
      afterText: "Anak membaca fakta waggle dance, terdiam, lalu bertanya sendiri: “Kok bisa Al-Qur'an tahu ini?”",
      items: [
        {
          title: "Sains Dulu, Iman Menyusul",
          desc: "Bukan terbalik. Anak diajak mengeksplorasi fakta sains empiris yang nyata dahulu secara logis, lalu menyadari kebenaran wahyu Qur'an secara alami.",
          icon: Compass,
        },
        {
          title: "Bebas Dogma & Hafalan Buta",
          desc: "Kami fokus pada pemahaman 'mengapa' dan 'bagaimana', bukan sekadar menghafal teks tanpa memahami indahnya ciptaan Sang Pencipta.",
          icon: Lightbulb,
        },
        {
          title: "Diferensiasi Orang Tua Aktif",
          desc: "Melalui dashboard interaktif, orang tua mendapatkan ringkasan pelajaran anak serta pertanyaan pemantik diskusi hangat di meja makan.",
          icon: HeartHandshake,
        },
      ],
    },
    en: {
      sectionId: "kenapa-beda",
      title: "Why is IlmuNabi Different?",
      subtitle:
        "Your child doesn't need to be convinced to believe. Just show them facts that are awe-inspiring enough — and they will arrive there on their own.",
      beforeTitle: "Before IlmuNabi (✗)",
      beforeText: "“Bees are mentioned in the Qur'an, so we must believe it.”",
      afterTitle: "After IlmuNabi (✓)",
      afterText: "Child reads the waggle dance science, stays silent in awe, then asks: “How could the Qur'an know this?”",
      items: [
        {
          title: "Science First, Faith Next",
          desc: "Not the other way around. Children explore tangible, empirical scientific facts first, then discover the beauty of Quranic truth naturally.",
          icon: Compass,
        },
        {
          title: "No Blind Rote Memorization",
          desc: "We focus on 'why' and 'how' rather than memorizing scriptures without understanding the design of the Creator.",
          icon: Lightbulb,
        },
        {
          title: "Engaged Parent Collaboration",
          desc: "Via our dashboard, parents receive weekly summaries and curated discussion prompts to foster warm family conversations.",
          icon: HeartHandshake,
        },
      ],
    },
  };

  const t = content[lang];

  return (
    <section id={t.sectionId} className="bg-cream-dark/20 py-20">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
            {t.title}
          </h2>
          <p className="mt-4 text-lg text-charcoal/80 leading-relaxed font-semibold">
            {t.subtitle}
          </p>
        </div>

        {/* Before / After Showcase Cards */}
        <div className="mt-12 mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Before Card */}
          <div className="flex flex-col justify-between rounded-3xl border border-red-100 bg-red-50/20 p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-2 text-red-600 font-bold text-sm">
              <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-red-100 text-red-600 font-extrabold text-xs">
                <X className="h-3.5 w-3.5" />
              </div>
              <span>{t.beforeTitle}</span>
            </div>
            <p className="mt-4 text-base font-semibold leading-relaxed text-charcoal/70 italic">
              {t.beforeText}
            </p>
          </div>

          {/* After Card */}
          <div className="flex flex-col justify-between rounded-3xl border-2 border-teal bg-teal-light/20 p-6 md:p-8 shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-teal text-white text-[9px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
              Pendekatan Kami
            </div>
            
            <div className="flex items-center gap-2 text-teal font-bold text-sm">
              <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-teal text-white font-extrabold text-xs">
                <Check className="h-3.5 w-3.5" />
              </div>
              <span>{t.afterTitle}</span>
            </div>
            <p className="mt-4 text-base font-bold leading-relaxed text-charcoal">
              {t.afterText}
            </p>
          </div>

        </div>

        {/* Feature Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {t.items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-start rounded-3xl border border-cream-dark bg-cream p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Icon wrapper */}
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal text-white">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mt-6 text-xl font-bold text-charcoal">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/70">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

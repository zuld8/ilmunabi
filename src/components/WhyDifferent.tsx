"use client";

import React from "react";
import { Compass, Lightbulb, HeartHandshake } from "lucide-react";

interface WhyDifferentProps {
  lang: "id" | "en";
}

export default function WhyDifferent({ lang }: WhyDifferentProps) {
  const content = {
    id: {
      sectionId: "kenapa-beda",
      title: "Kenapa IlmuNabi Berbeda?",
      subtitle:
        "Kami merombak cara pendidikan agama diajarkan. Kami tidak mendikte keyakinan anak; kami menumbuhkannya secara logis melalui kekaguman sains.",
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
        "We are redesigning how Islamic education is taught. We do not impose faith on children; we nurture it logically through scientific wonder.",
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
          <p className="mt-4 text-lg text-charcoal/80 leading-relaxed">
            {t.subtitle}
          </p>
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

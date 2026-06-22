"use client";

import React from "react";
import { Star } from "lucide-react";

interface SocialProofProps {
  lang: "id" | "en";
}

export default function SocialProof({ lang }: SocialProofProps) {
  const content = {
    id: {
      title: "Dipercaya Oleh Orang Tua Muslim",
      subtitle: "Lihat bagaimana IlmuNabi mengubah rasa ingin tahu anak menjadi kecintaan pada sains dan Sang Pencipta.",
      testimonials: [
        {
          quote:
            "Biasanya buku agama anak cuma cerita hafalan. Di IlmuNabi, anak saya belajar metamorfosis lebah dulu secara biologi, baru paham kenapa Allah sebut lebah di Al-Qur'an. Masuk akal banget buat anak umur 9 tahun!",
          author: "Fatimah Rahma",
          role: "Ibu dari Yusuf (9 tahun) & Aisyah (5 tahun)",
          avatarInitials: "FR",
          stars: 5,
        },
        {
          quote:
            "Zona Balitanya keren! Audio narasi otomatis bikin anak umur 4 tahun saya bisa eksplor sendiri tanpa kecanduan screen-time pasif. Dia heboh nunjuk sayap lebah yang gerak-gerak.",
          author: "Budi Santoso",
          role: "Ayah dari Ibrahim (4 tahun)",
          avatarInitials: "BS",
          stars: 5,
        },
        {
          quote:
            "Dashboard orang tuanya sangat membantu. Saya dapat pertanyaan pemantik diskusi mingguan untuk mengobrol santai dengan anak di meja makan. Ini game changer!",
          author: "Lina Marlina",
          role: "Ibu dari Maryam (7 tahun)",
          avatarInitials: "LM",
          stars: 5,
        },
      ],
    },
    en: {
      title: "Trusted by Modern Muslim Parents",
      subtitle: "See how IlmuNabi turns children's curiosity into a deep love for science and the Creator.",
      testimonials: [
        {
          quote:
            "Usually, kids' Islamic books are just about rote memorization. On IlmuNabi, my son learns bee metamorphosis biologically first, then understands why Allah mentions bees in the Qur'an. It makes perfect sense for a 9-year-old!",
          author: "Fatimah Rahma",
          role: "Mother of Yusuf (9) & Aisyah (5)",
          avatarInitials: "FR",
          stars: 5,
        },
        {
          quote:
            "The Toddler Zone is amazing! The autoplay audio lets my 4-year-old explore independently without passive screen addiction. He got so excited pointing at the animated bee wings.",
          author: "Budi Santoso",
          role: "Father of Ibrahim (4)",
          avatarInitials: "BS",
          stars: 5,
        },
        {
          quote:
            "The Parent Dashboard is extremely helpful. I receive weekly conversation starters to chat with my kids at the dinner table. It's a total game changer!",
          author: "Lina Marlina",
          role: "Mother of Maryam (7)",
          avatarInitials: "LM",
          stars: 5,
        },
      ],
    },
  };

  const t = content[lang];

  return (
    <section className="bg-cream py-20 border-t border-cream-dark/40">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
            {t.title}
          </h2>
          <p className="mt-4 text-lg text-charcoal/80">
            {t.subtitle}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {t.testimonials.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-3xl border border-cream-dark/60 bg-white p-8 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div>
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(item.stars)].map((_, sIdx) => (
                    <Star key={sIdx} className="h-4.5 w-4.5 fill-gold text-gold" />
                  ))}
                </div>
                {/* Quote */}
                <p className="mt-6 text-sm leading-relaxed text-charcoal/80 italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-8 flex items-center gap-4 border-t border-cream-dark pt-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal/10 text-xs font-bold text-teal">
                  {item.avatarInitials}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-charcoal">{item.author}</h4>
                  <p className="text-[11px] text-charcoal/60 mt-0.5">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, ArrowRight, ShieldCheck } from "lucide-react";

interface HeroSectionProps {
  lang: "id" | "en";
}

export default function HeroSection({ lang }: HeroSectionProps) {
  const content = {
    id: {
      tagline: "Sains Pertama, Iman Selamanya",
      titlePre: "Ajarkan Anak Mengagumi ",
      titleHighlight: "Ciptaan Allah",
      titlePost: " Melalui Keajaiban Sains",
      subtitle:
        "Lelah dengan konten agama yang kaku atau dogmatis? IlmuNabi mengajak anak usia 2–12 tahun bertualang memahami sains di balik alam semesta demi menumbuhkan tauhid yang kokoh dan rasional.",
      cta: "Mulai Free Trial 7 Hari",
      subCta: "Bebas batalkan kapan saja • Tanpa kartu kredit",
      badgeText: "Untuk Orang Tua Muslim Modern",
    },
    en: {
      tagline: "Science First, Faith Always",
      titlePre: "Help Your Child Marvel at ",
      titleHighlight: "Allah's Creation",
      titlePost: " Through the Wonders of Science",
      subtitle:
        "Tired of rigid, dogmatic religious resources? IlmuNabi invites kids aged 2–12 to explore the scientific principles behind nature, building a logical, awe-inspired faith.",
      cta: "Start 7-Day Free Trial",
      subCta: "Cancel anytime • No credit card required",
      badgeText: "For Modern Muslim Parents",
    },
  };

  const t = content[lang];

  return (
    <section className="relative overflow-hidden bg-cream py-16 md:py-24">
      {/* Decorative background blobs */}
      <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-teal-light/40 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-gold-light/30 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left Column: Content */}
          <div className="flex flex-col items-start text-left">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-1.5 rounded-full bg-teal-light px-3.5 py-1.5 text-xs font-semibold text-teal">
              <Sparkles className="h-3.5 w-3.5 text-gold" />
              {t.badgeText}
            </div>

            {/* Headline */}
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-charcoal sm:text-5xl md:text-6xl leading-[1.15]">
              {t.titlePre}
              <span className="relative inline-block text-teal">
                {t.titleHighlight}
                <span className="absolute left-0 bottom-1.5 h-3 w-full bg-gold/20 -z-10 rounded-full" />
              </span>
              {t.titlePost}
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
              {t.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
              <a
                href="#pricing"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-teal px-8 py-4 text-base font-bold text-white shadow-lg hover:bg-teal-dark hover:shadow-xl active:scale-95 transition-all duration-200"
              >
                {t.cta}
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Sub-CTA text */}
            <div className="mt-4 flex items-center gap-2 text-sm text-charcoal/60">
              <ShieldCheck className="h-4 w-4 text-teal-medium" />
              <span>{t.subCta}</span>
            </div>
          </div>

          {/* Right Column: Illustration */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[480px] aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-cream-dark/40 flex items-center justify-center hover:scale-[1.01] transition-transform duration-300">
              <Image
                src="/hero_illustration.png"
                alt="IlmuNabi Illustration"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 480px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

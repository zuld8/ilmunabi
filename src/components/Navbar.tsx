"use client";

import React from "react";
import { BookOpen } from "lucide-react";

interface NavbarProps {
  lang: "id" | "en";
  setLang: (lang: "id" | "en") => void;
}

export default function Navbar({ lang, setLang }: NavbarProps) {
  const content = {
    id: {
      howItWorks: "Cara Kerja",
      whyDifferent: "Kenapa Beda",
      pricing: "Paket Belajar",
      cta: "Mulai Free Trial",
    },
    en: {
      howItWorks: "How it Works",
      whyDifferent: "Why Different",
      pricing: "Pricing",
      cta: "Start Free Trial",
    },
  };

  const t = content[lang];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-cream-dark/60 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal text-gold-light group-hover:scale-105 transition-transform duration-300">
            <BookOpen className="h-6 w-6 text-gold" />
          </div>
          <span className="text-xl font-bold tracking-tight text-teal">
            Ilmu<span className="text-gold">Nabi</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#cara-kerja"
            className="text-sm font-medium text-charcoal/80 hover:text-teal transition-colors duration-200"
          >
            {t.howItWorks}
          </a>
          <a
            href="#kenapa-beda"
            className="text-sm font-medium text-charcoal/80 hover:text-teal transition-colors duration-200"
          >
            {t.whyDifferent}
          </a>
          <a
            href="#pricing"
            className="text-sm font-medium text-charcoal/80 hover:text-teal transition-colors duration-200"
          >
            {t.pricing}
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Lang Toggle */}
          <div className="flex items-center gap-1 rounded-full border border-cream-dark bg-cream-dark/30 p-1">
            <button
              onClick={() => setLang("id")}
              className={`rounded-full px-3 py-1 text-xs font-semibold transition-all duration-200 ${
                lang === "id"
                  ? "bg-teal text-white shadow-sm"
                  : "text-charcoal/60 hover:text-charcoal"
              }`}
            >
              ID
            </button>
            <button
              onClick={() => setLang("en")}
              className={`rounded-full px-3 py-1 text-xs font-semibold transition-all duration-200 ${
                lang === "en"
                  ? "bg-teal text-white shadow-sm"
                  : "text-charcoal/60 hover:text-charcoal"
              }`}
            >
              EN
            </button>
          </div>

          {/* CTA */}
          <a
            href="#pricing"
            className="hidden sm:inline-flex items-center justify-center rounded-xl bg-teal px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-teal-dark hover:shadow-lg active:scale-95 transition-all duration-200"
          >
            {t.cta}
          </a>
        </div>
      </div>
    </header>
  );
}

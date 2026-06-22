"use client";

import React from "react";
import { BookOpen } from "lucide-react";

interface FooterProps {
  lang: "id" | "en";
}

export default function Footer({ lang }: FooterProps) {
  const content = {
    id: {
      desc: "Platform edukasi sains-Islam pertama untuk menumbuhkan kekaguman rasional anak Muslim modern terhadap Allah SWT.",
      rights: "Hak Cipta © 2026 IlmuNabi. Hak cipta dilindungi undang-undang.",
      linksHeader: "Navigasi",
      productHeader: "Produk",
      pricingLink: "Paket Belajar",
      howItWorksLink: "Cara Kerja",
      whyDifferentLink: "Kenapa Beda",
      termsLink: "Ketentuan Layanan",
      privacyLink: "Kebijakan Privasi",
    },
    en: {
      desc: "The first science-Islam educational platform designed to cultivate modern Muslim children's rational awe of Allah SWT.",
      rights: "Copyright © 2026 IlmuNabi. All rights reserved.",
      linksHeader: "Navigation",
      productHeader: "Product",
      pricingLink: "Pricing",
      howItWorksLink: "How It Works",
      whyDifferentLink: "Why Different",
      termsLink: "Terms of Service",
      privacyLink: "Privacy Policy",
    },
  };

  const t = content[lang];

  return (
    <footer className="bg-cream border-t border-cream-dark/60 py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Logo & Description */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal text-gold-light">
                <BookOpen className="h-6 w-6 text-gold" />
              </div>
              <span className="text-xl font-bold tracking-tight text-teal">
                Ilmu<span className="text-gold">Nabi</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-charcoal/60 max-w-sm">
              {t.desc}
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-sm font-bold text-charcoal tracking-wider uppercase">
              {t.linksHeader}
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="#cara-kerja" className="text-charcoal/70 hover:text-teal transition-colors">
                  {t.howItWorksLink}
                </a>
              </li>
              <li>
                <a href="#kenapa-beda" className="text-charcoal/70 hover:text-teal transition-colors">
                  {t.whyDifferentLink}
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-charcoal/70 hover:text-teal transition-colors">
                  {t.pricingLink}
                </a>
              </li>
            </ul>
          </div>

          {/* Policy Links */}
          <div>
            <h4 className="text-sm font-bold text-charcoal tracking-wider uppercase">
              {t.productHeader}
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="#" className="text-charcoal/70 hover:text-teal transition-colors">
                  {t.termsLink}
                </a>
              </li>
              <li>
                <a href="#" className="text-charcoal/70 hover:text-teal transition-colors">
                  {t.privacyLink}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-12 border-t border-cream-dark pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-charcoal/40">
          <span>{t.rights}</span>
          <div className="flex gap-6">
            <span>{lang === "id" ? "Bilingual: Indonesia & Inggris" : "Bilingual: Indonesian & English"}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

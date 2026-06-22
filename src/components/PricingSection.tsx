"use client";

import React from "react";
import Link from "next/link";
import { Check, ShieldCheck } from "lucide-react";

interface PricingSectionProps {
  lang: "id" | "en";
}

export default function PricingSection({ lang }: PricingSectionProps) {
  const content = {
    id: {
      sectionId: "pricing",
      title: "Satu harga. Tiga zona belajar. Tumbuh bersama anak Anda selama 10 tahun.",
      subtitle: "Mulai perjalanan menumbuhkan rasa kagum si kecil secara gratis selama 7 hari. Batalkan kapan saja.",
      popularTag: "TERPOPULER & HEMAT 37%",
      ctaTrial: "Mulai Uji Coba Gratis",
      ctaSelect: "Pilih Paket Ini",
      guarantee: "Uji coba gratis 7 hari selesai, baru tagihan dikirim. Batalkan kapan saja tanpa komitmen.",
      footnote: "💡 Orang tua Indonesia rata-rata menghabiskan Rp 400.000–700.000/bulan untuk les anak. IlmuNabi hadir seharga secangkir kopi per minggu.",
      tiers: [
        {
          name: "Free Trial (7 Hari)",
          price: "Rp 0",
          period: "selamanya",
          desc: "Eksplorasi awal tanpa biaya untuk mengenal metode sains-iman kami.",
          features: [
            "Akses penuh ke 2 objek lengkap (contoh: Lebah)",
            "Kuis kognitif sesuai zona usia",
            "1 profil anak untuk dimainkan",
            "Mendukung tampilan handphone & tablet",
          ],
          popular: false,
        },
        {
          name: "Langganan Bulanan",
          price: "Rp 79.000",
          originalPrice: "Rp 99.000",
          period: "per bulan",
          desc: "Fleksibel, batalkan kapan saja.",
          subpriceNote: "✨ Termasuk semua 3 Zona Belajar — tumbuh bersama anak dari 2 hingga 12 tahun",
          features: [
            "Akses ke seluruh 10+ objek ciptaan Allah",
            "Semua 3 Zona Belajar (Balita, Anak, Explorer)",
            "Hingga 3 profil anak (satu keluarga)",
            "Dashboard orang tua: pantauan aktivitas & tips diskusi",
            "Gamifikasi lengkap: Poin, Level, & Kartu Ciptaan",
          ],
          popular: false,
        },
        {
          name: "Langganan Tahunan",
          price: "Rp 599.000",
          originalPrice: "Rp 948.000",
          period: "per tahun",
          desc: "Hemat 37% — setara Rp 49.000/bulan",
          subpriceNote: "✨ Termasuk semua 3 Zona Belajar — tumbuh bersama anak dari 2 hingga 12 tahun",
          features: [
            "Semua fitur paket Bulanan",
            "Hemat lebih dari 37% dibanding bulanan",
            "Laporan evaluasi belajar mingguan via email orang tua",
            "Prioritas akses ke objek baru yang rilis berkala",
            "Materi cetak lembar aktivitas fisik gratis (PDF)",
          ],
          popular: true,
        },
      ],
    },
    en: {
      sectionId: "pricing",
      title: "One price. Three learning zones. Grows with your child for 10 years.",
      subtitle: "Start cultivating your little one's awe for free for 7 days. Cancel anytime.",
      popularTag: "MOST POPULAR - SAVE 37%",
      ctaTrial: "Start Free Trial",
      ctaSelect: "Choose This Plan",
      guarantee: "7 days free trial, then billed. Cancel anytime with zero commitment.",
      footnote: "💡 Indonesian parents spend on average Rp 400,000–700,000/month on children's tutoring. IlmuNabi is here for the price of a cup of coffee per week.",
      tiers: [
        {
          name: "Free Trial (7 Days)",
          price: "$0",
          period: "forever",
          desc: "Initial risk-free exploration to experience our science-faith method.",
          features: [
            "Full access to 2 complete objects (e.g. Honeybee)",
            "Cognitive quizzes tailored by age zone",
            "1 child profile profile",
            "Responsive layout on mobile & tablet",
          ],
          popular: false,
        },
        {
          name: "Monthly Subscription",
          price: "$7.99",
          originalPrice: "$9.99",
          period: "per month",
          desc: "Flexible, cancel anytime.",
          subpriceNote: "✨ Includes all 3 Learning Zones — grows with your child from 2 to 12 years old",
          features: [
            "Access to all 10+ Allah's creation objects",
            "All 3 learning zones (Toddler, Kids, Explorer)",
            "Up to 3 child profiles (family account)",
            "Parent Dashboard: activity tracking & discussion tips",
            "Complete gamification: Points, Levels, & Creation Cards",
          ],
          popular: false,
        },
        {
          name: "Yearly Subscription",
          price: "$59.99",
          originalPrice: "$95.88",
          period: "per year",
          desc: "Save 37% — equivalent to $4.99/month",
          subpriceNote: "✨ Includes all 3 Learning Zones — grows with your child from 2 to 12 years old",
          features: [
            "All features from the Monthly package",
            "Save over 37% compared to monthly rates",
            "Weekly progress reports sent directly to parents' email",
            "Priority access to newly released objects",
            "Free printable activity sheets (PDF downloads)",
          ],
          popular: true,
        },
      ],
    },
  };

  const t = content[lang];

  return (
    <section id={t.sectionId} className="bg-cream-dark/30 py-20 border-t border-cream-dark/50">
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

        {/* Pricing Cards Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-stretch">
          {t.tiers.map((tier, idx) => (
            <div
              key={idx}
              className={`flex flex-col justify-between rounded-3xl border p-8 shadow-sm transition-all duration-300 relative ${
                tier.popular
                  ? "border-teal bg-white ring-4 ring-teal/5 lg:-translate-y-2 lg:shadow-xl"
                  : "border-cream-dark bg-white hover:shadow-lg"
              }`}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-teal px-4 py-1 text-xs font-bold text-white uppercase tracking-wider shadow">
                  {t.popularTag}
                </span>
              )}

              <div>
                {/* Header Info */}
                <div className="text-center lg:text-left">
                  <h3 className="text-xl font-bold text-charcoal">{tier.name}</h3>
                  <p className="mt-3 text-sm text-charcoal/60 leading-relaxed min-h-[40px]">
                    {tier.desc}
                  </p>
                  <div className="mt-6 flex flex-col items-center lg:items-start min-h-[96px] justify-end">
                    {tier.originalPrice && (
                      <span className="text-sm text-charcoal/40 line-through font-semibold">
                        {tier.originalPrice}
                      </span>
                    )}
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-extrabold text-charcoal tracking-tight">
                        {tier.price}
                      </span>
                      <span className="text-sm font-semibold text-charcoal/50">
                        /{tier.period}
                      </span>
                    </div>
                    {tier.subpriceNote && (
                      <span className="mt-2 text-[11px] font-medium text-teal text-center lg:text-left leading-normal">
                        {tier.subpriceNote}
                      </span>
                    )}
                  </div>
                </div>

                {/* Features List */}
                <ul className="mt-8 space-y-4 border-t border-cream-dark pt-8">
                  {tier.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-sm text-charcoal/70">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-light text-teal">
                        <Check className="h-3.5 w-3.5" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="mt-8">
                <Link
                  href="/onboarding"
                  className={`block w-full rounded-2xl py-4 text-center text-sm font-bold shadow-md active:scale-[0.98] transition-all duration-200 ${
                    tier.popular
                      ? "bg-teal text-white hover:bg-teal-dark hover:shadow-lg"
                      : "bg-cream-dark/60 text-charcoal hover:bg-cream-dark/95"
                  }`}
                >
                  {idx === 0 ? t.ctaTrial : t.ctaSelect}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Footnote psychological anchor */}
        <p className="mt-8 text-center text-xs text-charcoal/50 italic max-w-xl mx-auto leading-relaxed">
          {t.footnote}
        </p>

        {/* Guarantee text */}
        <div className="mt-12 flex justify-center">
          <div className="flex max-w-2xl items-center gap-3 rounded-2xl bg-white border border-cream-dark/80 px-6 py-4 shadow-sm text-xs text-charcoal/60 leading-relaxed">
            <ShieldCheck className="h-5 w-5 text-teal-medium shrink-0" />
            <span>{t.guarantee}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

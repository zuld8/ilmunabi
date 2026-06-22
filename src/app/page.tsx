"use client";

// Force rebuild trigger - Vercel cache clear v1.0.1
import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AgeZones from "@/components/AgeZones";
import ContentPreview from "@/components/ContentPreview";
import WhyDifferent from "@/components/WhyDifferent";
import SocialProof from "@/components/SocialProof";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";
import { useApp } from "@/context/AppContext";

export default function Home() {
  const { lang, setLang } = useApp();

  return (
    <div className="min-h-screen flex flex-col bg-cream text-charcoal">
      {/* Navigation */}
      <Navbar lang={lang} setLang={setLang} />

      {/* Main Page Layout */}
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection lang={lang === "ar" ? "id" : lang} />

        {/* 3 Age Zones */}
        <AgeZones lang={lang === "ar" ? "id" : lang} />

        {/* Content Preview */}
        <ContentPreview lang={lang === "ar" ? "id" : lang} />

        {/* Differentiators */}
        <WhyDifferent lang={lang === "ar" ? "id" : lang} />

        {/* Testimonials */}
        <SocialProof lang={lang === "ar" ? "id" : lang} />

        {/* Pricing Tiers */}
        <PricingSection lang={lang === "ar" ? "id" : lang} />
      </main>

      {/* Footer */}
      <Footer lang={lang === "ar" ? "id" : lang} />
    </div>
  );
}

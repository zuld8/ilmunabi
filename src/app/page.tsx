"use client";

// Force rebuild trigger - Vercel cache clear v1.0.1
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AgeZones from "@/components/AgeZones";
import ContentPreview from "@/components/ContentPreview";
import WhyDifferent from "@/components/WhyDifferent";
import SocialProof from "@/components/SocialProof";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [lang, setLang] = useState<"id" | "en">("id");

  return (
    <div className="min-h-screen flex flex-col bg-cream text-charcoal">
      {/* Navigation */}
      <Navbar lang={lang} setLang={setLang} />

      {/* Main Page Layout */}
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection lang={lang} />

        {/* 3 Age Zones */}
        <AgeZones lang={lang} />

        {/* Content Preview */}
        <ContentPreview lang={lang} />

        {/* Differentiators */}
        <WhyDifferent lang={lang} />

        {/* Testimonials */}
        <SocialProof lang={lang} />

        {/* Pricing Tiers */}
        <PricingSection lang={lang} />
      </main>

      {/* Footer */}
      <Footer lang={lang} />
    </div>
  );
}

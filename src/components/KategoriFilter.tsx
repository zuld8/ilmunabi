"use client";

import React from "react";

export type CategoryType = "semua" | "hewan" | "tumbuhan" | "alam" | "tubuh" | "langit" | "nabi" | "asmaul-husna";

interface KategoriFilterProps {
  activeCategory: CategoryType;
  setActiveCategory: (category: CategoryType) => void;
}

export default function KategoriFilter({ activeCategory, setActiveCategory }: KategoriFilterProps) {
  const categories = [
    { id: "semua", label: "Semua", icon: "✨" },
    { id: "hewan", label: "Hewan", icon: "🐾" },
    { id: "tumbuhan", label: "Tumbuhan", icon: "🌿" },
    { id: "alam", label: "Alam", icon: "🌍" },
    { id: "tubuh", label: "Tubuh", icon: "🫀" },
    { id: "langit", label: "Langit", icon: "🌌" },
    { id: "nabi", label: "Nabi", icon: "🕌" },
    { id: "asmaul-husna", label: "Asmaul Husna", icon: "🌟" },
  ] as const;

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-cream-dark bg-cream-dark/20 p-1.5 max-w-4xl mx-auto">
      {categories.map((cat) => {
        const isActive = activeCategory === cat.id;
        
        return (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-extrabold transition-all duration-200 active:scale-95 ${
              isActive
                ? "bg-teal text-white shadow-md"
                : "text-charcoal/60 hover:text-charcoal hover:bg-cream/40"
            }`}
          >
            <span>{cat.icon}</span>
            <span>{cat.label}</span>
          </button>
        );
      })}
    </div>
  );
}


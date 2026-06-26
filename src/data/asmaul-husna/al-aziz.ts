// TODO: WAJIB REVIEW USTADZ SEBELUM PUBLISH
import { AsmaulHusnaData } from "../objects";

export const alAzizData: AsmaulHusnaData = {
  slug: "al-aziz",
  name: { id: "Al-Aziz", en: "Al-Aziz" },
  icon: "💪",
  category: "asmaul-husna",
  type: "asmaul-husna",
  unlockedAtPoints: 50,

  arabicWithHarakat: "ٱلْعَزِيزُ",
  transliteration: "Al-Aziz",
  meaning: { id: "Yang Maha Perkasa", en: "The Almighty" },

  explanationForKids: { 
    id: "Allah itu Maha Perkasa dan tidak terkalahkan! Kekuatan Allah tidak ada batasnya, Dia bisa menundukkan angin, lautan, dan gunung yang besar. 🌪️", 
    en: "Allah is The Almighty and invincible! His power has no limits, He can subdue the winds, oceans, and giant mountains. 🌪️" 
  },
  realLifeExample: { 
    id: "Jangan pernah sombong jika kamu kuat atau pintar, karena kekuatan sejati hanya milik Allah. Berdoalah pada Al-Aziz agar memberimu kekuatan untuk berbuat kebaikan.", 
    en: "Never be arrogant if you are strong or smart, because true strength belongs only to Allah. Pray to Al-Aziz to give you strength to do good." 
  },
  connectedObjectSlugs: ["gunung", "angin", "gajah"]
};

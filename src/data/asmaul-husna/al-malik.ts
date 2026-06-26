// TODO: WAJIB REVIEW USTADZ SEBELUM PUBLISH
import { AsmaulHusnaData } from "../objects";

export const alMalikData: AsmaulHusnaData = {
  slug: "al-malik",
  name: { id: "Al-Malik", en: "Al-Malik" },
  icon: "👑",
  category: "asmaul-husna",
  type: "asmaul-husna",
  unlockedAtPoints: 50,

  arabicWithHarakat: "ٱلْمَلِكُ",
  transliteration: "Al-Malik",
  meaning: { id: "Yang Maha Merajai", en: "The King" },

  explanationForKids: { 
    id: "Allah adalah Raja dari semua raja! Allah yang memiliki, menguasai, dan mengatur seluruh alam semesta, dari bintang di langit hingga ikan di lautan dalam. 🌌", 
    en: "Allah is the King of all kings! He owns, rules, and manages the entire universe, from the stars in the sky to the fish in the deep ocean. 🌌" 
  },
  realLifeExample: { 
    id: "Karena kita tahu Allah adalah Sang Raja, kita harus patuh pada aturan-Nya (seperti shalat 5 waktu) dan tidak perlu takut pada siapa pun selain Allah Sang Pemilik alam semesta.", 
    en: "Knowing Allah is The King, we must obey His rules (like praying 5 times a day) and fear no one but Allah, the Owner of the universe." 
  },
  connectedObjectSlugs: ["bumi", "matahari", "bintang"]
};

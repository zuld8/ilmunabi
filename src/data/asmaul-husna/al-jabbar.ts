// TODO: WAJIB REVIEW USTADZ SEBELUM PUBLISH
import { AsmaulHusnaData } from "../objects";

export const alJabbarData: AsmaulHusnaData = {
  slug: "al-jabbar",
  name: { id: "Al-Jabbar", en: "Al-Jabbar" },
  icon: "⚡",
  category: "asmaul-husna",
  type: "asmaul-husna",
  unlockedAtPoints: 50,

  arabicWithHarakat: "ٱلْجَبَّارُ",
  transliteration: "Al-Jabbar",
  meaning: { id: "Yang Maha Memaksa", en: "The Compeller" },

  explanationForKids: { 
    id: "Allah adalah Al-Jabbar, yang kehendak-Nya pasti terjadi. Selain itu, Allah juga menyembuhkan hati yang sedih dan memperbaiki segala hal yang rusak. 💖", 
    en: "Allah is Al-Jabbar, whose will always happens. Moreover, He heals broken hearts and fixes everything that is broken. 💖" 
  },
  realLifeExample: { 
    id: "Ketika kamu sedih atau gagal dalam ujian, berdoalah kepada Allah Al-Jabbar agar Dia menghibur dan memperbaiki hatimu yang sedih. Bantulah juga temanmu yang sedang bersedih.", 
    en: "When you are sad or fail a test, pray to Allah Al-Jabbar to comfort and fix your sad heart. Also, help your friends who are feeling down." 
  },
  connectedObjectSlugs: ["hati", "awan", "matahari"]
};

// TODO: WAJIB REVIEW USTADZ SEBELUM PUBLISH
import { AsmaulHusnaData } from "../objects";

export const asSalamData: AsmaulHusnaData = {
  slug: "as-salam",
  name: { id: "As-Salam", en: "As-Salam" },
  icon: "🕊️",
  category: "asmaul-husna",
  type: "asmaul-husna",
  unlockedAtPoints: 50,

  arabicWithHarakat: "ٱلسَّلَامُ",
  transliteration: "As-Salam",
  meaning: { id: "Yang Maha Memberi Kesejahteraan", en: "The Source of Peace" },

  explanationForKids: { 
    id: "Allah adalah sumber segala kedamaian dan keselamatan. Setiap kali kamu merasa aman, nyaman, dan damai, itu adalah pemberian indah dari Allah As-Salam. 🌿", 
    en: "Allah is the source of all peace and safety. Every time you feel safe, comfortable, and peaceful, it's a beautiful gift from Allah As-Salam. 🌿" 
  },
  realLifeExample: { 
    id: "Sebarkan kedamaian dengan selalu mengucapkan 'Assalamu'alaikum' saat bertemu teman atau masuk rumah, dan jadilah anak pembawa damai dengan tidak suka bertengkar.", 
    en: "Spread peace by always saying 'Assalamu'alaikum' when meeting friends or entering a house, and be a peacemaker by avoiding fights." 
  },
  connectedObjectSlugs: ["keluarga", "masjid", "bunga"]
};

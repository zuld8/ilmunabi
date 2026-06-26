import { ObjectData } from "../objects";

export const apiData: ObjectData = {
  slug: "api",
  name: { id: "Api", en: "Fire" },
  icon: "🔥",
  category: "alam",
  type: "alam",
  scientificName: "Ignis",
  surahName: "Al-Waqi'ah",
  surahReference: "56:71-72",
  unlockedAtPoints: 30,
  kosakata: [
    { arab: "نَار", latin: "Naar", arti: "Api", artiEn: "Fire", contohAyat: "نَارٌ حَامِيَةٌ" }
  ],
  balita: {
    text: { id: "Hati-hati, api itu sangat panas! Jangan dipegang ya! 🔥", en: "Careful, fire is very hot! Do not touch it! 🔥" },
    audioTranscript: { id: "Api warnanya merah kuning dan menari-nari. Ibu menggunakan api kompor untuk memasak makanan enak buat kita.", en: "Fire is colored red yellow and dances around. Mom uses the stove fire to cook delicious food for us." },
    quiz: {
      question: { id: "Bagaimana rasanya kalau kita dekat dengan api?", en: "How does it feel if we are close to fire?" },
      options: [
        { text: { id: "Dingin sekali", en: "Very cold" } },
        { text: { id: "Sangat panas", en: "Very hot" } },
        { text: { id: "Segar", en: "Fresh" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Api adalah energi panas dan cahaya! Api butuh tiga benda untuk bisa hidup: bahan bakar (seperti kayu), panas, dan oksigen dari udara. Kalau kita siram dengan air, apinya mati karena kehilangan panas dan oksigennya terhalang.", en: "Fire is heat and light energy! Fire needs three things to live: fuel (like wood), heat, and oxygen from the air. If we pour water on it, the fire dies because it loses heat and its oxygen is blocked." },
    facts: [
      { id: "Api di luar angkasa berbentuk bulat sempurna karena tidak ada gravitasi!", en: "Fire in space is perfectly round because there is no gravity!" },
      { id: "Warna api bisa berbeda-beda tergantung bahan bakarnya. Api biru jauh lebih panas dari api merah muda.", en: "Fire colors can vary depending on the fuel. Blue fire is much hotter than pink fire." },
      { id: "Manusia purba menemukan cara membuat api dengan menggesekkan dua buah batu api.", en: "Ancient humans discovered how to make fire by rubbing two flints together." }
    ],
    quranVerse: { arabic: "...", transliteration: "...", translation: { id: "...", en: "..." } },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  },
  explorer: {
    text: { id: "Api terjadi karena reaksi kimia eksotermik bernama pembakaran. Di dalam pohon ada ikatan karbon dari proses fotosintesis. Saat kayu dibakar, ia melepaskan kembali energi matahari yang disimpannya! Al-Qur'an bertanya pada manusia, siapa yang menumbuhkan pohon api hijau itu, kita atau Allah? Maha Suci Allah Sang Pencipta!", en: "Fire happens due to an exothermic chemical reaction called combustion. Inside a tree, there are carbon bonds from photosynthesis. When wood burns, it releases the solar energy it stored! The Quran asks humans, who grows the tree of green fire, us or Allah? Glory be to Allah the Creator!" },
    quranVerse: {
      arabic: "أَفَرَأَيْتُمُ النَّارَ الَّتِي تُورُونَ ۝ أَأَنْتُمْ أَنْشَأْتُمْ شَجَرَتَهَا أَمْ نَحْنُ الْمُنْشِئُونَ",
      transliteration: "Afara'aytumun-naarallatii tuuruun. A antum ansya'tum syajaratahaa am nahnul-munsyi'uun",
      translation: { id: "Maka terangkanlah kepadaku tentang api yang kamu nyalakan. Kamukah yang menjadikan pohon itu atau Kamikah yang menjadikannya?", en: "And have you seen the fire that you ignite? Is it you who produced its tree, or are We the producer?" }
    },
    anatomy: [{ part: { id: "Bagian", en: "Part" }, desc: { id: "Penjelasan", en: "Explanation" } }],
    wowFactor: { id: "Fakta menakjubkan!", en: "Amazing fact!" },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  }
};

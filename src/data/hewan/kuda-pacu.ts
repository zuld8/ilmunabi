import { ObjectData } from "../objects";

export const kudaPacuData: ObjectData = {
  slug: "kuda-pacu",
  name: {
    id: "Kuda Pacu",
    en: "Kuda Pacu",
  },
  scientificName: "Equus caballus",
  surahName: "Al-Adiyat",
  surahReference: "100:1",
  icon: "🐎",
  category: "hewan",
  type: "hewan",
  unlockedAtPoints: 50,
  kosakata: [
    { arab: "خَلَقَ", latin: "Khalaqa", arti: "Menciptakan", artiEn: "Created", contohAyat: "Al-Adiyat 100:1" }
  ],
  balita: {
    text: {
      id: "Ini Kuda Pacu! Ciptaan Allah yang luar biasa indah. 🌟",
      en: "This is Kuda Pacu! An amazingly beautiful creation of Allah. 🌟",
    },
    audioTranscript: {
      id: "Ini Kuda Pacu. Allah menciptakan Kuda Pacu dengan sangat baik agar kita semua bersyukur.",
      en: "This is Kuda Pacu. Allah created Kuda Pacu beautifully so we all become grateful.",
    },
    quiz: {
      question: {
        id: "Mana gambar Kuda Pacu?",
        en: "Which one is the picture of Kuda Pacu?",
      },
      options: [
        { text: { id: "🐎 Kuda Pacu", en: "🐎 Kuda Pacu" } },
        { text: { id: "📦 Kotak", en: "📦 Box" } },
      ],
      answerIdx: 0,
    },
  },
  anak: {
    text: {
      id: "Fakta menarik tentang Kuda Pacu: Merupakan bukti keagungan penciptaan Allah di alam semesta.",
      en: "Interesting facts about Kuda Pacu: It is a proof of Allah's majestic creation in the universe.",
    },
    facts: [
      { id: "Kuda Pacu memiliki keunikan fisik dan perilaku yang membuktikan kesempurnaan ciptaan Allah SWT.", en: "Kuda Pacu memiliki keunikan fisik dan perilaku yang membuktikan kesempurnaan ciptaan Allah SWT." },
      { id: "Setiap sel dan organ tubuh Kuda Pacu bekerja dalam keseimbangan ekosistem yang luar biasa.", en: "Setiap sel dan organ tubuh Kuda Pacu bekerja dalam keseimbangan ekosistem yang luar biasa." },
      { id: "Allah SWT menciptakan Kuda Pacu dengan peran dan manfaat khusus yang sangat bernutrisi atau berguna bagi manusia.", en: "Allah SWT menciptakan Kuda Pacu dengan peran dan manfaat khusus yang sangat bernutrisi atau berguna bagi manusia." }
    ],
    quranVerse: {
      arabic: "وَفِي خَلْقِكُمْ وَمَا يَبُثُّ مِنْ دَابَّةٍ آيَاتٌ لِقَوْمٍ يُوقِنُونَ",
      transliteration: "Wa fī khalqikum wa mā yabuththu min dābbatin āyātul-liqawmiy-yūqinūn",
      translation: {
        id: "Dan pada penciptaan dirimu dan pada binatang-binatang yang bertebaran terdapat tanda-tanda kekuasaan Allah untuk kaum yang meyakini.",
        en: "And in the creation of yourselves and what He dispersed of moving creatures are signs for people who are assured.",
      },
    },
    quiz: {
      question: {
        id: "Siapa yang menciptakan Kuda Pacu dengan sempurna?",
        en: "Who created Kuda Pacu perfectly?",
      },
      options: [
        { text: { id: "Allah SWT", en: "Allah SWT" } },
        { text: { id: "Manusia", en: "Humans" } },
      ],
      answerIdx: 0,
    },
  },
  explorer: {
    text: {
      id: "Eksplorasi anatomi dan struktur Kuda Pacu mengungkap kehebatan rancangan sistem biologi dan alam yang seimbang.",
      en: "Exploration of the anatomy and structure of Kuda Pacu reveals the brilliance of biological design and natural balance.",
    },
    anatomy: [
      { part: { id: "Struktur Organ", en: "Struktur Organ" }, desc: { id: "Didesain khusus untuk beradaptasi dengan lingkungan dan makanannya.", en: "Didesain khusus untuk beradaptasi dengan lingkungan dan makanannya." } }
    ],
    wowFactor: {
      id: "Keajaiban penciptaan Kuda Pacu: Allah SWT merancang sistem sensorik, anatomi, dan insting bertahan hidup pada Kuda Pacu dengan presisi tinggi agar seimbang dengan alam sekitarnya.",
      en: "Keajaiban penciptaan Kuda Pacu: Allah SWT merancang sistem sensorik, anatomi, dan insting bertahan hidup pada Kuda Pacu dengan presisi tinggi agar seimbang dengan alam sekitarnya.",
    },
    quranVerse: {
      arabic: "سَنُرِيهِمْ آيَاتِنَا فِي الْآفَاقِ وَفِي أَنْفُسِهِمْ حَتَّىٰ يَتَبَيَّنَ لَهُمْ أَنَّهُ الْحَقُw",
      transliteration: "Sanurīhim āyātinā fil-āfāqi wa fī anfusihim ḥattā yatabayyana lahum annahul-ḥaqq",
      translation: {
        id: "Kami akan memperlihatkan kepada mereka tanda-tanda kekuasaan Kami di segenap penjuru dunia dan pada diri mereka sendiri, sehingga jelas bagi mereka bahwa Al-Qur'an itu adalah benar.",
        en: "We will show them Our signs in the horizons and within themselves until it becomes clear to them that it is the truth.",
      },
      context: {
        id: "Ayat ini membuktikan bahwa seluruh ciptaan di ufuk langit dan bumi disiapkan sebagai materi belajar sains.",
        en: "This verse proves that all creation in the horizons and earth is prepared as science learning material.",
      },
    },
    quiz: [
      {
        question: {
          id: "Apa hikmah utama diutusnya tanda sains tentang Kuda Pacu?",
          en: "What is the primary wisdom of scientific signs regarding Kuda Pacu?",
        },
        options: [
          { text: { id: "Meningkatkan keimanan kepada Allah Al-Khaliq", en: "Enhancing faith in Allah Al-Khaliq" } },
          { text: { id: "Hanya sekedar hiburan biasa", en: "Merely a simple entertainment" } },
        ],
        answerIdx: 0,
      },
    ],
  },
};

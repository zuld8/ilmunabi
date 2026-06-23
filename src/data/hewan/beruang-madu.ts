import { ObjectData } from "../objects";

export const beruangMaduData: ObjectData = {
  slug: "beruang-madu",
  name: {
    id: "Beruang Madu",
    en: "Beruang Madu",
  },
  scientificName: "Helarctos malayanus",
  surahName: "Al-Qur'an",
  surahReference: "Ciptaan Allah",
  icon: "🐻",
  category: "hewan",
  type: "hewan",
  unlockedAtPoints: 50,
  kosakata: [
    { arab: "خَلَقَ", latin: "Khalaqa", arti: "Menciptakan", artiEn: "Created", contohAyat: "Al-Qur'an Ciptaan Allah" }
  ],
  balita: {
    text: {
      id: "Ini Beruang Madu! Ciptaan Allah yang luar biasa indah. 🌟",
      en: "This is Beruang Madu! An amazingly beautiful creation of Allah. 🌟",
    },
    audioTranscript: {
      id: "Ini Beruang Madu. Allah menciptakan Beruang Madu dengan sangat baik agar kita semua bersyukur.",
      en: "This is Beruang Madu. Allah created Beruang Madu beautifully so we all become grateful.",
    },
    quiz: {
      question: {
        id: "Mana gambar Beruang Madu?",
        en: "Which one is the picture of Beruang Madu?",
      },
      options: [
        { text: { id: "🐻 Beruang Madu", en: "🐻 Beruang Madu" } },
        { text: { id: "📦 Kotak", en: "📦 Box" } },
      ],
      answerIdx: 0,
    },
  },
  anak: {
    text: {
      id: "Fakta menarik tentang Beruang Madu: Merupakan bukti keagungan penciptaan Allah di alam semesta.",
      en: "Interesting facts about Beruang Madu: It is a proof of Allah's majestic creation in the universe.",
    },
    facts: [
      { id: "Beruang Madu memiliki keunikan fisik dan perilaku yang membuktikan kesempurnaan ciptaan Allah SWT.", en: "Beruang Madu memiliki keunikan fisik dan perilaku yang membuktikan kesempurnaan ciptaan Allah SWT." },
      { id: "Setiap sel dan organ tubuh Beruang Madu bekerja dalam keseimbangan ekosistem yang luar biasa.", en: "Setiap sel dan organ tubuh Beruang Madu bekerja dalam keseimbangan ekosistem yang luar biasa." },
      { id: "Allah SWT menciptakan Beruang Madu dengan peran dan manfaat khusus yang sangat bernutrisi atau berguna bagi manusia.", en: "Allah SWT menciptakan Beruang Madu dengan peran dan manfaat khusus yang sangat bernutrisi atau berguna bagi manusia." }
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
        id: "Siapa yang menciptakan Beruang Madu dengan sempurna?",
        en: "Who created Beruang Madu perfectly?",
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
      id: "Eksplorasi anatomi dan struktur Beruang Madu mengungkap kehebatan rancangan sistem biologi dan alam yang seimbang.",
      en: "Exploration of the anatomy and structure of Beruang Madu reveals the brilliance of biological design and natural balance.",
    },
    anatomy: [
      { part: { id: "Struktur Organ", en: "Struktur Organ" }, desc: { id: "Didesain khusus untuk beradaptasi dengan lingkungan dan makanannya.", en: "Didesain khusus untuk beradaptasi dengan lingkungan dan makanannya." } }
    ],
    wowFactor: {
      id: "Keajaiban penciptaan Beruang Madu: Allah SWT merancang sistem sensorik, anatomi, dan insting bertahan hidup pada Beruang Madu dengan presisi tinggi agar seimbang dengan alam sekitarnya.",
      en: "Keajaiban penciptaan Beruang Madu: Allah SWT merancang sistem sensorik, anatomi, dan insting bertahan hidup pada Beruang Madu dengan presisi tinggi agar seimbang dengan alam sekitarnya.",
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
          id: "Apa hikmah utama diutusnya tanda sains tentang Beruang Madu?",
          en: "What is the primary wisdom of scientific signs regarding Beruang Madu?",
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

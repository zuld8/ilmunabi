import { ObjectData } from "../objects";

export const marsMerahPanasData: ObjectData = {
  slug: "mars-merah-panas",
  name: {
    id: "Mars Merah Panas",
    en: "Mars Merah Panas",
  },
  scientificName: "Mars var. panas",
  surahName: "Al-Qur'an",
  surahReference: "Ciptaan Allah",
  icon: "🔴",
  category: "langit",
  type: "langit",
  unlockedAtPoints: 50,
  kosakata: [
    { arab: "خَلَقَ", latin: "Khalaqa", arti: "Menciptakan", artiEn: "Created", contohAyat: "Al-Qur'an Ciptaan Allah" }
  ],
  balita: {
    text: {
      id: "Ini Mars Merah Panas! Ciptaan Allah yang luar biasa indah. 🌟",
      en: "This is Mars Merah Panas! An amazingly beautiful creation of Allah. 🌟",
    },
    audioTranscript: {
      id: "Ini Mars Merah Panas. Allah menciptakan Mars Merah Panas dengan sangat baik agar kita semua bersyukur.",
      en: "This is Mars Merah Panas. Allah created Mars Merah Panas beautifully so we all become grateful.",
    },
    quiz: {
      question: {
        id: "Mana gambar Mars Merah Panas?",
        en: "Which one is the picture of Mars Merah Panas?",
      },
      options: [
        { text: { id: "🔴 Mars Merah Panas", en: "🔴 Mars Merah Panas" } },
        { text: { id: "📦 Kotak", en: "📦 Box" } },
      ],
      answerIdx: 0,
    },
  },
  anak: {
    text: {
      id: "Fakta menarik tentang Mars Merah Panas: Merupakan bukti keagungan penciptaan Allah di alam semesta.",
      en: "Interesting facts about Mars Merah Panas: It is a proof of Allah's majestic creation in the universe.",
    },
    facts: [
      { id: "Benda langit Mars Merah Panas tersusun dari gas hidrogen, debu kosmis, atau batuan silika keras.", en: "Benda langit Mars Merah Panas tersusun dari gas hidrogen, debu kosmis, atau batuan silika keras." },
      { id: "Lintasan orbit Mars Merah Panas mengikuti hukum gravitasi Kepler yang sangat konsisten.", en: "Lintasan orbit Mars Merah Panas mengikuti hukum gravitasi Kepler yang sangat konsisten." },
      { id: "Cahaya bintang di sekitar Mars Merah Panas merambat menembus ruang hampa jutaan tahun cahaya.", en: "Cahaya bintang di sekitar Mars Merah Panas merambat menembus ruang hampa jutaan tahun cahaya." }
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
        id: "Siapa yang menciptakan Mars Merah Panas dengan sempurna?",
        en: "Who created Mars Merah Panas perfectly?",
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
      id: "Eksplorasi anatomi dan struktur Mars Merah Panas mengungkap kehebatan rancangan sistem biologi dan alam yang seimbang.",
      en: "Exploration of the anatomy and structure of Mars Merah Panas reveals the brilliance of biological design and natural balance.",
    },
    anatomy: [
      { part: { id: "Inti Gravitasi", en: "Inti Gravitasi" }, desc: { id: "Pusat masa dengan tarikan gravitasi kosmis penentu orbit.", en: "Pusat masa dengan tarikan gravitasi kosmis penentu orbit." } }
    ],
    wowFactor: {
      id: "Keajaiban astrofisika Mars Merah Panas: Keseimbangan antara gaya gravitasi menciutkan dan tekanan fusi gas luar biasa pada Mars Merah Panas mencegahnya meledak secara liar.",
      en: "Keajaiban astrofisika Mars Merah Panas: Keseimbangan antara gaya gravitasi menciutkan dan tekanan fusi gas luar biasa pada Mars Merah Panas mencegahnya meledak secara liar.",
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
          id: "Apa hikmah utama diutusnya tanda sains tentang Mars Merah Panas?",
          en: "What is the primary wisdom of scientific signs regarding Mars Merah Panas?",
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

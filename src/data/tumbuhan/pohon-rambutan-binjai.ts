import { ObjectData } from "../objects";

export const pohonRambutanBinjaiData: ObjectData = {
  slug: "pohon-rambutan-binjai",
  name: {
    id: "Pohon Rambutan Binjai",
    en: "Pohon Rambutan Binjai",
  },
  scientificName: "Nephelium lappaceum b.",
  surahName: "Al-Qur'an",
  surahReference: "Ciptaan Allah",
  icon: "🌳",
  category: "tumbuhan",
  type: "tumbuhan",
  unlockedAtPoints: 50,
  kosakata: [
    { arab: "خَلَقَ", latin: "Khalaqa", arti: "Menciptakan", artiEn: "Created", contohAyat: "Al-Qur'an Ciptaan Allah" }
  ],
  balita: {
    text: {
      id: "Ini Pohon Rambutan Binjai! Ciptaan Allah yang luar biasa indah. 🌟",
      en: "This is Pohon Rambutan Binjai! An amazingly beautiful creation of Allah. 🌟",
    },
    audioTranscript: {
      id: "Ini Pohon Rambutan Binjai. Allah menciptakan Pohon Rambutan Binjai dengan sangat baik agar kita semua bersyukur.",
      en: "This is Pohon Rambutan Binjai. Allah created Pohon Rambutan Binjai beautifully so we all become grateful.",
    },
    quiz: {
      question: {
        id: "Mana gambar Pohon Rambutan Binjai?",
        en: "Which one is the picture of Pohon Rambutan Binjai?",
      },
      options: [
        { text: { id: "🌳 Pohon Rambutan Binjai", en: "🌳 Pohon Rambutan Binjai" } },
        { text: { id: "📦 Kotak", en: "📦 Box" } },
      ],
      answerIdx: 0,
    },
  },
  anak: {
    text: {
      id: "Fakta menarik tentang Pohon Rambutan Binjai: Merupakan bukti keagungan penciptaan Allah di alam semesta.",
      en: "Interesting facts about Pohon Rambutan Binjai: It is a proof of Allah's majestic creation in the universe.",
    },
    facts: [
      { id: "Pohon Rambutan Binjai diciptakan dengan keunikan dan manfaat yang sangat besar.", en: "Pohon Rambutan Binjai was created with unique traits and immense benefits." },
      { id: "Allah menyebut Pohon Rambutan Binjai dalam Al-Qur'an agar manusia mengamati sains di baliknya.", en: "Allah mentions Pohon Rambutan Binjai in the Qur'an so humans observe the science behind it." }
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
        id: "Siapa yang menciptakan Pohon Rambutan Binjai dengan sempurna?",
        en: "Who created Pohon Rambutan Binjai perfectly?",
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
      id: "Eksplorasi anatomi dan struktur Pohon Rambutan Binjai mengungkap kehebatan rancangan sistem biologi dan alam yang seimbang.",
      en: "Exploration of the anatomy and structure of Pohon Rambutan Binjai reveals the brilliance of biological design and natural balance.",
    },
    anatomy: [
      {
        part: { id: "Struktur Khusus", en: "Special Structure" },
        desc: { id: "Didesain dengan presisi tinggi untuk beradaptasi di lingkungannya.", en: "Designed with high precision to adapt to its environment." },
      },
    ],
    wowFactor: {
      id: "Keajaiban sains dan wahyu yang sesuai: Allah menyebut Pohon Rambutan Binjai di Al-Qur'an ribuan tahun sebelum sains modern meneliti keunikan fungsionalnya.",
      en: "The alignment of science and revelation: Allah mentioned Pohon Rambutan Binjai in the Qur'an thousands of years before modern science researched its functional uniqueness.",
    },
    quranVerse: {
      arabic: "سَنُرِيهِمْ آيَاتِنَا فِي الْآفَاقِ وَفِي أَنْفُسِهِم| حَتَّىٰ يَتَبَيَّنَ لَهُمْ أَنَّهُ الْحَقُّ",
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
          id: "Apa hikmah utama diutusnya tanda sains tentang Pohon Rambutan Binjai?",
          en: "What is the primary wisdom of scientific signs regarding Pohon Rambutan Binjai?",
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

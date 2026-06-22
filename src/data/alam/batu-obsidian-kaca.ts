import { ObjectData } from "../objects";

export const batuObsidianKacaData: ObjectData = {
  slug: "batu-obsidian-kaca",
  name: {
    id: "Batu Obsidian Kaca",
    en: "Batu Obsidian Kaca",
  },
  scientificName: "Obsidian Rock",
  surahName: "Al-Qur'an",
  surahReference: "Ciptaan Allah",
  icon: "🪨",
  category: "alam",
  type: "alam",
  unlockedAtPoints: 50,
  kosakata: [
    { arab: "خَلَقَ", latin: "Khalaqa", arti: "Menciptakan", artiEn: "Created", contohAyat: "Al-Qur'an Ciptaan Allah" }
  ],
  balita: {
    text: {
      id: "Ini Batu Obsidian Kaca! Ciptaan Allah yang luar biasa indah. 🌟",
      en: "This is Batu Obsidian Kaca! An amazingly beautiful creation of Allah. 🌟",
    },
    audioTranscript: {
      id: "Ini Batu Obsidian Kaca. Allah menciptakan Batu Obsidian Kaca dengan sangat baik agar kita semua bersyukur.",
      en: "This is Batu Obsidian Kaca. Allah created Batu Obsidian Kaca beautifully so we all become grateful.",
    },
    quiz: {
      question: {
        id: "Mana gambar Batu Obsidian Kaca?",
        en: "Which one is the picture of Batu Obsidian Kaca?",
      },
      options: [
        { text: { id: "🪨 Batu Obsidian Kaca", en: "🪨 Batu Obsidian Kaca" } },
        { text: { id: "📦 Kotak", en: "📦 Box" } },
      ],
      answerIdx: 0,
    },
  },
  anak: {
    text: {
      id: "Fakta menarik tentang Batu Obsidian Kaca: Merupakan bukti keagungan penciptaan Allah di alam semesta.",
      en: "Interesting facts about Batu Obsidian Kaca: It is a proof of Allah's majestic creation in the universe.",
    },
    facts: [
      { id: "Batu Obsidian Kaca diciptakan dengan keunikan dan manfaat yang sangat besar.", en: "Batu Obsidian Kaca was created with unique traits and immense benefits." },
      { id: "Allah menyebut Batu Obsidian Kaca dalam Al-Qur'an agar manusia mengamati sains di baliknya.", en: "Allah mentions Batu Obsidian Kaca in the Qur'an so humans observe the science behind it." }
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
        id: "Siapa yang menciptakan Batu Obsidian Kaca dengan sempurna?",
        en: "Who created Batu Obsidian Kaca perfectly?",
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
      id: "Eksplorasi anatomi dan struktur Batu Obsidian Kaca mengungkap kehebatan rancangan sistem biologi dan alam yang seimbang.",
      en: "Exploration of the anatomy and structure of Batu Obsidian Kaca reveals the brilliance of biological design and natural balance.",
    },
    anatomy: [
      {
        part: { id: "Struktur Khusus", en: "Special Structure" },
        desc: { id: "Didesain dengan presisi tinggi untuk beradaptasi di lingkungannya.", en: "Designed with high precision to adapt to its environment." },
      },
    ],
    wowFactor: {
      id: "Keajaiban sains dan wahyu yang sesuai: Allah menyebut Batu Obsidian Kaca di Al-Qur'an ribuan tahun sebelum sains modern meneliti keunikan fungsionalnya.",
      en: "The alignment of science and revelation: Allah mentioned Batu Obsidian Kaca in the Qur'an thousands of years before modern science researched its functional uniqueness.",
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
          id: "Apa hikmah utama diutusnya tanda sains tentang Batu Obsidian Kaca?",
          en: "What is the primary wisdom of scientific signs regarding Batu Obsidian Kaca?",
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

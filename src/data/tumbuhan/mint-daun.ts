import { ObjectData } from "../objects";

export const mintDaunData: ObjectData = {
  slug: "mint-daun",
  name: {
    id: "Mint Daun",
    en: "Mint Daun",
  },
  scientificName: "Mentha piperita",
  surahName: "Al-Qur'an",
  surahReference: "Ciptaan Allah",
  icon: "🌿",
  category: "tumbuhan",
  type: "tumbuhan",
  unlockedAtPoints: 50,
  kosakata: [
    { arab: "خَلَقَ", latin: "Khalaqa", arti: "Menciptakan", artiEn: "Created", contohAyat: "Al-Qur'an Ciptaan Allah" }
  ],
  balita: {
    text: {
      id: "Ini Mint Daun! Ciptaan Allah yang luar biasa indah. 🌟",
      en: "This is Mint Daun! An amazingly beautiful creation of Allah. 🌟",
    },
    audioTranscript: {
      id: "Ini Mint Daun. Allah menciptakan Mint Daun dengan sangat baik agar kita semua bersyukur.",
      en: "This is Mint Daun. Allah created Mint Daun beautifully so we all become grateful.",
    },
    quiz: {
      question: {
        id: "Mana gambar Mint Daun?",
        en: "Which one is the picture of Mint Daun?",
      },
      options: [
        { text: { id: "🌿 Mint Daun", en: "🌿 Mint Daun" } },
        { text: { id: "📦 Kotak", en: "📦 Box" } },
      ],
      answerIdx: 0,
    },
  },
  anak: {
    text: {
      id: "Fakta menarik tentang Mint Daun: Merupakan bukti keagungan penciptaan Allah di alam semesta.",
      en: "Interesting facts about Mint Daun: It is a proof of Allah's majestic creation in the universe.",
    },
    facts: [
      { id: "Mint Daun diciptakan dengan keunikan dan manfaat yang sangat besar.", en: "Mint Daun was created with unique traits and immense benefits." },
      { id: "Allah menyebut Mint Daun dalam Al-Qur'an agar manusia mengamati sains di baliknya.", en: "Allah mentions Mint Daun in the Qur'an so humans observe the science behind it." }
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
        id: "Siapa yang menciptakan Mint Daun dengan sempurna?",
        en: "Who created Mint Daun perfectly?",
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
      id: "Eksplorasi anatomi dan struktur Mint Daun mengungkap kehebatan rancangan sistem biologi dan alam yang seimbang.",
      en: "Exploration of the anatomy and structure of Mint Daun reveals the brilliance of biological design and natural balance.",
    },
    anatomy: [
      {
        part: { id: "Struktur Khusus", en: "Special Structure" },
        desc: { id: "Didesain dengan presisi tinggi untuk beradaptasi di lingkungannya.", en: "Designed with high precision to adapt to its environment." },
      },
    ],
    wowFactor: {
      id: "Keajaiban sains dan wahyu yang sesuai: Allah menyebut Mint Daun di Al-Qur'an ribuan tahun sebelum sains modern meneliti keunikan fungsionalnya.",
      en: "The alignment of science and revelation: Allah mentioned Mint Daun in the Qur'an thousands of years before modern science researched its functional uniqueness.",
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
          id: "Apa hikmah utama diutusnya tanda sains tentang Mint Daun?",
          en: "What is the primary wisdom of scientific signs regarding Mint Daun?",
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

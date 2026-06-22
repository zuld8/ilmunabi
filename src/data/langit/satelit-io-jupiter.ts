import { ObjectData } from "../objects";

export const satelitIoJupiterData: ObjectData = {
  slug: "satelit-io-jupiter",
  name: {
    id: "Satelit Io Jupiter",
    en: "Satelit Io Jupiter",
  },
  scientificName: "Io",
  surahName: "Al-Qur'an",
  surahReference: "Ciptaan Allah",
  icon: "🌙",
  category: "langit",
  type: "langit",
  unlockedAtPoints: 50,
  kosakata: [
    { arab: "خَلَقَ", latin: "Khalaqa", arti: "Menciptakan", artiEn: "Created", contohAyat: "Al-Qur'an Ciptaan Allah" }
  ],
  balita: {
    text: {
      id: "Ini Satelit Io Jupiter! Ciptaan Allah yang luar biasa indah. 🌟",
      en: "This is Satelit Io Jupiter! An amazingly beautiful creation of Allah. 🌟",
    },
    audioTranscript: {
      id: "Ini Satelit Io Jupiter. Allah menciptakan Satelit Io Jupiter dengan sangat baik agar kita semua bersyukur.",
      en: "This is Satelit Io Jupiter. Allah created Satelit Io Jupiter beautifully so we all become grateful.",
    },
    quiz: {
      question: {
        id: "Mana gambar Satelit Io Jupiter?",
        en: "Which one is the picture of Satelit Io Jupiter?",
      },
      options: [
        { text: { id: "🌙 Satelit Io Jupiter", en: "🌙 Satelit Io Jupiter" } },
        { text: { id: "📦 Kotak", en: "📦 Box" } },
      ],
      answerIdx: 0,
    },
  },
  anak: {
    text: {
      id: "Fakta menarik tentang Satelit Io Jupiter: Merupakan bukti keagungan penciptaan Allah di alam semesta.",
      en: "Interesting facts about Satelit Io Jupiter: It is a proof of Allah's majestic creation in the universe.",
    },
    facts: [
      { id: "Satelit Io Jupiter diciptakan dengan keunikan dan manfaat yang sangat besar.", en: "Satelit Io Jupiter was created with unique traits and immense benefits." },
      { id: "Allah menyebut Satelit Io Jupiter dalam Al-Qur'an agar manusia mengamati sains di baliknya.", en: "Allah mentions Satelit Io Jupiter in the Qur'an so humans observe the science behind it." }
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
        id: "Siapa yang menciptakan Satelit Io Jupiter dengan sempurna?",
        en: "Who created Satelit Io Jupiter perfectly?",
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
      id: "Eksplorasi anatomi dan struktur Satelit Io Jupiter mengungkap kehebatan rancangan sistem biologi dan alam yang seimbang.",
      en: "Exploration of the anatomy and structure of Satelit Io Jupiter reveals the brilliance of biological design and natural balance.",
    },
    anatomy: [
      {
        part: { id: "Struktur Khusus", en: "Special Structure" },
        desc: { id: "Didesain dengan presisi tinggi untuk beradaptasi di lingkungannya.", en: "Designed with high precision to adapt to its environment." },
      },
    ],
    wowFactor: {
      id: "Keajaiban sains dan wahyu yang sesuai: Allah menyebut Satelit Io Jupiter di Al-Qur'an ribuan tahun sebelum sains modern meneliti keunikan fungsionalnya.",
      en: "The alignment of science and revelation: Allah mentioned Satelit Io Jupiter in the Qur'an thousands of years before modern science researched its functional uniqueness.",
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
          id: "Apa hikmah utama diutusnya tanda sains tentang Satelit Io Jupiter?",
          en: "What is the primary wisdom of scientific signs regarding Satelit Io Jupiter?",
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

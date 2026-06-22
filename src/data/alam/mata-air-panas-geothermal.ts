import { ObjectData } from "../objects";

export const mataAirPanasGeothermalData: ObjectData = {
  slug: "mata-air-panas-geothermal",
  name: {
    id: "Mata Air Panas Geothermal",
    en: "Mata Air Panas Geothermal",
  },
  scientificName: "Hot Spring",
  surahName: "Al-Qur'an",
  surahReference: "Ciptaan Allah",
  icon: "♨️",
  category: "alam",
  type: "alam",
  unlockedAtPoints: 50,
  kosakata: [
    { arab: "خَلَقَ", latin: "Khalaqa", arti: "Menciptakan", artiEn: "Created", contohAyat: "Al-Qur'an Ciptaan Allah" }
  ],
  balita: {
    text: {
      id: "Ini Mata Air Panas Geothermal! Ciptaan Allah yang luar biasa indah. 🌟",
      en: "This is Mata Air Panas Geothermal! An amazingly beautiful creation of Allah. 🌟",
    },
    audioTranscript: {
      id: "Ini Mata Air Panas Geothermal. Allah menciptakan Mata Air Panas Geothermal dengan sangat baik agar kita semua bersyukur.",
      en: "This is Mata Air Panas Geothermal. Allah created Mata Air Panas Geothermal beautifully so we all become grateful.",
    },
    quiz: {
      question: {
        id: "Mana gambar Mata Air Panas Geothermal?",
        en: "Which one is the picture of Mata Air Panas Geothermal?",
      },
      options: [
        { text: { id: "♨️ Mata Air Panas Geothermal", en: "♨️ Mata Air Panas Geothermal" } },
        { text: { id: "📦 Kotak", en: "📦 Box" } },
      ],
      answerIdx: 0,
    },
  },
  anak: {
    text: {
      id: "Fakta menarik tentang Mata Air Panas Geothermal: Merupakan bukti keagungan penciptaan Allah di alam semesta.",
      en: "Interesting facts about Mata Air Panas Geothermal: It is a proof of Allah's majestic creation in the universe.",
    },
    facts: [
      { id: "Mata Air Panas Geothermal diciptakan dengan keunikan dan manfaat yang sangat besar.", en: "Mata Air Panas Geothermal was created with unique traits and immense benefits." },
      { id: "Allah menyebut Mata Air Panas Geothermal dalam Al-Qur'an agar manusia mengamati sains di baliknya.", en: "Allah mentions Mata Air Panas Geothermal in the Qur'an so humans observe the science behind it." }
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
        id: "Siapa yang menciptakan Mata Air Panas Geothermal dengan sempurna?",
        en: "Who created Mata Air Panas Geothermal perfectly?",
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
      id: "Eksplorasi anatomi dan struktur Mata Air Panas Geothermal mengungkap kehebatan rancangan sistem biologi dan alam yang seimbang.",
      en: "Exploration of the anatomy and structure of Mata Air Panas Geothermal reveals the brilliance of biological design and natural balance.",
    },
    anatomy: [
      {
        part: { id: "Struktur Khusus", en: "Special Structure" },
        desc: { id: "Didesain dengan presisi tinggi untuk beradaptasi di lingkungannya.", en: "Designed with high precision to adapt to its environment." },
      },
    ],
    wowFactor: {
      id: "Keajaiban sains dan wahyu yang sesuai: Allah menyebut Mata Air Panas Geothermal di Al-Qur'an ribuan tahun sebelum sains modern meneliti keunikan fungsionalnya.",
      en: "The alignment of science and revelation: Allah mentioned Mata Air Panas Geothermal in the Qur'an thousands of years before modern science researched its functional uniqueness.",
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
          id: "Apa hikmah utama diutusnya tanda sains tentang Mata Air Panas Geothermal?",
          en: "What is the primary wisdom of scientific signs regarding Mata Air Panas Geothermal?",
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

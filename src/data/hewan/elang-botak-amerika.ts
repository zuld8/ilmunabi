import { ObjectData } from "../objects";

export const elangBotakAmerikaData: ObjectData = {
  slug: "elang-botak-amerika",
  name: {
    id: "Elang Botak Amerika",
    en: "Elang Botak Amerika",
  },
  scientificName: "Haliaeetus leucocephalus",
  surahName: "Al-Qur'an",
  surahReference: "Ciptaan Allah",
  icon: "🦅",
  category: "hewan",
  type: "hewan",
  unlockedAtPoints: 50,
  kosakata: [
    { arab: "خَلَقَ", latin: "Khalaqa", arti: "Menciptakan", artiEn: "Created", contohAyat: "Al-Qur'an Ciptaan Allah" }
  ],
  balita: {
    text: {
      id: "Ini Elang Botak Amerika! Ciptaan Allah yang luar biasa indah. 🌟",
      en: "This is Elang Botak Amerika! An amazingly beautiful creation of Allah. 🌟",
    },
    audioTranscript: {
      id: "Ini Elang Botak Amerika. Allah menciptakan Elang Botak Amerika dengan sangat baik agar kita semua bersyukur.",
      en: "This is Elang Botak Amerika. Allah created Elang Botak Amerika beautifully so we all become grateful.",
    },
    quiz: {
      question: {
        id: "Mana gambar Elang Botak Amerika?",
        en: "Which one is the picture of Elang Botak Amerika?",
      },
      options: [
        { text: { id: "🦅 Elang Botak Amerika", en: "🦅 Elang Botak Amerika" } },
        { text: { id: "📦 Kotak", en: "📦 Box" } },
      ],
      answerIdx: 0,
    },
  },
  anak: {
    text: {
      id: "Fakta menarik tentang Elang Botak Amerika: Merupakan bukti keagungan penciptaan Allah di alam semesta.",
      en: "Interesting facts about Elang Botak Amerika: It is a proof of Allah's majestic creation in the universe.",
    },
    facts: [
      { id: "Elang Botak Amerika diciptakan dengan keunikan dan manfaat yang sangat besar.", en: "Elang Botak Amerika was created with unique traits and immense benefits." },
      { id: "Allah menyebut Elang Botak Amerika dalam Al-Qur'an agar manusia mengamati sains di baliknya.", en: "Allah mentions Elang Botak Amerika in the Qur'an so humans observe the science behind it." }
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
        id: "Siapa yang menciptakan Elang Botak Amerika dengan sempurna?",
        en: "Who created Elang Botak Amerika perfectly?",
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
      id: "Eksplorasi anatomi dan struktur Elang Botak Amerika mengungkap kehebatan rancangan sistem biologi dan alam yang seimbang.",
      en: "Exploration of the anatomy and structure of Elang Botak Amerika reveals the brilliance of biological design and natural balance.",
    },
    anatomy: [
      {
        part: { id: "Struktur Khusus", en: "Special Structure" },
        desc: { id: "Didesain dengan presisi tinggi untuk beradaptasi di lingkungannya.", en: "Designed with high precision to adapt to its environment." },
      },
    ],
    wowFactor: {
      id: "Keajaiban sains dan wahyu yang sesuai: Allah menyebut Elang Botak Amerika di Al-Qur'an ribuan tahun sebelum sains modern meneliti keunikan fungsionalnya.",
      en: "The alignment of science and revelation: Allah mentioned Elang Botak Amerika in the Qur'an thousands of years before modern science researched its functional uniqueness.",
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
          id: "Apa hikmah utama diutusnya tanda sains tentang Elang Botak Amerika?",
          en: "What is the primary wisdom of scientific signs regarding Elang Botak Amerika?",
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

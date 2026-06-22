import { ObjectData } from "../objects";

export const reseptorBauHidungData: ObjectData = {
  slug: "reseptor-bau-hidung",
  name: {
    id: "Reseptor Bau Hidung",
    en: "Reseptor Bau Hidung",
  },
  scientificName: "Olfactory receptor",
  surahName: "Al-Qur'an",
  surahReference: "Ciptaan Allah",
  icon: "👃",
  category: "tubuh",
  type: "tubuh",
  unlockedAtPoints: 50,
  kosakata: [
    { arab: "خَلَقَ", latin: "Khalaqa", arti: "Menciptakan", artiEn: "Created", contohAyat: "Al-Qur'an Ciptaan Allah" }
  ],
  balita: {
    text: {
      id: "Ini Reseptor Bau Hidung! Ciptaan Allah yang luar biasa indah. 🌟",
      en: "This is Reseptor Bau Hidung! An amazingly beautiful creation of Allah. 🌟",
    },
    audioTranscript: {
      id: "Ini Reseptor Bau Hidung. Allah menciptakan Reseptor Bau Hidung dengan sangat baik agar kita semua bersyukur.",
      en: "This is Reseptor Bau Hidung. Allah created Reseptor Bau Hidung beautifully so we all become grateful.",
    },
    quiz: {
      question: {
        id: "Mana gambar Reseptor Bau Hidung?",
        en: "Which one is the picture of Reseptor Bau Hidung?",
      },
      options: [
        { text: { id: "👃 Reseptor Bau Hidung", en: "👃 Reseptor Bau Hidung" } },
        { text: { id: "📦 Kotak", en: "📦 Box" } },
      ],
      answerIdx: 0,
    },
  },
  anak: {
    text: {
      id: "Fakta menarik tentang Reseptor Bau Hidung: Merupakan bukti keagungan penciptaan Allah di alam semesta.",
      en: "Interesting facts about Reseptor Bau Hidung: It is a proof of Allah's majestic creation in the universe.",
    },
    facts: [
      { id: "Reseptor Bau Hidung diciptakan dengan keunikan dan manfaat yang sangat besar.", en: "Reseptor Bau Hidung was created with unique traits and immense benefits." },
      { id: "Allah menyebut Reseptor Bau Hidung dalam Al-Qur'an agar manusia mengamati sains di baliknya.", en: "Allah mentions Reseptor Bau Hidung in the Qur'an so humans observe the science behind it." }
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
        id: "Siapa yang menciptakan Reseptor Bau Hidung dengan sempurna?",
        en: "Who created Reseptor Bau Hidung perfectly?",
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
      id: "Eksplorasi anatomi dan struktur Reseptor Bau Hidung mengungkap kehebatan rancangan sistem biologi dan alam yang seimbang.",
      en: "Exploration of the anatomy and structure of Reseptor Bau Hidung reveals the brilliance of biological design and natural balance.",
    },
    anatomy: [
      {
        part: { id: "Struktur Khusus", en: "Special Structure" },
        desc: { id: "Didesain dengan presisi tinggi untuk beradaptasi di lingkungannya.", en: "Designed with high precision to adapt to its environment." },
      },
    ],
    wowFactor: {
      id: "Keajaiban sains dan wahyu yang sesuai: Allah menyebut Reseptor Bau Hidung di Al-Qur'an ribuan tahun sebelum sains modern meneliti keunikan fungsionalnya.",
      en: "The alignment of science and revelation: Allah mentioned Reseptor Bau Hidung in the Qur'an thousands of years before modern science researched its functional uniqueness.",
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
          id: "Apa hikmah utama diutusnya tanda sains tentang Reseptor Bau Hidung?",
          en: "What is the primary wisdom of scientific signs regarding Reseptor Bau Hidung?",
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

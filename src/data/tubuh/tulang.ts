import { ObjectData } from "../objects";

export const tulangData: ObjectData = {
  slug: "tulang",
  name: {
    id: "Tulang",
    en: "Tulang",
  },
  scientificName: "Ossa",
  surahName: "Al-Isra",
  surahReference: "17:49",
  icon: "🦴",
  category: "tubuh",
  type: "tubuh",
  unlockedAtPoints: 50,
  kosakata: [
    { arab: "خَلَقَ", latin: "Khalaqa", arti: "Menciptakan", artiEn: "Created", contohAyat: "Al-Isra 17:49" }
  ],
  balita: {
    text: {
      id: "Ini Tulang! Ciptaan Allah yang luar biasa indah. 🌟",
      en: "This is Tulang! An amazingly beautiful creation of Allah. 🌟",
    },
    audioTranscript: {
      id: "Ini Tulang. Allah menciptakan Tulang dengan sangat baik agar kita semua bersyukur.",
      en: "This is Tulang. Allah created Tulang beautifully so we all become grateful.",
    },
    quiz: {
      question: {
        id: "Mana gambar Tulang?",
        en: "Which one is the picture of Tulang?",
      },
      options: [
        { text: { id: "🦴 Tulang", en: "🦴 Tulang" } },
        { text: { id: "📦 Kotak", en: "📦 Box" } },
      ],
      answerIdx: 0,
    },
  },
  anak: {
    text: {
      id: "Fakta menarik tentang Tulang: Merupakan bukti keagungan penciptaan Allah di alam semesta.",
      en: "Interesting facts about Tulang: It is a proof of Allah's majestic creation in the universe.",
    },
    facts: [
      { id: "Sistem Tulang di dalam tubuh kita bekerja 24 jam sehari secara otomatis tanpa kita perintahkan.", en: "Sistem Tulang di dalam tubuh kita bekerja 24 jam sehari secara otomatis tanpa kita perintahkan." },
      { id: "Miliaran sel penyusun Tulang berkomunikasi sangat cepat menggunakan sinyal listrik dan kimia.", en: "Miliaran sel penyusun Tulang berkomunikasi sangat cepat menggunakan sinyal listrik dan kimia." },
      { id: "Kesehatan Tulang sangat dipengaruhi oleh rasa syukur, ketenangan hati, dan nutrisi makanan yang thoyyib.", en: "Kesehatan Tulang sangat dipengaruhi oleh rasa syukur, ketenangan hati, dan nutrisi makanan yang thoyyib." }
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
        id: "Siapa yang menciptakan Tulang dengan sempurna?",
        en: "Who created Tulang perfectly?",
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
      id: "Eksplorasi anatomi dan struktur Tulang mengungkap kehebatan rancangan sistem biologi dan alam yang seimbang.",
      en: "Exploration of the anatomy and structure of Tulang reveals the brilliance of biological design and natural balance.",
    },
    anatomy: [
      { part: { id: "Sistem Sel", en: "Sistem Sel" }, desc: { id: "Susunan sel-sel spesifik dengan jaringan fungsional yang sangat rumit.", en: "Susunan sel-sel spesifik dengan jaringan fungsional yang sangat rumit." } }
    ],
    wowFactor: {
      id: "Keajaiban rancangan Tulang: Sel-sel pada Tulang memiliki kemampuan regenerasi dan pertahanan kekebalan mandiri yang melindungi tubuh kita dari penyakit setiap detik.",
      en: "Keajaiban rancangan Tulang: Sel-sel pada Tulang memiliki kemampuan regenerasi dan pertahanan kekebalan mandiri yang melindungi tubuh kita dari penyakit setiap detik.",
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
          id: "Apa hikmah utama diutusnya tanda sains tentang Tulang?",
          en: "What is the primary wisdom of scientific signs regarding Tulang?",
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

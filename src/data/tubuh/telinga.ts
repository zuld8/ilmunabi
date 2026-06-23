import { ObjectData } from "../objects";

export const telingaData: ObjectData = {
  slug: "telinga",
  name: {
    id: "Telinga",
    en: "Telinga",
  },
  scientificName: "Auris",
  surahName: "Al-Baqarah",
  surahReference: "2:7",
  icon: "👂",
  category: "tubuh",
  type: "tubuh",
  unlockedAtPoints: 50,
  kosakata: [
    { arab: "خَلَقَ", latin: "Khalaqa", arti: "Menciptakan", artiEn: "Created", contohAyat: "Al-Baqarah 2:7" }
  ],
  balita: {
    text: {
      id: "Ini Telinga! Ciptaan Allah yang luar biasa indah. 🌟",
      en: "This is Telinga! An amazingly beautiful creation of Allah. 🌟",
    },
    audioTranscript: {
      id: "Ini Telinga. Allah menciptakan Telinga dengan sangat baik agar kita semua bersyukur.",
      en: "This is Telinga. Allah created Telinga beautifully so we all become grateful.",
    },
    quiz: {
      question: {
        id: "Mana gambar Telinga?",
        en: "Which one is the picture of Telinga?",
      },
      options: [
        { text: { id: "👂 Telinga", en: "👂 Telinga" } },
        { text: { id: "📦 Kotak", en: "📦 Box" } },
      ],
      answerIdx: 0,
    },
  },
  anak: {
    text: {
      id: "Fakta menarik tentang Telinga: Merupakan bukti keagungan penciptaan Allah di alam semesta.",
      en: "Interesting facts about Telinga: It is a proof of Allah's majestic creation in the universe.",
    },
    facts: [
      { id: "Sistem Telinga di dalam tubuh kita bekerja 24 jam sehari secara otomatis tanpa kita perintahkan.", en: "Sistem Telinga di dalam tubuh kita bekerja 24 jam sehari secara otomatis tanpa kita perintahkan." },
      { id: "Miliaran sel penyusun Telinga berkomunikasi sangat cepat menggunakan sinyal listrik dan kimia.", en: "Miliaran sel penyusun Telinga berkomunikasi sangat cepat menggunakan sinyal listrik dan kimia." },
      { id: "Kesehatan Telinga sangat dipengaruhi oleh rasa syukur, ketenangan hati, dan nutrisi makanan yang thoyyib.", en: "Kesehatan Telinga sangat dipengaruhi oleh rasa syukur, ketenangan hati, dan nutrisi makanan yang thoyyib." }
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
        id: "Siapa yang menciptakan Telinga dengan sempurna?",
        en: "Who created Telinga perfectly?",
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
      id: "Eksplorasi anatomi dan struktur Telinga mengungkap kehebatan rancangan sistem biologi dan alam yang seimbang.",
      en: "Exploration of the anatomy and structure of Telinga reveals the brilliance of biological design and natural balance.",
    },
    anatomy: [
      { part: { id: "Sistem Sel", en: "Sistem Sel" }, desc: { id: "Susunan sel-sel spesifik dengan jaringan fungsional yang sangat rumit.", en: "Susunan sel-sel spesifik dengan jaringan fungsional yang sangat rumit." } }
    ],
    wowFactor: {
      id: "Keajaiban rancangan Telinga: Sel-sel pada Telinga memiliki kemampuan regenerasi dan pertahanan kekebalan mandiri yang melindungi tubuh kita dari penyakit setiap detik.",
      en: "Keajaiban rancangan Telinga: Sel-sel pada Telinga memiliki kemampuan regenerasi dan pertahanan kekebalan mandiri yang melindungi tubuh kita dari penyakit setiap detik.",
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
          id: "Apa hikmah utama diutusnya tanda sains tentang Telinga?",
          en: "What is the primary wisdom of scientific signs regarding Telinga?",
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

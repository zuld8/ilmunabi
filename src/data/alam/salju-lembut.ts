import { ObjectData } from "../objects";

export const saljuLembutData: ObjectData = {
  slug: "salju-lembut",
  name: {
    id: "Salju Lembut",
    en: "Salju Lembut",
  },
  scientificName: "Snowflake",
  surahName: "Hadist",
  surahReference: "Doa Istiftah",
  icon: "❄️",
  category: "alam",
  type: "alam",
  unlockedAtPoints: 50,
  kosakata: [
    { arab: "خَلَقَ", latin: "Khalaqa", arti: "Menciptakan", artiEn: "Created", contohAyat: "Hadist Doa Istiftah" }
  ],
  balita: {
    text: {
      id: "Ini Salju Lembut! Ciptaan Allah yang luar biasa indah. 🌟",
      en: "This is Salju Lembut! An amazingly beautiful creation of Allah. 🌟",
    },
    audioTranscript: {
      id: "Ini Salju Lembut. Allah menciptakan Salju Lembut dengan sangat baik agar kita semua bersyukur.",
      en: "This is Salju Lembut. Allah created Salju Lembut beautifully so we all become grateful.",
    },
    quiz: {
      question: {
        id: "Mana gambar Salju Lembut?",
        en: "Which one is the picture of Salju Lembut?",
      },
      options: [
        { text: { id: "❄️ Salju Lembut", en: "❄️ Salju Lembut" } },
        { text: { id: "📦 Kotak", en: "📦 Box" } },
      ],
      answerIdx: 0,
    },
  },
  anak: {
    text: {
      id: "Fakta menarik tentang Salju Lembut: Merupakan bukti keagungan penciptaan Allah di alam semesta.",
      en: "Interesting facts about Salju Lembut: It is a proof of Allah's majestic creation in the universe.",
    },
    facts: [
      { id: "Salju Lembut merupakan bagian dari sunnatullah (hukum alam) yang menjaga kestabilan energi di bumi.", en: "Salju Lembut merupakan bagian dari sunnatullah (hukum alam) yang menjaga kestabilan energi di bumi." },
      { id: "Keteraturan siklus Salju Lembut memungkinkan kehidupan biologis manusia berjalan dengan aman.", en: "Keteraturan siklus Salju Lembut memungkinkan kehidupan biologis manusia berjalan dengan aman." },
      { id: "Interaksi fisik Salju Lembut dengan unsur bumi lainnya menciptakan keindahan alam yang tak terhingga.", en: "Interaksi fisik Salju Lembut dengan unsur bumi lainnya menciptakan keindahan alam yang tak terhingga." }
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
        id: "Siapa yang menciptakan Salju Lembut dengan sempurna?",
        en: "Who created Salju Lembut perfectly?",
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
      id: "Eksplorasi anatomi dan struktur Salju Lembut mengungkap kehebatan rancangan sistem biologi dan alam yang seimbang.",
      en: "Exploration of the anatomy and structure of Salju Lembut reveals the brilliance of biological design and natural balance.",
    },
    anatomy: [
      { part: { id: "Sistem Fisika", en: "Sistem Fisika" }, desc: { id: "Bekerja di bawah hukum mekanika alam yang presisi dan stabil.", en: "Bekerja di bawah hukum mekanika alam yang presisi dan stabil." } }
    ],
    wowFactor: {
      id: "Keajaiban penciptaan Salju Lembut: Allah SWT menyeimbangkan gaya gravitasi, suhu, dan rotasi bumi dengan Salju Lembut agar tidak terjadi benturan atau kehancuran kosmis.",
      en: "Keajaiban penciptaan Salju Lembut: Allah SWT menyeimbangkan gaya gravitasi, suhu, dan rotasi bumi dengan Salju Lembut agar tidak terjadi benturan atau kehancuran kosmis.",
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
          id: "Apa hikmah utama diutusnya tanda sains tentang Salju Lembut?",
          en: "What is the primary wisdom of scientific signs regarding Salju Lembut?",
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

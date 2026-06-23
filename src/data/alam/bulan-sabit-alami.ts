import { ObjectData } from "../objects";

export const bulanSabitAlamiData: ObjectData = {
  slug: "bulan-sabit-alami",
  name: {
    id: "Bulan Sabit Alami",
    en: "Bulan Sabit Alami",
  },
  scientificName: "Moon var. alami",
  surahName: "Al-Qamar",
  surahReference: "54:1",
  icon: "🌙",
  category: "alam",
  type: "alam",
  unlockedAtPoints: 50,
  kosakata: [
    { arab: "خَلَقَ", latin: "Khalaqa", arti: "Menciptakan", artiEn: "Created", contohAyat: "Al-Qamar 54:1" }
  ],
  balita: {
    text: {
      id: "Ini Bulan Sabit Alami! Ciptaan Allah yang luar biasa indah. 🌟",
      en: "This is Bulan Sabit Alami! An amazingly beautiful creation of Allah. 🌟",
    },
    audioTranscript: {
      id: "Ini Bulan Sabit Alami. Allah menciptakan Bulan Sabit Alami dengan sangat baik agar kita semua bersyukur.",
      en: "This is Bulan Sabit Alami. Allah created Bulan Sabit Alami beautifully so we all become grateful.",
    },
    quiz: {
      question: {
        id: "Mana gambar Bulan Sabit Alami?",
        en: "Which one is the picture of Bulan Sabit Alami?",
      },
      options: [
        { text: { id: "🌙 Bulan Sabit Alami", en: "🌙 Bulan Sabit Alami" } },
        { text: { id: "📦 Kotak", en: "📦 Box" } },
      ],
      answerIdx: 0,
    },
  },
  anak: {
    text: {
      id: "Fakta menarik tentang Bulan Sabit Alami: Merupakan bukti keagungan penciptaan Allah di alam semesta.",
      en: "Interesting facts about Bulan Sabit Alami: It is a proof of Allah's majestic creation in the universe.",
    },
    facts: [
      { id: "Bulan Sabit Alami merupakan perwujudan energi geofisika atau meteorologi bumi.", en: "Bulan Sabit Alami merupakan perwujudan energi geofisika atau meteorologi bumi." },
      { id: "Keteraturan siklus termodinamika di balik Bulan Sabit Alami mendinginkan permukaan bumi secara alami.", en: "Keteraturan siklus termodinamika di balik Bulan Sabit Alami mendinginkan permukaan bumi secara alami." },
      { id: "Allah SWT merancang Bulan Sabit Alami agar siklus daur ulang mineral di bumi terus berjalan.", en: "Allah SWT merancang Bulan Sabit Alami agar siklus daur ulang mineral di bumi terus berjalan." }
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
        id: "Siapa yang menciptakan Bulan Sabit Alami dengan sempurna?",
        en: "Who created Bulan Sabit Alami perfectly?",
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
      id: "Eksplorasi anatomi dan struktur Bulan Sabit Alami mengungkap kehebatan rancangan sistem biologi dan alam yang seimbang.",
      en: "Exploration of the anatomy and structure of Bulan Sabit Alami reveals the brilliance of biological design and natural balance.",
    },
    anatomy: [
      { part: { id: "Dinamika Termal", en: "Dinamika Termal" }, desc: { id: "Hukum perpindahan panas dan momentum zat cair/gas di alam.", en: "Hukum perpindahan panas dan momentum zat cair/gas di alam." } }
    ],
    wowFactor: {
      id: "Keajaiban sains Bulan Sabit Alami: Keterpaduan gaya fisika elektromagnetik dan termal pada Bulan Sabit Alami menstabilkan cuaca ekstrem di kawasan sekitarnya.",
      en: "Keajaiban sains Bulan Sabit Alami: Keterpaduan gaya fisika elektromagnetik dan termal pada Bulan Sabit Alami menstabilkan cuaca ekstrem di kawasan sekitarnya.",
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
          id: "Apa hikmah utama diutusnya tanda sains tentang Bulan Sabit Alami?",
          en: "What is the primary wisdom of scientific signs regarding Bulan Sabit Alami?",
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

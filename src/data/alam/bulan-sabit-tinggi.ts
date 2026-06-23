import { ObjectData } from "../objects";

export const bulanSabitTinggiData: ObjectData = {
  slug: "bulan-sabit-tinggi",
  name: {
    id: "Bulan Sabit Tinggi",
    en: "Bulan Sabit Tinggi",
  },
  scientificName: "Moon var. tinggi",
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
      id: "Ini Bulan Sabit Tinggi! Ciptaan Allah yang luar biasa indah. 🌟",
      en: "This is Bulan Sabit Tinggi! An amazingly beautiful creation of Allah. 🌟",
    },
    audioTranscript: {
      id: "Ini Bulan Sabit Tinggi. Allah menciptakan Bulan Sabit Tinggi dengan sangat baik agar kita semua bersyukur.",
      en: "This is Bulan Sabit Tinggi. Allah created Bulan Sabit Tinggi beautifully so we all become grateful.",
    },
    quiz: {
      question: {
        id: "Mana gambar Bulan Sabit Tinggi?",
        en: "Which one is the picture of Bulan Sabit Tinggi?",
      },
      options: [
        { text: { id: "🌙 Bulan Sabit Tinggi", en: "🌙 Bulan Sabit Tinggi" } },
        { text: { id: "📦 Kotak", en: "📦 Box" } },
      ],
      answerIdx: 0,
    },
  },
  anak: {
    text: {
      id: "Fakta menarik tentang Bulan Sabit Tinggi: Merupakan bukti keagungan penciptaan Allah di alam semesta.",
      en: "Interesting facts about Bulan Sabit Tinggi: It is a proof of Allah's majestic creation in the universe.",
    },
    facts: [
      { id: "Bulan Sabit Tinggi merupakan perwujudan energi geofisika atau meteorologi bumi.", en: "Bulan Sabit Tinggi merupakan perwujudan energi geofisika atau meteorologi bumi." },
      { id: "Keteraturan siklus termodinamika di balik Bulan Sabit Tinggi mendinginkan permukaan bumi secara alami.", en: "Keteraturan siklus termodinamika di balik Bulan Sabit Tinggi mendinginkan permukaan bumi secara alami." },
      { id: "Allah SWT merancang Bulan Sabit Tinggi agar siklus daur ulang mineral di bumi terus berjalan.", en: "Allah SWT merancang Bulan Sabit Tinggi agar siklus daur ulang mineral di bumi terus berjalan." }
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
        id: "Siapa yang menciptakan Bulan Sabit Tinggi dengan sempurna?",
        en: "Who created Bulan Sabit Tinggi perfectly?",
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
      id: "Eksplorasi anatomi dan struktur Bulan Sabit Tinggi mengungkap kehebatan rancangan sistem biologi dan alam yang seimbang.",
      en: "Exploration of the anatomy and structure of Bulan Sabit Tinggi reveals the brilliance of biological design and natural balance.",
    },
    anatomy: [
      { part: { id: "Dinamika Termal", en: "Dinamika Termal" }, desc: { id: "Hukum perpindahan panas dan momentum zat cair/gas di alam.", en: "Hukum perpindahan panas dan momentum zat cair/gas di alam." } }
    ],
    wowFactor: {
      id: "Keajaiban sains Bulan Sabit Tinggi: Keterpaduan gaya fisika elektromagnetik dan termal pada Bulan Sabit Tinggi menstabilkan cuaca ekstrem di kawasan sekitarnya.",
      en: "Keajaiban sains Bulan Sabit Tinggi: Keterpaduan gaya fisika elektromagnetik dan termal pada Bulan Sabit Tinggi menstabilkan cuaca ekstrem di kawasan sekitarnya.",
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
          id: "Apa hikmah utama diutusnya tanda sains tentang Bulan Sabit Tinggi?",
          en: "What is the primary wisdom of scientific signs regarding Bulan Sabit Tinggi?",
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

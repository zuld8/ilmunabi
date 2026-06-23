import { ObjectData } from "../objects";

export const anggrekBulanData: ObjectData = {
  slug: "anggrek-bulan",
  name: {
    id: "Anggrek Bulan",
    en: "Anggrek Bulan",
  },
  scientificName: "Phalaenopsis amabilis",
  surahName: "Al-Qur'an",
  surahReference: "Ciptaan Allah",
  icon: "🌸",
  category: "tumbuhan",
  type: "tumbuhan",
  unlockedAtPoints: 50,
  kosakata: [
    { arab: "خَلَقَ", latin: "Khalaqa", arti: "Menciptakan", artiEn: "Created", contohAyat: "Al-Qur'an Ciptaan Allah" }
  ],
  balita: {
    text: {
      id: "Ini Anggrek Bulan! Ciptaan Allah yang luar biasa indah. 🌟",
      en: "This is Anggrek Bulan! An amazingly beautiful creation of Allah. 🌟",
    },
    audioTranscript: {
      id: "Ini Anggrek Bulan. Allah menciptakan Anggrek Bulan dengan sangat baik agar kita semua bersyukur.",
      en: "This is Anggrek Bulan. Allah created Anggrek Bulan beautifully so we all become grateful.",
    },
    quiz: {
      question: {
        id: "Mana gambar Anggrek Bulan?",
        en: "Which one is the picture of Anggrek Bulan?",
      },
      options: [
        { text: { id: "🌸 Anggrek Bulan", en: "🌸 Anggrek Bulan" } },
        { text: { id: "📦 Kotak", en: "📦 Box" } },
      ],
      answerIdx: 0,
    },
  },
  anak: {
    text: {
      id: "Fakta menarik tentang Anggrek Bulan: Merupakan bukti keagungan penciptaan Allah di alam semesta.",
      en: "Interesting facts about Anggrek Bulan: It is a proof of Allah's majestic creation in the universe.",
    },
    facts: [
      { id: "Tumbuhan Anggrek Bulan melakukan fotosintesis menyerap karbon dioksida dan menghasilkan oksigen segar.", en: "Tumbuhan Anggrek Bulan melakukan fotosintesis menyerap karbon dioksida dan menghasilkan oksigen segar." },
      { id: "Akar, batang, dan daun Anggrek Bulan bekerja menyerap mineral bumi untuk menghasilkan buah atau zat penyembuh.", en: "Akar, batang, dan daun Anggrek Bulan bekerja menyerap mineral bumi untuk menghasilkan buah atau zat penyembuh." },
      { id: "Zat hijau daun (klorofil) pada Anggrek Bulan adalah laboratorium biokimia canggih ciptaan Allah SWT.", en: "Zat hijau daun (klorofil) pada Anggrek Bulan adalah laboratorium biokimia canggih ciptaan Allah SWT." }
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
        id: "Siapa yang menciptakan Anggrek Bulan dengan sempurna?",
        en: "Who created Anggrek Bulan perfectly?",
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
      id: "Eksplorasi anatomi dan struktur Anggrek Bulan mengungkap kehebatan rancangan sistem biologi dan alam yang seimbang.",
      en: "Exploration of the anatomy and structure of Anggrek Bulan reveals the brilliance of biological design and natural balance.",
    },
    anatomy: [
      { part: { id: "Struktur Seluler", en: "Struktur Seluler" }, desc: { id: "Dinding sel selulosa kuat menyokong tegaknya tumbuhan mencari sinar matahari.", en: "Dinding sel selulosa kuat menyokong tegaknya tumbuhan mencari sinar matahari." } }
    ],
    wowFactor: {
      id: "Keajaiban sains Anggrek Bulan: Struktur pembuluh kayu dan tapis pada Anggrek Bulan mengalirkan air melawan gravitasi bumi tanpa suara, membuktikan kehebatan rekayasa biologi Allah.",
      en: "Keajaiban sains Anggrek Bulan: Struktur pembuluh kayu dan tapis pada Anggrek Bulan mengalirkan air melawan gravitasi bumi tanpa suara, membuktikan kehebatan rekayasa biologi Allah.",
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
          id: "Apa hikmah utama diutusnya tanda sains tentang Anggrek Bulan?",
          en: "What is the primary wisdom of scientific signs regarding Anggrek Bulan?",
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

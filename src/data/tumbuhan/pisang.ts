import { ObjectData } from "../objects";

export const pisangData: ObjectData = {
  slug: "pisang",
  name: {
    id: "Pisang",
    en: "Pisang",
  },
  scientificName: "Musa paradisiaca",
  surahName: "Al-Waqi'ah",
  surahReference: "56:29",
  icon: "🍌",
  category: "tumbuhan",
  type: "tumbuhan",
  unlockedAtPoints: 50,
  kosakata: [
    { arab: "خَلَقَ", latin: "Khalaqa", arti: "Menciptakan", artiEn: "Created", contohAyat: "Al-Waqi'ah 56:29" }
  ],
  balita: {
    text: {
      id: "Ini Pisang! Ciptaan Allah yang luar biasa indah. 🌟",
      en: "This is Pisang! An amazingly beautiful creation of Allah. 🌟",
    },
    audioTranscript: {
      id: "Ini Pisang. Allah menciptakan Pisang dengan sangat baik agar kita semua bersyukur.",
      en: "This is Pisang. Allah created Pisang beautifully so we all become grateful.",
    },
    quiz: {
      question: {
        id: "Mana gambar Pisang?",
        en: "Which one is the picture of Pisang?",
      },
      options: [
        { text: { id: "🍌 Pisang", en: "🍌 Pisang" } },
        { text: { id: "📦 Kotak", en: "📦 Box" } },
      ],
      answerIdx: 0,
    },
  },
  anak: {
    text: {
      id: "Fakta menarik tentang Pisang: Merupakan bukti keagungan penciptaan Allah di alam semesta.",
      en: "Interesting facts about Pisang: It is a proof of Allah's majestic creation in the universe.",
    },
    facts: [
      { id: "Tumbuhan Pisang melakukan fotosintesis menyerap karbon dioksida dan menghasilkan oksigen segar.", en: "Tumbuhan Pisang melakukan fotosintesis menyerap karbon dioksida dan menghasilkan oksigen segar." },
      { id: "Akar, batang, dan daun Pisang bekerja menyerap mineral bumi untuk menghasilkan buah atau zat penyembuh.", en: "Akar, batang, dan daun Pisang bekerja menyerap mineral bumi untuk menghasilkan buah atau zat penyembuh." },
      { id: "Zat hijau daun (klorofil) pada Pisang adalah laboratorium biokimia canggih ciptaan Allah SWT.", en: "Zat hijau daun (klorofil) pada Pisang adalah laboratorium biokimia canggih ciptaan Allah SWT." }
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
        id: "Siapa yang menciptakan Pisang dengan sempurna?",
        en: "Who created Pisang perfectly?",
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
      id: "Eksplorasi anatomi dan struktur Pisang mengungkap kehebatan rancangan sistem biologi dan alam yang seimbang.",
      en: "Exploration of the anatomy and structure of Pisang reveals the brilliance of biological design and natural balance.",
    },
    anatomy: [
      { part: { id: "Struktur Seluler", en: "Struktur Seluler" }, desc: { id: "Dinding sel selulosa kuat menyokong tegaknya tumbuhan mencari sinar matahari.", en: "Dinding sel selulosa kuat menyokong tegaknya tumbuhan mencari sinar matahari." } }
    ],
    wowFactor: {
      id: "Keajaiban sains Pisang: Struktur pembuluh kayu dan tapis pada Pisang mengalirkan air melawan gravitasi bumi tanpa suara, membuktikan kehebatan rekayasa biologi Allah.",
      en: "Keajaiban sains Pisang: Struktur pembuluh kayu dan tapis pada Pisang mengalirkan air melawan gravitasi bumi tanpa suara, membuktikan kehebatan rekayasa biologi Allah.",
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
          id: "Apa hikmah utama diutusnya tanda sains tentang Pisang?",
          en: "What is the primary wisdom of scientific signs regarding Pisang?",
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

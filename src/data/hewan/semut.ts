import { ObjectData } from "../objects";

export const semutData: ObjectData = {
  slug: "semut",
  name: { id: "Semut", en: "Ant" },
  scientificName: "Formicidae",
  surahName: "An-Naml (18)",
  surahReference: "27:18",
  icon: "🐜",
  category: "Serangga",
  type: "hewan",
  unlockedAtPoints: 50,
  kosakata: [
    {
      arab: "نَمْلٌ",
      latin: "Naml",
      arti: "Semut",
      artiEn: "Ant",
      contohAyat: "An-Naml 27:18",
      icon: "🐜"
    },
    {
      arab: "مَسَاكِنُ",
      latin: "Masakin",
      arti: "Sarang/Rumah",
      artiEn: "Dwellings",
      contohAyat: "An-Naml 27:18",
      icon: "🏡"
    },
    {
      arab: "سُلَيْمَانُ",
      latin: "Sulaiman",
      arti: "Nabi Sulaiman",
      artiEn: "Prophet Solomon",
      contohAyat: "An-Naml 27:18",
      icon: "👑"
    },
    {
      arab: "فَرَمُونُ",
      latin: "Faramun",
      arti: "Feromon",
      artiEn: "Pheromone",
      contohAyat: "An-Naml 27:18",
      icon: "🧪"
    }
  ],
  balita: {
    text: {
      id: "Ini semut! Semut sangat kuat. Semut suka bekerja sama. 🐜",
      en: "This is an ant! Ants are very strong. Ants like to work together. 🐜",
    },
    audioTranscript: {
      id: "Ini semut! Semut sangat kuat. Semut suka bekerja sama.",
      en: "This is an ant! Ants are very strong. Ants like to work together.",
    },
    quiz: {
      question: {
        id: "Mana gambar semut?",
        en: "Which picture is the ant?",
      },
      options: [
        { text: { id: "🐜 Semut", en: "🐜 Ant" }, isImage: true },
        { text: { id: "🐝 Lebah", en: "🐝 Bee" }, isImage: true },
        { text: { id: "🕷️ Laba-laba", en: "🕷️ Spider" }, isImage: true },
      ],
      answerIdx: 0,
    },
  },
  anak: {
    text: {
      id: "Semut adalah serangga sosial yang hidup teratur dan memiliki ratu sebagai pemimpin.",
      en: "Ants are social insects that live in ordered societies led by a queen.",
    },
    facts: [
      {
        id: "Semut bisa angkat beban 50x berat badannya.",
        en: "Ants can lift weights 50 times their own body weight.",
      },
      {
        id: "Semut berkomunikasi menggunakan bau (feromon).",
        en: "Ants communicate using scents (pheromones).",
      },
      {
        id: "Satu koloni semut bisa berisi jutaan semut.",
        en: "A single ant colony can contain millions of ants.",
      },
      {
        id: "Semut tidak punya telinga — mereka 'dengar' lewat getaran tanah.",
        en: "Ants do not have ears — they 'hear' through ground vibrations.",
      },
      {
        id: "Semut sudah ada di bumi sejak 130 juta tahun lalu.",
        en: "Ants have been on Earth since 130 million years ago.",
      },
    ],
    quranVerse: {
      arabic: "قَالَتْ نَمْلَةٌ يٰٓاَيُّهَا النَّمْلُ ادْخُلُوْا مَسٰكِنَكُمْ",
      transliteration: "Qālat namlātun yā ayyuhan-namlu udkhulū masākinakum",
      translation: {
        id: "Berkatalah seekor semut: Wahai semut-semut, masuklah ke sarang-sarangmu",
        en: "An ant said, 'O ants, enter your dwellings'",
      },
    },
    quiz: {
      question: {
        id: "Bagaimana cara semut mendengarkan suara?",
        en: "How do ants hear sounds?",
      },
      options: [
        { text: { id: "Dengan telinga besar", en: "With large ears" } },
        { text: { id: "Lewat getaran tanah", en: "Through ground vibrations" } },
        { text: { id: "Menggunakan mata mereka", en: "Using their eyes" } },
        { text: { id: "Mereka tidak bisa mendengar", en: "They cannot hear at all" } },
      ],
      answerIdx: 1,
    },
  },
  explorer: {
    text: {
      id: "Semut memiliki sistem komunikasi sosial yang canggih yang diakui sains modern.",
      en: "Ants have sophisticated social communication systems recognized by modern science.",
    },
    anatomy: [
      {
        part: { id: "Mandibula", en: "Mandibles" },
        desc: { id: "Rahang kuat untuk mencapit, membawa beban, dan menggali sarang.", en: "Strong jaws used for pinching, carrying loads, and digging." },
      },
      {
        part: { id: "Antena", en: "Antennae" },
        desc: { id: "Alat indra utama untuk mencium aroma feromon dan berkomunikasi lewat sentuhan.", en: "Main sensory organs used to smell pheromones and touch-communicate." },
      },
      {
        part: { id: "Eksoskeleton", en: "Exoskeleton" },
        desc: { id: "Kerangka luar keras yang melindungi organ dalam tanpa perlu tulang dalam.", en: "Hard outer skeleton that protects internal organs without bones." },
      },
    ],
    wowFactor: {
      id: "Ayat ini menggambarkan semut yang BERBICARA dan memberi peringatan kepada kawanannya saat pasukan Nabi Sulaiman lewat. Ilmu modern baru membuktikan semut berkomunikasi secara kompleks menggunakan feromon dan getaran — 1.400 tahun setelah Al-Qur'an menggambarkan seekor semut yang memberi peringatan kepada kawanannya. Nabi Sulaiman dalam kisah ini bahkan MENDENGAR dan MEMAHAMI perkataan semut tersebut — ini mukjizat yang disebut langsung dalam Qur'an.",
      en: "This verse describes an ant SPEAKING and warning its peers as Solomon's army approached. Modern science only recently proved that ants communicate in complex ways using pheromones and vibrations — 1,400 years after the Qur'an depicted a single ant warning its colony. Prophet Solomon in this story even HEARD and UNDERSTOOD the ant's words — a miracle mentioned directly in the Qur'an.",
    },
    quranVerse: {
      arabic: "حَتَّىٰ إِذَا أَتَوْا عَلَىٰ وَادِ النَّمْلِ قَالَتْ نَمْلَةٌ يَا أَيُّهَا النَّمْلُ ادْخُلُوا مَسَاكِنَكُمْ لَا يَحْطِمَنَّكُمْ سُلَيْمَانُ وَجُنُودُهُ وَهُمْ لَا يَشْعُرُونَ",
      transliteration: "Hattaaa izaa ataw 'alaa waadin-namli qaalat namlatuy yaa ayyuhan-namlud khuloo masaakinakum laa yahtimannakum Sulaimaanu wa junooduhoo wa hum laa yash'uroon",
      translation: {
        id: "Hingga ketika mereka sampai di lembah semut, berkatalah seekor semut, 'Wahai semut-semut! Masuklah ke dalam sarang-sarangmu, agar kamu tidak diinjak oleh Sulaiman dan bala tentaranya, sedangkan mereka tidak menyadari.'",
        en: "Until, when they came upon the valley of the ants, an ant said, 'O ants, enter your dwellings that you not be crushed by Solomon and his soldiers while they perceive not.'",
      },
      context: {
        id: "Nabi Sulaiman tersenyum mendengar perkataan semut tersebut, membuktikan mukjizat beliau yang dikaruniai kemampuan memahami bahasa binatang.",
        en: "Prophet Solomon smiled upon hearing the ant's speech, confirming his miracle of understanding animal languages.",
      },
    },
    quiz: {
      question: {
        id: "Zat kimia apa yang diproduksi semut untuk menandai jalur dan berkomunikasi?",
        en: "Which chemical compound do ants produce to mark trails and communicate?",
      },
      options: [
        { text: { id: "Klorofil", en: "Chlorophyll" } },
        { text: { id: "Feromon", en: "Pheromones" } },
        { text: { id: "Oksigen", en: "Oxygen" } },
        { text: { id: "Glukosa", en: "Glucose" } },
      ],
      answerIdx: 1,
    },
  },
};

import { ObjectData } from "../objects";

export const kurmaData: ObjectData = {
  slug: "kurma",
  name: { id: "Kurma", en: "Date Palm" },
  scientificName: "Phoenix dactylifera",
  surahName: "Maryam (25)",
  surahReference: "19:25",
  icon: "🌴",
  category: "Tumbuhan",
  type: "tumbuhan",
  unlockedAtPoints: 0,
  kosakata: [
    {
      arab: "نَخْلٌ",
      latin: "Nakhl",
      arti: "Pohon Kurma",
      artiEn: "Date Palm",
      contohAyat: "Maryam 19:25",
      icon: "🌴"
    },
    {
      arab: "رُطَبٌ",
      latin: "Rutab",
      arti: "Kurma Basah/Segar",
      artiEn: "Fresh Dates",
      contohAyat: "Maryam 19:25",
      icon: "🧆"
    },
    {
      arab: "جِذْعٌ",
      latin: "Jidz'",
      arti: "Batang Pohon",
      artiEn: "Trunk",
      contohAyat: "Maryam 19:25",
      icon: "🪵"
    },
    {
      arab: "جَنِيٌّ",
      latin: "Janiyy",
      arti: "Matang/Siap Dipetik",
      artiEn: "Ripe/Freshly Harvested",
      contohAyat: "Maryam 19:25",
      icon: "✨"
    }
  ],
  balita: {
    text: {
      id: "Ini pohon kurma! Kurma tumbuh di padang pasir yang panas. Buahnya manis sekali dan bikin badan sehat! 🌴",
      en: "This is a date palm! Dates grow in the hot desert. The fruit is very sweet and makes your body strong! 🌴",
    },
    audioTranscript: {
      id: "Ini pohon kurma! Kurma tumbuh di padang pasir yang panas. Buahnya manis sekali dan bikin badan sehat.",
      en: "This is a date palm! Dates grow in the hot desert. The fruit is very sweet and makes your body strong.",
    },
    quiz: {
      question: {
        id: "Buah manis apa yang tumbuh di pohon kurma?",
        en: "Which sweet fruit grows on the date palm?",
      },
      options: [
        { text: { id: "🌴 Kurma", en: "🌴 Date" }, isImage: true },
        { text: { id: "🍩 Donat", en: "🍩 Donut" }, isImage: true },
        { text: { id: "🍭 Permen", en: "🍭 Candy" }, isImage: true },
      ],
      answerIdx: 0,
    },
  },
  anak: {
    text: {
      id: "Kurma adalah pohon luar biasa yang bisa bertahan hidup di gurun yang kering dan menghasilkan buah sangat bergizi.",
      en: "The date palm is an amazing tree that can survive in dry deserts and produce highly nutritious fruit.",
    },
    facts: [
      {
        id: "Pohon kurma bisa tumbuh tinggi sekali dan hidup lebih dari 100 tahun.",
        en: "Date palm trees can grow very tall and live for more than 100 years.",
      },
      {
        id: "Biji kurma sangat kuat dan bisa tidur di padang pasir bertahun-tahun sampai mendapat air untuk tumbuh.",
        en: "Date seeds are very tough and can lie dormant in the desert for years until water helps them grow.",
      },
      {
        id: "Satu tangkai kurma bisa menghasilkan ribuan buah kurma yang manis.",
        en: "A single bunch of dates can produce thousands of sweet date fruits.",
      },
    ],
    quranVerse: {
      arabic: "وَهـُزِّي إِلَيْكِ بِجِذْعِ النَّخْلَةِ تُسَاقِطْ عَلَيْكِ رُطَبًا جَنِيًّا",
      transliteration: "Wa huzziii ilaiki bijiz'in-nakhlati tusaaqit 'alaiki rutaban janiyyaa",
      translation: {
        id: "Dan goyanglah pangkal pohon kurma itu ke arahmu, niscaya (pohon) itu akan menggugurkan buah kurma yang masak kepadamu.",
        en: "And shake toward you the trunk of the date palm; it will drop upon you ripe, fresh dates.",
      },
    },
    quiz: {
      question: {
        id: "Berapa lama rata-rata pohon kurma dapat bertahan hidup?",
        en: "What is the average lifespan of a date palm tree?",
      },
      options: [
        { text: { id: "5 tahun", en: "5 years" } },
        { text: { id: "Lebih dari 100 tahun", en: "More than 100 years" } },
        { text: { id: "Hanya beberapa bulan", en: "Only a few months" } },
      ],
      answerIdx: 1,
    },
  },
  explorer: {
    text: {
      id: "Sistem perakaran kurma yang dalam dan adaptasi daunnya menjadikannya model ketahanan di lingkungan ekstrem.",
      en: "The date palm's deep root system and leaf adaptations make it a model of resilience in extreme desert environments.",
    },
    anatomy: [
      {
        part: { id: "Akar Tunggang Gurun", en: "Deep Taproots" },
        desc: { id: "Akar yang dapat menembus tanah hingga kedalaman puluhan meter untuk mencari air di lapisan air bawah tanah.", en: "Roots that can penetrate soil down to dozens of meters to reach groundwater tables." },
      },
      {
        part: { id: "Lapisan Lilin Daun", en: "Waxy Leaf Coating" },
        desc: { id: "Lapisan pelindung khusus pada daun pelepah kurma untuk mencegah penguapan air berlebihan.", en: "Special protective coating on palm leaves that prevents excessive water evaporation." },
      },
    ],
    wowFactor: {
      id: "Allah memerintahkan Maryam yang sedang lemah setelah melahirkan untuk menggoyang pohon kurma ('huzzi ilaiki bijiz'in-nakhlati'). Sains membuktikan kurma mengandung senyawa aktif seperti oksitosin yang mempercepat pemulihan persalinan, serta gula fruktosa sederhana yang langsung diserap tubuh untuk mengembalikan energi dalam hitungan menit.",
      en: "Allah commanded Maryam, who was weak after childbirth, to shake the date palm trunk. Science proves dates contain active compounds like oxytocin that aid uterine recovery, and simple fructose sugars that are instantly absorbed to restore energy in minutes.",
    },
    quranVerse: {
      arabic: "وَهُزِّي إِلَيْكِ بِجِذْعِ النَّخْلَةِ تُسَاقِطْ عَلَيْكِ رُطَبًا جَنِيًّا",
      transliteration: "Wa huzziii ilaiki bijiz'in-nakhlati tusaaqit 'alaiki rutaban janiyyaa",
      translation: {
        id: "Dan goyanglah pangkal pohon kurma itu ke arahmu, niscaya (pohon) itu akan menggugurkan buah kurma yang masak kepadamu.",
        en: "And shake toward you the trunk of the date palm; it will drop upon you ripe, fresh dates.",
      },
      context: {
        id: "Perintah menggoyang pohon kurma saat Maryam dalam kondisi fisik terlemah mengajarkan konsep ikhtiar (usaha nyata) yang berjalan berdampingan dengan tawakal dan rahmat dari Allah.",
        en: "The command to shake the date palm when Maryam was at her weakest teaches the concept of active effort (ikhtiar) which goes hand-in-hand with trust and divine sustenance from Allah.",
      },
    },
    quiz: {
      question: {
        id: "Zat gizi apa dalam kurma yang terbukti secara ilmiah membantu memulihkan energi ibu melahirkan secara instan?",
        en: "Which nutrient in dates is scientifically proven to restore energy instantly for mothers after childbirth?",
      },
      options: [
        { text: { id: "Lemak jenuh", en: "Saturated fats" } },
        { text: { id: "Gula fruktosa sederhana yang mudah diserap", en: "Easily absorbed simple fructose sugars" } },
        { text: { id: "Zat besi keras", en: "Heavy iron" } },
      ],
      answerIdx: 1,
    },
  },
};

import { ObjectData } from "../objects";

export const tinData: ObjectData = {
  slug: "tin",
  name: { id: "Tin", en: "Fig" },
  scientificName: "Ficus carica",
  surahName: "At-Tin (1)",
  surahReference: "95:1",
  icon: "🫒",
  category: "Tumbuhan",
  type: "tumbuhan",
  unlockedAtPoints: 100,
  kosakata: [
    {
      arab: "تِينٌ",
      latin: "Tiin",
      arti: "Buah Tin",
      artiEn: "Fig",
      contohAyat: "At-Tin 95:1",
      icon: "🫒"
    },
    {
      arab: "قَسَمٌ",
      latin: "Qasam",
      arti: "Sumpah",
      artiEn: "Oath",
      contohAyat: "At-Tin 95:1",
      icon: "📜"
    },
    {
      arab: "حُلْوٌ",
      latin: "Hulw",
      arti: "Manis",
      artiEn: "Sweet",
      contohAyat: "At-Tin 95:1",
      icon: "🍯"
    },
    {
      arab: "هَضْمٌ",
      latin: "Hadhm",
      arti: "Pencernaan",
      artiEn: "Digestion",
      contohAyat: "At-Tin 95:1",
      icon: "🫁"
    }
  ],
  balita: {
    text: {
      id: "Ini pohon buah tin! Buah tin rasanya sangat manis dan lembut sekali saat dimakan. Buah tin bagus untuk pencernaan kita! 🫒",
      en: "This is a fig tree! Figs taste very sweet and soft when eaten. Figs are great for our digestion! 🫒",
    },
    audioTranscript: {
      id: "Ini pohon buah tin! Buah tin rasanya sangat manis dan lembut sekali saat dimakan. Buah tin bagus untuk pencernaan kita.",
      en: "This is a fig tree! Figs taste very sweet and soft when eaten. Figs are great for our digestion.",
    },
    quiz: {
      question: {
        id: "Bagaimana rasa buah tin saat dimakan?",
        en: "How do figs taste when eaten?",
      },
      options: [
        { text: { id: "🫒 Manis dan lembut", en: "🫒 Sweet and soft" }, isImage: true },
        { text: { id: "🍋 Sangat asam", en: "🍋 Very sour" }, isImage: true },
        { text: { id: "🌶️ Pedas sekali", en: "🌶️ Very spicy" }, isImage: true },
      ],
      answerIdx: 0,
    },
  },
  anak: {
    text: {
      id: "Buah tin adalah salah satu buah istimewa yang disebutkan dalam Al-Qur'an dan memiliki sejarah yang sangat tua.",
      en: "The fig is a special fruit mentioned in the Qur'an and has a very ancient history.",
    },
    facts: [
      {
        id: "Pohon tin adalah salah satu pohon pertama yang dibudidayakan oleh manusia ribuan tahun lalu.",
        en: "The fig tree is one of the first trees cultivated by humans thousands of years ago.",
      },
      {
        id: "Buah tin tidak memiliki bunga di luar, bunganya tersembunyi di dalam buahnya yang bulat!",
        en: "Figs do not have flowers on the outside; the flowers are hidden inside the round fruit!",
      },
      {
        id: "Buah tin kaya akan kalsium dan serat yang membantu perut kita bekerja dengan sehat.",
        en: "Figs are rich in calcium and fiber that help our stomachs function healthily.",
      },
    ],
    quranVerse: {
      arabic: "وَالتِّينِ وَالزَّيْتُونِ",
      transliteration: "Wat-teeni waz-zaitoon",
      translation: {
        id: "Demi buah tin dan buah zaitun.",
        en: "By the fig and the olive.",
      },
    },
    quiz: {
      question: {
        id: "Di manakah letak bunga pohon buah tin?",
        en: "Where are the flowers of the fig tree located?",
      },
      options: [
        { text: { id: "Di ujung daun", en: "At the leaf tips" } },
        { text: { id: "Tersembunyi di dalam buahnya", en: "Hidden inside the fruit" } },
        { text: { id: "Di bawah akar", en: "Under the roots" } },
      ],
      answerIdx: 1,
    },
  },
  explorer: {
    text: {
      id: "Buah tin memiliki simbiosis mutualisme unik dengan tawon tin untuk penyerbukan internal.",
      en: "The fig fruit has a unique mutualistic symbiosis with fig wasps for internal pollination.",
    },
    anatomy: [
      {
        part: { id: "Sikonium (Syconium)", en: "Syconium" },
        desc: { id: "Struktur buah tertutup berbentuk kantung yang menampung ratusan bunga kecil di bagian dalamnya.", en: "Closed hollow fruit structure containing hundreds of tiny internal flowers." },
      },
      {
        part: { id: "Ostiole", en: "Ostiole" },
        desc: { id: "Lubang kecil di ujung buah sebagai jalan masuk satu-satunya bagi tawon penyerbuk.", en: "Small passage at the fruit tip functioning as the only entrance for wasp pollinators." },
      },
    ],
    wowFactor: {
      id: "Sumpah Allah dalam Surah At-Tin menggabungkan Tin dan Zaitun. Studi nutrisi modern menunjukkan kombinasi buah tin dan zaitun mengandung senyawa metallothionein, senyawa anti penuaan sel yang bekerja optimal jika dikonsumsi dengan perbandingan tepat 1 buah tin dan 7 buah zaitun — rahasia menakjubkan dari sumpah Allah!",
      en: "Allah's oath in Surah At-Tin joins the Fig and the Olive. Modern nutritional studies show that combining figs and olives produces metallothionein, an anti-aging compound that is highly effective when consumed in a ratio of exactly 1 fig to 7 olives — a stunning secret behind Allah's oath!",
    },
    quranVerse: {
      arabic: "وَالتِّينِ وَالزَّيْتُونِ",
      transliteration: "Wat-teeni waz-zaitoon",
      translation: {
        id: "Demi buah tin dan buah zaitun.",
        en: "By the fig and the olive.",
      },
      context: {
        id: "Penyebutan buah tin sebagai sumpah Allah menunjukkan pentingnya buah ini sebagai sumber nutrisi tinggi dan obat penyembuh alami bagi manusia.",
        en: "The mention of the fig as a divine oath highlights its significant value as a high-nutrient source and natural remedy for humanity.",
      },
    },
    quiz: {
      question: {
        id: "Berapa perbandingan konsumsi buah tin dan zaitun yang terbukti secara nutrisi mengaktifkan senyawa anti-penuaan sel (metallothionein)?",
        en: "What ratio of consuming figs to olives is nutritionally proven to activate the cell anti-aging compound metallothionein?",
      },
      options: [
        { text: { id: "5 tin dan 5 zaitun", en: "5 figs and 5 olives" } },
        { text: { id: "1 tin dan 7 zaitun", en: "1 fig and 7 olives" } },
        { text: { id: "10 tin dan 1 zaitun", en: "10 figs and 1 olive" } },
      ],
      answerIdx: 1,
    },
  },
};

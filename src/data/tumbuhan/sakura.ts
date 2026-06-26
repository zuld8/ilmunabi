import { ObjectData } from "../objects";

export const sakuraData: ObjectData = {
  slug: "sakura",
  name: { id: "Sakura", en: "Cherry Blossom" },
  icon: "🌸",
  category: "tumbuhan",
  type: "tumbuhan",
  scientificName: "Prunus serrulata",
  surahName: "Al-Baqarah",
  surahReference: "2:164",
  unlockedAtPoints: 160,
  kosakata: [
    { arab: "زَهْرَةُ الكَرَز", latin: "zahratul karaz", arti: "Sakura/Bunga Ceri", artiEn: "Cherry blossom", contohAyat: "Bunga sakura berguguran." }
  ],
  balita: {
    text: { id: "Warnanya merah muda dan kelopaknya beterbangan seperti salju! 🌸", en: "Its color is pink and its petals fly around like snow! 🌸" },
    audioTranscript: { id: "Bunga sakura tumbuhnya banyak sekaaaliii di satu pohon. Kalau tertiup angin, kelopaknya akan jatuh menari-nari di udara. Cantik banget!", en: "Cherry blossoms grow in huuuge numbers on one tree. When blown by the wind, the petals will fall dancing in the air. So pretty!" },
    quiz: {
      question: { id: "Apa yang terjadi pada bunga sakura jika tertiup angin kencang?", en: "What happens to cherry blossoms if blown by strong winds?" },
      options: [
        { text: { id: "Pohonnya akan terbang ke awan", en: "The tree will fly to the clouds" } },
        { text: { id: "Kelopaknya rontok dan beterbangan", en: "Its petals fall and fly around" } },
        { text: { id: "Bunganya berubah jadi batu", en: "The flower turns into stone" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Bunga Sakura ini asalnya dari negara Jepang! Bunga ini sangat spesial karena ia hanya mekar penuh selama satu atau dua minggu setiap awal musim semi. Makanya kalau lagi mekar, orang-orang sangat senang melihatnya.", en: "Cherry blossoms come from Japan! This flower is very special because it only fully blooms for one or two weeks at the beginning of spring. That's why when they bloom, people are very happy to see them." },
    facts: [
      { id: "Di Jepang, tradisi melihat bunga sakura disebut 'Hanami'.", en: "In Japan, the tradition of viewing cherry blossoms is called 'Hanami'." },
      { id: "Ada lebih dari 200 varietas bunga sakura.", en: "There are more than 200 varieties of cherry blossoms." },
      { id: "Meskipun disebut pohon ceri, pohon sakura kebanyakan tidak menghasilkan buah ceri yang bisa dimakan.", en: "Although called cherry trees, most sakura trees do not produce edible cherries." }
    ],
    quranVerse: { arabic: "...", transliteration: "...", translation: { id: "...", en: "..." } },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  },
  explorer: {
    text: { id: "Sakura mengajarkan kita bahwa keindahan di dunia ini tidak ada yang abadi, bunga yang mekar luar biasa cantik pun akan gugur dalam hitungan hari. Ini mengingatkan kita bahwa dunia hanyalah sementara, dan kampung abadi kita kelak adalah Surga yang diciptakan Allah (Al-Baqi', Yang Maha Kekal).", en: "Sakura teaches us that beauty in this world is not eternal, even incredibly beautiful blooming flowers will fall in a matter of days. This reminds us that the world is only temporary, and our eternal home later is Paradise created by Allah (Al-Baqi', The Eternal)." },
    quranVerse: {
      arabic: "كُلُّ مَنْ عَلَيْهَا فَانٍ ۝ وَيَبْقَىٰ وَجْهُ رَبِّكَ ذُو الْجَلَالِ وَالْإِكْرَامِ",
      transliteration: "Kullu man 'alayhā fān. Wa yabqā wajhu rabbika dhul-jalāli wal-ikrām",
      translation: { id: "Semua yang ada di bumi itu akan binasa. Dan tetap kekal Zat Tuhanmu yang mempunyai kebesaran dan kemuliaan.", en: "Everyone upon the earth will perish, And there will remain the Face of your Lord, Owner of Majesty and Honor." }
    },
    anatomy: [{ part: { id: "Bagian", en: "Part" }, desc: { id: "Penjelasan", en: "Explanation" } }],
    wowFactor: { id: "Fakta menakjubkan!", en: "Amazing fact!" },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  }
};

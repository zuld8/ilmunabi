import { ObjectData } from "../objects";

export const zaitunData: ObjectData = {
  slug: "zaitun",
  name: { id: "Zaitun", en: "Olive" },
  icon: "🫒",
  category: "tumbuhan",
  type: "tumbuhan",
  scientificName: "Olea europaea",
  surahName: "At-Tin",
  surahReference: "95:1",
  unlockedAtPoints: 190,
  kosakata: [
    { arab: "زَيْتُونٌ", latin: "zaytuunun", arti: "Zaitun", artiEn: "Olive", contohAyat: "Minyak dari buah zaitun." }
  ],
  balita: {
    text: { id: "Bentuknya kecil lonjong dan berwarna hijau atau hitam! 🫒", en: "It's small, oval-shaped, and green or black! 🫒" },
    audioTranscript: { id: "Buah zaitun bisa diperas lalu keluar minyak lho! Minyaknya ini super sehat buat dimakan dan bagus untuk kulit kita. Kulit jadi halus deh!", en: "Olives can be squeezed and oil comes out! This oil is super healthy to eat and good for our skin. Our skin becomes smooth!" },
    quiz: {
      question: { id: "Jika buah zaitun diperas, ia akan menghasilkan apa?", en: "If an olive is squeezed, what will it produce?" },
      options: [
        { text: { id: "Air Sirup", en: "Syrup water" } },
        { text: { id: "Minyak Zaitun", en: "Olive Oil" } },
        { text: { id: "Batu koral", en: "Coral stones" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Minyak zaitun (Olive Oil) dijuluki emas cair karena sangat menyehatkan tubuh! Pohon zaitun itu pantang menyerah, mereka bisa tumbuh di tanah kering dan bisa hidup sampai ribuan tahun lamanya.", en: "Olive oil is dubbed liquid gold because it's so healthy for the body! Olive trees never give up, they can grow in dry soil and can live for thousands of years." },
    facts: [
      { id: "Burung merpati yang membawa ranting zaitun adalah simbol perdamaian dunia.", en: "A dove carrying an olive branch is a symbol of world peace." },
      { id: "Pohon zaitun tertua di dunia ada di Yunani dan berusia 3.000 tahun lebih!", en: "The oldest olive tree in the world is in Greece and is over 3,000 years old!" },
      { id: "Di zaman dulu, minyak zaitun digunakan sebagai bahan bakar lampu penerang.", en: "In ancient times, olive oil was used as fuel for illuminating lamps." }
    ],
    quranVerse: { arabic: "...", transliteration: "...", translation: { id: "...", en: "..." } },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  },
  explorer: {
    text: { id: "Allah mengibaratkan cahaya (Hidayah) yang terang benderang di dalam hati orang mukmin seperti cahaya dari lampu berkaca yang dinyalakan dengan minyak zaitun yang diberkahi (Mubarokah). Zaitun sangat diberkahi, karena dari satu pohonnya bisa dipakai kayunya, buahnya, dan minyaknya! Allah Maha Pemberi Berkah (Al-Barru).", en: "Allah compares the bright light (Hidayah) in the heart of a believer like the light from a glass lamp lit with blessed olive oil (Mubarakah). Olives are highly blessed, because from one tree you can use its wood, its fruit, and its oil! Allah is the Source of Goodness (Al-Barru)." },
    quranVerse: {
      arabic: "يُوقَدُ مِنْ شَجَرَةٍ مُبَارَكَةٍ زَيْتُونَةٍ لَا شَرْقِيَّةٍ وَلَا غَرْبِيَّةٍ",
      transliteration: "Yūqadu min shajaratin mubārakatin zaytūnatin lā sharqiyyatin wa lā gharbiyyah",
      translation: { id: "Yang dinyalakan dengan minyak dari pohon yang diberkahi, (yaitu) pohon zaitun yang tumbuh tidak di sebelah timur (sesuatu) dan tidak pula di sebelah barat(nya).", en: "Lit from a blessed tree - an olive, neither of the east nor of the west." }
    },
    anatomy: [{ part: { id: "Bagian", en: "Part" }, desc: { id: "Penjelasan", en: "Explanation" } }],
    wowFactor: { id: "Fakta menakjubkan!", en: "Amazing fact!" },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  }
};

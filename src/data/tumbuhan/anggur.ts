import { ObjectData } from "../objects";

export const anggurData: ObjectData = {
  slug: "anggur",
  name: { id: "Anggur", en: "Grape" },
  icon: "🍇",
  category: "tumbuhan",
  type: "tumbuhan",
  scientificName: "Vitis vinifera",
  surahName: "An-Nahl",
  surahReference: "16:11",
  unlockedAtPoints: 10,
  kosakata: [
    { arab: "عِنَب", latin: "‘Inab", arti: "Anggur", artiEn: "Grape", contohAyat: "Allah menumbuhkan kebun-kebun anggur." }
  ],
  balita: {
    text: { id: "Wah, buah anggur bentuknya bulat-bulat kecil! Rasanya manis dan segar. 🍇 Nyam nyam!", en: "Wow, grapes are small and round! They taste sweet and fresh. 🍇 Yum yum!" },
    audioTranscript: { id: "Anggur itu enak sekali dan sehat untuk tubuh kita.", en: "Grapes are very tasty and healthy for our body." },
    quiz: {
      question: { id: "Seperti apa bentuk buah anggur?", en: "What is the shape of a grape?" },
      options: [
        { text: { id: "Segitiga", en: "Triangle" } },
        { text: { id: "Bulat-bulat kecil berkelompok", en: "Small rounds in a bunch" } },
        { text: { id: "Panjang dan tajam", en: "Long and sharp" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Anggur adalah buah yang tumbuh merambat! Allah menyebutkan buah anggur di dalam Al-Qur'an sebagai salah satu nikmat dari-Nya. Buah ini mengandung banyak air yang bisa menghilangkan haus kita.", en: "Grapes are fruits that grow on vines! Allah mentions grapes in the Quran as one of His blessings. This fruit contains a lot of water that can quench our thirst." },
    facts: [
      { id: "Anggur ada berbagai warna: ungu, merah, hijau, hingga hitam!", en: "Grapes come in various colors: purple, red, green, to black!" },
      { id: "Anggur tumbuh dengan cara merambat di kayu atau pagar.", en: "Grapes grow by climbing on wood or fences." },
      { id: "Orang-orang sudah menanam anggur sejak ribuan tahun yang lalu.", en: "People have been planting grapes for thousands of years." }
    ],
    quranVerse: {
      arabic: "يُنْبِتُ لَكُمْ بِهِ الزَّرْعَ وَالزَّيْتُونَ وَالنَّخِيلَ وَالْأَعْنَابَ",
      transliteration: "Yunbitu lakum bihi az-zar‘a wal-zaytūna wal-nakhīla wal-a‘nāba",
      translation: { id: "Dia menumbuhkan bagi kamu dengan air hujan itu tanam-tanaman; zaitun, kurma, anggur...", en: "He causes to grow for you thereby the crops, olives, palm trees, grapevines..." },
      context: { id: "Allah memberikan kita makanan sehat dari tanaman buah seperti anggur.", en: "Allah provides us with healthy food from fruit plants like grapes." }
    },
    quiz: {
      question: { id: "Bagaimana cara tanaman anggur tumbuh?", en: "How does the grape plant grow?" },
      options: [
        { text: { id: "Menyelam di air", en: "Diving in water" } },
        { text: { id: "Merambat dan menjalar", en: "Climbing and spreading" } },
        { text: { id: "Terbang ditiup angin", en: "Flying blown by the wind" } }
      ],
      answerIdx: 1
    }
  },
  explorer: {
    text: { id: "Pernahkah kamu menyadari seberapa pintar tanaman anggur? Sulur-sulur tanaman anggur dapat merasakan sentuhan dan melilit apa saja di dekatnya agar bisa tumbuh tinggi menjangkau cahaya matahari! Sungguh mekanisme yang luar biasa, dirancang oleh Allah Sang Maha Pintar.", en: "Have you ever realized how smart grapevines are? The tendrils of the grapevine can sense touch and wrap around anything nearby to grow high and reach the sunlight! What an extraordinary mechanism, designed by Allah the All-Smart." },
    anatomy: [
      { part: { id: "Sulur", en: "Tendrils" }, desc: { id: "Bagian tanaman yang melilit benda lain untuk menopang batangnya.", en: "Part of the plant that wraps around objects to support the stem." } },
      { part: { id: "Kulit Buah", en: "Fruit Skin" }, desc: { id: "Melindungi daging buah dan kaya akan zat antioksidan sehat.", en: "Protects the flesh and is rich in healthy antioxidants." } }
    ],
    wowFactor: { id: "Anggur bisa mengering menjadi kismis (raisins) jika dijemur di bawah sinar matahari!", en: "Grapes can dry up into raisins when sun-dried!" },
    quranVerse: {
      arabic: "وَفِي الْأَرْضِ قِطَعٌ مُتَجَاوِرَاتٌ وَجَنَّاتٌ مِنْ أَعْنَابٍ",
      transliteration: "Wa fī al-arḍi qiṭa‘un mutajāwirātun wa jannātun min a‘nābin",
      translation: { id: "Dan di bumi ini terdapat bagian-bagian yang berdampingan, dan kebun-kebun anggur...", en: "And within the land are neighboring plots and gardens of grapevines..." }
    },
    quiz: [
      {
        question: { id: "Apa kegunaan dari 'sulur' pada tanaman anggur?", en: "What is the use of 'tendrils' on a grapevine?" },
        options: [
          { text: { id: "Untuk menyerap air hujan", en: "To absorb rainwater" } },
          { text: { id: "Untuk menghasilkan buah secara instan", en: "To produce fruits instantly" } },
          { text: { id: "Untuk melilit benda di dekatnya agar tanaman bisa memanjat naik", en: "To wrap around nearby objects so the plant can climb" } }
        ],
        answerIdx: 2
      }
    ]
  }
};

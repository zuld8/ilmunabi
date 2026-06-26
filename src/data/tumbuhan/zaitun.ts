import { ObjectData } from "../objects";

export const zaitunData: ObjectData = {
  slug: "zaitun",
  name: { id: "Zaitun", en: "Olive" },
  icon: "🫒",
  category: "tumbuhan",
  type: "tumbuhan",
  scientificName: "Olea europaea",
  surahName: "An-Nur",
  surahReference: "24:35",
  unlockedAtPoints: 10,
  kosakata: [
    { arab: "زَيْتُون", latin: "Zaytūn", arti: "Zaitun", artiEn: "Olive", contohAyat: "Minyak zaitun sangat diberkahi." }
  ],
  balita: {
    text: { id: "Buah ini kecil berbentuk lonjong! Warnanya ada yang hijau dan ada yang hitam. 🫒 Kalau diperas, akan keluar minyak yang sangat sehat untuk perut kita.", en: "This fruit is small and oval! The colors are some green and some black. 🫒 If squeezed, it produces very healthy oil for our stomach." },
    audioTranscript: { id: "Zaitun bisa diperas menjadi minyak yang menyehatkan.", en: "Olives can be pressed into healthy oil." },
    quiz: {
      question: { id: "Apa yang keluar jika buah zaitun diperas kuat-kuat?", en: "What comes out if olives are pressed hard?" },
      options: [
        { text: { id: "Jus jeruk", en: "Orange juice" } },
        { text: { id: "Minyak yang sehat", en: "Healthy oil" } },
        { text: { id: "Susu", en: "Milk" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Zaitun adalah pohon yang sangat diberkahi! Allah bersumpah dengan nama pohon ini dalam Al-Qur'an. Rasulullah ﷺ sangat menyarankan kita untuk memakan minyak zaitun dan mengoleskannya ke tubuh karena banyak sekali manfaatnya. Minyak zaitun bisa membuat kulit jadi lembut dan rambut jadi sehat!", en: "The olive is a deeply blessed tree! Allah swears by its name in the Quran. The Prophet ﷺ highly recommended us to eat olive oil and apply it to our body because of its many benefits. Olive oil can make skin soft and hair healthy!" },
    facts: [
      { id: "Pohon zaitun sangat panjang umur, bisa hidup dan terus berbuah sampai 1000 tahun!", en: "Olive trees live very long, they can live and keep bearing fruit for up to 1000 years!" },
      { id: "Zaitun hijau dan zaitun hitam sebenarnya adalah buah dari pohon yang sama, bedanya hanya tingkat kematangannya.", en: "Green and black olives are actually from the same tree, the only difference is how ripe they are." },
      { id: "Di zaman dulu, minyak zaitun digunakan sebagai bahan bakar lampu karena apinya terang dan bersih.", en: "In ancient times, olive oil was used as lamp fuel because its fire is bright and clean." }
    ],
    quranVerse: {
      arabic: "يُوقَدُ مِنْ شَجَرَةٍ مُبَارَكَةٍ زَيْتُونَةٍ لَا شَرْقِيَّةٍ وَلَا غَرْبِيَّةٍ يَكَادُ زَيْتُهَا يُضِيءُ وَلَوْ لَمْ تَمْسَسْهُ نَارٌ",
      transliteration: "Yūqadu min shajaratin mubārakatin zaytūnatin lā sharqiyyatin wa lā gharbiyyah, yakādu zaytuhā yuḍī'u wa law lam tamsashu nār",
      translation: { id: "Yang dinyalakan dengan minyak dari pohon yang diberkahi, (yaitu) pohon zaitun yang tumbuh tidak di sebelah timur dan tidak di sebelah barat, yang minyaknya (saja) hampir-hampir menerangi, walaupun tidak disentuh api.", en: "Lit from a blessed tree - an olive, neither of the east nor of the west, whose oil would almost glow even if untouched by fire." },
      context: { id: "Allah menyebut zaitun sebagai pohon penuh keberkahan.", en: "Allah mentions the olive as a tree full of blessings." }
    },
    quiz: {
      question: { id: "Apa saran Nabi Muhammad ﷺ tentang minyak zaitun?", en: "What did Prophet Muhammad ﷺ recommend about olive oil?" },
      options: [
        { text: { id: "Dibuang ke sungai", en: "Throw it in the river" } },
        { text: { id: "Dimakan dan dioleskan ke kulit karena diberkahi", en: "Eat it and apply it to the skin because it is blessed" } },
        { text: { id: "Hanya untuk pewarna baju", en: "Only for dyeing clothes" } }
      ],
      answerIdx: 1
    }
  },
  explorer: {
    text: { id: "Kehebatan minyak zaitun (Olive Oil) terletak pada kandungan 'lemak tak jenuh tunggal' dan senyawa antioksidan tinggi (oleocanthal). Zat ini berfungsi melarutkan kolesterol jahat di dalam darah dan meredakan peradangan seperti obat ibuprofen alami! Tidak heran Allah menyebut pohon zaitun sebagai 'Syajaratin Mubarokah' (pohon yang diberkahi), karena dari mulai akar, kayu, daun, hingga buahnya membawa kebaikan bagi kesehatan umat manusia.", en: "The greatness of Olive Oil lies in its 'monounsaturated fats' and high antioxidant compounds (oleocanthal). This substance functions to dissolve bad cholesterol in the blood and reduce inflammation like natural ibuprofen! No wonder Allah calls the olive tree 'Syajaratin Mubarokah' (a blessed tree), because from its roots, wood, leaves, to its fruit, it brings goodness to human health." },
    anatomy: [
      { part: { id: "Mesocarp", en: "Mesocarp" }, desc: { id: "Daging buah zaitun yang menyimpan 70-90% kandungan minyak zaitun.", en: "The flesh of the olive that stores 70-90% of the olive oil." } },
      { part: { id: "Oleocanthal", en: "Oleocanthal" }, desc: { id: "Senyawa kimia dalam zaitun yang memberi rasa sedikit pedas di tenggorokan dan berfungsi sebagai anti radang.", en: "A chemical compound in olives that gives a slightly peppery taste in the throat and acts as an anti-inflammatory." } }
    ],
    wowFactor: { id: "Ilmuwan menemukan pohon zaitun di pulau Kreta, Yunani yang umurnya diperkirakan lebih dari 3000 tahun, dan ajaibnya pohon itu MASIH BERBUAH sampai hari ini!", en: "Scientists found an olive tree on the island of Crete, Greece, estimated to be over 3000 years old, and miraculously it is STILL BEARING FRUIT today!" },
    quranVerse: {
      arabic: "وَالتِّينِ وَالزَّيْتُونِ",
      transliteration: "Wat-tīni waz-zaytūn",
      translation: { id: "Demi (buah) Tin dan (buah) Zaitun.", en: "By the fig and the olive." }
    },
    quiz: [
      {
        question: { id: "Mengapa minyak zaitun sangat menyehatkan bagi aliran darah kita?", en: "Why is olive oil so healthy for our blood flow?" },
        options: [
          { text: { id: "Karena mengandung banyak gula manis", en: "Because it contains a lot of sweet sugar" } },
          { text: { id: "Karena minyak ini membantu melarutkan kolesterol jahat", en: "Because this oil helps dissolve bad cholesterol" } },
          { text: { id: "Karena minyak ini membekukan darah", en: "Because this oil freezes blood" } }
        ],
        answerIdx: 1
      }
    ]
  }
};

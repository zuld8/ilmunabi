import { ObjectData } from "../objects";

export const neptunusData: ObjectData = {
  slug: "neptunus",
  name: { id: "Neptunus", en: "Neptune" },
  icon: "🔵",
  category: "langit",
  type: "langit",
  scientificName: "Neptune",
  surahName: "Al-Baqarah",
  surahReference: "2:164",
  unlockedAtPoints: 60,
  kosakata: [
    { arab: "نِبْتُون", latin: "Niptuun", arti: "Neptunus", artiEn: "Neptune", contohAyat: "Neptunus adalah planet paling jauh di tata surya kita." }
  ],
  balita: {
    text: { id: "Brrr! Di sini sangat dingin! Ini planet Neptunus, planet paling jauh dari Matahari! 🔵", en: "Brrr! It's very cold here! This is the planet Neptune, the furthest planet from the Sun! 🔵" },
    audioTranscript: { id: "Neptunus warnanya biru cantik seperti air laut, dan anginnya sangat kencang.", en: "Neptune is beautifully blue like seawater, and its winds are very strong." },
    quiz: {
      question: { id: "Apa warna planet Neptunus?", en: "What is the color of the planet Neptune?" },
      options: [
        { text: { id: "Merah menyala", en: "Fiery red" } },
        { text: { id: "Kuning", en: "Yellow" } },
        { text: { id: "Biru", en: "Blue" } }
      ],
      answerIdx: 2
    }
  },
  anak: {
    text: { id: "Neptunus adalah planet Raksasa Es yang dipenuhi gas dan es. Karena jaraknya yang paling ujung dari Matahari, satu tahun di Neptunus sama dengan 165 tahun di Bumi! Angin di Neptunus adalah yang paling kencang di seluruh tata surya.", en: "Neptune is an Ice Giant planet filled with gas and ice. Because it's at the very edge from the Sun, one year on Neptune is equal to 165 years on Earth! The wind on Neptune is the strongest in the entire solar system." },
    facts: [
      { id: "Badai angin di Neptunus bisa bertiup lebih dari 2.000 km per jam!", en: "Wind storms on Neptune can blow faster than 2,000 km per hour!" },
      { id: "Neptunus punya badai raksasa bernama 'Titik Gelap Besar' (Great Dark Spot).", en: "Neptune has a giant storm called the 'Great Dark Spot'." },
      { id: "Neptunus adalah planet pertama yang ditemukan lewat perhitungan matematika, bukan lewat teleskop biasa.", en: "Neptune was the first planet discovered through mathematical calculations, not through a regular telescope." }
    ],
    quranVerse: {
      arabic: "وَتَصْرِيفِ الرِّيَاحِ وَالسَّحَابِ الْمُسَخَّرِ بَيْنَ السَّمَاءِ وَالْأَرْضِ لَآيَاتٍ لِّقَوْمٍ يَعْقِلُونَ",
      transliteration: "Wa tashriifir riyaahi was-sahaabil musakhkhari baynas-samaa'i wal-ardhi la'aayaatil liqawmiy ya'qiluun",
      translation: { id: "Dan perkisaran angin dan awan yang dikendalikan antara langit dan bumi, (semua itu) sungguh merupakan tanda-tanda bagi kaum yang mengerti.", en: "And the directing of the winds and the clouds controlled between the heaven and the earth are signs for a people who use reason." },
      context: { id: "Di Bumi angin membawa hujan rahmat, sedangkan angin badai di Neptunus menunjukkan betapa Maha Kuasanya Allah mengatur segala kondisi langit.", en: "On Earth, wind brings rain of mercy, while the storm winds on Neptune show how Almighty Allah is in arranging all sky conditions." }
    },
    quiz: {
      question: { id: "Berapa lama satu tahun di Neptunus jika dihitung dengan waktu Bumi?", en: "How long is one year on Neptune calculated in Earth time?" },
      options: [
        { text: { id: "165 tahun", en: "165 years" } },
        { text: { id: "10 tahun", en: "10 years" } },
        { text: { id: "1 tahun", en: "1 year" } }
      ],
      answerIdx: 0
    }
  },
  explorer: {
    text: { id: "Atmosfer Neptunus kaya akan Metana, yang membuat planet ini berwarna biru tajam. Namun, di bawah awan tebal itu, suhunya sangat panas dan tekanannya ekstrem tinggi. Para ilmuwan meyakini bahwa tekanan super tinggi ini menghancurkan molekul karbon dan membuatnya menghujankan berlian ke dalam inti planet! Maha Kaya Allah atas segala ciptaan-Nya di alam semesta.", en: "Neptune's atmosphere is rich in Methane, which gives the planet a sharp blue color. However, beneath those thick clouds, the temperature is very hot and the pressure is extremely high. Scientists believe that this super high pressure crushes carbon molecules and makes it rain diamonds deep into the planet's core! Most Rich is Allah over all His creations in the universe." },
    anatomy: [
      { part: { id: "Mantel Es-Cair", en: "Liquid-Ice Mantle" }, desc: { id: "Lapisan super tebal berisi air, amonia, dan metana cair panas.", en: "A super thick layer containing hot liquid water, ammonia, and methane." } },
      { part: { id: "Inti Batu dan Es", en: "Rock and Ice Core" }, desc: { id: "Pusat planet sebesar planet Bumi kita yang sangat padat.", en: "The planet's center, about the size of our Earth, which is very dense." } }
    ],
    wowFactor: { id: "Neptunus sangat jauh sehingga cahaya matahari membutuhkan waktu sekitar 4 jam untuk sampai ke permukaannya, padahal ke Bumi hanya butuh 8 menit!", en: "Neptune is so far that sunlight takes about 4 hours to reach its surface, whereas it only takes 8 minutes to reach Earth!" },
    quranVerse: {
      arabic: "خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ بِالْحَقِّ ۚ تَعَالَىٰ عَمَّا يُشْرِكُونَ",
      transliteration: "Khalaqas-samaawaati wal-ardha bil-haqq. Ta'aalaa 'ammaa yushrikuun",
      translation: { id: "Dia menciptakan langit dan bumi dengan kebenaran. Maha Tinggi Allah dari apa yang mereka sekutukan.", en: "He created the heavens and earth in truth. Exalted is Allah above what they associate with Him." }
    },
    quiz: [
      {
        question: { id: "Gas apa yang membuat planet Neptunus tampak berwarna biru cerah?", en: "What gas makes the planet Neptune appear bright blue?" },
        options: [{ text: { id: "Oksigen", en: "Oxygen" } }, { text: { id: "Helium", en: "Helium" } }, { text: { id: "Metana", en: "Methane" } }],
        answerIdx: 2
      }
    ]
  }
};

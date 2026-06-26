import { ObjectData } from "../objects";

export const melatiData: ObjectData = {
  slug: "melati",
  name: { id: "Melati", en: "Jasmine" },
  icon: "🌼",
  category: "tumbuhan",
  type: "tumbuhan",
  scientificName: "Jasminum sambac",
  surahName: "Al-An'am",
  surahReference: "6:99",
  unlockedAtPoints: 10,
  kosakata: [
    { arab: "يَاسَمِين", latin: "Yāsamīn", arti: "Melati", artiEn: "Jasmine", contohAyat: "Wangi bunga melati di malam hari." }
  ],
  balita: {
    text: { id: "Bunga ini kecil dan berwarna putih bersih! Baunya sangat wangi, lho! 🌼 Biasanya suka dipakai untuk hiasan rambut pengantin.", en: "This flower is small and pure white! It smells very fragrant! 🌼 It is usually used as a hair accessory for brides." },
    audioTranscript: { id: "Bunga melati kecil warnanya putih dan sangat wangi.", en: "Jasmine flowers are small, white, and very fragrant." },
    quiz: {
      question: { id: "Apa warna bunga melati yang biasa kita lihat?", en: "What is the color of the jasmine flower we usually see?" },
      options: [
        { text: { id: "Merah", en: "Red" } },
        { text: { id: "Putih bersih", en: "Pure white" } },
        { text: { id: "Hitam", en: "Black" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Bunga melati adalah bunga nasional bangsa kita, sering disebut Puspa Bangsa! Allah menciptakan melati dengan wangi yang lembut dan menenangkan. Bunga ini sering digunakan untuk membuat teh menjadi harum. Melati mengajarkan kita agar meskipun kecil dan sederhana, kita bisa menyebarkan kebaikan (harum) ke mana-mana!", en: "The jasmine is our nation's national flower, often called Puspa Bangsa! Allah created jasmine with a soft and calming fragrance. This flower is often used to make tea smell good. Jasmine teaches us that even if we are small and simple, we can spread goodness (fragrance) everywhere!" },
    facts: [
      { id: "Kuncup bunga melati biasanya baru terbuka atau mekar pada malam hari.", en: "Jasmine flower buds usually only open or bloom at night." },
      { id: "Aroma melati yang paling kuat tercium pada tengah malam saat suhu mulai dingin.", en: "The strongest jasmine scent can be smelled at midnight when the temperature gets cold." },
      { id: "Di beberapa negara, teh melati diminum untuk menyambut tamu yang datang.", en: "In some countries, jasmine tea is drunk to welcome arriving guests." }
    ],
    quranVerse: {
      arabic: "وَالنَّبَاتُ الطَّيِّبُ يَخْرُجُ نَبَاتُهُ بِإِذْنِ رَبِّهِ",
      transliteration: "Wal-nabātu aṭ-ṭayyibu yakhruju nabātuhū bi-idhni rabbih",
      translation: { id: "Dan tanah yang baik, tanaman-tanamannya tumbuh subur dengan seizin Tuhannya...", en: "And the good land - its vegetation emerges by permission of its Lord..." },
      context: { id: "Melati yang wangi tumbuh dari tanah yang baik berkat izin Allah.", en: "Fragrant jasmine grows from good soil by the permission of Allah." }
    },
    quiz: {
      question: { id: "Kapan bunga melati biasanya mekar dan mengeluarkan aroma paling kuat?", en: "When do jasmine flowers usually bloom and release the strongest scent?" },
      options: [
        { text: { id: "Siang hari saat panas", en: "Daytime when it's hot" } },
        { text: { id: "Malam hari", en: "Night time" } },
        { text: { id: "Pagi hari saat matahari terbit", en: "Morning when the sun rises" } }
      ],
      answerIdx: 1
    }
  },
  explorer: {
    text: { id: "Tahukah kamu mengapa melati mekar di malam hari? Ini adalah strategi Allah Al-Hakim (Maha Bijaksana). Karena bunganya putih, ia akan memantulkan sinar bulan sehingga tampak bercahaya dalam gelap. Warnanya yang mencolok dan wanginya yang kuat ini dirancang khusus untuk menarik ngengat (kupu-kupu malam) agar datang membantu penyerbukannya! Sungguh harmoni alam yang luar biasa.", en: "Do you know why jasmine blooms at night? This is the strategy of Allah Al-Hakim (The All-Wise). Because the flower is white, it reflects moonlight so it looks glowing in the dark. Its striking color and strong scent are specially designed to attract moths (night butterflies) to come and help with its pollination! What an extraordinary harmony of nature." },
    anatomy: [
      { part: { id: "Mahkota Bunga", en: "Corolla (Petals)" }, desc: { id: "Kelopak putih yang dirancang untuk memantulkan cahaya di malam hari.", en: "White petals designed to reflect light at night." } },
      { part: { id: "Kelenjar Nektar", en: "Nectar Gland" }, desc: { id: "Menghasilkan cairan manis beraroma kuat yang memikat ngengat di malam hari.", en: "Produces strongly scented sweet liquid that lures moths at night." } }
    ],
    wowFactor: { id: "Dibutuhkan sekitar 8.000 kuntum bunga melati hanya untuk menghasilkan 1 ml minyak esensial melati murni!", en: "It takes about 8,000 jasmine blossoms just to produce 1 ml of pure jasmine essential oil!" },
    quranVerse: {
      arabic: "أَلَمْ تَرَ أَنَّ اللَّهَ يُسَبِّحُ لَهُ مَنْ فِي السَّمَاوَاتِ وَالْأَرْضِ",
      transliteration: "Alam tara anna Allāha yusabbiḥu lahū man fī as-samāwāti wal-arḍi",
      translation: { id: "Tidakkah engkau tahu bahwa kepada Allah bertasbih apa yang ada di langit dan di bumi...", en: "Do you not see that to Allah exalts whoever is in the heavens and the earth..." }
    },
    quiz: [
      {
        question: { id: "Hewan apa yang paling sering membantu penyerbukan bunga melati di malam hari?", en: "What animal most often helps pollinate jasmine flowers at night?" },
        options: [
          { text: { id: "Ngengat (kupu-kupu malam)", en: "Moths (night butterflies)" } },
          { text: { id: "Ikan paus", en: "Whales" } },
          { text: { id: "Burung Elang", en: "Eagles" } }
        ],
        answerIdx: 0
      }
    ]
  }
};

import { ObjectData } from "../objects";

export const airData: ObjectData = {
  slug: "air",
  name: { id: "Air", en: "Water" },
  icon: "💧",
  category: "alam",
  type: "alam",
  scientificName: "Aqua (H2O)",
  surahName: "Al-Anbiya",
  surahReference: "21:30",
  unlockedAtPoints: 10,
  kosakata: [
    { arab: "مَاء", latin: "Maa'", arti: "Air", artiEn: "Water", contohAyat: "وَجَعَلْنَا مِنَ الْمَاءِ كُلَّ شَيْءٍ حَيٍّ" }
  ],
  balita: {
    text: { id: "Gluk gluk gluk! Segarnya minum air putih yang sejuk! 🚰 Tubuh kita butuh banyak air supaya tidak lemas, lho!", en: "Glug glug glug! It's so refreshing to drink cool water! 🚰 Our bodies need lots of water so we don't get weak!" },
    audioTranscript: { id: "Air itu bening dan segar! Kita butuh air untuk minum, mandi biar wangi, dan menyiram bunga peliharaan kita.", en: "Water is clear and fresh! We need water to drink, to take a bath to smell good, and to water our pet flowers." },
    quiz: {
      question: { id: "Kalau air dimasukkan ke dalam kulkas yang sangat dingin, akan berubah menjadi apa ya?", en: "If water is put into a very cold freezer, what will it turn into?" },
      options: [
        { text: { id: "Es batu yang keras", en: "Hard ice cubes" } },
        { text: { id: "Awan yang terbang", en: "Flying cloud" } },
        { text: { id: "Api yang panas", en: "Hot fire" } }
      ],
      answerIdx: 0
    }
  },
  anak: {
    text: { id: "Air itu ajaib banget! Dia bisa berbentuk cairan (air minum), benda padat (es batu!), dan gas (uap air yang terbang). Hampir seluruh tubuh kita juga terdiri dari air, lho!", en: "Water is super magical! It can be a liquid (drinking water), a solid (ice cubes!), and a gas (flying water vapor). Almost our entire body is also made of water!" },
    facts: [
      { id: "Tubuh kita terbuat dari 60% air! Bahkan otak kita sebagian besar adalah air, jadi kita harus rajin minum.", en: "Our bodies are made of 60% water! Even our brains are mostly water, so we must drink regularly." },
      { id: "Jumlah air di Bumi selalu tetap sejak zaman purba, air terus berputar menjadi awan, hujan, dan kembali ke laut.", en: "The amount of water on Earth has remained the same since ancient times, continuously cycling into clouds, rain, and back to the sea." },
      { id: "Bumi terlihat biru dari luar angkasa karena lebih dari 70% permukaannya tertutup oleh air laut!", en: "Earth looks blue from space because over 70% of its surface is covered by ocean water!" }
    ],
    quranVerse: {
      arabic: "وَجَعَلْنَا مِنَ الْمَاءِ كُلَّ شَيْءٍ حَيٍّ",
      transliteration: "Wa ja'alnaa minal-maa'i kulla syay'in hayy",
      translation: { id: "Dan dari air Kami jadikan segala sesuatu yang hidup.", en: "And We made from water every living thing." },
      context: { id: "Allah memberitahu kita bahwa air adalah sumber kehidupan bagi semua makhluk di Bumi.", en: "Allah tells us that water is the source of life for all creatures on Earth." }
    },
    quiz: {
      question: { id: "Kenapa Bumi terlihat berwarna biru dari luar angkasa?", en: "Why does the Earth look blue from space?" },
      options: [
        { text: { id: "Karena banyak langit biru", en: "Because of a lot of blue skies" } },
        { text: { id: "Karena pantulan cahaya matahari", en: "Because of sunlight reflection" } },
        { text: { id: "Karena Bumi dipenuhi banyak air laut", en: "Because Earth is covered by a lot of ocean water" } }
      ],
      answerIdx: 2
    }
  },
  explorer: {
    text: { id: "Tahukah kamu bahwa air adalah satu-satunya zat di Bumi yang bisa ditemukan secara alami dalam tiga wujud? Cair, padat, dan gas! Senyawa molekulnya sangat unik dan menjadi kunci keberlangsungan sel biologis. Menakjubkannya, jauh sebelum manusia mempelajari biologi seluler, Allah SWT telah menyatakan dalam Al-Qur'an bahwa semua makhluk hidup diciptakan dari air!", en: "Did you know that water is the only substance on Earth found naturally in three states? Liquid, solid, and gas! Its molecular compound is highly unique and holds the key to biological cell survival. Amazingly, long before humans studied cellular biology, Allah SWT stated in the Quran that all living things are created from water!" },
    anatomy: [
      { part: { id: "Atom Oksigen", en: "Oxygen Atom" }, desc: { id: "Satu atom besar di tengah molekul air.", en: "One large atom in the center of the water molecule." } },
      { part: { id: "Atom Hidrogen", en: "Hydrogen Atoms" }, desc: { id: "Dua atom kecil yang terikat pada atom oksigen, membentuk huruf V (H2O).", en: "Two small atoms bonded to the oxygen atom, forming a V shape (H2O)." } }
    ],
    wowFactor: { id: "HAH?! Ternyata es batu bisa mengapung di air karena molekul air merenggang saat membeku, menjadikannya lebih ringan dari air cair. Kalau tidak, lautan akan membeku dari dasar ke atas dan menghancurkan semua ikan!", en: "WOW?! Ice cubes can float on water because water molecules expand when frozen, making them lighter than liquid water. Otherwise, oceans would freeze from the bottom up and destroy all fish!" },
    quranVerse: {
      arabic: "وَجَعَلْنَا مِنَ الْمَاءِ كُلَّ شَيْءٍ حَيٍّ ۖ أَفَلَا يُؤْمِنُونَ",
      transliteration: "Wa ja'alnaa minal-maa'i kulla syay'in hayy, afalaa yu'minuun",
      translation: { id: "Dan dari air Kami jadikan segala sesuatu yang hidup. Maka mengapakah mereka tiada juga beriman?", en: "And We made from water every living thing. Then will they not believe?" }
    },
    quiz: [
      {
        question: { id: "Apa rumus kimia dari air yang mengandung dua hidrogen dan satu oksigen?", en: "What is the chemical formula for water containing two hydrogens and one oxygen?" },
        options: [
          { text: { id: "CO2", en: "CO2" } },
          { text: { id: "H2O", en: "H2O" } },
          { text: { id: "O2", en: "O2" } }
        ],
        answerIdx: 1
      }
    ]
  }
};

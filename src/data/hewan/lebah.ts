import { ObjectData } from "../objects";

export const lebahData: ObjectData = {
  slug: "lebah",
  name: { id: "Lebah", en: "Bee" },
  icon: "🐝",
  category: "serangga",
  type: "hewan",
  scientificName: "Anthophila",
  surahName: "An-Nahl",
  surahReference: "16:68",
  unlockedAtPoints: 60,
  kosakata: [
    { arab: "نَحْلَة", latin: "Nahlah", arti: "Lebah", artiEn: "Bee", contohAyat: "Dan Tuhanmu mewahyukan kepada lebah: 'Buatlah sarang-sarang di bukit-bukit, di pohon-pohon kayu, dan di tempat-tempat yang dibikin manusia.'" }
  ],
  balita: {
    text: { id: "Nguuung! Aku lebah pekerja yang rajin! Aku terbang dari bunga ke bunga untuk membuat madu yang manis! 🍯", en: "Buzzz! I am a hardworking worker bee! I fly from flower to flower to make sweet honey! 🍯" },
    audioTranscript: { id: "Buzzz! Siapa yang suka madu buatanku? Rasanya manis sekali lho!", en: "Buzzz! Who likes my honey? It tastes very sweet!" },
    quiz: {
      question: { id: "Apa makanan manis yang dibuat oleh lebah?", en: "What sweet food is made by bees?" },
      options: [
        { text: { id: "Cokelat", en: "Chocolate" } },
        { text: { id: "Madu", en: "Honey" } },
        { text: { id: "Permen", en: "Candy" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Lebah adalah hewan yang sangat spesial dalam Islam. Ada surah dalam Al-Qur'an yang bernama An-Nahl (Lebah). Allah sendiri yang mengajari lebah cara membuat sarang dan menghasilkan madu yang bisa menjadi obat penawar berbagai penyakit!", en: "Bees are very special animals in Islam. There is a surah in the Quran called An-Nahl (The Bee). Allah Himself taught the bees how to build hives and produce honey which can be a medicine for various diseases!" },
    facts: [
      { id: "Satu koloni lebah bisa memiliki hingga 60.000 ekor lebah yang bekerja sama dengan sangat rapi.", en: "One bee colony can have up to 60,000 bees working together very neatly." },
      { id: "Lebah berkomunikasi dengan melakukan 'tarian bergoyang' (waggle dance) untuk memberi tahu teman-temannya di mana letak bunga.", en: "Bees communicate by doing a 'waggle dance' to tell their friends where the flowers are." },
      { id: "Lebah pekerja (betina) adalah yang mengumpulkan madu, sedangkan lebah jantan (drone) tidak punya sengat.", en: "Worker bees (females) are the ones who collect honey, while male bees (drones) have no stingers." }
    ],
    quranVerse: {
      arabic: "يَخْرُجُ مِنْ بُطُونِهَا شَرَابٌ مُخْتَلِفٌ أَلْوَانُهُ فِيهِ شِفَاءٌ لِلنَّاسِ ۗ إِنَّ فِي ذَٰلِكَ لَآيَةً لِقَوْمٍ يَتَفَكَّرُونَ",
      transliteration: "Yakhruju min butuniha sharabun mukhtalifun alwanuhu fihi shifa'un linnas. Inna fi dhalika la'ayatan liqawmin yatafakkarun.",
      translation: { id: "Dari perut lebah itu ke luar minuman (madu) yang bermacam-macam warnanya, di dalamnya terdapat obat yang menyembuhkan bagi manusia. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda (kebesaran Tuhan) bagi orang-orang yang memikirkan.", en: "There emerges from their bellies a drink, varying in colors, in which there is healing for people. Indeed in that is a sign for a people who give thought." },
      context: { id: "Allah menyebutkan bahwa madu adalah obat penyembuh yang luar biasa untuk manusia.", en: "Allah mentions that honey is an extraordinary healing medicine for humans." }
    },
    quiz: {
      question: { id: "Menurut Al-Qur'an, apa manfaat luar biasa dari madu lebah?", en: "According to the Quran, what is the extraordinary benefit of bee honey?" },
      options: [
        { text: { id: "Sebagai obat penawar penyakit", en: "As a healing medicine for diseases" } },
        { text: { id: "Sebagai pewarna pakaian", en: "As a clothing dye" } },
        { text: { id: "Sebagai bahan bakar kendaraan", en: "As vehicle fuel" } }
      ],
      answerIdx: 0
    }
  },
  explorer: {
    text: { id: "Sarang lebah bentuknya selalu heksagonal (segi enam)! Para ilmuwan dan ahli matematika takjub, karena bentuk segi enam adalah bentuk paling sempurna untuk menyimpan madu paling banyak tanpa membuang-buang lilin pembentuknya. Inilah wahyu Allah (insting alami) kepada lebah!", en: "Beehives are always hexagonal (six-sided)! Scientists and mathematicians are amazed, because the hexagon is the most perfect shape to store the most honey without wasting the wax used to build it. This is Allah's revelation (natural instinct) to the bees!" },
    anatomy: [
      { part: { id: "Kantong Madu (Honey Stomach)", en: "Honey Stomach" }, desc: { id: "Perut khusus yang digunakan untuk menyimpan nektar bunga sebelum diubah jadi madu.", en: "A special stomach used to store flower nectar before it is turned into honey." } },
      { part: { id: "Keranjang Serbuk Sari", en: "Pollen Baskets" }, desc: { id: "Kantung kecil di kaki belakang lebah untuk membawa serbuk sari (pollen) ke sarang.", en: "Tiny pouches on the bees' hind legs to carry pollen to the hive." } }
    ],
    wowFactor: { id: "Untuk membuat 1 sendok teh madu, 12 lebah pekerja harus terbang mengumpulkan nektar sepanjang hidup mereka!", en: "To make 1 teaspoon of honey, 12 worker bees have to fly around collecting nectar their entire lives!" },
    quranVerse: {
      arabic: "وَأَوْحَىٰ رَبُّكَ إِلَى النَّحْلِ أَنِ اتَّخِذِي مِنَ الْجِبَالِ بُيُوتًا وَمِنَ الشَّجَرِ وَمِمَّا يَعْرِشُونَ",
      transliteration: "Wa awha rabbuka ilan-nahli anit-takhidhi minal-jibali buyutan wa minash-shajari wa mimma ya'rishun.",
      translation: { id: "Dan Tuhanmu mewahyukan kepada lebah: 'Buatlah sarang-sarang di bukit-bukit, di pohon-pohon kayu, dan di tempat-tempat yang dibikin manusia.'", en: "And your Lord inspired to the bee, 'Take for yourself among the mountains, houses, and among the trees and [in] that which they construct.'" }
    },
    quiz: [
      {
        question: { id: "Apa bentuk sarang lebah yang paling sempurna secara matematis?", en: "What is the mathematically most perfect shape of a beehive?" },
        options: [
          { text: { id: "Bulat (Lingkaran)", en: "Round (Circle)" } },
          { text: { id: "Segitiga", en: "Triangle" } },
          { text: { id: "Segi enam (Heksagonal)", en: "Hexagon" } }
        ],
        answerIdx: 2
      }
    ]
  }
};

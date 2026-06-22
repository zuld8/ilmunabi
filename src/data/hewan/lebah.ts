import { ObjectData } from "../objects";

export const lebahData: ObjectData = {
  slug: "lebah",
  name: { id: "Lebah", en: "Honeybee" },
  scientificName: "Apis mellifera",
  surahName: "An-Nahl (68-69)",
  surahReference: "16:68-69",
  icon: "🐝",
  category: "Serangga",
  type: "hewan",
  unlockedAtPoints: 0,
  kosakata: [
    {
      arab: "نَحْلٌ",
      latin: "Nahl",
      arti: "Lebah",
      artiEn: "Honeybee",
      contohAyat: "An-Nahl 16:68",
      icon: "🐝"
    },
    {
      arab: "عَسَلٌ",
      latin: "Asal",
      arti: "Madu",
      artiEn: "Honey",
      contohAyat: "An-Nahl 16:69",
      icon: "🍯"
    },
    {
      arab: "وَحْيٌ",
      latin: "Wahy",
      arti: "Wahyu/Perintah Allah",
      artiEn: "Revelation/Command",
      contohAyat: "An-Nahl 16:68",
      icon: "📜"
    },
    {
      arab: "شِفَاءٌ",
      latin: "Syifa",
      arti: "Penyembuh",
      artiEn: "Healing",
      contohAyat: "An-Nahl 16:69",
      icon: "🧪"
    }
  ],
  balita: {
    text: {
      id: "Ini lebah! Lebah suka bunga. Lebah bikin madu yang manis. 🐝",
      en: "This is a bee! Bees love flowers. Bees make sweet honey. 🐝",
    },
    audioTranscript: {
      id: "Ini lebah! Lebah suka bunga. Lebah bikin madu yang manis.",
      en: "This is a bee! Bees love flowers. Bees make sweet honey.",
    },
    quiz: {
      question: {
        id: "Mana gambar lebah?",
        en: "Which picture is the bee?",
      },
      options: [
        { text: { id: "🐝 Lebah", en: "🐝 Bee" }, isImage: true },
        { text: { id: "🦋 Kupu-kupu", en: "🦋 Butterfly" }, isImage: true },
        { text: { id: "🦟 Nyamuk", en: "🦟 Mosquito" }, isImage: true },
      ],
      answerIdx: 0,
    },
  },
  anak: {
    text: {
      id: "Lebah bekerja sama dalam koloni besar untuk memproduksi madu berkhasiat.",
      en: "Bees work together in large colonies to produce healthy honey.",
    },
    facts: [
      {
        id: "Lebah punya 6 kaki dan 4 sayap.",
        en: "Bees have 6 legs and 4 wings.",
      },
      {
        id: "Lebah terbang 800 km hanya untuk 1 sendok madu.",
        en: "Bees fly 800 km just for 1 spoonful of honey.",
      },
      {
        id: "Lebah berkomunikasi dengan cara menari!",
        en: "Bees communicate by dancing!",
      },
      {
        id: "Satu sarang lebah bisa berisi 60.000 lebah.",
        en: "One beehive can contain 60,000 bees.",
      },
      {
        id: "Lebah bisa mengenali wajah manusia.",
        en: "Bees can recognize human faces.",
      },
    ],
    quranVerse: {
      arabic: "وَأَوْحَىٰ رَبُّكَ إِلَى ٱلنَّحْلِ",
      transliteration: "Wa awḥā rabbuka ilan-naḥl",
      translation: {
        id: "Dan Tuhanmu mewahyukan kepada lebah",
        en: "And your Lord inspired the bee",
      },
    },
    quiz: {
      question: {
        id: "Berapa kaki yang dimiliki lebah?",
        en: "How many legs does a bee have?",
      },
      options: [
        { text: { id: "4 kaki", en: "4 legs" } },
        { text: { id: "6 kaki", en: "6 legs" } },
        { text: { id: "8 kaki", en: "8 legs" } },
        { text: { id: "2 kaki", en: "2 legs" } },
      ],
      answerIdx: 1,
    },
  },
  explorer: {
    text: {
      id: "Lebah menggunakan sistem navigasi yang menggabungkan posisi matahari, medan magnet bumi, dan peta memori visual. Ilmuwan Karl von Frisch baru memecahkan kode komunikasi lebah pada 1973 dan memenangkan Nobel Prize. Lebah melakukan 'waggle dance' — tarian goyang yang memberi tahu rekan-rekannya lokasi persis bunga sejauh beberapa kilometer.",
      en: "Bees use a navigation system combining the sun's position, Earth's magnetic field, and visual memory maps. Scientist Karl von Frisch decoded bee communication in 1973, winning the Nobel Prize. Bees perform a 'waggle dance' to tell their peers the exact flower location kilometers away.",
    },
    anatomy: [
      {
        part: { id: "Mata Majemuk", en: "Compound Eyes" },
        desc: { id: "Terdiri dari ribuan lensa untuk mendeteksi cahaya UV dari bunga.", en: "Consists of thousands of lenses to detect UV light from flowers." },
      },
      {
        part: { id: "Kantung Madu", en: "Honey Stomach" },
        desc: { id: "Organ khusus untuk menyimpan nektar sementara sebelum dibawa ke sarang.", en: "Special organ to store nectar temporarily before bringing it to the hive." },
      },
      {
        part: { id: "Kaki Pengumpul", en: "Pollen Basket" },
        desc: { id: "Rambut khusus di kaki belakang untuk menempelkan serbuk sari.", en: "Specialized hairs on hind legs to carry pollen." },
      },
    ],
    wowFactor: {
      id: "1.400 tahun sebelum Karl von Frisch lahir, Al-Qur'an sudah menyebut lebah diperintah Allah secara langsung menggunakan kata 'awha' — kata yang sama digunakan untuk wahyu kepada Nabi. Para ilmuwan Muslim abad pertengahan seperti Ibnu Sina sudah menulis tentang khasiat madu sebagai obat. Surah ke-16 dalam Al-Qur'an dinamai An-Nahl — artinya lebah.",
      en: "1,400 years before Karl von Frisch was born, the Qur'an already mentioned bees being commanded directly by Allah using the word 'awha' — the same word used for revelation to Prophets. Medieval Muslim scientists like Ibn Sina wrote about honey's healing properties. The 16th surah in the Qur'an is named An-Nahl — meaning the bee.",
    },
    quranVerse: {
      arabic: "فِيهِ شِفَآءٌ لِّلنَّاسِ",
      transliteration: "Fīhi shifā'ul lin-nās",
      translation: {
        id: "Di dalamnya terdapat obat bagi manusia",
        en: "In it is healing for people",
      },
      context: {
        id: "Ayat ini menekankan bahwa madu memiliki fungsi terapeutik alami (obat). Madu modern terbukti memiliki kandungan antibakteri dan antiinflamasi yang kuat.",
        en: "This verse emphasizes that honey acts as a natural cure. Modern science validates that honey contains powerful antibacterial and anti-inflammatory properties.",
      },
    },
    quiz: [
      {
        question: {
          id: "Siapa ilmuwan yang memenangkan Nobel karena memecahkan kode komunikasi lebah?",
          en: "Who was the scientist who won the Nobel Prize for decoding bee communication?",
        },
        options: [
          { text: { id: "Albert Einstein", en: "Albert Einstein" } },
          { text: { id: "Karl von Frisch", en: "Karl von Frisch" } },
          { text: { id: "Charles Darwin", en: "Charles Darwin" } },
          { text: { id: "Ibnu Sina", en: "Ibn Sina" } },
        ],
        answerIdx: 1,
      },
      {
        question: {
          id: "Apa nama surah Al-Qur'an yang dinamai dari lebah?",
          en: "What is the name of the Qur'an surah named after the bee?",
        },
        options: [
          { text: { id: "An-Naml", en: "An-Naml" } },
          { text: { id: "An-Nahl", en: "An-Nahl" } },
          { text: { id: "Al-Ankabut", en: "Al-Ankabut" } },
          { text: { id: "Al-Fil", en: "Al-Fil" } },
        ],
        answerIdx: 1,
      },
      {
        question: {
          id: "Apa arti kata 'Syifa' dalam bahasa Arab?",
          en: "What does the Arabic word 'Syifa' mean?",
        },
        options: [
          { text: { id: "Lebah", en: "Bee" } },
          { text: { id: "Madu", en: "Honey" } },
          { text: { id: "Penyembuh", en: "Healer/Cure" } },
          { text: { id: "Wahyu", en: "Revelation" } },
        ],
        answerIdx: 2,
      },
    ],
  },
};

import { ObjectData } from "../objects";

export const lubangHitamSagittariusAData: ObjectData = {
  slug: "lubang-hitam-sagittarius-a",
  name: { id: "Sagittarius A*", en: "Sagittarius A*" },
  icon: "⚫",
  category: "langit",
  type: "langit",
  scientificName: "Sagittarius A*",
  surahName: "At-Takwir",
  surahReference: "81:15-16",
  unlockedAtPoints: 100,

  kosakata: [
    { arab: "خُنَّسٌ", latin: "Khunnas", arti: "Bersembunyi/Tak Terlihat", artiEn: "Hidden/Invisible", contohAyat: "فَلَا أُقْسِمُ بِالْخُنَّسِ" },
    { arab: "كُنَّسٌ", latin: "Kunnas", arti: "Menyapu", artiEn: "Sweeping", contohAyat: "الْجَوَارِ الْكُنَّسِ" },
    { arab: "جَارِيَةٌ", latin: "Jaariyah", arti: "Bergerak Cepat", artiEn: "Moving Fast", contohAyat: "الْجَوَارِ" },
    { arab: "سَمَاءٌ", latin: "Samaa'un", arti: "Langit", artiEn: "Sky", contohAyat: "وَالسَّمَاءِ ذَاتِ الْبُرُوجِ" }
  ],

  balita: {
    text: {
      id: "Uh-oh, di tengah angkasa ada lubang gelap! Ini adalah Lubang Hitam. Dia seperti penyedot debu kosmik raksasa yang sangat kuat, menarik semua benda di dekatnya. Bahkan cahaya pun tak bisa kabur darinya!",
      en: "Uh-oh, in the middle of space there is a dark hole! This is a Black Hole. It's like a giant cosmic vacuum cleaner, pulling everything near it. Not even light can escape!"
    },
    audioTranscript: {
      id: "Lubang hitam itu super kuat, dia menyedot debu-debu luar angkasa!",
      en: "Black holes are super strong, they vacuum up space dust!"
    },
    quiz: {
      question: { id: "Lubang Hitam bekerja mirip alat apa?", en: "What tool does a Black Hole work like?" },
      options: [
        { text: { id: "Penyedot debu", en: "Vacuum cleaner" } },
        { text: { id: "Kipas angin", en: "Electric fan" } },
        { text: { id: "Senter", en: "Flashlight" } }
      ],
      answerIdx: 0
    }
  },

  anak: {
    text: {
      id: "Sagittarius A* adalah Lubang Hitam Supermasif (Supermassive Black Hole) yang tinggal tepat di tengah Galaksi Bima Sakti kita! Ukurannya empat juta kali lebih berat dari matahari kita! Ia menarik jutaan bintang untuk berputar mengelilinginya, membentuk galaksi.",
      en: "Sagittarius A* is the Supermassive Black Hole living right in the center of our Milky Way Galaxy! It's four million times heavier than our sun! It pulls millions of stars to orbit around it, forming the galaxy."
    },
    facts: [
      { id: "Jaraknya 26.000 tahun cahaya dari Bumi. (Aman banget!)", en: "It is 26,000 light years away from Earth. (Very safe!)" },
      { id: "Saking hitamnya, dia tidak bisa difoto dengan kamera biasa.", en: "It's so black, it cannot be photographed with normal cameras." },
      { id: "Gravitasinya jutaan kali lipat lebih kuat dari Bumi.", en: "Its gravity is millions of times stronger than Earth's." },
      { id: "Bintang di dekatnya bergerak sangat ngebut, hingga jutaan km/jam!", en: "Stars near it move super fast, up to millions of km/h!" },
      { id: "Lubang Hitam menyapu bersih segala debu di sekelilingnya.", en: "A Black Hole sweeps clean all the dust around it." }
    ],
    quranVerse: {
      arabic: "...",
      transliteration: "...",
      translation: { id: "Sungguh, Aku bersumpah dengan bintang-bintang yang bersembunyi (tersembunyi). Yang bergerak cepat dan menyapu (benda-benda angkasa). (At-Takwir: 15-16)", en: "So I swear by the retreating stars (hidden). Those that run [their courses] and disappear (sweeping). (At-Takwir: 15-16)" }
    },
    quiz: {
      question: { id: "Apa nama galaksi tempat kita dan Sagittarius A* berada?", en: "What is the name of the galaxy we and Sagittarius A* are in?" },
      options: [
        { text: { id: "Galaksi Bima Sakti (Milky Way)", en: "Milky Way Galaxy" } },
        { text: { id: "Galaksi Andromeda", en: "Andromeda Galaxy" } },
        { text: { id: "Galaksi Sombrero", en: "Sombrero Galaxy" } }
      ],
      answerIdx: 0
    }
  },

  explorer: {
    text: {
      id: "Sifat Lubang Hitam ada tiga: Tidak memancarkan cahaya (tak terlihat), Punya gravitasi yang menyedot benda (menyapu), dan Berada di orbit yang bergerak ekstrim. Ribuan tahun lalu, Al-Qur'an menggunakan 3 kata sains ini di surat At-Takwir: Khunnas (tidak terlihat/bersembunyi), Al-Jawar (bergerak cepat/orbit), Kunnas (menyapu). Tiga sifat ini adalah definisi sains 100% akurat tentang Black Hole hari ini!",
      en: "Black Holes have three properties: Emitting no light (invisible), Having gravity that sucks objects (sweeping), and Moving in extreme orbits. Thousands of years ago, the Quran used these 3 exact scientific words in Surah At-Takwir: Khunnas (hidden/invisible), Al-Jawar (moving fast/orbiting), Kunnas (sweeping). These 3 traits are the 100% accurate scientific definition of Black Holes today!"
    },
    anatomy: [
      { part: { id: "Event Horizon", en: "Event Horizon" }, desc: { id: "Batas tanpa jalan kembali, bahkan cahaya tak bisa lari.", en: "The point of no return, not even light escapes." } },
      { part: { id: "Singularity", en: "Singularity" }, desc: { id: "Pusat misterius lubang hitam yang tak terhingga padatnya.", en: "The mysteriously infinitely dense center of the black hole." } }
    ],
    wowFactor: {
      id: "Jika kamu jatuh ke lubang hitam, tubuhmu akan ditarik memanjang seperti mie spaghetti. Para ilmuwan menyebut fenomena nyata ini 'Spaghettifikasi'!",
      en: "If you fell into a black hole, your body would be stretched like a noodle. Scientists call this real phenomenon 'Spaghettification'!"
    },
    quranVerse: {
      arabic: "...",
      transliteration: "...",
      translation: { id: "Sungguh, Aku bersumpah dengan bintang-bintang yang bersembunyi (Khunnas). Yang bergerak cepat (Al-Jawar) dan menyapu (Kunnas). (At-Takwir: 15-16)", en: "So I swear by the retreating stars (Khunnas). Those that run [their courses] (Al-Jawar) and sweep (Kunnas). (At-Takwir: 15-16)" }
    },
    quiz: [
      {
        question: { id: "Apa arti kata Arab 'Kunnas' yang relevan dengan fungsi Lubang Hitam?", en: "What does the Arabic word 'Kunnas' mean that is relevant to a Black Hole's function?" },
        options: [
          { text: { id: "Bersinar terang", en: "Shining brightly" } },
          { text: { id: "Menyapu (seperti vakum)", en: "Sweeping (like a vacuum)" } },
          { text: { id: "Diam saja", en: "Staying still" } }
        ],
        answerIdx: 1
      },
      {
        question: { id: "Apa nama efek memanjangnya benda saat ditarik Black Hole?", en: "What is the name of the effect where objects are stretched by a Black Hole?" },
        options: [
          { text: { id: "Spaghettifikasi", en: "Spaghettification" } },
          { text: { id: "Donatifikasi", en: "Donutification" } },
          { text: { id: "Pancake-isasi", en: "Pancakification" } }
        ],
        answerIdx: 1
      },
      {
        question: { id: "Apa nama batas pada Black Hole dimana cahaya sekalipun tak bisa lari?", en: "What is the boundary on a Black Hole where not even light can escape?" },
        options: [
          { text: { id: "Singularity", en: "Singularity" } },
          { text: { id: "Event Horizon", en: "Event Horizon" } },
          { text: { id: "Ozon Horizon", en: "Ozone Horizon" } }
        ],
        answerIdx: 1
      }
    ]
  }
};

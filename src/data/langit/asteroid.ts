import { ObjectData } from "../objects";

export const asteroidData: ObjectData = {
  slug: "asteroid",
  name: { id: "Asteroid", en: "Asteroid" },
  icon: "☄️",
  category: "langit",
  type: "langit",
  scientificName: "Planetoid",
  surahName: "Al-Mulk",
  surahReference: "67:5",
  unlockedAtPoints: 50,
  kosakata: [
    { arab: "حِجَارَة", latin: "Hijarah", arti: "Batu", artiEn: "Stone", contohAyat: "Asteroid seperti batu raksasa" }
  ],
  balita: {
    text: { id: "Wusss! Ini asteroid! Batu raksasa yang melayang-layang di luar angkasa! 🪨✨", en: "Whoosh! This is an asteroid! A giant rock floating in space! 🪨✨" },
    audioTranscript: { id: "Wah, lihat! Ada batu terbang di luar angkasa. Namanya Asteroid! Mereka sisa-sisa pembuatan tata surya ciptaan Allah yang menari-nari mengelilingi matahari.", en: "Wow, look! There's a flying rock in space. It's called an Asteroid! They are leftovers from the creation of the solar system by Allah, dancing around the sun." },
    quiz: {
      question: { id: "Asteroid itu terbuat dari apa ya?", en: "What are asteroids made of?" },
      options: [
        { text: { id: "Es krim", en: "Ice cream" } },
        { text: { id: "Batu dan logam", en: "Rock and metal" } },
        { text: { id: "Kapas", en: "Cotton" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Asteroid adalah batu angkasa yang mengelilingi matahari. Sebagian besar dari mereka suka berkumpul di Sabuk Asteroid, sebuah jalan tol khusus batu di antara planet Mars dan Jupiter!", en: "Asteroids are space rocks orbiting the sun. Most of them love to hang out in the Asteroid Belt, a special rock highway between Mars and Jupiter!" },
    facts: [
      { id: "Ada jutaan asteroid, ukurannya dari sekecil mobil sampai sebesar negara!", en: "There are millions of asteroids, ranging from the size of a car to the size of a country!" },
      { id: "Bentuk asteroid tidak bulat sempurna seperti planet, melainkan benjol-benjol seperti kentang raksasa! 🥔", en: "Asteroids are not perfectly round like planets, but rather lumpy like giant potatoes! 🥔" },
      { id: "Asteroid Ceres adalah yang paling besar, sampai-sampai ia disebut planet kerdil!", en: "Asteroid Ceres is the biggest one, so big that it's called a dwarf planet!" }
    ],
    quranVerse: { arabic: "...", transliteration: "...", translation: { id: "...", en: "..." } },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  },
  explorer: {
    text: { id: "Sabuk Asteroid membentang luas dengan jutaan batuan luar angkasa yang melesat dengan kecepatan tinggi. HAH?! Tapi uniknya, jarak antar asteroid itu sangat jauh (jutaan kilometer), jadi pesawat luar angkasa kita bisa lewat dengan aman tanpa tabrakan! Keseimbangan orbit kosmik ini sangat presisi. 1400 tahun lalu, Al-Qur'an telah mengisyaratkan bahwa Allah telah mengatur lintasan segala benda langit tanpa saling bertabrakan, sebagai pelindung hiasan langit.", en: "The Asteroid Belt stretches wide with millions of space rocks zooming at high speed. HAH?! But amazingly, the distance between them is huge (millions of kilometers), so our spaceships can fly safely without crashing! This cosmic orbital balance is extremely precise. 1400 years ago, the Quran hinted that Allah has arranged the orbits of all celestial bodies without colliding, as protectors and adornments of the sky." },
    quranVerse: {
      arabic: "وَلَقَدْ زَيَّنَّا السَّمَاءَ الدُّنْيَا بِمَصَابِيحَ وَجَعَلْنَاهَا رُجُومًا لِلشَّيَاطِينِ",
      transliteration: "Wa laqad zayyannas-samā'ad-dunyā bimaṣābīḥa wa ja'alnāhā rujūmal-lish-shayāṭīn",
      translation: { id: "Dan sesungguhnya Kami telah menghiasi langit yang dekat dengan bintang-bintang, dan Kami jadikan bintang-bintang itu alat-alat pelempar syaitan.", en: "And We have certainly beautified the nearest heaven with stars and have made [from] them what is thrown at the devils." }
    },
    anatomy: [{ part: { id: "Bagian", en: "Part" }, desc: { id: "Penjelasan", en: "Explanation" } }],
    wowFactor: { id: "Fakta menakjubkan!", en: "Amazing fact!" },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  }
};

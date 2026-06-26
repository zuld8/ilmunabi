import { ObjectData } from "../objects";

export const asteroidData: ObjectData = {
  slug: "asteroid",
  name: { id: "Asteroid", en: "Asteroid" },
  icon: "🪨",
  category: "langit",
  type: "langit",
  scientificName: "Minor Planet",
  surahName: "Al-Anbiya",
  surahReference: "21:32",
  unlockedAtPoints: 10,
  kosakata: [
    { arab: "كويكب", latin: "Khuwaykib", arti: "Asteroid", artiEn: "Asteroid", contohAyat: "Allah menjaga bumi dari jatuhnya benda langit." }
  ],
  balita: {
    text: { id: "Wah, lihat batu besar yang terbang di angkasa! Itu asteroid! 🪨", en: "Wow, look at the big rock flying in space! That's an asteroid! 🪨" },
    audioTranscript: { id: "Asteroid adalah batu raksasa yang jalan-jalan di luar angkasa.", en: "Asteroids are giant rocks that travel in outer space." },
    quiz: {
      question: { id: "Asteroid itu terbuat dari apa?", en: "What is an asteroid made of?" },
      options: [
        { text: { id: "Air", en: "Water" } },
        { text: { id: "Batu dan logam", en: "Rock and metal" } },
        { text: { id: "Awan", en: "Clouds" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Asteroid adalah sisa-sisa batu dari awal tata surya kita terbentuk miliaran tahun lalu! Mereka paling banyak kumpul di Sabuk Asteroid antara Mars dan Jupiter.", en: "Asteroids are leftover rocks from the early formation of our solar system billions of years ago! They mostly gather in the Asteroid Belt between Mars and Jupiter." },
    facts: [
      { id: "Asteroid terbesar bernama Ceres yang ukurannya hampir sebesar negara!", en: "The largest asteroid is named Ceres, and it is almost as big as a country!" },
      { id: "Bentuk asteroid tidak bulat, tapi benjol-benjol seperti kentang.", en: "Asteroids are not round, but lumpy like potatoes." },
      { id: "Jika asteroid masuk ke bumi, dia akan terbakar di udara.", en: "If an asteroid enters Earth, it will burn up in the atmosphere." }
    ],
    quranVerse: {
      arabic: "وَجَعَلْنَا السَّمَاءَ سَقْفًا مَّحْفُوظًا",
      transliteration: "Wa ja'alnas-samaa'a saqfam mahfuuzhaa",
      translation: { id: "Dan Kami menjadikan langit itu sebagai atap yang terpelihara.", en: "And We made the sky a protected ceiling." },
      context: { id: "Allah melindungi bumi kita dengan atmosfer sebagai atap agar benda angkasa seperti asteroid hancur sebelum menabrak kita.", en: "Allah protects our Earth with the atmosphere as a ceiling so space objects like asteroids get destroyed before hitting us." }
    },
    quiz: {
      question: { id: "Di mana letak Sabuk Asteroid?", en: "Where is the Asteroid Belt located?" },
      options: [
        { text: { id: "Antara Mars dan Jupiter", en: "Between Mars and Jupiter" } },
        { text: { id: "Di dekat Matahari", en: "Near the Sun" } },
        { text: { id: "Di luar Bima Sakti", en: "Outside the Milky Way" } }
      ],
      answerIdx: 0
    }
  },
  explorer: {
    text: { id: "Mempelajari asteroid itu seperti membaca buku sejarah alam semesta. Mereka menyimpan material tua dari 4,6 miliar tahun lalu! Bahkan beberapa ilmuwan meyakini asteroid yang menabrak bumi dulu membawa air untuk lautan kita. Betapa hebatnya sistem yang Allah ciptakan di alam semesta ini, semuanya bergerak dalam orbit yang rapi.", en: "Studying asteroids is like reading a history book of the universe. They hold ancient material from 4.6 billion years ago! Some scientists even believe that an asteroid hitting Earth brought water for our oceans. How amazing is the system Allah created in this universe, everything moves in a neat orbit." },
    anatomy: [
      { part: { id: "Inti Logam", en: "Metal Core" }, desc: { id: "Bagian tengah asteroid yang terdiri dari besi dan nikel.", en: "The center part of an asteroid consisting of iron and nickel." } },
      { part: { id: "Permukaan Regolith", en: "Regolith Surface" }, desc: { id: "Lapisan debu dan batuan hancur yang menyelimuti asteroid.", en: "A layer of dust and crushed rock covering the asteroid." } }
    ],
    wowFactor: { id: "Beberapa asteroid memiliki bulan kecilnya sendiri yang mengorbit mengelilinginya, seperti asteroid Ida dengan bulannya yang bernama Dactyl!", en: "Some asteroids have their own tiny moons orbiting them, like the asteroid Ida with its moon named Dactyl!" },
    quranVerse: {
      arabic: "وَكُلٌّ فِي فَلَكٍ يَسْبَحُونَ",
      transliteration: "Wa kullun fii falakiy yasbahuun",
      translation: { id: "Dan masing-masing beredar pada garis edarnya.", en: "And all swim in an orbit." }
    },
    quiz: [
      {
        question: { id: "Apa lapisan debu yang menyelimuti asteroid?", en: "What is the dust layer covering the asteroid called?" },
        options: [{ text: { id: "Magma", en: "Magma" } }, { text: { id: "Regolith", en: "Regolith" } }, { text: { id: "Kawah", en: "Crater" } }],
        answerIdx: 1
      }
    ]
  }
};

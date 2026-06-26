import { ObjectData } from "../objects";

export const nebulaOrionData: ObjectData = {
  slug: "nebula-orion",
  name: { id: "Nebula Orion", en: "Orion Nebula" },
  icon: "🌌",
  category: "langit",
  type: "langit",
  scientificName: "Messier 42",
  surahName: "Ad-Dukhan",
  surahReference: "44:10",
  unlockedAtPoints: 100,

  kosakata: [
    { arab: "دُخَانٌ", latin: "Dukhaanun", arti: "Asap/Kabut", artiEn: "Smoke/Gas", contohAyat: "فَارْتَقِبْ يَوْمَ تَأْتِي السَّمَاءُ بِدُخَانٍ مُبِينٍ" },
    { arab: "نَجْمٌ", latin: "Najmun", arti: "Bintang", artiEn: "Star", contohAyat: "وَٱلنَّجْمِ إِذَا هَوَىٰ" },
    { arab: "جَمِيلٌ", latin: "Jamiilun", arti: "Indah", artiEn: "Beautiful", contohAyat: "وَاللَّهُ جَمِيلٌ يُحِبُّ الْجَمَالَ" },
    { arab: "سَمَاءٌ", latin: "Samaa'un", arti: "Langit", artiEn: "Sky", contohAyat: "وَالسَّمَاءِ ذَاتِ الْبُرُوجِ" }
  ],

  balita: {
    text: {
      id: "Lihat awan warna-warni yang bersinar di langit! Itu namanya Nebula. Nebula adalah tempat bintang-bintang baru lahir. Seperti taman bermain untuk bayi-bayi bintang. Allah Maha Menciptakan yang indah-indah!",
      en: "Look at the colorful glowing clouds in the sky! It's called a Nebula. A Nebula is where new stars are born. Like a playground for baby stars. Allah creates beautiful things!"
    },
    audioTranscript: {
      id: "Nebula adalah awan cantik tempat bayi bintang lahir. Subhanallah!",
      en: "Nebula is a beautiful cloud where baby stars are born. Subhanallah!"
    },
    quiz: {
      question: { id: "Apa itu Nebula?", en: "What is a Nebula?" },
      options: [
        { text: { id: "Tempat bintang baru lahir", en: "Place where new stars are born" } },
        { text: { id: "Rumah burung", en: "Birdhouse" } },
        { text: { id: "Toko mainan", en: "Toy store" } }
      ],
      answerIdx: 0
    }
  },

  anak: {
    text: {
      id: "Nebula Orion adalah salah satu tempat lahirnya bintang terdekat dengan bumi. Awan gas dan debu raksasa ini sangat panas dan bersinar dalam warna merah jambu dan biru! Allah menciptakan debu dan gas ini untuk membentuk planet dan tata surya baru.",
      en: "The Orion Nebula is one of the closest star-forming regions to Earth. This giant cloud of gas and dust is very hot and glows in pink and blue colors! Allah created this dust and gas to form new planets and solar systems."
    },
    facts: [
      { id: "Jaraknya sangat jauh, butuh 1.344 tahun untuk ke sana meski naik roket kecepatan cahaya!", en: "It's so far, it takes 1,344 years to get there even on a light-speed rocket!" },
      { id: "Isinya penuh gas hidrogen yang bersinar merah.", en: "It is full of hydrogen gas that glows red." },
      { id: "Ribuan bayi bintang bersembunyi di dalamnya.", en: "Thousands of baby stars are hiding inside." },
      { id: "Lebar Nebula Orion sangat besar, butuh 24 tahun cahaya untuk melintasinya.", en: "The width is so large, it takes 24 light years to cross it." },
      { id: "Bisa dilihat dengan mata telanjang jika langit sangat gelap.", en: "Can be seen with the naked eye if the sky is very dark." }
    ],
    quranVerse: {
      arabic: "...",
      transliteration: "...",
      translation: { id: "Maka tunggulah hari ketika langit membawa kabut/asap yang nyata... (Ad-Dukhan: 10)", en: "Then watch for the Day when the sky will bring a visible smoke... (Ad-Dukhan: 10)" }
    },
    quiz: {
      question: { id: "Warna apa yang sering terlihat di Nebula Orion?", en: "What colors are often seen in the Orion Nebula?" },
      options: [
        { text: { id: "Merah muda dan biru bersinar", en: "Glowing pink and blue" } },
        { text: { id: "Hitam pekat", en: "Pitch black" } },
        { text: { id: "Transparan", en: "Transparent" } }
      ],
      answerIdx: 0
    }
  },

  explorer: {
    text: {
      id: "Nebula Orion adalah 'Pabrik Bintang' (Stellar Nursery). Gas hidrogen dan debu berkumpul akibat gravitasi, semakin padat dan panas hingga menyala menjadi bintang baru. Dalam astronomi, materi pembentuk bintang ini disebut sebagai debu dan gas antarbintang. Al-Qur'an secara menakjubkan menggunakan kata 'Dukhan' (asap/gas debu pekat) untuk menyebutkan proses awal pembentukan tata surya alam semesta (Fussilat: 11) sebelum mereka memadat menjadi langit dan bumi!",
      en: "The Orion Nebula is a 'Stellar Nursery'. Hydrogen gas and dust gather due to gravity, becoming denser and hotter until they ignite into new stars. In astronomy, this star-forming material is interstellar dust and gas. The Quran amazingly uses the word 'Dukhan' (dense smoke/gas dust) to describe the early formation of the universe (Fussilat: 11) before they solidified into heavens and earth!"
    },
    anatomy: [
      { part: { id: "Awan Molekuler", en: "Molecular Cloud" }, desc: { id: "Gas dingin yang belum menjadi bintang.", en: "Cold gas that has not yet become a star." } },
      { part: { id: "Bayi Bintang (Protostar)", en: "Protostar" }, desc: { id: "Bintang yang baru saja lahir dan masih menarik debu.", en: "A newly born star still pulling in dust." } }
    ],
    wowFactor: {
      id: "Nebula ini memproduksi bintang seperti pabrik! Ada lebih dari 700 bintang baru di dalamnya sekarang!",
      en: "This nebula produces stars like a factory! There are over 700 new stars inside it right now!"
    },
    quranVerse: {
      arabic: "...",
      transliteration: "...",
      translation: { id: "Kemudian Dia menuju kepada penciptaan langit dan langit itu masih merupakan asap (Dukhan), lalu Dia berkata kepadanya dan kepada bumi: 'Datanglah kamu keduanya menurut perintah-Ku dengan suka hati atau terpaksa'. Keduanya menjawab: 'Kami datang dengan suka hati.' (Fussilat: 11)", en: "Then He directed Himself to the heaven while it was smoke (Dukhan) and said to it and to the earth, 'Come [into being], willingly or by compulsion.' They said, 'We have come willingly.' (Fussilat: 11)" }
    },
    quiz: [
      {
        question: { id: "Apa istilah sains untuk debu dan gas yang mirip dengan sebutan 'Dukhan' di Al-Qur'an?", en: "What is the scientific term for dust and gas similar to 'Dukhan' in the Quran?" },
        options: [
          { text: { id: "Kabut asap", en: "Smog" } },
          { text: { id: "Awan Molekuler antarbintang", en: "Interstellar Molecular Cloud" } },
          { text: { id: "Awan hujan", en: "Rain cloud" } }
        ],
        answerIdx: 1
      },
      {
        question: { id: "Berapa banyak bintang baru yang ada di Nebula Orion?", en: "How many new stars are there in the Orion Nebula?" },
        options: [
          { text: { id: "Tidak ada", en: "None" } },
          { text: { id: "Lebih dari 700 bintang", en: "More than 700 stars" } },
          { text: { id: "Hanya satu", en: "Only one" } }
        ],
        answerIdx: 1
      },
      {
        question: { id: "Apa yang membuat gas di Nebula menyala menjadi bintang?", en: "What makes the gas in a Nebula ignite into a star?" },
        options: [
          { text: { id: "Ditiup angin", en: "Blown by the wind" } },
          { text: { id: "Gravitasi dan panas yang sangat tinggi", en: "Gravity and extreme heat" } },
          { text: { id: "Tersambar petir", en: "Struck by lightning" } }
        ],
        answerIdx: 1
      }
    ]
  }
};

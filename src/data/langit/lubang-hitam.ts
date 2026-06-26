import { ObjectData } from "../objects";

export const lubangHitamData: ObjectData = {
  slug: "lubang-hitam",
  name: { id: "Lubang Hitam", en: "Black Hole" },
  icon: "🕳️",
  category: "langit",
  type: "langit",
  scientificName: "Black Hole",
  surahName: "At-Takwir",
  surahReference: "81:15-16",
  unlockedAtPoints: 100,
  kosakata: [
    { arab: "ثُقْبٌ أَسْوَد", latin: "Tsuqbun Aswad", arti: "Lubang Hitam", artiEn: "Black Hole", contohAyat: "Lubang hitam menyerap semua cahaya di dekatnya." }
  ],
  balita: {
    text: { id: "Wah, di angkasa ada sesuatu yang super misterius! Warnanya sangat gelap seperti bayangan! 🕳️", en: "Wow, in space there is something super mysterious! It is very dark like a shadow! 🕳️" },
    audioTranscript: { id: "Lubang Hitam itu seperti magnet raksasa yang menyedot apa saja di dekatnya.", en: "A Black Hole is like a giant magnet that sucks up anything near it." },
    quiz: {
      question: { id: "Warna lubang hitam itu seperti apa?", en: "What color is a black hole?" },
      options: [
        { text: { id: "Kuning terang", en: "Bright yellow" } },
        { text: { id: "Sangat gelap/hitam", en: "Very dark/black" } },
        { text: { id: "Hijau", en: "Green" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Lubang hitam adalah tempat di angkasa dengan gaya tarik (gravitasi) yang sangattt kuat! Saking kuatnya, bintang, planet, bahkan cahaya sekalipun tidak bisa kabur darinya kalau sudah terlalu dekat.", en: "A black hole is a place in space with a verrrry strong pulling force (gravity)! It is so strong that stars, planets, and even light cannot escape it once they get too close." },
    facts: [
      { id: "Lubang hitam tidak bisa dilihat mata karena ia menelan semua cahaya.", en: "Black holes cannot be seen by the eye because they swallow all light." },
      { id: "Lubang hitam biasanya terbentuk ketika ada bintang raksasa yang sudah tua lalu meledak keras (Supernova).", en: "Black holes usually form when a giant old star explodes violently (Supernova)." },
      { id: "Meski mengerikan, lubang hitam tidak akan menyedot bumi kita karena jaraknya sangat jauh.", en: "Although terrifying, black holes will not suck our Earth because they are very far away." }
    ],
    quranVerse: {
      arabic: "فَلَا أُقْسِمُ بِالْخُنَّسِ ۝ الْجَوَارِ الْكُنَّسِ",
      transliteration: "Falaa uqsimu bil-khunnas. Al-jawaaril kunnas.",
      translation: { id: "Sungguh, Aku bersumpah dengan bintang-bintang yang tersembunyi (tidak tampak), yang bergerak cepat dan menyapu.", en: "So I swear by the retreating stars. Those that run [their courses] and disappear (sweeping)." },
      context: { id: "Ulama modern melihat sifat lubang hitam yang 'tersembunyi, berlari cepat, dan menyapu' benda langit mirip dengan ayat ini.", en: "Modern scholars see the characteristics of black holes being 'hidden, running fast, and sweeping' celestial objects as similar to this verse." }
    },
    quiz: {
      question: { id: "Apa yang terjadi pada cahaya kalau mendekati lubang hitam?", en: "What happens to light if it gets close to a black hole?" },
      options: [
        { text: { id: "Terpantul kembali", en: "It reflects back" } },
        { text: { id: "Tidak bisa kabur atau tersedot", en: "It cannot escape or gets sucked in" } },
        { text: { id: "Bercahaya makin terang", en: "It shines brighter" } }
      ],
      answerIdx: 1
    }
  },
  explorer: {
    text: { id: "Lubang hitam adalah salah satu misteri fisika terbesar ciptaan Allah. Ia melengkungkan ruang dan waktu! Jika kamu bisa mendekati sebuah lubang hitam (Event Horizon), waktu untukmu akan berjalan jauh lebih lambat dibanding teman-temanmu di Bumi. Sungguh, alam semesta penuh dengan keajaiban yang membuat kita semakin takjub pada Penciptanya.", en: "Black holes are one of the greatest physics mysteries of Allah's creation. They bend space and time! If you could approach a black hole (Event Horizon), time for you would run much slower compared to your friends on Earth. Indeed, the universe is full of wonders that make us more amazed by its Creator." },
    anatomy: [
      { part: { id: "Event Horizon", en: "Event Horizon" }, desc: { id: "Batas ujung lubang hitam. Apapun yang melewati batas ini, tak akan pernah bisa kembali lagi.", en: "The edge boundary of a black hole. Anything that crosses this boundary can never return." } },
      { part: { id: "Singularitas", en: "Singularity" }, desc: { id: "Titik pusat di dalam lubang hitam tempat seluruh massanya hancur menjadi satu titik dengan kepadatan tak terhingga.", en: "The center point inside a black hole where all its mass is crushed into a single point with infinite density." } }
    ],
    wowFactor: { id: "Lubang hitam di pusat galaksi kita, Sagittarius A*, memiliki massa sebesar 4 juta kali massa Matahari kita, tapi dipadatkan dalam ruang yang sangat kecil!", en: "The black hole at the center of our galaxy, Sagittarius A*, has a mass of 4 million times our Sun, but compressed into a very small space!" },
    quranVerse: {
      arabic: "وَمَا أُوتِيتُم مِّنَ الْعِلْمِ إِلَّا قَلِيلًا",
      transliteration: "Wa maa uutiitum minal-ilmi illaa qaliilaa",
      translation: { id: "Dan tidaklah kamu diberi pengetahuan melainkan sedikit.", en: "And you have not been given of knowledge except a little." }
    },
    quiz: [
      {
        question: { id: "Apa nama batas lubang hitam yang membuat cahaya pun tidak bisa kembali?", en: "What is the name of the black hole's boundary from which even light cannot return?" },
        options: [{ text: { id: "Batas Bima Sakti", en: "Milky Way Border" } }, { text: { id: "Singularitas", en: "Singularity" } }, { text: { id: "Event Horizon", en: "Event Horizon" } }],
        answerIdx: 2
      }
    ]
  }
};

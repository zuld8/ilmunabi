import { ObjectData } from "../objects";

export const meteorData: ObjectData = {
  slug: "meteor",
  name: { id: "Meteor", en: "Meteor" },
  icon: "🌠",
  category: "langit",
  type: "langit",
  scientificName: "Meteoroid",
  surahName: "Al-Mulk",
  surahReference: "67:5",
  unlockedAtPoints: 50,
  kosakata: [
    { arab: "شِهَاب", latin: "Shihab", arti: "Bintang Jatuh/Meteor", artiEn: "Shooting Star/Meteor", contohAyat: "Meteor yang menyala mengejar setan" }
  ],
  balita: {
    text: { id: "Wah, ada bintang jatuh! 🌠 Eits, tapi itu bukan bintang sungguhan, itu batu angkasa yang terbakar saat masuk ke Bumi! Wussss!", en: "Wow, a shooting star! 🌠 Wait, but it's not a real star, it's a space rock burning up as it enters Earth! Whoosh!" },
    audioTranscript: { id: "Lihat ke langit! Cahaya yang melesat cepat itu namanya meteor. Allah melindung Bumi dari batu angkasa dengan membakarnya sebelum sampai ke tanah.", en: "Look at the sky! That fast-moving light is called a meteor. Allah protects Earth from space rocks by burning them before they reach the ground." },
    quiz: {
      question: { id: "Sebenarnya, bintang jatuh (meteor) itu terbuat dari apa?", en: "Actually, what is a shooting star (meteor) made of?" },
      options: [
        { text: { id: "Cahaya senter", en: "Flashlight beam" } },
        { text: { id: "Batu angkasa yang terbakar", en: "Burning space rock" } },
        { text: { id: "Lampu terbang", en: "Flying lamp" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Meteor asalnya dari batu angkasa (meteoroid) yang nyasar ke Bumi. Saat menabrak udara Bumi dengan sangat cepat, batu itu jadi super panas dan menyala terang!", en: "Meteors come from space rocks (meteoroids) that stray to Earth. When they hit Earth's air super fast, the rocks get super hot and glow brightly!" },
    facts: [
      { id: "Setiap hari ada jutaan meteor yang jatuh ke Bumi, tapi hampir semuanya hangus terbakar di udara! 🛡️", en: "Every day millions of meteors fall to Earth, but almost all of them burn up entirely in the air! 🛡️" },
      { id: "Kadang kita bisa melihat Hujan Meteor, di mana ada banyak sekali bintang jatuh dalam satu malam!", en: "Sometimes we can see a Meteor Shower, where there are lots of shooting stars in one night!" },
      { id: "Kalau batunya tidak habis terbakar dan menabrak tanah, batu itu disebut Meteorit.", en: "If the rock doesn't burn up completely and hits the ground, it's called a Meteorite." }
    ],
    quranVerse: { arabic: "...", transliteration: "...", translation: { id: "...", en: "..." } },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  },
  explorer: {
    text: { id: "Kecepatan meteor masuk ke Bumi bisa mencapai 250.000 km/jam! HAH?! Gesekan dengan atmosfer menciptaan panas hingga 1600°C yang menghancurkan batu tersebut menjadi debu. Inilah tameng tak terlihat pelindung Bumi! 1400 tahun lalu, Al-Qur'an menceritakan bahwa langit dihiasi lampu-lampu (bintang) dan panah api (meteor) sebagai penjagaan.", en: "Meteors hit Earth at speeds up to 250,000 km/h! HAH?! Friction with the atmosphere creates heat up to 1600°C, crushing the rock into dust. This is Earth's invisible shield! 1400 years ago, the Quran told that the sky is adorned with lamps (stars) and flaming arrows (meteors) as a guard." },
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

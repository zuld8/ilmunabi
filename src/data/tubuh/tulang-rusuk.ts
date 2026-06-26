import { ObjectData } from "../objects";

export const tulangRusukData: ObjectData = {
  slug: "tulang-rusuk",
  name: { id: "Tulang Rusuk", en: "Rib Cage" },
  icon: "🦴",
  category: "tubuh",
  type: "tubuh",
  scientificName: "Costae",
  surahName: "At-Tariq",
  surahReference: "86:7",
  unlockedAtPoints: 160,
  kosakata: [
    { arab: "تَرَائِبٌ", latin: "Taraa'ib", arti: "Tulang Rusuk", artiEn: "Ribs", contohAyat: "Yakhruju min baynis-sulbi wat-taraa'ib (Keluar dari antara tulang punggung dan tulang rusuk)." }
  ],
  balita: {
    text: { id: "Raba dadamu! Terasa ada tulang yang berbaris seperti pagar kan? Itu namanya tulang rusuk. Tulang ini memeluk jantung dan paru-parumu agar aman. Pelukan yang hebat! 🤗🛡️", en: "Feel your chest! You can feel bones lined up like a fence, right? That's called the rib cage. These bones hug your heart and lungs to keep them safe. A great hug! 🤗🛡️" },
    audioTranscript: { id: "Tulang rusuk bentuknya seperti sangkar burung. Ia menjaga jantung kita.", en: "The rib cage is shaped like a birdcage. It guards our heart." },
    quiz: {
      question: { id: "Tulang rusuk melindungi bagian tubuh apa?", en: "What body parts does the rib cage protect?" },
      options: [
        { text: { id: "Kaki dan lutut", en: "Legs and knees" } },
        { text: { id: "Jantung dan paru-paru", en: "Heart and lungs" } },
        { text: { id: "Mata dan telinga", en: "Eyes and ears" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Manusia punya 12 pasang tulang rusuk, loh! Totalnya 24 tulang. Bentuknya seperti kurungan sangkar, tapi ajaibnya tulang ini bisa bergerak mengembang saat kita menarik napas. Kalau tidak bisa mengembang, dada kita akan kaku dan kita tidak bisa bernapas. Allah membuat pelindung yang kuat tapi elastis ini agar jantung tidak terbentur. 🌬️🫁", en: "Humans have 12 pairs of ribs, you know! Total 24 bones. It's shaped like a cage enclosure, but magically these bones can move and expand when we breathe in. If they couldn't expand, our chest would be stiff and we couldn't breathe. Allah made this strong yet elastic protector so the heart doesn't get bumped. 🌬️🫁" },
    facts: [
      { id: "Tulang rusuk terhubung ke dada kita menggunakan tulang rawan (mirip tulang telinga) yang empuk. 🦴", en: "Ribs connect to our chest using cartilage (like ear bones) that is squishy. 🦴" },
      { id: "Kalau kamu bersin terlalu keras, otot di sekitar tulang rusuk bisa terasa sakit sesaat! 🤧", en: "If you sneeze too hard, the muscles around the ribs can hurt for a moment! 🤧" },
      { id: "Dua rusuk paling bawah disebut 'rusuk melayang' karena bagian depannya tidak menempel pada dada. 🎈", en: "The bottom two ribs are called 'floating ribs' because their front parts don't attach to the chest. 🎈" }
    ],
    quranVerse: {
      arabic: "يَخْرُجُ مِن بَيْنِ الصُّلْبِ وَالتَّرَائِبِ",
      transliteration: "Yakhruju min baynis-sulbi wat-taraa'ib",
      translation: { id: "Keluar dari antara tulang punggung dan tulang rusuk.", en: "Emerging from between the backbone and the ribs." },
      context: { id: "Al-Qur'an menjelaskan penciptaan manusia berawal dari cairan yang posisinya berada di area sulbi dan tara'ib.", en: "The Quran explains human creation begins from fluid located in the backbone and ribs area." }
    },
    quiz: {
      question: { id: "Mengapa sangkar tulang rusuk kita harus bisa sedikit mengembang (lentur)?", en: "Why must our rib cage be able to slightly expand (flexible)?" },
      options: [
        { text: { id: "Supaya kita bisa bernapas (paru-paru mengembang)", en: "So we can breathe (lungs expand)" } },
        { text: { id: "Supaya kita bisa makan banyak", en: "So we can eat a lot" } },
        { text: { id: "Supaya tulang kita bisa ditekuk", en: "So our bones can be bent" } }
      ],
      answerIdx: 0
    }
  },
  explorer: {
    text: { id: "Desain Tulang Rusuk sangat revolusioner. Jika tulang dada kita menyambung kaku menjadi satu bagian seperti helm kepala, kita tidak akan bisa bernapas! Karena paru-paru butuh ruang untuk membesar, Allah menjadikan rusuk depan berbahan tulang rawan (kartilago) yang elastis. Hal menakjubkan lainnya, sumsum tulang di dalam rusuk memproduksi darah sangat banyak untuk tubuh kita! Sungguh sistem pertahanan mekanis yang cerdas! 🛡️🩸", en: "The Rib Cage design is revolutionary. If our chest bone were joined rigidly into one piece like a head helmet, we wouldn't be able to breathe! Because lungs need space to expand, Allah made the front ribs of elastic cartilage. Another amazing thing, the bone marrow inside the ribs produces a lot of blood for our body! Truly a smart mechanical defense system! 🛡️🩸" },
    anatomy: [
      { part: { id: "Sternum", en: "Sternum" }, desc: { id: "Tulang dada yang datar di tengah, tempat bertemunya rusuk kanan dan kiri.", en: "The flat breastbone in the middle, where right and left ribs meet." } },
      { part: { id: "Rusuk Sejati (1-7)", en: "True Ribs" }, desc: { id: "7 pasang rusuk atas yang menempel langsung ke sternum dengan kuat.", en: "The top 7 pairs of ribs that attach directly and strongly to the sternum." } },
      { part: { id: "Kartilago Kosta", en: "Costal Cartilage" }, desc: { id: "Bagian transparan bertekstur karet penghubung antara rusuk dan dada.", en: "The rubbery transparent part connecting the ribs and chest." } }
    ],
    wowFactor: { id: "Tulang rusuk bisa pulih dan memperbaiki dirinya sendiri lebih cepat daripada banyak tulang di bagian tubuh lainnya jika mengalami keretakan kecil! 🩹", en: "The rib cage can heal and repair itself faster than many bones in other body parts if it gets a small fracture! 🩹" },
    quranVerse: {
      arabic: "يَخْرُجُ مِن بَيْنِ الصُّلْبِ وَالتَّرَائِبِ",
      transliteration: "Yakhruju min baynis-sulbi wat-taraa'ib",
      translation: { id: "Keluar dari antara tulang punggung dan tulang rusuk.", en: "Emerging from between the backbone and the ribs." }
    },
    quiz: [
      {
        question: { id: "Apa tulang datar di bagian tengah dada tempat tulang rusuk menempel?", en: "What is the flat bone in the middle of the chest where the ribs attach?" },
        options: [
          { text: { id: "Kranium", en: "Cranium" } },
          { text: { id: "Sternum", en: "Sternum" } },
          { text: { id: "Femur", en: "Femur" } }
        ],
        answerIdx: 1
      }
    ]
  }
};

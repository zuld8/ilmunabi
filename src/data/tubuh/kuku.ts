import { ObjectData } from "../objects";

export const kukuData: ObjectData = {
  slug: "kuku",
  name: { id: "Kuku", en: "Nail" },
  icon: "💅",
  category: "tubuh",
  type: "tubuh",
  scientificName: "Unguis",
  surahName: "Al-Infitar",
  surahReference: "82:7-8",
  unlockedAtPoints: 60,
  kosakata: [
    { arab: "ظُفْرٌ", latin: "Zhufrun", arti: "Kuku", artiEn: "Nail", contohAyat: "Wa 'alal-latheena haadoo harramnaa kulla thee zhufur (Dan kepada orang Yahudi Kami haramkan segala hewan yang berkuku - Al-An'am:146)." }
  ],
  balita: {
    text: { id: "Klik! Klik! Wah, kuku kita sudah panjang. Harus dipotong supaya tidak ada kuman nakal yang sembunyi di dalamnya. ✂️💅", en: "Click! Click! Wow, our nails are getting long. We have to cut them so no naughty germs hide inside. ✂️💅" },
    audioTranscript: { id: "Potong kuku itu sunnah Nabi. Kalau bersih, kita jadi sehat dan disayang Allah.", en: "Cutting nails is the Prophet's sunnah. If clean, we are healthy and loved by Allah." },
    quiz: {
      question: { id: "Apa yang harus dilakukan kalau kuku sudah panjang?", en: "What should we do if our nails are long?" },
      options: [
        { text: { id: "Dibiarkan saja", en: "Leave it alone" } },
        { text: { id: "Dipotong", en: "Cut them" } },
        { text: { id: "Dicat warna-warni", en: "Paint them colorfully" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Kuku adalah pelindung ujung jari kita yang lembut. Nabi Muhammad ﷺ mengajarkan kita untuk memotong kuku secara rutin, paling lambat setiap 40 hari. Menjaga kebersihan kuku berarti menjaga kesehatan kita dari penyakit perut, karena kita makan pakai tangan! 🍽️✨", en: "Nails are the protectors of our soft fingertips. Prophet Muhammad ﷺ taught us to cut our nails regularly, at most every 40 days. Keeping nails clean means protecting our health from stomach illnesses, because we eat with our hands! 🍽️✨" },
    facts: [
      { id: "Kuku tangan tumbuh sekitar 3 milimeter setiap bulannya! 📏", en: "Fingernails grow about 3 millimeters every month! 📏" },
      { id: "Kuku jari tangan tumbuh lebih cepat daripada kuku jari kaki. 🏃‍♂️", en: "Fingernails grow faster than toenails. 🏃‍♂️" },
      { id: "Memotong kuku tidak sakit karena kuku terbuat dari sel-sel mati yang sudah mengeras. 🛡️", en: "Cutting nails doesn't hurt because nails are made of hardened dead cells. 🛡️" }
    ],
    quranVerse: {
      arabic: "إِنَّ اللَّهَ يُحِبُّ التَّوَّابِينَ وَيُحِبُّ الْمُتَطَهِّرِينَ",
      transliteration: "Innallaaha yuhibbut-tawwaabeena wa yuhibbul-mutatahhireen",
      translation: { id: "Sesungguhnya Allah menyukai orang-orang yang bertaubat dan menyukai orang-orang yang mensucikan diri.", en: "Indeed, Allah loves those who are constantly repentant and loves those who purify themselves." },
      context: { id: "Memotong kuku adalah bagian dari kebersihan (fitrah) yang dicintai Allah.", en: "Cutting nails is part of cleanliness (fitrah) loved by Allah." }
    },
    quiz: {
      question: { id: "Kuku tangan tumbuh lebih cepat atau lebih lambat dari kuku kaki?", en: "Do fingernails grow faster or slower than toenails?" },
      options: [
        { text: { id: "Lebih lambat", en: "Slower" } },
        { text: { id: "Lebih cepat", en: "Faster" } },
        { text: { id: "Sama saja", en: "The same" } }
      ],
      answerIdx: 1
    }
  },
  explorer: {
    text: { id: "Kuku terbentuk dari protein kuat bernama keratin, bahan yang sama dengan pembentuk rambut dan tanduk pada hewan! Kuku tumbuh dari area tersembunyi di bawah kulit (matriks kuku). Menariknya, warna dan bentuk kuku bisa menjadi petunjuk bagi dokter tentang kesehatan kita. Jika kuku pucat atau kebiruan, itu pertanda ada yang salah di tubuh. Sungguh luar biasa, Allah menjadikan bagian sekecil kuku sebagai layar monitor kesehatan tubuh! 🩺🔍", en: "Nails are formed from a strong protein called keratin, the same material that forms hair and animal horns! Nails grow from a hidden area under the skin (the nail matrix). Interestingly, the color and shape of nails can be a clue for doctors about our health. If nails are pale or bluish, it's a sign something is wrong in the body. How amazing, Allah made a part as small as a nail as a health monitor screen for the body! 🩺🔍" },
    anatomy: [
      { part: { id: "Plat Kuku", en: "Nail Plate" }, desc: { id: "Bagian keras kuku yang bisa kita lihat dan potong.", en: "The hard part of the nail that we can see and cut." } },
      { part: { id: "Matriks Kuku", en: "Nail Matrix" }, desc: { id: "Pabrik pembuat kuku yang letaknya tersembunyi di bawah kulit pangkal kuku.", en: "The nail factory hidden under the skin at the base of the nail." } },
      { part: { id: "Kutikula", en: "Cuticle" }, desc: { id: "Lapisan kulit tipis di pangkal yang berfungsi menutup celah agar bakteri tidak masuk.", en: "A thin skin layer at the base that seals the gap so bacteria don't enter." } }
    ],
    wowFactor: { id: "Kuku di tangan yang dominan (sering dipakai) akan tumbuh lebih cepat daripada tangan satunya! Karena pergerakan meningkatkan aliran darah ke jari tersebut. ⚡", en: "The nails on your dominant hand (used often) will grow faster than the other hand! Because movement increases blood flow to those fingers. ⚡" },
    quranVerse: {
      arabic: "لَقَدْ خَلَقْنَا الْإِنسَانَ فِي أَحْسَنِ تَقْوِيمٍ",
      transliteration: "Laqad khalaqnal-insaana fee ahsani taqweem",
      translation: { id: "Sungguh, Kami telah menciptakan manusia dalam bentuk yang sebaik-baiknya.", en: "We have certainly created man in the best of stature." }
    },
    quiz: [
      {
        question: { id: "Bahan protein kuat pembentuk kuku adalah...", en: "The strong protein material forming nails is..." },
        options: [
          { text: { id: "Kalsium", en: "Calcium" } },
          { text: { id: "Zat Besi", en: "Iron" } },
          { text: { id: "Keratin", en: "Keratin" } }
        ],
        answerIdx: 2
      }
    ]
  }
};
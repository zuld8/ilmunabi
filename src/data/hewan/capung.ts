import { ObjectData } from "../objects";

export const capungData: ObjectData = {
  slug: "capung",
  name: { id: "Capung", en: "Dragonfly" },
  scientificName: "Anisoptera",
  surahName: "Al-Mulk",
  surahReference: "67:19",
  icon: "🪰",
  category: "hewan",
  type: "hewan",
  unlockedAtPoints: 50,
  kosakata: [
    { arab: "يَطِيرُ", latin: "Yatiiru", arti: "Terbang", artiEn: "Flies", contohAyat: "Al-Mulk 67:19" },
    { arab: "حَشَرَةٌ", latin: "Hasyaratun", arti: "Serangga", artiEn: "Insect", contohAyat: "Al-Hajj 22:73" },
    { arab: "بَصَرٌ", latin: "Basarun", arti: "Penglihatan", artiEn: "Vision", contohAyat: "Qaf 50:22" },
    { arab: "مَاءٌ", latin: "Maa'un", arti: "Air", artiEn: "Water", contohAyat: "Al-Anbiya 21:30" }
  ],
  balita: {
    text: {
      id: "Wusss! Capung terbang sangat cepat seperti helikopter mini! 🚁",
      en: "Whoosh! The dragonfly flies super fast like a mini helicopter! 🚁"
    },
    audioTranscript: {
      id: "Capung bisa terbang maju dan mundur. Allah memberinya sayap yang hebat.",
      en: "Dragonflies can fly forward and backward. Allah gave them great wings."
    },
    quiz: {
      question: { id: "Hewan apa yang terbang seperti helikopter mini?", en: "Which animal flies like a mini helicopter?" },
      options: [
        { text: { id: "🐌 Siput", en: "🐌 Snail" } },
        { text: { id: "🪰 Capung", en: "🪰 Dragonfly" } },
        { text: { id: "🐢 Kura-kura", en: "🐢 Turtle" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: {
      id: "Capung adalah penerbang ulung ciptaan Allah. Ia bisa terbang mundur dan melayang di udara. Matanya sangat besar dan bisa melihat ke semua arah!",
      en: "Dragonflies are master flyers created by Allah. They can fly backward and hover in the air. Their eyes are huge and can see in all directions!"
    },
    facts: [
      { id: "Capung memiliki 4 sayap yang bergerak secara mandiri.", en: "Dragonflies have 4 independently moving wings." },
      { id: "Mata capung terdiri dari 30.000 lensa kecil (ommatidia).", en: "Dragonfly eyes consist of 30,000 small lenses." },
      { id: "Capung menghabiskan awal hidupnya di dalam air sebagai nimfa.", en: "Dragonflies spend their early lives in water as nymphs." },
      { id: "Capung dapat terbang dengan kecepatan hingga 50 km/jam.", en: "Dragonflies can fly at speeds up to 50 km/h." },
      { id: "Capung tidak bisa berjalan, kakinya digunakan untuk menangkap mangsa.", en: "Dragonflies cannot walk, their legs are used to catch prey." }
    ],
    quranVerse: {
      arabic: "أَوَلَمْ يَرَوْا إِلَى الطَّيْرِ فَوْقَهُمْ صَافَّاتٍ وَيَقْبِضْنَ ۚ مَا يُمْسِكُهُنَّ إِلَّا الرَّحْمَٰنُ ۚ إِنَّهُ بِكُلِّ شَيْءٍ بَصِيرٌ",
      transliteration: "Awa lam yarau ilaṭ-ṭairi fauqahum ṣāffātiw wa yaqbiḍn, mā yumsikuhunna illar-raḥmān, innahū bikulli syai'im baṣīr",
      translation: {
        id: "Tidakkah mereka memperhatikan burung-burung yang mengembangkan dan mengatupkan sayapnya di atas mereka? Tidak ada yang menahannya (di udara) selain Yang Maha Pengasih.",
        en: "Do they not see the birds above them with wings outspread and [sometimes] folded in? None holds them [aloft] except the Most Merciful."
      }
    },
    quiz: {
      question: { id: "Apakah capung bisa terbang mundur?", en: "Can a dragonfly fly backward?" },
      options: [
        { text: { id: "Ya, bisa!", en: "Yes, it can!" } },
        { text: { id: "Tidak bisa", en: "No, it cannot" } },
        { text: { id: "Hanya melompat", en: "Only jumping" } }
      ],
      answerIdx: 0
    }
  },
  explorer: {
    text: {
      id: "Aerodinamika capung sangat sempurna hingga menginspirasi desain helikopter dan drone modern. Allah menciptakan mereka dengan perhitungan fisika yang presisi!",
      en: "Dragonfly aerodynamics are so perfect they inspired modern helicopter and drone designs. Allah created them with precise physical calculations!"
    },
    anatomy: [
      { part: { id: "Mata Majemuk", en: "Compound Eyes" }, desc: { id: "Mata besar dengan 30 ribu lensa mikroskopis.", en: "Large eyes with 30 thousand microscopic lenses." } },
      { part: { id: "Sayap Independen", en: "Independent Wings" }, desc: { id: "Empat sayap yang bisa dikendalikan terpisah.", en: "Four wings that can be controlled separately." } }
    ],
    wowFactor: {
      id: "Desain sayap capung menahan gaya gravitasi dan angin secara instan! Mereka memproses visual 4 kali lebih cepat dari manusia, seperti efek slow-motion!",
      en: "Dragonfly wing design resists gravity and wind instantly! They process visuals 4 times faster than humans, like a slow-motion effect!"
    },
    quranVerse: {
      arabic: "وَخَلَقَ كُلَّ شَيْءٍ فَقَدَّرَهُ تَقْدِيرًا",
      transliteration: "Wa khalaqa kulla syai'in fa qaddarahū taqdīrā",
      translation: { id: "Dan Dia telah menciptakan segala sesuatu, dan Dia menetapkan ukuran-ukurannya dengan serapi-rapinya.", en: "And He created everything, and determined it with precise determination." },
      context: { id: "Perhitungan aerodinamika presisi pada sayap capung adalah bukti takdir (ukuran) Allah.", en: "The precise aerodynamic calculations on dragonfly wings are proof of Allah's determination." }
    },
    quiz: [
      {
        question: { id: "Berapa banyak lensa pada mata capung?", en: "How many lenses are in a dragonfly's eye?" },
        options: [
          { text: { id: "Sekitar 30.000", en: "Around 30,000" } },
          { text: { id: "Hanya 2", en: "Only 2" } },
          { text: { id: "Sekitar 100", en: "Around 100" } }
        ],
        answerIdx: 0
      },
      {
        question: { id: "Kendaraan apa yang terinspirasi dari terbangnya capung?", en: "What vehicle is inspired by dragonfly flight?" },
        options: [
          { text: { id: "Mobil", en: "Car" } },
          { text: { id: "Kapal Laut", en: "Ship" } },
          { text: { id: "Helikopter / Drone", en: "Helicopter / Drone" } }
        ],
        answerIdx: 2
      },
      {
        question: { id: "Apakah capung bisa berjalan kaki?", en: "Can dragonflies walk?" },
        options: [
          { text: { id: "Tidak, kakinya hanya untuk hinggap/menangkap mangsa", en: "No, their legs are only for perching/catching prey" } },
          { text: { id: "Bisa, mereka pelari cepat", en: "Yes, they are fast runners" } },
          { text: { id: "Bisa berjalan mundur", en: "Can walk backwards" } }
        ],
        answerIdx: 0
      }
    ]
  }
};

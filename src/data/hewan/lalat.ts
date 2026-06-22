import { ObjectData } from "../objects";

export const lalatData: ObjectData = {
  slug: "lalat",
  name: { id: "Lalat", en: "Fly" },
  scientificName: "Musca domestica",
  surahName: "Al-Hajj (73)",
  surahReference: "22:73",
  icon: "🪰",
  category: "Serangga",
  type: "hewan",
  unlockedAtPoints: 300,
  kosakata: [
    {
      arab: "ذُبَابٌ",
      latin: "Dzubab",
      arti: "Lalat",
      artiEn: "Fly",
      contohAyat: "Al-Hajj 22:73",
      icon: "🪰"
    },
    {
      arab: "يَخْلُقُوا",
      latin: "Yakhluquu",
      arti: "Menciptakan",
      artiEn: "Create",
      contohAyat: "Al-Hajj 22:73",
      icon: "✨"
    },
    {
      arab: "سَلَبَ",
      latin: "Salaba",
      arti: "Merebut",
      artiEn: "Snatch/Steal",
      contohAyat: "Al-Hajj 22:73",
      icon: "✊"
    },
    {
      arab: "ضَعُفَ",
      latin: "Dha'ufa",
      arti: "Lemah",
      artiEn: "Weak",
      contohAyat: "Al-Hajj 22:73",
      icon: "📉"
    }
  ],
  balita: {
    text: {
      id: "Ini lalat! Lalat suka terbang cepat dan hinggap di makanan. Kita harus tutup makanan kita. 🪰",
      en: "This is a fly! It flies fast and lands on food. We must keep our food covered. 🪰",
    },
    audioTranscript: {
      id: "Ini lalat! Lalat suka terbang cepat and hinggap di makanan. Kita harus tutup makanan kita.",
      en: "This is a fly! It flies fast and lands on food. We must keep our food covered.",
    },
    quiz: {
      question: {
        id: "Bagaimana cara menjaga makanan agar tidak dihinggapi lalat?",
        en: "How do we protect our food from flies?",
      },
      options: [
        { text: { id: "🍲 Menutup makanan", en: "🍲 Covering the food" }, isImage: true },
        { text: { id: "💨 Ditiup angin", en: "💨 Blowing air" }, isImage: true },
        { text: { id: "🔥 Dibakar", en: "🔥 Burning it" }, isImage: true },
      ],
      answerIdx: 0,
    },
  },
  anak: {
    text: {
      id: "Lalat adalah penerbang lincah yang memiliki cara makan yang sangat unik.",
      en: "Flies are agile aviators that possess an extremely unique way of eating.",
    },
    facts: [
      {
        id: "Lalat memiliki indra perasa di kaki mereka untuk mencicipi rasa makanan.",
        en: "Flies have taste sensors on their feet to taste food when they land.",
      },
      {
        id: "Lalat tidak bisa mengunyah, mereka mengeluarkan air liur asam untuk mencairkan makanan.",
        en: "Flies cannot chew; they spit acidic saliva to liquefy food before sucking it.",
      },
      {
        id: "Lalat terbang dengan bantuan organ penyeimbang mirip giroskop bernama haltere.",
        en: "Flies fly with the help of gyroscope-like balancing organs called halteres.",
      },
    ],
    quranVerse: {
      arabic: "يَا أَيُّهَا النَّاسُ ضُرِبَ مَثَلٌ فَاسْتَمِعُوا لَهُ ۚ إِنَّ الَّذِينَ تَدْعُونَ مِنْ دُونِ اللَّهِ لَنْ يَخْلُقُوا ذُبَابًا وَلَوِ اجْتَمَعُوا لَهُ",
      transliteration: "Yaaa ayyuhan naasu duriba mathalun fastami'oo lah; innal lazeena tad'oona min doonillaahi lany yakhluqoo zubaabanw wa lawijtam'oo lah",
      translation: {
        id: "Wahai manusia! Telah dibuat suatu perumpamaan, maka dengarkanlah! Sesungguhnya segala yang kamu seru selain Allah tidak dapat menciptakan seekor lalat pun, walaupun mereka bersatu untuk membuatnya.",
        en: "O people, an example is presented, so listen to it. Indeed, those you invoke besides Allah will never create a fly, even if they gathered together for that purpose.",
      },
    },
    quiz: {
      question: {
        id: "Di bagian tubuh manakah lalat meletakkan indra pengecap/rasanya?",
        en: "Where are a fly's taste receptors located?",
      },
      options: [
        { text: { id: "Di lidah", en: "On their tongue" } },
        { text: { id: "Di kaki", en: "On their feet" } },
        { text: { id: "Di ekor", en: "On their tail" } },
      ],
      answerIdx: 1,
    },
  },
  explorer: {
    text: {
      id: "Proses pencernaan lalat sangat cepat, melarutkan makanan dalam hitungan detik.",
      en: "A fly's digestion process is incredibly fast, liquefying food in seconds.",
    },
    anatomy: [
      {
        part: { id: "Haltere", en: "Halteres" },
        desc: { id: "Modifikasi sayap belakang menjadi organ giroskop navigasi udara 3D.", en: "Hind wing modifications that act as 3D gyroscopes for aerial maneuvers." },
      },
      {
        part: { id: "Mata Labirin", en: "Compound Eyes" },
        desc: { id: "Mata besar dengan 4.000 lensa visual terpisah untuk melihat gerakan lambat.", en: "Huge compound eyes with 4,000 facets to detect movement in slow motion." },
      },
    ],
    wowFactor: {
      id: "Surah Al-Hajj:73 menyebutkan 'jika lalat merebut sesuatu dari mereka, mereka tidak dapat merebutnya kembali'. Mengapa tidak bisa? Sains membuktikan bahwa begitu lalat menyentuh makanan, ia langsung mengeluarkan enzim pelarut asam yang mengubah struktur kimia makanan padat menjadi cairan dalam milidetik. Makanan tersebut hancur secara kimiawi seketika, sehingga tidak mungkin direbut kembali ke kondisi semula.",
      en: "Surah Al-Hajj:73 states 'if the fly should steal from them a thing, they could not recover it'. Why? Science proves that when a fly lands, it immediately secretes enzymes that chemically dissolve and alter the food structure in milliseconds. The food is instantly digested externally, making it impossible to recover in its original state.",
    },
    quranVerse: {
      arabic: "وَإِنْ يَسْلُبْهُمُ الذُّبَابُ شَيْئًا لَا يَسْتَنْقِذُوهُ مِنْهُ ۚ ضَعُفَ الطَّالِبُ وَالْمَطْلُوبُ",
      transliteration: "Wa iny yaslubhumuz zubaabu shai'al laa yastanquzoohu minh; da'ufat taalibu wal matloob",
      translation: {
        id: "Dan jika lalat itu merebut sesuatu dari mereka, mereka tidak dapat merebutnya kembali dari lalat itu. Sama lemahnya yang menyembah dan yang disembah.",
        en: "And if the fly should steal from them a thing, they could not recover it from him. Weak are the pursuer and pursued.",
      },
      context: {
        id: "Perumpamaan ini meruntuhkan keangkuhan manusia. Patung-patung sesembahan tidak mampu berbuat apa-apa, bahkan menolak lalat kecil yang memakan kurban sesajian di atas kepala mereka pun tidak bisa.",
        en: "This metaphor humbles human arrogance. False gods cannot even defend their own sacrificial food offerings from a tiny fly.",
      },
    },
    quiz: {
      question: {
        id: "Mengapa secara ilmiah manusia tidak bisa mengambil kembali makanan yang direbut lalat?",
        en: "Why is it scientifically impossible to recover food stolen by a fly?",
      },
      options: [
        { text: { id: "Lalat terbang terlalu cepat", en: "Flies fly away too fast" } },
        { text: { id: "Makanan langsung dicairkan & strukturnya rusak secara kimiawi seketika", en: "Food is instantly liquefied and its chemical structure is permanently altered" } },
        { text: { id: "Lalat menelan makanan bulat-bulat", en: "Flies swallow food whole" } },
      ],
      answerIdx: 1,
    },
  },
};

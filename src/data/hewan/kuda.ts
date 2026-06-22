import { ObjectData } from "../objects";

export const kudaData: ObjectData = {
  slug: "kuda",
  name: { id: "Kuda", en: "Horse" },
  scientificName: "Equus caballus",
  surahName: "Al-Adiyat (1-2)",
  surahReference: "100:1-2",
  icon: "🐎",
  category: "Hewan Darat",
  type: "hewan",
  unlockedAtPoints: 450,
  kosakata: [
    {
      arab: "عَادِيَاتٌ",
      latin: "‘Aadiyaat",
      arti: "Kuda perang",
      artiEn: "Warhorses",
      contohAyat: "Al-Adiyat 100:1",
      icon: "🐎"
    },
    {
      arab: "ضَبْحٌ",
      latin: "Dhabh",
      arti: "Terengah-engah",
      artiEn: "Panting",
      contohAyat: "Al-Adiyat 100:1",
      icon: "💨"
    },
    {
      arab: "مُورِيَاتٌ",
      latin: "Muriyaat",
      arti: "Memercikkan api",
      artiEn: "Spark producers",
      contohAyat: "Al-Adiyat 100:2",
      icon: "🔥"
    },
    {
      arab: "قَدْحٌ",
      latin: "Qadh",
      arti: "Pukulan kuku kaki",
      artiEn: "Striking",
      contohAyat: "Al-Adiyat 100:2",
      icon: "⚡"
    }
  ],
  balita: {
    text: {
      id: "Ini kuda! Kuda berlari kencang sekali. Kuku kakinya berbunyi tak-tok-tak-tok saat berjalan. 🐎",
      en: "This is a horse! It runs very fast. Its hooves go clip-clop when it walks. 🐎",
    },
    audioTranscript: {
      id: "Ini kuda! Kuda berlari kencang sekali. Kuku kakinya berbunyi tak-tok-tak-tok saat berjalan.",
      en: "This is a horse! It runs very fast. Its hooves go clip-clop when it walks.",
    },
    quiz: {
      question: {
        id: "Suara langkah kaki kuda berbunyi seperti apa?",
        en: "What sound do horse hooves make?",
      },
      options: [
        { text: { id: "🎵 Tak-tok-tak-tok", en: "🎵 Clip-clop" }, isImage: true },
        { text: { id: "🎵 Krik-krik", en: "🎵 Chirp-chirp" }, isImage: true },
        { text: { id: "🎵 Byur-byur", en: "🎵 Splash-splash" }, isImage: true },
      ],
      answerIdx: 0,
    },
  },
  anak: {
    text: {
      id: "Kuda adalah hewan tangguh berkuku satu yang mendampingi perjuangan para kesatria.",
      en: "Horses are resilient single-hooved animals that have accompanied knights in histories.",
    },
    facts: [
      {
        id: "Kuda bisa tidur sambil berdiri karena memiliki sistem pengunci sendi kaki (stay apparatus).",
        en: "Horses can sleep standing up due to a unique joint-locking system (stay apparatus).",
      },
      {
        id: "Mata kuda berada di samping, memberikan sudut pandang hampir 360 derajat.",
        en: "A horse's eyes are located on the sides of its head, providing an almost 360-degree view.",
      },
      {
        id: "Kuku kuda terbuat dari keratin, bahan yang sama dengan kuku jari manusia.",
        en: "A horse's hoof is made of keratin, the same material as human fingernails.",
      },
    ],
    quranVerse: {
      arabic: "وَالْعَادِيَاتِ ضَبْحًا فَالْمُورِيَاتِ قَدْحًا",
      transliteration: "Wal-'aadiyaati dabhaa. Fal-mooriyaati qadhaa",
      translation: {
        id: "Demi kuda perang yang berlari kencang dengan terengah-engah, dan kuda yang mencetuskan api (dengan pukulan kuku kakinya).",
        en: "By the racing horses, panting, and the producers of sparks [when their hooves strike rocks].",
      },
    },
    quiz: {
      question: {
        id: "Mengapa kuda bisa tidur pulas sambil tetap berdiri kokoh?",
        en: "How can horses sleep soundly while standing up?",
      },
      options: [
        { text: { id: "Karena mereka takut ular", en: "Because they fear snakes" } },
        { text: { id: "Memiliki pengunci persendian kaki khusus (stay apparatus)", en: "They have a special leg-joint locking mechanism (stay apparatus)" } },
        { text: { id: "Kuda tidak pernah tidur", en: "Horses never sleep" } },
      ],
      answerIdx: 1,
    },
  },
  explorer: {
    text: {
      id: "Kuda perang adalah puncak adaptasi kardiovaskular mamalia untuk kecepatan tinggi.",
      en: "Warhorses represent the peak of mammalian cardiovascular adaptation for speed.",
    },
    anatomy: [
      {
        part: { id: "Stay Apparatus", en: "Stay Apparatus Joint" },
        desc: { id: "Mekanisme tendon kaki untuk menahan beban tubuh tanpa menggunakan otot aktif.", en: "Tendon mechanism that locks the limbs to hold weight without active muscle fatigue." },
      },
      {
        part: { id: "Kuku Keratin", en: "Keratin Hooves" },
        desc: { id: "Ujung kaki tebal penyerap getaran benturan ekstrem dari tanah berbatu.", en: "Shock-absorbing footpad casing designed to sustain high-speed impact on hard ground." },
      },
    ],
    wowFactor: {
      id: "Surah Al-Adiyat:1-2 melukiskan secara ilmiah fisika gesekan kuku kuda yang mencetuskan api ('fal-mooriyaati qadhaa') saat berderap di batu gurun. Tekanan kuku seberat 400kg pada kecepatan 60 km/jam melepaskan energi kinetik ekstrem yang memanaskan partikel silika batu, menciptakan percikan api riil.",
      en: "Surah Al-Adiyat:1-2 captures the friction physics of horse hooves sparking fire ('fal-mooriyaati qadhaa') on desert rocks. An impact pressure of 400kg at 60 km/h releases kinetic energy that heats silica particles, creating real sparks.",
    },
    quranVerse: {
      arabic: "وَالْعَادِيَاتِ ضَبْحًا فَالْمُورِيَاتِ قَدْحًا",
      transliteration: "Wal-'aadiyaati dabhaa. Fal-mooriyaati qadhaa",
      translation: {
        id: "Demi kuda perang yang berlari kencang dengan terengah-engah, dan kuda yang mencetuskan api (dengan pukulan kuku kakinya).",
        en: "By the racing horses, panting, and the producers of sparks [when their hooves strike rocks].",
      },
      context: {
        id: "Sumpah Allah atas kuda perang berlari kencang ini adalah metafora perjuangan yang tak kenal lelah demi menegakkan kalimat tauhid di muka bumi.",
        en: "God's oath by the charging warhorse is a metaphor for relentless struggle and energy spent in the cause of truth.",
      },
    },
    quiz: {
      question: {
        id: "Mengapa kuku kuda bisa mengeluarkan percikan api saat berlari di tanah berbatu?",
        en: "Why do horse hooves strike sparks of fire on rocky ground?",
      },
      options: [
        { text: { id: "Kuda memakai tapal besi mengandung bubuk mesiu", en: "Horses wear iron shoes mixed with gunpowder" } },
        { text: { id: "Energi kinetik benturan beban berat di kecepatan tinggi memanaskan silika batu", en: "Kinetic energy of heavy impacts at high speed heats up silica in rocks" } },
        { text: { id: "Karena tanah gurun memiliki minyak bumi di permukaan", en: "Because desert soils contain oil on the surface" } },
      ],
      answerIdx: 1,
    },
  },
};

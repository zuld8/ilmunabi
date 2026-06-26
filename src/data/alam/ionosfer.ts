import { ObjectData } from "../objects";

export const ionosferData: ObjectData = {
  slug: "ionosfer",
  name: { id: "Lapisan Ionosfer", en: "Ionosphere Layer" },
  icon: "⚡",
  category: "alam",
  type: "alam",
  scientificName: "Ionosphere",
  surahName: "At-Tariq",
  surahReference: "At-Tariq:11",
  unlockedAtPoints: 10,
  kosakata: [
    { arab: "رَجْعٌ", latin: "Raj'", arti: "Memantulkan", artiEn: "Returning/Reflecting" },
    { arab: "سَمَاءٌ", latin: "Samaa'", arti: "Langit", artiEn: "Sky" },
    { arab: "كَهْرَبَاءٌ", latin: "Kahrabaa'", arti: "Listrik", artiEn: "Electricity" },
    { arab: "إِشَارَةٌ", latin: "Ishaarah", arti: "Sinyal", artiEn: "Signal" }
  ],
  balita: {
    text: { id: "Tahukah kamu bagaimana kita bisa menonton TV dan mendengar radio? Karena ada langit ajaib bernama Ionosfer yang memantulkan sinyal ke bumi! Allah membuat langit bisa memantul seperti cermin.", en: "Do you know how we can watch TV and listen to the radio? Because there's a magic sky called the Ionosphere that bounces signals back to earth! Allah made the sky bounce like a mirror." },
    audioTranscript: { id: "Langit bisa memantulkan gelombang radio supaya kita bisa menonton TV.", en: "The sky can bounce radio waves so we can watch TV." },
    quiz: {
      question: { id: "Ionosfer membantu kita memantulkan apa?", en: "The Ionosphere helps us bounce what?" },
      options: [
        { text: { id: "Bola karet", en: "Rubber balls" } },
        { text: { id: "Sinyal TV dan Radio", en: "TV and Radio signals" } },
        { text: { id: "Air hujan", en: "Rainwater" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Ionosfer adalah lapisan udara tinggi yang penuh listrik kecil (ion). Lapisan ini seperti atap pemantul. Saat stasiun radio menembakkan sinyal ke atas, Ionosfer memantulkannya kembali ke tempat yang sangat jauh! Di Al-Qur'an Allah bersumpah demi langit yang memantulkan.", en: "The ionosphere is a high air layer full of tiny electricity (ions). This layer is like a bouncing roof. When a radio station shoots signals up, the Ionosphere bounces them back to faraway places! In the Quran, Allah swears by the sky that returns/reflects." },
    facts: [
      { id: "Ionosfer punya partikel listrik yang bernama 'Ion'.", en: "The Ionosphere has electrically charged particles called 'Ions'." },
      { id: "Sinyal radio dipantulkan dari sini agar sampai ke negara lain.", en: "Radio signals bounce from here to reach other countries." },
      { id: "Ionosfer bisa membesar dan mengecil saat terkena sinar matahari.", en: "The Ionosphere can grow and shrink when hit by sunlight." },
      { id: "Tanpa Ionosfer, sinyal radio akan hilang ke luar angkasa.", en: "Without the Ionosphere, radio signals would be lost to space." },
      { id: "Satelit terbang jauh di atas Ionosfer.", en: "Satellites fly high above the Ionosphere." }
    ],
    quranVerse: {
      arabic: "وَٱلسَّمَآءِ ذَاتِ ٱلرَّجْعِ",
      transliteration: "Was-samaaa'i thaatir-raj'",
      translation: { id: "Demi langit yang mengandung hujan (memantulkan gelombang).", en: "By the sky which returns (rain/waves)." }
    },
    quiz: {
      question: { id: "Bagaimana cara kerja Ionosfer pada sinyal radio?", en: "How does the Ionosphere work on radio signals?" },
      options: [
        { text: { id: "Menangkap sinyal", en: "Catches signals" } },
        { text: { id: "Memantulkan sinyal", en: "Bounces signals" } },
        { text: { id: "Menghancurkan sinyal", en: "Destroys signals" } }
      ],
      answerIdx: 1
    }
  },
  explorer: {
    text: { id: "Lapisan Ionosfer sangat kaya akan elektron bebas akibat radiasi sinar-X dan UV matahari. Sifatnya yang memantulkan gelombang elektromagnetik berfrekuensi tinggi memungkinkan komunikasi radio jarak jauh melengkung mengikuti bentuk bumi. Menakjubkannya, Surat At-Tariq menggunakan frasa 'Thaatir Raj' yang bermakna 'kemampuan mengembalikan/memantulkan'. Mukjizat sains dalam Al-Qur'an!", en: "The Ionosphere is rich in free electrons due to the sun's X-ray and UV radiation. Its property of reflecting high-frequency electromagnetic waves allows long-distance radio communication to curve following the earth's shape. Amazingly, Surah At-Tariq uses the phrase 'Thaatir Raj' which means 'the ability to return/reflect'. A scientific miracle in the Quran!" },
    anatomy: [
      { part: { id: "Partikel Ion", en: "Ion Particles" }, desc: { id: "Atom yang kehilangan atau mendapat elektron tambahan, menjadi bermuatan listrik.", en: "Atoms that lost or gained extra electrons, becoming electrically charged." } },
      { part: { id: "Gelombang Radio", en: "Radio Waves" }, desc: { id: "Sinyal tak kasat mata yang membawa informasi dan dipantulkan oleh ion.", en: "Invisible signals carrying information bounced off by ions." } }
    ],
    wowFactor: { id: "Hah?! Di malam hari, Ionosfer kehilangan sebagian lapisannya (Lapisan D menghilang), sehingga sinyal radio AM bisa dipantulkan jauuuuh lebih jauh dibandingkan siang hari!", en: "What?! At night, the Ionosphere loses part of its layer (D layer disappears), so AM radio signals can bounce waaaay farther than during the day!" },
    quranVerse: {
      arabic: "وَٱلسَّمَآءِ ذَاتِ ٱلرَّجْعِ ۝ وَٱلْأَرْضِ ذَاتِ ٱلصَّدْعِ",
      transliteration: "Was-samaaa'i thaatir-raj'. Wal-ardhi thaatis-sad'.",
      translation: { id: "Demi langit yang memantulkan, dan bumi yang membelah.", en: "By the sky which returns, and the earth which cracks open." }
    },
    quiz: [
      {
        question: { id: "Apa yang membuat partikel udara di Ionosfer berubah menjadi ion (bermuatan listrik)?", en: "What causes air particles in the Ionosphere to turn into ions (electrically charged)?" },
        options: [
          { text: { id: "Air hujan yang lebat", en: "Heavy rain" } },
          { text: { id: "Radiasi matahari (Sinar-X dan UV)", en: "Solar radiation (X-rays and UV)" } },
          { text: { id: "Angin topan", en: "Hurricanes" } }
        ],
        answerIdx: 1
      },
      {
        question: { id: "Kata 'Raj'' (رَجْعٌ) dalam surat At-Tariq secara bahasa berarti?", en: "The word 'Raj'' (رَجْعٌ) in Surah At-Tariq literally means?" },
        options: [
          { text: { id: "Membakar", en: "To burn" } },
          { text: { id: "Memantulkan / Mengembalikan", en: "To bounce / To return" } },
          { text: { id: "Meniup", en: "To blow" } }
        ],
        answerIdx: 1
      },
      {
        question: { id: "Kapan sinyal radio AM biasanya bisa memantul lebih jauh?", en: "When can AM radio signals usually bounce farther?" },
        options: [
          { text: { id: "Di malam hari", en: "At night" } },
          { text: { id: "Di siang hari bolong", en: "In broad daylight" } },
          { text: { id: "Saat hujan salju", en: "During a snowfall" } }
        ],
        answerIdx: 0
      }
    ]
  }
};

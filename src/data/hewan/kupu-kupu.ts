import { ObjectData } from "../objects";

export const kupuKupuData: ObjectData = {
  slug: "kupu-kupu",
  name: { id: "Kupu-Kupu", en: "Butterfly" },
  scientificName: "Rhopalocera",
  surahName: "Al-Qari'ah",
  surahReference: "101:4",
  icon: "🦋",
  category: "hewan",
  type: "hewan",
  unlockedAtPoints: 50,
  kosakata: [
    { arab: "فَرَاشَةٌ", latin: "Farasyatun", arti: "Kupu-kupu", artiEn: "Butterfly", contohAyat: "Al-Qari'ah 101:4" },
    { arab: "أَجْنِحَةٌ", latin: "Ajnihatun", arti: "Sayap-sayap", artiEn: "Wings", contohAyat: "Faathir 35:1" },
    { arab: "جَمَالٌ", latin: "Jamaalun", arti: "Keindahan", artiEn: "Beauty", contohAyat: "Al-A'raf 7:32" },
    { arab: "تَغْيِيرٌ", latin: "Taghyiirun", arti: "Perubahan", artiEn: "Change", contohAyat: "Ar-Ra'd 13:11" }
  ],
  balita: {
    text: {
      id: "Lihat kupu-kupu yang cantik ini! Sayapnya warna-warni ciptaan Allah. 🦋",
      en: "Look at this beautiful butterfly! Its colorful wings are Allah's creation. 🦋"
    },
    audioTranscript: {
      id: "Kupu-kupu terbang dengan sayapnya yang indah. Allah menciptakannya sangat cantik.",
      en: "The butterfly flies with its beautiful wings. Allah created it very beautifully."
    },
    quiz: {
      question: { id: "Mana hewan kupu-kupu?", en: "Which one is the butterfly?" },
      options: [
        { text: { id: "🦋 Kupu-kupu", en: "🦋 Butterfly" } },
        { text: { id: "🐈 Kucing", en: "🐈 Cat" } },
        { text: { id: "🐘 Gajah", en: "🐘 Elephant" } }
      ],
      answerIdx: 0
    }
  },
  anak: {
    text: {
      id: "Kupu-kupu mengalami metamorfosis yang ajaib! Dari ulat berubah jadi kupu-kupu cantik. Ini bukti kuasa Allah yang Maha Pencipta.",
      en: "Butterflies undergo a magical metamorphosis! From a caterpillar to a beautiful butterfly. This is proof of Allah's power as the Creator."
    },
    facts: [
      { id: "Kupu-kupu merasakan makanannya menggunakan kaki mereka!", en: "Butterflies taste food using their feet!" },
      { id: "Mereka hanya bisa terbang jika suhu tubuhnya hangat.", en: "They can only fly if their body temperature is warm." },
      { id: "Kupu-kupu menghisap nektar bunga pakai probosis.", en: "Butterflies drink flower nectar using a proboscis." },
      { id: "Sayap kupu-kupu transparan, warnanya dari sisik kecil.", en: "Butterfly wings are transparent, colored by tiny scales." },
      { id: "Banyak kupu-kupu yang sangat menyukai sinar matahari.", en: "Many butterflies really love the sunlight." }
    ],
    quranVerse: {
      arabic: "يَوْمَ يَكُونُ النَّاسُ كَالْفَرَاشِ الْمَبْثُوثِ",
      transliteration: "Yauma yakūnun-nāsu kal-farāsyil-mabsūs",
      translation: {
        id: "Pada hari itu manusia adalah seperti kupu-kupu yang bertebaran,",
        en: "It is the Day when people will be like moths, dispersed,"
      }
    },
    quiz: {
      question: { id: "Kupu-kupu mencicipi makanannya dengan bagian tubuh mana?", en: "Which body part does a butterfly use to taste food?" },
      options: [
        { text: { id: "Kakinya", en: "Its feet" } },
        { text: { id: "Antenanya", en: "Its antennae" } },
        { text: { id: "Sayapnya", en: "Its wings" } }
      ],
      answerIdx: 0
    }
  },
  explorer: {
    text: {
      id: "Sayap kupu-kupu memiliki struktur nano yang memantulkan cahaya. Allah Al-Mushawwir telah merancang sayap ini sangat aerodinamis!",
      en: "Butterfly wings have nanostructures that reflect light. Allah Al-Mushawwir designed these wings to be highly aerodynamic!"
    },
    anatomy: [
      { part: { id: "Probosis", en: "Proboscis" }, desc: { id: "Mulut berbentuk tabung panjang.", en: "A long tube-like mouth." } },
      { part: { id: "Sisik Sayap", en: "Wing Scales" }, desc: { id: "Sisik yang memantulkan cahaya.", en: "Scales that reflect light." } }
    ],
    wowFactor: {
      id: "Metamorfosis kupu-kupu adalah mukjizat biologis! Sel-sel ulat hancur total dan membentuk sel baru menjadi sayap di dalam kepompong.",
      en: "Butterfly metamorphosis is a biological miracle! Caterpillar cells completely break down and form new cells inside the chrysalis."
    },
    quranVerse: {
      arabic: "صُنْعَ اللَّهِ الَّذِي أَتْقَنَ كُلَّ شَيْءٍ",
      transliteration: "Sun'allāhil-lazī atqana kulla syai'",
      translation: { id: "(Itulah) ciptaan Allah yang mencipta dengan sempurna segala sesuatu.", en: "(It is) the work of Allah, who perfected all things." },
      context: { id: "Metamorfosis adalah bukti ciptaan yang sempurna.", en: "Metamorphosis is proof of perfect creation." }
    },
    quiz: [
      {
        question: { id: "Proses perubahan dari ulat menjadi kupu-kupu disebut?", en: "The process of change from a caterpillar to a butterfly is called?" },
        options: [
          { text: { id: "Metamorfosis", en: "Metamorphosis" } },
          { text: { id: "Fotosintesis", en: "Photosynthesis" } },
          { text: { id: "Ekskresi", en: "Excretion" } }
        ],
        answerIdx: 0
      },
      {
        question: { id: "Dari mana warna sayap kupu-kupu berasal?", en: "Where does the color of butterfly wings come from?" },
        options: [
          { text: { id: "Darahnya", en: "Its blood" } },
          { text: { id: "Tinta", en: "Ink" } },
          { text: { id: "Pantulan cahaya", en: "Light reflection" } }
        ],
        answerIdx: 2
      },
      {
        question: { id: "Apa arti Al-Mushawwir?", en: "What does Al-Mushawwir mean?" },
        options: [
          { text: { id: "Maha Memberi Rezeki", en: "The Provider" } },
          { text: { id: "Maha Membentuk Rupa", en: "The Flawless Shaper" } },
          { text: { id: "Maha Mengetahui", en: "The All-Knowing" } }
        ],
        answerIdx: 1
      }
    ]
  }
};

import { ObjectData } from "../objects";

export const pisangData: ObjectData = {
  slug: "pisang",
  name: { id: "Pisang", en: "Banana" },
  icon: "🍌",
  category: "tumbuhan",
  type: "tumbuhan",
  scientificName: "Musa",
  surahName: "Al-Waqi'ah",
  surahReference: "56:29",
  unlockedAtPoints: 10,
  kosakata: [
    { arab: "مَوْز", latin: "Mawz", arti: "Pisang", artiEn: "Banana", contohAyat: "Pohon pisang yang bersusun-susun buahnya." }
  ],
  balita: {
    text: { id: "Buah ini warnanya kuning dan bentuknya panjang melengkung seperti bulan sabit! 🍌 Kalau mau makan, kita harus buka kulitnya dulu seperti membuka baju.", en: "This fruit is yellow and shaped long and curved like a crescent moon! 🍌 If we want to eat it, we have to peel the skin first like taking off a shirt." },
    audioTranscript: { id: "Pisang rasanya manis dan lembut, monyet juga sangat suka pisang.", en: "Bananas taste sweet and soft, monkeys also really love bananas." },
    quiz: {
      question: { id: "Bagaimana cara memakan buah pisang?", en: "How do we eat a banana?" },
      options: [
        { text: { id: "Dipotong dengan gergaji", en: "Cut it with a saw" } },
        { text: { id: "Dimakan bersama kulitnya", en: "Eaten with its skin" } },
        { text: { id: "Dikupas dulu kulit luarnya", en: "Peel the outer skin first" } }
      ],
      answerIdx: 2
    }
  },
  anak: {
    text: { id: "Pohon pisang itu unik, batangnya besar tapi sebenarnya tidak terbuat dari kayu yang keras lho! Pisang sangat sehat karena mengandung kalium yang memberi kita energi. Allah menyebutkan pohon pisang (atau pohon yang berbuah bersusun-susun) sebagai salah satu kenikmatan bagi penduduk surga.", en: "The banana plant is unique, its stem is big but actually not made of hard wood! Bananas are very healthy because they contain potassium which gives us energy. Allah mentions the banana tree (or trees with fruits layered one above another) as one of the blessings for the people of heaven." },
    facts: [
      { id: "Pohon pisang sebenarnya adalah tanaman herba (sejenis rumput raksasa), bukan pohon berkayu.", en: "The banana tree is actually an herbaceous plant (a giant grass), not a woody tree." },
      { id: "Setelah berbuah satu kali, pohon pisang akan mati dan digantikan oleh tunas anakannya.", en: "After bearing fruit once, the banana plant will die and be replaced by its shoots." },
      { id: "Pisang bisa mengapung di atas air karena mengandung banyak udara di dalam kulitnya.", en: "Bananas can float on water because they contain a lot of air inside their peel." }
    ],
    quranVerse: {
      arabic: "وَطَلْحٍ مَنْضُودٍ",
      transliteration: "Wa ṭalḥin manḍūd",
      translation: { id: "Dan pohon pisang yang bersusun-susun (buahnya).", en: "And [banana] trees layered [with fruit]." },
      context: { id: "Allah menjanjikan buah pisang yang melimpah dan tertata rapi di surga.", en: "Allah promises abundant and neatly layered bananas in heaven." }
    },
    quiz: {
      question: { id: "Pohon pisang sebenarnya termasuk jenis tanaman apa?", en: "What type of plant does the banana tree actually belong to?" },
      options: [
        { text: { id: "Tanaman herba (rumput raksasa) tanpa kayu", en: "Herbaceous plant (giant grass) without wood" } },
        { text: { id: "Tanaman merambat seperti anggur", en: "Climbing plant like grapes" } },
        { text: { id: "Pohon berkayu keras seperti jati", en: "Hardwood tree like teak" } }
      ],
      answerIdx: 0
    }
  },
  explorer: {
    text: { id: "Batang pisang sebenarnya disebut 'pseudostem' (batang palsu). Ini bukanlah kayu sungguhan, melainkan kumpulan pelepah daun raksasa yang saling menggulung sangat erat! Air mengisi hampir 90% dari batang ini, membuatnya lentur tapi cukup kuat menopang tandan pisang seberat 50 kilogram. Ini adalah sistem hidrolik alami yang diciptakan Allah Al-Qawiy (Maha Kuat).", en: "The banana stem is actually called a 'pseudostem' (false stem). It is not real wood, but a collection of giant leaf stalks tightly rolled together! Water fills almost 90% of this stem, making it flexible but strong enough to support a banana bunch weighing 50 kilograms. This is a natural hydraulic system created by Allah Al-Qawiy (The Most Strong)." },
    anatomy: [
      { part: { id: "Pseudostem", en: "Pseudostem" }, desc: { id: "Batang semu yang terbuat dari gulungan pelepah daun, bukan kayu.", en: "A false stem made of rolled leaf stalks, not wood." } },
      { part: { id: "Jantung Pisang", en: "Banana Heart (Blossom)" }, desc: { id: "Bunga raksasa berwarna merah marun di ujung tandan yang akan menjadi buah.", en: "The giant maroon flower at the end of the bunch that becomes the fruit." } }
    ],
    wowFactor: { id: "Pisang sedikit memancarkan radiasi alami dari isotop kalium-40 yang menyehatkan jantung kita, tapi tenang saja, ini sangat aman!", en: "Bananas emit a tiny bit of natural radiation from the potassium-40 isotope which is healthy for our heart, but don't worry, it's totally safe!" },
    quranVerse: {
      arabic: "وَفَاكِهَةٍ كَثِيرَةٍ ، لَا مَقْطُوعَةٍ وَلَا مَمْنُوعَةٍ",
      transliteration: "Wa fākihatin kathīrah, lā maqṭū‘atin wa lā mamnū‘ah",
      translation: { id: "Dan buah-buahan yang banyak, yang tidak berhenti (berbuah) dan tidak terlarang mengambilnya.", en: "And fruit, abundant [and varied], neither limited [to season] nor forbidden." }
    },
    quiz: [
      {
        question: { id: "Terbuat dari apakah batang pohon pisang yang sebenarnya?", en: "What is the stem of a banana tree actually made of?" },
        options: [
          { text: { id: "Kayu keras yang padat", en: "Solid hard wood" } },
          { text: { id: "Gulungan pelepah daun yang sangat erat", en: "Very tight rolls of leaf stalks" } },
          { text: { id: "Karet alami", en: "Natural rubber" } }
        ],
        answerIdx: 1
      }
    ]
  }
};

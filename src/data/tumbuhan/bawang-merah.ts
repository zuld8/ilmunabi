import { ObjectData } from "../objects";

export const bawangMerahData: ObjectData = {
  slug: "bawang-merah",
  name: { id: "Bawang Merah", en: "Red Onion" },
  icon: "🧅",
  category: "tumbuhan",
  type: "tumbuhan",
  scientificName: "Allium cepa",
  surahName: "Al-Baqarah",
  surahReference: "2:61",
  unlockedAtPoints: 40,
  kosakata: [
    { arab: "بَصَلٌ", latin: "baṣalun", arti: "Bawang", artiEn: "Onion", contohAyat: "Bawang di dapur." }
  ],
  balita: {
    text: { id: "Bentuknya bulat berlapis-lapis dan warnanya ungu kemerahan! 🧅", en: "It is round, has many layers, and is reddish-purple! 🧅" },
    audioTranscript: { id: "Hatchim! Kalau Bunda sedang mengiris bawang merah, kadang mata kita bisa keluar air mata. Bawang bikin masakan jadi sedaaap!", en: "Achoo! When Mom is slicing red onions, sometimes our eyes can tear up. Onions make cooking super delicious!" },
    quiz: {
      question: { id: "Bawang merah sering dipakai untuk apa di dapur?", en: "What are red onions often used for in the kitchen?" },
      options: [
        { text: { id: "Untuk diminum", en: "For drinking" } },
        { text: { id: "Bumbu memasak", en: "Cooking spice" } },
        { text: { id: "Pewarna rambut", en: "Hair dye" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Tahukah kamu kenapa bawang bikin kita menangis? Saat dipotong, bawang merah melepaskan gas khusus yang membuat mata kita sedikit perih. Itu senjata rahasia bawang agar tidak dimakan serangga!", en: "Do you know why onions make us cry? When cut, red onions release a special gas that makes our eyes sting a bit. That's the onion's secret weapon so insects don't eat it!" },
    facts: [
      { id: "Bawang merah sudah ditanam manusia sejak lebih dari 5.000 tahun yang lalu.", en: "Red onions have been cultivated by humans for over 5,000 years." },
      { id: "Bawang tidak punya biji di dalam umbinya, bawang berkembang biak membelah diri.", en: "Onions don't have seeds inside their bulbs, they multiply by dividing." },
      { id: "Mengunyah permen karet bisa mencegah mata pedih saat memotong bawang!", en: "Chewing gum can prevent stinging eyes when cutting onions!" }
    ],
    quranVerse: { arabic: "...", transliteration: "...", translation: { id: "...", en: "..." } },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  },
  explorer: {
    text: { id: "Dalam sejarah, Bani Israil pernah meminta Nabi Musa agar berdoa kepada Allah untuk menumbuhkan bawang karena mereka bosan dengan makanan dari surga (Manna dan Salwa). Allah mengingatkan bahwa makanan karunia-Nya jauh lebih baik. Ini pelajaran agar kita selalu bersyukur atas rezeki Allah sekecil apa pun!", en: "In history, the Children of Israel once asked Prophet Musa to pray to Allah to grow onions because they were bored with food from heaven (Manna and Salwa). Allah reminded them that His given food was far better. This is a lesson for us to always be grateful for Allah's provision, no matter how small!" },
    quranVerse: {
      arabic: "فَادْعُ لَنَا رَبَّكَ يُخْرِجْ لَنَا مِمَّا تُنْبِتُ الْأَرْضُ مِنْ بَقْلِهَا وَقِثَّائِهَا وَفُومِهَا وَعَدَسِهَا وَبَصَلِهَا",
      transliteration: "Fad'u lanā rabbaka yukhrij lanā mimmā tunbitul-arḍu min baqlihā wa qiththā'ihā wa fūmihā wa 'adasihā wa baṣalihā",
      translation: { id: "Maka mohonkanlah untuk kami kepada Tuhanmu, agar Dia mengeluarkan bagi kami dari apa yang ditumbuhkan bumi, yaitu sayur-mayurnya, ketimunnya, bawang putihnya, kacang adasnya, dan bawang merahnya.", en: "So call upon your Lord to bring forth for us from the earth its green herbs and its cucumbers and its garlic and its lentils and its onions." }
    },
    anatomy: [{ part: { id: "Bagian", en: "Part" }, desc: { id: "Penjelasan", en: "Explanation" } }],
    wowFactor: { id: "Fakta menakjubkan!", en: "Amazing fact!" },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  }
};

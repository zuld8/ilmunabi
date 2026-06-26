import { ObjectData } from "../objects";

export const lalatData: ObjectData = {
  slug: "lalat",
  name: { id: "Lalat", en: "Fly" },
  icon: "🪰",
  category: "hewan",
  type: "hewan",
  scientificName: "Musca domestica",
  surahName: "Al-Hajj",
  surahReference: "22:73",
  unlockedAtPoints: 30,
  kosakata: [
    { arab: "ذُبَابٌ", latin: "dhubaabun", arti: "Lalat", artiEn: "Fly", contohAyat: "لَنْ يَخْلُقُوا ذُبَابًا (mereka tidak akan mampu menciptakan seekor lalat pun)" }
  ],
  balita: {
    text: { id: "Ngiiing! 🪰 Lalat suka terbang berputar-putar. Kalau makananmu dihinggapi lalat, jangan dimakan ya!", en: "Bzzzz! 🪰 Flies love flying around in circles. If a fly lands on your food, don't eat it!" },
    audioTranscript: { id: "Wussh! Aku lalat. Aku bisa terbang sangat cepat dan menempel di langit-langit tanpa jatuh. Hebat kan!", en: "Whoosh! I am a fly. I can fly very fast and stick to the ceiling without falling. Great, isn't it!" },
    quiz: {
      question: { id: "Apa yang harus kita lakukan kalau ada lalat di atas makanan kita?", en: "What should we do if there is a fly on our food?" },
      options: [
        { text: { id: "Mengajaknya main", en: "Play with it" } },
        { text: { id: "Langsung dimakan", en: "Eat the food immediately" } },
        { text: { id: "Membuang bagian yang dihinggapinya", en: "Throw away the part it landed on" } }
      ],
      answerIdx: 2
    }
  },
  anak: {
    text: { id: "Tahukah kamu? Lalat tidak punya gigi! Mereka mengeluarkan cairan ke makanannya lalu menyedotnya seperti pakai sedotan. Mata lalat juga ada ribuan lho, jadi mereka susah sekali ditangkap!", en: "Did you know? Flies don't have teeth! They spit liquid onto their food and suck it up like using a straw. Flies also have thousands of lenses in their eyes, so they are very hard to catch!" },
    facts: [
      { id: "Lalat mengepakkan sayapnya 200 kali per detik! ⏱️", en: "Flies flap their wings 200 times per second! ⏱️" },
      { id: "Lalat mencicipi makanan menggunakan kaki mereka! 👣", en: "Flies taste their food using their feet! 👣" },
      { id: "Umur lalat rumah rata-rata hanya sekitar 15 sampai 25 hari saja. 🗓️", en: "The average lifespan of a house fly is only about 15 to 25 days. 🗓️" }
    ],
    quranVerse: { arabic: "...", transliteration: "...", translation: { id: "...", en: "..." } },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  },
  explorer: {
    text: { id: "Meskipun kecil dan sering dianggap mengganggu, lalat punya sistem tubuh yang sangat rumit! Allah menantang semua patung dan berhala untuk menciptakan seekor lalat saja, dan mereka pasti tidak bisa! Bahkan jika lalat merampas sesuatu dari mereka, mereka tak bisa merebutnya kembali. Ini bukti betapa maha kuasanya penciptaan Allah.", en: "Even though they are small and often considered annoying, flies have a very complex body system! Allah challenges all idols to create a single fly, and they certainly cannot! Even if a fly snatched something away from them, they couldn't take it back. This is proof of the Almighty power of Allah's creation." },
    quranVerse: {
      arabic: "إِنَّ الَّذِينَ تَدْعُونَ مِنْ دُونِ اللَّهِ لَنْ يَخْلُقُوا ذُبَابًا وَلَوِ اجْتَمَعُوا لَهُ",
      transliteration: "Innal ladhiina tad'uuna min duunillaahi lan yakhluquu dhubaaban walaw-ijtama'uu lah",
      translation: { id: "Sesungguhnya segala yang kamu seru selain Allah tidak akan dapat menciptakan seekor lalat pun, walaupun mereka bersatu untuk menciptakannya.", en: "Indeed, those you invoke besides Allah will never create a fly, even if they gathered together for that purpose." }
    },
    anatomy: [{ part: { id: "Bagian", en: "Part" }, desc: { id: "Penjelasan", en: "Explanation" } }],
    wowFactor: { id: "Fakta menakjubkan!", en: "Amazing fact!" },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  }
};

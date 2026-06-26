import { ObjectData } from "../objects";

export const ototData: ObjectData = {
  slug: "otot",
  name: { id: "Otot", en: "Muscles" },
  icon: "💪",
  category: "tubuh",
  type: "tubuh",
  scientificName: "Musculus",
  surahName: "Al-Mu'minun",
  surahReference: "23:14",
  unlockedAtPoints: 20,
  kosakata: [
    { arab: "لَحْمٌ", latin: "lahmun", arti: "Daging (Otot)", artiEn: "Flesh (Muscle)", contohAyat: "فَكَسَوْنَا الْعِظَامَ لَحْمًا" }
  ],
  balita: {
    text: { id: "Wah, aku kuat bisa angkat mainan! 💪", en: "Wow, I am strong, I can lift toys! 💪" },
    audioTranscript: { id: "Otot itu daging yang bikin kita bisa gerak. Bisa lompat, lari, dan senyum! Kalau kita makan sayur, otot jadi makin kuat!", en: "Muscles are flesh that lets us move. We can jump, run, and smile! If we eat vegetables, muscles get stronger!" },
    quiz: {
      question: { id: "Apa yang membuat kita bisa bergerak dan berlari?", en: "What makes us able to move and run?" },
      options: [
        { text: { id: "Rambut", en: "Hair" } },
        { text: { id: "Kuku", en: "Nails" } },
        { text: { id: "Otot", en: "Muscles" } }
      ],
      answerIdx: 2
    }
  },
  anak: {
    text: { id: "Di seluruh tubuh kita ada lebih dari 600 otot! Otot bekerja seperti karet gelang yang bisa memanjang dan memendek. Otot yang menarik tulang kita, makanya kita bisa bergerak. Jantung kita juga itu otot super yang memompa darah terus-menerus!", en: "All over our body there are more than 600 muscles! Muscles work like rubber bands that can stretch and contract. Muscles pull our bones, that's why we can move. Our heart is also a super muscle that pumps blood constantly!" },
    facts: [
      { id: "Otot terkuat ada di rahang (mulut) untuk mengunyah makanan keras.", en: "The strongest muscle is in the jaw (mouth) to chew hard food." },
      { id: "Untuk melangkah satu kali, kita memakai sekitar 200 otot!", en: "To take a single step, we use about 200 muscles!" },
      { id: "Otot tercepat ada di mata yang bikin kita bisa berkedip cepat.", en: "The fastest muscle is in the eye which lets us blink fast." }
    ],
    quranVerse: { arabic: "...", transliteration: "...", translation: { id: "...", en: "..." } },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  },
  explorer: {
    text: { id: "Otot (muskuloskeletal) mengubah energi kimia dari makanan (ATP) menjadi gerakan mekanis. Fakta embriologi menyebutkan pembentukan tulang terjadi lebih dulu, lalu dibalut oleh otot/daging. Sungguh menakjubkan, fakta ini sudah diterangkan Al-Qur'an dengan tepat ratusan tahun sebelum ditemukannya mikroskop!", en: "Muscles (musculoskeletal) convert chemical energy from food (ATP) into mechanical movement. Embryological facts state that bone formation occurs first, then it is wrapped in muscle/flesh. It is truly amazing that this fact was accurately explained by the Quran centuries before the microscope was invented!" },
    quranVerse: {
      arabic: "فَخَلَقْنَا الْمُضْغَةَ عِظَامًا فَكَسَوْنَا الْعِظَامَ لَحْمًا",
      transliteration: "Fakhalaqnal mudhghata 'izhaaman fakasawnal 'izhaama lahmaa",
      translation: { id: "Lalu segumpal daging itu Kami jadikan tulang belulang, lalu tulang belulang itu Kami bungkus dengan daging.", en: "And We made [from] the lump, bones, and We covered the bones with flesh." }
    },
    anatomy: [{ part: { id: "Bagian", en: "Part" }, desc: { id: "Penjelasan", en: "Explanation" } }],
    wowFactor: { id: "Fakta menakjubkan!", en: "Amazing fact!" },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  }
};
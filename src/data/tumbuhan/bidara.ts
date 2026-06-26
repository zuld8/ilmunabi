import { ObjectData } from "../objects";

export const bidaraData: ObjectData = {
  slug: "bidara",
  name: { id: "Bidara", en: "Lote Tree" },
  icon: "🌿",
  category: "tumbuhan",
  type: "tumbuhan",
  scientificName: "Ziziphus mauritiana",
  surahName: "Al-Waqi'ah",
  surahReference: "56:28",
  unlockedAtPoints: 50,
  kosakata: [
    { arab: "سِدْرٌ", latin: "sidrun", arti: "Bidara", artiEn: "Lote tree", contohAyat: "Pohon bidara tak berduri." }
  ],
  balita: {
    text: { id: "Daunnya kecil dan bundar, namanya pohon Bidara! 🌿", en: "Its leaves are small and round, it is the Lote tree! 🌿" },
    audioTranscript: { id: "Pohon bidara punya daun yang hijau. Zaman dahulu, daunnya dipakai seperti sabun untuk mandi, lho! Segar sekali!", en: "The Lote tree has green leaves. In ancient times, its leaves were used like soap for bathing! So refreshing!" },
    quiz: {
      question: { id: "Daun bidara zaman dahulu dipakai untuk apa?", en: "What were Lote leaves used for in ancient times?" },
      options: [
        { text: { id: "Sabun mandi", en: "Bath soap" } },
        { text: { id: "Membungkus makanan", en: "Wrapping food" } },
        { text: { id: "Dijadikan payung", en: "Made into an umbrella" } }
      ],
      answerIdx: 0
    }
  },
  anak: {
    text: { id: "Bidara adalah pohon yang sangat kuat! Dia bisa bertahan hidup meski sangat panas dan jarang turun hujan. Hebat ya, tumbuhan punya cara sendiri untuk bertahan hidup yang diberikan Allah.", en: "The Lote tree is a very strong tree! It can survive even if it's very hot and rarely rains. Great, right? Plants have their own way to survive given by Allah." },
    facts: [
      { id: "Di dunia nyata, pohon bidara penuh duri yang tajam.", en: "In the real world, the Lote tree is full of sharp thorns." },
      { id: "Daun bidara sering dipakai untuk mengobati luka ringan.", en: "Lote leaves are often used to treat minor wounds." },
      { id: "Buah bidara manis dan kaya akan vitamin C.", en: "Lote fruit is sweet and rich in vitamin C." }
    ],
    quranVerse: { arabic: "...", transliteration: "...", translation: { id: "...", en: "..." } },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  },
  explorer: {
    text: { id: "Tahukah kamu? Allah menyebutkan 'pohon bidara yang tidak berduri' sebagai salah satu pohon indah di Surga bagi orang-orang yang beriman. Di dunia pohon ini berduri agar terlindung dari hewan, namun di surga Allah hilangkan durinya agar sempurna! Masya Allah, semoga kita bisa melihatnya di surga kelak.", en: "Did you know? Allah mentions the 'thornless Lote tree' as one of the beautiful trees in Paradise for the believers. In this world, this tree has thorns to protect it from animals, but in paradise Allah removes the thorns to make it perfect! Masya Allah, may we be able to see it in paradise later." },
    quranVerse: {
      arabic: "فِي سِدْرٍ مَخْضُودٍ",
      transliteration: "Fī sidrin makhḍūd",
      translation: { id: "Mereka berada di antara pohon bidara yang tidak berduri,", en: "They will be among lote trees with thorns removed," }
    },
    anatomy: [{ part: { id: "Bagian", en: "Part" }, desc: { id: "Penjelasan", en: "Explanation" } }],
    wowFactor: { id: "Fakta menakjubkan!", en: "Amazing fact!" },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  }
};

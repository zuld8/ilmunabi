import { ObjectData } from "../objects";

export const tulangRusukData: ObjectData = {
  slug: "tulang-rusuk",
  name: { id: "Tulang Rusuk", en: "Rib Cage" },
  icon: "🦴",
  category: "tubuh",
  type: "tubuh",
  scientificName: "Costae",
  surahName: "At-Tariq",
  surahReference: "86:7",
  unlockedAtPoints: 15,
  kosakata: [
    { arab: "تَرَائِب", latin: "taraa'ib", arti: "Tulang dada/rusuk", artiEn: "Ribs/Chest bone", contohAyat: "يَخْرُجُ مِن بَيْنِ الصُّلْبِ وَالتَّرَائِبِ" }
  ],
  balita: {
    text: { id: "Coba pegang dadamu, ada tulang keras! 🦴", en: "Try touching your chest, there are hard bones! 🦴" },
    audioTranscript: { id: "Tulang rusuk seperti kandang besi di dalam dada kita. Tugasnya menjaga hati dan paru-paru kita biar aman kalau kita jatuh!", en: "Rib bones are like an iron cage inside our chest. Their job is to keep our heart and lungs safe if we fall!" },
    quiz: {
      question: { id: "Apa bentuk tulang rusuk di dada kita?", en: "What shape do the rib bones in our chest form?" },
      options: [
        { text: { id: "Seperti kandang", en: "Like a cage" } },
        { text: { id: "Seperti bola", en: "Like a ball" } },
        { text: { id: "Seperti bintang", en: "Like a star" } }
      ],
      answerIdx: 0
    }
  },
  anak: {
    text: { id: "Manusia punya 12 pasang tulang rusuk, mirip keranjang yang melindungi jantung dan paru-paru! Walau kuat seperti tameng, tulang rusuk bisa mengembang saat kita mengambil napas panjang. Wah, Allah ciptakan tulang yang bisa lentur!", en: "Humans have 12 pairs of ribs, like a basket protecting the heart and lungs! Even though they are strong as a shield, rib bones can expand when we take a deep breath. Wow, Allah created bones that can be flexible!" },
    facts: [
      { id: "Satu dari setiap 500 orang lahir dengan ekstra 1 tulang rusuk lho!", en: "One out of every 500 people is born with 1 extra rib!" },
      { id: "Tulang rusuk terhubung ke tulang belakang di punggung kita.", en: "Ribs are connected to the spine in our back." },
      { id: "Tulang rusuk bawah kita mengambang, tidak menempel ke depan.", en: "Our bottom ribs are floating, not attached to the front." }
    ],
    quranVerse: { arabic: "...", transliteration: "...", translation: { id: "...", en: "..." } },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  },
  explorer: {
    text: { id: "Tulang rusuk (costae) membentuk rongga toraks yang krusial. Selain untuk perlindungan, otot interkostal di sela tulang rusuk memungkinkan proses respirasi mengembang-kempiskan paru-paru. Al-Qur'an menyebutkan 'Tara'ib' (tulang dada/rusuk) dalam konteks penciptaan manusia, menyoroti pentingnya anatomi ini dalam reproduksi dan penciptaan embrio!", en: "The ribs (costae) form the crucial thoracic cavity. Besides protection, intercostal muscles between ribs allow respiration by expanding and contracting the lungs. The Quran mentions 'Tara'ib' (chest/rib bones) in the context of human creation, highlighting the importance of this anatomy in reproduction and embryo creation!" },
    quranVerse: {
      arabic: "يَخْرُجُ مِن بَيْنِ الصُّلْبِ وَالتَّرَائِبِ",
      transliteration: "Yakhruju mim bainish-shulbi wat-taraa'ib",
      translation: { id: "Yang keluar dari antara tulang sulbi (punggung) dan tulang dada (rusuk).", en: "Emerging from between the backbone and the ribs." }
    },
    anatomy: [{ part: { id: "Bagian", en: "Part" }, desc: { id: "Penjelasan", en: "Explanation" } }],
    wowFactor: { id: "Fakta menakjubkan!", en: "Amazing fact!" },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  }
};

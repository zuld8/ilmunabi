import { ObjectData } from "../objects";

export const jaheData: ObjectData = {
  slug: "jahe",
  name: { id: "Jahe", en: "Ginger" },
  icon: "🫚",
  category: "tumbuhan",
  type: "tumbuhan",
  scientificName: "Zingiber officinale",
  surahName: "Al-Insan",
  surahReference: "76:17",
  unlockedAtPoints: 90,
  kosakata: [
    { arab: "زَنْجَبِيلٌ", latin: "zanjabiilun", arti: "Jahe", artiEn: "Ginger", contohAyat: "Jahe menghangatkan tubuh." }
  ],
  balita: {
    text: { id: "Bentuknya lucu dan banyak jarinya, namanya Jahe! 🫚", en: "Its shape is funny and has many fingers, its name is Ginger! 🫚" },
    audioTranscript: { id: "Jahe baunya wangiii! Kalau dibikin minuman hangat oleh Ibu, rasanya pedas-pedas manis dan membuat perut kita jadi nyaman.", en: "Ginger smells so fragrant! When made into a warm drink by Mom, it tastes spicy-sweet and makes our tummy feel comfortable." },
    quiz: {
      question: { id: "Bagaimana rasa air rebusan jahe di tubuh kita?", en: "How does boiled ginger water feel in our body?" },
      options: [
        { text: { id: "Dingin beku", en: "Freezing cold" } },
        { text: { id: "Hangat dan nyaman", en: "Warm and cozy" } },
        { text: { id: "Sangat pahit dan kaku", en: "Very bitter and stiff" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Jahe itu umbi yang tumbuh di dalam tanah! Dia mengandung zat super yang bernama gingerol, zat pahlawan yang bisa menyembuhkan sakit tenggorokan dan perut mual, lho!", en: "Ginger is a tuber that grows underground! It contains a super substance called gingerol, a hero substance that can heal a sore throat and nausea, you know!" },
    facts: [
      { id: "Manusia sudah memakai jahe sebagai obat alami selama lebih dari 4.000 tahun.", en: "Humans have been using ginger as a natural medicine for over 4,000 years." },
      { id: "Jahe sekeluarga dengan kunyit dan lengkuas.", en: "Ginger is in the same family as turmeric and galangal." },
      { id: "Menghirup aroma jahe bisa menghilangkan rasa pusing.", en: "Inhaling the scent of ginger can relieve dizziness." }
    ],
    quranVerse: { arabic: "...", transliteration: "...", translation: { id: "...", en: "..." } },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  },
  explorer: {
    text: { id: "Tahu tidak? Jahe (Zanjabil) disebutkan di dalam Al-Qur'an sebagai campuran minuman khusus penghuni surga kelak. Di dunia saja, jahe sangat bermanfaat bagi tubuh dan membuat hangat, bayangkan selezat dan sehebat apa minuman jahe di surga buatan Allah!", en: "Did you know? Ginger (Zanjabil) is mentioned in the Quran as a special drink mixture for the dwellers of paradise. Even in this world, ginger is very beneficial for the body and keeps it warm, imagine how delicious and amazing the ginger drink in paradise made by Allah!" },
    quranVerse: {
      arabic: "وَيُسْقَوْنَ فِيهَا كَأْسًا كَانَ مِزَاجُهَا زَنْجَبِيلًا",
      transliteration: "Wa yusqawna fīhā ka'san kāna mizājuhā zanjabīlā",
      translation: { id: "Di dalam surga itu mereka diberi minum segelas (minuman) yang campurannya adalah jahe.", en: "And they will be given to drink a cup [of wine] whose mixture is of ginger." }
    },
    anatomy: [{ part: { id: "Bagian", en: "Part" }, desc: { id: "Penjelasan", en: "Explanation" } }],
    wowFactor: { id: "Fakta menakjubkan!", en: "Amazing fact!" },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  }
};

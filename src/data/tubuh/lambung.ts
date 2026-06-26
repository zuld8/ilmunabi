import { ObjectData } from "../objects";

export const lambungData: ObjectData = {
  slug: "lambung",
  name: { id: "Lambung", en: "Stomach" },
  icon: "🥘",
  category: "tubuh",
  type: "tubuh",
  scientificName: "Gaster",
  surahName: "Abasa",
  surahReference: "80:24",
  unlockedAtPoints: 15,
  kosakata: [
    { arab: "بَطْنٌ", latin: "bathnun", arti: "Perut", artiEn: "Belly", contohAyat: "وَاللَّهُ أَخْرَجَكُم مِّن بُطُونِ أُمَّهَاتِكُمْ" }
  ],
  balita: {
    text: { id: "Nyam nyam! Makanan masuk ke perut (lambung) kita! 🥘", en: "Yum yum! Food goes into our stomach! 🥘" },
    audioTranscript: { id: "Kalau kita makan, makanan dikunyah dan turun ke lambung. Di sana makanan dihancurkan supaya kita jadi kuat!", en: "When we eat, food is chewed and goes down to the stomach. There, the food is crushed so we become strong!" },
    quiz: {
      question: { id: "Ke mana makanan pergi setelah kita telan?", en: "Where does food go after we swallow it?" },
      options: [
        { text: { id: "Ke mata", en: "To the eyes" } },
        { text: { id: "Ke hidung", en: "To the nose" } },
        { text: { id: "Ke lambung (perut)", en: "To the stomach" } }
      ],
      answerIdx: 2
    }
  },
  anak: {
    text: { id: "Lambung itu seperti mesin blender di perut kita. Ia mencampur makanan dengan cairan asam yang sangat kuat untuk membunuh kuman dan melelehkan makanan keras! Allah menciptakan lambung kita tebal, jadi asamnya nggak bikin perut bolong.", en: "The stomach is like a blender in our belly. It mixes food with very strong acid to kill germs and melt hard food! Allah created our stomach thick, so the acid doesn't burn a hole in it." },
    facts: [
      { id: "Lambung orang dewasa bisa menampung 1,5 liter makanan dan minuman!", en: "An adult's stomach can hold 1.5 liters of food and drinks!" },
      { id: "Asam lambung sangat kuat, bahkan bisa melelehkan logam kecil!", en: "Stomach acid is so strong, it can even melt small metals!" },
      { id: "Lambung mengeluarkan suara 'krucuk-krucuk' saat kosong.", en: "The stomach makes a growling sound when it's empty." }
    ],
    quranVerse: { arabic: "...", transliteration: "...", translation: { id: "...", en: "..." } },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  },
  explorer: {
    text: { id: "Lambung (gaster) melakukan pencernaan kimiawi menggunakan asam klorida (HCl) dan enzim pepsin. Makanan akan dihancurkan menjadi bubur chyme. Allah memerintahkan kita untuk memperhatikan makanan yang kita masukkan ke lambung kita, memastikan itu halal, baik (thayyib), dan bergizi!", en: "The stomach (gaster) performs chemical digestion using hydrochloric acid (HCl) and the enzyme pepsin. Food is broken down into a mush called chyme. Allah commands us to pay attention to the food we put into our stomach, ensuring it is halal, good (thayyib), and nutritious!" },
    quranVerse: {
      arabic: "فَلْيَنظُرِ الْإِنسَانُ إِلَىٰ طَعَامِهِ",
      transliteration: "Falyanzhuril insaanu ilaa tha'aamih",
      translation: { id: "Maka hendaklah manusia itu memperhatikan makanannya.", en: "Then let mankind look at his food." }
    },
    anatomy: [{ part: { id: "Bagian", en: "Part" }, desc: { id: "Penjelasan", en: "Explanation" } }],
    wowFactor: { id: "Fakta menakjubkan!", en: "Amazing fact!" },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  }
};
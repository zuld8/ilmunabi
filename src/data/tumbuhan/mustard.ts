import { ObjectData } from "../objects";

export const mustardData: ObjectData = {
  slug: "mustard",
  name: { id: "Biji Sawi (Mustard)", en: "Mustard Seed" },
  icon: "🟡",
  category: "tumbuhan",
  type: "tumbuhan",
  scientificName: "Brassica",
  surahName: "Luqman",
  surahReference: "31:16",
  unlockedAtPoints: 140,
  kosakata: [
    { arab: "خَرْدَلٌ", latin: "khardalun", arti: "Sawi/Mustard", artiEn: "Mustard", contohAyat: "Sebesar biji sawi." }
  ],
  balita: {
    text: { id: "Biji sawi (mustard) itu buseeettt... kecil bangeeet! 🟡", en: "Mustard seeds are wooowww... so tiny! 🟡" },
    audioTranscript: { id: "Biji sawi itu sangaat kecil, lebih kecil dari kacang hijau! Tapi, kalau ditanam, dia bisa tumbuh jadi tanaman sayur yang rimbun.", en: "Mustard seeds are very small, smaller than mung beans! But, when planted, they can grow into lush vegetable plants." },
    quiz: {
      question: { id: "Biji sawi ukurannya seperti apa?", en: "What is the size of a mustard seed?" },
      options: [
        { text: { id: "Lebih besar dari semangka", en: "Bigger than a watermelon" } },
        { text: { id: "Sangat kecil", en: "Very small" } },
        { text: { id: "Sebesar bola", en: "As big as a ball" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Kamu tahu saus berwarna kuning cerah di burger atau hotdog? Itu adalah saus mustard yang dibuat dari biji sawi kecil ini! Meskipun kecil, rasanya lumayan tajam dan pedas lho.", en: "Do you know the bright yellow sauce on burgers or hotdogs? That's mustard sauce made from these tiny mustard seeds! Even though it's small, it tastes quite sharp and spicy." },
    facts: [
      { id: "Satu sendok teh bisa memuat ratusan biji sawi.", en: "One teaspoon can hold hundreds of mustard seeds." },
      { id: "Bunga tanaman mustard berwarna kuning terang dan cerah.", en: "Mustard plant flowers are bright yellow and vibrant." },
      { id: "Mustard termasuk sayuran keluarga kubis dan brokoli.", en: "Mustard belongs to the cabbage and broccoli vegetable family." }
    ],
    quranVerse: { arabic: "...", transliteration: "...", translation: { id: "...", en: "..." } },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  },
  explorer: {
    text: { id: "Nabi Luqman menasihati anaknya bahwa perbuatan baik atau buruk sekecil biji sawi (khardal) sekalipun, meski sembunyi di dalam batu keras atau di luar angkasa, Allah tetap bisa melihatnya! Karena sistem radar CCTV Allah Maha Canggih! Masya Allah, keren ya Allah Maha Melihat (Al-Basir)!", en: "Prophet Luqman advised his son that a good or bad deed even as small as a mustard seed (khardal), even hidden inside a hard rock or in outer space, Allah can still see it! Because Allah's CCTV radar system is ultra-advanced! Masya Allah, how cool is Allah the All-Seeing (Al-Basir)!" },
    quranVerse: {
      arabic: "يَا بُنَيَّ إِنَّهَا إِنْ تَكُ مِثْقَالَ حَبَّةٍ مِنْ خَرْدَلٍ فَتَكُنْ فِي صَخْرَةٍ أَوْ فِي السَّمَاوَاتِ أَوْ فِي الْأَرْضِ يَأْتِ بِهَا اللَّهُ",
      transliteration: "Yā bunayya innahā in taku mithqāla ḥabbatin min khardalin fatakun fī ṣakhratin aw fis-samāwāti aw fil-arḍi ya'ti bihallāh",
      translation: { id: "Hai anakku, sesungguhnya jika ada (sesuatu perbuatan) seberat biji sawi, dan berada dalam batu atau di langit atau di dalam bumi, niscaya Allah akan mendatangkannya (membalasinya).", en: "O my son, indeed if wrong should be the weight of a mustard seed and should be within a rock or [anywhere] in the heavens or in the earth, Allah will bring it forth." }
    },
    anatomy: [{ part: { id: "Bagian", en: "Part" }, desc: { id: "Penjelasan", en: "Explanation" } }],
    wowFactor: { id: "Fakta menakjubkan!", en: "Amazing fact!" },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  }
};

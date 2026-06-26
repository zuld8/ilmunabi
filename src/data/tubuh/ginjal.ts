import { ObjectData } from "../objects";

export const ginjalData: ObjectData = {
  slug: "ginjal",
  name: { id: "Ginjal", en: "Kidney" },
  icon: "💧",
  category: "tubuh",
  type: "tubuh",
  scientificName: "Ren",
  surahName: "At-Tin",
  surahReference: "95:4",
  unlockedAtPoints: 35,
  kosakata: [
    { arab: "كُلْيَةٌ", latin: "kulyatun", arti: "Ginjal", artiEn: "Kidney", contohAyat: "-" }
  ],
  balita: {
    text: { id: "Ginjal itu seperti saringan air di dalam perut kita! 💧", en: "The kidney is like a water filter inside our tummy! 💧" },
    audioTranscript: { id: "Ginjal membersihkan darah kita dari kotoran, lalu kotorannya dibuang saat kita pipis ke kamar mandi. Wah, pintar ya!", en: "Kidneys clean our blood from dirt, and the dirt is thrown away when we pee in the bathroom. Wow, so smart!" },
    quiz: {
      question: { id: "Ke mana kotoran air di ginjal dibuang?", en: "Where is the dirty water in the kidney thrown away?" },
      options: [
        { text: { id: "Lewat telinga", en: "Through the ears" } },
        { text: { id: "Lewat pipis", en: "Through pee" } },
        { text: { id: "Lewat mata", en: "Through the eyes" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Kita punya dua ginjal yang bentuknya mirip kacang merah. Walau kecil, ginjal setiap hari menyaring darah kita berulang-ulang lho! Makanya kita harus banyak minum air putih supaya ginjal kita senang dan tidak rusak.", en: "We have two kidneys shaped like kidney beans. Even though they are small, the kidneys filter our blood over and over again every day! That's why we have to drink a lot of water so our kidneys are happy and not damaged." },
    facts: [
      { id: "Ginjal menyaring sekitar 180 liter darah setiap hari!", en: "Kidneys filter about 180 liters of blood every day!" },
      { id: "Ginjal kita ukurannya sekepal tangan anak-anak.", en: "Our kidneys are about the size of a child's fist." },
      { id: "Kalau kita kurang minum, ginjal bekerja terlalu keras.", en: "If we don't drink enough, the kidneys work too hard." }
    ],
    quranVerse: { arabic: "...", transliteration: "...", translation: { id: "...", en: "..." } },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  },
  explorer: {
    text: { id: "Di dalam ginjal terdapat sejuta alat penyaring kecil bernama nefron. Nefron memisahkan racun dan urea dari darah, lalu mengembalikannya bersih ke jantung. Desain organ penyaring sekompleks ini membuktikan firman Allah bahwa Dia menciptakan manusia dalam bentuk sebaik-baiknya!", en: "Inside the kidney are a million tiny filtering units called nephrons. Nephrons separate toxins and urea from the blood, then return it clean to the heart. The design of such a complex filtering organ proves Allah's word that He created mankind in the best of forms!" },
    quranVerse: {
      arabic: "لَقَدْ خَلَقْنَا الْإِنسَانَ فِي أَحْسَنِ تَقْوِيمٍ",
      transliteration: "Laqad khalaqnal insaana fii ahsani taqwiim",
      translation: { id: "Sesungguhnya Kami telah menciptakan manusia dalam bentuk yang sebaik-baiknya.", en: "We have certainly created man in the best of stature." }
    },
    anatomy: [{ part: { id: "Bagian", en: "Part" }, desc: { id: "Penjelasan", en: "Explanation" } }],
    wowFactor: { id: "Fakta menakjubkan!", en: "Amazing fact!" },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  }
};
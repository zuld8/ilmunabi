import { ObjectData } from "../objects";

export const dombaData: ObjectData = {
  slug: "domba",
  name: { id: "Domba", en: "Sheep" },
  icon: "🐑",
  category: "hewan",
  type: "hewan",
  scientificName: "Ovis aries",
  surahName: "As-Saffat",
  surahReference: "37:107",
  unlockedAtPoints: 20,
  kosakata: [
    { arab: "ضَأْنٌ", latin: "da'nun", arti: "Domba", artiEn: "Sheep", contohAyat: "وَفَدَيْنَاهُ بِذِبْحٍ عَظِيمٍ (Dan Kami tebus anak itu dengan seekor sembelihan yang besar)" }
  ],
  balita: {
    text: { id: "Mbeeek! 🐑 Bulu domba itu tebal dan keriting seperti awan. Lembut sekali lho!", en: "Baa baa! 🐑 Sheep wool is thick and curly like clouds. It's so soft!" },
    audioTranscript: { id: "Halo teman-teman! Aku domba. Buluku tebal untuk menahan dingin. Kamu punya jaket dari bulu domba?", en: "Hello friends! I am a sheep. My wool is thick to keep me warm in the cold. Do you have a wool jacket?" },
    quiz: {
      question: { id: "Seperti apa bentuk bulu domba?", en: "What does sheep wool look like?" },
      options: [
        { text: { id: "Panjang dan lurus", en: "Long and straight" } },
        { text: { id: "Tebal, keriting, dan putih", en: "Thick, curly, and white" } },
        { text: { id: "Tajam seperti duri", en: "Sharp like thorns" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Domba itu hewan yang sangat patuh! Dulu, hampir semua Nabi pernah menjadi penggembala domba, termasuk Nabi Muhammad SAW. Dengan menggembala domba, para Nabi belajar sabar dan menyayangi makhluk hidup.", en: "Sheep are very obedient animals! In the past, almost all Prophets were shepherds, including Prophet Muhammad (PBUH). By herding sheep, the Prophets learned patience and compassion for living beings." },
    facts: [
      { id: "Pupil mata domba berbentuk persegi panjang, sehingga mereka bisa melihat ke belakang tanpa menoleh! 👁️", en: "Sheep have rectangular pupils, allowing them to see behind them without turning their heads! 👁️" },
      { id: "Domba bisa mengingat 50 wajah domba lain dan manusia selama bertahun-tahun! 🧠", en: "Sheep can remember 50 faces of other sheep and humans for years! 🧠" },
      { id: "Saat Nabi Ismail hendak disembelih, Allah menggantinya dengan domba yang besar dari surga! 🐑", en: "When Prophet Ismail was about to be sacrificed, Allah replaced him with a large sheep from heaven! 🐑" }
    ],
    quranVerse: { arabic: "...", transliteration: "...", translation: { id: "...", en: "..." } },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  },
  explorer: {
    text: { id: "Domba adalah hewan yang istimewa. Dari bulunya kita bisa membuat pakaian hangat, dari susunya kita mendapat gizi, dan dagingnya sangat lezat. Kisah pengorbanan Nabi Ibrahim yang diganti dengan sembelihan domba besar (kibasy) oleh Allah menjadi cikal bakal ibadah Qurban di bulan Dzulhijjah yang kita rayakan sampai sekarang!", en: "Sheep are special animals. From their wool we make warm clothes, from their milk we get nutrition, and their meat is delicious. The story of Prophet Ibrahim's sacrifice, which Allah replaced with a great sheep (ram), became the origin of the Qurban worship in Dzulhijjah that we celebrate until today!" },
    quranVerse: {
      arabic: "وَفَدَيْنَاهُ بِذِبْحٍ عَظِيمٍ",
      transliteration: "Wa fadaynaahu bidzibhin 'adhiim",
      translation: { id: "Dan Kami tebus anak itu dengan seekor sembelihan yang besar.", en: "And We ransomed him with a great sacrifice." }
    },
    anatomy: [{ part: { id: "Bagian", en: "Part" }, desc: { id: "Penjelasan", en: "Explanation" } }],
    wowFactor: { id: "Fakta menakjubkan!", en: "Amazing fact!" },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  }
};

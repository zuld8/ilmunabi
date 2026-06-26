import { ObjectData } from "../objects";

export const delimaData: ObjectData = {
  slug: "delima",
  name: { id: "Buah Delima", en: "Pomegranate" },
  icon: "🍎",
  category: "tumbuhan",
  type: "tumbuhan",
  scientificName: "Punica granatum",
  surahName: "Ar-Rahman",
  surahReference: "55:68",
  unlockedAtPoints: 70,
  kosakata: [
    { arab: "رُمَّانٌ", latin: "rummaanun", arti: "Delima", artiEn: "Pomegranate", contohAyat: "Delima buah dari surga." }
  ],
  balita: {
    text: { id: "Buah delima merah merona! Di dalamnya ada banyak biji kecil seperti permata. 💎", en: "Red pomegranates! Inside there are many small seeds like gems. 💎" },
    audioTranscript: { id: "Wah, kalau kita buka buah delima, wow! Ada biji-biji kecil berwarna merah yang rasanya manis dan segar. Nyam!", en: "Wow, if we open a pomegranate, wow! There are little red seeds that taste sweet and fresh. Yum!" },
    quiz: {
      question: { id: "Seperti apa isi di dalam buah delima?", en: "What does the inside of a pomegranate look like?" },
      options: [
        { text: { id: "Satu biji yang sangat besar", en: "One very large seed" } },
        { text: { id: "Kosong tidak ada isi", en: "Empty, nothing inside" } },
        { text: { id: "Biji-biji kecil merah yang banyak", en: "Many small red seeds" } }
      ],
      answerIdx: 2
    }
  },
  anak: {
    text: { id: "Buah delima itu super sehat! Bijinya yang warna merah mengandung banyak antioksidan yang bertugas melawan kuman dan penyakit di tubuh kita. Kayak pasukan pahlawan super!", en: "Pomegranates are super healthy! The red seeds contain a lot of antioxidants that act to fight germs and diseases in our body. Like an army of superheroes!" },
    facts: [
      { id: "Satu buah delima bisa berisi hingga lebih dari 600 biji kecil (aril)!", en: "One pomegranate can contain up to more than 600 small seeds (arils)!" },
      { id: "Pohon delima bisa hidup dan berbuah sampai berumur lebih dari 200 tahun.", en: "Pomegranate trees can live and bear fruit up to more than 200 years old." },
      { id: "Kulit buah delima sangat keras dan tebal untuk melindungi biji di dalamnya.", en: "The skin of a pomegranate is very hard and thick to protect the seeds inside." }
    ],
    quranVerse: { arabic: "...", transliteration: "...", translation: { id: "...", en: "..." } },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  },
  explorer: {
    text: { id: "Tahukah kamu? Allah secara khusus menyebutkan buah delima (rumman) di dalam Al-Qur'an sebagai salah satu buah yang ada di Surga kelak! Buah dengan ratusan biji bersusun rapi, penuh air dan gizi ini menjadi tanda kebesaran Allah bagi orang yang mau berpikir.", en: "Did you know? Allah specifically mentions the pomegranate (rumman) in the Quran as one of the fruits that will be in Paradise! This fruit with hundreds of neatly arranged seeds, full of water and nutrition, is a sign of Allah's greatness for people who think." },
    quranVerse: {
      arabic: "فِيهِمَا فَاكِهَةٌ وَنَخْلٌ وَرُمَّانٌ",
      transliteration: "Fīhimā fākihatun wa nakhlun wa rummān",
      translation: { id: "Di dalam keduanya (surga itu) ada buah-buahan dan kurma serta delima.", en: "In both of them are fruit and palm trees and pomegranates." }
    },
    anatomy: [{ part: { id: "Bagian", en: "Part" }, desc: { id: "Penjelasan", en: "Explanation" } }],
    wowFactor: { id: "Fakta menakjubkan!", en: "Amazing fact!" },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  }
};

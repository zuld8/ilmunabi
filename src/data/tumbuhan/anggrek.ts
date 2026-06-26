import { ObjectData } from "../objects";

export const anggrekData: ObjectData = {
  slug: "anggrek",
  name: { id: "Anggrek", en: "Orchid" },
  icon: "🌸",
  category: "tumbuhan",
  type: "tumbuhan",
  scientificName: "Orchidaceae",
  surahName: "Al-Baqarah",
  surahReference: "2:164",
  unlockedAtPoints: 10,
  kosakata: [
    { arab: "زَهْرَةُ الأُورْكِيد", latin: "zahratul uurkiid", arti: "Bunga Anggrek", artiEn: "Orchid flower", contohAyat: "Anggrek yang indah." }
  ],
  balita: {
    text: { id: "Wah, bunganya cantik sekali! Ini anggrek! 🌸", en: "Wow, the flower is so beautiful! This is an orchid! 🌸" },
    audioTranscript: { id: "Anggrek punya banyak warna, lho! Ada yang ungu, putih, dan kuning! Yuk, cium wanginya!", en: "Orchids have many colors! There are purple, white, and yellow ones! Let's smell them!" },
    quiz: {
      question: { id: "Warna apa yang BUKAN warna bunga anggrek yang biasa kita lihat?", en: "Which color is NOT a common orchid color we usually see?" },
      options: [
        { text: { id: "Ungu", en: "Purple" } },
        { text: { id: "Hitam gelap gulita", en: "Pitch black" } },
        { text: { id: "Putih", en: "White" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Anggrek adalah bunga unik yang suka menempel di pohon lain! Mereka tidak merusak pohon itu, lho, cuma numpang tinggal saja. Keren kan?", en: "Orchids are unique flowers that like to attach to other trees! They don't harm the tree, just hitching a ride. Cool, right?" },
    facts: [
      { id: "Ada anggrek yang bentuknya mirip monyet!", en: "There is an orchid shaped like a monkey!" },
      { id: "Anggrek adalah salah satu keluarga tanaman terbesar di dunia.", en: "Orchids are one of the largest plant families in the world." },
      { id: "Beberapa anggrek bisa hidup hingga 100 tahun!", en: "Some orchids can live up to 100 years!" }
    ],
    quranVerse: { arabic: "...", transliteration: "...", translation: { id: "...", en: "..." } },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  },
  explorer: {
    text: { id: "Tahukah kamu? Anggrek sangat cerdas, mereka punya trik untuk menarik serangga agar mau membantu penyerbukan mereka. Ada anggrek yang bentuk kelopaknya mirip lebah betina agar lebah jantan datang! Masya Allah, betapa pintarnya Allah mendesain makhluk sekecil ini. Semua itu bukti kebesaran Sang Pencipta alam semesta.", en: "Did you know? Orchids are very smart, they have tricks to attract insects to help pollinate them. Some orchids have petals shaped like female bees to attract male bees! Masya Allah, how cleverly Allah designed such a small creature. All of this is proof of the greatness of the Creator of the universe." },
    quranVerse: {
      arabic: "صُنْعَ اللَّهِ الَّذِي أَتْقَنَ كُلَّ شَيْءٍ",
      transliteration: "Sun'a Allāhi alladhī atqana kulla shay'in",
      translation: { id: "(Itulah) ciptaan Allah yang menyempurnakan segala sesuatu.", en: "(It is) the work of Allah, who perfected all things." }
    },
    anatomy: [{ part: { id: "Bagian", en: "Part" }, desc: { id: "Penjelasan", en: "Explanation" } }],
    wowFactor: { id: "Fakta menakjubkan!", en: "Amazing fact!" },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  }
};

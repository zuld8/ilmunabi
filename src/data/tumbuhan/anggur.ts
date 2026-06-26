import { ObjectData } from "../objects";

export const anggurData: ObjectData = {
  slug: "anggur",
  name: { id: "Anggur", en: "Grape" },
  icon: "🍇",
  category: "tumbuhan",
  type: "tumbuhan",
  scientificName: "Vitis vinifera",
  surahName: "An-Nahl",
  surahReference: "16:11",
  unlockedAtPoints: 20,
  kosakata: [
    { arab: "عِنَبٌ", latin: "'inabun", arti: "Anggur", artiEn: "Grape", contohAyat: "Anggur yang manis." }
  ],
  balita: {
    text: { id: "Nyam nyam! Buah anggur bulat-bulat dan manis! 🍇", en: "Yum yum! Grapes are round and sweet! 🍇" },
    audioTranscript: { id: "Buah anggur bergerombol banyak sekali di pohonnya! Ada yang hijau, ungu, dan merah. Ayo kita petik dan makan!", en: "Grapes bunch up together on their vine! There are green, purple, and red ones. Let's pick and eat them!" },
    quiz: {
      question: { id: "Anggur tumbuhnya biasanya seperti apa?", en: "How do grapes usually grow?" },
      options: [
        { text: { id: "Sendirian satu-satu", en: "Alone one by one" } },
        { text: { id: "Bergerombol (berkelompok)", en: "In bunches (groups)" } },
        { text: { id: "Bersembunyi di dalam tanah", en: "Hiding underground" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Tanaman anggur itu merambat lho, jadi dia suka melilit dan memanjat pagar kayu agar bisa tumbuh ke atas. Kalau kamu makan anggur, kamu dapat banyak air segar dari buahnya!", en: "Grape vines are climbing plants, so they like to wrap around and climb wooden fences to grow upwards. When you eat grapes, you get a lot of fresh water from the fruit!" },
    facts: [
      { id: "Anggur bisa dikeringkan jadi kismis yang enak banget!", en: "Grapes can be dried into very delicious raisins!" },
      { id: "Satu gerombol anggur bisa berisi lebih dari 100 buah anggur.", en: "One bunch of grapes can contain over 100 grapes." },
      { id: "Ada ribuan jenis anggur yang berbeda di seluruh dunia.", en: "There are thousands of different grape varieties around the world." }
    ],
    quranVerse: { arabic: "...", transliteration: "...", translation: { id: "...", en: "..." } },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  },
  explorer: {
    text: { id: "Anggur menyimpan cadangan gula dan air yang sangat baik untuk sumber energi instan. Di dalam Al-Qur'an, anggur sering disebut sebagai salah satu buah yang ditumbuhkan Allah dengan air hujan, bukti kasih sayang Allah agar kita bisa makan buah yang sangat lezat ini! Masya Allah, hebat ya!", en: "Grapes store reserves of sugar and water which are excellent for instant energy. In the Quran, grapes are often mentioned as one of the fruits Allah grows with rainwater, proof of Allah's love so we can eat this highly delicious fruit! Masya Allah, how amazing!" },
    quranVerse: {
      arabic: "يُنْبِتُ لَكُمْ بِهِ الزَّرْعَ وَالزَّيْتُونَ وَالنَّخِيلَ وَالْأَعْنَابَ",
      transliteration: "Yunbitu lakum bihi az-zar'a wazzaytūna wan-nakhīla wal-a'nāba",
      translation: { id: "Dia menumbuhkan bagi kamu dengan air hujan itu tanam-tanaman; zaitun, kurma, anggur...", en: "He causes to grow for you thereby the crops, olives, palm trees, grapevines..." }
    },
    anatomy: [{ part: { id: "Bagian", en: "Part" }, desc: { id: "Penjelasan", en: "Explanation" } }],
    wowFactor: { id: "Fakta menakjubkan!", en: "Amazing fact!" },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  }
};

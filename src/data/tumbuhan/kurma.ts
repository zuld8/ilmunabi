import { ObjectData } from "../objects";

export const kurmaData: ObjectData = {
  slug: "kurma",
  name: { id: "Kurma", en: "Date Palm" },
  icon: "🌴",
  category: "tumbuhan",
  type: "tumbuhan",
  scientificName: "Phoenix dactylifera",
  surahName: "Maryam",
  surahReference: "19:25",
  unlockedAtPoints: 100,
  kosakata: [
    { arab: "تَمْرٌ", latin: "tamrun", arti: "Kurma", artiEn: "Dates", contohAyat: "Makan kurma saat berbuka puasa." }
  ],
  balita: {
    text: { id: "Kurma rasanya sangat manis, legit seperti karamel! Nyam! 🌴", en: "Dates taste very sweet, sticky like caramel! Yum! 🌴" },
    audioTranscript: { id: "Saat berbuka puasa di bulan Ramadhan, Rasulullah suka sekali makan buah kurma! Ayo kita makan kurma supaya sehat!", en: "When breaking the fast in the month of Ramadan, the Prophet loved to eat dates! Let's eat dates to be healthy!" },
    quiz: {
      question: { id: "Kapan kita sering sekali makan kurma bersam-sama?", en: "When do we very often eat dates together?" },
      options: [
        { text: { id: "Saat main bola", en: "While playing soccer" } },
        { text: { id: "Saat berbuka puasa Ramadhan", en: "When breaking Ramadan fast" } },
        { text: { id: "Saat mandi", en: "While taking a bath" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Pohon kurma itu ajaib! Ia bisa bertahan hidup di gurun pasir yang panas dan gersang. Akar pohon kurma masuk sangat dalam ke tanah untuk mencari air. Makanya buahnya manis dan banyak energinya!", en: "The date palm tree is magical! It can survive in the hot and barren desert. The roots of the date palm tree go very deep into the ground to find water. That's why its fruit is sweet and full of energy!" },
    facts: [
      { id: "Biji kurma bisa tidur dalam tanah selama ribuan tahun lalu tumbuh lagi!", en: "Date seeds can sleep in the soil for thousands of years and then grow again!" },
      { id: "Pohon kurma bisa tumbuh setinggi gedung 10 lantai.", en: "Date palms can grow as tall as a 10-story building." },
      { id: "Kurma sangat cepat diubah jadi energi oleh tubuh, cocok untuk buka puasa.", en: "Dates are very quickly converted into energy by the body, perfect for breaking the fast." }
    ],
    quranVerse: { arabic: "...", transliteration: "...", translation: { id: "...", en: "..." } },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  },
  explorer: {
    text: { id: "Kurma adalah pohon yang paling banyak disebutkan dalam Al-Qur'an. Saat Bunda Maryam kesakitan akan melahirkan Nabi Isa as, Allah menyuruhnya menggoyang pangkal pohon kurma agar buah yang masak jatuh untuknya. Kurma ternyata terbukti ilmiah mengandung zat pemicu energi dan pereda nyeri alami. Masya Allah!", en: "The date palm is the most frequently mentioned tree in the Quran. When Mother Maryam was in pain to give birth to Prophet Isa AS, Allah told her to shake the trunk of the date palm so ripe dates would fall for her. Dates have been scientifically proven to contain energy boosters and natural pain relievers. Masya Allah!" },
    quranVerse: {
      arabic: "وَهُزِّي إِلَيْكِ بِجِذْعِ النَّخْلَةِ تُسَاقِطْ عَلَيْكِ رُطَبًا جَنِيًّا",
      transliteration: "Wa huzzī ilayki bijidh'in-nakhlati tusāqiṭ 'alayki ruṭaban janiyyā",
      translation: { id: "Dan goyanglah pangkal pohon kurma itu ke arahmu, niscaya pohon itu akan menggugurkan buah kurma yang masak kepadamu.", en: "And shake toward you the trunk of the palm tree; it will drop upon you ripe, fresh dates." }
    },
    anatomy: [{ part: { id: "Bagian", en: "Part" }, desc: { id: "Penjelasan", en: "Explanation" } }],
    wowFactor: { id: "Fakta menakjubkan!", en: "Amazing fact!" },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  }
};

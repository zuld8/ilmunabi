import { ObjectData } from "../objects";

export const anginData: ObjectData = {
  slug: "angin",
  name: { id: "Angin", en: "Wind" },
  icon: "🌬️",
  category: "alam",
  type: "alam",
  scientificName: "Ventus",
  surahName: "Al-Hijr",
  surahReference: "15:22",
  unlockedAtPoints: 10,
  kosakata: [
    { arab: "رِيح", latin: "Rih", arti: "Angin", artiEn: "Wind", contohAyat: "وَأَرْسَلْنَا الرِّيَاحَ لَوَاقِحَ" }
  ],
  balita: {
    text: { id: "Wusshhh! Angin meniup daun-daun sampai terbang! 🍃", en: "Whooshhh! The wind blows the leaves flying! 🍃" },
    audioTranscript: { id: "Angin tidak bisa dilihat oleh mata kita, tapi kita bisa merasakannya sejuk di pipi kita.", en: "The wind cannot be seen by our eyes, but we can feel it cool on our cheeks." },
    quiz: {
      question: { id: "Benda apa yang bisa terbang jika tertiup angin?", en: "What thing can fly if blown by the wind?" },
      options: [
        { text: { id: "Layang-layang", en: "Kite" } },
        { text: { id: "Mobil", en: "Car" } },
        { text: { id: "Batu", en: "Stone" } }
      ],
      answerIdx: 0
    }
  },
  anak: {
    text: { id: "Angin adalah udara yang bergerak! Angin bisa membantu menggerakkan perahu layar, memutar kincir angin untuk listrik, dan membawa bibit bunga ke tempat baru untuk tumbuh.", en: "Wind is moving air! Wind can help move sailboats, turn windmills for electricity, and carry flower seeds to new places to grow." },
    facts: [
      { id: "Angin tornado itu sangat kencang dan berbentuk corong putar yang bisa menerbangkan rumah!", en: "Tornado winds are very fast and shaped like a spinning funnel that can fly houses!" },
      { id: "Burung menggunakan hembusan angin untuk terbang jauh tanpa harus banyak mengepakkan sayap.", en: "Birds use gusts of wind to fly far without having to flap their wings a lot." },
      { id: "Angin tercepat di tata surya ada di planet Neptunus, kecepatannya 2.000 km per jam!", en: "The fastest wind in the solar system is on the planet Neptune, its speed is 2,000 km per hour!" }
    ],
    quranVerse: { arabic: "...", transliteration: "...", translation: { id: "...", en: "..." } },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  },
  explorer: {
    text: { id: "Angin punya peran biologi luar biasa: polinasi (penyerbukan) dan mendatangkan hujan! Hebatnya, Al-Qur'an 1400 tahun lalu secara sangat ilmiah menyebut angin sebagai 'lawaaqih' (yang mengawinkan). Angin membawa serbuk sari ke putik bunga, serta membawa partikel uap dan aerosol ke awan agar turun hujan!", en: "Wind has extraordinary biological roles: pollination and bringing rain! Amazingly, the Quran 1400 years ago scientifically called the wind 'lawaaqih' (fertilizers). Wind carries pollen to flower pistils, and carries vapor and aerosol particles to clouds so it rains!" },
    quranVerse: {
      arabic: "وَأَرْسَلْنَا الرِّيَاحَ لَوَاقِحَ فَأَنْزَلْنَا مِنَ السَّمَاءِ مَاءً فَأَسْقَيْنَاكُمُوهُ",
      transliteration: "Wa arsalnar-riyaaha lawaaqiha fa anzalnaa minas-samaa'i maa'an fa asqaynaakumuuh",
      translation: { id: "Dan Kami telah meniupkan angin untuk mengawinkan (tumbuh-tumbuhan) dan Kami turunkan hujan dari langit, lalu Kami beri minum kamu dengan air itu.", en: "And We have sent the fertilizing winds and sent down water from the sky and given you drink from it." }
    },
    anatomy: [{ part: { id: "Bagian", en: "Part" }, desc: { id: "Penjelasan", en: "Explanation" } }],
    wowFactor: { id: "Fakta menakjubkan!", en: "Amazing fact!" },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  }
};

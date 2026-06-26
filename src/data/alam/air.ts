import { ObjectData } from "../objects";

export const airData: ObjectData = {
  slug: "air",
  name: { id: "Air", en: "Water" },
  icon: "💧",
  category: "alam",
  type: "alam",
  scientificName: "Aqua (H2O)",
  surahName: "Al-Anbiya",
  surahReference: "21:30",
  unlockedAtPoints: 10,
  kosakata: [
    { arab: "مَاء", latin: "Maa'", arti: "Air", artiEn: "Water", contohAyat: "وَجَعَلْنَا مِنَ الْمَاءِ كُلَّ شَيْءٍ حَيٍّ" }
  ],
  balita: {
    text: { id: "Gluk gluk gluk! Segarnya minum air putih bersih! 🚰", en: "Glug glug glug! It's so refreshing to drink clean water! 🚰" },
    audioTranscript: { id: "Air itu wujudnya bening. Kita butuh air untuk minum, mandi biar wangi, dan menyiram bunga peliharaan kita.", en: "Water looks clear. We need water to drink, to take a bath to smell good, and to water our pet flowers." },
    quiz: {
      question: { id: "Air kalau dimasukkan ke dalam kulkas yang sangat dingin, akan berubah menjadi apa?", en: "If water is put into a very cold freezer, what will it turn into?" },
      options: [
        { text: { id: "Es batu", en: "Ice cubes" } },
        { text: { id: "Awan", en: "Cloud" } },
        { text: { id: "Debu", en: "Dust" } }
      ],
      answerIdx: 0
    }
  },
  anak: {
    text: { id: "Air sangat ajaib! Dia bisa berbentuk benda cair (air minum), benda padat (es batu es krim!), dan benda gas (uap air panas). Hampir seluruh tubuh kita juga terdiri dari air lho, jadi jangan lupa minum ya!", en: "Water is very magical! It can be a liquid (drinking water), a solid (ice cream ice cubes!), and a gas (hot water vapor). Almost our entire body is also made of water, so don't forget to drink!" },
    facts: [
      { id: "Tubuh kita terbuat dari 60% air! Bahkan otak kita sebagian besar adalah air.", en: "Our bodies are made of 60% water! Even our brains are mostly water." },
      { id: "Jumlah air di Bumi selalu tetap tidak pernah berkurang, hanya terus berputar siklusnya dari dulu.", en: "The amount of water on Earth is always the same, never decreasing, it just keeps cycling since a long time ago." },
      { id: "Manusia bisa hidup berminggu-minggu tanpa makanan, tapi hanya beberapa hari tanpa air minum.", en: "Humans can live for weeks without food, but only a few days without drinking water." }
    ],
    quranVerse: { arabic: "...", transliteration: "...", translation: { id: "...", en: "..." } },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  },
  explorer: {
    text: { id: "Air adalah pelarut universal dan dasar dari seluruh biologi! Molekul H2O memiliki ikatan hidrogen unik yang membuatnya sangat spesial bagi kehidupan sel. Sains modern sepakat bahwa kehidupan bermula dari medium cair. Sangat menakjubkan 14 abad silam Al-Qur'an sudah menegaskan bahwa segala makhluk hidup diciptakan dari air!", en: "Water is the universal solvent and the basis of all biology! The H2O molecule has a unique hydrogen bond that makes it very special for cell life. Modern science agrees that life originated from a liquid medium. It is amazing that 14 centuries ago the Quran affirmed that every living creature is created from water!" },
    quranVerse: {
      arabic: "وَجَعَلْنَا مِنَ الْمَاءِ كُلَّ شَيْءٍ حَيٍّ ۖ أَفَلَا يُؤْمِنُونَ",
      transliteration: "Wa ja'alnaa minal-maa'i kulla syay'in hayy, afalaa yu'minuun",
      translation: { id: "Dan dari air Kami jadikan segala sesuatu yang hidup. Maka mengapakah mereka tiada juga beriman?", en: "And We made from water every living thing. Then will they not believe?" }
    },
    anatomy: [{ part: { id: "Bagian", en: "Part" }, desc: { id: "Penjelasan", en: "Explanation" } }],
    wowFactor: { id: "Fakta menakjubkan!", en: "Amazing fact!" },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  }
};

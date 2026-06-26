import { ObjectData } from "../objects";

export const melatiData: ObjectData = {
  slug: "melati",
  name: { id: "Melati", en: "Jasmine" },
  icon: "💮",
  category: "tumbuhan",
  type: "tumbuhan",
  scientificName: "Jasminum",
  surahName: "Al-Baqarah",
  surahReference: "2:164",
  unlockedAtPoints: 130,
  kosakata: [
    { arab: "يَاسَمِين", latin: "yaasamiin", arti: "Melati", artiEn: "Jasmine", contohAyat: "Bunga melati di pagi hari." }
  ],
  balita: {
    text: { id: "Melati itu kecil, warnanya putih, dan wanginya sangat enak! 💮", en: "Jasmine is small, white, and smells very nice! 💮" },
    audioTranscript: { id: "Bunga melati wanginya sangat manis apalagi di malam hari. Kita juga sering mencampur bunga melati ke dalam teh supaya tehnya jadi wangi!", en: "Jasmine flowers smell very sweet, especially at night. We also often mix jasmine flowers into tea so the tea becomes fragrant!" },
    quiz: {
      question: { id: "Warna bunga melati biasanya adalah...", en: "The color of jasmine flowers is usually..." },
      options: [
        { text: { id: "Biru", en: "Blue" } },
        { text: { id: "Putih", en: "White" } },
        { text: { id: "Hitam", en: "Black" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Melati disebut 'Puspa Bangsa' karena bunga melati putih adalah salah satu bunga nasional Indonesia! Tanaman ini hidup menjalar, jadi perlu bantuan batang atau pagar untuk bersandar.", en: "Jasmine is called 'Puspa Bangsa' because the white jasmine flower is one of Indonesia's national flowers! This plant grows as a vine, so it needs the help of a stem or fence to lean on." },
    facts: [
      { id: "Bunga melati umumnya mekar dan paling wangi saat matahari sudah terbenam.", en: "Jasmine flowers generally bloom and are most fragrant when the sun has set." },
      { id: "Ada sekitar 200 jenis bunga melati di seluruh dunia.", en: "There are about 200 types of jasmine flowers around the world." },
      { id: "Teh melati sangat terkenal dan baik untuk menenangkan perut.", en: "Jasmine tea is very famous and good for soothing the stomach." }
    ],
    quranVerse: { arabic: "...", transliteration: "...", translation: { id: "...", en: "..." } },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  },
  explorer: {
    text: { id: "Zat kimia aromatik bernama benzyl asetat pada melati menghasilkan keharuman khas. Bayangkan, dari tanah yang kotor dan air biasa, sistem akar tumbuhan merakitnya menjadi senyawa paling wangi. Ini adalah keajaiban pabrik biokimia dari Yang Maha Kuasa (Al-Qadir)!", en: "An aromatic chemical substance called benzyl acetate in jasmine produces its distinctive fragrance. Imagine, from dirty soil and plain water, the plant's root system assembles it into the most fragrant compound. This is the miracle of the biochemical factory of the All-Powerful (Al-Qadir)!" },
    quranVerse: {
      arabic: "أَلَمْ تَرَ أَنَّ اللَّهَ أَنْزَلَ مِنَ السَّمَاءِ مَاءً فَأَخْرَجْنَا بِهِ ثَمَرَاتٍ مُخْتَلِفًا أَلْوَانُهَا",
      transliteration: "Alam tara annallāha anzala minas-samā'i mā'an fa akhrajnā bihi thamarātin mukhtalifan alwānuhā",
      translation: { id: "Tidakkah kamu melihat bahwasanya Allah menurunkan air dari langit lalu Kami hasilkan dengan air itu buah-buahan yang beraneka macam warnanya.", en: "Do you not see that Allah sends down rain from the sky, and We produce thereby fruits of varying colors." }
    },
    anatomy: [{ part: { id: "Bagian", en: "Part" }, desc: { id: "Penjelasan", en: "Explanation" } }],
    wowFactor: { id: "Fakta menakjubkan!", en: "Amazing fact!" },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  }
};

import { ObjectData } from "../objects";

export const bulanData: ObjectData = {
  slug: "bulan",
  name: {
    id: "Bulan",
    en: "Bulan",
  },
  scientificName: "Moon",
  surahName: "Al-Qamar",
  surahReference: "54:1",
  icon: "🌙",
  category: "alam",
  type: "alam",
  unlockedAtPoints: 50,
  kosakata: [
    { arab: "خَلَقَ", latin: "Khalaqa", arti: "Menciptakan", artiEn: "Created", contohAyat: "Al-Qamar 54:1" }
  ],
  balita: {
    text: {
      id: "Ini Bulan! Ciptaan Allah yang luar biasa indah. 🌟",
      en: "This is Bulan! An amazingly beautiful creation of Allah. 🌟",
    },
    audioTranscript: {
      id: "Ini Bulan. Allah menciptakan Bulan dengan sangat baik agar kita semua bersyukur.",
      en: "This is Bulan. Allah created Bulan beautifully so we all become grateful.",
    },
    quiz: {
      question: {
        id: "Mana gambar Bulan?",
        en: "Which one is the picture of Bulan?",
      },
      options: [
        { text: { id: "🌙 Bulan", en: "🌙 Bulan" } },
        { text: { id: "📦 Kotak", en: "📦 Box" } },
      ],
      answerIdx: 0,
    },
  },
  anak: {
    text: {
      id: "Fakta menarik tentang Bulan: Merupakan bukti keagungan penciptaan Allah di alam semesta.",
      en: "Interesting facts about Bulan: It is a proof of Allah's majestic creation in the universe.",
    },
    facts: [
      { id: "Bulan tidak memiliki cahayanya sendiri; ia hanya memantulkan cahaya matahari.", en: "Bulan tidak memiliki cahayanya sendiri; ia hanya memantulkan cahaya matahari." },
      { id: "Gaya gravitasi bulan menyebabkan pasang surut air laut di bumi.", en: "Gaya gravitasi bulan menyebabkan pasang surut air laut di bumi." },
      { id: "Bulan berputar pada porosnya dengan kecepatan yang sama dengan orbitnya.", en: "Bulan berputar pada porosnya dengan kecepatan yang sama dengan orbitnya." },
      { id: "Permukaan bulan dipenuhi kawah akibat hantaman asteroid tanpa atmosfer.", en: "Permukaan bulan dipenuhi kawah akibat hantaman asteroid tanpa atmosfer." },
      { id: "Bulan bergerak menjauhi bumi sekitar 3,8 cm setiap tahun.", en: "Bulan bergerak menjauhi bumi sekitar 3,8 cm setiap tahun." }
    ],
    quranVerse: {
      arabic: "وَفِي خَلْقِكُمْ وَمَا يَبُثُّ مِنْ دَابَّةٍ آيَاتٌ لِقَوْمٍ يُوقِنُونَ",
      transliteration: "Wa fī khalqikum wa mā yabuththu min dābbatin āyātul-liqawmiy-yūqinūn",
      translation: {
        id: "Dan pada penciptaan dirimu dan pada binatang-binatang yang bertebaran terdapat tanda-tanda kekuasaan Allah untuk kaum yang meyakini.",
        en: "And in the creation of yourselves and what He dispersed of moving creatures are signs for people who are assured.",
      },
    },
    quiz: {
      question: {
        id: "Siapa yang menciptakan Bulan dengan sempurna?",
        en: "Who created Bulan perfectly?",
      },
      options: [
        { text: { id: "Allah SWT", en: "Allah SWT" } },
        { text: { id: "Manusia", en: "Humans" } },
      ],
      answerIdx: 0,
    },
  },
  explorer: {
    text: {
      id: "Eksplorasi anatomi dan struktur Bulan mengungkap kehebatan rancangan sistem biologi dan alam yang seimbang.",
      en: "Exploration of the anatomy and structure of Bulan reveals the brilliance of biological design and natural balance.",
    },
    anatomy: [
      { part: { id: "Kawah Tabrakan", en: "Kawah Tabrakan" }, desc: { id: "Lubang besar bekas hantaman meteorit karena tidak adanya atmosfer pelindung.", en: "Lubang besar bekas hantaman meteorit karena tidak adanya atmosfer pelindung." } }
    ],
    wowFactor: {
      id: "Dalam Surah Yasin 36:39, Allah berfirman bahwa Dia menetapkan tempat peredaran bulan sehingga tampak seperti tandan kering (sabit). Secara astronomis, fase bulan sabit ini penting untuk penentuan kalender Hijriah dan pasang surut air laut.",
      en: "Dalam Surah Yasin 36:39, Allah berfirman bahwa Dia menetapkan tempat peredaran bulan sehingga tampak seperti tandan kering (sabit). Secara astronomis, fase bulan sabit ini penting untuk penentuan kalender Hijriah dan pasang surut air laut.",
    },
    quranVerse: {
      arabic: "سَنُرِيهِمْ آيَاتِنَا فِي الْآفَاقِ وَفِي أَنْفُسِهِمْ حَتَّىٰ يَتَبَيَّنَ لَهُمْ أَنَّهُ الْحَقُw",
      transliteration: "Sanurīhim āyātinā fil-āfāqi wa fī anfusihim ḥattā yatabayyana lahum annahul-ḥaqq",
      translation: {
        id: "Kami akan memperlihatkan kepada mereka tanda-tanda kekuasaan Kami di segenap penjuru dunia dan pada diri mereka sendiri, sehingga jelas bagi mereka bahwa Al-Qur'an itu adalah benar.",
        en: "We will show them Our signs in the horizons and within themselves until it becomes clear to them that it is the truth.",
      },
      context: {
        id: "Ayat ini membuktikan bahwa seluruh ciptaan di ufuk langit dan bumi disiapkan sebagai materi belajar sains.",
        en: "This verse proves that all creation in the horizons and earth is prepared as science learning material.",
      },
    },
    quiz: [
      {
        question: {
          id: "Apa hikmah utama diutusnya tanda sains tentang Bulan?",
          en: "What is the primary wisdom of scientific signs regarding Bulan?",
        },
        options: [
          { text: { id: "Meningkatkan keimanan kepada Allah Al-Khaliq", en: "Enhancing faith in Allah Al-Khaliq" } },
          { text: { id: "Hanya sekedar hiburan biasa", en: "Merely a simple entertainment" } },
        ],
        answerIdx: 0,
      },
    ],
  },
};

import { ObjectData } from "../objects";

export const kudaPacuKutubData: ObjectData = {
  slug: "kuda-pacu-kutub",
  name: {
    id: "Kuda Pacu Kutub",
    en: "Kuda Pacu Kutub",
  },
  scientificName: "Equus caballus var. kutub",
  surahName: "Al-Adiyat",
  surahReference: "100:1",
  icon: "🐎",
  category: "hewan",
  type: "hewan",
  unlockedAtPoints: 50,
  kosakata: [
    { arab: "خَلَقَ", latin: "Khalaqa", arti: "Menciptakan", artiEn: "Created", contohAyat: "Al-Adiyat 100:1" }
  ],
  balita: {
    text: {
      id: "Ini Kuda Pacu Kutub! Ciptaan Allah yang luar biasa indah. 🌟",
      en: "This is Kuda Pacu Kutub! An amazingly beautiful creation of Allah. 🌟",
    },
    audioTranscript: {
      id: "Ini Kuda Pacu Kutub. Allah menciptakan Kuda Pacu Kutub dengan sangat baik agar kita semua bersyukur.",
      en: "This is Kuda Pacu Kutub. Allah created Kuda Pacu Kutub beautifully so we all become grateful.",
    },
    quiz: {
      question: {
        id: "Mana gambar Kuda Pacu Kutub?",
        en: "Which one is the picture of Kuda Pacu Kutub?",
      },
      options: [
        { text: { id: "🐎 Kuda Pacu Kutub", en: "🐎 Kuda Pacu Kutub" } },
        { text: { id: "📦 Kotak", en: "📦 Box" } },
      ],
      answerIdx: 0,
    },
  },
  anak: {
    text: {
      id: "Fakta menarik tentang Kuda Pacu Kutub: Merupakan bukti keagungan penciptaan Allah di alam semesta.",
      en: "Interesting facts about Kuda Pacu Kutub: It is a proof of Allah's majestic creation in the universe.",
    },
    facts: [
      { id: "Kuda Pacu Kutub merupakan fauna dengan keunikan biologi ciptaan Allah SWT.", en: "Kuda Pacu Kutub merupakan fauna dengan keunikan biologi ciptaan Allah SWT." },
      { id: "Organ tubuh Kuda Pacu Kutub disesuaikan sempurna untuk bertahan hidup di habitat aslinya.", en: "Organ tubuh Kuda Pacu Kutub disesuaikan sempurna untuk bertahan hidup di habitat aslinya." },
      { id: "Setiap perilaku alami Kuda Pacu Kutub merupakan bagian dari rantai makanan penyeimbang bumi.", en: "Setiap perilaku alami Kuda Pacu Kutub merupakan bagian dari rantai makanan penyeimbang bumi." }
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
        id: "Siapa yang menciptakan Kuda Pacu Kutub dengan sempurna?",
        en: "Who created Kuda Pacu Kutub perfectly?",
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
      id: "Eksplorasi anatomi dan struktur Kuda Pacu Kutub mengungkap kehebatan rancangan sistem biologi dan alam yang seimbang.",
      en: "Exploration of the anatomy and structure of Kuda Pacu Kutub reveals the brilliance of biological design and natural balance.",
    },
    anatomy: [
      { part: { id: "Fisik Adaptif", en: "Fisik Adaptif" }, desc: { id: "Struktur tubuh yang disesuaikan dengan suhu dan kelembaban habitat.", en: "Struktur tubuh yang disesuaikan dengan suhu dan kelembaban habitat." } }
    ],
    wowFactor: {
      id: "Keajaiban penciptaan Kuda Pacu Kutub: Allah SWT merancang organ sensori khusus pada Kuda Pacu Kutub agar terhindar dari pemangsa alami secara presisi.",
      en: "Keajaiban penciptaan Kuda Pacu Kutub: Allah SWT merancang organ sensori khusus pada Kuda Pacu Kutub agar terhindar dari pemangsa alami secara presisi.",
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
          id: "Apa hikmah utama diutusnya tanda sains tentang Kuda Pacu Kutub?",
          en: "What is the primary wisdom of scientific signs regarding Kuda Pacu Kutub?",
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

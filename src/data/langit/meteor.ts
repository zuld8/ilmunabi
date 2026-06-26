import { ObjectData } from "../objects";

export const meteorJatuhData: ObjectData = {
  slug: "meteor-jatuh",
  name: {
    id: "Meteor Jatuh",
    en: "Meteor Jatuh",
  },
  scientificName: "Meteor",
  surahName: "Al-Mulk",
  surahReference: "67:5",
  icon: "🌠",
  category: "langit",
  type: "langit",
  unlockedAtPoints: 50,
  kosakata: [
    { arab: "خَلَقَ", latin: "Khalaqa", arti: "Menciptakan", artiEn: "Created", contohAyat: "Al-Mulk 67:5" }
  ],
  balita: {
    text: {
      id: "Ini Meteor Jatuh! Ciptaan Allah yang luar biasa indah. 🌟",
      en: "This is Meteor Jatuh! An amazingly beautiful creation of Allah. 🌟",
    },
    audioTranscript: {
      id: "Ini Meteor Jatuh. Allah menciptakan Meteor Jatuh dengan sangat baik agar kita semua bersyukur.",
      en: "This is Meteor Jatuh. Allah created Meteor Jatuh beautifully so we all become grateful.",
    },
    quiz: {
      question: {
        id: "Mana gambar Meteor Jatuh?",
        en: "Which one is the picture of Meteor Jatuh?",
      },
      options: [
        { text: { id: "🌠 Meteor Jatuh", en: "🌠 Meteor Jatuh" } },
        { text: { id: "📦 Kotak", en: "📦 Box" } },
      ],
      answerIdx: 0,
    },
  },
  anak: {
    text: {
      id: "Fakta menarik tentang Meteor Jatuh: Merupakan bukti keagungan penciptaan Allah di alam semesta.",
      en: "Interesting facts about Meteor Jatuh: It is a proof of Allah's majestic creation in the universe.",
    },
    facts: [
      { id: "Objek luar angkasa Meteor Jatuh bergerak pada garis edar orbitnya dengan kecepatan sangat tinggi.", en: "Objek luar angkasa Meteor Jatuh bergerak pada garis edar orbitnya dengan kecepatan sangat tinggi." },
      { id: "Atmosfer atau medan magnet di sekitar Meteor Jatuh melindungi permukaannya dari bahaya kosmis.", en: "Atmosfer atau medan magnet di sekitar Meteor Jatuh melindungi permukaannya dari bahaya kosmis." },
      { id: "Skala raksasa Meteor Jatuh membuktikan betapa luasnya jagat raya ciptaan Allah SWT.", en: "Skala raksasa Meteor Jatuh membuktikan betapa luasnya jagat raya ciptaan Allah SWT." }
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
        id: "Siapa yang menciptakan Meteor Jatuh dengan sempurna?",
        en: "Who created Meteor Jatuh perfectly?",
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
      id: "Eksplorasi anatomi dan struktur Meteor Jatuh mengungkap kehebatan rancangan sistem biologi dan alam yang seimbang.",
      en: "Exploration of the anatomy and structure of Meteor Jatuh reveals the brilliance of biological design and natural balance.",
    },
    anatomy: [
      { part: { id: "Orbit Gravitasi", en: "Orbit Gravitasi" }, desc: { id: "Jalur edar melengkung yang dipertahankan oleh tarikan massa bintang induk.", en: "Jalur edar melengkung yang dipertahankan oleh tarikan massa bintang induk." } }
    ],
    wowFactor: {
      id: "Keajaiban astrofisika Meteor Jatuh: Hukum gravitasi universal mengikat Meteor Jatuh agar tetap mengambang di ruang hampa udara tanpa tiang penyangga, persis seperti yang disebut di Al-Qur'an.",
      en: "Keajaiban astrofisika Meteor Jatuh: Hukum gravitasi universal mengikat Meteor Jatuh agar tetap mengambang di ruang hampa udara tanpa tiang penyangga, persis seperti yang disebut di Al-Qur'an.",
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
          id: "Apa hikmah utama diutusnya tanda sains tentang Meteor Jatuh?",
          en: "What is the primary wisdom of scientific signs regarding Meteor Jatuh?",
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

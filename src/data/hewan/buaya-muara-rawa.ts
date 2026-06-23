import { ObjectData } from "../objects";

export const buayaMuaraRawaData: ObjectData = {
  slug: "buaya-muara-rawa",
  name: {
    id: "Buaya Muara Rawa",
    en: "Buaya Muara Rawa",
  },
  scientificName: "Crocodylus porosus var. rawa",
  surahName: "Al-Qur'an",
  surahReference: "Ciptaan Allah",
  icon: "🐊",
  category: "hewan",
  type: "hewan",
  unlockedAtPoints: 50,
  kosakata: [
    { arab: "خَلَقَ", latin: "Khalaqa", arti: "Menciptakan", artiEn: "Created", contohAyat: "Al-Qur'an Ciptaan Allah" }
  ],
  balita: {
    text: {
      id: "Ini Buaya Muara Rawa! Ciptaan Allah yang luar biasa indah. 🌟",
      en: "This is Buaya Muara Rawa! An amazingly beautiful creation of Allah. 🌟",
    },
    audioTranscript: {
      id: "Ini Buaya Muara Rawa. Allah menciptakan Buaya Muara Rawa dengan sangat baik agar kita semua bersyukur.",
      en: "This is Buaya Muara Rawa. Allah created Buaya Muara Rawa beautifully so we all become grateful.",
    },
    quiz: {
      question: {
        id: "Mana gambar Buaya Muara Rawa?",
        en: "Which one is the picture of Buaya Muara Rawa?",
      },
      options: [
        { text: { id: "🐊 Buaya Muara Rawa", en: "🐊 Buaya Muara Rawa" } },
        { text: { id: "📦 Kotak", en: "📦 Box" } },
      ],
      answerIdx: 0,
    },
  },
  anak: {
    text: {
      id: "Fakta menarik tentang Buaya Muara Rawa: Merupakan bukti keagungan penciptaan Allah di alam semesta.",
      en: "Interesting facts about Buaya Muara Rawa: It is a proof of Allah's majestic creation in the universe.",
    },
    facts: [
      { id: "Buaya Muara Rawa merupakan fauna dengan keunikan biologi ciptaan Allah SWT.", en: "Buaya Muara Rawa merupakan fauna dengan keunikan biologi ciptaan Allah SWT." },
      { id: "Organ tubuh Buaya Muara Rawa disesuaikan sempurna untuk bertahan hidup di habitat aslinya.", en: "Organ tubuh Buaya Muara Rawa disesuaikan sempurna untuk bertahan hidup di habitat aslinya." },
      { id: "Setiap perilaku alami Buaya Muara Rawa merupakan bagian dari rantai makanan penyeimbang bumi.", en: "Setiap perilaku alami Buaya Muara Rawa merupakan bagian dari rantai makanan penyeimbang bumi." }
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
        id: "Siapa yang menciptakan Buaya Muara Rawa dengan sempurna?",
        en: "Who created Buaya Muara Rawa perfectly?",
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
      id: "Eksplorasi anatomi dan struktur Buaya Muara Rawa mengungkap kehebatan rancangan sistem biologi dan alam yang seimbang.",
      en: "Exploration of the anatomy and structure of Buaya Muara Rawa reveals the brilliance of biological design and natural balance.",
    },
    anatomy: [
      { part: { id: "Fisik Adaptif", en: "Fisik Adaptif" }, desc: { id: "Struktur tubuh yang disesuaikan dengan suhu dan kelembaban habitat.", en: "Struktur tubuh yang disesuaikan dengan suhu dan kelembaban habitat." } }
    ],
    wowFactor: {
      id: "Keajaiban penciptaan Buaya Muara Rawa: Allah SWT merancang organ sensori khusus pada Buaya Muara Rawa agar terhindar dari pemangsa alami secara presisi.",
      en: "Keajaiban penciptaan Buaya Muara Rawa: Allah SWT merancang organ sensori khusus pada Buaya Muara Rawa agar terhindar dari pemangsa alami secara presisi.",
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
          id: "Apa hikmah utama diutusnya tanda sains tentang Buaya Muara Rawa?",
          en: "What is the primary wisdom of scientific signs regarding Buaya Muara Rawa?",
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

import { ObjectData } from "../objects";

export const lalatRumahHutanData: ObjectData = {
  slug: "lalat-rumah-hutan",
  name: {
    id: "Lalat Rumah Hutan",
    en: "Lalat Rumah Hutan",
  },
  scientificName: "Musca domestica var. hutan",
  surahName: "Al-Hajj",
  surahReference: "22:73",
  icon: "🪰",
  category: "hewan",
  type: "hewan",
  unlockedAtPoints: 50,
  kosakata: [
    { arab: "خَلَقَ", latin: "Khalaqa", arti: "Menciptakan", artiEn: "Created", contohAyat: "Al-Hajj 22:73" }
  ],
  balita: {
    text: {
      id: "Ini Lalat Rumah Hutan! Ciptaan Allah yang luar biasa indah. 🌟",
      en: "This is Lalat Rumah Hutan! An amazingly beautiful creation of Allah. 🌟",
    },
    audioTranscript: {
      id: "Ini Lalat Rumah Hutan. Allah menciptakan Lalat Rumah Hutan dengan sangat baik agar kita semua bersyukur.",
      en: "This is Lalat Rumah Hutan. Allah created Lalat Rumah Hutan beautifully so we all become grateful.",
    },
    quiz: {
      question: {
        id: "Mana gambar Lalat Rumah Hutan?",
        en: "Which one is the picture of Lalat Rumah Hutan?",
      },
      options: [
        { text: { id: "🪰 Lalat Rumah Hutan", en: "🪰 Lalat Rumah Hutan" } },
        { text: { id: "📦 Kotak", en: "📦 Box" } },
      ],
      answerIdx: 0,
    },
  },
  anak: {
    text: {
      id: "Fakta menarik tentang Lalat Rumah Hutan: Merupakan bukti keagungan penciptaan Allah di alam semesta.",
      en: "Interesting facts about Lalat Rumah Hutan: It is a proof of Allah's majestic creation in the universe.",
    },
    facts: [
      { id: "Lalat Rumah Hutan merupakan fauna dengan keunikan biologi ciptaan Allah SWT.", en: "Lalat Rumah Hutan merupakan fauna dengan keunikan biologi ciptaan Allah SWT." },
      { id: "Organ tubuh Lalat Rumah Hutan disesuaikan sempurna untuk bertahan hidup di habitat aslinya.", en: "Organ tubuh Lalat Rumah Hutan disesuaikan sempurna untuk bertahan hidup di habitat aslinya." },
      { id: "Setiap perilaku alami Lalat Rumah Hutan merupakan bagian dari rantai makanan penyeimbang bumi.", en: "Setiap perilaku alami Lalat Rumah Hutan merupakan bagian dari rantai makanan penyeimbang bumi." }
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
        id: "Siapa yang menciptakan Lalat Rumah Hutan dengan sempurna?",
        en: "Who created Lalat Rumah Hutan perfectly?",
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
      id: "Eksplorasi anatomi dan struktur Lalat Rumah Hutan mengungkap kehebatan rancangan sistem biologi dan alam yang seimbang.",
      en: "Exploration of the anatomy and structure of Lalat Rumah Hutan reveals the brilliance of biological design and natural balance.",
    },
    anatomy: [
      { part: { id: "Fisik Adaptif", en: "Fisik Adaptif" }, desc: { id: "Struktur tubuh yang disesuaikan dengan suhu dan kelembaban habitat.", en: "Struktur tubuh yang disesuaikan dengan suhu dan kelembaban habitat." } }
    ],
    wowFactor: {
      id: "Keajaiban penciptaan Lalat Rumah Hutan: Allah SWT merancang organ sensori khusus pada Lalat Rumah Hutan agar terhindar dari pemangsa alami secara presisi.",
      en: "Keajaiban penciptaan Lalat Rumah Hutan: Allah SWT merancang organ sensori khusus pada Lalat Rumah Hutan agar terhindar dari pemangsa alami secara presisi.",
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
          id: "Apa hikmah utama diutusnya tanda sains tentang Lalat Rumah Hutan?",
          en: "What is the primary wisdom of scientific signs regarding Lalat Rumah Hutan?",
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

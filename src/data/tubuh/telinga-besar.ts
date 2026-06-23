import { ObjectData } from "../objects";

export const telingaBesarData: ObjectData = {
  slug: "telinga-besar",
  name: {
    id: "Telinga Besar",
    en: "Telinga Besar",
  },
  scientificName: "Auris var. besar",
  surahName: "Al-Baqarah",
  surahReference: "2:7",
  icon: "👂",
  category: "tubuh",
  type: "tubuh",
  unlockedAtPoints: 50,
  kosakata: [
    { arab: "خَلَقَ", latin: "Khalaqa", arti: "Menciptakan", artiEn: "Created", contohAyat: "Al-Baqarah 2:7" }
  ],
  balita: {
    text: {
      id: "Ini Telinga Besar! Ciptaan Allah yang luar biasa indah. 🌟",
      en: "This is Telinga Besar! An amazingly beautiful creation of Allah. 🌟",
    },
    audioTranscript: {
      id: "Ini Telinga Besar. Allah menciptakan Telinga Besar dengan sangat baik agar kita semua bersyukur.",
      en: "This is Telinga Besar. Allah created Telinga Besar beautifully so we all become grateful.",
    },
    quiz: {
      question: {
        id: "Mana gambar Telinga Besar?",
        en: "Which one is the picture of Telinga Besar?",
      },
      options: [
        { text: { id: "👂 Telinga Besar", en: "👂 Telinga Besar" } },
        { text: { id: "📦 Kotak", en: "📦 Box" } },
      ],
      answerIdx: 0,
    },
  },
  anak: {
    text: {
      id: "Fakta menarik tentang Telinga Besar: Merupakan bukti keagungan penciptaan Allah di alam semesta.",
      en: "Interesting facts about Telinga Besar: It is a proof of Allah's majestic creation in the universe.",
    },
    facts: [
      { id: "Fungsi organ Telinga Besar dikontrol secara tak sadar oleh sistem saraf pusat (otak).", en: "Fungsi organ Telinga Besar dikontrol secara tak sadar oleh sistem saraf pusat (otak)." },
      { id: "Dinding seluler pada Telinga Besar dilapisi protein struktural yang kuat dan lentur.", en: "Dinding seluler pada Telinga Besar dilapisi protein struktural yang kuat dan lentur." },
      { id: "Kinerja Telinga Besar beradaptasi cepat dengan denyut jantung dan suplai oksigen.", en: "Kinerja Telinga Besar beradaptasi cepat dengan denyut jantung dan suplai oksigen." }
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
        id: "Siapa yang menciptakan Telinga Besar dengan sempurna?",
        en: "Who created Telinga Besar perfectly?",
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
      id: "Eksplorasi anatomi dan struktur Telinga Besar mengungkap kehebatan rancangan sistem biologi dan alam yang seimbang.",
      en: "Exploration of the anatomy and structure of Telinga Besar reveals the brilliance of biological design and natural balance.",
    },
    anatomy: [
      { part: { id: "Jaringan Seluler", en: "Jaringan Seluler" }, desc: { id: "Susunan sel dengan spesialisasi biokimia tinggi.", en: "Susunan sel dengan spesialisasi biokimia tinggi." } }
    ],
    wowFactor: {
      id: "Keajaiban rancangan Telinga Besar: Desain pembuluh mikroskopis pada Telinga Besar menyaring kotoran dan racun dari aliran darah setiap detik tanpa henti.",
      en: "Keajaiban rancangan Telinga Besar: Desain pembuluh mikroskopis pada Telinga Besar menyaring kotoran dan racun dari aliran darah setiap detik tanpa henti.",
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
          id: "Apa hikmah utama diutusnya tanda sains tentang Telinga Besar?",
          en: "What is the primary wisdom of scientific signs regarding Telinga Besar?",
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

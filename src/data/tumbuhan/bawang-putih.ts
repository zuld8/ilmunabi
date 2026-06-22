import { ObjectData } from "../objects";

export const bawangPutihData: ObjectData = {
  slug: "bawang-putih",
  name: {
    id: "Bawang Putih",
    en: "Bawang Putih",
  },
  scientificName: "Allium sativum",
  surahName: "Al-Baqarah",
  surahReference: "2:61",
  icon: "🧄",
  category: "tumbuhan",
  type: "tumbuhan",
  unlockedAtPoints: 50,
  kosakata: [
    { arab: "خَلَقَ", latin: "Khalaqa", arti: "Menciptakan", artiEn: "Created", contohAyat: "Al-Baqarah 2:61" }
  ],
  balita: {
    text: {
      id: "Ini Bawang Putih! Ciptaan Allah yang luar biasa indah. 🌟",
      en: "This is Bawang Putih! An amazingly beautiful creation of Allah. 🌟",
    },
    audioTranscript: {
      id: "Ini Bawang Putih. Allah menciptakan Bawang Putih dengan sangat baik agar kita semua bersyukur.",
      en: "This is Bawang Putih. Allah created Bawang Putih beautifully so we all become grateful.",
    },
    quiz: {
      question: {
        id: "Mana gambar Bawang Putih?",
        en: "Which one is the picture of Bawang Putih?",
      },
      options: [
        { text: { id: "🧄 Bawang Putih", en: "🧄 Bawang Putih" } },
        { text: { id: "📦 Kotak", en: "📦 Box" } },
      ],
      answerIdx: 0,
    },
  },
  anak: {
    text: {
      id: "Fakta menarik tentang Bawang Putih: Merupakan bukti keagungan penciptaan Allah di alam semesta.",
      en: "Interesting facts about Bawang Putih: It is a proof of Allah's majestic creation in the universe.",
    },
    facts: [
      { id: "Bawang Putih diciptakan dengan keunikan dan manfaat yang sangat besar.", en: "Bawang Putih was created with unique traits and immense benefits." },
      { id: "Allah menyebut Bawang Putih dalam Al-Qur'an agar manusia mengamati sains di baliknya.", en: "Allah mentions Bawang Putih in the Qur'an so humans observe the science behind it." }
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
        id: "Siapa yang menciptakan Bawang Putih dengan sempurna?",
        en: "Who created Bawang Putih perfectly?",
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
      id: "Eksplorasi anatomi dan struktur Bawang Putih mengungkap kehebatan rancangan sistem biologi dan alam yang seimbang.",
      en: "Exploration of the anatomy and structure of Bawang Putih reveals the brilliance of biological design and natural balance.",
    },
    anatomy: [
      {
        part: { id: "Struktur Khusus", en: "Special Structure" },
        desc: { id: "Didesain dengan presisi tinggi untuk beradaptasi di lingkungannya.", en: "Designed with high precision to adapt to its environment." },
      },
    ],
    wowFactor: {
      id: "Keajaiban sains dan wahyu yang sesuai: Allah menyebut Bawang Putih di Al-Qur'an ribuan tahun sebelum sains modern meneliti keunikan fungsionalnya.",
      en: "The alignment of science and revelation: Allah mentioned Bawang Putih in the Qur'an thousands of years before modern science researched its functional uniqueness.",
    },
    quranVerse: {
      arabic: "سَنُرِيهِمْ آيَاتِنَا فِي الْآفَاقِ وَفِي أَنْفُسِهِم| حَتَّىٰ يَتَبَيَّنَ لَهُمْ أَنَّهُ الْحَقُّ",
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
          id: "Apa hikmah utama diutusnya tanda sains tentang Bawang Putih?",
          en: "What is the primary wisdom of scientific signs regarding Bawang Putih?",
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

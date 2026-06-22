import { ObjectData } from "../objects";

export const kupuKupuData: ObjectData = {
  slug: "kupu-kupu",
  name: {
    id: "Kupu-kupu",
    en: "Kupu-kupu",
  },
  scientificName: "Lepidoptera",
  surahName: "Al-Qari'ah",
  surahReference: "101:4",
  icon: "🦋",
  category: "hewan",
  type: "hewan",
  unlockedAtPoints: 50,
  kosakata: [
    { arab: "خَلَقَ", latin: "Khalaqa", arti: "Menciptakan", artiEn: "Created", contohAyat: "Al-Qari'ah 101:4" }
  ],
  balita: {
    text: {
      id: "Ini Kupu-kupu! Ciptaan Allah yang luar biasa indah. 🌟",
      en: "This is Kupu-kupu! An amazingly beautiful creation of Allah. 🌟",
    },
    audioTranscript: {
      id: "Ini Kupu-kupu. Allah menciptakan Kupu-kupu dengan sangat baik agar kita semua bersyukur.",
      en: "This is Kupu-kupu. Allah created Kupu-kupu beautifully so we all become grateful.",
    },
    quiz: {
      question: {
        id: "Mana gambar Kupu-kupu?",
        en: "Which one is the picture of Kupu-kupu?",
      },
      options: [
        { text: { id: "🦋 Kupu-kupu", en: "🦋 Kupu-kupu" } },
        { text: { id: "📦 Kotak", en: "📦 Box" } },
      ],
      answerIdx: 0,
    },
  },
  anak: {
    text: {
      id: "Fakta menarik tentang Kupu-kupu: Merupakan bukti keagungan penciptaan Allah di alam semesta.",
      en: "Interesting facts about Kupu-kupu: It is a proof of Allah's majestic creation in the universe.",
    },
    facts: [
      { id: "Kupu-kupu diciptakan dengan keunikan dan manfaat yang sangat besar.", en: "Kupu-kupu was created with unique traits and immense benefits." },
      { id: "Allah menyebut Kupu-kupu dalam Al-Qur'an agar manusia mengamati sains di baliknya.", en: "Allah mentions Kupu-kupu in the Qur'an so humans observe the science behind it." }
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
        id: "Siapa yang menciptakan Kupu-kupu dengan sempurna?",
        en: "Who created Kupu-kupu perfectly?",
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
      id: "Eksplorasi anatomi dan struktur Kupu-kupu mengungkap kehebatan rancangan sistem biologi dan alam yang seimbang.",
      en: "Exploration of the anatomy and structure of Kupu-kupu reveals the brilliance of biological design and natural balance.",
    },
    anatomy: [
      {
        part: { id: "Struktur Khusus", en: "Special Structure" },
        desc: { id: "Didesain dengan presisi tinggi untuk beradaptasi di lingkungannya.", en: "Designed with high precision to adapt to its environment." },
      },
    ],
    wowFactor: {
      id: "Keajaiban sains dan wahyu yang sesuai: Allah menyebut Kupu-kupu di Al-Qur'an ribuan tahun sebelum sains modern meneliti keunikan fungsionalnya.",
      en: "The alignment of science and revelation: Allah mentioned Kupu-kupu in the Qur'an thousands of years before modern science researched its functional uniqueness.",
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
          id: "Apa hikmah utama diutusnya tanda sains tentang Kupu-kupu?",
          en: "What is the primary wisdom of scientific signs regarding Kupu-kupu?",
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

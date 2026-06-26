import { ObjectData } from "../objects";

export const lebahData: ObjectData = {
  slug: "lebah",
  name: { id: "Lebah", en: "Bee" },
  icon: "🐝",
  category: "hewan",
  type: "hewan",
  scientificName: "Anthophila",
  surahName: "An-Nahl",
  surahReference: "16:68-69",
  unlockedAtPoints: 40,
  kosakata: [
    { arab: "نَحْلٌ", latin: "nahlun", arti: "Lebah", artiEn: "Bee", contohAyat: "وَأَوْحَىٰ رَبُّكَ إِلَى النَّحْلِ (Dan Tuhanmu mewahyukan kepada lebah)" }
  ],
  balita: {
    text: { id: "Ngenggg... 🐝 Lebah suka hinggap di bunga-bunga cantik. Mereka membuat madu yang sangaaat manis!", en: "Bzzzz... 🐝 Bees love landing on beautiful flowers. They make verryyy sweet honey!" },
    audioTranscript: { id: "Halo teman-teman! Aku lebah. Aku mengambil nektar dari bunga untuk dibuat menjadi madu. Jangan ganggu sarangku ya!", en: "Hello friends! I am a bee. I take nectar from flowers to make honey. Please don't disturb my hive!" },
    quiz: {
      question: { id: "Makanan apa yang dibuat oleh lebah dari bunga?", en: "What food do bees make from flowers?" },
      options: [
        { text: { id: "Cokelat", en: "Chocolate" } },
        { text: { id: "Permen", en: "Candy" } },
        { text: { id: "Madu", en: "Honey" } }
      ],
      answerIdx: 2
    }
  },
  anak: {
    text: { id: "Lebah adalah arsitek terhebat di alam! Sarang madu mereka berbentuk segi enam (heksagon) yang sempurna. Bentuk heksagon menyimpan madu paling banyak dan menghemat tempat lho!", en: "Bees are the greatest architects in nature! Their honeycombs are perfectly hexagonal. The hexagon shape stores the most honey and saves the most space!" },
    facts: [
      { id: "Untuk membuat 1 sendok madu, lebah harus mengunjungi 4000 bunga! 🌸", en: "To make 1 spoonful of honey, bees have to visit 4000 flowers! 🌸" },
      { id: "Lebah berkomunikasi dengan teman-temannya melalui tarian khusus! 💃", en: "Bees communicate with their friends through a special dance! 💃" },
      { id: "Lebah adalah satu-satunya serangga yang memproduksi makanan untuk manusia! 🍯", en: "Bees are the only insects that produce food for humans! 🍯" }
    ],
    quranVerse: { arabic: "...", transliteration: "...", translation: { id: "...", en: "..." } },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  },
  explorer: {
    text: { id: "1400 tahun lalu, Al-Qur'an sudah mengabadikan kehebatan lebah dalam Surah An-Nahl (Lebah). Allah menceritakan bahwa Dia mewahyukan insting kepada lebah untuk membuat sarang di bukit dan pohon. Dari perut lebah keluar cairan beraneka warna (madu) yang menjadi obat bagi manusia. Madu terbukti mengandung antibakteri super kuat!", en: "1400 years ago, the Qur'an already eternalized the greatness of bees in Surah An-Nahl (The Bee). Allah tells us that He inspired the bees to build hives in mountains and trees. From their bellies comes a fluid of varying colors (honey) which is a healing for humans. Honey is proven to contain super strong antibacterials!" },
    quranVerse: {
      arabic: "يَخْرُجُ مِنْ بُطُونِهَا شَرَابٌ مُخْتَلِفٌ أَلْوَانُهُ فِيهِ شِفَاءٌ لِلنَّاسِ",
      transliteration: "Yakhruju min butuunihaa sharaabun mukhtalifun alwaanuhu fiihi shifaa'un lin-naas",
      translation: { id: "Dari perut lebah itu keluar minuman (madu) yang bermacam-macam warnanya, di dalamnya terdapat obat yang menyembuhkan bagi manusia.", en: "There emerges from their bellies a drink, varying in colors, in which there is healing for people." }
    },
    anatomy: [{ part: { id: "Bagian", en: "Part" }, desc: { id: "Penjelasan", en: "Explanation" } }],
    wowFactor: { id: "Fakta menakjubkan!", en: "Amazing fact!" },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  }
};

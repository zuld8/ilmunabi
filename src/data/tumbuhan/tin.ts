import { ObjectData } from "../objects";

export const tinData: ObjectData = {
  slug: "tin",
  name: { id: "Buah Tin", en: "Fig" },
  icon: "🪴",
  category: "tumbuhan",
  type: "tumbuhan",
  scientificName: "Ficus carica",
  surahName: "At-Tin",
  surahReference: "95:1",
  unlockedAtPoints: 180,
  kosakata: [
    { arab: "تِينٌ", latin: "tiinun", arti: "Buah Tin", artiEn: "Fig", contohAyat: "Demi buah Tin dan Zaitun." }
  ],
  balita: {
    text: { id: "Buah manis yang di dalamnya berserat merah empuk! 🪴", en: "A sweet fruit whose inside has soft red fibers! 🪴" },
    audioTranscript: { id: "Buah tin itu empuk sekali, bisa dimakan mentah atau dikeringkan! Rasanya manis seperti madu. Nyam nyam nyam!", en: "Figs are very soft, they can be eaten raw or dried! They taste as sweet as honey. Yum yum yum!" },
    quiz: {
      question: { id: "Bagaimana rasa buah tin?", en: "How do figs taste?" },
      options: [
        { text: { id: "Manis", en: "Sweet" } },
        { text: { id: "Sangat Asin", en: "Very Salty" } },
        { text: { id: "Pahit", en: "Bitter" } }
      ],
      answerIdx: 0
    }
  },
  anak: {
    text: { id: "Tahukah kamu? Buah tin sebenarnya bukanlah sebuah buah! Buah tin sebenarnya adalah kumpulan bunga-bunga kecil yang tumbuh berbalik menghadap ke dalam. Keren banget ya!", en: "Did you know? A fig is actually not a fruit! A fig is actually a cluster of small flowers that grow reversed facing inwards. So cool, right!" },
    facts: [
      { id: "Pohon tin adalah salah satu pohon buah tertua yang ditanam oleh manusia.", en: "The fig tree is one of the oldest fruit trees cultivated by humans." },
      { id: "Ada jenis lebah khusus (lebah ara) yang bertugas membantu penyerbukan buah tin.", en: "There is a special type of wasp (fig wasp) assigned to help pollinate figs." },
      { id: "Buah tin kaya dengan serat yang sangat bagus untuk pencernaan kita.", en: "Figs are rich in fiber which is very good for our digestion." }
    ],
    quranVerse: { arabic: "...", transliteration: "...", translation: { id: "...", en: "..." } },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  },
  explorer: {
    text: { id: "Saking istimewanya, Allah menjadikan nama Buah Tin sebagai salah satu nama surah di Al-Qur'an dan bersumpah atas nama buah ini! Sumpah Allah menandakan bahwa buah Tin memiliki manfaat luar biasa untuk kesehatan dan nutrisi. Masya Allah!", en: "Because it's so special, Allah made the name of the Fig as one of the chapter names in the Quran and swore by this fruit! Allah's oath signifies that the Fig has extraordinary benefits for health and nutrition. Masya Allah!" },
    quranVerse: {
      arabic: "وَالتِّينِ وَالزَّيْتُونِ ۝ وَطُورِ سِينِينَ",
      transliteration: "Wat-tīni waz-zaytūn. Wa ṭūri sīnīn",
      translation: { id: "Demi (buah) Tin dan (buah) Zaitun, dan demi bukit Sinai.", en: "By the fig and the olive, And [by] Mount Sinai." }
    },
    anatomy: [{ part: { id: "Bagian", en: "Part" }, desc: { id: "Penjelasan", en: "Explanation" } }],
    wowFactor: { id: "Fakta menakjubkan!", en: "Amazing fact!" },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  }
};

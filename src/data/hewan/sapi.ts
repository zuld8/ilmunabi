import { ObjectData } from "../objects";

export const sapiData: ObjectData = {
  slug: "sapi",
  name: { id: "Sapi", en: "Cow" },
  icon: "🐄",
  category: "hewan",
  type: "hewan",
  scientificName: "Bos taurus",
  surahName: "Al-Baqarah",
  surahReference: "2:67",
  unlockedAtPoints: 10,
  kosakata: [
    { arab: "بَقَرَةٌ", latin: "baqaratun", arti: "Sapi", artiEn: "Cow", contohAyat: "إِنَّ اللَّهَ يَأْمُرُكُمْ أَنْ تَذْبَحُوا بَقَرَةً (Sesungguhnya Allah menyuruhmu menyembelih seekor sapi)" }
  ],
  balita: {
    text: { id: "Mooooo! 🐄 Sapi itu hewan yang besar dan menghasilkan susu yang bergizi untuk kita minum. Nyam!", en: "Mooooo! 🐄 Cows are large animals that produce nutritious milk for us to drink. Yum!" },
    audioTranscript: { id: "Halo kawan! Aku sapi betina. Badanku besar dan belang-belang. Aku suka makan rumput segar supaya susuku sehat!", en: "Hello friend! I am a cow. My body is big and spotted. I like eating fresh grass so my milk is healthy!" },
    quiz: {
      question: { id: "Minuman apa yang dihasilkan sapi untuk kita?", en: "What drink do cows produce for us?" },
      options: [
        { text: { id: "Jus jeruk", en: "Orange juice" } },
        { text: { id: "Susu", en: "Milk" } },
        { text: { id: "Kopi", en: "Coffee" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Tahukah kamu? Sapi punya perut yang terbagi menjadi empat ruangan! Mereka mengunyah rumput, menelannya, lalu mengeluarkannya lagi untuk dikunyah kedua kalinya. Wah, rajin mengunyah ya!", en: "Did you know? Cows have a stomach divided into four compartments! They chew grass, swallow it, and then bring it back up to chew it a second time. Wow, they really love chewing!" },
    facts: [
      { id: "Sapi bisa memproduksi lebih dari 25 liter susu setiap hari! 🥛", en: "Cows can produce more than 25 liters of milk every day! 🥛" },
      { id: "Sapi punya penciuman tajam, bisa mencium aroma dari jarak 8 kilometer! 👃", en: "Cows have a sharp sense of smell, they can smell scents from 8 kilometers away! 👃" },
      { id: "Sapi minum air setara dengan ukuran sebuah bak mandi (bathtub) setiap harinya! 🛁", en: "Cows drink water equivalent to the size of a bathtub every day! 🛁" }
    ],
    quranVerse: { arabic: "...", transliteration: "...", translation: { id: "...", en: "..." } },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  },
  explorer: {
    text: { id: "Sapi adalah salah satu hewan ternak yang sangat diberkahi oleh Allah. Bahkan, surah terpanjang di dalam Al-Qur'an dinamakan 'Al-Baqarah' yang berarti Sapi Betina. Kisahnya bermula dari Bani Israil yang diperintahkan Allah untuk menyembelih seekor sapi berwana kuning cerah untuk mengungkap sebuah misteri!", en: "Cows are one of the livestock highly blessed by Allah. In fact, the longest surah in the Qur'an is named 'Al-Baqarah', which means The Cow. The story begins with the Children of Israel who were commanded by Allah to slaughter a bright yellow cow to solve a mystery!" },
    quranVerse: {
      arabic: "قَالُوا ادْعُ لَنَا رَبَّكَ يُبَيِّنْ لَنَا مَا لَوْنُهَا ۚ قَالَ إِنَّهُ يَقُولُ إِنَّهَا بَقَرَةٌ صَفْرَاءُ فَاقِعٌ لَوْنُهَا تَسُرُّ النَّاظِرِينَ",
      transliteration: "Qaaluud'u lanaa rabbaka yubayyil-lanaa maa lawnuhaa, qaala innahu yaquulu innahaa baqaratun safraa'u faaqi'un lawnuhaa tasurrun-naaziriin",
      translation: { id: "Mereka berkata, 'Mohonkanlah kepada Tuhanmu untuk kami agar Dia menerangkan kepada kami apa warnanya'. (Musa) menjawab, 'Allah berfirman bahwa sapi itu adalah sapi betina yang kuning tua warnanya, lagi menyennagkan hati orang-orang yang memandangnya'.", en: "They said, 'Call upon your Lord to make clear to us its color.' He said, 'He says, it is a yellow cow, bright in color - pleasing to the observers.'" }
    },
    anatomy: [{ part: { id: "Bagian", en: "Part" }, desc: { id: "Penjelasan", en: "Explanation" } }],
    wowFactor: { id: "Fakta menakjubkan!", en: "Amazing fact!" },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  }
};

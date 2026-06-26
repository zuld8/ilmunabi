import { ObjectData } from "../objects";

export const matahariData: ObjectData = {
  slug: "matahari",
  name: { id: "Matahari", en: "Sun" },
  icon: "☀️",
  category: "alam",
  type: "alam",
  scientificName: "Sol",
  surahName: "Nuh",
  surahReference: "71:16",
  unlockedAtPoints: 10,
  kosakata: [
    { arab: "شَمْس", latin: "Syams", arti: "Matahari", artiEn: "Sun", contohAyat: "وَالشَّمْسِ وَضُحَاهَا" }
  ],
  balita: {
    text: { id: "Selamat pagi matahari yang hangat! Sinarmu terang sekali. 🌻", en: "Good morning warm sun! Your light is so bright. 🌻" },
    audioTranscript: { id: "Matahari bangun di pagi hari untuk memberikan cahaya biar kita bisa main, dan tidur di sore hari supaya kita istirahat.", en: "The sun wakes up in the morning to give light so we can play, and sleeps in the evening so we can rest." },
    quiz: {
      question: { id: "Matahari terbit di waktu apa?", en: "What time does the sun rise?" },
      options: [
        { text: { id: "Malam hari", en: "Night time" } },
        { text: { id: "Pagi hari", en: "Morning time" } },
        { text: { id: "Sore hari", en: "Evening time" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Matahari adalah bintang yang paling dekat dengan Bumi. Jauuuuuh sekali jaraknya, tapi panasnya sampai ke sini! Tanpa matahari, bumi akan membeku dan gelap gulita. Allah menciptakan matahari bagaikan lampu raksasa.", en: "The sun is the closest star to Earth. It's veeeery far away, but its heat reaches here! Without the sun, the earth would freeze and be pitch black. Allah created the sun like a giant lamp." },
    facts: [
      { id: "Satu juta planet Bumi bisa muat di dalam Matahari! Wah!", en: "One million Earths can fit inside the Sun! Wow!" },
      { id: "Cahaya matahari butuh waktu 8 menit untuk sampai ke Bumi.", en: "Sunlight takes 8 minutes to reach Earth." },
      { id: "Matahari tidak terbuat dari api, melainkan gas hidrogen dan helium yang sangat panas.", en: "The sun is not made of fire, but super hot hydrogen and helium gases." }
    ],
    quranVerse: { arabic: "...", transliteration: "...", translation: { id: "...", en: "..." } },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  },
  explorer: {
    text: { id: "Matahari adalah reaktor fusi nuklir alami raksasa yang membakar 600 juta ton hidrogen per detik. Al-Qur'an secara menakjubkan mendeskripsikan matahari sebagai 'siraaj' (pelita yang menyala panas), membedakannya dengan bulan yang hanya memantulkan cahaya. Akurasi ilmiah yang luar biasa!", en: "The sun is a giant natural nuclear fusion reactor that burns 600 million tons of hydrogen per second. The Quran amazingly describes the sun as a 'siraaj' (a burning, blazing lamp), distinguishing it from the moon which only reflects light. Extraordinary scientific accuracy!" },
    quranVerse: {
      arabic: "وَجَعَلَ الْقَمَرَ فِيهِنَّ نُورًا وَجَعَلَ الشَّمْسَ سِرَاجًا",
      transliteration: "Wa ja'alal-qamara fiihinna nuuran wa ja'alasy-syamsa siraajaa",
      translation: { id: "Dan Allah menciptakan padanya bulan sebagai cahaya dan menjadikan matahari sebagai pelita (yang cemerlang)?", en: "And made the moon therein a [reflected] light and made the sun a burning lamp?" }
    },
    anatomy: [{ part: { id: "Bagian", en: "Part" }, desc: { id: "Penjelasan", en: "Explanation" } }],
    wowFactor: { id: "Fakta menakjubkan!", en: "Amazing fact!" },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  }
};

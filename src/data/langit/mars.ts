import { ObjectData } from "../objects";

export const marsData: ObjectData = {
  slug: "mars",
  name: { id: "Mars", en: "Mars" },
  icon: "🔴",
  category: "langit",
  type: "langit",
  scientificName: "Mars",
  surahName: "Al-Baqarah",
  surahReference: "2:164",
  unlockedAtPoints: 50,
  kosakata: [
    { arab: "أَحْمَر", latin: "Ahmar", arti: "Merah", artiEn: "Red", contohAyat: "Planet Merah yang penuh debu" }
  ],
  balita: {
    text: { id: "Halo Mars! Ini adalah Si Planet Merah! Warnanya merah karena tertutup banyak sekali debu karat! 🔴🚀", en: "Hello Mars! This is the Red Planet! It's red because it's covered in lots of rusty dust! 🔴🚀" },
    audioTranscript: { id: "Ini planet Mars! Planet yang warnanya merah bata. Di sana banyak gunung batu, Allah menciptakannya bertetangga dengan planet Bumi kita.", en: "This is planet Mars! The planet with a brick red color. There are many rocky mountains there, Allah created it neighboring our Earth." },
    quiz: {
      question: { id: "Warna planet Mars itu apa ya?", en: "What color is planet Mars?" },
      options: [
        { text: { id: "Ungu", en: "Purple" } },
        { text: { id: "Biru", en: "Blue" } },
        { text: { id: "Merah bata", en: "Brick red" } }
      ],
      answerIdx: 2
    }
  },
  anak: {
    text: { id: "Mars adalah planet tetangga Bumi! Sekarang, banyak robot penjelajah (Rover) buatan manusia yang sedang berjalan-jalan di sana mencari tahu apakah dulu ada kehidupan.", en: "Mars is Earth's neighboring planet! Right now, many human-made robot rovers are exploring it, trying to find out if there was ever life there." },
    facts: [
      { id: "Di Mars ada gunung berapi raksasa bernama Olympus Mons. Gunung ini tiga kali lebih tinggi dari Gunung Everest di Bumi! 🌋", en: "Mars has a giant volcano called Olympus Mons. It's three times taller than Mount Everest on Earth! 🌋" },
      { id: "Mars punya dua bulan kecil berbentuk seperti kentang: Phobos dan Deimos.", en: "Mars has two small potato-shaped moons: Phobos and Deimos." },
      { id: "Saking dinginnya, di kutub planet Mars terdapat es batu yang tidak mencair!", en: "It's so cold that at the poles of Mars, there is ice that doesn't melt!" }
    ],
    quranVerse: { arabic: "...", transliteration: "...", translation: { id: "...", en: "..." } },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  },
  explorer: {
    text: { id: "Mars dulunya diperkirakan mirip Bumi, punya sungai dan laut! HAH?! Tapi entah kenapa, Mars kehilangan medan magnet dan atmosfernya perlahan menguap ke angkasa tersapu angin matahari, menyisakan gurun merah yang beku. 1400 tahun lalu, Al-Qur'an mengajak kita memikirkan bagaimana silih bergantinya pergantian siang dan malam serta penciptaan langit sebagai pelajaran besar tentang kekuasaan Allah yang mutlak.", en: "Mars is thought to have once been like Earth, with rivers and oceans! HAH?! But somehow, Mars lost its magnetic field and its atmosphere slowly evaporated into space, blown away by solar wind, leaving a frozen red desert. 1400 years ago, the Quran invited us to reflect on the alternation of night and day and the creation of the heavens as a profound lesson in Allah's absolute power." },
    quranVerse: {
      arabic: "إِنَّ فِي خَلْقِ السَّمَاوَاتِ وَالْأَرْضِ وَاخْتِلَافِ اللَّيْلِ وَالنَّهَارِ... لَآيَاتٍ لِقَوْمٍ يَعْقِلُونَ",
      transliteration: "Inna fī khalqis-samāwāti wal-arḍi wakhtilāfil-layli wan-nahār... la'āyātil-liqawmiy-ya'qilūn",
      translation: { id: "Sesungguhnya dalam penciptaan langit dan bumi, silih bergantinya malam dan siang... terdapat tanda-tanda (kebesaran Allah) bagi kaum yang memikirkan.", en: "Indeed, in the creation of the heavens and earth, and the alternation of the night and the day... are signs for a people who use reason." }
    },
    anatomy: [{ part: { id: "Bagian", en: "Part" }, desc: { id: "Penjelasan", en: "Explanation" } }],
    wowFactor: { id: "Fakta menakjubkan!", en: "Amazing fact!" },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  }
};

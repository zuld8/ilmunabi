import { ObjectData } from "../objects";

export const bulanData: ObjectData = {
  slug: "bulan",
  name: { id: "Bulan", en: "Moon" },
  icon: "🌙",
  category: "alam",
  type: "alam",
  scientificName: "Luna",
  surahName: "Al-Qamar",
  surahReference: "54:1",
  unlockedAtPoints: 20,
  kosakata: [
    { arab: "قَمَر", latin: "Qamar", arti: "Bulan", artiEn: "Moon", contohAyat: "اقْتَرَبَتِ السَّاعَةُ وَانْشَقَّ الْقَمَرُ" }
  ],
  balita: {
    text: { id: "Halo bulan purnama yang cantik! Bentukmu bulat dan terang! 🌝", en: "Hello beautiful full moon! Your shape is round and bright! 🌝" },
    audioTranscript: { id: "Bulan kadang bentuknya bulat penuh, tapi kadang seperti pisang sabit. Bulan selalu menemani kita tidur.", en: "Sometimes the moon is completely round, but sometimes it looks like a crescent banana. The moon always accompanies us to sleep." },
    quiz: {
      question: { id: "Bulan yang bentuknya seperti pisang disebut apa?", en: "What is the moon that looks like a banana called?" },
      options: [
        { text: { id: "Bulan Purnama", en: "Full Moon" } },
        { text: { id: "Bulan Sabit", en: "Crescent Moon" } },
        { text: { id: "Bulan Bintang", en: "Star Moon" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Bulan tidak punya cahayanya sendiri loh! Cahaya bulan yang kita lihat itu pantulan dari sinar matahari, seperti cermin raksasa. Allah menjadikan bulan sebagai penunjuk kalender Hijriyah bagi umat Islam.", en: "The moon doesn't have its own light! The moonlight we see is a reflection of sunlight, like a giant mirror. Allah made the moon as a guide for the Hijri calendar for Muslims." },
    facts: [
      { id: "Satu hari di bulan sama dengan 29.5 hari di Bumi!", en: "One day on the moon is equal to 29.5 days on Earth!" },
      { id: "Jejak kaki astronot di bulan tidak akan pernah hilang karena tidak ada angin di sana.", en: "Astronauts' footprints on the moon will never disappear because there is no wind there." },
      { id: "Gravitasi bulan yang menarik air laut membuat terjadinya pasang surut laut di Bumi.", en: "The moon's gravity that pulls seawater causes ocean tides on Earth." }
    ],
    quranVerse: { arabic: "...", transliteration: "...", translation: { id: "...", en: "..." } },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  },
  explorer: {
    text: { id: "Bulan adalah satelit alami Bumi satu-satunya. Tanpa bulan, Bumi akan berputar jauh lebih cepat dan cuaca akan sangat ekstrem. Al-Qur'an secara menakjubkan mendeskripsikan matahari bersinar (siraj) tapi bulan bercahaya (nur), yang artinya bulan hanya memantulkan cahaya, fakta yang baru dipahami sains modern!", en: "The moon is Earth's only natural satellite. Without the moon, Earth would spin much faster and the weather would be very extreme. The Quran amazingly describes the sun as a burning light (siraj) but the moon as a light (nur), meaning the moon only reflects light, a fact only recently understood by modern science!" },
    quranVerse: {
      arabic: "تَبَارَكَ الَّذِي جَعَلَ فِي السَّمَاءِ بُرُوجًا وَجَعَلَ فِيهَا سِرَاجًا وَقَمَرًا مُنِيرًا",
      transliteration: "Tabaarakalladzii ja'ala fis-samaa'i buruujan wa ja'ala fiihaa siraajan wa qamaran muniiran",
      translation: { id: "Mahasuci Allah yang menjadikan di langit gugusan bintang-bintang dan Dia juga menjadikan padanya matahari dan bulan yang bersinar.", en: "Blessed is He who has placed in the sky great stars and placed therein a [burning] lamp and luminous moon." }
    },
    anatomy: [{ part: { id: "Bagian", en: "Part" }, desc: { id: "Penjelasan", en: "Explanation" } }],
    wowFactor: { id: "Fakta menakjubkan!", en: "Amazing fact!" },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  }
};

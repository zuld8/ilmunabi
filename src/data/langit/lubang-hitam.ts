import { ObjectData } from "../objects";

export const lubangHitamData: ObjectData = {
  slug: "lubang-hitam",
  name: { id: "Lubang Hitam", en: "Black Hole" },
  icon: "🕳️",
  category: "langit",
  type: "langit",
  scientificName: "Black Hole",
  surahName: "Al-Waqi'ah",
  surahReference: "56:75",
  unlockedAtPoints: 50,
  kosakata: [
    { arab: "مَوَاقِع", latin: "Mawaqi'", arti: "Tempat (Jatuhnya/Beredar)", artiEn: "Places (of setting)", contohAyat: "Tempat jatuhnya bintang-bintang" }
  ],
  balita: {
    text: { id: "Uwaaa! Ini Lubang Hitam! Dia seperti 'vacuum cleaner' angkasa yang sangat kuat, menyedot apa saja di dekatnya! 🌪️", en: "Uwaaa! This is a Black Hole! It's like a super strong space vacuum cleaner, sucking up anything near it! 🌪️" },
    audioTranscript: { id: "Ini misteri besar di luar angkasa, namanya Lubang Hitam! Tarikannya sangat kuat. Benda apa saja yang lewat di dekatnya akan tertelan, Allah berkuasa menciptakan hal-hal hebat yang tersembunyi.", en: "This is a big mystery in space, called a Black Hole! Its pull is extremely strong. Anything passing nearby gets swallowed, Allah is powerful enough to create great hidden things." },
    quiz: {
      question: { id: "Apa kehebatan Lubang Hitam?", en: "What is the superpower of a Black Hole?" },
      options: [
        { text: { id: "Bisa mengeluarkan permen", en: "It dispenses candy" } },
        { text: { id: "Menyedot benda seperti vacuum cleaner", en: "Sucks things like a vacuum cleaner" } },
        { text: { id: "Bisa bernyanyi", en: "It can sing" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Lubang Hitam adalah tempat di ruang angkasa di mana gravitasinya super duper kuat! Bahkan cahaya pun tidak bisa kabur darinya, makanya dia terlihat hitam gelap gulita.", en: "A Black Hole is a place in space where gravity is super duper strong! Not even light can escape it, which is why it looks pitch black." },
    facts: [
      { id: "Lubang Hitam terbentuk saat bintang raksasa meledak dan mati (disebut Supernova). 💥", en: "Black Holes are formed when giant stars explode and die (called a Supernova). 💥" },
      { id: "Waktu berjalan lebih lambat di dekat Lubang Hitam! Seperti masuk ke mesin waktu.", en: "Time moves slower near a Black Hole! Like stepping into a time machine." },
      { id: "Kita tidak perlu takut, karena Lubang Hitam letaknya sangaaaat jauh dari Bumi kita.", en: "We don't need to be afraid, because Black Holes are faaaar away from our Earth." }
    ],
    quranVerse: { arabic: "...", transliteration: "...", translation: { id: "...", en: "..." } },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  },
  explorer: {
    text: { id: "Tarikan gravitasi Lubang Hitam melengkungkan ruang dan waktu! HAH?! Batas terluar Lubang Hitam disebut Event Horizon, titik di mana tidak ada lagi jalan kembali. Semua materi dari bintang-bintang di sekitarnya yang tersedot akan hancur dan hilang tanpa jejak. 1400 tahun lalu, Al-Qur'an bersumpah dengan 'tempat jatuhnya bintang-bintang' sebagai suatu sumpah yang sangat besar.", en: "The gravitational pull of a Black Hole warps space and time! HAH?! The outer edge of a Black Hole is called the Event Horizon, the point of no return. All matter from surrounding stars that gets sucked in will be crushed and disappear without a trace. 1400 years ago, the Quran swore by 'the setting places of the stars' as an immensely great oath." },
    quranVerse: {
      arabic: "فَلَا أُقْسِمُ بِمَوَاقِعِ النُّجُومِ ﴿٧٥﴾ وَإِنَّهُ لَقَسَمٌ لَوْ تَعْلَمُونَ عَظِيمٌ ﴿٧٦﴾",
      transliteration: "Falā uqsimu bimawāqi'in-nujūm (75). Wa innahū laqasamul law ta'lamūna 'aẓīm (76).",
      translation: { id: "Maka Aku bersumpah dengan tempat beredarnya (jatuhnya) bintang-bintang. Dan sesungguhnya itu adalah sumpah yang sangat besar kalau kamu mengetahui.", en: "Then I swear by the setting places of the stars. And indeed, it is an oath - if you could know - [most] great." }
    },
    anatomy: [{ part: { id: "Bagian", en: "Part" }, desc: { id: "Penjelasan", en: "Explanation" } }],
    wowFactor: { id: "Fakta menakjubkan!", en: "Amazing fact!" },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  }
};

import { ObjectData } from "../objects";

export const merkuriusData: ObjectData = {
  slug: "merkurius",
  name: { id: "Merkurius", en: "Mercury" },
  icon: "⚪",
  category: "langit",
  type: "langit",
  scientificName: "Mercury",
  surahName: "An-Naba",
  surahReference: "78:12-13",
  unlockedAtPoints: 50,
  kosakata: [
    { arab: "سِرَاج", latin: "Siraj", arti: "Pelita (Matahari)", artiEn: "Lamp (Sun)", contohAyat: "Matahari memanaskan Merkurius" }
  ],
  balita: {
    text: { id: "Wuzzz! Ini Merkurius, si planet super cepat dan paling dekat dengan matahari! Sangaaat panas kalau siang! ☀️🏃", en: "Zoom! This is Mercury, the super fast planet and the closest to the sun! Veeeery hot during the day! ☀️🏃" },
    audioTranscript: { id: "Ini planet terkecil di tata surya kita, namanya Merkurius. Dia paling dekat dengan Matahari lho, makanya dia berlari mengelilingi matahari paling cepat dibanding teman-temannya.", en: "This is the smallest planet in our solar system, called Mercury. It's the closest to the Sun, that's why it runs around the sun faster than its friends." },
    quiz: {
      question: { id: "Kenapa siang hari di Merkurius sangat panas?", en: "Why is daytime on Mercury so hot?" },
      options: [
        { text: { id: "Karena dekat dengan kulkas", en: "Because it's close to the fridge" } },
        { text: { id: "Karena dia paling dekat dengan Matahari", en: "Because it's closest to the Sun" } },
        { text: { id: "Karena ada kompor meledak", en: "Because a stove exploded" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Meskipun jadi planet paling dekat dengan Matahari, malam hari di Merkurius itu sangat-sangat membeku! Kok bisa? Karena Merkurius tidak punya selimut udara (atmosfer) untuk menyimpan panas.", en: "Even though it's the closest planet to the Sun, nights on Mercury are freezing cold! How come? Because Mercury doesn't have an air blanket (atmosphere) to keep the heat in." },
    facts: [
      { id: "Satu tahun di Merkurius itu sangat sebentar, hanya 88 hari! Cepat sekali karena jarak orbitnya pendek.", en: "A year on Mercury is very short, only 88 days! So fast because its orbit is short." },
      { id: "Permukaan Merkurius penuh dengan kawah bolong-bolong seperti permukaan Bulan karena sering ditabrak meteor. ☄️", en: "Mercury's surface is full of crater holes like the Moon's surface because it's often hit by meteors. ☄️" },
      { id: "Merkurius tidak punya bulan satupun untuk menemaninya.", en: "Mercury has zero moons to keep it company." }
    ],
    quranVerse: { arabic: "...", transliteration: "...", translation: { id: "...", en: "..." } },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  },
  explorer: {
    text: { id: "Perbedaan suhu di Merkurius adalah yang paling ekstrem di tata surya! HAH?! Siang hari suhunya mencapai 430°C (bisa melelehkan timah) tapi malamnya anjlok ke -180°C! Bayangkan kalau Bumi begitu? 1400 tahun lalu, Al-Qur'an menjelaskan penciptaan langit yang kokoh dan matahari sebagai pelita yang amat terang dan panas.", en: "Temperature swings on Mercury are the most extreme in the solar system! HAH?! Daytime temps reach 430°C (can melt lead) but at night plunge to -180°C! Imagine if Earth were like that? 1400 years ago, the Quran described the creation of a strong sky and the sun as a blazing, hot lamp." },
    quranVerse: {
      arabic: "وَبَنَيْنَا فَوْقَكُمْ سَبْعًا شِدَادًا ﴿١٢﴾ وَجَعَلْنَا سِرَاجًا وَهَّاجًا ﴿١٣﴾",
      transliteration: "Wa banaynā fawqakum sab'an shidādā (12). Wa ja'alnā sirājaw wahhājā (13).",
      translation: { id: "Dan Kami bangun di atas kamu tujuh buah (langit) yang kokoh. Dan Kami jadikan pelita yang amat terang (matahari).", en: "And We have built above you seven strong (heavens). And made [therein] a burning lamp." }
    },
    anatomy: [{ part: { id: "Bagian", en: "Part" }, desc: { id: "Penjelasan", en: "Explanation" } }],
    wowFactor: { id: "Fakta menakjubkan!", en: "Amazing fact!" },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  }
};

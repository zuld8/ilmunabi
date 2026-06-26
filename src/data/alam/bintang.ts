import { ObjectData } from "../objects";

export const bintangData: ObjectData = {
  slug: "bintang",
  name: { id: "Bintang", en: "Star" },
  icon: "⭐",
  category: "alam",
  type: "alam",
  scientificName: "Aster",
  surahName: "At-Tariq",
  surahReference: "86:3",
  unlockedAtPoints: 10,
  kosakata: [
    { arab: "نَجْم", latin: "Najm", arti: "Bintang", artiEn: "Star", contohAyat: "وَالنَّجْمِ إِذَا هَوَى" }
  ],
  balita: {
    text: { id: "Wah, lihat ke atas! Ada kerlap-kerlip bintang! ✨", en: "Wow, look up! There are twinkling stars! ✨" },
    audioTranscript: { id: "Bintang itu besar sekali loh, tapi karena jauuuh, jadinya terlihat kecil seperti lampu kelap-kelip.", en: "Stars are actually very big, but because they are so far away, they look like tiny twinkling lights." },
    quiz: {
      question: { id: "Kapan kita biasanya melihat bintang?", en: "When do we usually see stars?" },
      options: [
        { text: { id: "Pagi hari", en: "Morning" } },
        { text: { id: "Malam hari", en: "Night" } },
        { text: { id: "Saat hujan", en: "When it rains" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Bintang sebenarnya adalah bola gas raksasa yang sangat panas! Matahari kita juga sebuah bintang lho. Allah menciptakan bintang untuk menghiasi langit malam dan sebagai petunjuk arah.", en: "A star is actually a giant, super hot ball of gas! Our Sun is also a star. Allah created stars to decorate the night sky and as a guide for direction." },
    facts: [
      { id: "Matahari adalah bintang yang paling dekat dengan Bumi.", en: "The Sun is the closest star to Earth." },
      { id: "Warna bintang berbeda-beda, ada yang merah, kuning, dan biru! Bintang biru itu paling panas.", en: "Stars have different colors, there are red, yellow, and blue! Blue stars are the hottest." },
      { id: "Bintang digunakan nelayan zaman dulu sebagai kompas alami di malam hari.", en: "Stars were used by fishermen in the past as a natural compass at night." }
    ],
    quranVerse: { arabic: "...", transliteration: "...", translation: { id: "...", en: "..." } },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  },
  explorer: {
    text: { id: "Alam semesta punya milyaran triliun bintang! Bintang paling terang di malam hari bernama Sirius. Masya Allah, 1400 tahun lalu, Al-Qur'an sudah menyebutkan tentang bintang yang bersinar menembus kegelapan malam, yang sekarang kita tahu memancarkan cahayanya sendiri dari reaksi fusi nuklir di intinya!", en: "The universe has billions of trillions of stars! The brightest star in the night sky is Sirius. Masya Allah, 1400 years ago, the Quran already mentioned about the star of piercing brightness, which we now know emits its own light from nuclear fusion reactions in its core!" },
    quranVerse: {
      arabic: "النَّجْمُ الثَّاقِبُ",
      transliteration: "An-najmuth-thaaqib",
      translation: { id: "(yaitu) bintang yang cahayanya menembus,", en: "It is the piercing star." }
    },
    anatomy: [{ part: { id: "Bagian", en: "Part" }, desc: { id: "Penjelasan", en: "Explanation" } }],
    wowFactor: { id: "Fakta menakjubkan!", en: "Amazing fact!" },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  }
};

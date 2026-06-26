import { ObjectData } from "../objects";

export const galaksiData: ObjectData = {
  slug: "galaksi",
  name: { id: "Galaksi Bima Sakti", en: "Milky Way Galaxy" },
  icon: "🌌",
  category: "langit",
  type: "langit",
  scientificName: "Via Lactea",
  surahName: "Adh-Dhariyat",
  surahReference: "51:47",
  unlockedAtPoints: 50,
  kosakata: [
    { arab: "مَجَرَّة", latin: "Majarrah", arti: "Galaksi", artiEn: "Galaxy", contohAyat: "Galaksi adalah kumpulan bintang" }
  ],
  balita: {
    text: { id: "Wow! Ini galaksi Bima Sakti! Tempat kita tinggal! Ada banyaaak sekali bintang berkelap-kelip di sini! ✨🌀", en: "Wow! This is the Milky Way galaxy! The place we live! There are sooo many twinkling stars here! ✨🌀" },
    audioTranscript: { id: "Ini Galaksi kita, namanya Bima Sakti. Bentuknya seperti piringan yang berputar. Allah menciptakan miliaran bintang berkumpul di sini. Sangat indah ya!", en: "This is our Galaxy, called the Milky Way. It looks like a spinning disk. Allah created billions of stars gathered here. So beautiful, right!" },
    quiz: {
      question: { id: "Bentuk galaksi Bima Sakti mirip seperti apa?", en: "What does the Milky Way galaxy look like?" },
      options: [
        { text: { id: "Segitiga", en: "Triangle" } },
        { text: { id: "Kotak kado", en: "Gift box" } },
        { text: { id: "Piringan spiral berputar", en: "Spinning spiral disk" } }
      ],
      answerIdx: 2
    }
  },
  anak: {
    text: { id: "Galaksi Bima Sakti adalah kota raksasa di luar angkasa. Penduduknya bukan manusia, tapi ratusan miliar bintang, planet, gas, dan debu angkasa!", en: "The Milky Way Galaxy is a giant city in space. Its residents are not humans, but hundreds of billions of stars, planets, gas, and space dust!" },
    facts: [
      { id: "Tata surya kita (termasuk Bumi dan Matahari) berada di salah satu 'lengan' spiral pinggiran galaksi ini.", en: "Our solar system (including Earth and the Sun) is located in one of the spiral 'arms' on the edge of this galaxy." },
      { id: "Saking besarnya, butuh waktu 100.000 tahun cahaya dari satu ujung ke ujung galaksi yang lain! 🚀", en: "It's so huge that it takes 100,000 light years to cross from one end of the galaxy to the other! 🚀" },
      { id: "Galaksi kita selalu bergerak memutar di ruang angkasa membawa semua bintang bersama-sama.", en: "Our galaxy is always spinning in space, carrying all the stars together." }
    ],
    quranVerse: { arabic: "...", transliteration: "...", translation: { id: "...", en: "..." } },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  },
  explorer: {
    text: { id: "Di pusat Galaksi Bima Sakti terdapat sebuah lubang hitam supermasif (Supermassive Black Hole) bernama Sagittarius A*! HAH?! Gaya gravitasinya sangat kuat hingga menahan ratusan miliar bintang agar tidak terpencar ke mana-mana. 1400 tahun lalu, Al-Qur'an telah menyinggung tentang penciptaan alam semesta yang maha luas, kokoh, dan terus berekspansi (mengembang).", en: "At the center of the Milky Way Galaxy lies a Supermassive Black Hole named Sagittarius A*! HAH?! Its gravitational pull is so strong it holds hundreds of billions of stars together so they don't scatter. 1400 years ago, the Quran mentioned the creation of a vast, solid universe that is continuously expanding." },
    quranVerse: {
      arabic: "وَالسَّمَاءَ بَنَيْنَاهَا بِأَيْدٍ وَإِنَّا لَمُوسِعُونَ",
      transliteration: "Was-samā'a banaynāhā bi'aydin wa innā lamūsi'ūn",
      translation: { id: "Dan langit itu Kami bangun dengan kekuasaan (Kami) dan sesungguhnya Kami benar-benar meluaskannya.", en: "And the heaven We constructed with strength, and indeed, We are [its] expander." }
    },
    anatomy: [{ part: { id: "Bagian", en: "Part" }, desc: { id: "Penjelasan", en: "Explanation" } }],
    wowFactor: { id: "Fakta menakjubkan!", en: "Amazing fact!" },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  }
};

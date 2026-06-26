import { ObjectData } from "../objects";

export const gunungData: ObjectData = {
  slug: "gunung",
  name: { id: "Gunung", en: "Mountain" },
  icon: "⛰️",
  category: "alam",
  type: "alam",
  scientificName: "Mons",
  surahName: "An-Naba",
  surahReference: "78:7",
  unlockedAtPoints: 30,
  kosakata: [
    { arab: "جَبَل", latin: "Jabal", arti: "Gunung", artiEn: "Mountain", contohAyat: "وَالْجِبَالَ أَوْتَادًا" }
  ],
  balita: {
    text: { id: "Wah, gunungnya tinggi sekali menyentuh awan! ☁️", en: "Wow, the mountain is so tall it touches the clouds! ☁️" },
    audioTranscript: { id: "Gunung itu seperti batu yang selaaalu membesar sampai ke langit. Udaranya sejuk dan banyak pohon hijau.", en: "A mountain is like a rock that keeps growing all the way to the sky. The air is cool and there are many green trees." },
    quiz: {
      question: { id: "Di puncak gunung biasanya udaranya terasa...", en: "At the top of the mountain, the air usually feels..." },
      options: [
        { text: { id: "Sangat panas", en: "Very hot" } },
        { text: { id: "Sangat dingin", en: "Very cold" } },
        { text: { id: "Sangat gerah", en: "Very stuffy" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Gunung itu tinggi karena ada lempeng bumi yang bertabrakan. Di gunung banyak tersimpan air bersih yang kita minum setiap hari. Gunung juga jadi rumah bagi banyak hewan liar lho!", en: "Mountains are tall because earth's plates collide. Mountains store a lot of clean water that we drink every day. Mountains are also home to many wild animals!" },
    facts: [
      { id: "Gunung tertinggi di dunia adalah Gunung Everest, tingginya mencapai 8.848 meter!", en: "The highest mountain in the world is Mount Everest, reaching 8,848 meters!" },
      { id: "Di bawah gunung berapi ada kolam batuan cair panas yang disebut magma.", en: "Under a volcano, there is a pool of hot liquid rock called magma." },
      { id: "Ternyata gunung punya akar yang tertanam dalam di bawah tanah, seperti pasak!", en: "It turns out mountains have roots planted deep underground, like pegs!" }
    ],
    quranVerse: { arabic: "...", transliteration: "...", translation: { id: "...", en: "..." } },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  },
  explorer: {
    text: { id: "Berdasarkan geologi modern, gunung-gunung memiliki 'akar' di bawah kerak bumi yang menyeimbangkan Bumi saat berputar. Luar biasa! Al-Qur'an 1400 tahun lalu secara presisi menyebut gunung sebagai 'pasak' (awtad) yang berfungsi agar Bumi tidak oleng, sebuah fakta sains yang baru ditemukan pada abad 19!", en: "According to modern geology, mountains have 'roots' under the earth's crust that balance the Earth as it spins. Amazing! The Quran 1400 years ago precisely called mountains 'pegs' (awtad) that function to prevent the Earth from swaying, a scientific fact only discovered in the 19th century!" },
    quranVerse: {
      arabic: "وَالْجِبَالَ أَوْتَادًا",
      transliteration: "Wal-jibaala awtaadaa",
      translation: { id: "dan gunung-gunung sebagai pasak?", en: "And the mountains as pegs?" }
    },
    anatomy: [{ part: { id: "Bagian", en: "Part" }, desc: { id: "Penjelasan", en: "Explanation" } }],
    wowFactor: { id: "Fakta menakjubkan!", en: "Amazing fact!" },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  }
};

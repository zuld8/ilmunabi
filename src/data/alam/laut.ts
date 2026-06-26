import { ObjectData } from "../objects";

export const lautData: ObjectData = {
  slug: "laut",
  name: { id: "Laut", en: "Ocean" },
  icon: "🌊",
  category: "alam",
  type: "alam",
  scientificName: "Oceanus",
  surahName: "Ar-Rahman",
  surahReference: "55:19-20",
  unlockedAtPoints: 25,
  kosakata: [
    { arab: "بَحْر", latin: "Bahr", arti: "Laut", artiEn: "Sea", contohAyat: "وَهُوَ الَّذِي سَخَّرَ الْبَحْرَ" }
  ],
  balita: {
    text: { id: "Byuur! Banyak air laut yang biru dan ombak! 🐟", en: "Splash! Lots of blue seawater and waves! 🐟" },
    audioTranscript: { id: "Laut itu luas sekaliii dan rasanya asin! Di dalamnya banyak ikan kecil, hiu, dan penyu berenang-renang.", en: "The sea is sooo wide and it tastes salty! Inside, there are many small fishes, sharks, and turtles swimming around." },
    quiz: {
      question: { id: "Bagaimana rasanya air laut?", en: "How does seawater taste?" },
      options: [
        { text: { id: "Manis", en: "Sweet" } },
        { text: { id: "Asin", en: "Salty" } },
        { text: { id: "Pahit", en: "Bitter" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Tujuh puluh persen Bumi ditutupi oleh lautan air asin! Laut adalah rumah bagi ikan paus raksasa dan terumbu karang yang warna-warni. Kapal laut yang besar bisa mengapung di atasnya atas izin Allah.", en: "Seventy percent of the Earth is covered by saltwater oceans! The sea is home to giant whales and colorful coral reefs. Huge ships can float on it by Allah's permission." },
    facts: [
      { id: "Paus biru di laut adalah hewan terbesar di dunia, jantungnya sebesar mobil!", en: "The blue whale in the ocean is the largest animal in the world, its heart is as big as a car!" },
      { id: "Kita baru meneliti 5% dari dasar laut. Sisanya masih misterius!", en: "We have only explored 5% of the ocean floor. The rest is still mysterious!" },
      { id: "Fitoplankton di laut menghasilkan lebih dari separuh oksigen yang kita hirup.", en: "Phytoplankton in the sea produce over half of the oxygen we breathe." }
    ],
    quranVerse: { arabic: "...", transliteration: "...", translation: { id: "...", en: "..." } },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  },
  explorer: {
    text: { id: "Di beberapa tempat, ada dua lautan yang airnya saling bertemu tapi tidak bercampur karena perbedaan kepadatan air! Fenomena ini dinamakan halocline. Subhanallah, Al-Qur'an 1400 tahun lalu sudah menyebutkan ada batas di antara dua laut yang bertemu, yang tidak bisa dilampaui keduanya!", en: "In some places, there are two seas whose waters meet but do not mix due to differences in water density! This phenomenon is called a halocline. Subhanallah, 1400 years ago the Quran mentioned a barrier between two seas that meet, which neither can transgress!" },
    quranVerse: {
      arabic: "مَرَجَ الْبَحْرَيْنِ يَلْتَقِيَانِ ۝ بَيْنَهُمَا بَرْزَخٌ لَا يَبْغِيَانِ",
      transliteration: "Marajal-bahrayni yaltaqiyaan. Baynahumaa barzakhul laa yabghiyaan",
      translation: { id: "Dia membiarkan dua lautan mengalir yang keduanya kemudian bertemu. Antara keduanya ada batas yang tidak dilampaui oleh masing-masing.", en: "He released the two seas, meeting [side by side]; Between them is a barrier [so] neither of them transgresses." }
    },
    anatomy: [{ part: { id: "Bagian", en: "Part" }, desc: { id: "Penjelasan", en: "Explanation" } }],
    wowFactor: { id: "Fakta menakjubkan!", en: "Amazing fact!" },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  }
};

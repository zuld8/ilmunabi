import { ObjectData } from "../objects";

export const ayamData: ObjectData = {
  slug: "ayam",
  name: { id: "Ayam", en: "Chicken" },
  icon: "🐔",
  category: "hewan",
  type: "hewan",
  scientificName: "Gallus gallus domesticus",
  surahName: "Al-Waqi'ah",
  surahReference: "56:21",
  unlockedAtPoints: 10,
  kosakata: [
    { arab: "دَجَاجَةٌ", latin: "dajaajah", arti: "Ayam", artiEn: "Chicken", contohAyat: "وَلَحْمِ طَيْرٍ مِمَّا يَشْتَهُونَ (dan daging burung dari apa yang mereka inginkan)" }
  ],
  balita: {
    text: { id: "Petok petok! 🐔 Ayam suka berkokok di pagi hari. Telurnya enak lho!", en: "Cluck cluck! 🐔 Chickens crow in the morning. Their eggs are yummy!" },
    audioTranscript: { id: "Halo teman! Aku ayam. Aku suka makan biji-bijian dan bertelur. Kamu suka makan telur ayam tidak?", en: "Hello friends! I am a chicken. I like eating seeds and laying eggs. Do you like eating chicken eggs?" },
    quiz: {
      question: { id: "Suara apa yang dikeluarkan ayam di pagi hari?", en: "What sound does a chicken make in the morning?" },
      options: [
        { text: { id: "Moo moo", en: "Moo moo" } },
        { text: { id: "Kukuruyuk", en: "Cock-a-doodle-doo" } },
        { text: { id: "Meong", en: "Meow" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Tahukah kamu? Ayam itu keturunan burung T-Rex purba lho! Mereka juga punya pendengaran yang super tajam meskipun telinganya tertutup bulu. Masya Allah!", en: "Did you know? Chickens are descendants of the ancient T-Rex! They also have super sharp hearing even though their ears are covered in feathers. Mashallah!" },
    facts: [
      { id: "Ayam bisa mengingat lebih dari 100 wajah teman-temannya! 🧠", en: "Chickens can remember more than 100 faces of their friends! 🧠" },
      { id: "Mata ayam bisa melihat warna jauh lebih baik dari manusia! 🌈", en: "A chicken's eyes can see colors much better than humans! 🌈" },
      { id: "Induk ayam selalu berbicara kepada anak-anaknya saat mereka masih di dalam telur! 🐣", en: "Mother chickens talk to their chicks while they are still in the egg! 🐣" }
    ],
    quranVerse: { arabic: "...", transliteration: "...", translation: { id: "...", en: "..." } },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  },
  explorer: {
    text: { id: "Sains menemukan bahwa ayam sangat pintar dan punya alat komunikasi yang kompleks. Allah menciptakan berbagai jenis unggas dan burung sebagai rezeki bagi manusia, termasuk telur dan dagingnya yang kaya protein. Di surga pun, Allah menjanjikan daging burung (termasuk ayam-ayaman) untuk orang yang beriman!", en: "Science discovered that chickens are very smart and have complex communication. Allah created various types of fowls and birds as sustenance for humans, including their protein-rich eggs and meat. In paradise, Allah promises the meat of fowls for the believers!" },
    quranVerse: {
      arabic: "وَلَحْمِ طَيْرٍ مِمَّا يَشْتَهُونَ",
      transliteration: "Wa lahmi tairin mimmaa yashtahuun",
      translation: { id: "Dan daging burung dari apa yang mereka inginkan.", en: "And the meat of fowls, from whatever they desire." }
    },
    anatomy: [{ part: { id: "Bagian", en: "Part" }, desc: { id: "Penjelasan", en: "Explanation" } }],
    wowFactor: { id: "Fakta menakjubkan!", en: "Amazing fact!" },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  }
};

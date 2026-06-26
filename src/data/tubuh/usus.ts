import { ObjectData } from "../objects";

export const ususData: ObjectData = {
  slug: "usus",
  name: { id: "Usus", en: "Intestines" },
  icon: "🪱",
  category: "tubuh",
  type: "tubuh",
  scientificName: "Intestinum",
  surahName: "Muhammad",
  surahReference: "47:15",
  unlockedAtPoints: 25,
  kosakata: [
    { arab: "أَمْعَاء", latin: "am'aa", arti: "Usus-usus", artiEn: "Intestines", contohAyat: "فَقَطَّعَ أَمْعَاءَهُمْ" }
  ],
  balita: {
    text: { id: "Usus kita seperti selang panjang di perut! 🪱", en: "Our intestine is like a long hose in the tummy! 🪱" },
    audioTranscript: { id: "Setelah dari lambung, makanan masuk ke usus. Usus mengambil vitamin supaya tubuh sehat, lalu sisa makanannya jadi pup!", en: "After the stomach, food goes to the intestines. Intestines take vitamins so the body is healthy, then the leftovers become poop!" },
    quiz: {
      question: { id: "Jadi apakah makanan setelah selesai di usus?", en: "What does food become after finishing in the intestines?" },
      options: [
        { text: { id: "Jadi pup (kotoran)", en: "Becomes poop" } },
        { text: { id: "Jadi keringat", en: "Becomes sweat" } },
        { text: { id: "Jadi rambut", en: "Becomes hair" } }
      ],
      answerIdx: 0
    }
  },
  anak: {
    text: { id: "Percaya nggak, di dalam perutmu ada tabung panjang yang dilipat-lipat? Namanya usus! Kalau dibentangkan, panjang usus orang dewasa bisa sampai 7 meter lho! Usus menyerap semua makanan enak yang kamu makan dan mengubah sisanya menjadi kotoran.", en: "Believe it or not, in your belly there's a long folded tube? It's called the intestines! If stretched out, an adult's intestine can be up to 7 meters long! The intestines absorb all the yummy food you eat and turn the rest into waste." },
    facts: [
      { id: "Makanan butuh waktu seharian untuk melewati seluruh ususmu!", en: "Food takes a whole day to travel through your entire intestines!" },
      { id: "Di usus ada triliunan bakteri baik yang bantu kita cerna makanan.", en: "In the intestines there are trillions of good bacteria that help us digest food." },
      { id: "Usus kecil ukurannya panjang, usus besar ukurannya lebih pendek tapi lebih lebar.", en: "The small intestine is long, the large intestine is shorter but wider." }
    ],
    quranVerse: { arabic: "...", transliteration: "...", translation: { id: "...", en: "..." } },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  },
  explorer: {
    text: { id: "Sistem usus terdiri dari usus halus (menyerat nutrisi) dan usus besar (menyerap air). Permukaan usus halus dipenuhi 'villi' mikroskopis yang memperluas area penyerapan hingga seukuran lapangan tenis! Di akhirat, Al-Qur'an memberi perumpamaan betapa siksanya air panas yang mendidih hingga memotong-motong usus penghuni neraka.", en: "The intestinal system consists of the small intestine (nutrient absorption) and the large intestine (water absorption). The surface of the small intestine is covered with microscopic 'villi' that expand the absorption area to the size of a tennis court! In the afterlife, the Quran gives a parable of how agonizing the boiling hot water is, tearing the intestines of the inhabitants of Hell." },
    quranVerse: {
      arabic: "وَسُقُوا مَاءً حَمِيمًا فَقَطَّعَ أَمْعَاءَهُمْ",
      transliteration: "Wa suquu maa'an hamiiman fa qaththa'a am'aa'ahum",
      translation: { id: "Dan diberi minuman dengan air yang mendidih sehingga memotong-motong ususnya?", en: "And are given to drink scalding water that will sever their intestines?" }
    },
    anatomy: [{ part: { id: "Bagian", en: "Part" }, desc: { id: "Penjelasan", en: "Explanation" } }],
    wowFactor: { id: "Fakta menakjubkan!", en: "Amazing fact!" },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  }
};
import { ObjectData } from "../objects";

export const delimaData: ObjectData = {
  slug: "delima",
  name: { id: "Delima", en: "Pomegranate" },
  icon: "🍎", 
  category: "tumbuhan",
  type: "tumbuhan",
  scientificName: "Punica granatum",
  surahName: "Ar-Rahman",
  surahReference: "55:68",
  unlockedAtPoints: 10,
  kosakata: [
    { arab: "رُمَّان", latin: "Rummān", arti: "Delima", artiEn: "Pomegranate", contohAyat: "Delima adalah buah surga." }
  ],
  balita: {
    text: { id: "Wow, buah ini berwarna merah! Kalau kita belah, di dalamnya ada banyak sekali biji merah yang bersinar seperti permata! Manis dan asam rasanya.", en: "Wow, this fruit is red! If we cut it open, inside there are many red seeds shining like jewels! It tastes sweet and sour." },
    audioTranscript: { id: "Delima itu buah yang di dalamnya banyak biji-biji merah yang enak.", en: "Pomegranate is a fruit with many delicious red seeds inside." },
    quiz: {
      question: { id: "Apa isi dari dalam buah delima saat dipotong?", en: "What is inside a pomegranate when cut?" },
      options: [
        { text: { id: "Satu biji yang sangat besar", en: "One very big seed" } },
        { text: { id: "Banyak biji kecil berwarna merah", en: "Many small red seeds" } },
        { text: { id: "Tidak ada bijinya", en: "No seeds" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Delima adalah buah yang sangat spesial! Di dalam satu buah delima, bisa ada ratusan biji kecil yang diselimuti daging buah manis berair. Allah menyebut buah delima dalam Al-Qur'an sebagai salah satu buah yang ada di surga, lho! Delima sangat sehat untuk tubuh kita.", en: "The pomegranate is a very special fruit! Inside one pomegranate, there can be hundreds of tiny seeds covered in sweet juicy flesh. Allah mentions pomegranates in the Quran as one of the fruits in heaven! Pomegranates are very healthy for our body." },
    facts: [
      { id: "Nama delima disebut 3 kali di dalam Al-Qur'an.", en: "The name pomegranate is mentioned 3 times in the Quran." },
      { id: "Biji merah berair di dalam delima disebut 'aril'.", en: "The red juicy seeds inside a pomegranate are called 'arils'." },
      { id: "Satu buah delima bisa berisi 600 sampai 1400 biji!", en: "One pomegranate can contain 600 to 1400 seeds!" }
    ],
    quranVerse: {
      arabic: "فِيهِمَا فَاكِهَةٌ وَنَخْلٌ وَرُمَّانٌ",
      transliteration: "Fīhimā fākihatun wa nakhlun wa rummānun",
      translation: { id: "Di dalam keduanya (surga itu) ada buah-buahan dan pohon kurma dan delima.", en: "In both of them (gardens of heaven) are fruit and palm trees and pomegranates." },
      context: { id: "Allah menjanjikan buah delima di surga karena kelezatan dan keindahannya.", en: "Allah promises pomegranates in heaven due to their deliciousness and beauty." }
    },
    quiz: {
      question: { id: "Di mana kita bisa menemukan buah delima seperti yang disebutkan Al-Qur'an?", en: "Where can we find pomegranates as mentioned in the Quran?" },
      options: [
        { text: { id: "Di surga", en: "In heaven" } },
        { text: { id: "Di bulan", en: "On the moon" } },
        { text: { id: "Di bawah laut", en: "Under the sea" } }
      ],
      answerIdx: 0
    }
  },
  explorer: {
    text: { id: "Membelah buah delima adalah pengalaman yang menakjubkan. Biji-bijinya tersusun sangat rapi di ruang-ruang terpisah oleh selaput putih yang tipis. Kerapian ini adalah keagungan desain dari Allah SWT. Delima kaya akan antioksidan, zat yang memperbaiki sel-sel tubuh yang rusak, menjadikannya 'superfood' sejati dari alam.", en: "Cutting open a pomegranate is an amazing experience. The seeds are arranged very neatly in chambers separated by thin white membranes. This neatness is the majesty of design from Allah SWT. Pomegranates are rich in antioxidants, substances that repair damaged body cells, making it a true 'superfood' from nature." },
    anatomy: [
      { part: { id: "Aril (Aril)", en: "Aril" }, desc: { id: "Bagian merah berair di sekitar biji yang kita makan.", en: "The juicy red part around the seed that we eat." } },
      { part: { id: "Albedo (Selaput)", en: "Albedo" }, desc: { id: "Selaput putih yang memisahkan aril menjadi ruangan-ruangan.", en: "The white membrane that separates the arils into chambers." } }
    ],
    wowFactor: { id: "Meskipun kulit delima terasa pahit dan tebal, kulitnya ternyata memiliki zat anti bakteri yang bisa membunuh kuman kuat lho!", en: "Even though pomegranate skin tastes bitter and thick, it actually has antibacterial properties that can kill strong germs!" },
    quranVerse: {
      arabic: "وَالرُّمَّانَ مُشْتَبِهًا وَغَيْرَ مُتَشَابِهٍ",
      transliteration: "Wal-rummāna mushtabihan wa ghayra mutashābihin",
      translation: { id: "...dan (juga) buah delima yang serupa dan yang tidak serupa...", en: "...and pomegranates, similar and dissimilar..." }
    },
    quiz: [
      {
        question: { id: "Apa istilah untuk bagian merah berair yang kita makan pada buah delima?", en: "What is the term for the red juicy part we eat in a pomegranate?" },
        options: [
          { text: { id: "Albedo", en: "Albedo" } },
          { text: { id: "Aril", en: "Aril" } },
          { text: { id: "Klorofil", en: "Chlorophyll" } }
        ],
        answerIdx: 1
      }
    ]
  }
};

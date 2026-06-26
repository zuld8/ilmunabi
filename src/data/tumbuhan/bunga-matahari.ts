import { ObjectData } from "../objects";

export const bungaMatahariData: ObjectData = {
  slug: "bunga-matahari",
  name: { id: "Bunga Matahari", en: "Sunflower" },
  icon: "🌻",
  category: "tumbuhan",
  type: "tumbuhan",
  scientificName: "Helianthus annuus",
  surahName: "Al-Baqarah",
  surahReference: "2:164",
  unlockedAtPoints: 60,
  kosakata: [
    { arab: "دَوَّارُ الشَّمْسِ", latin: "dawwaarusy syamsi", arti: "Bunga Matahari", artiEn: "Sunflower", contohAyat: "Bunga matahari menatap matahari." }
  ],
  balita: {
    text: { id: "Wah, bunganya besar sekali, warnanya kuning cerah seperti matahari! 🌻", en: "Wow, the flower is so big, bright yellow like the sun! 🌻" },
    audioTranscript: { id: "Bunga matahari bentuknya sangat cantik. Biji-bijinya bisa dipanggang jadi kuaci yang enak, kriuk kriuk kriuk!", en: "Sunflowers have a very beautiful shape. Their seeds can be roasted into delicious sunflower seeds, crunch crunch crunch!" },
    quiz: {
      question: { id: "Biji bunga matahari bisa dibuat jadi camilan apa?", en: "What snack can sunflower seeds be made into?" },
      options: [
        { text: { id: "Permen", en: "Candy" } },
        { text: { id: "Kuaci", en: "Sunflower seeds (Kuaci)" } },
        { text: { id: "Cokelat", en: "Chocolate" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Bunga matahari punya keajaiban lho! Saat pagi, bunganya akan bergerak menghadap ke arah matahari terbit dan terus mengikutinya sampai terbenam. Namanya heliotropisme. Pintar sekali ya tanaman ini!", en: "Sunflowers have magic! In the morning, the flower will move to face the sunrise and keep following it until sunset. It's called heliotropism. This plant is so smart!" },
    facts: [
      { id: "Satu bunga matahari sebenarnya terdiri dari ribuan bunga kecil di bagian tengahnya.", en: "A sunflower actually consists of thousands of tiny flowers in its center." },
      { id: "Tinggi bunga matahari bisa mencapai lebih dari 3 meter!", en: "The height of a sunflower can reach over 3 meters!" },
      { id: "Bunga ini digunakan untuk menyerap radiasi beracun di tanah.", en: "This flower is used to absorb toxic radiation in the soil." }
    ],
    quranVerse: { arabic: "...", transliteration: "...", translation: { id: "...", en: "..." } },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  },
  explorer: {
    text: { id: "Setiap bagian dari bunga matahari mengikuti pola matematika luar biasa yang disebut 'deret Fibonacci' pada biji-bijinya. Desain melengkung ini memastikan bahwa sebanyak mungkin biji bisa tumbuh di tengah bunga. Tidak ada yang kebetulan di alam semesta, ini adalah bukti kehebatan desain luar biasa dari Allah yang Maha Teliti (Al-Khabir)!", en: "Every part of the sunflower follows an incredible mathematical pattern called the 'Fibonacci sequence' on its seeds. This curved design ensures that as many seeds as possible can grow in the center of the flower. Nothing is a coincidence in the universe, this is proof of the incredible design greatness of Allah the All-Aware (Al-Khabir)!" },
    quranVerse: {
      arabic: "إِنَّا كُلَّ شَيْءٍ خَلَقْنَاهُ بِقَدَرٍ",
      transliteration: "Innā kulla shay'in khalaqnāhu biqadar",
      translation: { id: "Sesungguhnya Kami menciptakan segala sesuatu menurut ukuran.", en: "Indeed, all things We created with predestination." }
    },
    anatomy: [{ part: { id: "Bagian", en: "Part" }, desc: { id: "Penjelasan", en: "Explanation" } }],
    wowFactor: { id: "Fakta menakjubkan!", en: "Amazing fact!" },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  }
};

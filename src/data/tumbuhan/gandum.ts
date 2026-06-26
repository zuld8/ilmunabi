import { ObjectData } from "../objects";

export const gandumData: ObjectData = {
  slug: "gandum",
  name: { id: "Gandum", en: "Wheat" },
  icon: "🌾",
  category: "tumbuhan",
  type: "tumbuhan",
  scientificName: "Triticum",
  surahName: "Al-Baqarah",
  surahReference: "2:261",
  unlockedAtPoints: 80,
  kosakata: [
    { arab: "قَمْحٌ", latin: "qamhun", arti: "Gandum", artiEn: "Wheat", contohAyat: "Roti dari gandum." }
  ],
  balita: {
    text: { id: "Rumput emas yang tertiup angin ini namanya Gandum! 🌾", en: "This golden grass blown by the wind is called Wheat! 🌾" },
    audioTranscript: { id: "Gandum itu akan digiling sampai halus menjadi tepung. Dari tepung gandum, kita bisa buat roti yang enak, donat, dan mie. Nyam nyam!", en: "Wheat will be ground until smooth to become flour. From wheat flour, we can make delicious bread, donuts, and noodles. Yum yum!" },
    quiz: {
      question: { id: "Gandum digiling menjadi apa sebelum dibuat kue?", en: "What is wheat ground into before baking a cake?" },
      options: [
        { text: { id: "Pasir", en: "Sand" } },
        { text: { id: "Tepung", en: "Flour" } },
        { text: { id: "Garam", en: "Salt" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Gandum adalah tanaman yang sangat penting bagi manusia di seluruh dunia! Bagian dari gandum yang kita makan adalah bulir atau bijinya yang kaya karbohidrat untuk memberi kita tenaga super sepanjang hari.", en: "Wheat is a very important plant for humans around the world! The part of wheat that we eat is the grain or seed which is rich in carbohydrates to give us super energy all day." },
    facts: [
      { id: "Satu benih gandum bisa tumbuh menghasilkan puluhan biji gandum baru.", en: "One wheat seed can grow to produce dozens of new wheat grains." },
      { id: "Gandum adalah makanan pokok terbanyak di seluruh dunia setelah beras dan jagung.", en: "Wheat is the most abundant staple food worldwide after rice and corn." },
      { id: "Gandum butuh cahaya matahari yang panas agar bisa matang dan berwarna keemasan.", en: "Wheat needs hot sunlight to ripen and turn golden." }
    ],
    quranVerse: { arabic: "...", transliteration: "...", translation: { id: "...", en: "..." } },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  },
  explorer: {
    text: { id: "Perkembangbiakan luar biasa dari sebutir biji ini sering diabadikan. Allah mengumpamakan pahala orang yang gemar bersedekah di jalan Allah seperti sebutir benih gandum yang menumbuhkan tujuh tangkai, pada setiap tangkai ada seratus biji. Masya Allah, dari satu kebaikan bisa dibalas 700 kali lipat oleh Allah!", en: "The incredible reproduction of a single seed is often immortalized. Allah compares the reward of those who spend their wealth in the way of Allah to a grain of wheat that grows seven ears, in every ear a hundred grains. Masya Allah, from one good deed, Allah can reward 700 times!" },
    quranVerse: {
      arabic: "مَثَلُ الَّذِينَ يُنْفِقُونَ أَمْوَالَهُمْ فِي سَبِيلِ اللَّهِ كَمَثَلِ حَبَّةٍ أَنْبَتَتْ سَبْعَ سَنَابِلَ فِي كُلِّ سُنْبُلَةٍ مِائَةُ حَبَّةٍ",
      transliteration: "Mathalul-ladhīna yunfiqūna amwālahum fī sabīlil-lāhi kamathali ḥabbatin anbatat sab'a sanābila fī kulli sunbulatin mi'atu ḥabbat",
      translation: { id: "Perumpamaan (nafkah yang dikeluarkan oleh) orang-orang yang menafkahkan hartanya di jalan Allah adalah serupa dengan sebutir benih yang menumbuhkan tujuh bulir, pada tiap-tiap bulir seratus biji.", en: "The example of those who spend their wealth in the way of Allah is like a seed [of grain] which grows seven spikes; in each spike is a hundred grains." }
    },
    anatomy: [{ part: { id: "Bagian", en: "Part" }, desc: { id: "Penjelasan", en: "Explanation" } }],
    wowFactor: { id: "Fakta menakjubkan!", en: "Amazing fact!" },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  }
};

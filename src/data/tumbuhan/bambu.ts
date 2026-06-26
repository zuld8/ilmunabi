import { ObjectData } from "../objects";

export const bambuData: ObjectData = {
  slug: "bambu",
  name: { id: "Bambu", en: "Bamboo" },
  icon: "🎋",
  category: "tumbuhan",
  type: "tumbuhan",
  scientificName: "Bambusoideae",
  surahName: "Al-Baqarah",
  surahReference: "2:164",
  unlockedAtPoints: 30,
  kosakata: [
    { arab: "خَيْزُرَانٌ", latin: "khayzuraanun", arti: "Bambu", artiEn: "Bamboo", contohAyat: "Bambu yang kuat." }
  ],
  balita: {
    text: { id: "Wow, pohonnya tinggi, kurus, dan warnanya hijau! 🎋", en: "Wow, the tree is tall, skinny, and green! 🎋" },
    audioTranscript: { id: "Bambu berbunyi krak-krak saat tertiup angin kencang. Hewan lucu panda sangat suka makan daun bambu, nyam nyam!", en: "Bamboo makes a crack-crack sound when blown by strong winds. The cute panda loves to eat bamboo leaves, yum yum!" },
    quiz: {
      question: { id: "Hewan apa yang suka sekali makan bambu?", en: "Which animal really likes eating bamboo?" },
      options: [
        { text: { id: "Panda", en: "Panda" } },
        { text: { id: "Kucing", en: "Cat" } },
        { text: { id: "Ayam", en: "Chicken" } }
      ],
      answerIdx: 0
    }
  },
  anak: {
    text: { id: "Tahukah kamu? Bambu itu sebetulnya bukan pohon besar, melainkan rumput raksasa! Bambu adalah salah satu tanaman yang tumbuhnya paling cepat di dunia.", en: "Did you know? Bamboo is actually not a big tree, but giant grass! Bamboo is one of the fastest-growing plants in the world." },
    facts: [
      { id: "Bambu bisa tumbuh setinggi badanmu cuma dalam satu hari!", en: "Bamboo can grow as tall as you in just one day!" },
      { id: "Bambu lebih kuat dari baja dalam menahan gaya tarik.", en: "Bamboo is stronger than steel in withstanding tensile force." },
      { id: "Manusia sudah menggunakan bambu untuk membuat rumah, jembatan, dan alat musik.", en: "Humans have used bamboo to make houses, bridges, and musical instruments." }
    ],
    quranVerse: { arabic: "...", transliteration: "...", translation: { id: "...", en: "..." } },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  },
  explorer: {
    text: { id: "Pernahkah kamu melihat bagaimana lenturnya bambu saat diterpa angin kencang? Bambu tidak mudah patah karena strukturnya yang beruas-ruas lentur namun sangat kuat. Allah menciptakan alam dengan keseimbangan luar biasa. Bambu mengajarkan kita tentang ketahanan dan kelenturan, sebuah desain luar biasa dari Sang Khalik!", en: "Have you ever seen how flexible bamboo is when hit by strong winds? Bamboo doesn't break easily because of its flexible yet very strong jointed structure. Allah created nature with incredible balance. Bamboo teaches us about resilience and flexibility, an amazing design from the Creator!" },
    quranVerse: {
      arabic: "وَخَلَقَ كُلَّ شَيْءٍ فَقَدَّرَهُ تَقْدِيرًا",
      transliteration: "Wa khalaqa kulla shay'in faqaddarahu taqdīrā",
      translation: { id: "Dan Dia telah menciptakan segala sesuatu, dan Dia menetapkan ukuran-ukurannya dengan serapi-rapinya.", en: "And He has created each thing and determined it with [precise] determination." }
    },
    anatomy: [{ part: { id: "Bagian", en: "Part" }, desc: { id: "Penjelasan", en: "Explanation" } }],
    wowFactor: { id: "Fakta menakjubkan!", en: "Amazing fact!" },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  }
};

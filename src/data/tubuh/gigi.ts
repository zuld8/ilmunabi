import { ObjectData } from "../objects";

export const gigiData: ObjectData = {
  slug: "gigi",
  name: { id: "Gigi", en: "Tooth" },
  icon: "🦷",
  category: "tubuh",
  type: "tubuh",
  scientificName: "Dentes",
  surahName: "At-Tin",
  surahReference: "95:4",
  unlockedAtPoints: 5,
  kosakata: [
    { arab: "سِنٌ", latin: "sinnun", arti: "Gigi", artiEn: "Tooth", contohAyat: "وَالسِّنَّ بِالسِّنِّ" }
  ],
  balita: {
    text: { id: "Kres kres! Gigiku kuat buat gigit apel! 🦷", en: "Crunch crunch! My teeth are strong to bite apples! 🦷" },
    audioTranscript: { id: "Gigi kita putih dan keras! Kita pakai gigi untuk mengunyah makanan. Jangan lupa sikat gigi sebelum tidur ya, biar kuman tidak gigit gigimu!", en: "Our teeth are white and hard! We use teeth to chew food. Don't forget to brush your teeth before bed, so germs don't bite your teeth!" },
    quiz: {
      question: { id: "Kapan kita harus menyikat gigi?", en: "When should we brush our teeth?" },
      options: [
        { text: { id: "Hanya saat ulang tahun", en: "Only on birthdays" } },
        { text: { id: "Setelah makan dan sebelum tidur", en: "After eating and before bed" } },
        { text: { id: "Tidak pernah", en: "Never" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Gigi kita adalah bagian paling keras di tubuh, bahkan lebih keras dari tulang! Ada gigi seri untuk memotong, gigi taring untuk merobek, dan gigi geraham untuk menumbuk makanan. Rasulullah ﷺ sangat suka bersiwak (menyikat gigi) supaya mulutnya selalu bersih lho!", en: "Our teeth are the hardest part of the body, even harder than bones! There are incisors to cut, canines to tear, and molars to grind food. The Prophet ﷺ really loved to use the siwak (brush teeth) so his mouth was always clean!" },
    facts: [
      { id: "Manusia punya dua set gigi: gigi susu anak dan gigi tetap dewasa.", en: "Humans have two sets of teeth: baby teeth and adult teeth." },
      { id: "Email (lapisan luar) gigi adalah zat terkeras di tubuh manusia.", en: "Enamel (outer layer) of the tooth is the hardest substance in the human body." },
      { id: "Gigi kita tidak bisa menyembuhkan dirinya sendiri seperti kulit.", en: "Our teeth cannot heal themselves like skin." }
    ],
    quranVerse: { arabic: "...", transliteration: "...", translation: { id: "...", en: "..." } },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  },
  explorer: {
    text: { id: "Struktur gigi dilapisi oleh enamel yang mengandung mineral kalsium fosfat tinggi. Gigi dirancang sedemikian rupa dengan berbagai bentuk (heterodont) agar manusia bisa mengonsumsi berbagai jenis makanan (omnivora). Susunan bentuk fisik paling sempurna dari Allah!", en: "The tooth structure is coated with enamel which contains high calcium phosphate minerals. Teeth are designed in various shapes (heterodont) so humans can consume various types of food (omnivore). The most perfect physical arrangement from Allah!" },
    quranVerse: {
      arabic: "لَقَدْ خَلَقْنَا الْإِنسَانَ فِي أَحْسَنِ تَقْوِيمٍ",
      transliteration: "Laqad khalaqnal insaana fii ahsani taqwiim",
      translation: { id: "Sesungguhnya Kami telah menciptakan manusia dalam bentuk yang sebaik-baiknya.", en: "We have certainly created man in the best of stature." }
    },
    anatomy: [{ part: { id: "Bagian", en: "Part" }, desc: { id: "Penjelasan", en: "Explanation" } }],
    wowFactor: { id: "Fakta menakjubkan!", en: "Amazing fact!" },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  }
};
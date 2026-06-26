import { ObjectData } from "../objects";

export const hatiData: ObjectData = {
  slug: "hati",
  name: { id: "Hati", en: "Liver" },
  icon: "🫀",
  category: "tubuh",
  type: "tubuh",
  scientificName: "Hepar",
  surahName: "Al-Infithar",
  surahReference: "82:7-8",
  unlockedAtPoints: 40,
  kosakata: [
    { arab: "كَبِدٌ", latin: "kabidun", arti: "Hati (Liver)", artiEn: "Liver", contohAyat: "-" }
  ],
  balita: {
    text: { id: "Hati kita itu pabrik super di dalam tubuh! 🫀", en: "Our liver is a super factory inside the body! 🫀" },
    audioTranscript: { id: "Hati menjaga kita supaya tidak sakit karena racun. Dia juga menyimpan makanan untuk tubuh kita. Hati sangat rajin bekerja!", en: "The liver keeps us from getting sick from poisons. It also stores food for our body. The liver works very hard!" },
    quiz: {
      question: { id: "Hati bekerja seperti apa di tubuh kita?", en: "What does the liver act like in our body?" },
      options: [
        { text: { id: "Pabrik super", en: "Super factory" } },
        { text: { id: "Mobil", en: "Car" } },
        { text: { id: "Mainan", en: "Toy" } }
      ],
      answerIdx: 0
    }
  },
  anak: {
    text: { id: "Hati atau liver adalah organ dalam paling besar! Hati membersihkan racun berbahaya, menyimpan vitamin, dan menghasilkan cairan empedu yang menghancurkan lemak makanan. Ajaibnya, jika terpotong sebagian, hati bisa tumbuh kembali seperti cicak yang ekornya tumbuh lagi!", en: "The liver is the largest internal organ! It cleans dangerous toxins, stores vitamins, and produces bile to break down food fat. Amazingly, if partially cut, the liver can grow back just like a lizard growing its tail back!" },
    facts: [
      { id: "Hati memiliki lebih dari 500 fungsi penting di tubuh kita!", en: "The liver has over 500 important functions in our body!" },
      { id: "Hati adalah satu-satunya organ tubuh yang bisa meregenerasi (tumbuh kembali).", en: "The liver is the only organ in the body that can regenerate (grow back)." },
      { id: "Berat hati orang dewasa sekitar 1,5 kilogram.", en: "An adult's liver weighs about 1.5 kilograms." }
    ],
    quranVerse: { arabic: "...", transliteration: "...", translation: { id: "...", en: "..." } },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  },
  explorer: {
    text: { id: "Hati (hepar) menetralkan toksin dan mengatur metabolisme glukosa. Jika hati rusak, tubuh akan keracunan kotorannya sendiri. Penciptaan organ multitalenta yang menjaga keseimbangan kimia darah ini adalah bukti kekuasaan Allah yang menyusun tubuh manusia dengan sempurna.", en: "The liver (hepar) neutralizes toxins and regulates glucose metabolism. If the liver fails, the body will be poisoned by its own waste. The creation of this multitalented organ that maintains the chemical balance of the blood is proof of Allah's power who fashioned the human body perfectly." },
    quranVerse: {
      arabic: "الَّذِي خَلَقَكَ فَسَوَّاكَ فَعَدَلَكَ",
      transliteration: "Alladzi khalaqaka fasawwaaka fa'adalak",
      translation: { id: "Yang telah menciptakan kamu lalu menyempurnakan kejadianmu dan menjadikan (susunan tubuh)mu seimbang.", en: "Who created you, proportioned you, and balanced you." }
    },
    anatomy: [{ part: { id: "Bagian", en: "Part" }, desc: { id: "Penjelasan", en: "Explanation" } }],
    wowFactor: { id: "Fakta menakjubkan!", en: "Amazing fact!" },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  }
};
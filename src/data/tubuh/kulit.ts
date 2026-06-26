import { ObjectData } from "../objects";

export const kulitData: ObjectData = {
  slug: "kulit",
  name: { id: "Kulit", en: "Skin" },
  icon: "🖐️",
  category: "tubuh",
  type: "tubuh",
  scientificName: "Integumentary system",
  surahName: "Al-Infitar",
  surahReference: "82:7-8",
  unlockedAtPoints: 10,
  kosakata: [
    { arab: "جِلْدٌ", latin: "jildun", arti: "Kulit", artiEn: "Skin", contohAyat: "كُلَّمَا نَضِجَتْ جُلُودُهُم..." }
  ],
  balita: {
    text: { id: "Wah, kulit kita halus dan hangat! 🖐️", en: "Wow, our skin is smooth and warm! 🖐️" },
    audioTranscript: { id: "Kulit melindungi tubuh kita seperti baju ajaib yang nempel terus. Bisa merasakan panas, dingin, dan juga pelukan!", en: "Skin protects our body like a magic shirt that sticks to us. It can feel heat, cold, and hugs!" },
    quiz: {
      question: { id: "Apa yang membuat kita bisa merasakan es yang dingin?", en: "What helps us feel cold ice?" },
      options: [
        { text: { id: "Mata", en: "Eyes" } },
        { text: { id: "Kulit", en: "Skin" } },
        { text: { id: "Rambut", en: "Hair" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Kulit adalah organ terbesar di tubuh kita! Ia seperti tameng yang sangat kuat melawan kuman dan air. Tanpa kulit, organ di dalam kita bisa berhamburan lho! Keren banget kan ciptaan Allah?", en: "Skin is the largest organ in our body! It's like a very strong shield against germs and water. Without skin, our inside organs would spill out! How cool is Allah's creation?" },
    facts: [
      { id: "Kulit manusia terus berganti setiap bulan!", en: "Human skin constantly renews every month!" },
      { id: "Kulit menghasilkan vitamin D saat kena sinar matahari.", en: "Skin makes vitamin D when exposed to sunlight." },
      { id: "Meskipun terlihat tipis, kulit sangat elastis dan tahan air.", en: "Although it looks thin, skin is very elastic and waterproof." }
    ],
    quranVerse: { arabic: "...", transliteration: "...", translation: { id: "...", en: "..." } },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  },
  explorer: {
    text: { id: "Kulit adalah keajaiban pelindung super! Lapisan luarnya (epidermis) setipis kertas, namun mampu menahan bakteri. Lapisan dalamnya (dermis) punya saraf yang mendeteksi setiap sentuhan. Hebatnya, Allah menjadikan kulit sebagai saksi di hari kiamat, dan menyempurnakan bentuk tubuh kita dengan kulit yang menutupi rapi.", en: "The skin is a super protective miracle! Its outer layer (epidermis) is paper-thin but stops bacteria. The inner layer (dermis) has nerves that detect every touch. Amazingly, Allah made the skin a witness on the Day of Judgment, and perfected our body shape with skin covering it neatly." },
    quranVerse: {
      arabic: "الَّذِي خَلَقَكَ فَسَوَّاكَ فَعَدَلَكَ",
      transliteration: "Alladzi khalaqaka fasawwaaka fa'adalak",
      translation: { id: "Yang telah menciptakan kamu lalu menyempurnakan kejadianmu dan menjadikan (susunan tubuh)mu seimbang,", en: "Who created you, proportioned you, and balanced you," }
    },
    anatomy: [{ part: { id: "Bagian", en: "Part" }, desc: { id: "Penjelasan", en: "Explanation" } }],
    wowFactor: { id: "Fakta menakjubkan!", en: "Amazing fact!" },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  }
};

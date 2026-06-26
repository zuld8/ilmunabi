import { ObjectData } from "../objects";

export const lavenderData: ObjectData = {
  slug: "lavender",
  name: { id: "Lavender", en: "Lavender" },
  icon: "🪻",
  category: "tumbuhan",
  type: "tumbuhan",
  scientificName: "Lavandula",
  surahName: "Al-Baqarah",
  surahReference: "2:164",
  unlockedAtPoints: 110,
  kosakata: [
    { arab: "خُزَامَى", latin: "khuzaamaa", arti: "Lavender", artiEn: "Lavender", contohAyat: "Bunga lavender yang wangi." }
  ],
  balita: {
    text: { id: "Bunganya kecil-kecil berwarna ungu cantik! 🪻", en: "Its flowers are small and beautiful purple! 🪻" },
    audioTranscript: { id: "Wah, cium deh! Wangi lavender ini sangat lembut. Nyamuk tidak suka lho wangi ini, jadi kita aman dari gigitan nyamuk!", en: "Wow, smell this! This lavender scent is very soft. Mosquitoes don't like this scent, so we are safe from mosquito bites!" },
    quiz: {
      question: { id: "Hewan apa yang takut dan tidak suka wangi lavender?", en: "What animal is afraid and dislikes the smell of lavender?" },
      options: [
        { text: { id: "Kupu-kupu", en: "Butterfly" } },
        { text: { id: "Nyamuk nakal", en: "Naughty mosquito" } },
        { text: { id: "Kelinci", en: "Rabbit" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Minyak dari bunga lavender sering dipakai untuk membuat sabun dan sampo! Wangi lavender juga punya kehebatan, bisa bikin otak kita merasa tenang dan tidur jadi nyenyak.", en: "Oil from lavender flowers is often used to make soap and shampoo! The smell of lavender also has a superpower, it can make our brain feel calm and sleep soundly." },
    facts: [
      { id: "Lebah sangat suka madu dari bunga lavender.", en: "Bees really love honey from lavender flowers." },
      { id: "Lavender berasal dari daerah pegunungan di dekat laut.", en: "Lavender comes from mountainous areas near the sea." },
      { id: "Kata 'lavender' berasal dari bahasa Latin 'lavare' yang artinya 'mencuci'.", en: "The word 'lavender' comes from the Latin 'lavare' which means 'to wash'." }
    ],
    quranVerse: { arabic: "...", transliteration: "...", translation: { id: "...", en: "..." } },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  },
  explorer: {
    text: { id: "Senyawa Linalool di dalam bunga lavender secara ajaib mengirim sinyal relaksasi ke sistem saraf penciuman manusia. Allah Maha Pencipta, yang tak sekadar merancang bunga ungu yang indah, tetapi menyelipkan fungsi obat alami untuk menenangkan saraf hambanya yang kelelahan.", en: "The Linalool compound in the lavender flower magically sends relaxation signals to the human olfactory nervous system. Allah the Creator, who didn't just design a beautiful purple flower, but slipped in a natural medicine function to calm the tired nerves of His servants." },
    quranVerse: {
      arabic: "الَّذِي أَحْسَنَ كُلَّ شَيْءٍ خَلَقَهُ",
      transliteration: "Alladhī aḥsana kulla shay'in khalaqah",
      translation: { id: "Yang membuat segala sesuatu yang Dia ciptakan sebaik-baiknya.", en: "Who perfected everything which He created." }
    },
    anatomy: [{ part: { id: "Bagian", en: "Part" }, desc: { id: "Penjelasan", en: "Explanation" } }],
    wowFactor: { id: "Fakta menakjubkan!", en: "Amazing fact!" },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  }
};

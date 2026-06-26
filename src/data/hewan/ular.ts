import { ObjectData } from "../objects";

export const ularData: ObjectData = {
  slug: "ular",
  name: { id: "Ular", en: "Snake" },
  icon: "🐍",
  category: "hewan",
  type: "hewan",
  scientificName: "Serpentes",
  surahName: "Taha",
  surahReference: "20:20",
  unlockedAtPoints: 30,
  kosakata: [
    { arab: "حَيَّةٌ / ثُعْبَانٌ", latin: "hayyatun / thu'baanun", arti: "Ular", artiEn: "Snake", contohAyat: "فَإِذَا هِيَ حَيَّةٌ تَسْعَىٰ (Maka tiba-tiba tongkat itu menjadi ular yang merayap dengan cepat)" }
  ],
  balita: {
    text: { id: "Ssshhh... 🐍 Ular berjalan dengan perutnya karena tidak punya kaki! Kalau ketemu ular di hutan, jangan didekati ya!", en: "Ssshhh... 🐍 Snakes walk on their bellies because they have no legs! If you see a snake in the forest, don't get close!" },
    audioTranscript: { id: "Ssshh... Aku adalah ular. Aku bergerak merayap di tanah dan pohon. Aku menggunakan lidahku untuk mencium bau di sekitarku!", en: "Ssshhh... I am a snake. I move by slithering on the ground and trees. I use my tongue to smell my surroundings!" },
    quiz: {
      question: { id: "Bagian tubuh mana yang ular gunakan untuk mencium bau?", en: "Which body part does a snake use to smell?" },
      options: [
        { text: { id: "Hidung", en: "Nose" } },
        { text: { id: "Lidah yang menjulur", en: "Flicking tongue" } },
        { text: { id: "Ekor", en: "Tail" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Ular tidak punya kelopak mata lho, makanya mereka tidak pernah berkedip! Ular juga bisa menelan makanan yang lebih besar dari kepalanya sendiri karena rahangnya sangat elastis. Ajaib kan!", en: "Snakes don't have eyelids, which is why they never blink! Snakes can also swallow food bigger than their own head because their jaws are very elastic. Magical, isn't it!" },
    facts: [
      { id: "Ular selalu menjulurkan lidahnya untuk 'mencicipi' udara dan mendeteksi mangsa! 👅", en: "Snakes constantly flick their tongues to 'taste' the air and detect prey! 👅" },
      { id: "Ular akan mengganti kulit lamanya dengan kulit baru (moulting) agar bisa bertambah besar! 🐍", en: "Snakes shed their old skin for a new one (moulting) so they can grow bigger! 🐍" },
      { id: "Beberapa ular bisa mendeteksi panas tubuh hewan lain dalam kegelapan (Inframerah)! 🔥", en: "Some snakes can detect the body heat of other animals in the dark (Infrared)! 🔥" }
    ],
    quranVerse: { arabic: "...", transliteration: "...", translation: { id: "...", en: "..." } },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  },
  explorer: {
    text: { id: "Allah memberikan mukjizat besar kepada Nabi Musa AS menggunakan tongkatnya. Saat berhadapan dengan Firaun dan tukang sihirnya, Nabi Musa melempar tongkatnya, dan atas izin Allah, tongkat itu berubah menjadi ular naga yang nyata (Thu'ban) dan menelan semua sihir ular palsu buatan mereka! Kebenaran dari Allah selalu menang mengalahkan kebohongan.", en: "Allah gave Prophet Musa (Moses) AS a great miracle using his staff. When facing Pharaoh and his magicians, Prophet Musa threw his staff, and by Allah's permission, it turned into a real huge snake (Thu'ban) and swallowed all their fake magic snakes! The truth from Allah always prevails over falsehood." },
    quranVerse: {
      arabic: "فَأَلْقَاهَا فَإِذَا هِيَ حَيَّةٌ تَسْعَىٰ",
      transliteration: "Fa alqaahaa fa idhaa hiya hayyatun tas'aa",
      translation: { id: "Lalu dilemparkannyalah tongkat itu, maka tiba-tiba ia menjadi seekor ular yang merayap dengan cepat.", en: "So he threw it down, and thereupon it was a snake, moving swiftly." }
    },
    anatomy: [{ part: { id: "Bagian", en: "Part" }, desc: { id: "Penjelasan", en: "Explanation" } }],
    wowFactor: { id: "Fakta menakjubkan!", en: "Amazing fact!" },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  }
};

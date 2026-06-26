import { ObjectData } from "../objects";

export const hidungData: ObjectData = {
  slug: "hidung",
  name: { id: "Hidung", en: "Nose" },
  icon: "👃",
  category: "tubuh",
  type: "tubuh",
  scientificName: "Nasus",
  surahName: "Al-Mulk",
  surahReference: "67:23",
  unlockedAtPoints: 10,
  kosakata: [
    { arab: "أَنْفٌ", latin: "anfun", arti: "Hidung", artiEn: "Nose", contohAyat: "وَالْأَنفَ بِالْأَنفِ" }
  ],
  balita: {
    text: { id: "Hmm... wangi kue dari ibu! 👃", en: "Hmm... smell the cake from mom! 👃" },
    audioTranscript: { id: "Hidung kita ada dua lubang. Kita pakai hidung untuk napas dan mencium bau wangi bunga atau bau busuk sampah!", en: "Our nose has two holes. We use the nose to breathe and smell the nice scent of flowers or the bad smell of trash!" },
    quiz: {
      question: { id: "Untuk apa hidung kita?", en: "What is our nose for?" },
      options: [
        { text: { id: "Melihat bintang", en: "Seeing stars" } },
        { text: { id: "Mencium bau dan bernapas", en: "Smelling and breathing" } },
        { text: { id: "Mendengar musik", en: "Hearing music" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Hidung kita itu pahlawan super! Di dalam hidung ada bulu-bulu kecil dan lendir (upil) yang tugasnya menangkap debu dan kuman supaya tidak masuk ke paru-paru. Jadi jangan suka ngupil sembarangan ya!", en: "Our nose is a superhero! Inside the nose there are tiny hairs and mucus (boogers) whose job is to catch dust and germs so they don't enter the lungs. So don't pick your nose carelessly!" },
    facts: [
      { id: "Manusia bisa mengenali lebih dari 1 triliun bau yang berbeda!", en: "Humans can recognize over 1 trillion different smells!" },
      { id: "Hidung bisa menghangatkan udara dingin sebelum masuk paru-paru.", en: "The nose can warm up cold air before it enters the lungs." },
      { id: "Saat kita bersin, udara keluar dari hidung sangat cepat seperti mobil ngebut!", en: "When we sneeze, air comes out of the nose as fast as a speeding car!" }
    ],
    quranVerse: { arabic: "...", transliteration: "...", translation: { id: "...", en: "..." } },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  },
  explorer: {
    text: { id: "Rongga hidung mengandung reseptor olfaktori yang mengirimkan sinyal langsung ke otak bagian penciuman. Hidung juga merupakan pintu gerbang pernapasan (respirasi). Sungguh karunia Allah yang luar biasa karena hidung kita terus bernapas otomatis tanpa kita sadari setiap detiknya!", en: "The nasal cavity contains olfactory receptors that send signals directly to the brain's smell center. The nose is also the gateway to respiration. What an extraordinary gift from Allah that our nose breathes automatically without us realizing it every second!" },
    quranVerse: {
      arabic: "قُلْ هُوَ الَّذِي أَنشَأَكُمْ وَجَعَلَ لَكُمُ السَّمْعَ وَالْأَبْصَارَ وَالْأَفْئِدَةَ ۖ قَلِيلًا مَّا تَشْكُرُونَ",
      transliteration: "Qul huwalladzii ansya'akum waja'ala lakumus-sam'a wal-abshaara wal-af'idah, qaliilam maa tasykuruun",
      translation: { id: "Katakanlah: 'Dialah Yang menciptakan kamu dan menjadikan bagi kamu pendengaran, penglihatan dan hati'. (Tetapi) amat sedikit kamu bersyukur.", en: "Say, 'It is He who has produced you and made for you hearing and vision and hearts; little are you grateful.'" }
    },
    anatomy: [{ part: { id: "Bagian", en: "Part" }, desc: { id: "Penjelasan", en: "Explanation" } }],
    wowFactor: { id: "Fakta menakjubkan!", en: "Amazing fact!" },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  }
};
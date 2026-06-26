import { ObjectData } from "../objects";

export const semutData: ObjectData = {
  slug: "semut",
  name: { id: "Semut", en: "Ant" },
  icon: "🐜",
  category: "hewan",
  type: "hewan",
  scientificName: "Formicidae",
  surahName: "An-Naml",
  surahReference: "27:18",
  unlockedAtPoints: 30,
  kosakata: [
    { arab: "نَمْلَةٌ", latin: "namlatun", arti: "Semut", artiEn: "Ant", contohAyat: "قَالَتْ نَمْلَةٌ يَا أَيُّهَا النَّمْلُ ادْخُلُوا مَسَاكِنَكُمْ (Seekor semut berkata: Hai semut-semut, masuklah ke dalam sarang-sarangmu)" }
  ],
  balita: {
    text: { id: "Semut itu sangat kecil! 🐜 Mereka suka berjalan berbaris-baris. Kiri kanan kiri kanan!", en: "Ants are very small! 🐜 They like to walk in lines. Left right left right!" },
    audioTranscript: { id: "Halo teman! Aku semut. Aku tinggal bersama ribuan keluargaku di dalam tanah. Kami sangat rajin bekerja!", en: "Hello friend! I am an ant. I live with thousands of my family members underground. We are very hard workers!" },
    quiz: {
      question: { id: "Bagaimana cara semut berjalan bersama teman-temannya?", en: "How do ants walk with their friends?" },
      options: [
        { text: { id: "Sambil melompat-lompat", en: "By jumping around" } },
        { text: { id: "Berbaris rapi", en: "Lining up neatly" } },
        { text: { id: "Terbang bebas", en: "Flying freely" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Semut adalah hewan terkuat lho! Mereka bisa mengangkat beban yang beratnya 50 kali lipat dari tubuhnya. Bayangkan kalau kamu bisa mengangkat mobil! Wow!", en: "Ants are the strongest animals! They can lift objects that are 50 times heavier than their bodies. Imagine if you could lift a car! Wow!" },
    facts: [
      { id: "Semut tidak punya telinga, mereka 'mendengar' dari getaran tanah! 📳", en: "Ants don't have ears, they 'hear' by feeling vibrations in the ground! 📳" },
      { id: "Saat semut bertemu temannya, mereka akan saling menyentuh antena untuk mengobrol! 📡", en: "When ants meet a friend, they touch antennas to chat! 📡" },
      { id: "Semut punya dua perut: satu untuk dirinya, satu lagi untuk berbagi makanan dengan teman! 🍽️", en: "Ants have two stomachs: one for themselves, and one to share food with friends! 🍽️" }
    ],
    quranVerse: { arabic: "...", transliteration: "...", translation: { id: "...", en: "..." } },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  },
  explorer: {
    text: { id: "Kecerdasan semut sangat luar biasa! Mereka adalah hewan yang pandai berkomunikasi. Dalam Surah An-Naml (Semut), dikisahkan ketika pasukan Nabi Sulaiman AS akan lewat, seekor ratu semut memerintahkan rakyatnya untuk masuk sarang agar tidak terinjak. Nabi Sulaiman tersenyum mendengar ucapan semut itu berkat mukjizat dari Allah!", en: "The intelligence of ants is extraordinary! They are animals that are great at communicating. In Surah An-Naml (The Ant), it is told that when Prophet Sulaiman's (Solomon) army was passing by, an ant queen ordered her people to enter their homes so they wouldn't be crushed. Prophet Sulaiman smiled hearing the ant's words thanks to a miracle from Allah!" },
    quranVerse: {
      arabic: "حَتَّىٰ إِذَا أَتَوْا عَلَىٰ وَادِ النَّمْلِ قَالَتْ نَمْلَةٌ يَا أَيُّهَا النَّمْلُ ادْخُلُوا مَسَاكِنَكُمْ لَا يَحْطِمَنَّكُمْ سُلَيْمَانُ وَجُنُودُهُ وَهُمْ لَا يَشْعُرُونَ",
      transliteration: "Hattaa idhaa ataw 'alaa waadin-namli qaalat namlatun yaa ayyuhan-namludkhuluu masaakinakum laa yahtimannakum sulaimaanu wajunuuduhu wahum laa yash'uruun",
      translation: { id: "Hingga apabila mereka sampai di lembah semut berkatalah seekor semut: Hai semut-semut, masuklah ke dalam sarang-sarangmu, agar kamu tidak diinjak oleh Sulaiman dan tentaranya, sedangkan mereka tidak menyadari.", en: "Until, when they came upon the valley of the ants, an ant said, 'O ants, enter your dwellings that you not be crushed by Solomon and his soldiers while they perceive not.'" }
    },
    anatomy: [{ part: { id: "Bagian", en: "Part" }, desc: { id: "Penjelasan", en: "Explanation" } }],
    wowFactor: { id: "Fakta menakjubkan!", en: "Amazing fact!" },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  }
};

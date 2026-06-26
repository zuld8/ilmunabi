import { ObjectData } from "../objects";

export const rambutData: ObjectData = {
  slug: "rambut",
  name: { id: "Rambut", en: "Hair" },
  icon: "💇",
  category: "tubuh",
  type: "tubuh",
  scientificName: "Capillus",
  surahName: "Maryam",
  surahReference: "19:4",
  unlockedAtPoints: 10,
  kosakata: [
    { arab: "شَعْرٌ", latin: "sya'run", arti: "Rambut", artiEn: "Hair", contohAyat: "وَاشْتَعَلَ الرَّأْسُ شَيْبًا" }
  ],
  balita: {
    text: { id: "Rambut di kepalaku halus! 💇", en: "The hair on my head is soft! 💇" },
    audioTranscript: { id: "Rambut tumbuh memanjang di kepala kita. Rambut melindungi kepala kita dari panas matahari biar nggak kepanasan!", en: "Hair grows long on our head. Hair protects our head from the hot sun so we don't get overheated!" },
    quiz: {
      question: { id: "Kapan rambut kita dicukur biar rapi?", en: "When do we cut our hair so it's neat?" },
      options: [
        { text: { id: "Saat sudah panjang", en: "When it gets long" } },
        { text: { id: "Setiap jam", en: "Every hour" } },
        { text: { id: "Saat tidur", en: "While sleeping" } }
      ],
      answerIdx: 0
    }
  },
  anak: {
    text: { id: "Setiap helai rambut kita tumbuh dari kantong kecil bernama folikel di kulit kepala. Folikel juga memberi warna pada rambut, ada yang hitam, coklat, atau pirang! Nanti kalau kita sudah tua, warna itu hilang dan rambut kita jadi putih bernama uban.", en: "Every strand of our hair grows from a tiny pocket called a follicle in the scalp. The follicle also gives color to the hair, some are black, brown, or blonde! Later when we get old, that color fades and our hair turns white, called gray hair." },
    facts: [
      { id: "Manusia punya sekitar 100.000 helai rambut di kepalanya!", en: "Humans have about 100,000 strands of hair on their head!" },
      { id: "Satu helai rambut bisa menahan beban seberat buah apel.", en: "One strand of hair can hold the weight of an apple." },
      { id: "Rambut kita terus tumbuh 1 sentimeter setiap bulannya.", en: "Our hair continuously grows about 1 centimeter every month." }
    ],
    quranVerse: { arabic: "...", transliteration: "...", translation: { id: "...", en: "..." } },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  },
  explorer: {
    text: { id: "Rambut tersusun dari protein kuat bernama keratin. Pigmen melanin di dalamnya menentukan warna rambut. Ketika produksi melanin menurun seiring bertambahnya usia, rambut memutih (uban). Al-Qur'an merekam kisah doa Nabi Zakariya yang menyebutkan kepalanya yang telah dipenuhi uban sebagai tanda kerendahan hatinya kepada Allah.", en: "Hair is made of a strong protein called keratin. Melanin pigment inside determines hair color. When melanin production decreases with age, hair turns white (graying). The Quran records the story of Prophet Zechariah's prayer, mentioning his head filled with gray hair as a sign of his humility to Allah." },
    quranVerse: {
      arabic: "قَالَ رَبِّ إِنِّي وَهَنَ الْعَظْمُ مِنِّي وَاشْتَعَلَ الرَّأْسُ شَيْبًا",
      transliteration: "Qaala rabbi innii wahanal 'azhmu minnii wasyta'alar-ra'su syaibaa",
      translation: { id: "Ia berkata: 'Ya Tuhanku, sesungguhnya tulangku telah lemah dan kepalaku telah ditumbuhi uban...'", en: "He said, 'My Lord, indeed my bones have weakened, and my head has filled with white...'" }
    },
    anatomy: [{ part: { id: "Bagian", en: "Part" }, desc: { id: "Penjelasan", en: "Explanation" } }],
    wowFactor: { id: "Fakta menakjubkan!", en: "Amazing fact!" },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  }
};
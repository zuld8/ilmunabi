import { ObjectData } from "../objects";

export const sidikJariData: ObjectData = {
  slug: "sidik-jari",
  name: {
    id: "Sidik Jari",
    en: "Fingerprint",
  },
  scientificName: "Dermatoglyph",
  surahName: "Al-Qiyamah",
  surahReference: "75:4",
  icon: "🖐️",
  category: "tubuh",
  type: "tubuh",
  unlockedAtPoints: 170,
  kosakata: [
    { arab: "بَنَانٌ", latin: "Banan", arti: "Ujung Jari/Sidik Jari", artiEn: "Fingerprint/Fingertip" },
    { arab: "قَادِرٌ", latin: "Qadir", arti: "Maha Kuasa", artiEn: "Able/Powerful" },
    { arab: "خَلْقٌ", latin: "Khalq", arti: "Penciptaan", artiEn: "Creation" },
    { arab: "بَصْمَةٌ", latin: "Basmah", arti: "Cap/Tanda", artiEn: "Print" }
  ],
  balita: {
    text: {
      id: "Lihat jarimu! Ada garis-garis melingkar kecil. Ini sidik jarimu, tidak ada yang menyamainya! 🖐️",
      en: "Look at your fingers! There are tiny looping lines. This is your fingerprint, no one has the same! 🖐️",
    },
    audioTranscript: {
      id: "Setiap manusia punya sidik jari yang berbeda. Bahkan anak kembar pun punya sidik jari yang tidak sama. Indah sekali ciptaan Allah.",
      en: "Every human has a different fingerprint. Even identical twins have different fingerprints. Allah's creation is beautiful.",
    },
    quiz: {
      question: {
        id: "Apakah ada orang lain yang memiliki sidik jari sama denganmu?",
        en: "Does anyone else have the same fingerprint as you?",
      },
      options: [
        { text: { id: "Ada, teman sekelas", en: "Yes, classmate" } },
        { text: { id: "Ada, kembaran saya", en: "Yes, my twin" } },
        { text: { id: "Tidak ada, semuanya berbeda", en: "No, everyone is different" } },
      ],
      answerIdx: 2,
    },
  },
  anak: {
    text: {
      id: "Sidik jari terbentuk saat kamu masih berada di dalam rahim ibu. Pola sidik jari ini tetap sama dari lahir hingga tua sebagai identitas pribadimu dari Allah.",
      en: "Fingerprints are formed while you are still in your mother's womb. This pattern remains the same from birth to old age as your personal identity from Allah.",
    },
    facts: [
      { id: "Sidik jari terbentuk di dalam rahim pada usia kehamilan 3-4 bulan.", en: "Fingerprints form in the womb at 3-4 months of gestation." },
      { id: "Bahkan kembar identik memiliki sidik jari yang berbeda.", en: "Even identical twins have different fingerprints." },
      { id: "Garis sidik jari tidak akan berubah meskipun tergores ringan.", en: "Fingerprint ridges will not change even with minor scratches." },
      { id: "Sidik jari digunakan sebagai kunci pengaman HP dan paspor.", en: "Fingerprints are used as locks for phones and passports." },
    ],
    quranVerse: {
      arabic: "بَلَىٰ قَادِرِينَ عَلَىٰ أَنْ نُسَوِّيَ بَنَانَهُ",
      transliteration: "Balā qādirīna 'alā an nusawwiya banānah",
      translation: {
        id: "Bahkan, Kami kuasa menyusun (kembali) jari-jemarinya dengan sempurna.",
        en: "Yes. [We are] Able to put together his fingertips.",
      },
    },
    quiz: {
      question: {
        id: "Kapan sidik jari manusia mulai terbentuk?",
        en: "When do human fingerprints begin to form?",
      },
      options: [
        { text: { id: "Setelah lahir", en: "After birth" } },
        { text: { id: "Di dalam rahim ibu", en: "Inside the mother's womb" } },
        { text: { id: "Saat usia 5 tahun", en: "At 5 years old" } },
      ],
      answerIdx: 1,
    },
  },
  explorer: {
    text: {
      id: "Garis papila dermatoglif pada epidermis dipengaruhi faktor genetik dan gaya tekan fisik cairan ketuban selama masa kehamilan awal.",
      en: "The dermal ridge patterns (dermatoglyphs) on the epidermis are determined by genetic factors and physical forces of amniotic fluid in early pregnancy.",
    },
    anatomy: [
      {
        part: { id: "Lengkung (Arch)", en: "Arch" },
        desc: { id: "Pola garis sidik jari yang mengalir seperti ombak naik-turun.", en: "Fingerprint ridge pattern flowing like a rising and falling wave." },
      },
      {
        part: { id: "Sengkelit (Loop)", en: "Loop" },
        desc: { id: "Pola garis yang melingkar masuk dan keluar dari sisi yang sama.", en: "Ridge pattern looping in and out from the same side." },
      },
      {
        part: { id: "Pusingan (Whorl)", en: "Whorl" },
        desc: { id: "Pola melingkar penuh seperti pusaran air di tengah ujung jari.", en: "Complete circular pattern resembling a whirlpool in the center." },
      },
    ],
    wowFactor: {
      id: "Pada abad ke-7 ketika Al-Qur'an diturunkan, kaum kafir Quraisy menolak kebangkitan dengan meragukan bagaimana Allah bisa mengumpulkan kembali tulang-belulang yang telah hancur. Allah menjawab tantangan tersebut dengan menyatakan bahwa Dia bahkan mampu menyusun kembali ujung jari jemari (Banan) mereka. Keunikan sidik jari sebagai identitas individu baru ditemukan sains barat pada akhir abad ke-19 (Sir Francis Galton).",
      en: "In the 7th century, deniers doubted how Allah could reconstruct decomposed bones. Allah replied that He is able to reconstruct even their fingertips (Banan). The absolute individuality of fingerprints was only discovered by Western science in the late 19th century by Sir Francis Galton.",
    },
    quranVerse: {
      arabic: "أَيَحْسَبُ الْإِنْسَانُ أَلَّنْ نَجْمَعَ عِظَامَهُ بَلَىٰ قَادِرِينَ عَلَىٰ أَنْ نُسَوِّيَ بَنَانَهُ",
      transliteration: "Ayahsabul-insānu allan najma'a 'idhāmah, balā qādirīna 'alā an nusawwiya banānah",
      translation: {
        id: "Apakah manusia mengira bahwa Kami tidak akan mengumpulkan (kembali) tulang-belulangnya? Bahkan, Kami kuasa menyusun (kembali) jari-jemarinya dengan sempurna.",
        en: "Does man think that We will not assemble his bones? Yes. [We are] Able to put together his fingertips.",
      },
      context: {
        id: "Surah Al-Qiyamah ayat 3-4 mengaitkan kebangkitan dengan kehebatan rekonstruksi sidik jari/ujung jari (Banan) yang sangat presisi.",
        en: "Surah Al-Qiyamah verses 3-4 link the resurrection with the precise reconstruction of fingerprints/fingertips (Banan).",
      },
    },
    quiz: [
      {
        question: {
          id: "Siapa ilmuwan Barat yang mempublikasikan klasifikasi dan keunikan sidik jari pada tahun 1892?",
          en: "Who was the Western scientist that published the classification and uniqueness of fingerprints in 1892?",
        },
        options: [
          { text: { id: "Isaac Newton", en: "Isaac Newton" } },
          { text: { id: "Albert Einstein", en: "Albert Einstein" } },
          { text: { id: "Sir Francis Galton", en: "Sir Francis Galton" } },
        ],
        answerIdx: 2,
      },
    ],
  },
};

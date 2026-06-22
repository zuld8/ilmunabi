import { ObjectData } from "../objects";

export const matahariData: ObjectData = {
  slug: "matahari",
  name: {
    id: "Matahari",
    en: "Sun",
  },
  scientificName: "Sol",
  surahName: "Asy-Syams",
  surahReference: "91:1-2",
  icon: "☀️",
  category: "alam",
  type: "alam",
  unlockedAtPoints: 100,
  kosakata: [
    { arab: "شَمْسٌ", latin: "Syams", arti: "Matahari", artiEn: "Sun" },
    { arab: "ضُحَى", latin: "Dhuha", arti: "Pagi Hari", artiEn: "Morning" },
    { arab: "نَهَارٌ", latin: "Nahar", arti: "Siang Hari", artiEn: "Daytime" },
    { arab: "ضِيَاءٌ", latin: "Dhiya'", arti: "Sinar Terang", artiEn: "Radiance" }
  ],
  balita: {
    text: {
      id: "Ini matahari! Matahari terbit pagi hari dan menghangatkan bumi. ☀️",
      en: "This is the sun! The sun rises in the morning and warms the earth. ☀️",
    },
    audioTranscript: {
      id: "Matahari bersinar di pagi hari. Matahari memberikan cahaya dan kehangatan untuk kita semua.",
      en: "The sun shines in the morning. It provides light and warmth for all of us.",
    },
    quiz: {
      question: {
        id: "Mana gambar matahari?",
        en: "Which one is the sun?",
      },
      options: [
        { text: { id: "☀️ Matahari", en: "☀️ Sun" } },
        { text: { id: "🌙 Bulan", en: "🌙 Moon" } },
        { text: { id: "☁️ Awan", en: "☁️ Cloud" } },
      ],
      answerIdx: 0,
    },
  },
  anak: {
    text: {
      id: "Matahari adalah bintang yang sangat besar. Gravitasinya menjaga semua planet berputar dengan rapi, persis seperti yang Allah atur.",
      en: "The sun is a very massive star. Its gravity keeps all the planets orbiting in order, exactly as Allah designed.",
    },
    facts: [
      { id: "Matahari berukuran 1,3 juta kali lebih besar dari bumi.", en: "The sun is 1.3 million times larger than the Earth." },
      { id: "Cahaya matahari membutuhkan 8 menit untuk sampai ke bumi.", en: "Sunlight takes about 8 minutes to reach the Earth." },
      { id: "Matahari memancarkan energi yang melimpah untuk fotosintesis.", en: "The sun provides abundant energy for photosynthesis." },
      { id: "Matahari juga berotasi pada porosnya sendiri secara konsisten.", en: "The sun also rotates on its own axis consistently." },
    ],
    quranVerse: {
      arabic: "وَالشَّمْسِ وَضُحَاهَا",
      transliteration: "Wash-syamsi wa dhuhāhā",
      translation: {
        id: "Demi matahari dan sinarnya pada pagi hari,",
        en: "By the sun and its brightness,",
      },
    },
    quiz: {
      question: {
        id: "Berapa lama cahaya matahari sampai ke bumi?",
        en: "How long does it take for sunlight to reach Earth?",
      },
      options: [
        { text: { id: "5 menit", en: "5 minutes" } },
        { text: { id: "8 menit", en: "8 minutes" } },
        { text: { id: "1 jam", en: "1 hour" } },
      ],
      answerIdx: 1,
    },
  },
  explorer: {
    text: {
      id: "Matahari berada di pusat tata surya kita. Reaksi fusi nuklir hidrogen menjadi helium di intinya menghasilkan energi dahsyat yang menyinari kehidupan bumi.",
      en: "The sun sits at the center of our solar system. Hydrogen-to-helium nuclear fusion in its core generates the immense energy that sustains life on Earth.",
    },
    anatomy: [
      {
        part: { id: "Inti Matahari", en: "Core" },
        desc: { id: "Suhu mencapai 15 juta °C tempat terjadinya fusi nuklir.", en: "Temperatures reach 15 million °C, where nuclear fusion occurs." },
      },
      {
        part: { id: "Fotosfer", en: "Photosphere" },
        desc: { id: "Permukaan luar matahari yang memancarkan cahaya tampak.", en: "The visible outer surface of the sun that emits light." },
      },
      {
        part: { id: "Korona", en: "Corona" },
        desc: { id: "Atmosfer terluar matahari yang menyerupai mahkota cahaya.", en: "The outermost atmosphere of the sun resembling a crown of light." },
      },
    ],
    wowFactor: {
      id: "Qur'an menjelaskan matahari sebagai 'Siraj' (obor/pelita menyala yang memancarkan cahayanya sendiri), sedangkan bulan disebut 'Nur' (pantulan cahaya). Sains modern mengonfirmasi matahari memproduksi energinya sendiri, sedangkan bulan hanya memantulkan cahaya matahari.",
      en: "The Quran describes the sun as a 'Siraj' (a blazing torch that generates its own light) and the moon as 'Nur' (reflected light). Modern science confirms that the sun produces its own energy, whereas the moon only reflects it.",
    },
    quranVerse: {
      arabic: "وَجَعَلْنَا سِرَاجًا وَهَّاجًا",
      transliteration: "Wa ja'alnā sirājaw wahhājā",
      translation: {
        id: "Dan Kami jadikan pelita yang amat terang (matahari),",
        en: "And made a burning lamp,",
      },
      context: {
        id: "Surah An-Naba ayat 13 menegaskan peran matahari sebagai sumber energi utama (Siraj) untuk kehidupan biologis bumi.",
        en: "Surah An-Naba verse 13 asserts the sun's role as the primary energy source (Siraj) for biological life on Earth.",
      },
    },
    quiz: [
      {
        question: {
          id: "Apa istilah Qur'an untuk matahari yang menggambarkan kemampuannya memproduksi cahaya sendiri?",
          en: "What Quranic term for the sun reflects its ability to generate its own light?",
        },
        options: [
          { text: { id: "Nur", en: "Nur" } },
          { text: { id: "Siraj", en: "Siraj" } },
          { text: { id: "Kaukab", en: "Kaukab" } },
        ],
        answerIdx: 1,
      },
    ],
  },
};

import { ObjectData } from "../objects";

export const bumiData: ObjectData = {
  slug: "bumi",
  name: {
    id: "Bumi",
    en: "Earth",
  },
  scientificName: "Tellus / Terra",
  surahName: "Al-Anbiya",
  surahReference: "21:30",
  icon: "🌍",
  category: "langit",
  type: "langit",
  unlockedAtPoints: 90,
  kosakata: [
    { arab: "أَرْضٌ", latin: "Ardh", arti: "Bumi/Tanah", artiEn: "Earth/Land" },
    { arab: "جِبَالٌ", latin: "Jibal", arti: "Gunung", artiEn: "Mountains" },
    { arab: "مِهَادًا", latin: "Mihada", arti: "Hamparan/Tempat Tidur", artiEn: "Resting Place" },
    { arab: "سَمَاءٌ", latin: "Sama'", arti: "Langit", artiEn: "Sky/Heaven" }
  ],
  balita: {
    text: {
      id: "Ini bumi tempat tinggal kita! Ada pohon, hewan, air, dan kita semua hidup gembira di sini. 🌍",
      en: "This is Earth, our home! There are trees, animals, water, and we all live happily here. 🌍",
    },
    audioTranscript: {
      id: "Bumi diciptakan Allah sebagai tempat tinggal yang sangat nyaman. Bumi dilindungi langit yang biru dan indah.",
      en: "Earth was created by Allah as a very comfortable home. It is protected by a beautiful blue sky.",
    },
    quiz: {
      question: {
        id: "Di planet manakah kita semua tinggal?",
        en: "Which planet do we all live on?",
      },
      options: [
        { text: { id: "Mars", en: "Mars" } },
        { text: { id: "Bumi", en: "Earth" } },
        { text: { id: "Yupiter", en: "Jupiter" } },
      ],
      answerIdx: 1,
    },
  },
  anak: {
    text: {
      id: "Bumi berputar pada porosnya menghasilkan siang dan malam. Di sekeliling bumi terdapat atmosfer tebal yang berfungsi sebagai atap pelindung dari kejatuhan meteor.",
      en: "Earth rotates on its axis, producing day and night. Surrounding the Earth is a thick atmosphere that acts as a protective ceiling against falling meteors.",
    },
    facts: [
      { id: "Bumi berotasi penuh dalam waktu 24 jam.", en: "Earth completes one full rotation in 24 hours." },
      { id: "Atmosfer bumi memantulkan radiasi berbahaya dari luar angkasa.", en: "Earth's atmosphere deflects harmful space radiation." },
      { id: "Bumi adalah satu-satunya planet yang memiliki kehidupan aktif.", en: "Earth is the only planet known to host active life." },
      { id: "Gunung-gunung dipasang tegak sebagai tiang pancang penstabil bumi.", en: "Mountains are set upright to stabilize the Earth." },
    ],
    quranVerse: {
      arabic: "وَجَعَلْنَا السَّمَاءَ سَقْفًا مَحْفُوظًا",
      transliteration: "Wa ja'alnas-samā'a saqfam mahfūdhā",
      translation: {
        id: "Dan Kami menjadikan langit itu sebagai atap yang terpelihara,",
        en: "And We made the sky a protected ceiling,",
      },
    },
    quiz: {
      question: {
        id: "Apa fungsi atmosfer bumi yang diisyaratkan sebagai 'atap yang terpelihara'?",
        en: "What is the function of Earth's atmosphere hinted as a 'protected ceiling'?",
      },
      options: [
        { text: { id: "Membuat bumi gelap", en: "Making Earth dark" } },
        { text: { id: "Melindungi bumi dari ancaman luar angkasa", en: "Protecting Earth from space hazards" } },
        { text: { id: "Menghasilkan gravitasi", en: "Generating gravity" } },
      ],
      answerIdx: 1,
    },
  },
  explorer: {
    text: {
      id: "Struktur dalam bumi terdiri dari kerak bumi, mantel silikat kental, inti luar cair besi-nikel, dan inti dalam padat.",
      en: "Earth's internal structure consists of a crust, a viscous silicate mantle, a liquid iron-nickel outer core, and a solid inner core.",
    },
    anatomy: [
      {
        part: { id: "Kerak Bumi", en: "Crust" },
        desc: { id: "Lapisan padat terluar bumi, tempat samudra dan benua berada.", en: "The outermost solid layer of Earth, containing oceans and continents." },
      },
      {
        part: { id: "Mantel Bumi", en: "Mantle" },
        desc: { id: "Lapisan batuan semi-cair tebal yang bergerak secara dinamis.", en: "A thick layer of semi-molten rock that moves dynamically." },
      },
      {
        part: { id: "Inti Bumi", en: "Core" },
        desc: { id: "Pusat bumi yang sangat panas, menghasilkan medan magnet pelindung.", en: "The extremely hot center of Earth, generating a protective magnetic field." },
      },
    ],
    wowFactor: {
      id: "Teori Big Bang menjelaskan bumi dan benda langit awalnya menyatu sebelum terpisah (inflasi kosmik). Hal ini selaras dengan Surah Al-Anbiya ayat 30: '...bahwa langit dan bumi itu keduanya dahulu adalah suatu yang padu, kemudian Kami pisahkan antara keduanya.' Selain itu, ayat tersebut menegaskan bahwa semua makhluk hidup diciptakan dari air, suatu fakta biokimia modern.",
      en: "The Big Bang theory describes that the heavens and the earth were originally joined before being split apart (cosmic inflation). This aligns with Surah Al-Anbiya verse 30: '...that the heavens and the earth were a joined entity, and We separated them.' Additionally, the verse asserts that all living things are created from water, a cornerstone of biochemistry.",
    },
    quranVerse: {
      arabic: "أَوَلَمْ يَرَ الَّذِينَ كَفَرُوا أَنَّ السَّمَاوَاتِ وَالْأَرْضَ كَانَتَا رَتْقًا فَفَتَقْنَاهُمَا وَجَعَلْنَا مِنَ الْمَاءِ كُلَّ شَيْءٍ حَيٍّ",
      transliteration: "Awalam yaral-ladhīna kafarū annas-samāwāti wal-ardha kānatā ratqan fafataqnāhumā, wa ja'alnā minal-mā'i kulla syay'in hayy",
      translation: {
        id: "Dan apakah orang-orang yang kafir tidak mengetahui bahwasanya langit dan bumi itu keduanya dahulu adalah suatu yang padu, kemudian Kami pisahkan antara keduanya. Dan dari air Kami jadikan segala sesuatu yang hidup.",
        en: "Have those who disbelieved not considered that the heavens and the earth were a joined entity, and We separated them and made from water every living thing?",
      },
      context: {
        id: "Surah Al-Anbiya ayat 30 mengisyaratkan asal mula alam semesta (kosmologi) dan biokimia asal-usul kehidupan.",
        en: "Surah Al-Anbiya verse 30 hints at the universe's origin (cosmology) and the biochemical origin of life.",
      },
    },
    quiz: [
      {
        question: {
          id: "Apa asal mula semua makhluk hidup menurut Surah Al-Anbiya ayat 30?",
          en: "What is the origin of all living things according to Surah Al-Anbiya verse 30?",
        },
        options: [
          { text: { id: "Tanah", en: "Soil" } },
          { text: { id: "Api", en: "Fire" } },
          { text: { id: "Air", en: "Water" } },
        ],
        answerIdx: 2,
      },
    ],
  },
};

import { ObjectData } from "../objects";

export const anginMatahariData: ObjectData = {
  slug: "angin-matahari",
  name: { id: "Angin Matahari", en: "Solar Wind" },
  icon: "🌬️",
  category: "alam",
  type: "alam",
  scientificName: "Solar Wind",
  surahName: "Al-Mursalat",
  surahReference: "Al-Mursalat:1-2",
  unlockedAtPoints: 10,
  kosakata: [
    { arab: "رِيحٌ", latin: "Riih", arti: "Angin", artiEn: "Wind" },
    { arab: "شَمْسٌ", latin: "Syams", arti: "Matahari", artiEn: "Sun" },
    { arab: "سُرْعَةٌ", latin: "Sur'ah", arti: "Kecepatan", artiEn: "Speed" },
    { arab: "عَاصِفَةٌ", latin: "Aasifah", arti: "Badai", artiEn: "Storm" }
  ],
  balita: {
    text: { id: "Wuuus! Di luar angkasa sana ada angin kencang lho, namanya angin matahari. Angin ini bukan meniup daun, tapi meniupkan butiran api kecil ke mana-mana. Untung ada perisai bumi yang menjaga kita!", en: "Whoosh! Out in space there's a strong wind, called the solar wind. This wind doesn't blow leaves, but blows tiny sparks everywhere. Good thing there's earth's shield keeping us safe!" },
    audioTranscript: { id: "Matahari meniupkan angin panas ke luar angkasa.", en: "The sun blows a hot wind into space." },
    quiz: {
      question: { id: "Dari manakah asalnya angin matahari?", en: "Where does the solar wind come from?" },
      options: [
        { text: { id: "Dari kipas angin besar", en: "From a giant fan" } },
        { text: { id: "Dari matahari", en: "From the sun" } },
        { text: { id: "Dari bulan", en: "From the moon" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Matahari sangat panas sampai-sampai dia menyemburkan bagian tubuhnya keluar! Semburan ini bergerak sangat cepat melintasi ruang angkasa, inilah yang disebut angin matahari. Al-Qur'an menceritakan tentang 'malaikat-malaikat yang diutus membawa kebaikan dan terbang dengan kencang', seperti halnya fenomena alam yang dahsyat ini.", en: "The sun is so hot that it spews parts of itself outwards! This spray moves very fast across space, this is called the solar wind. The Quran tells about 'angels sent forth with goodness and flying swiftly', much like these powerful natural phenomena." },
    facts: [
      { id: "Angin matahari bisa bergerak sejuta mil per jam!", en: "Solar wind can travel a million miles an hour!" },
      { id: "Angin ini membuat komet punya ekor yang bercahaya.", en: "This wind makes comets have glowing tails." },
      { id: "Kadang angin matahari bisa jadi badai matahari yang besar.", en: "Sometimes solar wind can become a massive solar storm." },
      { id: "Badai matahari yang besar bisa mematikan listrik di bumi.", en: "A massive solar storm could knock out power on earth." },
      { id: "Angin matahari selalu meniup ke semua arah di tata surya.", en: "Solar wind constantly blows in all directions in the solar system." }
    ],
    quranVerse: {
      arabic: "وَٱلْمُرْسَلَٰتِ عُرْفًا ۝ فَٱلْعَٰصِفَٰتِ عَصْفًا",
      transliteration: "Wal-mursalaati 'urfaa. Fal-'aasifaati 'asfaa.",
      translation: { id: "Demi (malaikat-malaikat atau angin) yang diutus untuk membawa kebaikan. Dan (malaikat-malaikat atau angin) yang terbang dengan kencangnya.", en: "By those sent forth in succession. And the winds that blow violently." }
    },
    quiz: {
      question: { id: "Apa yang terjadi pada komet ketika ditiup angin matahari?", en: "What happens to a comet when blown by solar wind?" },
      options: [
        { text: { id: "Komet jadi beku", en: "The comet freezes" } },
        { text: { id: "Komet mempunyai ekor panjang", en: "The comet gets a long tail" } },
        { text: { id: "Komet meledak", en: "The comet explodes" } }
      ],
      answerIdx: 1
    }
  },
  explorer: {
    text: { id: "Angin matahari adalah plasma (gas terionisasi super panas) yang terlepas dari korona matahari. Saking dahsyatnya tekanannya, ia merubah medan magnet planet-planet! Dalam ilmu tafsir Al-Mursalat, Allah bersumpah dengan sesuatu yang diutus berturut-turut lalu bergerak sangat cepat. Fenomena kosmik seperti angin matahari ini membuktikan betapa dahsyatnya kekuatan energi di alam semesta ciptaan Allah.", en: "The solar wind is plasma (super-heated ionized gas) escaping from the sun's corona. Its pressure is so immense it reshapes the magnetic fields of planets! In the tafsir of Al-Mursalat, Allah swears by things sent forth successively then moving with violent speed. Cosmic phenomena like the solar wind prove the terrifying power of energy in Allah's universe." },
    anatomy: [
      { part: { id: "Plasma Terionisasi", en: "Ionized Plasma" }, desc: { id: "Gas panas berisi elektron dan proton lepas.", en: "Hot gas containing free electrons and protons." } },
      { part: { id: "Heliosfer", en: "Heliosphere" }, desc: { id: "Gelembung raksasa di tata surya yang terbentuk dari hembusan angin matahari.", en: "The giant bubble in the solar system formed by the blow of the solar wind." } }
    ],
    wowFactor: { id: "Hah?! Semburan terbesar angin matahari disebut Coronal Mass Ejection (CME). Kalau CME ukuran raksasa menghantam bumi, satelit komunikasi, GPS, dan seluruh jaringan listrik bisa mati total!", en: "What?! The largest bursts of solar wind are called Coronal Mass Ejections (CME). If a giant CME hits earth, communications satellites, GPS, and the entire power grid could totally shut down!" },
    quranVerse: {
      arabic: "وَٱلْمُرْسَلَٰتِ عُرْفًا ۝ فَٱلْعَٰصِفَٰتِ عَصْفًا",
      transliteration: "Wal-mursalaati 'urfaa. Fal-'aasifaati 'asfaa.",
      translation: { id: "Demi (angin) yang diutus untuk membawa kebaikan. Dan (angin) yang terbang dengan kencangnya.", en: "By those sent forth in succession. And the winds that blow violently." }
    },
    quiz: [
      {
        question: { id: "Angin matahari utamanya terdiri dari apa?", en: "What is the solar wind mainly composed of?" },
        options: [
          { text: { id: "Uap air", en: "Water vapor" } },
          { text: { id: "Oksigen murni", en: "Pure oxygen" } },
          { text: { id: "Plasma (elektron & proton)", en: "Plasma (electrons & protons)" } }
        ],
        answerIdx: 2
      },
      {
        question: { id: "Apa itu Heliosfer?", en: "What is the Heliosphere?" },
        options: [
          { text: { id: "Bulan terbesar Jupiter", en: "Jupiter's largest moon" } },
          { text: { id: "Gelembung tiupan angin matahari di tata surya", en: "The solar wind bubble in the solar system" } },
          { text: { id: "Batu meteor hitam", en: "Black meteor stone" } }
        ],
        answerIdx: 1
      },
      {
        question: { id: "Apa ancaman terbesar bagi teknologi manusia jika terjadi badai matahari ekstrem?", en: "What is the greatest threat to human technology if an extreme solar storm occurs?" },
        options: [
          { text: { id: "Layar TV menjadi buram", en: "TV screens get blurry" } },
          { text: { id: "Satelit hancur dan listrik padam total", en: "Satellites destroyed and total power outage" } },
          { text: { id: "Mobil mogok karena bensin membeku", en: "Cars stall because gas freezes" } }
        ],
        answerIdx: 1
      }
    ]
  }
};

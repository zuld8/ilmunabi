import { ObjectData } from "../objects";

export const labalabaData: ObjectData = {
  slug: "laba-laba",
  name: { id: "Laba-laba", en: "Spider" },
  scientificName: "Araneae",
  surahName: "Al-Ankabut (41)",
  surahReference: "29:41",
  icon: "🕷️",
  category: "Serangga",
  type: "hewan",
  unlockedAtPoints: 100,
  kosakata: [
    {
      arab: "عَنْكَبُوتٌ",
      latin: "Ankabut",
      arti: "Laba-laba",
      artiEn: "Spider",
      contohAyat: "Al-Ankabut 29:41",
      icon: "🕷️"
    },
    {
      arab: "بَيْتٌ",
      latin: "Bayt",
      arti: "Rumah",
      artiEn: "House/Home",
      contohAyat: "Al-Ankabut 29:41",
      icon: "🏠"
    },
    {
      arab: "أَوْهَنُ",
      latin: "Awhan",
      arti: "Paling rapuh",
      artiEn: "Weakest",
      contohAyat: "Al-Ankabut 29:41",
      icon: "🕸️"
    },
    {
      arab: "بُيُوتٍ",
      latin: "Buyut",
      arti: "Rumah-rumah",
      artiEn: "Houses",
      contohAyat: "Al-Ankabut 29:41",
      icon: "🏘️"
    }
  ],
  balita: {
    text: {
      id: "Ini laba-laba! Laba-laba punya 8 kaki dan bisa merajut jaring sutra yang indah. 🕷️",
      en: "This is a spider! Spiders have 8 legs and spin beautiful silk webs. 🕷️",
    },
    audioTranscript: {
      id: "Ini laba-laba! Laba-laba punya 8 kaki and bisa merajut jaring sutra yang indah.",
      en: "This is a spider! Spiders have 8 legs and spin beautiful silk webs.",
    },
    quiz: {
      question: {
        id: "Berapa jumlah kaki laba-laba?",
        en: "How many legs does a spider have?",
      },
      options: [
        { text: { id: "4 Kaki", en: "4 Legs" }, isImage: true },
        { text: { id: "6 Kaki", en: "6 Legs" }, isImage: true },
        { text: { id: "8 Kaki", en: "8 Legs" }, isImage: true },
      ],
      answerIdx: 2,
    },
  },
  anak: {
    text: {
      id: "Laba-laba membuat jaring lengket untuk menangkap serangga lain.",
      en: "Spiders weave sticky webs to trap other flying insects.",
    },
    facts: [
      {
        id: "Benang sutra laba-laba sangat kuat, bahkan lebih kuat daripada baja dengan tebal yang sama.",
        en: "Spider silk is incredibly strong, stronger than steel of the same thickness.",
      },
      {
        id: "Sebagian besar laba-laba tidak berbahaya bagi manusia dan membantu memakan nyamuk.",
        en: "Most spiders are harmless to humans and help control mosquito populations.",
      },
      {
        id: "Laba-laba bukan serangga (insect), melainkan kelompok araknida karena berkaki delapan.",
        en: "Spiders are not insects; they are arachnids because they have eight legs.",
      },
    ],
    quranVerse: {
      arabic: "مَثَلُ الَّذِينَ اتَّخَذُوا مِنْ دُونِ اللَّهِ أَوْلِيَاءَ كَمَثَلِ الْعَنْكَبُوتِ اتَّخَذَتْ بَيْتًا ۖ وَإِنَّ أَوْهَنَ الْبُيُوتِ لَبَيْتُ الْعَنْكَبُوتِ ۖ لَوْ كَانُوا يَعْلَمُونَ",
      transliteration: "Mathalul lazeenat takhazoo min doonillaahi awliyaaa'a kamathalil 'ankabootit takhazat baitaa; wa inna awhanal buyooti labaitul 'ankaboot; law kaanoo ya'lamoon",
      translation: {
        id: "Perumpamaan orang-orang yang mengambil pelindung selain Allah adalah seperti laba-laba yang membuat rumah. Dan sesungguhnya rumah yang paling rapuh adalah rumah laba-laba, sekiranya mereka mengetahui.",
        en: "The example of those who take allies other than Allah is like that of the spider who takes a home. And indeed, the weakest of homes is the home of the spider, if they only knew.",
      },
    },
    quiz: {
      question: {
        id: "Sutra laba-laba lebih kuat daripada bahan apa?",
        en: "Spider silk is stronger than which material?",
      },
      options: [
        { text: { id: "Plastik", en: "Plastic" } },
        { text: { id: "Baja", en: "Steel" } },
        { text: { id: "Kayu", en: "Wood" } },
      ],
      answerIdx: 1,
    },
  },
  explorer: {
    text: {
      id: "Jaring laba-laba adalah struktur mekanis yang luar biasa, namun rapuh secara sosial.",
      en: "Spider webs are amazing mechanical structures, yet socially fragile.",
    },
    anatomy: [
      {
        part: { id: "Spinneret", en: "Spinnerets" },
        desc: { id: "Kelenjar khusus di ujung perut untuk memintal cairan protein menjadi benang sutra.", en: "Specialized glands in the abdomen that spin liquid protein into silk threads." },
      },
      {
        part: { id: "Pedipalpus", en: "Pedipalps" },
        desc: { id: "Kaki kecil dekat mulut untuk merasakan makanan dan menahan mangsa.", en: "Small appendages near the mouth used to feel food and hold prey." },
      },
    ],
    wowFactor: {
      id: "Sutra laba-laba 5x lebih kuat dari baja dengan berat yang sama. NASA sedang meneliti sutra laba-laba untuk material pesawat luar angkasa. Al-Ankabut 29:41 menyebut rumah laba-laba sebagai 'rumah yang paling lemah' — secara struktural benar karena tidak memiliki fondasi permanen.",
      en: "Spider silk is 5x stronger than steel of the same weight. NASA is researching spider silk for spacecraft materials. Al-Ankabut 29:41 calls the spider's home the 'weakest of homes' — structurally true because it lacks a permanent foundation.",
    },
    quranVerse: {
      arabic: "وَإِنَّ أَوْهَنَ الْبُيُوتِ لَبَيْتُ الْعَنْكَبُوتِ ۖ لَوْ كَانُوا يَعْلَمُونَ",
      transliteration: "Wa inna awhanal buyooti labaitul 'ankaboot; law kaanoo ya'lamoon",
      translation: {
        id: "...Dan sesungguhnya rumah yang paling rapuh adalah rumah laba-laba, sekiranya mereka mengetahui.",
        en: "...And indeed, the weakest of homes is the home of the spider, if they only knew.",
      },
      context: {
        id: "Quran secara spesifik menggunakan bentuk feminim 'it-takhazat baytan' (laba-laba betina yang membuat rumah). Biologi modern membuktikan hanya laba-laba betina yang merajut jaring rumah.",
        en: "The Quran uses the feminine verb form 'it-takhazat' (she who built the home). Modern biology confirms that only female spiders spin and build the webs.",
      },
    },
    quiz: {
      question: {
        id: "Mengapa sarang laba-laba disebut sebagai rumah yang paling rapuh secara biologis?",
        en: "Why is a spider's web considered the weakest home biologically?",
      },
      options: [
        { text: { id: "Benangnya mudah terbakar", en: "The silk catches fire easily" } },
        { text: { id: "Kehidupan keluarganya kejam (kanibalisme)", en: "Cruel family relations (cannibalistic environment)" } },
        { text: { id: "Jaringnya tidak bisa menahan air", en: "The web cannot hold water" } },
      ],
      answerIdx: 1,
    },
  },
};

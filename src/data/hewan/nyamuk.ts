import { ObjectData } from "../objects";

export const nyamukData: ObjectData = {
  slug: "nyamuk",
  name: { id: "Nyamuk", en: "Mosquito" },
  scientificName: "Culicidae",
  surahName: "Al-Baqarah (26)",
  surahReference: "2:26",
  icon: "🦟",
  category: "Serangga",
  type: "hewan",
  unlockedAtPoints: 200,
  kosakata: [
    {
      arab: "بَعُوضَةٌ",
      latin: "Ba'udhah",
      arti: "Nyamuk",
      artiEn: "Mosquito",
      contohAyat: "Al-Baqarah 2:26",
      icon: "🦟"
    },
    {
      arab: "فَوْقَ",
      latin: "Fawqa",
      arti: "Atas/Lebih dari",
      artiEn: "Above/Beyond",
      contohAyat: "Al-Baqarah 2:26",
      icon: "⬆️"
    },
    {
      arab: "مَثَلٌ",
      latin: "Matsal",
      arti: "Perumpamaan",
      artiEn: "Example/Parable",
      contohAyat: "Al-Baqarah 2:26",
      icon: "📝"
    },
    {
      arab: "حَقٌّ",
      latin: "Haqq",
      arti: "Kebenaran",
      artiEn: "Truth",
      contohAyat: "Al-Baqarah 2:26",
      icon: "✅"
    }
  ],
  balita: {
    text: {
      id: "Ini nyamuk! Tubuhnya sangat kecil dan bisa terbang cepat. Nyamuk suka hinggap di kulit. 🦟",
      en: "This is a mosquito! It is very tiny and flies quickly. It likes to land on skin. 🦟",
    },
    audioTranscript: {
      id: "Ini nyamuk! Tubuhnya sangat kecil dan bisa terbang cepat. Nyamuk suka hinggap di kulit.",
      en: "This is a mosquito! It is very tiny and flies quickly. It likes to land on skin.",
    },
    quiz: {
      question: {
        id: "Bagaimana cara nyamuk berpindah tempat?",
        en: "How do mosquitoes move around?",
      },
      options: [
        { text: { id: "🚶 Berjalan kaki", en: "🚶 Walking" }, isImage: true },
        { text: { id: "✈️ Terbang", en: "✈️ Flying" }, isImage: true },
        { text: { id: "⛵ Berlayar", en: "⛵ Sailing" }, isImage: true },
      ],
      answerIdx: 1,
    },
  },
  anak: {
    text: {
      id: "Meskipun kecil, nyamuk dibekali alat canggih untuk mendeteksi darah makhluk hidup.",
      en: "Despite their small size, mosquitoes are equipped with advanced sensors to locate blood.",
    },
    facts: [
      {
        id: "Hanya nyamuk betina yang menggigit manusia untuk mendapatkan protein demi telurnya.",
        en: "Only female mosquitoes bite humans to get protein required for their eggs.",
      },
      {
        id: "Nyamuk tertarik pada gas karbondioksida (CO2) yang kita keluarkan saat bernapas.",
        en: "Mosquitoes are attracted to carbon dioxide (CO2) exhaled by humans.",
      },
      {
        id: "Nyamuk mengepakkan sayapnya 500 kali per detik, menghasilkan suara dengungan.",
        en: "Mosquitoes flap their wings 500 times per second, creating the buzzing sound.",
      },
    ],
    quranVerse: {
      arabic: "إِنَّ اللَّهَ لَا يَسْتَحْيِي أَنْ يَضْرِبَ مَثَلًا مَا بَعُوضَةً فَمَا فَوْقَهَا",
      transliteration: "Innallaaha laa yastahyee ay yadriba mathalam maa ba'oodatan famaa fawqahaa",
      translation: {
        id: "Sesungguhnya Allah tidak segan membuat perumpamaan berupa nyamuk atau yang lebih kecil dari itu.",
        en: "Indeed, Allah is not timid to present an example - that of a mosquito or what is smaller than it.",
      },
    },
    quiz: {
      question: {
        id: "Jenis nyamuk manakah yang menggigit manusia untuk menghisap darah?",
        en: "Which type of mosquito bites humans to suck blood?",
      },
      options: [
        { text: { id: "Nyamuk jantan", en: "Male mosquito" } },
        { text: { id: "Nyamuk betina", en: "Female mosquito" } },
        { text: { id: "Semua nyamuk", en: "All mosquitoes" } },
      ],
      answerIdx: 1,
    },
  },
  explorer: {
    text: {
      id: "Nyamuk adalah keajaiban rekayasa mikrobiologi dengan jarum hisap ultra kompleks.",
      en: "Mosquitoes are micro-engineering marvels equipped with complex proboscis structures.",
    },
    anatomy: [
      {
        part: { id: "Probosis", en: "Proboscis" },
        desc: { id: "Jarum hisap yang terdiri atas 6 pisau mikro tajam untuk menembus kulit tanpa terasa sakit.", en: "Mouthpart structure consisting of 6 micro-needles to pierce skin painlessly." },
      },
      {
        part: { id: "Sensor Termal", en: "Thermal Sensors" },
        desc: { id: "Mendeteksi radiasi panas tubuh mangsa dari jarak jauh.", en: "Locates blood vessels by sensing body heat radiation." },
      },
    ],
    wowFactor: {
      id: "Al-Baqarah 2:26 menyebut nyamuk sebagai contoh yang 'tidak Allah malu untuk dijadikan perumpamaan.' Sains modern baru menemukan nyamuk betina punya 6 jarum berbeda saat menghisap darah — kompleksitas yang luar biasa dari makhluk sekecil itu.",
      en: "Al-Baqarah 2:26 mentions the mosquito as an example that 'Allah is not timid to present as a parable.' Modern science recently discovered that female mosquitoes have 6 different needles to suck blood — an incredible complexity for such a tiny creature.",
    },
    quranVerse: {
      arabic: "إِنَّ اللَّهَ لَا يَسْتَحْيِي أَنْ يَضْرِبَ مَثَلًا مَا بَعُوضَةً فَمَا فَوْقَهَا",
      transliteration: "Innallaaha laa yastahyee ay yadriba mathalam maa ba'oodatan famaa fawqahaa",
      translation: {
        id: "Sesungguhnya Allah tidak segan membuat perumpamaan berupa nyamuk atau yang lebih kecil dari itu.",
        en: "Indeed, Allah is not timid to present an example - that of a mosquito or what is smaller than it.",
      },
      context: {
        id: "Perumpamaan ini diturunkan untuk membantah orang kafir yang meremehkan penyebutan hewan-hewan kecil di dalam wahyu. Allah membuktikan makhluk terkecil pun memiliki rancangan anatomi yang sangat kompleks.",
        en: "This verse was revealed to counter claims that small insects are too trivial to be mentioned in scripture. God proves even tiny creatures possess immense architectural complexity.",
      },
    },
    quiz: {
      question: {
        id: "Berapa banyak jarum mikro terpisah yang digunakan nyamuk betina saat menghisap darah?",
        en: "How many separate micro-needles does a female mosquito use to suck blood?",
      },
      options: [
        { text: { id: "1 jarum tunggal", en: "1 single needle" } },
        { text: { id: "2 jarum kembar", en: "2 twin needles" } },
        { text: { id: "6 jarum berbeda", en: "6 different needles" } },
        { text: { id: "12 jarum melingkar", en: "12 circular needles" } },
      ],
      answerIdx: 2,
    },
  },
};

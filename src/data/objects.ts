export interface Translation {
  id: string;
  en: string;
}

export interface QuizOption {
  text: Translation;
  isImage?: boolean; // True if option is an emoji/image
}

export interface Quiz {
  question: Translation;
  options: QuizOption[];
  answerIdx: number;
}

export interface AnatomyDetail {
  part: Translation;
  desc: Translation;
}

export interface QuranVerse {
  arabic: string;
  transliteration: string;
  translation: Translation;
  audioUrl?: string;
  context?: Translation; // for Explorer
}

export interface KosakataItem {
  arab: string;
  latin: string;
  arti: string;
  artiEn: string;
  contohAyat: string;
  icon: string;
}

export interface ObjectData {
  slug: string;
  name: Translation;
  scientificName: string;
  surahName: string;
  surahReference: string;
  icon: string;
  category: string;
  unlockedAtPoints: number; // for gamification
  kosakata?: KosakataItem[];
  balita: {
    text: Translation;
    audioTranscript: Translation;
    quiz: Quiz;
  };
  anak: {
    text: Translation;
    facts: Translation[];
    quranVerse: QuranVerse;
    quiz: Quiz;
  };
  explorer: {
    text: Translation;
    anatomy: AnatomyDetail[];
    wowFactor: Translation;
    quranVerse: QuranVerse;
    quiz: Quiz;
  };
}

export const objectsData: ObjectData[] = [
  {
    slug: "lebah",
    name: { id: "Lebah", en: "Honeybee" },
    scientificName: "Apis mellifera",
    surahName: "An-Nahl (68-69)",
    surahReference: "16:68-69",
    icon: "🐝",
    category: "Serangga",
    unlockedAtPoints: 0, // Free
    kosakata: [
      {
        arab: "نَحْلٌ",
        latin: "Nahl",
        arti: "Lebah",
        artiEn: "Honeybee",
        contohAyat: "An-Nahl 16:68",
        icon: "🐝"
      },
      {
        arab: "عَسَلٌ",
        latin: "Asal",
        arti: "Madu",
        artiEn: "Honey",
        contohAyat: "An-Nahl 16:69",
        icon: "🍯"
      },
      {
        arab: "وَحْيٌ",
        latin: "Wahy",
        arti: "Wahyu/Perintah Allah",
        artiEn: "Revelation/Command",
        contohAyat: "An-Nahl 16:68",
        icon: "📜"
      },
      {
        arab: "شِفَاءٌ",
        latin: "Syifa",
        arti: "Penyembuh",
        artiEn: "Healing",
        contohAyat: "An-Nahl 16:69",
        icon: "🧪"
      }
    ],
    balita: {
      text: {
        id: "Ini lebah! Lebah suka bunga. Lebah bikin madu yang manis. 🐝",
        en: "This is a bee! Bees love flowers. Bees make sweet honey. 🐝",
      },
      audioTranscript: {
        id: "Ini lebah! Lebah suka bunga. Lebah bikin madu yang manis.",
        en: "This is a bee! Bees love flowers. Bees make sweet honey.",
      },
      quiz: {
        question: {
          id: "Mana makanan manis yang dibuat oleh lebah?",
          en: "Which sweet food is made by bees?",
        },
        options: [
          { text: { id: "🍯 Madu", en: "🍯 Honey" }, isImage: true },
          { text: { id: "🍩 Donat", en: "🍩 Donut" }, isImage: true },
          { text: { id: "🍎 Apel", en: "🍎 Apple" }, isImage: true },
        ],
        answerIdx: 0,
      },
    },
    anak: {
      text: {
        id: "Lebah bekerja sama dalam koloni besar untuk memproduksi madu berkhasiat.",
        en: "Bees work together in large colonies to produce healthy honey.",
      },
      facts: [
        {
          id: "Lebah bisa terbang sejauh 800 km hanya untuk membuat satu sendok madu.",
          en: "A bee flies up to 800 km just to produce a single spoonful of honey.",
        },
        {
          id: "Lebah berkomunikasi dengan cara menari (goyang badan) untuk memberi tahu letak bunga.",
          en: "Bees communicate by dancing to tell their friends where flowers are.",
        },
        {
          id: "Satu koloni lebah bisa berisi hingga 60.000 lebah pekerja.",
          en: "A single bee colony can contain up to 60,000 worker bees.",
        },
      ],
      quranVerse: {
        arabic: "وَأَوْحَىٰ رَبُّكَ إِلَى النَّحْلِ أَنِ اتَّخِذِي مِنَ الْجِبَالِ بُيُوتًا وَمِنَ الشَّجَرِ وَمِمَّا يَعْرِشُونَ",
        transliteration: "Wa awhaa Rabbuka ilan-nahli anittakhizii minal jibaali buyootanw wa minash shajari wa mimmaa ya'rishoon",
        translation: {
          id: "Dan Tuhanmu mewahyukan kepada lebah, 'Buatlah sarang-sarang di bukit-bukit, di pohon-pohon kayu, dan di tempat-tempat yang dibuat manusia.'",
          en: "And your Lord inspired the bee, 'Take for yourself dwellings in the mountains and in the trees and in what they construct.'",
        },
      },
      quiz: {
        question: {
          id: "Bagaimana cara lebah memberi tahu temannya tentang letak bunga baru?",
          en: "How do bees tell their friends about the location of new flowers?",
        },
        options: [
          { text: { id: "Dengan bersuara keras", en: "By making loud noises" } },
          { text: { id: "Dengan menari goyang badan", en: "By performing a waggle dance" } },
          { text: { id: "Dengan menggigit temannya", en: "By biting their friends" } },
        ],
        answerIdx: 1,
      },
    },
    explorer: {
      text: {
        id: "Lebah madu memiliki sistem navigasi navigasi tingkat tinggi berbasis posisi matahari.",
        en: "Honeybees have highly sophisticated navigation systems based on the sun's position.",
      },
      anatomy: [
        {
          part: { id: "Mata Majemuk", en: "Compound Eyes" },
          desc: { id: "Terdiri dari ribuan lensa untuk mendeteksi cahaya UV dari bunga.", en: "Consists of thousands of lenses to detect UV light from flowers." },
        },
        {
          part: { id: "Kantung Madu", en: "Honey Stomach" },
          desc: { id: "Organ khusus untuk menyimpan nektar sementara sebelum dibawa ke sarang.", en: "Special organ to store nectar temporarily before bringing it to the hive." },
        },
        {
          part: { id: "Kaki Pengumpul", en: "Pollen Basket" },
          desc: { id: "Rambut khusus di kaki belakang untuk menempelkan serbuk sari.", en: "Specialized hairs on hind legs to carry pollen." },
        },
      ],
      wowFactor: {
        id: "Lebah menggunakan 'waggle dance' — sistem komunikasi yang baru dipahami ilmuwan di tahun 1973 oleh Karl von Frisch (menang Nobel). Tapi 14 abad sebelumnya, Al-Qur'an sudah menyebut lebah diperintah Allah secara spesifik untuk membuat sarang dan memproduksi minuman penyembuh (madu) yang bermacam-macam warnanya.",
        en: "Bees communicate using a 'waggle dance' — a system scientists only understood in 1973 through Karl von Frisch (winning a Nobel Prize). Yet 14 centuries ago, the Qur'an already stated that bees are inspired by Allah to build hives and produce a healing drink (honey) of varying colors.",
      },
      quranVerse: {
        arabic: "ثُمَّ كُلِي مِن كُلِّ الثَّمَرَاتِ فَاسْلُكِي سُبُلَ رَبِّكِ ذُلُلًا ۚ يَخْرُجُ مِن بُطُونِهَا شَرَابٌ مُّخْتَلِفٌ أَلْوَانُهُ فِيهِ شِفَاءٌ لِّلنَّاسِ ۗ إِنَّ فِي ذَٰلِكَ لَآيَةً لِّقَوْمٍ يَتَفَكَّرُونَ",
        transliteration: "Thumma kuli min kullith-thamarati fasluki subula Rabbiki zulula; yakhruju mim butuniha sharabum mukhtalifun alwanuhu fihi shifa'ul lin nas; inna fi zalika la ayatal liqawmiy yatafakkarun",
        translation: {
          id: "Kemudian makanlah dari segala (macam) buah-buahan lalu tempuhlah jalan Tuhanmu yang telah dimudahkan. Dari perutnya keluar minuman (madu) yang bermacam-macam warnanya, di dalamnya terdapat obat yang menyembuhkan bagi manusia. Sungguh, pada yang demikian itu benar-benar terdapat tanda (kebesaran Allah) bagi orang yang berpikir.",
          en: "Then eat from all the fruits and follow the ways of your Lord made easy for you. There emerges from their bellies a drink, varying in colors, in which there is healing for people. Indeed in that is a sign for a people who give thought.",
        },
        context: {
          id: "Ayat ini menekankan bahwa madu dihasilkan dari perut lebah (bukan dimuntahkan secara kotor) dan memiliki fungsi terapeutik alami (obat). Madu modern terbukti memiliki kandungan antibakteri dan antiinflamasi yang kuat.",
          en: "This verse emphasizes that honey is processed inside the bee's belly and acts as a natural cure. Modern science validates that honey contains powerful antibacterial and anti-inflammatory properties.",
        },
      },
      quiz: {
        question: {
          id: "Siapa ilmuwan yang memenangkan hadiah Nobel 1973 karena meneliti tarian komunikasi lebah?",
          en: "Who was the scientist who won the 1973 Nobel Prize for researching bee communication?",
        },
        options: [
          { text: { id: "Albert Einstein", en: "Albert Einstein" } },
          { text: { id: "Karl von Frisch", en: "Karl von Frisch" } },
          { text: { id: "Louis Pasteur", en: "Louis Pasteur" } },
        ],
        answerIdx: 1,
      },
    },
  },
  {
    slug: "semut",
    name: { id: "Semut", en: "Ant" },
    scientificName: "Formicidae",
    surahName: "An-Naml (18)",
    surahReference: "27:18",
    icon: "🐜",
    category: "Serangga",
    unlockedAtPoints: 50,
    balita: {
      text: {
        id: "Ini semut! Semut itu kecil tapi kuat. Mereka suka jalan berbaris bersama teman-temannya. 🐜",
        en: "This is an ant! Ants are small but strong. They like to march in lines with their friends. 🐜",
      },
      audioTranscript: {
        id: "Ini semut! Semut itu kecil tapi kuat. Mereka suka jalan berbaris bersama teman-temannya.",
        en: "This is an ant! Ants are small but strong. They like to march in lines with their friends.",
      },
      quiz: {
        question: {
          id: "Bagaimana cara semut berjalan bersama kelompoknya?",
          en: "How do ants walk together in a group?",
        },
        options: [
          { text: { id: "🚶 Berbaris rapi", en: "🚶 In a neat line" }, isImage: true },
          { text: { id: "✈️ Terbang acak", en: "✈️ Flying around" }, isImage: true },
          { text: { id: "⛵ Naik kapal", en: "⛵ On a ship" }, isImage: true },
        ],
        answerIdx: 0,
      },
    },
    anak: {
      text: {
        id: "Semut adalah serangga sosial yang hidup teratur dan memiliki ratu sebagai pemimpin.",
        en: "Ants are social insects that live in ordered societies led by a queen.",
      },
      facts: [
        {
          id: "Semut sangat kuat, mampu mengangkat benda yang beratnya 50 kali berat badannya sendiri.",
          en: "Ants are incredibly strong, capable of carrying objects 50 times their own body weight.",
        },
        {
          id: "Semut tidak memiliki telinga, mereka mendengarkan getaran tanah lewat kaki mereka.",
          en: "Ants do not have ears; they feel soil vibrations through their legs.",
        },
        {
          id: "Semut menyebarkan aroma kimia bernama feromon untuk membuat rute jalan.",
          en: "Ants leave chemical scent paths called pheromones to guide their friends.",
        },
      ],
      quranVerse: {
        arabic: "حَتَّىٰ إِذَا أَتَوْا عَلَىٰ وَادِ النَّمْلِ قَالَتْ نَمْلَةٌ يَا أَيُّهَا النَّمْلُ ادْخُلُوا مَسَاكِنَكُمْ لَا يَحْطِمَنَّكُمْ سُلَيْمَانُ وَجُنُودُهُ وَهُمْ لَا يَشْعُرُونَ",
        transliteration: "Hattaaa izaa ataw 'alaa waadin-namli qaalat namlatuy yaa ayyuhan-namlud khuloo masaakinakum laa yahtimannakum Sulaimaanu wa junooduhoo wa hum laa yash'uroon",
        translation: {
          id: "Hingga ketika mereka sampai di lembah semut, berkatalah seekor semut, 'Wahai semut-semut! Masuklah ke dalam sarang-sarangmu, agar kamu tidak diinjak oleh Sulaiman dan bala tentaranya, sedangkan mereka tidak menyadari.'",
          en: "Until, when they came upon the valley of the ants, an ant said, 'O ants, enter your dwellings that you not be crushed by Solomon and his soldiers while they perceive not.'",
        },
      },
      quiz: {
        question: {
          id: "Berapa kali berat tubuhnya sendiri yang bisa diangkat oleh seekor semut?",
          en: "How many times their own weight can an ant lift?",
        },
        options: [
          { text: { id: "2 kali", en: "2 times" } },
          { text: { id: "50 kali", en: "50 times" } },
          { text: { id: "1000 kali", en: "1000 times" } },
        ],
        answerIdx: 1,
      },
    },
    explorer: {
      text: {
        id: "Semut memiliki kecerdasan kolektif yang luar biasa dan struktur sarang yang kompleks.",
        en: "Ants have amazing collective intelligence and complex nest structures.",
      },
      anatomy: [
        {
          part: { id: "Mandibula", en: "Mandibles" },
          desc: { id: "Rahang kuat untuk mencapit, membawa beban, dan menggali sarang.", en: "Strong jaws used for pinching, carrying loads, and digging." },
        },
        {
          part: { id: "Antena", en: "Antennae" },
          desc: { id: "Alat indra utama untuk mencium aroma feromon dan berkomunikasi lewat sentuhan.", en: "Main sensory organs used to smell pheromones and touch-communicate." },
        },
        {
          part: { id: "Eksoskeleton", en: "Exoskeleton" },
          desc: { id: "Kerangka luar keras yang melindungi organ dalam tanpa perlu tulang dalam.", en: "Hard outer skeleton that protects internal organs without bones." },
        },
      ],
      wowFactor: {
        id: "Dalam Surah An-Naml, semut mengeluarkan instruksi taktis kepada kelompoknya: mengidentifikasi bahaya (pasukan Sulaiman), memberi perintah evakuasi ('masuklah ke sarang'), dan memberi uzur ('mereka tidak menyadari'). Sains membuktikan semut memiliki bahasa sinyal suara frekuensi tinggi (stridulasi) dan senyawa kimia kompleks untuk saling memperingatkan bahaya.",
        en: "In Surah An-Naml, a single ant issues tactical instructions: identifying danger (Solomon's army), commanding evacuation ('enter your hives'), and rationalizing ('they perceive not'). Science proves ants communicate using high-frequency sounds (stridulation) and pheromones to warn of incoming danger.",
      },
      quranVerse: {
        arabic: "قَالَتْ نَمْلَةٌ يَا أَيُّهَا النَّمْلُ ادْخُلُوا مَسَاكِنَكُمْ لَا يَحْطِمَنَّكُمْ سُلَيْمَانُ وَجُنُودُهُ",
        transliteration: "Qaalat namlatuy yaa ayyuhan-namlud khuloo masaakinakum laa yahtimannakum Sulaimaanu wa junooduhoo",
        translation: {
          id: "...berkatalah seekor semut, 'Wahai semut-semut! Masuklah ke dalam sarang-sarangmu, agar kamu tidak diinjak oleh Sulaiman dan bala tentaranya...'",
          en: "...an ant said, 'O ants, enter your dwellings that you not be crushed by Solomon and his soldiers...'",
        },
        context: {
          id: "Penggunaan kata feminim 'qaalat namlatun' membuktikan secara linguistik bahwa pengintai/pemimpin lapangan semut adalah semut betina (pekerja), yang baru dibenarkan secara ilmiah oleh entomologi modern abad ke-20.",
          en: "The feminine verb form 'qaalat namlatun' grammatically shows that the sentinel/leader ant is female (a worker), a biological detail only verified by modern entomology.",
        },
      },
      quiz: {
        question: {
          id: "Bagaimana cara semut mengirim sinyal darurat berupa suara?",
          en: "How do ants send emergency signals through sound?",
        },
        options: [
          { text: { id: "Dengan berteriak", en: "By shouting" } },
          { text: { id: "Dengan menggesekkan bagian perut (stridulasi)", en: "By rubbing abdomen parts (stridulation)" } },
          { text: { id: "Dengan memukul tanah", en: "By hitting the ground" } },
        ],
        answerIdx: 1,
      },
    },
  },
  {
    slug: "laba-laba",
    name: { id: "Laba-laba", en: "Spider" },
    scientificName: "Araneae",
    surahName: "Al-Ankabut (41)",
    surahReference: "29:41",
    icon: "🕷️",
    category: "Serangga",
    unlockedAtPoints: 100,
    balita: {
      text: {
        id: "Ini laba-laba! Laba-laba punya 8 kaki dan bisa merajut jaring sutra yang indah. 🕷️",
        en: "This is a spider! Spiders have 8 legs and spin beautiful silk webs. 🕷️",
      },
      audioTranscript: {
        id: "Ini laba-laba! Laba-laba punya 8 kaki dan bisa merajut jaring sutra yang indah.",
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
        id: "Secara fisik, sutra laba-laba sangat elastis dan kuat. Mengapa Quran menyebutnya 'rumah paling rapuh'? Sains menemukan rapuhnya sarang laba-laba bukan pada fisiknya, melainkan hubungan sosialnya: tidak ada kasih sayang. Laba-laba betina sering memakan pejantan setelah kawin, dan anak-anak laba-laba saling memakan satu sama lain setelah menetas.",
        en: "Physically, spider silk is extremely elastic and strong. Why does the Qur'an call it the 'weakest of homes'? Science reveals the weakness is social, not physical: there is no safety or love. Female spiders often eat the males after mating, and spiderlings eat each other after hatching.",
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
  },
  {
    slug: "unta",
    name: { id: "Unta", en: "Camel" },
    scientificName: "Camelus",
    surahName: "Al-Ghashiyah (17)",
    surahReference: "88:17",
    icon: "🐫",
    category: "Hewan Darat",
    unlockedAtPoints: 150,
    balita: {
      text: {
        id: "Ini unta! Unta punya punuk besar di punggungnya untuk berjalan jauh di gurun pasir yang panas. 🐫",
        en: "This is a camel! Camels have big humps on their backs to travel far in the hot desert. 🐫",
      },
      audioTranscript: {
        id: "Ini unta! Unta punya punuk besar di punggungnya untuk berjalan jauh di gurun pasir yang panas.",
        en: "This is a camel! Camels have big humps on their backs to travel far in the hot desert.",
      },
      quiz: {
        question: {
          id: "Di manakah tempat tinggal alamiah unta?",
          en: "Where do camels naturally live?",
        },
        options: [
          { text: { id: "❄️ Kutub Es", en: "❄️ Snowy Poles" }, isImage: true },
          { text: { id: "🏜️ Gurun Pasir", en: "🏜️ Sandy Desert" }, isImage: true },
          { text: { id: "🌊 Laut Dalam", en: "🌊 Deep Sea" }, isImage: true },
        ],
        answerIdx: 1,
      },
    },
    anak: {
      text: {
        id: "Unta dijuluki 'kapal gurun' karena kekuatannya menyeberangi lautan pasir tanpa air.",
        en: "Camels are called 'ships of the desert' for their ability to cross hot sand oceans without water.",
      },
      facts: [
        {
          id: "Punuk unta tidak menyimpan air, melainkan lemak sebagai cadangan makanan.",
          en: "A camel's hump does not store water; it stores fat as an energy reserve.",
        },
        {
          id: "Unta bisa minum 100 liter air sekaligus hanya dalam waktu 10 menit.",
          en: "A camel can drink up to 100 liters of water at once in just 10 minutes.",
        },
        {
          id: "Mereka memiliki kelopak mata ketiga transparan untuk melindungi dari badai pasir.",
          en: "They have a transparent third eyelid to shield their eyes during sandstorms.",
        },
      ],
      quranVerse: {
        arabic: "أَفَلَا يَنْظُرُونَ إِلَى الْإِبِلِ كَيْفَ خُلِقَتْ",
        transliteration: "Afalaa yanzuroona ilal ibili kaifa khuliqat",
        translation: {
          id: "Maka tidakkah mereka memperhatikan bagaimana unta diciptakan?",
          en: "Do they not look at the camels - how they are created?",
        },
      },
      quiz: {
        question: {
          id: "Apa isi sebenarnya dari punuk yang ada di punggung unta?",
          en: "What is actually stored inside a camel's hump?",
        },
        options: [
          { text: { id: "Air minum", en: "Drinking water" } },
          { text: { id: "Lemak cadangan makanan", en: "Fat food reserves" } },
          { text: { id: "Pasir gurun", en: "Desert sand" } },
        ],
        answerIdx: 1,
      },
    },
    explorer: {
      text: {
        id: "Struktur fisiologi unta dirancang khusus untuk bertahan hidup di suhu ekstrem Gurun.",
        en: "A camel's physiological design is uniquely adapted to survive extreme desert climates.",
      },
      anatomy: [
        {
          part: { id: "Sel Darah Merah Oval", en: "Oval Red Blood Cells" },
          desc: { id: "Mampu mengembang hingga 240% tanpa pecah saat minum air dalam jumlah banyak.", en: "Can expand up to 240% of their size without bursting when rehydrating." },
        },
        {
          part: { id: "Kaki Lebar Berlapis", en: "Padded Feet" },
          desc: { id: "Kaki melebar mencegah terperosok ke dalam pasir panas yang gembur.", en: "Wide footpads that spread out to prevent sinking into loose, hot sand." },
        },
      ],
      wowFactor: {
        id: "Allah secara khusus menantang manusia meneliti unta ('kaifa khuliqat'). Unta memiliki ginjal yang sangat efisien yang menyaring urine menjadi sangat pekat untuk meminimalkan kehilangan air, serta hidung yang bisa mengembunkan uap napas kembali menjadi cairan tubuh.",
        en: "Allah specifically challenges humanity to study the camel ('how they are created'). Camels have highly efficient kidneys that concentrate urine to minimize water loss, and nasal passages that reclaim moisture from exhaled air.",
      },
      quranVerse: {
        arabic: "أَفَلَا يَنْظُرُونَ إِلَى الْإِبِلِ كَيْفَ خُلِقَتْ",
        transliteration: "Afalaa yanzuroona ilal ibili kaifa khuliqat",
        translation: {
          id: "Maka tidakkah mereka memperhatikan bagaimana unta diciptakan?",
          en: "Do they not look at the camels - how they are created?",
        },
        context: {
          id: "Ajakan mengamati unta mendahului langit dan gunung, karena bagi masyarakat Arab Gurun, unta adalah lambang vitalitas dan teknologi hidup tercanggih penakluk iklim keras.",
          en: "The invitation to observe camels precedes the sky and mountains, as they represent the ultimate living technology engineered to conquer hostile terrains.",
        },
      },
      quiz: {
        question: {
          id: "Apa keistimewaan sel darah merah unta dibanding mamalia lain?",
          en: "What makes camel red blood cells unique compared to other mammals?",
        },
        options: [
          { text: { id: "Bentuknya segitiga", en: "They are triangular" } },
          { text: { id: "Bentuknya oval dan elastis mengembang", en: "They are oval and highly stretchable" } },
          { text: { id: "Berwarna biru", en: "They are blue" } },
        ],
        answerIdx: 1,
      },
    },
  },
  {
    slug: "nyamuk",
    name: { id: "Nyamuk", en: "Mosquito" },
    scientificName: "Culicidae",
    surahName: "Al-Baqarah (26)",
    surahReference: "2:26",
    icon: "🦟",
    category: "Serangga",
    unlockedAtPoints: 200,
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
        id: "Ayat Qur'an menyebut perumpamaan 'nyamuk atau yang lebih kecil di atasnya' (fama fawqaha). Mikroskop modern membuktikan ada mikroorganisme parasit berupa tungau/kutu debu mikroskopis yang hidup menumpang di atas kepala nyamuk sebagai inangnya!",
        en: "The Qur'an references a 'mosquito or what is above it' (fama fawqaha). Modern microscopes have discovered microscopic mites and parasites living on top of the mosquito's head!",
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
          id: "Apa temuan mikroskopis yang menjelaskan frasa 'hewan di atas nyamuk' dalam Surah Al-Baqarah?",
          en: "What microscopic discovery explains the phrase 'what is above the mosquito' in Surah Al-Baqarah?",
        },
        options: [
          { text: { id: "Ada serpihan debu besar di sayap nyamuk", en: "Large dust particles on wings" } },
          { text: { id: "Ada tungau/kutu mikroskopis yang hidup menumpang di kepala nyamuk", en: "Microscopic mites living on top of the mosquito's head" } },
          { text: { id: "Nyamuk selalu terbang di atas semut", en: "Mosquitoes flying above ants" } },
        ],
        answerIdx: 1,
      },
    },
  },
  {
    slug: "gajah",
    name: { id: "Gajah", en: "Elephant" },
    scientificName: "Elephantidae",
    surahName: "Al-Fil (1-5)",
    surahReference: "105:1-5",
    icon: "🐘",
    category: "Hewan Darat",
    unlockedAtPoints: 250,
    balita: {
      text: {
        id: "Ini gajah! Gajah punya belalai panjang dan telinga lebar yang bergoyang-goyang. 🐘",
        en: "This is an elephant! Elephants have long trunks and big floppy ears. 🐘",
      },
      audioTranscript: {
        id: "Ini gajah! Gajah punya belalai panjang dan telinga lebar yang bergoyang-goyang.",
        en: "This is an elephant! Elephants have long trunks and big floppy ears.",
      },
      quiz: {
        question: {
          id: "Manakah ciri khas hidung gajah?",
          en: "What is the signature feature of an elephant's nose?",
        },
        options: [
          { text: { id: "👃 Belalai Panjang", en: "👃 Long Trunk" }, isImage: true },
          { text: { id: "🐦 Paruh", en: "🐦 Beak" }, isImage: true },
          { text: { id: "🦁 Taring", en: "🦁 Fangs" }, isImage: true },
        ],
        answerIdx: 0,
      },
    },
    anak: {
      text: {
        id: "Gajah adalah hewan darat terbesar yang terkenal cerdas dan penyayang keluarga.",
        en: "Elephants are the largest land animals, known for their high intelligence and strong family bonds.",
      },
      facts: [
        {
          id: "Belalai gajah sangat kuat, tersusun dari 40.000 otot untuk menggenggam makanan.",
          en: "An elephant's trunk is extremely strong, containing 40,000 muscles to grasp food.",
        },
        {
          id: "Gajah berkomunikasi menggunakan suara infrasonik frekuensi rendah yang merambat lewat tanah.",
          en: "Elephants communicate using low-frequency infrasound that travels through the ground.",
        },
        {
          id: "Mereka memiliki ingatan luar biasa, mampu mengingat sumber air selama puluhan tahun.",
          en: "They have exceptional memory, remembering waterhole locations for decades.",
        },
      ],
      quranVerse: {
        arabic: "أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِأَصْحَابِ الْفِيلِ",
        transliteration: "Alam tara kaifa fa'ala Rabbuka bi ashaabil feel",
        translation: {
          id: "Tidakkah engkau memperhatikan bagaimana Tuhanmu telah bertindak terhadap pasukan bergajah?",
          en: "Have you not seen how your Lord dealt with the companions of the elephant?",
        },
      },
      quiz: {
        question: {
          id: "Berapa banyak otot yang menyusun belalai gajah?",
          en: "How many muscles make up an elephant's trunk?",
        },
        options: [
          { text: { id: "40 otot", en: "40 muscles" } },
          { text: { id: "4.000 otot", en: "4,000 muscles" } },
          { text: { id: "40.000 otot", en: "40,000 muscles" } },
        ],
        answerIdx: 2,
      },
    },
    explorer: {
      text: {
        id: "Gajah memiliki otak besar dengan kapasitas memori emosional yang luar biasa.",
        en: "Elephants possess large brains capable of deep emotional memory.",
      },
      anatomy: [
        {
          part: { id: "Telinga Lebar", en: "Large Ears" },
          desc: { id: "Berfungsi menyebarkan panas tubuh untuk mendinginkan darah saat cuaca panas.", en: "Used to radiate body heat and cool down blood temperature." },
        },
        {
          part: { id: "Gading", en: "Tusks" },
          desc: { id: "Gigi seri memanjang untuk menggali tanah, mengupas kulit pohon, dan melindungi diri.", en: "Elongated incisor teeth used to dig, strip bark, and protect themselves." },
        },
      ],
      wowFactor: {
        id: "Pasukan Abrahah membawa gajah tempur besar ke Mekah untuk meruntuhkan Ka'bah. Uniknya, riwayat mencatat gajah Abrahah bernama Mahmud menolak maju ke arah Ka'bah dan malah bersimpuh (duduk), tunduk pada takdir Allah, meski dipukuli. Naluri alamiah hewan mengenali kekuasaan Penciptanya.",
        en: "Abrahah's army brought war elephants to destroy the Kaaba. Historical records state the lead elephant, Mahmud, knelt down and refused to march toward the Kaaba, resisting whips, submitting to Allah's decree. Animal instincts recognize the authority of their Creator.",
      },
      quranVerse: {
        arabic: "وَأَرْسَلَ عَلَيْهِمْ طَيْرًا أَبَابِيلَ تَرْمِيهِمْ بِحِجَارَةٍ مِنْ سِجِّيلٍ",
        transliteration: "Wa arsala 'alaihim tairan abaabeel. Tarmeehim bi hijaratim min sijjeel",
        translation: {
          id: "Dan Dia mengirimkan kepada mereka burung yang berbondong-bondong, yang melempari mereka dengan batu dari tanah liat yang dibakar.",
          en: "And He sent against them birds in flocks, striking them with stones of hard clay.",
        },
        context: {
          id: "Peristiwa runtuhnya pasukan gajah ini terjadi pada tahun kelahiran Nabi Muhammad SAW, menandai perlindungan Ilahi atas kota suci Mekah dari penyerbuan militer asing.",
          en: "The collapse of the elephant army occurred in the year of Prophet Muhammad's birth, signaling divine protection over the holy city of Mecca.",
        },
      },
      quiz: {
        question: {
          id: "Apa reaksi gajah utama Abrahah (Mahmud) ketika dihadapkan ke arah Ka'bah?",
          en: "What did Abrahah's lead elephant (Mahmud) do when directed toward the Kaaba?",
        },
        options: [
          { text: { id: "Menyerang Ka'bah dengan marah", en: "Attacked the Kaaba angrily" } },
          { text: { id: "Bersimpuh (duduk) menolak maju", en: "Dutifully knelt down and refused to move forward" } },
          { text: { id: "Berlari kencang kembali ke Yaman", en: "Ran back to Yemen" } },
        ],
        answerIdx: 1,
      },
    },
  },
  {
    slug: "lalat",
    name: { id: "Lalat", en: "Fly" },
    scientificName: "Musca domestica",
    surahName: "Al-Hajj (73)",
    surahReference: "22:73",
    icon: "🪰",
    category: "Serangga",
    unlockedAtPoints: 300,
    balita: {
      text: {
        id: "Ini lalat! Lalat suka terbang cepat dan hinggap di makanan. Kita harus tutup makanan kita. 🪰",
        en: "This is a fly! It flies fast and lands on food. We must keep our food covered. 🪰",
      },
      audioTranscript: {
        id: "Ini lalat! Lalat suka terbang cepat dan hinggap di makanan. Kita harus tutup makanan kita.",
        en: "This is a fly! It flies fast and lands on food. We must keep our food covered.",
      },
      quiz: {
        question: {
          id: "Bagaimana cara menjaga makanan agar tidak dihinggapi lalat?",
          en: "How do we protect our food from flies?",
        },
        options: [
          { text: { id: "🍲 Menutup makanan", en: "🍲 Covering the food" }, isImage: true },
          { text: { id: "💨 Ditiup angin", en: "💨 Blowing air" }, isImage: true },
          { text: { id: "🔥 Dibakar", en: "🔥 Burning it" }, isImage: true },
        ],
        answerIdx: 0,
      },
    },
    anak: {
      text: {
        id: "Lalat adalah penerbang lincah yang memiliki cara makan yang sangat unik.",
        en: "Flies are agile aviators that possess an extremely unique way of eating.",
      },
      facts: [
        {
          id: "Lalat memiliki indra perasa di kaki mereka untuk mencicipi rasa makanan.",
          en: "Flies have taste sensors on their feet to taste food when they land.",
        },
        {
          id: "Lalat tidak bisa mengunyah, mereka mengeluarkan air liur asam untuk mencairkan makanan.",
          en: "Flies cannot chew; they spit acidic saliva to liquefy food before sucking it.",
        },
        {
          id: "Lalat terbang dengan bantuan organ penyeimbang mirip giroskop bernama haltere.",
          en: "Flies fly with the help of gyroscope-like balancing organs called halteres.",
        },
      ],
      quranVerse: {
        arabic: "يَا أَيُّهَا النَّاسُ ضُرِبَ مَثَلٌ فَاسْتَمِعُوا لَهُ ۚ إِنَّ الَّذِينَ تَدْعُونَ مِنْ دُونِ اللَّهِ لَنْ يَخْلُقُوا ذُبَابًا وَلَوِ اجْتَمَعُوا لَهُ",
        transliteration: "Yaaa ayyuhan naasu duriba mathalun fastami'oo lah; innal lazeena tad'oona min doonillaahi lany yakhluqoo zubaabanw wa lawijtam'oo lah",
        translation: {
          id: "Wahai manusia! Telah dibuat suatu perumpamaan, maka dengarkanlah! Sesungguhnya segala yang kamu seru selain Allah tidak dapat menciptakan seekor lalat pun, walaupun mereka bersatu untuk membuatnya.",
          en: "O people, an example is presented, so listen to it. Indeed, those you invoke besides Allah will never create a fly, even if they gathered together for that purpose.",
        },
      },
      quiz: {
        question: {
          id: "Di bagian tubuh manakah lalat meletakkan indra pengecap/rasanya?",
          en: "Where are a fly's taste receptors located?",
        },
        options: [
          { text: { id: "Di lidah", en: "On their tongue" } },
          { text: { id: "Di kaki", en: "On their feet" } },
          { text: { id: "Di ekor", en: "On their tail" } },
        ],
        answerIdx: 1,
      },
    },
    explorer: {
      text: {
        id: "Proses pencernaan lalat sangat cepat, melarutkan makanan dalam hitungan detik.",
        en: "A fly's digestion process is incredibly fast, liquefying food in seconds.",
      },
      anatomy: [
        {
          part: { id: "Haltere", en: "Halteres" },
          desc: { id: "Modifikasi sayap belakang menjadi organ giroskop navigasi udara 3D.", en: "Hind wing modifications that act as 3D gyroscopes for aerial maneuvers." },
        },
        {
          part: { id: "Mata Labirin", en: "Compound Eyes" },
          desc: { id: "Mata besar dengan 4.000 lensa visual terpisah untuk melihat gerakan lambat.", en: "Huge compound eyes with 4,000 facets to detect movement in slow motion." },
        },
      ],
      wowFactor: {
        id: "Surah Al-Hajj:73 menyebutkan 'jika lalat merebut sesuatu dari mereka, mereka tidak dapat merebutnya kembali'. Mengapa tidak bisa? Sains membuktikan bahwa begitu lalat menyentuh makanan, ia langsung mengeluarkan enzim pelarut asam yang mengubah struktur kimia makanan padat menjadi cairan dalam milidetik. Makanan tersebut hancur secara kimiawi seketika, sehingga tidak mungkin direbut kembali ke kondisi semula.",
        en: "Surah Al-Hajj:73 states 'if the fly should steal from them a thing, they could not recover it'. Why? Science proves that when a fly lands, it immediately secretes enzymes that chemically dissolve and alter the food structure in milliseconds. The food is instantly digested externally, making it impossible to recover in its original state.",
      },
      quranVerse: {
        arabic: "وَإِنْ يَسْلُبْهُمُ الذُّبَابُ شَيْئًا لَا يَسْتَنْقِذُوهُ مِنْهُ ۚ ضَعُفَ الطَّالِبُ وَالْمَطْلُوبُ",
        transliteration: "Wa iny yaslubhumuz zubaabu shai'al laa yastanquzoohu minh; da'ufat taalibu wal matloob",
        translation: {
          id: "Dan jika lalat itu merebut sesuatu dari mereka, mereka tidak dapat merebutnya kembali dari lalat itu. Sama lemahnya yang menyembah dan yang disembah.",
          en: "And if the fly should steal from them a thing, they could not recover it from him. Weak are the pursuer and pursued.",
        },
        context: {
          id: "Perumpamaan ini meruntuhkan keangkuhan manusia. Patung-patung sesembahan tidak mampu berbuat apa-apa, bahkan menolak lalat kecil yang memakan kurban sesajian di atas kepala mereka pun tidak bisa.",
          en: "This metaphor humbles human arrogance. False gods cannot even defend their own sacrificial food offerings from a tiny fly.",
        },
      },
      quiz: {
        question: {
          id: "Mengapa secara ilmiah manusia tidak bisa mengambil kembali makanan yang direbut lalat?",
          en: "Why is it scientifically impossible to recover food stolen by a fly?",
        },
        options: [
          { text: { id: "Lalat terbang terlalu cepat", en: "Flies fly away too fast" } },
          { text: { id: "Makanan langsung dicairkan & strukturnya rusak secara kimiawi seketika", en: "Food is instantly liquefied and its chemical structure is permanently altered" } },
          { text: { id: "Lalat menelan makanan bulat-bulat", en: "Flies swallow food whole" } },
        ],
        answerIdx: 1,
      },
    },
  },
  {
    slug: "hudhud",
    name: { id: "Burung Hudhud", en: "Hoopoe Bird" },
    scientificName: "Upupa epops",
    surahName: "An-Naml (20-22)",
    surahReference: "27:20-22",
    icon: "🐦",
    category: "Burung",
    unlockedAtPoints: 350,
    balita: {
      text: {
        id: "Ini burung Hudhud! Bulunya cantik dengan mahkota indah di atas kepalanya. 🐦",
        en: "This is a Hoopoe bird! It has beautiful feathers and a lovely crown on its head. 🐦",
      },
      audioTranscript: {
        id: "Ini burung Hudhud! Bulunya cantik dengan mahkota indah di atas kepalanya.",
        en: "This is a Hoopoe bird! It has beautiful feathers and a lovely crown on its head.",
      },
      quiz: {
        question: {
          id: "Apa yang ada di atas kepala burung Hudhud?",
          en: "What is on top of the Hoopoe bird's head?",
        },
        options: [
          { text: { id: "👑 Mahkota Bulu", en: "👑 Feather Crown" }, isImage: true },
          { text: { id: "🎩 Topi Hitam", en: "🎩 Black Hat" }, isImage: true },
          { text: { id: "👓 Kacamata", en: "👓 Glasses" }, isImage: true },
        ],
        answerIdx: 0,
      },
    },
    anak: {
      text: {
        id: "Burung Hudhud adalah utusan cerdas dalam kisah Nabi Sulaiman yang membawa kabar penting.",
        en: "The Hoopoe bird is a smart messenger in King Solomon's story, carrying important news.",
      },
      facts: [
        {
          id: "Hudhud memiliki paruh panjang melengkung untuk berburu serangga di dalam tanah.",
          en: "Hopoes have a long curved bill to hunt for insects deep inside the soil.",
        },
        {
          id: "Mereka memiliki navigasi udara luar biasa untuk mendeteksi sumber air bawah tanah.",
          en: "They possess extraordinary spatial navigation and can locate underground water sources.",
        },
        {
          id: "Hudhud bisa mengepakkan sayapnya menyerupai gerakan kupu-kupu besar.",
          en: "They fly with a distinctive undulating motion resembling a giant butterfly.",
        },
      ],
      quranVerse: {
        arabic: "وَتَفَقَّدَ الطَّيْرَ فَقَالَ مَا لِيَ لَا أَرَى الْهُدْهُدَ أَمْ كَانَ مِنَ الْغَائِبِينَ",
        transliteration: "Wa tafaqqadat taira faqaala maa liya laa aral hudhuda am kaana minal ghaaa'ibeen",
        translation: {
          id: "Dan dia (Sulaiman) memeriksa burung-burung lalu berkata, 'Mengapa aku tidak melihat Hudhud, atau apakah ia termasuk yang tidak hadir?'",
          en: "And he took attendance of the birds and said, 'Why do I not see the hoopoe - or is he among the absent?'",
        },
      },
      quiz: {
        question: {
          id: "Nabi siapakah yang mengutus burung Hudhud sebagai pembawa surat?",
          en: "Which Prophet sent the Hoopoe bird as a letter messenger?",
        },
        options: [
          { text: { id: "Nabi Nuh", en: "Prophet Noah" } },
          { text: { id: "Nabi Sulaiman", en: "Prophet Solomon" } },
          { text: { id: "Nabi Ibrahim", en: "Prophet Abraham" } },
        ],
        answerIdx: 1,
      },
    },
    explorer: {
      text: {
        id: "Hudhud dibekali kemampuan navigasi canggih untuk perjalanan migrasi ribuan kilometer.",
        en: "Hoopoes are equipped with advanced navigation mechanisms for long-distance migration.",
      },
      anatomy: [
        {
          part: { id: "Jambul (Crest)", en: "Crest" },
          desc: { id: "Bulu di kepala yang bisa mengembang saat mendeteksi bahaya atau bersosialisasi.", en: "Head feathers that expand when sensing danger or during social display." },
        },
        {
          part: { id: "Paruh Sensorik", en: "Sensory Beak" },
          desc: { id: "Paruh sensitif getaran untuk mendeteksi pergerakan cacing di dalam tanah gelap.", en: "Vibration-sensitive beak designed to feel moving grubs inside dark soil." },
        },
      ],
      wowFactor: {
        id: "Nabi Sulaiman menggunakan burung Hudhud sebagai pencari informasi geografi dan mata-mata militer. Hudhud melaporkan peradaban Negeri Saba yang menyembah matahari. Studi ornitologi membuktikan burung Hudhud memiliki kompas magnetik alami di kepalanya untuk navigasi lintas samudera yang sangat presisi.",
        en: "King Solomon deployed the Hoopoe as a geographic scout. The hoopoe reported on the Kingdom of Sheba. Ornithology confirms hoopoes contain natural biomagnetic compasses in their heads, enabling highly precise transcontinental navigation.",
      },
      quranVerse: {
        arabic: "فَمَكَثَ غَيْرَ بَعِيدٍ فَقَالَ أَحَطتُ بِمَا لَمْ تُحِطْ بِهِ وَجِئْتُكَ مِن سَبَإٍ بِنَبَإٍ يَقِينٍ",
        transliteration: "Famakatha ghaira ba'eedin faqaala ahattu bimaa lam tuhit bihee wa ji'tuka min Saba'im binaba'iny yaqeen",
        translation: {
          id: "Maka tidak lama kemudian (datanglah Hudhud), lalu ia berkata, 'Aku telah mengetahui sesuatu yang belum engkau ketahui; dan aku bawa kepadamu dari negeri Saba suatu berita yang meyakinkan.'",
          en: "But the hoopoe stayed not long and said, 'I have encompassed [in knowledge] that which you have not encompassed, and I have come to you from Sheba with certain news.'",
        },
        context: {
          id: "Keberanian burung Hudhud membuktikan kecerdasan kognitifnya. Ia berani berargumen di hadapan raja besar Sulaiman karena membawa fakta kebenaran ilmiah lapangan.",
          en: "The hoopoe's bold response highlights its cognitive sophistication, defending itself with factual findings before King Solomon.",
        },
      },
      quiz: {
        question: {
          id: "Kemampuan navigasi alami apakah yang dimiliki kepala burung Hudhud?",
          en: "What natural navigation system does a hoopoe have in its head?",
        },
        options: [
          { text: { id: "Indra pendengar sonar", en: "Sonar sound detection" } },
          { text: { id: "Kompas biomagnetik alami untuk membaca medan magnet bumi", en: "Biomagnetic compass that reads the Earth's magnetic fields" } },
          { text: { id: "Penglihatan infra merah", en: "Infrared heat vision" } },
        ],
        answerIdx: 1,
      },
    },
  },
  {
    slug: "paus",
    name: { id: "Ikan Paus", en: "Whale" },
    scientificName: "Cetacea",
    surahName: "As-Saffat (142)",
    surahReference: "37:142",
    icon: "🐋",
    category: "Hewan Air",
    unlockedAtPoints: 400,
    balita: {
      text: {
        id: "Ini paus! Tubuhnya sangat besar seperti pulau. Paus tinggal di laut dalam dan suka menyemburkan air. 🐋",
        en: "This is a whale! It is as big as an island. It lives in the deep blue sea and spouts water. 🐋",
      },
      audioTranscript: {
        id: "Ini paus! Tubuhnya sangat besar seperti pulau. Paus tinggal di laut dalam dan suka menyemburkan air.",
        en: "This is a whale! It is as big as an island. It lives in the deep blue sea and spouts water.",
      },
      quiz: {
        question: {
          id: "Di manakah paus tinggal?",
          en: "Where do whales live?",
        },
        options: [
          { text: { id: "🌊 Laut", en: "🌊 Ocean" }, isImage: true },
          { text: { id: "🌲 Hutan", en: "🌲 Forest" }, isImage: true },
          { text: { id: "🏙️ Kota", en: "🏙️ City" }, isImage: true },
        ],
        answerIdx: 0,
      },
    },
    anak: {
      text: {
        id: "Paus bukan ikan biasa, mereka adalah mamalia raksasa yang bernapas dengan paru-paru.",
        en: "Whales are not actual fish; they are giant mammals that breathe using lungs.",
      },
      facts: [
        {
          id: "Paus Biru adalah hewan terbesar di bumi, lidahnya saja seberat seekor gajah.",
          en: "The Blue Whale is the largest animal ever, with a tongue weighing as much as an elephant.",
        },
        {
          id: "Paus bernapas melalui lubang sembur (blowhole) di atas kepala mereka.",
          en: "Whales breathe through blowholes located on top of their heads.",
        },
        {
          id: "Paus bernyanyi dengan melodi indah untuk berkomunikasi sejauh ribuan kilometer.",
          en: "Whales sing complex melodies to communicate across thousands of kilometers.",
        },
      ],
      quranVerse: {
        arabic: "فَالْتَقَمَهُ الْحُوتُ وَهُوَ مُلِيمٌ",
        transliteration: "Faltaqamahul hootu wa huwa muleem",
        translation: {
          id: "Maka dia ditelan oleh ikan besar (paus) dalam keadaan tercela.",
          en: "Then the fish (whale) swallowed him while he was blameworthy.",
        },
      },
      quiz: {
        question: {
          id: "Bagaimana cara paus menghirup udara bersih?",
          en: "How do whales breathe clean air?",
        },
        options: [
          { text: { id: "Menggunakan insang", en: "Using gills" } },
          { text: { id: "Lewat lubang sembur (blowhole) di atas kepala", en: "Through a blowhole on top of their head" } },
          { text: { id: "Menggunakan sisik", en: "Through scales" } },
        ],
        answerIdx: 1,
      },
    },
    explorer: {
      text: {
        id: "Paus memiliki adaptasi fisiologis laut dalam yang menakjubkan untuk menyelam berjam-jam.",
        en: "Whales have stunning physiological adaptations for deep-diving without getting decompression sickness.",
      },
      anatomy: [
        {
          part: { id: "Baleen", en: "Baleen Plates" },
          desc: { id: "Struktur penyaring mirip sapu untuk menyaring udang kecil (krill) dari air.", en: "Broom-like filter structures to trap krill while flushing out seawater." },
        },
        {
          part: { id: "Lapisan Blubber", en: "Blubber Layer" },
          desc: { id: "Lapisan lemak tebal di bawah kulit untuk menahan kehangatan di air es kutub.", en: "Thick fat layer underneath the skin protecting internal organs from freezing arctic temperatures." },
        },
      ],
      wowFactor: {
        id: "Nabi Yunus AS ditelan hidup-hidup oleh ikan paus ('Al-Hut') dan bertahan hidup berhari-hari di dalam perutnya. Secara medis, paus sperma memiliki lambung tiga bilik raksasa. Bilik pertama tidak memproduksi asam pencernaan, melainkan hanya wadah mekanis beroksigen tempat mangsa disimpan sementara sebelum dicerna, memungkinkan Yunus bertahan hidup.",
        en: "Prophet Jonah (Yunus) was swallowed alive by a whale ('Al-Hut') and survived inside its belly. Specially, Sperm Whales possess a three-chambered stomach. The first chamber acts as an oxygenated container, functioning without digestive acids, allowing Jonah to survive.",
      },
      quranVerse: {
        arabic: "فَلَوْلَا أَنَّهُ كَانَ مِنَ الْمُسَبِّحِينَ لَلَبِثَ فِي بَطْنِهِ إِلَىٰ يَوْمِ يُبْعَثُونَ",
        transliteration: "Falaw laaa anna hoo kaana minal musabbiheena Lalabitha fee batnihiii ilaa yawmi yub'athoon",
        translation: {
          id: "Maka sekiranya dia tidak termasuk orang yang banyak berdzikir (mengingat Allah), niscaya dia akan tetap tinggal di dalam perut (paus) itu sampai hari kebangkitan.",
          en: "And had he not been of those who exalt Allah, he would have remained inside its belly until the Day they are resurrected.",
        },
        context: {
          id: "Doa Nabi Yunus di dalam kegelapan perut paus ('La ilaha illa Anta, Subhanaka inni kuntu minaz-zalimin') adalah salah satu doa terkuat untuk memohon keselamatan dari kesempitan hidup.",
          en: "Prophet Jonah's prayer inside the whale's belly ('There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers') remains a powerful invocation for relief.",
        },
      },
      quiz: {
        question: {
          id: "Mengapa Nabi Yunus secara anatomis dimungkinkan bertahan hidup di lambung pertama paus sperma?",
          en: "Why was it anatomically possible for Prophet Jonah to survive in a sperm whale's first stomach chamber?",
        },
        options: [
          { text: { id: "Karena lambung paus sangat dingin", en: "Because the stomach is cold" } },
          { text: { id: "Bilik pertama tidak menghasilkan asam pencernaan dan beroksigen", en: "The first chamber lacks digestive acids and holds oxygen" } },
          { text: { id: "Paus tidak memakan daging", en: "Whales do not eat meat" } },
        ],
        answerIdx: 1,
      },
    },
  },
  {
    slug: "kuda",
    name: { id: "Kuda", en: "Horse" },
    scientificName: "Equus caballus",
    surahName: "Al-Adiyat (1-2)",
    surahReference: "100:1-2",
    icon: "🐎",
    category: "Hewan Darat",
    unlockedAtPoints: 450,
    balita: {
      text: {
        id: "Ini kuda! Kuda berlari kencang sekali. Kuku kakinya berbunyi tak-tok-tak-tok saat berjalan. 🐎",
        en: "This is a horse! It runs very fast. Its hooves go clip-clop when it walks. 🐎",
      },
      audioTranscript: {
        id: "Ini kuda! Kuda berlari kencang sekali. Kuku kakinya berbunyi tak-tok-tak-tok saat berjalan.",
        en: "This is a horse! It runs very fast. Its hooves go clip-clop when it walks.",
      },
      quiz: {
        question: {
          id: "Suara langkah kaki kuda berbunyi seperti apa?",
          en: "What sound do horse hooves make?",
        },
        options: [
          { text: { id: "🎵 Tak-tok-tak-tok", en: "🎵 Clip-clop" }, isImage: true },
          { text: { id: "🎵 Krik-krik", en: "🎵 Chirp-chirp" }, isImage: true },
          { text: { id: "🎵 Byur-byur", en: "🎵 Splash-splash" }, isImage: true },
        ],
        answerIdx: 0,
      },
    },
    anak: {
      text: {
        id: "Kuda adalah hewan tangguh berkuku satu yang mendampingi perjuangan para kesatria.",
        en: "Horses are resilient single-hooved animals that have accompanied knights in histories.",
      },
      facts: [
        {
          id: "Kuda bisa tidur sambil berdiri karena memiliki sistem pengunci sendi kaki (stay apparatus).",
          en: "Horses can sleep standing up due to a unique joint-locking system (stay apparatus).",
        },
        {
          id: "Mata kuda berada di samping, memberikan sudut pandang hampir 360 derajat.",
          en: "A horse's eyes are located on the sides of its head, providing an almost 360-degree view.",
        },
        {
          id: "Kuku kuda terbuat dari keratin, bahan yang sama dengan kuku jari manusia.",
          en: "A horse's hoof is made of keratin, the same material as human fingernails.",
        },
      ],
      quranVerse: {
        arabic: "وَالْعَادِيَاتِ ضَبْحًا فَالْمُورِيَاتِ قَدْحًا",
        transliteration: "Wal-'aadiyaati dabhaa. Fal-mooriyaati qadhaa",
        translation: {
          id: "Demi kuda perang yang berlari kencang dengan terengah-engah, dan kuda yang mencetuskan api (dengan pukulan kuku kakinya).",
          en: "By the racing horses, panting, and the producers of sparks [when their hooves strike rocks].",
        },
      },
      quiz: {
        question: {
          id: "Mengapa kuda bisa tidur pulas sambil tetap berdiri kokoh?",
          en: "How can horses sleep soundly while standing up?",
        },
        options: [
          { text: { id: "Karena mereka takut ular", en: "Because they fear snakes" } },
          { text: { id: "Memiliki pengunci persendian kaki khusus (stay apparatus)", en: "They have a special leg-joint locking mechanism (stay apparatus)" } },
          { text: { id: "Kuda tidak pernah tidur", en: "Horses never sleep" } },
        ],
        answerIdx: 1,
      },
    },
    explorer: {
      text: {
        id: "Kuda perang adalah puncak adaptasi kardiovaskular mamalia untuk kecepatan tinggi.",
        en: "Warhorses represent the peak of mammalian cardiovascular adaptation for speed.",
      },
      anatomy: [
        {
          part: { id: "Stay Apparatus", en: "Stay Apparatus Joint" },
          desc: { id: "Mekanisme tendon kaki untuk menahan beban tubuh tanpa menggunakan otot aktif.", en: "Tendon mechanism that locks the limbs to hold weight without active muscle fatigue." },
        },
        {
          part: { id: "Kuku Keratin", en: "Keratin Hooves" },
          desc: { id: "Ujung kaki tebal penyerap getaran benturan ekstrem dari tanah berbatu.", en: "Shock-absorbing footpad casing designed to sustain high-speed impact on hard ground." },
        },
      ],
      wowFactor: {
        id: "Surah Al-Adiyat:1-2 melukiskan secara ilmiah fisika gesekan kuku kuda yang mencetuskan api ('fal-mooriyaati qadhaa') saat berderap di batu gurun. Tekanan kuku seberat 400kg pada kecepatan 60 km/jam melepaskan energi kinetik kinetik ekstrem yang memanaskan partikel silika batu, menciptakan percikan api riil.",
        en: "Surah Al-Adiyat:1-2 captures the friction physics of horse hooves sparking fire ('fal-mooriyaati qadhaa') on desert rocks. An impact pressure of 400kg at 60 km/h releases kinetic energy that heats silica particles, creating real sparks.",
      },
      quranVerse: {
        arabic: "وَالْعَادِيَاتِ ضَبْحًا فَالْمُورِيَاتِ قَدْحًا",
        transliteration: "Wal-'aadiyaati dabhaa. Fal-mooriyaati qadhaa",
        translation: {
          id: "Demi kuda perang yang berlari kencang dengan terengah-engah, dan kuda yang mencetuskan api (dengan pukulan kuku kakinya).",
          en: "By the racing horses, panting, and the producers of sparks [when their hooves strike rocks].",
        },
        context: {
          id: "Sumpah Allah atas kuda perang berlari kencang ini adalah metafora perjuangan yang tak kenal lelah demi menegakkan kalimat tauhid di muka bumi.",
          en: "God's oath by the charging warhorse is a metaphor for relentless struggle and energy spent in the cause of truth.",
        },
      },
      quiz: {
        question: {
          id: "Mengapa kuku kuda bisa mengeluarkan percikan api saat berlari di tanah berbatu?",
          en: "Why do horse hooves strike sparks of fire on rocky ground?",
        },
        options: [
          { text: { id: "Kuda memakai tapal besi mengandung bubuk mesiu", en: "Horses wear iron shoes mixed with gunpowder" } },
          { text: { id: "Energi kinetik benturan beban berat di kecepatan tinggi memanaskan silika batu", en: "Kinetic energy of heavy impacts at high speed heats up silica in rocks" } },
          { text: { id: "Karena tanah gurun memiliki minyak bumi di permukaan", en: "Because desert soils contain oil on the surface" } },
        ],
        answerIdx: 1,
      },
    },
  },
];

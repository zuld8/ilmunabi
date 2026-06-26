import { ObjectData } from "../objects";

export const lebahData: ObjectData = {
  slug: "lebah",
  name: { id: "Lebah", en: "Bee" },
  icon: "🐝", 
  category: "hewan",
  type: "hewan",
  scientificName: "Anthophila",
  surahName: "An-Nahl",
  surahReference: "16:68", 
  unlockedAtPoints: 50, 
  
  kosakata: [
    { arab: "نَحْلٌ", latin: "Nahl", arti: "Lebah", artiEn: "Bee", contohAyat: "Surah An-Nahl dinamai dari kata ini" },
    { arab: "عَسَلٌ", latin: "'Asal", arti: "Madu", artiEn: "Honey", contohAyat: "Minuman manis yang menyehatkan" },
    { arab: "شِفَاءٌ", latin: "Syifa'", arti: "Obat/Penyembuh", artiEn: "Healing/Cure", contohAyat: "Di dalam madu terdapat obat bagi manusia" },
    { arab: "طَيَرَانٌ", latin: "Thayaran", arti: "Terbang", artiEn: "Flying", contohAyat: "Lebah terbang untuk mencari nektar" }
  ],
  
  balita: {
    text: { id: "Ngiiing... ini lebah! Lebah itu superhero kecil pembuat madu yang manis! 🐝🍯", en: "Bzzz... this is a bee! A little superhero that makes sweet honey! 🐝🍯" },
    audioTranscript: { id: "Wah, dengar suaranya! Ngiiing... Lebah pintar sekali bikin madu lho! Siapa yang suka minum madu manis?", en: "Wow, hear that sound! Bzzz... Bees are so smart making honey! Who loves sweet honey?" },
    quiz: {
      question: { id: "Apa minuman manis yang dibuat lebah?", en: "What sweet drink does the bee make?" },
      options: [
        { text: { id: "🍯 Madu", en: "🍯 Honey" } },
        { text: { id: "🥛 Susu", en: "🥛 Milk" } },
        { text: { id: "💧 Air putih", en: "💧 Water" } }
      ],
      answerIdx: 0
    }
  },
  
  anak: {
    text: { id: "Lebah itu kecil, tapi super sibuk dan sangat pintar lho!", en: "Bees are small, but they are super busy and very smart!" },
    facts: [
      { id: "Lebah pekerja semuanya adalah betina yang sangat rajin.", en: "Worker bees are all hardworking females." },
      { id: "Satu sendok teh madu adalah hasil kerja keras 12 lebah sepanjang hidupnya!", en: "A teaspoon of honey is the life's work of 12 bees!" },
      { id: "Lebah menari bergoyang-goyang untuk memberitahu temannya di mana letak bunga.", en: "Bees do a waggle dance to tell friends where flowers are." },
      { id: "Mereka punya 5 mata! Dua mata besar dan tiga mata kecil.", en: "They have 5 eyes! Two big ones and three small ones." },
      { id: "Madu yang dihasilkan lebah tidak akan pernah basi, bahkan bisa bertahan ribuan tahun.", en: "Honey never spoils, it can last for thousands of years." }
    ],
    quranVerse: {
      arabic: "وَأَوْحَىٰ رَبُّكَ إِلَى النَّحْلِ أَنِ اتَّخِذِي مِنَ الْجِبَالِ بُيُوتًا وَمِنَ الشَّجَرِ وَمِمَّا يَعْرِشُونَ",
      transliteration: "Wa awhaa rabbuka ilan-nahli anittakhidzi minal jibaali buyuutan wa minasy-syajari wa mimmaa ya'risyuun.",
      translation: { id: "Dan Tuhanmu mewahyukan kepada lebah: 'Buatlah sarang-sarang di bukit-bukit, di pohon-pohon kayu, dan di tempat-tempat yang dibikin manusia.'", en: "And your Lord inspired to the bee, 'Take for yourself among the mountains, houses, and among the trees and [in] that which they construct.'" },
      context: { id: "Tau nggak? Allah sendiri yang memberi petunjuk ke lebah untuk membangun sarang yang sempurna dan membuat madu sebagai obat! Keren banget kan arsitek mungil ini?", en: "Did you know? Allah Himself inspired the bee to build perfect homes and make honey as medicine! Isn't this tiny architect amazing?" }
    },
    quiz: {
      question: { id: "Bagaimana cara lebah ngobrol dan memberi tahu temannya letak bunga?", en: "How do bees talk to each other to tell where flowers are?" },
      options: [
        { text: { id: "Menari bergoyang-goyang", en: "Doing a waggle dance" } },
        { text: { id: "Berteriak kencang", en: "Shouting loudly" } },
        { text: { id: "Mengirim pesan teks", en: "Sending a text message" } },
        { text: { id: "Meninggalkan jejak tanah", en: "Leaving a dirt trail" } }
      ],
      answerIdx: 0
    }
  },
  
  explorer: {
    text: { 
      id: "Lebah adalah serangga dengan tingkat sosial yang luar biasa kompleks. Mereka hidup dalam koloni yang bisa mencapai 60.000 ekor, dan semuanya bekerja sama bagaikan satu tubuh.\n\nSetiap koloni dipimpin oleh satu Ratu Lebah yang tugasnya bertelur hingga 2.000 butir sehari! Sementara itu, lebah pekerja (semuanya betina) bertugas mencari nektar, membersihkan sarang, dan menjaga bayi-bayi lebah.\n\nSarang mereka terbuat dari lilin (beeswax) berbentuk heksagonal (segi enam). Secara matematika, bentuk segi enam adalah bentuk paling hemat ruang dan material tapi paling kuat untuk menyimpan madu!", 
      en: "Bees are highly social insects with incredibly complex systems. They live in colonies of up to 60,000 individuals, working together as a single superorganism.\n\nEach colony is led by a Queen Bee who can lay up to 2,000 eggs a day! Meanwhile, worker bees (all females) forage for nectar, clean the hive, and nurse the young.\n\nTheir hives are made of beeswax in perfect hexagonal shapes. Mathematically, hexagons are the most space and material-efficient shape that is extremely strong for storing honey!" 
    },
    anatomy: [
      { part: { id: "Sengat", en: "Stinger" }, desc: { id: "Lebah pekerja memiliki sengat yang tertinggal jika menyengat mamalia berkulit tebal, yang sayangnya menyebabkan lebah tersebut mati setelah menyengat.", en: "Worker bees have a barbed stinger that gets stuck when stinging thick-skinned mammals, which sadly causes the bee to die afterward." } },
      { part: { id: "Keranjang Serbuk Sari", en: "Pollen Basket" }, desc: { id: "Kantung kecil di kaki belakang lebah untuk membawa serbuk sari bunga.", en: "A special pocket on the bee's hind legs used to carry pollen." } }
    ],
    wowFactor: { 
      id: "Sains menemukan bahwa lebah punya GPS alami luar biasa! Mereka menggunakan posisi matahari, pola cahaya langit, bahkan medan magnet bumi untuk menemukan jalan pulang sejauh puluhan kilometer tanpa tersesat. Madu yang mereka hasilkan juga terbukti secara medis mengandung zat antibakteri hidrogen peroksida.\n\nAl-Qur'an secara menakjubkan menyebutkan dalam Surah An-Nahl (Surah Lebah) ayat 68-69: 'Di dalam (madu) itu terdapat obat yang menyembuhkan bagi manusia.' 1400 tahun sebelum ilmuwan modern membuktikan khasiat medis madu, Al-Qur'an sudah mengungkapkannya!", 
      en: "Science found that bees have an amazing natural GPS! They use the sun's position, sky polarization, and even the earth's magnetic field to navigate miles away without getting lost. The honey they produce is also medically proven to contain antibacterial hydrogen peroxide.\n\nThe Qur'an astonishingly stated in Surah An-Nahl (The Bee) verse 69: 'In it (honey) is healing for mankind.' 1400 years before modern scientists proved honey's medical properties, the Qur'an had already revealed it!" 
    },
    quranVerse: {
      arabic: "ثُمَّ كُلِي مِنْ كُلِّ الثَّمَرَاتِ فَاسْلُكِي سُبُلَ رَبِّكِ ذُلُلًا ۚ يَخْرُجُ مِنْ بُطُونِهَا شَرَابٌ مُخْتَلِفٌ أَلْوَانُهُ فِيهِ شِفَاءٌ لِلنَّاسِ ۗ إِنَّ فِي ذَٰلِكَ لَآيَةً لِقَوْمٍ يَتَفَكَّرُونَ",
      transliteration: "Tsumma kulii min kullits-tsamaraati faslukii subula rabbiki dzululaa. Yakhruju min buthuunihaa syaraabun mukhtalifun alwaanuhu fiihi syifaa'un lin-naas. Inna fii dzaalika la'aayatan liqawmin yatafakkaruun.",
      translation: { id: "Kemudian makanlah dari tiap-tiap (macam) buah-buahan dan tempuhlah jalan Tuhanmu yang telah dimudahkan (bagimu). Dari perut lebah itu ke luar minuman (madu) yang bermacam-macam warnanya, di dalamnya terdapat obat yang menyembuhkan bagi manusia.", en: "Then eat from all the fruits and follow the ways of your Lord laid down [for you]. There emerges from their bellies a drink, varying in colors, in which there is healing for people." }
    },
    quiz: [
      {
        question: { id: "Bentuk geometri apa yang digunakan lebah untuk membangun sarangnya karena paling efisien?", en: "What geometric shape do bees use to build their hives because it's most efficient?" },
        options: [{ text: { id: "Segi enam (Heksagon)", en: "Hexagon" } }, { text: { id: "Lingkaran", en: "Circle" } }, { text: { id: "Persegi", en: "Square" } }, { text: { id: "Segitiga", en: "Triangle" } }],
        answerIdx: 0
      },
      {
        question: { id: "Zat antibakteri apa yang terkandung dalam madu?", en: "What antibacterial substance is found in honey?" },
        options: [{ text: { id: "Hidrogen peroksida", en: "Hydrogen peroxide" } }, { text: { id: "Klorin", en: "Chlorine" } }, { text: { id: "Alkohol", en: "Alcohol" } }, { text: { id: "Asam asetat", en: "Acetic acid" } }],
        answerIdx: 0
      },
      {
        question: { id: "Dalam surat apa Al-Qur'an menyebutkan bahwa madu adalah obat?", en: "In which surah does the Qur'an mention that honey is a medicine?" },
        options: [{ text: { id: "An-Nahl", en: "An-Nahl" } }, { text: { id: "Al-Baqarah", en: "Al-Baqarah" } }, { text: { id: "An-Naml", en: "An-Naml" } }, { text: { id: "Al-Ma'idah", en: "Al-Ma'idah" } }],
        answerIdx: 0
      }
    ]
  }
};

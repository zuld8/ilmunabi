import { ObjectData } from "../objects";

export const bawangPutihData: ObjectData = {
  slug: "bawang-putih",
  name: { id: "Bawang Putih", en: "Garlic" },
  icon: "🧄",
  category: "tumbuhan",
  type: "tumbuhan",
  scientificName: "Allium sativum",
  surahName: "Al-Baqarah",
  surahReference: "2:61",
  unlockedAtPoints: 100,

  kosakata: [
    { arab: "ثُوْمٌ", latin: "Thuum", arti: "Bawang Putih", artiEn: "Garlic", contohAyat: "Bani Israil meminta thuum kepada Nabi Musa." },
    { arab: "بَصَلٌ", latin: "Basal", arti: "Bawang Merah", artiEn: "Onion", contohAyat: "Mereka juga meminta basal." },
    { arab: "نَبَاتٌ", latin: "Nabaat", arti: "Tanaman", artiEn: "Plant", contohAyat: "Bawang adalah nabaat yang tumbuh di dalam tanah." },
    { arab: "أَرْضٌ", latin: "Ardh", arti: "Tanah / Bumi", artiEn: "Earth", contohAyat: "Tanaman ini tumbuh dari dalam ardh." }
  ],

  balita: {
    text: {
      id: "Ini bawang putih! Baunya sangat tajam, tapi kalau dimasukkan ke makanan, wangi sekali dan masakan jadi sangat enak! 🧄",
      en: "This is garlic! Its smell is very strong, but when put in food, it smells great and makes the dish very tasty! 🧄"
    },
    audioTranscript: {
      id: "Coba cium! Wah, baunya menyengat ya? Ini Bawang Putih! Bawang putih adalah bumbu ajaib yang bikin masakan Ibu rasanya lezatt!",
      en: "Try smelling this! Wow, it's pungent right? This is Garlic! Garlic is a magic spice that makes Mom's cooking taste delicious!"
    },
    quiz: {
      question: { id: "Bagaimana bau bawang putih yang mentah?", en: "How does raw garlic smell?" },
      options: [
        { text: { id: "Sangat tajam menyengat 🧄", en: "Very sharp and pungent 🧄" } },
        { text: { id: "Harum seperti bunga mawar 🌹", en: "Fragrant like a rose 🌹" } },
        { text: { id: "Tidak ada baunya sama sekali 💨", en: "No smell at all 💨" } }
      ],
      answerIdx: 0
    }
  },

  anak: {
    text: {
      id: "Bawang putih itu tumbuh tersembunyi di bawah tanah! Bentuknya satu bonggol besar yang terdiri dari banyak 'siung' kecil-kecil.",
      en: "Garlic grows hidden underground! It forms one big bulb made of many small 'cloves'."
    },
    facts: [
      { id: "Bawang putih bertindak sebagai obat alami untuk mengusir kuman dan bakteri.", en: "Garlic acts as a natural medicine to chase away germs and bacteria." },
      { id: "Tumbuhan ini menggunakan baunya yang tajam agar tidak dimakan oleh serangga jahat.", en: "This plant uses its sharp smell so it won't be eaten by bad insects." },
      { id: "Bani Israil zaman Nabi Musa pernah minta bawang putih karena bosan makan makanan surga.", en: "The Children of Israel during Moses' time once asked for garlic because they were bored of heavenly food." },
      { id: "Satu bonggol bawang putih bisa memiliki lebih dari 10 siung anak bawang.", en: "One garlic bulb can have more than 10 little cloves." },
      { id: "Nabi menganjurkan kita tidak ke masjid jika baru makan bawang putih mentah karena baunya bisa mengganggu.", en: "The Prophet advised us not to go to the mosque if we just ate raw garlic because the smell can bother others." }
    ],
    quranVerse: {
      arabic: "فَادْعُ لَنَا رَبَّكَ يُخْرِجْ لَنَا مِمَّا تُنْۢبِتُ الْاَرْضُ مِنْۢ بَقْلِهَا وَقِثَّاۤىِٕهَا وَفُوْمِهَا وَعَدَسِهَا وَبَصَلِهَاۗ",
      transliteration: "Fad'u lanā rabbaka yukhrij lanā mimmā tumbitul-arḍu mim baqlihā wa qiṡṡā'ihā wa fūmihā wa 'adasihā wa baṣalihā",
      translation: {
        id: "Maka mohonkanlah untuk kami kepada Tuhanmu, agar Dia mengeluarkan bagi kami dari apa yang ditumbuhkan bumi, yaitu sayur-mayurnya, ketimunnya, bawang putihnya, kacang adasnya, dan bawang merahnya.",
        en: "So call upon your Lord to bring forth for us from the earth its green herbs and its cucumbers and its garlic and its lentils and its onions."
      },
      context: {
        id: "Tau nggak? Saat Bani Israil diselamatkan Allah dari Firaun, Allah menurunkan makanan surga (Manna dan Salwa). Tapi mereka bosan dan malah minta sayuran bumi seperti bawang putih! Kisah ini diabadikan di Al-Baqarah ayat 61.",
        en: "Did you know? When Allah saved the Children of Israel from Pharaoh, Allah sent down heavenly food (Manna and Salwa). But they got bored and asked for earth vegetables like garlic instead! This story is recorded in Al-Baqarah verse 61."
      }
    },
    quiz: {
      question: { id: "Mengapa bawang putih mentah memiliki bau yang sangat tajam?", en: "Why does raw garlic have a very sharp smell?" },
      options: [
        { text: { id: "Sebagai perlindungan agar tidak dimakan serangga", en: "As protection so insects won't eat it" } },
        { text: { id: "Agar manusia membencinya", en: "So humans will hate it" } },
        { text: { id: "Karena dia tumbuh di awan", en: "Because it grows on clouds" } },
        { text: { id: "Karena disiram dengan parfum", en: "Because it was watered with perfume" } }
      ],
      answerIdx: 0
    }
  },

  explorer: {
    text: {
      id: "Bawang Putih (Allium sativum) adalah tumbuhan dari keluarga bawang-bawangan (Alliaceae). Bagian yang kita konsumsi disebut 'bulb' atau umbi lapis. Ini adalah modifikasi daun yang menebal dan menyimpan makanan ekstra di bawah permukaan tanah.\n\nSains modern membuktikan bahwa bawang putih adalah salah satu antibiotik alami paling kuat di dunia botani! Bawang putih utuh sebenarnya tidak terlalu berbau. Namun, ketika bawang putih dipotong, dikunyah, atau dihancurkan, terjadilah reaksi kimia epik. Sebuah enzim bernama 'Alliinase' akan mencerna molekul alliin, mengubahnya menjadi zat bernama 'Allicin'. \n\nZat Allicin inilah biang keladi bau tajam bawang putih, dan juga merupakan zat penghancur selubung virus dan bakteri jahat yang masuk ke tubuh manusia. Kekuatan antibakterinya bahkan dipelajari secara serius oleh dunia medis untuk menumpas infeksi berbahaya.",
      en: "Garlic (Allium sativum) is a plant from the onion family (Alliaceae). The part we consume is called the 'bulb'. This is a modification of leaves that thicken to store extra food below the ground surface.\n\nModern science proves that garlic is one of the most powerful natural antibiotics in the botanical world! A whole garlic actually doesn't smell much. However, when garlic is cut, chewed, or crushed, an epic chemical reaction occurs. An enzyme called 'Alliinase' digests alliin molecules, turning them into a substance called 'Allicin'. \n\nAllicin is the culprit behind the sharp garlic smell, and it is also the destroyer of the envelopes of viruses and bad bacteria entering the human body. Its antibacterial strength is seriously studied by the medical world to eradicate dangerous infections."
    },
    anatomy: [
      { part: { id: "Umbi Lapis (Bulb/Siung)", en: "Bulb/Clove" }, desc: { id: "Bagian membengkak di bawah tanah; kumpulan daun penyimpan makanan.", en: "The swollen part underground; a collection of food-storing leaves." } },
      { part: { id: "Akar Serabut", en: "Fibrous Root" }, desc: { id: "Akar-akar halus pendek di dasar bonggol bawang untuk menyerap air cepat.", en: "Short fine roots at the base of the garlic bulb to quickly absorb water." } }
    ],
    wowFactor: {
      id: "Sains menemukan mekanisme pertahanan cerdas botani: Bawang putih menyimpan enzim dan molekul pembentuk 'senjata kimia' di kompartemen sel yang berbeda. Senjatanya (Allicin) baru meledak saat selnya dirusak (dipotong) oleh gigitan hewan, melepaskan bau pedas yang mengusir musuh seketika!\n\nAl-Qur'an merekam kisah Bani Israil yang merengek meminta bawang putih (fuum) kepada Nabi Musa. Meskipun teguran diberikan karena mereka meminta hal duniawi dibanding makanan surga, fakta bahwa mereka secara insting merindukan bawang di perjalanan panjang membuktikan tubuh mereka mencari antibiotik alami bumi untuk bertahan dari penyakit gurun pasir!",
      en: "Science discovered a smart botanical defense mechanism: Garlic stores the enzymes and molecules that form its 'chemical weapon' in different cell compartments. Its weapon (Allicin) only detonates when the cell is destroyed (cut) by an animal bite, releasing a spicy smell that chases enemies away instantly!\n\nThe Qur'an records the story of the Israelites whining to Prophet Musa for garlic (fuum). Although reprimanded because they asked for worldly things over heavenly food, the fact that they instinctively craved garlic on a long journey proves their bodies sought the earth's natural antibiotics to survive desert diseases!"
    },
    quranVerse: {
      arabic: "وَقِثَّاۤىِٕهَا وَفُوْمِهَا وَعَدَسِهَا وَبَصَلِهَاۗ",
      transliteration: "Wa qiṡṡā'ihā wa fūmihā wa 'adasihā wa baṣalihā",
      translation: {
        id: "...ketimunnya, bawang putihnya, kacang adasnya, dan bawang merahnya.",
        en: "...its cucumbers and its garlic and its lentils and its onions."
      }
    },
    quiz: [
      {
        question: { id: "Zat ajaib apa yang terbentuk saat bawang putih dihancurkan, yang memberinya bau tajam dan kekuatan pembunuh kuman?", en: "What magic substance is formed when garlic is crushed, giving it a sharp smell and germ-killing power?" },
        options: [
          { text: { id: "Allicin", en: "Allicin" } },
          { text: { id: "Melatonin", en: "Melatonin" } },
          { text: { id: "Kalsium", en: "Calcium" } },
          { text: { id: "Vitamin D", en: "Vitamin D" } }
        ],
        answerIdx: 0
      },
      {
        question: { id: "Mengapa bawang putih utuh tidak berbau tajam sebelum dipotong?", en: "Why doesn't a whole garlic smell sharp before it is cut?" },
        options: [
          { text: { id: "Karena zat kimianya masih terpisah di sel yang berbeda", en: "Because its chemicals are still separated in different cells" } },
          { text: { id: "Karena kulitnya menyerap bau", en: "Because its skin absorbs the smell" } },
          { text: { id: "Karena dia menahan napas", en: "Because it holds its breath" } },
          { text: { id: "Karena belum dimasak dengan api", en: "Because it hasn't been cooked with fire" } }
        ],
        answerIdx: 0
      },
      {
        question: { id: "Siapakah kaum yang pernah meminta bawang putih kepada Nabi Musa?", en: "Which nation once asked Prophet Musa for garlic?" },
        options: [
          { text: { id: "Kaum 'Aad", en: "'Aad nation" } },
          { text: { id: "Bani Israil", en: "Children of Israel" } },
          { text: { id: "Kaum Tsamud", en: "Thamud nation" } },
          { text: { id: "Penduduk Madyan", en: "People of Madyan" } }
        ],
        answerIdx: 1
      }
    ]
  }
};

import { ObjectData } from "../objects";

export const kurmaData: ObjectData = {
  slug: "kurma",
  name: { id: "Kurma", en: "Date Palm" },
  icon: "🌴",
  category: "tumbuhan",
  type: "tumbuhan",
  scientificName: "Phoenix dactylifera",
  surahName: "Maryam",
  surahReference: "19:25",
  unlockedAtPoints: 50,

  kosakata: [
    { arab: "تَمْرٌ", latin: "Tamrun", arti: "Kurma", artiEn: "Date", contohAyat: "Terdapat banyak penyebutan tamr di dalam hadis dan Qur'an." },
    { arab: "نَخْلَةٌ", latin: "Nakhlah", arti: "Pohon Kurma", artiEn: "Date Palm Tree", contohAyat: "Surah Maryam menyebutkan kata nakhlah." },
    { arab: "حُلْوٌ", latin: "Hulwun", arti: "Manis", artiEn: "Sweet", contohAyat: "Rasa kurma sangat hulwun." },
    { arab: "شَجَرَةٌ", latin: "Shajarah", arti: "Pohon", artiEn: "Tree", contohAyat: "Pohon kurma adalah syajarah yang diberkahi." }
  ],

  balita: {
    text: {
      id: "Ini buah kurma! Rasanya sangat manis seperti madu. Kurma tumbuh di pohon yang sangat tinggi! 🌴",
      en: "This is a date! It tastes very sweet like honey. Dates grow on very tall trees! 🌴"
    },
    audioTranscript: {
      id: "Wah, lihat! Ini buah kurma! Bentuknya lonjong dan warnanya cokelat. Nyam nyam, rasanya manis sekali! Siapa yang suka makan kurma saat puasa?",
      en: "Wow, look! This is a date! It's oval and brown. Yum yum, it tastes so sweet! Who likes to eat dates during fasting?"
    },
    quiz: {
      question: { id: "Apa rasa buah kurma?", en: "What does a date taste like?" },
      options: [
        { text: { id: "Manis 🍬", en: "Sweet 🍬" } },
        { text: { id: "Pedas 🌶️", en: "Spicy 🌶️" } },
        { text: { id: "Asin 🧂", en: "Salty 🧂" } }
      ],
      answerIdx: 0
    }
  },

  anak: {
    text: {
      id: "Pohon kurma adalah tumbuhan hebat yang bisa hidup di padang pasir yang panas! Buahnya sangat manis dan memberikan kita energi.",
      en: "The date palm is an amazing plant that can live in the hot desert! Its fruit is very sweet and gives us energy."
    },
    facts: [
      { id: "Pohon kurma bisa tumbuh sangat tinggi, hingga 20 meter!", en: "Date palm trees can grow very tall, up to 20 meters!" },
      { id: "Kurma bisa bertahan lama dan tidak mudah busuk.", en: "Dates can last a long time and don't rot easily." },
      { id: "Makan kurma saat berbuka puasa bisa langsung mengembalikan tenaga kita.", en: "Eating dates when breaking the fast immediately restores our energy." },
      { id: "Akar pohon kurma sangat kuat mencari air di dalam tanah pasir.", en: "Date palm roots are very strong at finding water deep in the desert sand." },
      { id: "Nabi Muhammad SAW sangat menyukai buah kurma.", en: "Prophet Muhammad PBUH really loved dates." }
    ],
    quranVerse: {
      arabic: "وَهُزِّيْٓ اِلَيْكِ بِجِذْعِ النَّخْلَةِ تُسَاقِطْ عَلَيْكِ رُطَبًا جَنِيًّا ۖ",
      transliteration: "Wa huzzī ilaiki bijiż'in-nakhlati tusāqiṭ 'alaiki ruṭaban janiyyā",
      translation: {
        id: "Dan goyanglah pangkal pohon kurma itu ke arahmu, niscaya pohon itu akan menggugurkan buah kurma yang masak kepadamu.",
        en: "And shake toward you the trunk of the palm tree; it will drop upon you ripe, fresh dates."
      },
      context: {
        id: "Tau nggak? Saat Siti Maryam (ibunda Nabi Isa) sedang lelah, Allah menyuruhnya menggoyang pohon kurma agar buahnya jatuh. Kurma memberinya energi yang luar biasa!",
        en: "Did you know? When Mary (the mother of Prophet Isa) was tired, Allah told her to shake the date palm so the fruits would fall. Dates gave her amazing energy!"
      }
    },
    quiz: {
      question: { id: "Di mana pohon kurma biasanya banyak tumbuh?", en: "Where do date palms usually grow a lot?" },
      options: [
        { text: { id: "Di padang pasir yang panas", en: "In the hot desert" } },
        { text: { id: "Di kutub es yang dingin", en: "In the cold ice pole" } },
        { text: { id: "Di dasar laut", en: "At the bottom of the sea" } },
        { text: { id: "Di atas awan", en: "Above the clouds" } }
      ],
      answerIdx: 0
    }
  },

  explorer: {
    text: {
      id: "Pohon Kurma (Phoenix dactylifera) adalah salah satu tanaman tertua yang dibudidayakan oleh manusia. Mereka tumbuh subur di wilayah Timur Tengah dan Afrika Utara. Pohon ini dijuluki 'Pohon Kehidupan' karena setiap bagiannya—dari daun, batang, hingga buahnya—sangat berguna bagi manusia di gurun pasir.\n\nBuah kurma merupakan keajaiban nutrisi. Kurma mengandung karbohidrat sederhana (fruktosa dan glukosa) yang sangat mudah diserap tubuh. Itulah sebabnya makan kurma saat berbuka puasa adalah pilihan terbaik secara medis untuk segera memulihkan gula darah yang turun setelah seharian tidak makan.\n\nSelain itu, kurma juga kaya akan serat, kalium, dan antioksidan yang melindungi sel-sel tubuh dari kerusakan. Akarnya menembus dalam ke tanah untuk menemukan sumber air tersembunyi, memungkinkannya bertahan dari kekeringan yang ekstrem.",
      en: "The Date Palm (Phoenix dactylifera) is one of the oldest plants cultivated by humans. They thrive in the Middle East and North Africa. This tree is nicknamed the 'Tree of Life' because every part of it—from the leaves and trunk to the fruit—is incredibly useful for people in the desert.\n\nDates are a nutritional marvel. They contain simple carbohydrates (fructose and glucose) that are easily absorbed by the body. That's why eating dates when breaking the fast is medically the best choice to quickly restore blood sugar that drops after a day of fasting.\n\nAdditionally, dates are rich in fiber, potassium, and antioxidants that protect the body's cells from damage. Its roots penetrate deep into the ground to find hidden water sources, allowing it to survive extreme droughts."
    },
    anatomy: [
      { part: { id: "Buah (Tamr/Rutab)", en: "Fruit (Tamr/Rutab)" }, desc: { id: "Menyimpan gula alami tinggi dan nutrisi super sebagai cadangan energi.", en: "Stores high natural sugars and super nutrients as energy reserves." } },
      { part: { id: "Akar Dalam", en: "Deep Roots" }, desc: { id: "Bisa tumbuh sangat panjang ke dalam tanah untuk mencari air di gurun yang kering.", en: "Can grow very deep into the ground to search for water in the dry desert." } }
    ],
    wowFactor: {
      id: "Sains membuktikan bahwa kurma segar (rutab) memiliki hormon oksitosin yang membantu meredakan pendarahan dan melancarkan persalinan bagi ibu hamil.\n\nLuar biasanya, Al-Qur'an sudah menyebutkan hal ini ribuan tahun yang lalu! Dalam Surah Maryam, Allah secara spesifik menyuruh Siti Maryam yang sedang kontraksi melahirkan untuk memakan kurma segar (rutab). Sungguh mukjizat medis yang baru terbukti di zaman modern!",
      en: "Science proves that fresh dates (rutab) contain the hormone oxytocin which helps reduce bleeding and ease labor for pregnant women.\n\nAmazingly, the Qur'an mentioned this thousands of years ago! In Surah Maryam, Allah specifically commanded Mary, who was in labor, to eat fresh dates (rutab). What a medical miracle only proven in modern times!"
    },
    quranVerse: {
      arabic: "وَهُزِّيْٓ اِلَيْكِ بِجِذْعِ النَّخْلَةِ تُسَاقِطْ عَلَيْكِ رُطَبًا جَنِيًّا ۖ",
      transliteration: "Wa huzzī ilaiki bijiż'in-nakhlati tusāqiṭ 'alaiki ruṭaban janiyyā",
      translation: {
        id: "Dan goyanglah pangkal pohon kurma itu ke arahmu, niscaya pohon itu akan menggugurkan buah kurma yang masak kepadamu.",
        en: "And shake toward you the trunk of the palm tree; it will drop upon you ripe, fresh dates."
      }
    },
    quiz: [
      {
        question: { id: "Mengapa kurma sangat disarankan untuk berbuka puasa secara medis?", en: "Why are dates medically highly recommended for breaking the fast?" },
        options: [
          { text: { id: "Karena mengandung gula alami yang cepat diserap tubuh", en: "Because they contain natural sugars quickly absorbed by the body" } },
          { text: { id: "Karena kurma mengandung banyak air", en: "Because dates contain a lot of water" } },
          { text: { id: "Karena kurma adalah buah yang murah", en: "Because dates are cheap fruits" } },
          { text: { id: "Karena kurma sulit dicerna", en: "Because dates are hard to digest" } }
        ],
        answerIdx: 0
      },
      {
        question: { id: "Hormon apa yang ditemukan dalam kurma muda (rutab) yang membantu persalinan?", en: "What hormone is found in fresh dates (rutab) that helps with labor?" },
        options: [
          { text: { id: "Adrenalin", en: "Adrenaline" } },
          { text: { id: "Oksitosin", en: "Oxytocin" } },
          { text: { id: "Melatonin", en: "Melatonin" } },
          { text: { id: "Dopamin", en: "Dopamine" } }
        ],
        answerIdx: 1
      },
      {
        question: { id: "Apa nama pohon kurma dalam bahasa Arab yang disebutkan dalam Al-Qur'an?", en: "What is the Arabic name for the date palm mentioned in the Qur'an?" },
        options: [
          { text: { id: "Zaytun", en: "Zaytun" } },
          { text: { id: "Nakhlah", en: "Nakhlah" } },
          { text: { id: "Tin", en: "Tin" } },
          { text: { id: "Rumman", en: "Rumman" } }
        ],
        answerIdx: 1
      }
    ]
  }
};

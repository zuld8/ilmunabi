import { ObjectData } from "../objects";

export const tinData: ObjectData = {
  slug: "tin",
  name: { id: "Tin / Ara", en: "Fig" },
  icon: "🌿",
  category: "tumbuhan",
  type: "tumbuhan",
  scientificName: "Ficus carica",
  surahName: "At-Tin",
  surahReference: "95:1",
  unlockedAtPoints: 100,

  kosakata: [
    { arab: "تِيْنٌ", latin: "Tiyn", arti: "Buah Tin", artiEn: "Fig", contohAyat: "Allah bersumpah demi buah tin dalam Al-Qur'an." },
    { arab: "قَسَمٌ", latin: "Qasam", arti: "Sumpah", artiEn: "Oath", contohAyat: "Surah At-Tin diawali dengan sebuah qasam." },
    { arab: "حُلْوٌ", latin: "Hulwun", arti: "Manis", artiEn: "Sweet", contohAyat: "Rasa buah tin yang matang sangat manis." },
    { arab: "بَذْرَةٌ", latin: "Badhrah", arti: "Biji", artiEn: "Seed", contohAyat: "Buah tin memiliki banyak badhrah kecil di dalamnya." }
  ],

  balita: {
    text: {
      id: "Ini buah Tin! Bentuknya seperti kantung kecil. Kalau digigit, di dalamnya ada banyak biji kecil yang manis lho! 🌿",
      en: "This is a Fig! It looks like a little pouch. If you bite it, there are many tiny sweet seeds inside! 🌿"
    },
    audioTranscript: {
      id: "Coba tebak buah apa ini? Ini buah Tin! Di luarnya lembut, di dalamnya manis dan berbunyi kress kress karena bijinya yang kecil. Enak sekali!",
      en: "Guess what fruit this is? It's a Fig! It's soft on the outside, sweet inside, and goes crunch crunch because of its tiny seeds. So yummy!"
    },
    quiz: {
      question: { id: "Apa yang membuat buah tin terasa kress kress saat dimakan?", en: "What makes figs crunchy when eaten?" },
      options: [
        { text: { id: "Biji kecil di dalamnya", en: "Tiny seeds inside" } },
        { text: { id: "Kulitnya yang keras", en: "Its hard peel" } },
        { text: { id: "Tulangnya", en: "Its bones" } }
      ],
      answerIdx: 0
    }
  },

  anak: {
    text: {
      id: "Buah tin adalah buah istimewa yang disebutkan langsung namanya untuk menjadi nama sebuah Surah dalam Al-Qur'an! Buah ini unik karena bunganya ada di dalam buah.",
      en: "The fig is a special fruit that is directly named as a Surah in the Qur'an! This fruit is unique because its flowers are inside the fruit."
    },
    facts: [
      { id: "Buah tin sebenarnya bukan buah biasa, melainkan bunga yang tumbuh mekar di dalam ke dalam (inflorescence).", en: "A fig is actually not a regular fruit, but an inverted flower (inflorescence)." },
      { id: "Satu buah tin bisa berisi ratusan hingga ribuan biji kecil.", en: "One fig can contain hundreds to thousands of tiny seeds." },
      { id: "Allah mengabadikan nama buah ini menjadi Surah At-Tin.", en: "Allah immortalized the name of this fruit as Surah At-Tin." },
      { id: "Buah ini sangat baik untuk pencernaan kita karena kaya akan serat.", en: "This fruit is very good for our digestion because it's rich in fiber." },
      { id: "Tin tidak punya musim mekar bunga yang terlihat, karena bunganya ngumpet!", en: "Figs have no visible blooming season, because their flowers are hidden!" }
    ],
    quranVerse: {
      arabic: "وَالتِّيْنِ وَالزَّيْتُوْنِۙ",
      transliteration: "Wat-tīni waz-zaitūn",
      translation: {
        id: "Demi (buah) Tin dan (buah) Zaitun,",
        en: "By the fig and the olive,"
      },
      context: {
        id: "Tau nggak? Kalau Allah sampai bersumpah atas nama sebuah benda ciptaan-Nya, berarti benda itu pasti sangat luar biasa dan punya manfaat yang besar untuk kita!",
        en: "Did you know? When Allah swears an oath by one of His creations, it means that creation is absolutely extraordinary and has great benefits for us!"
      }
    },
    quiz: {
      question: { id: "Di mana letak bunga dari pohon tin?", en: "Where are the flowers of the fig tree located?" },
      options: [
        { text: { id: "Sembunyi di dalam buahnya", en: "Hidden inside its fruit" } },
        { text: { id: "Di pucuk daun tertinggi", en: "At the very top leaves" } },
        { text: { id: "Di dalam tanah", en: "Underground" } },
        { text: { id: "Terbang ditiup angin", en: "Blown away by the wind" } }
      ],
      answerIdx: 0
    }
  },

  explorer: {
    text: {
      id: "Buah Tin atau Ara (Ficus carica) menyimpan rahasia biologi yang sangat unik. Dalam ilmu botani, tin diklasifikasikan sebagai 'syconium', yaitu struktur berbentuk kantung berdaging yang di dalamnya terdapat ratusan bunga kecil. Jadi, saat kamu memakan buah tin, kamu sebenarnya sedang memakan ratusan bunga mikroskopis yang telah matang!\n\nKarena bunganya ada di dalam, angin atau lebah biasa tidak bisa membantu penyerbukannya. Tin memiliki rekan khusus bernama 'Tawon Tin' (Fig wasp). Tawon kecil ini akan masuk melalui lubang kecil di ujung buah untuk menaruh telur sekaligus menyerbuki bunga di dalamnya. Ini adalah contoh sempurna dari 'mutualisme ekstrim' dalam sains, di mana pohon tin dan tawon tin tidak bisa hidup tanpa satu sama lain.\n\nSecara nutrisi, buah tin mengandung serat larut pektin yang membantu menurunkan kolesterol, kalsium tinggi untuk tulang, serta mineral penting lainnya yang menjaga kesehatan tubuh.",
      en: "The Fig (Ficus carica) holds a very unique biological secret. In botany, a fig is classified as a 'syconium', which is a fleshy pouch-like structure containing hundreds of tiny flowers inside. So, when you eat a fig, you are actually eating hundreds of microscopic ripened flowers!\n\nBecause the flowers are inside, wind or regular bees cannot help pollinate them. Figs have a special partner called the 'Fig wasp'. This tiny wasp enters through a small hole at the end of the fig to lay its eggs and pollinate the flowers inside. This is a perfect example of 'extreme mutualism' in science, where the fig tree and the fig wasp cannot survive without each other.\n\nNutritionally, figs contain soluble fiber called pectin which helps lower cholesterol, high calcium for bones, and other essential minerals that maintain the body's health."
    },
    anatomy: [
      { part: { id: "Syconium", en: "Syconium" }, desc: { id: "Kantung buah tempat ratusan bunga kecil mekar secara terbalik di bagian dalam.", en: "The fruit pouch where hundreds of tiny flowers bloom inverted on the inside." } },
      { part: { id: "Ostiole", en: "Ostiole" }, desc: { id: "Lubang kecil di bagian bawah tin yang menjadi pintu masuk bagi serangga penyerbuk.", en: "A small hole at the bottom of the fig that serves as an entrance for pollinating insects." } }
    ],
    wowFactor: {
      id: "Sains mengungkap betapa rumit dan uniknya sistem penyerbukan buah tin yang sangat bergantung pada tawon mikroskopis khusus. Tanpa tawon ini, tin tidak bisa berbuah!\n\nAl-Qur'an menyebut secara eksplisit nama buah ini dan bahkan menjadikannya sumpah pertama di Surah At-Tin ('Demi buah tin dan zaitun...'). Para ulama dan ilmuwan tafsir sepakat bahwa benda yang dijadikan sumpah oleh Allah memiliki keajaiban besar. Rahasia ekologi dan nutrisi tinggi buah tin membuktikan kebenaran sumpah pencipta Alam Semesta ini!",
      en: "Science reveals how complex and unique the fig's pollination system is, relying heavily on a specific microscopic wasp. Without this wasp, figs cannot bear fruit!\n\nThe Qur'an explicitly mentions the name of this fruit and even makes it the very first oath in Surah At-Tin ('By the fig and the olive...'). Scholars and scientists agree that whatever Allah swears by holds great miracles. The ecological secret and high nutrition of the fig prove the truth of the Creator of the Universe's oath!"
    },
    quranVerse: {
      arabic: "وَالتِّيْنِ وَالزَّيْتُوْنِۙ",
      transliteration: "Wat-tīni waz-zaitūn",
      translation: {
        id: "Demi (buah) Tin dan (buah) Zaitun,",
        en: "By the fig and the olive,"
      }
    },
    quiz: [
      {
        question: { id: "Apa istilah ilmiah untuk struktur buah tin yang menyimpan bunga di dalamnya?", en: "What is the scientific term for the fig fruit structure that hides flowers inside?" },
        options: [
          { text: { id: "Syconium", en: "Syconium" } },
          { text: { id: "Fotosintesis", en: "Photosynthesis" } },
          { text: { id: "Mesocarp", en: "Mesocarp" } },
          { text: { id: "Klorofil", en: "Chlorophyll" } }
        ],
        answerIdx: 0
      },
      {
        question: { id: "Serangga apa yang secara khusus membantu penyerbukan buah tin?", en: "Which insect specifically helps pollinate the fig fruit?" },
        options: [
          { text: { id: "Kupu-kupu raja", en: "Monarch butterfly" } },
          { text: { id: "Tawon tin (Fig wasp)", en: "Fig wasp" } },
          { text: { id: "Lebah madu", en: "Honey bee" } },
          { text: { id: "Belalang", en: "Grasshopper" } }
        ],
        answerIdx: 1
      },
      {
        question: { id: "Zat apa pada buah tin yang sangat baik untuk menurunkan kolesterol?", en: "What substance in figs is very good for lowering cholesterol?" },
        options: [
          { text: { id: "Serat Pektin", en: "Pectin Fiber" } },
          { text: { id: "Glukosa", en: "Glucose" } },
          { text: { id: "Lemak jenuh", en: "Saturated fat" } },
          { text: { id: "Asam urat", en: "Uric acid" } }
        ],
        answerIdx: 0
      }
    ]
  }
};

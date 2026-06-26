import { ObjectData } from "../objects";

export const paruParuData: ObjectData = {
  slug: "paru-paru",
  name: { id: "Paru-paru", en: "Lungs" },
  icon: "🫁",
  category: "tubuh",
  type: "tubuh",
  scientificName: "Pulmo",
  surahName: "Al-Inshirah",
  surahReference: "94:1",
  unlockedAtPoints: 120,
  kosakata: [
    { arab: "رِئَةٌ", latin: "Ri'atun", arti: "Paru-paru", artiEn: "Lung", contohAyat: "Alam nashrah laka sadrak (Bukankah Kami telah melapangkan dadamu?)." }
  ],
  balita: {
    text: { id: "Fiuh... hah! Tarik napas panjang. Dadamu mengembang kan? Di dalam dadamu ada dua balon spons kembar bernama paru-paru yang mengisap udara segar! 🎈🌬️", en: "Phew... hah! Take a deep breath. Your chest expands, right? Inside your chest are two twin sponge balloons called lungs that suck in fresh air! 🎈🌬️" },
    audioTranscript: { id: "Paru-paru menyedot udara seperti spons menyedot air, agar kita tetap hidup.", en: "Lungs suck in air like a sponge sucks water, so we stay alive." },
    quiz: {
      question: { id: "Paru-paru kita mengembang saat kita melakukan apa?", en: "Our lungs expand when we do what?" },
      options: [
        { text: { id: "Menarik napas", en: "Breathing in" } },
        { text: { id: "Tidur", en: "Sleeping" } },
        { text: { id: "Makan", en: "Eating" } }
      ],
      answerIdx: 0
    }
  },
  anak: {
    text: { id: "Setiap hari kita bernapas lebih dari 20.000 kali tanpa kita sadari! Paru-paru mengambil udara baik (oksigen) untuk dikirim ke darah, lalu membuang udara kotor (karbon dioksida) saat kita mengembuskan napas. Pohon dan tanaman sangat membantu paru-paru kita karena mereka menghasilkan oksigen segar. Sayangi alam ciptaan Allah ya! 🌳🫁", en: "Every day we breathe more than 20,000 times without realizing it! Lungs take good air (oxygen) to send to the blood, then throw away dirty air (carbon dioxide) when we breathe out. Trees and plants help our lungs a lot because they produce fresh oxygen. Love Allah's nature! 🌳🫁" },
    facts: [
      { id: "Paru-paru sebelah kirimu sedikit lebih kecil dari paru-paru kanan untuk memberi ruang bagi jantung. ❤️", en: "Your left lung is slightly smaller than the right lung to make room for the heart. ❤️" },
      { id: "Paru-paru adalah satu-satunya organ tubuh manusia yang bisa mengapung di atas air! 🌊", en: "The lungs are the only human body organ that can float on water! 🌊" },
      { id: "Luas permukaan paru-parumu bagian dalam kira-kira sebesar lapangan tenis! 🎾", en: "The inner surface area of your lungs is about the size of a tennis court! 🎾" }
    ],
    quranVerse: {
      arabic: "أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ",
      transliteration: "Alam nashrah laka sadrak",
      translation: { id: "Bukankah Kami telah melapangkan untukmu dadamu?", en: "Did We not expand for you, [O Muhammad], your breast?" },
      context: { id: "Dada yang lapang berkaitan dengan ketenangan dan pernapasan yang baik, sebuah nikmat besar dari Allah.", en: "An expanded chest relates to calmness and good breathing, a great blessing from Allah." }
    },
    quiz: {
      question: { id: "Mengapa paru-paru sebelah kiri sedikit lebih kecil dari yang kanan?", en: "Why is the left lung slightly smaller than the right one?" },
      options: [
        { text: { id: "Karena rusak", en: "Because it's broken" } },
        { text: { id: "Untuk memberi tempat (ruang) bagi jantung", en: "To make room for the heart" } },
        { text: { id: "Karena kita sering miring ke kiri", en: "Because we often lean left" } }
      ],
      answerIdx: 1
    }
  },
  explorer: {
    text: { id: "Struktur dalam paru-paru sangat mirip dengan pohon yang terbalik! Pipa udara besar (trakea) bercabang menjadi dahan (bronkus), lalu menjadi ranting sangat kecil (bronkiolus), dan berujung pada jutaan kantung udara super kecil (alveolus) yang mirip sekumpulan buah anggur. Di alveolus inilah keajaiban pertukaran gas terjadi. Darah membuang gas limbah, dan menyedot oksigen kehidupan dalam hitungan milidetik. Sistem aerodinamika luar biasa karya Sang Pencipta Agung! 🌬️🌳", en: "The structure inside the lungs is very similar to an upside-down tree! The large air pipe (trachea) branches into branches (bronchi), then into tiny twigs (bronchioles), and ends in millions of super tiny air sacs (alveoli) that look like bunches of grapes. It's in the alveoli that the miracle of gas exchange happens. The blood dumps waste gas, and sucks in life-giving oxygen in milliseconds. An extraordinary aerodynamic system by The Great Creator! 🌬️🌳" },
    anatomy: [
      { part: { id: "Trakea", en: "Trachea" }, desc: { id: "Pipa angin utama yang mengalirkan udara dari leher ke dada.", en: "The main windpipe that channels air from the neck to the chest." } },
      { part: { id: "Bronkus", en: "Bronchi" }, desc: { id: "Dua cabang besar yang masuk ke paru-paru kanan dan kiri.", en: "Two large branches that enter the right and left lungs." } },
      { part: { id: "Alveolus", en: "Alveoli" }, desc: { id: "Kantung udara sangat tipis tempat oksigen masuk ke dalam pembuluh darah.", en: "Very thin air sacs where oxygen enters the blood vessels." } }
    ],
    wowFactor: { id: "Jika kita meregangkan seluruh alveolus (kantung udara) manusia, luasnya akan menutupi setengah lapangan tenis! Itulah sebabnya kita bisa menyerap banyak oksigen. 🎾", en: "If we stretched out all human alveoli (air sacs), the area would cover half a tennis court! That's why we can absorb so much oxygen. 🎾" },
    quranVerse: {
      arabic: "يَجْعَلْ صَدْرَهُ ضَيِّقًا حَرَجًا كَأَنَّمَا يَصَّعَّدُ فِي السَّمَاءِ",
      transliteration: "Yaj'al sadrahu dayyiqan harajan kaannamaa yassa' 'adu fis-samaa-i",
      translation: { id: "Niscaya Allah menjadikan dadanya sesak lagi sempit, seolah-olah ia sedang mendaki langit.", en: "He makes his breast tight and constricted as though he were climbing into the sky." }
    },
    quiz: [
      {
        question: { id: "Apa nama kantung udara kecil di paru-paru yang bentuknya seperti buah anggur?", en: "What is the name of the tiny air sacs in the lungs shaped like grapes?" },
        options: [
          { text: { id: "Alveolus", en: "Alveoli" } },
          { text: { id: "Trakea", en: "Trachea" } },
          { text: { id: "Epidermis", en: "Epidermis" } }
        ],
        answerIdx: 0
      }
    ]
  }
};
import { ObjectData } from "../objects";

export const jaheData: ObjectData = {
  slug: "jahe",
  name: { id: "Jahe", en: "Ginger" },
  icon: "🫚",
  category: "tumbuhan",
  type: "tumbuhan",
  scientificName: "Zingiber officinale",
  surahName: "Al-Insan",
  surahReference: "76:17",
  unlockedAtPoints: 10,
  kosakata: [
    { arab: "زَنْجَبِيل", latin: "Zanjabīl", arti: "Jahe", artiEn: "Ginger", contohAyat: "Penduduk surga minum minuman campuran jahe." }
  ],
  balita: {
    text: { id: "Jahe bentuknya seperti jari tangan yang gendut-gendut! Warnanya cokelat kekuningan. 🫚 Baunya sangat harum dan rasanya sedikit pedas dan hangat!", en: "Ginger looks like chubby fingers! It is yellowish-brown. 🫚 It smells very fragrant and tastes a little spicy and warm!" },
    audioTranscript: { id: "Jahe bikin badan kita jadi hangat kalau cuaca sedang dingin.", en: "Ginger makes our body warm when the weather is cold." },
    quiz: {
      question: { id: "Apa yang kita rasakan jika meminum air rebusan jahe?", en: "What do we feel if we drink ginger boiled water?" },
      options: [
        { text: { id: "Badan menjadi dingin seperti es", en: "Body becomes cold like ice" } },
        { text: { id: "Badan menjadi hangat dan nyaman", en: "Body becomes warm and comfortable" } },
        { text: { id: "Perut jadi keroncongan", en: "Stomach starts growling" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Jahe adalah akar tanaman yang hebat! Sejak dulu jahe dipakai sebagai obat untuk menyembuhkan perut sakit atau masuk angin. Allah berfirman di Al-Qur'an, bahwa penghuni surga akan diberi minuman lezat yang dicampur dengan jahe (Zanjabil)! Masya Allah, minuman surga pastilah yang paling enak di alam semesta.", en: "Ginger is a great plant root! Since a long time ago, ginger has been used as medicine to cure stomach aches or colds. Allah says in the Quran that the people of heaven will be given a delicious drink mixed with ginger (Zanjabil)! Mashallah, the drink of heaven must be the most delicious in the universe." },
    facts: [
      { id: "Tanaman jahe tidak memiliki biji, ia ditanam dari potongan akarnya sendiri.", en: "Ginger plants don't have seeds, they are planted from pieces of their own roots." },
      { id: "Rasa pedas pada jahe berasal dari minyak alami yang disebut gingerol.", en: "The spicy taste in ginger comes from a natural oil called gingerol." },
      { id: "Zanjabil adalah sebutan jahe dalam bahasa Arab Al-Qur'an.", en: "Zanjabil is the word for ginger in the Arabic of the Quran." }
    ],
    quranVerse: {
      arabic: "وَيُسْقَوْنَ فِيهَا كَأْسًا كَانَ مِزَاجُهَا زَنْجَبِيلًا",
      transliteration: "Wa yusqawna fīhā ka'san kāna mizājuhā zanjabīlan",
      translation: { id: "Di dalam surga itu mereka diberi minum secangkir (minuman) yang campurannya adalah jahe.", en: "And they will be given to drink a cup [of wine] whose mixture is of ginger." },
      context: { id: "Jahe (zanjabil) akan menjadi campuran minuman yang menyegarkan di surga.", en: "Ginger (zanjabil) will be a refreshing drink mixture in heaven." }
    },
    quiz: {
      question: { id: "Dalam Al-Qur'an, jahe (zanjabil) disebutkan sebagai campuran apa di surga?", en: "In the Quran, what is ginger (zanjabil) mentioned as a mixture for in heaven?" },
      options: [
        { text: { id: "Minyak wangi", en: "Perfume" } },
        { text: { id: "Tanah surga", en: "The soil of heaven" } },
        { text: { id: "Minuman penghuni surga", en: "The drink of the people of heaven" } }
      ],
      answerIdx: 2
    }
  },
  explorer: {
    text: { id: "Apa yang membuat jahe terasa hangat di tenggorokan? Jawabannya ada pada senyawa kimia organik bernama 'gingerol'. Saat masuk ke tubuh manusia, gingerol merangsang reseptor suhu di lidah dan perut kita, menipu saraf kita sehingga merasa hangat! Allah Al-Khabir (Maha Mengetahui) merancang interaksi molekul ini sebagai pereda nyeri dan peradangan alami.", en: "What makes ginger feel warm in the throat? The answer lies in an organic chemical compound called 'gingerol'. When it enters the human body, gingerol stimulates the temperature receptors on our tongue and stomach, tricking our nerves into feeling warm! Allah Al-Khabir (The All-Aware) designed this molecular interaction as a natural pain and inflammation reliever." },
    anatomy: [
      { part: { id: "Rimpang (Rhizome)", en: "Rhizome" }, desc: { id: "Batang yang tumbuh mendatar di dalam tanah (bagian jahe yang kita makan).", en: "The stem that grows horizontally underground (the part of ginger we eat)." } },
      { part: { id: "Gingerol", en: "Gingerol" }, desc: { id: "Zat yang membuat jahe terasa pedas, hangat, dan berkhasiat sebagai obat.", en: "The substance that makes ginger taste spicy, warm, and act as medicine." } }
    ],
    wowFactor: { id: "Akar jahe bisa bertahan berbulan-bulan di luar kulkas dan bisa langsung ditumbuhkan kembali menjadi tanaman baru di tanah!", en: "Ginger roots can last for months outside the fridge and can be directly regrown into a new plant in the soil!" },
    quranVerse: {
      arabic: "عَيْنًا فِيهَا تُسَمَّىٰ سَلْسَبِيلًا",
      transliteration: "‘Aynan fīhā tusammā salsabīlan",
      translation: { id: "(Yang didatangkan dari) sebuah mata air surga yang dinamakan salsabil.", en: "[From] a fountain within it named Salsabeel." }
    },
    quiz: [
      {
        question: { id: "Jahe yang sering kita makan sebenarnya adalah bagian apa dari tanamannya?", en: "The ginger we often eat is actually what part of the plant?" },
        options: [
          { text: { id: "Bunganya", en: "Its flower" } },
          { text: { id: "Rimpang (batang bawah tanah)", en: "Rhizome (underground stem)" } },
          { text: { id: "Daun muda", en: "Young leaves" } }
        ],
        answerIdx: 1
      }
    ]
  }
};

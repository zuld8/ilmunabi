import { ObjectData } from "../objects";

export const kometData: ObjectData = {
  slug: "komet",
  name: { id: "Komet", en: "Comet" },
  icon: "☄️",
  category: "langit",
  type: "langit",
  scientificName: "Cometa",
  surahName: "At-Tariq",
  surahReference: "86:1-3",
  unlockedAtPoints: 20,
  kosakata: [
    { arab: "مُذَنَّب", latin: "Mudzannab", arti: "Komet", artiEn: "Comet", contohAyat: "Komet memiliki ekor cahaya saat dekat matahari." }
  ],
  balita: {
    text: { id: "Wusss! Ada bintang berekor panjang terbang di langit! Itu Komet! ☄️", en: "Whoosh! There's a long-tailed star flying in the sky! That's a Comet! ☄️" },
    audioTranscript: { id: "Komet seperti bola salju raksasa yang punya ekor cahaya yang indah.", en: "A comet is like a giant snowball that has a beautiful glowing tail." },
    quiz: {
      question: { id: "Komet sering disebut apa oleh orang-orang?", en: "What are comets often called by people?" },
      options: [
        { text: { id: "Bintang berekor", en: "Tailed star" } },
        { text: { id: "Bulan sabit", en: "Crescent moon" } },
        { text: { id: "Matahari kecil", en: "Little sun" } }
      ],
      answerIdx: 0
    }
  },
  anak: {
    text: { id: "Komet itu sebenarnya adalah bola es, gas, dan debu angkasa. Saat komet terbang mendekati Matahari, esnya meleleh dan berubah jadi uap, sehingga membuat ekor bercahaya yang panjaaaang sekali!", en: "A comet is actually a ball of ice, gas, and space dust. When a comet flies close to the Sun, its ice melts and turns into vapor, creating a veeeery long glowing tail!" },
    facts: [
      { id: "Ekor komet bisa sangat panjang hingga membentang jutaan kilometer di luar angkasa!", en: "A comet's tail can be so long that it stretches millions of kilometers in space!" },
      { id: "Ekor komet selalu menjauhi Matahari karena tertiup oleh angin matahari.", en: "A comet's tail always points away from the Sun because it is blown by the solar wind." },
      { id: "Komet yang paling terkenal adalah Komet Halley yang muncul setiap 76 tahun sekali.", en: "The most famous comet is Halley's Comet which appears once every 76 years." }
    ],
    quranVerse: {
      arabic: "وَالسَّمَاءِ وَالطَّارِقِ ۝ وَمَا أَدْرَاكَ مَا الطَّارِقُ ۝ النَّجْمُ الثَّاقِبُ",
      transliteration: "Was-samaa'i wath-thaariq. Wa maa adraaka math-thaariq. An-najmuts-tsaaqib.",
      translation: { id: "Demi langit dan yang datang pada malam hari. Tahukah kamu apakah yang datang pada malam hari itu? (Yaitu) bintang yang cahayanya menembus.", en: "By the sky and the night comer. And what can make you know what is the night comer? It is the piercing star." },
      context: { id: "Komet membelah gelapnya malam angkasa dengan cahaya terang, bukti keindahan ciptaan Allah di langit.", en: "Comets slice through the darkness of the night space with bright light, a proof of the beauty of Allah's creation in the sky." }
    },
    quiz: {
      question: { id: "Kenapa komet bisa punya ekor bercahaya?", en: "Why does a comet have a glowing tail?" },
      options: [
        { text: { id: "Karena menabrak bintang lain", en: "Because it hit another star" } },
        { text: { id: "Karena membeku saat jauh", en: "Because it freezes when far away" } },
        { text: { id: "Karena esnya meleleh saat dekat Matahari", en: "Because its ice melts when close to the Sun" } }
      ],
      answerIdx: 2
    }
  },
  explorer: {
    text: { id: "Komet dipercaya oleh astronom sebagai fosil beku dari sisa pembentukan tata surya kita 4,6 miliar tahun yang lalu. Mereka berasal dari tempat yang sangat jauh, seperti Sabuk Kuiper dan Awan Oort. Meneliti komet berarti meneliti sejarah awal penciptaan dari sistem tata surya kita. Sungguh, di balik setiap fenomena langit, terdapat tanda kebesaran Allah bagi mereka yang berpikir.", en: "Comets are believed by astronomers to be frozen fossils from the remnants of our solar system's formation 4.6 billion years ago. They come from very far places, such as the Kuiper Belt and the Oort Cloud. Researching comets means researching the early history of the creation of our solar system. Indeed, behind every celestial phenomenon, there is a sign of Allah's greatness for those who think." },
    anatomy: [
      { part: { id: "Nukleus", en: "Nucleus" }, desc: { id: "Bagian inti keras komet yang terbuat dari bongkahan es dan debu padat.", en: "The hard core of a comet made of a chunk of ice and dense dust." } },
      { part: { id: "Koma (Coma)", en: "Coma" }, desc: { id: "Awan gas dan debu tebal berbentuk kepala yang menyelimuti nukleus komet.", en: "A dense cloud of gas and dust forming a head that surrounds the comet's nucleus." } }
    ],
    wowFactor: { id: "Komet tidak cuma punya satu ekor, tapi seringkali dua! Ekor pertama adalah ekor debu yang putih, dan ekor kedua adalah ekor ion bergas biru yang sangat panjang.", en: "Comets don't just have one tail, but often two! The first tail is the white dust tail, and the second is a very long blue ionized gas tail." },
    quranVerse: {
      arabic: "إِنَّا زَيَّنَّا السَّمَاءَ الدُّنْيَا بِزِينَةٍ الْكَوَاكِبِ",
      transliteration: "Innaa zayyannas-samaa'ad-dunyaa biziinatil kawaakib",
      translation: { id: "Sesungguhnya Kami telah menghias langit yang terdekat dengan hiasan, yaitu bintang-bintang.", en: "Indeed, We have adorned the nearest heaven with an adornment of stars." }
    },
    quiz: [
      {
        question: { id: "Apa nama awan gas dan debu yang menyelimuti inti komet?", en: "What is the name of the gas and dust cloud surrounding the comet's core?" },
        options: [{ text: { id: "Nukleus", en: "Nucleus" } }, { text: { id: "Koma", en: "Coma" } }, { text: { id: "Korona", en: "Corona" } }],
        answerIdx: 1
      }
    ]
  }
};

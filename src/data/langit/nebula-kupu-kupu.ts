import { ObjectData } from "../objects";

export const nebulaKupuKupuData: ObjectData = {
  slug: "nebula-kupu-kupu",
  name: { id: "Nebula Kupu-Kupu", en: "Butterfly Nebula" },
  icon: "🦋",
  category: "langit",
  type: "langit",
  scientificName: "NGC 6302",
  surahName: "Al-Qari'ah",
  surahReference: "101:4",
  unlockedAtPoints: 100,

  kosakata: [
    { arab: "فَرَاشَةٌ", latin: "Faraashatun", arti: "Kupu-kupu", artiEn: "Butterfly", contohAyat: "كَالْفَرَاشِ الْمَبْثُوثِ" },
    { arab: "نَارٌ", latin: "Naarun", arti: "Api", artiEn: "Fire", contohAyat: "نَارٌ حَامِيَةٌ" },
    { arab: "حَارٌّ", latin: "Haarrun", arti: "Panas", artiEn: "Hot", contohAyat: "-" },
    { arab: "جَنَاحٌ", latin: "Janaahun", arti: "Sayap", artiEn: "Wing", contohAyat: "أُولِي أَجْنِحَةٍ" }
  ],

  balita: {
    text: {
      id: "Wah, ada kupu-kupu raksasa bercahaya sedang terbang di langit! Sayapnya membentang besar sekali. Tapi ini bukan hewan ya, ini adalah awan gas luar angkasa yang panas. Cantik sekali!",
      en: "Wow, there's a glowing giant butterfly flying in the sky! Its wings stretch out so big. But this is not an animal, it's a hot space gas cloud. So beautiful!"
    },
    audioTranscript: {
      id: "Nebula Kupu-kupu punya sayap bercahaya dari gas ruang angkasa!",
      en: "The Butterfly Nebula has glowing wings made of space gas!"
    },
    quiz: {
      question: { id: "Bentuk awan ini menyerupai serangga apa?", en: "What insect does this cloud resemble?" },
      options: [
        { text: { id: "Kupu-kupu", en: "Butterfly" } },
        { text: { id: "Nyamuk", en: "Mosquito" } },
        { text: { id: "Semut", en: "Ant" } }
      ],
      answerIdx: 0
    }
  },

  anak: {
    text: {
      id: "Nebula Kupu-Kupu terbentuk dari bintang sekarat yang menyemburkan gas dari dua arah yang berlawanan. Gas ini menyebar dengan sangat cepat seperti sayap raksasa yang terbuka. Ini adalah salah satu objek angkasa paling panas!",
      en: "The Butterfly Nebula is formed from a dying star that ejects gas in two opposite directions. This gas expands very fast like giant opening wings. It is one of the hottest space objects!"
    },
    facts: [
      { id: "Suhu di tengah nebula ini luar biasa panas, mencapai 250.000 derajat Celcius!", en: "The temperature at its center is extremely hot, reaching 250,000 degrees Celsius!" },
      { id: "Lebar rentang sayapnya membentang sejauh 3 tahun cahaya.", en: "Its wingspan stretches across 3 light years." },
      { id: "Bintang di tengahnya tersembunyi di balik debu tebal.", en: "The star in the center is hidden behind thick dust." },
      { id: "Gas di sayapnya melaju dengan kecepatan 900.000 km/jam.", en: "The gas in its wings travels at 900,000 km/h." },
      { id: "Awan ini membeku dengan warna-warna menakjubkan melalui teleskop Hubble.", en: "This cloud is frozen in amazing colors through the Hubble telescope." }
    ],
    quranVerse: {
      arabic: "...",
      transliteration: "...",
      translation: { id: "Pada hari itu manusia adalah seperti anai-anai (kupu-kupu) yang bertebaran. (Al-Qari'ah: 4)", en: "It is the Day when people will be like scattered moths (butterflies). (Al-Qari'ah: 4)" }
    },
    quiz: {
      question: { id: "Berapa derajat panas suhu di pusat Nebula Kupu-Kupu?", en: "How hot is the temperature at the center of the Butterfly Nebula?" },
      options: [
        { text: { id: "250.000 derajat Celcius", en: "250,000 degrees Celsius" } },
        { text: { id: "Sedingin es", en: "Cold as ice" } },
        { text: { id: "30 derajat Celcius", en: "30 degrees Celsius" } }
      ],
      answerIdx: 0
    }
  },

  explorer: {
    text: {
      id: "Nebula Kupu-kupu (Bug Nebula) adalah Nebula Planet Bipolar. Struktur dua lobi seperti sayap ini terjadi karena bintang sekarat di pusat dilingkari piringan debu tebal ibarat 'donat debu' pada khatulistiwanya, sehingga gas yang meledak terpaksa memancar ke kutub atas dan bawahnya. Sayap-sayap gas ini dipenuhi energi ultraviolet yang ekstrim! Dalam Surat Al-Qari'ah, Allah menganalogikan kekacauan kosmik kiamat bagai laron/kupu-kupu bertebaran, mengingatkan betapa rapuhnya benda raksasa alam semesta ini.",
      en: "The Butterfly Nebula is a Bipolar Planetary Nebula. Its two-lobed wing structure happens because the dying central star is surrounded by a thick dust disk like a 'dust donut' at its equator, forcing the exploding gas to shoot out from the top and bottom poles. These gas wings are filled with extreme ultraviolet energy! In Surah Al-Qari'ah, Allah analogizes the cosmic chaos of judgment day to scattered moths/butterflies, reminding us how fragile giant cosmic structures are."
    },
    anatomy: [
      { part: { id: "Sayap Bipolar", en: "Bipolar Wings" }, desc: { id: "Dua hembusan gas berlawanan arah.", en: "Two gas ejections in opposite directions." } },
      { part: { id: "Piringan Debu", en: "Dust Disk" }, desc: { id: "Cincin yang menyumbat bagian tengah gas.", en: "A ring choking the middle of the gas." } }
    ],
    wowFactor: {
      id: "Nebula ini begitu panas sampai molekul es saja meleleh lalu hancur seketika saat terbentuk!",
      en: "This nebula is so hot that ice molecules instantly melt and get destroyed the moment they form!"
    },
    quranVerse: {
      arabic: "...",
      transliteration: "...",
      translation: { id: "Pada hari itu manusia adalah seperti anai-anai yang bertebaran, dan gunung-gunung adalah seperti bulu yang dihambur-hamburkan. (Al-Qari'ah: 4-5)", en: "It is the Day when people will be like scattered moths, and the mountains will be like carded wool. (Al-Qari'ah: 4-5)" }
    },
    quiz: [
      {
        question: { id: "Mengapa gas nebula ini memancar ke atas dan ke bawah membentuk sayap?", en: "Why does the nebula gas shoot up and down to form wings?" },
        options: [
          { text: { id: "Karena didorong alien", en: "Because pushed by aliens" } },
          { text: { id: "Karena bagian tengahnya terhalang piringan debu", en: "Because its middle is blocked by a dust disk" } },
          { text: { id: "Karena kebetulan saja", en: "Because it's just a coincidence" } }
        ],
        answerIdx: 1
      },
      {
        question: { id: "Hewan apa yang disebutkan Al-Qur'an pada saat hari kiamat (Al-Qari'ah)?", en: "What animal does the Quran mention during judgment day (Al-Qari'ah)?" },
        options: [
          { text: { id: "Kuda", en: "Horse" } },
          { text: { id: "Anai-anai / kupu-kupu yang bertebaran", en: "Scattered moths / butterflies" } },
          { text: { id: "Burung layang-layang", en: "Swallows" } }
        ],
        answerIdx: 1
      },
      {
        question: { id: "Apa tipe nebula ini menurut para ilmuwan?", en: "What type of nebula is this according to scientists?" },
        options: [
          { text: { id: "Nebula Bulat", en: "Round Nebula" } },
          { text: { id: "Nebula Planet Bipolar", en: "Bipolar Planetary Nebula" } },
          { text: { id: "Nebula Gelap", en: "Dark Nebula" } }
        ],
        answerIdx: 1
      }
    ]
  }
};

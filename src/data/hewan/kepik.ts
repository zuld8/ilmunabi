import { ObjectData } from "../objects";

export const kepikData: ObjectData = {
  slug: "kepik",
  name: { id: "Kepik", en: "Ladybug" },
  scientificName: "Coccinellidae",
  surahName: "An-Nahl",
  surahReference: "16:68",
  icon: "🐞",
  category: "hewan",
  type: "hewan",
  unlockedAtPoints: 50,
  kosakata: [
    { arab: "حَمْرَاءُ", latin: "Hamraa'u", arti: "Merah", artiEn: "Red", contohAyat: "Fatir 35:27" },
    { arab: "نُقْطَةٌ", latin: "Nuqtatun", arti: "Titik (Bintik)", artiEn: "Dot", contohAyat: "-" },
    { arab: "زَرْعٌ", latin: "Zar'un", arti: "Tanaman/Tumbuhan", artiEn: "Crop/Plant", contohAyat: "Yasin 36:33" },
    { arab: "رِزْقٌ", latin: "Rizqun", arti: "Rezeki/Makanan", artiEn: "Provision", contohAyat: "Saba' 34:39" }
  ],
  balita: {
    text: {
      id: "Wah, lihat! Ada serangga kecil berwarna merah dengan polkadot hitam! Namanya Kepik. 🐞",
      en: "Wow, look! There's a tiny red insect with black polka dots! It's a Ladybug. 🐞"
    },
    audioTranscript: {
      id: "Kepik punya cangkang bulat berwarna merah dan bintik hitam. Ia sahabat tanaman.",
      en: "The ladybug has a round red shell with black dots. It is a friend of plants."
    },
    quiz: {
      question: { id: "Apa warna cangkang kepik pada umumnya?", en: "What is the general color of a ladybug's shell?" },
      options: [
        { text: { id: "Merah bintik hitam", en: "Red with black dots" } },
        { text: { id: "Biru bintik putih", en: "Blue with white dots" } },
        { text: { id: "Hijau", en: "Green" } }
      ],
      answerIdx: 0
    }
  },
  anak: {
    text: {
      id: "Kepik adalah sahabat para petani! Mereka dikirim Allah untuk memakan hama-hama kecil perusak daun, sehingga tanaman bisa tumbuh sehat.",
      en: "Ladybugs are friends of farmers! Allah sent them to eat tiny pests that destroy leaves, so plants can grow healthy."
    },
    facts: [
      { id: "Satu ekor kepik bisa memakan 5.000 hama seumur hidupnya!", en: "One ladybug can eat 5,000 pests in its lifetime!" },
      { id: "Warna merah terang adalah peringatan bagi burung bahwa rasanya tidak enak.", en: "The bright red color is a warning to birds that they taste bad." },
      { id: "Kepik sebenarnya adalah sejenis kumbang, sayapnya keras.", en: "A ladybug is actually a type of beetle, its wings are hard." },
      { id: "Saat musim dingin, ribuan kepik berkumpul untuk menghangatkan diri.", en: "In winter, thousands of ladybugs gather to keep warm." },
      { id: "Kepik bisa menyembunyikan kakinya dan pura-pura mati jika terancam.", en: "Ladybugs can tuck in their legs and play dead if threatened." }
    ],
    quranVerse: {
      arabic: "أَوَلَمْ يَرَوْا إِلَى الْأَرْضِ كَمْ أَنبَتْنَا فِيهَا مِن كُلِّ زَوْجٍ كَرِيمٍ",
      transliteration: "Awa lam yarau ilal-arḍi kam ambatnā fīhā min kulli zaujing karīm",
      translation: {
        id: "Dan apakah mereka tidak memperhatikan bumi, berapakah banyaknya Kami tumbuhkan di bumi itu pelbagai macam tumbuh-tumbuhan yang baik?",
        en: "Do they not observe the earth - how much We have produced therein of every noble kind?"
      }
    },
    quiz: {
      question: { id: "Mengapa kepik disebut sahabat petani?", en: "Why is a ladybug called the farmer's friend?" },
      options: [
        { text: { id: "Karena ia menyiram tanaman", en: "Because it waters plants" } },
        { text: { id: "Karena memakan hama perusak daun", en: "Because it eats pests that destroy leaves" } },
        { text: { id: "Karena bernyanyi di sawah", en: "Because it sings in the fields" } }
      ],
      answerIdx: 1
    }
  },
  explorer: {
    text: {
      id: "Mekanisme melipat sayap pada kepik telah memukau ilmuwan antariksa! Kepik menyimpan sayap terbang yang luas ke bawah sayap keras kecil dengan lipatan origami presisi biologis.",
      en: "The ladybug's wing-folding mechanism has fascinated space scientists! Ladybugs pack large flying wings under tiny hard wings using precise biological origami folding."
    },
    anatomy: [
      { part: { id: "Sayap Origami", en: "Origami Wings" }, desc: { id: "Sayap terbang transparan yang dilipat sangat kompleks.", en: "Transparent flying wings folded in a highly complex manner." } },
      { part: { id: "Kaki Bergetah", en: "Adhesive Legs" }, desc: { id: "Kaki yang memiliki cairan perekat mikro.", en: "Legs that have micro-adhesive fluid." } }
    ],
    wowFactor: {
      id: "Sistem lipat sayap kepik ditiru insinyur untuk mendesain panel surya satelit di luar angkasa agar bisa dilipat kecil dan dibentangkan luas! Subhanallah!",
      en: "The ladybug's wing folding system was copied by engineers to design satellite solar panels in space so they can fold small and unfold wide! Subhanallah!"
    },
    quranVerse: {
      arabic: "وَيَخْلُقُ مَا لَا تَعْلَمُونَ",
      transliteration: "Wa yakhluqu mā lā ta'lamūn",
      translation: { id: "Dan Dia menciptakan apa yang kamu tidak mengetahuinya.", en: "And He creates that which you do not know." },
      context: { id: "Teknologi canggih pelipatan sayap pada hewan membuktikan bahwa desain ciptaan Allah jauh melampaui akal manusia.", en: "The advanced wing-folding technology in animals proves Allah's design far exceeds human intellect." }
    },
    quiz: [
      {
        question: { id: "Apa rahasia sayap terbang kepik yang besar bisa muat di cangkang kecil?", en: "What is the secret of how the ladybug's large flying wings fit inside a tiny shell?" },
        options: [
          { text: { id: "Sayapnya dipotong-potong", en: "The wings are cut into pieces" } },
          { text: { id: "Dilipat dengan pola rumit seperti origami", en: "Folded in complex patterns like origami" } },
          { text: { id: "Kepik memiliki kantong ajaib", en: "The ladybug has a magic pouch" } }
        ],
        answerIdx: 1
      },
      {
        question: { id: "Teknologi manusia apa yang meniru sayap kepik?", en: "What human technology copies ladybug wings?" },
        options: [
          { text: { id: "Roda mobil", en: "Car wheels" } },
          { text: { id: "Panel Surya satelit ruang angkasa", en: "Space satellite Solar Panels" } },
          { text: { id: "Lampu senter", en: "Flashlight" } }
        ],
        answerIdx: 1
      },
      {
        question: { id: "Apa pesan dari warna merah terang pada kepik kepada predator (seperti burung)?", en: "What message does the ladybug's bright red color send to predators (like birds)?" },
        options: [
          { text: { id: "'Aku sangat enak!'", en: "'I am very delicious!'" } },
          { text: { id: "'Aku beracun / rasaku tidak enak!'", en: "'I am poisonous / taste bad!'" } },
          { text: { id: "'Aku sedang tidur!'", en: "'I am sleeping!'" } }
        ],
        answerIdx: 1
      }
    ]
  }
};

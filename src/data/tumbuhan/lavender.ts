import { ObjectData } from "../objects";

export const lavenderData: ObjectData = {
  slug: "lavender",
  name: { id: "Lavender", en: "Lavender" },
  icon: "🪻",
  category: "tumbuhan",
  type: "tumbuhan",
  scientificName: "Lavandula",
  surahName: "Al-Waqi'ah",
  surahReference: "56:89",
  unlockedAtPoints: 10,
  kosakata: [
    { arab: "خُزَامَى", latin: "Khuzāmā", arti: "Lavender", artiEn: "Lavender", contohAyat: "Bunga lavender memiliki wangi yang menenangkan." }
  ],
  balita: {
    text: { id: "Bunga ini warnanya ungu terang dan berbaris-baris panjang! Baunya sangat wangi... hmmm! 🪻 Bikin kita ngantuk dan ingin tidur nyenyak.", en: "This flower is bright purple and lines up in long rows! It smells so fragrant... mmmm! 🪻 It makes us sleepy and want to sleep soundly." },
    audioTranscript: { id: "Bunga lavender sangat wangi dan warnanya ungu.", en: "Lavender flowers are very fragrant and purple." },
    quiz: {
      question: { id: "Warna apa yang paling sering kita lihat pada bunga lavender?", en: "What color do we most often see on lavender flowers?" },
      options: [
        { text: { id: "Ungu", en: "Purple" } },
        { text: { id: "Hitam", en: "Black" } },
        { text: { id: "Cokelat", en: "Brown" } }
      ],
      answerIdx: 0
    }
  },
  anak: {
    text: { id: "Lavender adalah bunga yang terkenal dengan aromanya. Wanginya sangat kuat sehingga bisa mengusir nyamuk lho! Allah menciptakan tanaman yang harum seperti lavender agar manusia bisa merasa rileks dan tenang. Bahkan, wangi-wangian yang baik juga merupakan sunnah yang disukai Rasulullah.", en: "Lavender is a flower famous for its aroma. Its scent is so strong that it can repel mosquitoes! Allah created fragrant plants like lavender so humans can feel relaxed and calm. In fact, good scents are also a Sunnah loved by the Prophet." },
    facts: [
      { id: "Aroma lavender sudah digunakan sejak ribuan tahun lalu untuk sabun mandi alami.", en: "Lavender scent has been used for thousands of years for natural bath soap." },
      { id: "Lebah sangat menyukai nektar lavender untuk membuat madu yang enak.", en: "Bees really love lavender nectar to make delicious honey." },
      { id: "Meskipun kita sangat suka wanginya, nyamuk dan serangga jahat sangat membencinya!", en: "Even though we love the smell, mosquitoes and bad insects absolutely hate it!" }
    ],
    quranVerse: {
      arabic: "فَرَوْحٌ وَرَيْحَانٌ وَجَنَّتُ نَعِيمٍ",
      transliteration: "Fa rawḥun wa rayḥānun wa jannatu na‘īm",
      translation: { id: "maka dia memperoleh ketenteraman dan rezeki (aroma harum) serta surga kenikmatan.", en: "Then [for him is] rest and bounty (sweet fragrance) and a garden of pleasure." },
      context: { id: "Allah menjanjikan wewangian yang menenangkan bagi orang-orang yang baik di surga.", en: "Allah promises calming fragrances for good people in heaven." }
    },
    quiz: {
      question: { id: "Apa manfaat dari wangi bunga lavender selain membuat kita tenang?", en: "What is the benefit of the scent of lavender besides making us calm?" },
      options: [
        { text: { id: "Bisa mengusir nyamuk", en: "It can repel mosquitoes" } },
        { text: { id: "Bisa membuat orang menangis", en: "It can make people cry" } },
        { text: { id: "Bisa menghancurkan batu", en: "It can destroy rocks" } }
      ],
      answerIdx: 0
    }
  },
  explorer: {
    text: { id: "Wangi lavender berasal dari kelenjar minyak kecil berbentuk bintang di permukaan daun dan bunganya. Saat ditiup angin atau disentuh, kapsul mikroskopis ini pecah dan melepaskan minyak atsiri yang mengandung senyawa 'Linalool'. Allah Al-Lathif (Maha Lembut) merancang molekul linalool ini agar dapat berinteraksi langsung dengan sistem saraf manusia untuk menurunkan detak jantung dan meredakan stres!", en: "Lavender's scent comes from small star-shaped oil glands on the surface of its leaves and flowers. When blown by the wind or touched, these microscopic capsules break and release essential oils containing the compound 'Linalool'. Allah Al-Latif (The Most Gentle) designed this linalool molecule to interact directly with the human nervous system to lower heart rate and relieve stress!" },
    anatomy: [
      { part: { id: "Trikoma Kelenjar", en: "Glandular Trichomes" }, desc: { id: "Rambut halus kecil yang menyimpan minyak wangi pada lavender.", en: "Tiny fine hairs that store the fragrant oil on lavender." } },
      { part: { id: "Linalool", en: "Linalool" }, desc: { id: "Senyawa kimia alami yang membuat efek rileks dan mengusir serangga.", en: "The natural chemical compound that causes a relaxing effect and repels insects." } }
    ],
    wowFactor: { id: "Minyak lavender adalah salah satu dari sedikit minyak esensial yang sangat aman sehingga bisa langsung dioleskan ke kulit untuk menyembuhkan luka bakar ringan!", en: "Lavender oil is one of the very few essential oils so safe that it can be applied directly to the skin to heal minor burns!" },
    quranVerse: {
      arabic: "إِنَّا كُلَّ شَيْءٍ خَلَقْنَاهُ بِقَدَرٍ",
      transliteration: "Innā kulla shay'in khalaqnāhu biqadarin",
      translation: { id: "Sesungguhnya Kami menciptakan segala sesuatu menurut ukuran.", en: "Indeed, all things We created with predestination." }
    },
    quiz: [
      {
        question: { id: "Dari mana asal wangi pada tanaman lavender?", en: "Where does the fragrance on the lavender plant come from?" },
        options: [
          { text: { id: "Akar yang menyerap parfum dari tanah", en: "Roots that absorb perfume from the soil" } },
          { text: { id: "Kelenjar minyak kecil di rambut-rambut halus daunnya", en: "Small oil glands in the fine hairs of its leaves" } },
          { text: { id: "Batangnya yang terbuat dari sabun", en: "Its stem which is made of soap" } }
        ],
        answerIdx: 1
      }
    ]
  }
};

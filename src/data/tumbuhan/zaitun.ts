import { ObjectData } from "../objects";

export const zaitunData: ObjectData = {
  slug: "zaitun",
  name: { id: "Zaitun", en: "Olive" },
  scientificName: "Olea europaea",
  surahName: "At-Tin (1)",
  surahReference: "95:1",
  icon: "🫒",
  category: "Tumbuhan",
  type: "tumbuhan",
  unlockedAtPoints: 50,
  kosakata: [
    {
      arab: "زَيْتُونٌ",
      latin: "Zaytuun",
      arti: "Zaitun",
      artiEn: "Olive",
      contohAyat: "At-Tin 95:1",
      icon: "🫒"
    },
    {
      arab: "شَجَرَةٌ",
      latin: "Syajarah",
      arti: "Pohon",
      artiEn: "Tree",
      contohAyat: "An-Nur 24:35",
      icon: "🌳"
    },
    {
      arab: "مُبَارَكَةٌ",
      latin: "Mubaarakah",
      arti: "Yang Diberkahi",
      artiEn: "Blessed",
      contohAyat: "An-Nur 24:35",
      icon: "✨"
    },
    {
      arab: "زَيْتٌ",
      latin: "Zayt",
      arti: "Minyak",
      artiEn: "Oil",
      contohAyat: "An-Nur 24:35",
      icon: "🧪"
    }
  ],
  balita: {
    text: {
      id: "Ini pohon zaitun! Pohon zaitun buahnya kecil dan bulat. Minyak dari buah zaitun sehat sekali untuk tubuh kita! 🫒",
      en: "This is an olive tree! Olives are small and round. Olive oil is very healthy for our body! 🫒",
    },
    audioTranscript: {
      id: "Ini pohon zaitun! Pohon zaitun buahnya kecil dan bulat. Minyak dari buah zaitun sehat sekali untuk tubuh kita.",
      en: "This is an olive tree! Olives are small and round. Olive oil is very healthy for our body.",
    },
    quiz: {
      question: {
        id: "Buah apa yang menghasilkan minyak zaitun yang sehat?",
        en: "Which fruit makes healthy olive oil?",
      },
      options: [
        { text: { id: "🫒 Zaitun", en: "🫒 Olive" }, isImage: true },
        { text: { id: "🍒 Ceri", en: "🍒 Cherry" }, isImage: true },
        { text: { id: "🍇 Anggur", en: "🍇 Grape" }, isImage: true },
      ],
      answerIdx: 0,
    },
  },
  anak: {
    text: {
      id: "Zaitun adalah pohon istimewa yang diberkahi Allah. Pohon ini sangat kuat dan daunnya selalu hijau sepanjang tahun.",
      en: "The olive is a special tree blessed by Allah. It is very strong and its leaves remain green all year round.",
    },
    facts: [
      {
        id: "Pohon zaitun bisa hidup hingga ribuan tahun, dan masih bisa menghasilkan buah!",
        en: "Olive trees can live for thousands of years and still produce fruit!",
      },
      {
        id: "Minyak zaitun memiliki banyak sekali manfaat untuk kesehatan jantung dan kulit.",
        en: "Olive oil has many benefits for heart and skin health.",
      },
      {
        id: "Daun zaitun tidak gugur di musim dingin (evergreen) sehingga melambangkan perdamaian dan kekuatan.",
        en: "Olive leaves do not fall in winter (evergreen), symbolizing peace and strength.",
      },
    ],
    quranVerse: {
      arabic: "وَالتِّينِ وَالزَّيْتُونِ",
      transliteration: "Wat-teeni waz-zaitoon",
      translation: {
        id: "Demi buah tin dan buah zaitun.",
        en: "By the fig and the olive.",
      },
    },
    quiz: {
      question: {
        id: "Apa keistimewaan daun pohon zaitun?",
        en: "What is special about olive tree leaves?",
      },
      options: [
        { text: { id: "Berwarna merah muda", en: "They are pink in color" } },
        { text: { id: "Tidak pernah gugur meskipun musim dingin", en: "They never fall even during winter" } },
        { text: { id: "Rasanya manis sekali", en: "They taste very sweet" } },
      ],
      answerIdx: 1,
    },
  },
  explorer: {
    text: {
      id: "Pohon zaitun memiliki adaptasi seluler yang luar biasa untuk bertahan di tanah kering dan berbatu.",
      en: "The olive tree has amazing cellular adaptations to survive in dry, rocky soils.",
    },
    anatomy: [
      {
        part: { id: "Lapisan Sklerenkim", en: "Sclerenchyma Layer" },
        desc: { id: "Jaringan sel daun yang tebal dan kokoh menjaga kestabilan struktur daun di bawah kekeringan ekstrem.", en: "Thick and rigid leaf cell tissues that stabilize leaf structures under extreme drought." },
      },
      {
        part: { id: "Trikoma Perak", en: "Silver Trichomes" },
        desc: { id: "Bulu-bulu halus mikroskopis di bawah daun untuk memantulkan sinar matahari berlebih dan menjaga kelembapan.", en: "Microscopic fine hairs beneath leaves that reflect excess sunlight and preserve moisture." },
      },
    ],
    wowFactor: {
      id: "Al-Qur'an dalam Surah An-Nur:35 menyebut minyak zaitun bersumber dari 'pohon yang diberkahi... yang minyaknya hampir-hampir menerangi walaupun tidak disentuh api'. Secara sains, minyak zaitun perasan pertama (extra virgin) mengandung senyawa polifenol antioksidan tingkat tertinggi yang memperkuat dinding sel tubuh manusia dari penuaan dini dan kanker, memancarkan 'cahaya kesehatan' dari dalam.",
      en: "The Qur'an in Surah An-Nur:35 refers to olive oil from a 'blessed tree... whose oil would almost glow even if untouched by fire'. Scientifically, extra virgin olive oil contains high concentrations of polyphenols and antioxidants that protect human cell walls from aging and diseases, radiating health from within.",
    },
    quranVerse: {
      arabic: "وَالتِّينِ وَالزَّيْتُونِ",
      transliteration: "Wat-teeni waz-zaitoon",
      translation: {
        id: "Demi buah tin dan buah zaitun.",
        en: "By the fig and the olive.",
      },
      context: {
        id: "Sumpah Allah demi Zaitun mensejajarkannya dengan tempat-tempat suci para Nabi, menandakan betapa berharganya ciptaan ini sebagai obat fisik dan simbol spiritual.",
        en: "Allah's oath by the olive associates it with sacred prophetic lands, emphasizing its exceptional value as a physical remedy and a spiritual symbol.",
      },
    },
    quiz: {
      question: {
        id: "Senyawa aktif apa dalam minyak zaitun extra virgin yang terbukti melindungi sel-sel tubuh dari kerusakan?",
        en: "Which active compound in extra virgin olive oil is proven to protect body cells from damage?",
      },
      options: [
        { text: { id: "Polifenol antioksidan alami", en: "Natural antioxidant polyphenols" } },
        { text: { id: "Karbohidrat sederhana", en: "Simple carbohydrates" } },
        { text: { id: "Zat kapur", en: "Lime substances" } },
      ],
      answerIdx: 0,
    },
  },
};

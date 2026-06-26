import { ObjectData } from "../objects";

export const keledaiData: ObjectData = {
  slug: "keledai",
  name: { id: "Keledai", en: "Donkey" },
  icon: "🫏",
  category: "hewan",
  type: "hewan",
  scientificName: "Equus asinus",
  surahName: "Luqman",
  surahReference: "31:19",
  unlockedAtPoints: 20,
  kosakata: [
    { arab: "حِمَارٌ", latin: "himaar", arti: "Keledai", artiEn: "Donkey", contohAyat: "إِنَّ أَنكَرَ الْأَصْوَاتِ لَصَوْتُ الْحَمِيرِ (Sesungguhnya seburuk-buruk suara ialah suara keledai)" }
  ],
  balita: {
    text: { id: "Hee-haw! 🫏 Keledai punya telinga yang sangaaat panjang dan suka membantu membawa barang-barang berat.", en: "Hee-haw! 🫏 Donkeys have verrrry long ears and like to help carry heavy things." },
    audioTranscript: { id: "Halo teman! Aku keledai. Tubuhku kuat sekali untuk berjalan jauh, dan telingaku yang panjang ini membantuku mendengar dari kejauhan!", en: "Hello friend! I'm a donkey. My body is very strong for walking far, and my long ears help me hear from far away!" },
    quiz: {
      question: { id: "Bagian tubuh keledai yang sangat khas adalah?", en: "What is a very distinctive body part of a donkey?" },
      options: [
        { text: { id: "Hidung yang panjang", en: "Long nose" } },
        { text: { id: "Telinga yang panjang", en: "Long ears" } },
        { text: { id: "Leher yang panjang", en: "Long neck" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Hati-hati ya saat berbicara! Dalam Al-Qur'an, Luqman menasihati anaknya agar tidak berteriak-teriak. Orang yang suka berteriak disamakan dengan suara ringkikan keledai yang keras lho!", en: "Be careful when you speak! In the Qur'an, Luqman advised his son not to yell. People who like to yell are compared to the loud braying of a donkey!" },
    facts: [
      { id: "Telinga panjang keledai berfungsi untuk mendinginkan tubuh di gurun pasir! 🏜️", en: "A donkey's long ears function to cool its body in the desert! 🏜️" },
      { id: "Keledai sangat tangguh dan bisa membawa beban berat sejauh puluhan kilometer. 🏋️", en: "Donkeys are very tough and can carry heavy loads for tens of kilometers. 🏋️" },
      { id: "Keledai punya ingatan super kuat, bisa mengingat tempat dan keledai lain selama 25 tahun! 🧠", en: "Donkeys have super strong memories, they can remember places and other donkeys for 25 years! 🧠" }
    ],
    quranVerse: { arabic: "...", transliteration: "...", translation: { id: "...", en: "..." } },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  },
  explorer: {
    text: { id: "Keledai diciptakan Allah dengan kekuatan luar biasa untuk menjadi kendaraan dan alat angkut bagi manusia di medan yang sulit. Namun, Al-Qur'an menjadikan suara keledai yang memekakkan telinga sebagai perumpamaan buruk bagi orang yang berbicara kasar atau berteriak sombong. Ini mengajarkan kita pentingnya kelembutan dalam berbicara.", en: "Allah created the donkey with extraordinary strength to be a mount and transport for humans in difficult terrains. However, the Qur'an uses the donkey's deafening voice as a bad parable for people who speak harshly or yell arrogantly. This teaches us the importance of gentleness in speech." },
    quranVerse: {
      arabic: "وَاقْصِدْ فِي مَشْيِكَ وَاغْضُضْ مِنْ صَوْتِكَ ۚ إِنَّ أَنْكَرَ الْأَصْوَاتِ لَصَوْتُ الْحَمِيرِ",
      transliteration: "Waqsid fii mashyika waghdud min sawtik, inna ankaral aswaati lasawtul hamiir",
      translation: { id: "Dan sederhanakanlah kamu dalam berjalan dan lunakkanlah suaramu. Sesungguhnya seburuk-buruk suara ialah suara keledai.", en: "And be moderate in your pace and lower your voice; indeed, the most disagreeable of sounds is the voice of donkeys." }
    },
    anatomy: [{ part: { id: "Bagian", en: "Part" }, desc: { id: "Penjelasan", en: "Explanation" } }],
    wowFactor: { id: "Fakta menakjubkan!", en: "Amazing fact!" },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  }
};

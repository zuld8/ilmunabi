import { ObjectData } from "../objects";

export const rayapData: ObjectData = {
  slug: "rayap",
  name: { id: "Rayap", en: "Termite" },
  scientificName: "Isoptera",
  surahName: "Saba'",
  surahReference: "34:14",
  icon: "🪵",
  category: "hewan",
  type: "hewan",
  unlockedAtPoints: 50,
  kosakata: [
    { arab: "دَابَّةُ الْأَرْضِ", latin: "Daabbatul Ardh", arti: "Hewan melata bumi (Rayap)", artiEn: "Creature of the earth (Termite)", contohAyat: "Saba' 34:14" },
    { arab: "خَشَبٌ", latin: "Khasyabun", arti: "Kayu", artiEn: "Wood", contohAyat: "Al-Munafiqun 63:4" },
    { arab: "بِنَاءٌ", latin: "Binaa'un", arti: "Bangunan", artiEn: "Building", contohAyat: "Ghafir 40:36" },
    { arab: "غَيْبٌ", latin: "Ghaibun", arti: "Hal Ghaib", artiEn: "Unseen", contohAyat: "Saba' 34:14" }
  ],
  balita: {
    text: {
      id: "Kruk kruk kruk. Rayap itu serangga kecil yang suka sekali makan kayu. 🪵",
      en: "Munch munch. Termites are tiny insects that really love to eat wood. 🪵"
    },
    audioTranscript: {
      id: "Rayap memakan kayu yang keras. Allah memberinya gigi yang sangat tajam dan kuat.",
      en: "Termites eat hard wood. Allah gave them very sharp and strong teeth."
    },
    quiz: {
      question: { id: "Apa makanan kesukaan rayap?", en: "What is a termite's favorite food?" },
      options: [
        { text: { id: "Daging", en: "Meat" } },
        { text: { id: "Kayu kering", en: "Dry wood" } },
        { text: { id: "Daun segar", en: "Fresh leaves" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: {
      id: "Rayap sangat terkenal di dalam Al-Qur'an! Rayaplah hewan kecil yang memakan tongkat Nabi Sulaiman saat beliau wafat, lho.",
      en: "Termites are very famous in the Qur'an! It was a termite that ate Prophet Sulaiman's staff when he passed away."
    },
    facts: [
      { id: "Rayap memakan kayu karena kayu mengandung 'selulosa'.", en: "Termites eat wood because it contains 'cellulose'." },
      { id: "Mereka hidup dalam koloni besar yang dipimpin oleh Ratu Rayap.", en: "They live in large colonies led by a Queen Termite." },
      { id: "Dalam Al-Qur'an, rayap disebut 'Daabbatul Ardh' (hewan melata bumi).", en: "In the Qur'an, termites are called 'Daabbatul Ardh' (earth creature)." },
      { id: "Rayap membuktikan bahwa Jin tidak mengetahui hal ghaib.", en: "Termites proved that Jinn do not know the unseen." },
      { id: "Ratu rayap bisa bertelur hingga 30.000 butir sehari!", en: "A termite queen can lay up to 30,000 eggs a day!" }
    ],
    quranVerse: {
      arabic: "فَلَمَّا قَضَيْنَا عَلَيْهِ الْمَوْتَ مَا دَلَّهُمْ عَلَىٰ مَوْتِهِ إِلَّا دَابَّةُ الْأَرْضِ تَأْكُلُ مِنسَأَتَهُ",
      transliteration: "Fa lammā qaḍainā ‘alaihil-mauta mā dallahum ‘alā mautihī illā dābbatul-arḍi ta'kulu minsa'atah",
      translation: {
        id: "Maka tatkala Kami telah menetapkan kematian atasnya (Sulaiman), tidak ada yang menunjukkan kematiannya itu kepada mereka (jin) kecuali rayap yang memakan tongkatnya.",
        en: "And when We decreed for Solomon death, nothing indicated to the jinn his death except a creature of the earth eating his staff."
      }
    },
    quiz: {
      question: { id: "Hewan apa yang memakan tongkat Nabi Sulaiman?", en: "Which animal ate Prophet Sulaiman's staff?" },
      options: [
        { text: { id: "Rayap", en: "Termite" } },
        { text: { id: "Semut", en: "Ant" } },
        { text: { id: "Burung Hud-hud", en: "Hud-hud Bird" } }
      ],
      answerIdx: 0
    }
  },
  explorer: {
    text: {
      id: "Bagaimana rayap mencerna kayu keras? Mereka dibantu mikroba di dalam ususnya untuk memecah selulosa! Bukti simbiosis mutualisme rancangan Allah.",
      en: "How do termites digest hard wood? They are helped by microbes in their guts to break down cellulose! Proof of mutualistic symbiosis designed by Allah."
    },
    anatomy: [
      { part: { id: "Mandibula Kuat", en: "Strong Mandibles" }, desc: { id: "Rahang tajam penghancur serat kayu.", en: "Sharp jaws for crushing wood fibers." } },
      { part: { id: "Usus Simbiotik", en: "Symbiotic Gut" }, desc: { id: "Usus berisi protozoa yang mencerna kayu.", en: "Gut containing protozoa that digest wood." } }
    ],
    wowFactor: {
      id: "Sarang rayap Afrika (Mound) setinggi 9 meter dilengkapi sistem ventilasi udara otomatis! Arsitektur pendingin ruangan ini ditiru oleh gedung-gedung modern di dunia.",
      en: "African termite mounds up to 9 meters high feature automatic air ventilation! This air-conditioning architecture is copied by modern buildings worldwide."
    },
    quranVerse: {
      arabic: "فَلَمَّا خَرَّ تَبَيَّنَتِ الْجِنُّ أَن لَّوْ كَانُوا يَعْلَمُونَ الْغَيْبَ مَا لَبِثُوا فِي الْعَذَابِ الْمُهِينِ",
      transliteration: "Fa lammā kharra tabayyanatil-jinnu al lau kānū ya'lamūnal-ghaiba mā labisū fil-‘azābil-muhīn",
      translation: { id: "Maka tatkala ia (Sulaiman) telah tersungkur, nyatalah bagi jin bahwa kalau sekiranya mereka mengetahui yang ghaib, tentulah mereka tidak akan tetap dalam siksa yang hina.", en: "But when he fell, it became clear to the jinn that if they had known the unseen, they would not have remained in humiliating punishment." },
      context: { id: "Rayap yang meruntuhkan tongkat menjadi bukti bahwa makhluk ghaib sehebat Jin pun tidak tahu masa depan.", en: "The termite that broke the staff proved that even powerful Jinn do not know the future." }
    },
    quiz: [
      {
        question: { id: "Siapa yang menolong rayap mencerna kayu di dalam perutnya?", en: "Who helps termites digest wood inside their stomach?" },
        options: [
          { text: { id: "Mereka merebus kayu dulu", en: "They boil the wood first" } },
          { text: { id: "Mikroba / Protozoa (simbiosis)", en: "Microbes / Protozoa (symbiosis)" } },
          { text: { id: "Asam lambung seperti manusia", en: "Stomach acid like humans" } }
        ],
        answerIdx: 1
      },
      {
        question: { id: "Teknologi manusia apa yang terinspirasi dari sarang rayap besar?", en: "What human technology is inspired by large termite mounds?" },
        options: [
          { text: { id: "Sistem pendingin (AC) gedung tanpa listrik", en: "Building cooling systems (AC) without electricity" } },
          { text: { id: "Kereta cepat", en: "Bullet trains" } },
          { text: { id: "Pembuatan kertas", en: "Paper making" } }
        ],
        answerIdx: 0
      },
      {
        question: { id: "Kisah rayap memakan tongkat Nabi Sulaiman membuktikan apa?", en: "The story of termites eating Prophet Sulaiman's staff proved what?" },
        options: [
          { text: { id: "Bahwa Jin mengetahui hal ghaib", en: "That Jinn know the unseen" } },
          { text: { id: "Bahwa Jin TIDAK mengetahui hal ghaib", en: "That Jinn DO NOT know the unseen" } },
          { text: { id: "Bahwa kayu itu rapuh", en: "That wood is fragile" } }
        ],
        answerIdx: 1
      }
    ]
  }
};

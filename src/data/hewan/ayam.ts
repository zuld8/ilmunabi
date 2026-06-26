import { ObjectData } from "../objects";

export const ayamData: ObjectData = {
  slug: "ayam",
  name: { id: "Ayam", en: "Chicken" },
  icon: "🐔",
  category: "burung",
  type: "hewan",
  scientificName: "Gallus gallus domesticus",
  surahName: "Al-Mulk",
  surahReference: "67:19",
  unlockedAtPoints: 10,
  kosakata: [
    { arab: "دَجَاجَة", latin: "Dajaajah", arti: "Ayam", artiEn: "Chicken", contohAyat: "Apakah mereka tidak memperhatikan burung-burung (termasuk ayam) yang direntangkan dan dikatupkan sayapnya di atas mereka?" }
  ],
  balita: {
    text: { id: "Halo kawan! Aku ayam! Petok petok! Aku suka bangun pagi dan membangunkan semua orang! ☀️", en: "Hello friend! I am a chicken! Cluck cluck! I love waking up early and waking everyone up! ☀️" },
    audioTranscript: { id: "Kukuruyuk! Aku berkokok setiap pagi. Siapa yang suka makan telurku?", en: "Cock-a-doodle-doo! I crow every morning. Who likes to eat my eggs?" },
    quiz: {
      question: { id: "Apa suara yang dikeluarkan ayam jantan di pagi hari?", en: "What sound does a rooster make in the morning?" },
      options: [
        { text: { id: "Mooo!", en: "Mooo!" } },
        { text: { id: "Kukuruyuk!", en: "Cock-a-doodle-doo!" } },
        { text: { id: "Meow!", en: "Meow!" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Ayam adalah burung ajaib yang memberi kita banyak manfaat, dari telur hingga dagingnya. Allah menciptakan ayam untuk membantu manusia hidup sehat!", en: "Chickens are amazing birds that give us many benefits, from eggs to meat. Allah created chickens to help humans live healthily!" },
    facts: [
      { id: "Ayam memiliki lebih dari 30 suara berbeda untuk berbicara satu sama lain!", en: "Chickens have over 30 different sounds to talk to each other!" },
      { id: "Mata ayam bisa melihat warna jauh lebih baik daripada manusia.", en: "Chickens' eyes can see colors much better than humans." },
      { id: "Ayam dapat mengingat hingga 100 wajah, lho!", en: "Chickens can remember up to 100 faces, you know!" }
    ],
    quranVerse: {
      arabic: "أَوَلَمْ يَرَوْا إِلَى الطَّيْرِ فَوْقَهُمْ صَافَّاتٍ وَيَقْبِضْنَ ۚ مَا يُمْسِكُهُنَّ إِلَّا الرَّحْمَٰنُ ۚ إِنَّهُ بِكُلِّ شَيْءٍ بَصِيرٌ",
      transliteration: "Awa lam yaraw ilat-tayri fawqahum shaffatin wa yaqbidhn. Ma yumsikuhunna illar-rahman. Innahu bikulli syai'in bashir.",
      translation: { id: "Dan apakah mereka tidak memperhatikan burung-burung yang mengembangkan dan mengatupkan sayapnya di atas mereka? Tidak ada yang menahannya (di udara) selain Yang Maha Pengasih. Sungguh, Dia Maha Melihat segala sesuatu.", en: "Do they not see the birds above them with wings outspread and [sometimes] folded in? None holds them [aloft] except the Most Merciful. Indeed He is, of all things, Seeing." },
      context: { id: "Burung (termasuk ayam) bisa menjaga keseimbangan berkat kekuasaan Allah.", en: "Birds (including chickens) can maintain balance thanks to the power of Allah." }
    },
    quiz: {
      question: { id: "Berapa banyak suara yang ayam gunakan untuk berbicara dengan temannya?", en: "How many sounds do chickens use to talk to their friends?" },
      options: [
        { text: { id: "Lebih dari 30 suara", en: "More than 30 sounds" } },
        { text: { id: "Hanya 1 suara", en: "Only 1 sound" } },
        { text: { id: "Ayam tidak bersuara", en: "Chickens make no sound" } }
      ],
      answerIdx: 0
    }
  },
  explorer: {
    text: { id: "Tahukah kamu ayam memiliki hierarki sosial yang disebut 'pecking order'? Ini menunjukkan betapa teraturnya ciptaan Allah dalam dunia hewan. Subhanallah!", en: "Did you know chickens have a social hierarchy called a 'pecking order'? This shows how organized Allah's creation is in the animal kingdom. Subhanallah!" },
    anatomy: [
      { part: { id: "Jengger (Comb)", en: "Comb" }, desc: { id: "Membantu ayam menjaga suhu tubuhnya tetap dingin di hari yang panas.", en: "Helps the chicken keep its body temperature cool on hot days." } },
      { part: { id: "Sayap (Wings)", en: "Wings" }, desc: { id: "Ayam tidak bisa terbang jauh, tapi sayap ini membantunya melompat dan menjaga keseimbangan.", en: "Chickens cannot fly far, but these wings help them jump and maintain balance." } }
    ],
    wowFactor: { id: "Ayam adalah kerabat terdekat yang masih hidup dari dinosaurus T-Rex! Keren kan?", en: "Chickens are the closest living relatives to the T-Rex dinosaur! Cool, right?" },
    quranVerse: {
      arabic: "أَلَمْ يَرَوْا إِلَى الطَّيْرِ مُسَخَّرَاتٍ فِي جَوِّ السَّمَاءِ مَا يُمْسِكُهُنَّ إِلَّا اللَّهُ ۗ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِقَوْمٍ يُؤْمِنُونَ",
      transliteration: "Alam yaraw ilat-tayri musakh-kharatin fi jawwis-sama'i ma yumsikuhunna illallah. Inna fi thalika la-ayatin liqawmin yu'minun.",
      translation: { id: "Tidakkah mereka memperhatikan burung-burung yang dimudahkan terbang di angkasa bebas. Tidak ada yang menahannya selain daripada Allah.", en: "Do they not see the birds controlled in the atmosphere of the sky? None holds them up except Allah." }
    },
    quiz: [
      {
        question: { id: "Hewan purba apa yang ternyata berkerabat dengan ayam?", en: "What ancient animal is actually related to the chicken?" },
        options: [
          { text: { id: "T-Rex", en: "T-Rex" } },
          { text: { id: "Mammoth", en: "Mammoth" } },
          { text: { id: "Megalodon", en: "Megalodon" } }
        ],
        answerIdx: 0
      }
    ]
  }
};

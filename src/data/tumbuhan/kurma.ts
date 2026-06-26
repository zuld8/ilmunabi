import { ObjectData } from "../objects";

export const kurmaData: ObjectData = {
  slug: "kurma",
  name: { id: "Kurma", en: "Date Palm" },
  icon: "🌴",
  category: "tumbuhan",
  type: "tumbuhan",
  scientificName: "Phoenix dactylifera",
  surahName: "Maryam",
  surahReference: "19:25",
  unlockedAtPoints: 10,
  kosakata: [
    { arab: "نَخْلَة", latin: "Nakhlah", arti: "Pohon Kurma", artiEn: "Date Palm", contohAyat: "Pohon kurma sangat berkah." }
  ],
  balita: {
    text: { id: "Pohon ini sangat tinggi dan daunnya seperti sisir raksasa! Buahnya manis lengket seperti permen cokelat. 🌴 Nyam, enak sekali!", en: "This tree is very tall and its leaves look like giant combs! Its fruit is sweet and sticky like chocolate candy. 🌴 Yum, so delicious!" },
    audioTranscript: { id: "Buah kurma sangat manis dan bikin kita kuat berpuasa.", en: "Dates are very sweet and make us strong when fasting." },
    quiz: {
      question: { id: "Apa rasa dari buah kurma yang sudah matang?", en: "What does a ripe date fruit taste like?" },
      options: [
        { text: { id: "Asin seperti garam", en: "Salty like salt" } },
        { text: { id: "Manis seperti madu/permen", en: "Sweet like honey/candy" } },
        { text: { id: "Pahit sekali", en: "Very bitter" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Pohon kurma adalah tanaman yang luar biasa kuat! Ia bisa hidup di padang pasir yang sangat panas dan kurang air. Allah memerintahkan Bunda Maryam untuk menggoyang batang kurma agar buahnya jatuh sebagai makanan. Rasulullah juga sangat suka makan kurma, apalagi saat berbuka puasa!", en: "The date palm is an incredibly strong plant! It can live in very hot deserts with little water. Allah commanded Mother Maryam to shake the trunk of a date palm so its fruit would fall as food. The Prophet also really loved eating dates, especially when breaking the fast!" },
    facts: [
      { id: "Pohon kurma bisa tumbuh setinggi gedung tingkat sepuluh!", en: "Date palms can grow as tall as a ten-story building!" },
      { id: "Satu tandan besar buah kurma bisa seberat anak kecil (sekitar 10 kg).", en: "A large bunch of dates can be as heavy as a small child (about 10 kg)." },
      { id: "Kurma adalah buah yang paling banyak disebut di dalam Al-Qur'an.", en: "Dates are the fruit most frequently mentioned in the Quran." }
    ],
    quranVerse: {
      arabic: "وَهُزِّي إِلَيْكِ بِجِذْعِ النَّخْلَةِ تُسَاقِطْ عَلَيْكِ رُطَبًا جَنِيًّا",
      transliteration: "Wa huzzī ilayki bijidh‘i al-nakhlati tusāqiṭ ‘alayki ruṭaban janiyyā",
      translation: { id: "Dan goyanglah pangkal pohon kurma itu ke arahmu, niscaya pohon itu akan menggugurkan buah kurma yang masak kepadamu.", en: "And shake toward you the trunk of the palm tree; it will drop upon you ripe, fresh dates." },
      context: { id: "Allah memberikan rezeki makanan bergizi kepada Maryam berupa kurma.", en: "Allah provided nutritious food to Maryam in the form of dates." }
    },
    quiz: {
      question: { id: "Di mana pohon kurma biasanya banyak tumbuh dengan baik?", en: "Where do date palms usually grow well in large numbers?" },
      options: [
        { text: { id: "Di kutub utara yang bersalju", en: "In the snowy North Pole" } },
        { text: { id: "Di daerah padang pasir yang panas", en: "In hot desert areas" } },
        { text: { id: "Di dalam gua yang gelap", en: "Inside a dark cave" } }
      ],
      answerIdx: 1
    }
  },
  explorer: {
    text: { id: "Kurma adalah mahakarya ketahanan alam. Saat ditanam di padang pasir, akar kurma bisa menembus pasir sangat dalam untuk menemukan kantong air (oase). Sel-sel daunnya memiliki lapisan lilin tebal untuk mencegah air menguap. Allah mendesain pohon kurma agar semua bagiannya bermanfaat: buahnya untuk dimakan, batangnya untuk tiang rumah, dan daunnya untuk atap. Subhanallah!", en: "The date palm is a masterpiece of natural resilience. When planted in the desert, its roots can penetrate very deep into the sand to find water pockets (oases). Its leaf cells have a thick wax layer to prevent water from evaporating. Allah designed the date palm so that every part is useful: the fruit to eat, the trunk for house pillars, and the leaves for roofs. Subhanallah!" },
    anatomy: [
      { part: { id: "Pelepah (Fronds)", en: "Fronds" }, desc: { id: "Daun besar bersisir yang dilapisi lilin agar tahan panas matahari.", en: "Large comb-like leaves coated in wax to withstand the sun's heat." } },
      { part: { id: "Ruṭab", en: "Rutab" }, desc: { id: "Tahap buah kurma yang setengah matang, bertekstur lembut dan penuh air.", en: "The half-ripe stage of the date, soft-textured and full of water." } }
    ],
    wowFactor: { id: "Biji kurma bisa bertahan hidup ribuan tahun! Ilmuwan pernah menanam biji kurma berusia 2000 tahun dan biji itu berhasil tumbuh menjadi pohon!", en: "Date seeds can survive for thousands of years! Scientists once planted a 2000-year-old date seed and it successfully grew into a tree!" },
    quranVerse: {
      arabic: "يُنْبِتُ لَكُمْ بِهِ الزَّرْعَ وَالزَّيْتُونَ وَالنَّخِيلَ",
      transliteration: "Yunbitu lakum bihi az-zar‘a wal-zaytūna wal-nakhīla",
      translation: { id: "Dia menumbuhkan bagi kamu dengan air hujan itu tanam-tanaman; zaitun, kurma...", en: "He causes to grow for you thereby the crops, olives, palm trees..." }
    },
    quiz: [
      {
        question: { id: "Bagaimana cara daun kurma melindungi dirinya dari cuaca panas agar airnya tidak habis menguap?", en: "How do date leaves protect themselves from hot weather so their water doesn't evaporate completely?" },
        options: [
          { text: { id: "Bersembunyi di bawah tanah", en: "Hiding underground" } },
          { text: { id: "Melapisi daunnya dengan lapisan lilin alami tebal", en: "Coating its leaves with a thick natural wax layer" } },
          { text: { id: "Menyemprotkan air ke udara", en: "Spraying water into the air" } }
        ],
        answerIdx: 1
      }
    ]
  }
};

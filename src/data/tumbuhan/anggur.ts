import { ObjectData } from "../objects";

export const anggurData: ObjectData = {
  slug: "anggur",
  name: { id: "Anggur", en: "Grape" },
  icon: "🍇",
  category: "tumbuhan",
  type: "tumbuhan",
  scientificName: "Vitis vinifera",
  surahName: "An-Nahl",
  surahReference: "16:11",
  unlockedAtPoints: 100,

  kosakata: [
    { arab: "عِنَبٌ", latin: "'Inab", arti: "Anggur", artiEn: "Grape", contohAyat: "Anggur adalah salah satu buah kesukaan Nabi." },
    { arab: "بُسْتَانٌ", latin: "Bustaan", arti: "Kebun", artiEn: "Garden", contohAyat: "Pohon anggur ditanam di dalam bustaan yang indah." },
    { arab: "عَصِيْرٌ", latin: "'Asiyr", arti: "Jus / Perasan", artiEn: "Juice", contohAyat: "Buah anggur lezat dibuat menjadi 'asiyr." },
    { arab: "مَاءٌ", latin: "Maa'", arti: "Air", artiEn: "Water", contohAyat: "Buah anggur sangat segar karena mengandung banyak air." }
  ],

  balita: {
    text: {
      id: "Lihat, ini anggur! Bentuknya bulat-bulat kecil berkelompok, seperti balon mini. Rasanya ada yang manis dan asam! 🍇",
      en: "Look, these are grapes! They are small round bunches, like mini balloons. Some are sweet and some are sour! 🍇"
    },
    audioTranscript: {
      id: "Nyam nyam! Ada buah warna ungu dan hijau bergerombol nih. Anggur! Kalau dimakan meletus di mulut rasanya segeer banget!",
      en: "Yum yum! There are purple and green fruits in bunches here. Grapes! When you eat them, they pop in your mouth and taste so fresh!"
    },
    quiz: {
      question: { id: "Bagaimana cara buah anggur tumbuh di pohon?", en: "How do grapes grow on a tree?" },
      options: [
        { text: { id: "Bergerombol banyak sekali 🍇", en: "In huge bunches 🍇" } },
        { text: { id: "Tumbuh satu per satu berjarak jauh", en: "Grow one by one far apart" } },
        { text: { id: "Tersembunyi di dalam tanah", en: "Hidden underground" } }
      ],
      answerIdx: 0
    }
  },

  anak: {
    text: {
      id: "Pohon anggur itu unik lho, batangnya menjalar atau merambat ke atas pagar! Anggur punya banyak warna: ada ungu, merah, hijau, sampai hitam.",
      en: "The grape vine is unique, its stem creeps or climbs up fences! Grapes have many colors: purple, red, green, and even black."
    },
    facts: [
      { id: "Anggur tidak tumbuh jadi pohon besar, melainkan merambat.", en: "Grapes don't grow into big trees, instead they creep as vines." },
      { id: "Satu gerombolan anggur bisa terdiri dari 15 hingga 300 buah anggur!", en: "One bunch of grapes can consist of 15 to 300 grapes!" },
      { id: "Kismis yang manis itu sebenarnya adalah anggur yang dikeringkan.", en: "Sweet raisins are actually dried grapes." },
      { id: "Lebih dari 70% buah anggur adalah air, makanya sangat menyegarkan.", en: "More than 70% of a grape is water, which is why it's so refreshing." },
      { id: "Biji anggur bisa diolah menjadi minyak yang sangat sehat.", en: "Grape seeds can be processed into very healthy oil." }
    ],
    quranVerse: {
      arabic: "يُنْۢبِتُ لَكُمْ بِهِ الزَّرْعَ وَالزَّيْتُوْنَ وَالنَّخِيْلَ وَالْاَعْنَابَ وَمِنْ كُلِّ الثَّمَرٰتِۗ",
      transliteration: "Yumbitu lakum bihiz-zar'a waz-zaitūna wan-nakhīla wal-a'nāba wa ming kulliṡ-ṡamarāt",
      translation: {
        id: "Dia menumbuhkan bagi kamu dengan air hujan itu tanam-tanaman; zaitun, korma, anggur dan segala macam buah-buahan...",
        en: "He causes to grow for you thereby the crops, olives, palm trees, grapevines, and from all the fruits..."
      },
      context: {
        id: "Tau nggak? Allah menciptakan hujan agar turun membasahi bumi, sehingga dari tanah kering bisa merambat pohon anggur yang segar dan penuh air. Hebat kan cara kerja alam ciptaan Allah!",
        en: "Did you know? Allah created rain to wet the earth, so from dry ground, fresh and watery grapevines can grow. Isn't the way Allah's creation works amazing!"
      }
    },
    quiz: {
      question: { id: "Apa nama buah anggur yang sudah dikeringkan?", en: "What do you call dried grapes?" },
      options: [
        { text: { id: "Kurma", en: "Dates" } },
        { text: { id: "Kismis", en: "Raisins" } },
        { text: { id: "Zaitun", en: "Olives" } },
        { text: { id: "Delima", en: "Pomegranate" } }
      ],
      answerIdx: 1
    }
  },

  explorer: {
    text: {
      id: "Anggur (Vitis vinifera) bukan pohon kayu biasa, melainkan tanaman liana (merambat). Mereka dilengkapi organ khusus bernama 'sulur' (tendrils)—struktur mirip benang spiral yang bisa melilit dahan atau pagar untuk mengangkat daun-daunnya mengejar sinar matahari.\n\nKeistimewaan luar biasa anggur ada di balik kulitnya. Kulit anggur (terutama anggur merah dan ungu) mengandung senyawa polifenol yang sangat langka bernama 'resveratrol'. Senyawa ini secara medis terbukti mengaktifkan enzim sirtuin dalam tubuh, yang dikenal sebagai 'protein penuaan'—berfungsi memperpanjang umur sel manusia dan melindungi dari peradangan saraf.\n\nDalam Al-Qur'an, anggur sering disebut berdampingan dengan surga (Jannah), yang secara bahasa bermakna kebun yang rimbun menutupi tanah, sangat cocok dengan sifat anggur yang daun rimbunnya mampu menutupi atap sebuah kebun dengan indahnya.",
      en: "The Grape (Vitis vinifera) is not a regular woody tree, but a liana (climbing vine). They are equipped with special organs called 'tendrils'—spiral thread-like structures that can wrap around branches or fences to lift their leaves in pursuit of sunlight.\n\nThe extraordinary feature of grapes lies behind their skin. Grape skins (especially red and purple grapes) contain a very rare polyphenol compound called 'resveratrol'. This compound is medically proven to activate sirtuin enzymes in the body, known as 'aging proteins'—functioning to extend human cell life and protect against neuroinflammation.\n\nIn the Qur'an, grapes are often mentioned alongside heaven (Jannah), which linguistically means a lush garden covering the ground, perfectly matching the nature of grapevines whose lush leaves can beautifully cover the roof of a garden."
    },
    anatomy: [
      { part: { id: "Sulur (Tendril)", en: "Tendril" }, desc: { id: "Modifikasi batang berbentuk spiral untuk melilit benda lain agar tanaman bisa memanjat.", en: "Modified spiral stem used to wrap around objects so the plant can climb." } },
      { part: { id: "Lapisan Epikutikuler (Bloom)", en: "Epicuticular Wax (Bloom)" }, desc: { id: "Lapisan bedak putih alami di kulit anggur yang melindunginya dari jamur dan air hujan berlebih.", en: "The natural white powdery layer on grape skin that protects it from fungi and excessive rain." } }
    ],
    wowFactor: {
      id: "Sains membuktikan bahwa anggur bisa beradaptasi dari tanah yang paling keras sekalipun, merambat naik mencari cahaya, lalu menyimpan air hujan dalam bentuk bola-bola manis berdaging yang penuh dengan agen anti-penuaan (resveratrol).\n\nAl-Qur'an mencatat lebih dari 10 kali penyebutan kata 'Inab (anggur). Hebatnya, Allah sering mengaitkan turunnya air hujan dari langit dengan tumbuhnya anggur (seperti dalam An-Nahl 11). Fakta sains menunjukkan, anggur sangat bergantung pada siklus air tanah yang jernih untuk memproduksi jus manis di dalam buahnya!",
      en: "Science proves that grapevines can adapt from even the hardest soil, climb up to seek light, and then store rainwater in the form of fleshy sweet spheres full of anti-aging agents (resveratrol).\n\nThe Qur'an records the mention of the word 'Inab (grape) more than 10 times. Amazingly, Allah frequently associates the falling of rain from the sky with the growth of grapes (like in An-Nahl 11). Scientific facts show that grapes heavily rely on clear groundwater cycles to produce the sweet juice inside their fruit!"
    },
    quranVerse: {
      arabic: "يُنْۢبِتُ لَكُمْ بِهِ الزَّرْعَ وَالزَّيْتُوْنَ وَالنَّخِيْلَ وَالْاَعْنَابَ وَمِنْ كُلِّ الثَّمَرٰتِۗ",
      transliteration: "Yumbitu lakum bihiz-zar'a waz-zaitūna wan-nakhīla wal-a'nāba wa ming kulliṡ-ṡamarāt",
      translation: {
        id: "Dia menumbuhkan bagi kamu dengan air hujan itu tanam-tanaman; zaitun, korma, anggur dan segala macam buah-buahan...",
        en: "He causes to grow for you thereby the crops, olives, palm trees, grapevines, and from all the fruits..."
      }
    },
    quiz: [
      {
        question: { id: "Apa nama struktur spiral pada anggur yang digunakan untuk merambat?", en: "What is the name of the spiral structure on grapevines used for climbing?" },
        options: [
          { text: { id: "Sulur (Tendril)", en: "Tendril" } },
          { text: { id: "Akar gantung", en: "Aerial root" } },
          { text: { id: "Duri", en: "Thorn" } },
          { text: { id: "Kelopak", en: "Petal" } }
        ],
        answerIdx: 0
      },
      {
        question: { id: "Apa nama senyawa luar biasa di kulit anggur merah yang bisa memperlambat penuaan sel?", en: "What is the name of the extraordinary compound in red grape skin that can slow down cell aging?" },
        options: [
          { text: { id: "Kalsium", en: "Calcium" } },
          { text: { id: "Resveratrol", en: "Resveratrol" } },
          { text: { id: "Gluten", en: "Gluten" } },
          { text: { id: "Protein", en: "Protein" } }
        ],
        answerIdx: 1
      },
      {
        question: { id: "Apa yang terlihat seperti bedak putih tipis di kulit buah anggur segar?", en: "What looks like a thin white powder on the skin of fresh grapes?" },
        options: [
          { text: { id: "Debu jalanan", en: "Street dust" } },
          { text: { id: "Lapisan lilin alami penolak air", en: "Natural water-repellent wax layer" } },
          { text: { id: "Pestisida jahat", en: "Bad pesticide" } },
          { text: { id: "Jamur beracun", en: "Poisonous mushroom" } }
        ],
        answerIdx: 1
      }
    ]
  }
};

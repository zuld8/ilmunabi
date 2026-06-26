import { ObjectData } from "../objects";

export const kulitData: ObjectData = {
  slug: "kulit",
  name: { id: "Kulit", en: "Skin" },
  icon: "🖐🏽",
  category: "tubuh",
  type: "tubuh",
  scientificName: "Cutis",
  surahName: "An-Nisa",
  surahReference: "4:56",
  unlockedAtPoints: 50,
  
  kosakata: [
    { arab: "جِلْدٌ", latin: "Jild", arti: "Kulit", artiEn: "Skin", contohAyat: "Kulit manusia sebagai pembungkus tubuh." },
    { arab: "لَمْسٌ", latin: "Lams", arti: "Sentuhan", artiEn: "Touch", contohAyat: "Kulit merasakan sentuhan." },
    { arab: "عَرَقٌ", latin: "Araq", arti: "Keringat", artiEn: "Sweat", contohAyat: "Keringat keluar dari kulit." },
    { arab: "شَعْرٌ", latin: "Sha'r", arti: "Rambut/Bulu", artiEn: "Hair", contohAyat: "Bulu halus tumbuh di kulit." }
  ],
  
  balita: {
    text: { id: "Coba cubit pipimu... lembut kan? Itu namanya kulit! 🖐🏽", en: "Try pinching your cheek... soft right? That's called skin! 🖐🏽" },
    audioTranscript: { id: "Kulit membungkus seluruh tubuhmu dari kepala sampai kaki! Kulit melindungi kita supaya tidak kedinginan. Allah hebat sekali ya!", en: "Skin wraps your whole body from head to toe! Skin protects us from getting cold. Allah is so great!" },
    quiz: {
      question: { id: "Bagian tubuh mana yang membungkus kita seluruhnya?", en: "Which body part wraps us completely?" },
      options: [
        { text: { id: "🖐🏽 Kulit", en: "🖐🏽 Skin" } },
        { text: { id: "🦷 Gigi", en: "🦷 Teeth" } },
        { text: { id: "🦴 Tulang", en: "🦴 Bone" } }
      ],
      answerIdx: 0
    }
  },
  
  anak: {
    text: { id: "Kulit adalah organ tubuhmu yang paling besar lho! Beratnya bisa mencapai 4 kilogram!", en: "Skin is the largest organ of your body! It can weigh up to 4 kilograms!" },
    facts: [
      { id: "Kulit kita terus memperbarui dirinya. Setiap bulan kamu punya lapisan kulit baru!", en: "Our skin constantly renews itself. Every month you have a new layer of skin!" },
      { id: "Debu di rumahmu sebagian besar adalah sel-sel kulit mati kita sendiri.", en: "The dust in your house is mostly our own dead skin cells." },
      { id: "Kulit bisa mengatur suhu tubuh dengan mengeluarkan keringat saat kepanasan.", en: "The skin can regulate body temperature by sweating when it's hot." },
      { id: "Di ujung jari, kulit punya banyak sekali saraf sehingga sangat peka.", en: "At the fingertips, the skin has lots of nerves so it's very sensitive." },
      { id: "Warna kulit kita berasal dari sesuatu yang bernama melanin.", en: "Our skin color comes from something called melanin." }
    ],
    quranVerse: {
      arabic: "كُلَّمَا نَضِجَتْ جُلُودُهُم بَدَّلْنَاهُمْ جُلُودًا غَيْرَهَا لِيَذُوقُوا الْعَذَابَ",
      transliteration: "Kullama nadijat juluduhum baddalnahum juludan ghayraha liyazuqul-'azab",
      translation: { id: "Setiap kali kulit mereka hangus, Kami ganti dengan kulit yang lain, agar mereka merasakan azab.", en: "Every time their skins are roasted through We will replace them with other skins so they may taste the punishment." },
      context: { id: "Tau nggak? Al-Qur'an memberitahu kita bahwa rasa sakit itu asalnya dari kulit. Sains kedokteran modern membuktikan bahwa reseptor perasa sakit memang letaknya di lapisan kulit!", en: "Did you know? The Qur'an tells us that pain comes from the skin. Modern medical science proves that pain receptors are indeed located in the skin layer!" }
    },
    quiz: {
      question: { id: "Apa organ terbesar di tubuh kita?", en: "What is the largest organ in our body?" },
      options: [
        { text: { id: "Jantung", en: "Heart" } },
        { text: { id: "Otak", en: "Brain" } },
        { text: { id: "Kulit", en: "Skin" } },
        { text: { id: "Hati", en: "Liver" } }
      ],
      answerIdx: 2
    }
  },
  
  explorer: {
    text: { id: "Kulit bukan sekadar pembungkus tubuh, ia adalah tameng pertahanan utama kita!\n\nKulit mencegah bakteri berbahaya masuk ke aliran darah, sekaligus menahan air di dalam tubuh agar kita tidak mengering seperti kismis.\n\nKulit terdiri dari 3 lapisan: Epidermis (luar), Dermis (tengah), dan Hipodermis (bawah yang berlemak).", en: "Skin is not just a body wrapper, it is our main defense shield!\n\nSkin prevents harmful bacteria from entering the bloodstream, while holding water inside the body so we don't dry up like a raisin.\n\nSkin consists of 3 layers: Epidermis (outer), Dermis (middle), and Hypodermis (bottom, fatty layer)." },
    anatomy: [
      { part: { id: "Epidermis", en: "Epidermis" }, desc: { id: "Lapisan paling luar yang menghasilkan sel-sel baru.", en: "The outermost layer that produces new cells." } },
      { part: { id: "Kelenjar Keringat", en: "Sweat Gland" }, desc: { id: "Pabrik kecil di kulit yang mengeluarkan air untuk mendinginkan tubuh.", en: "Little factories in the skin that release water to cool the body." } }
    ],
    wowFactor: { id: "Tahukah kamu penemuan medis yang mengejutkan tentang luka bakar?\n\nJika luka bakar sangat dalam hingga merusak kulit secara total, pasien justru tidak merasakan sakit karena saraf perasa sakitnya (reseptor nyeri) ikut hancur.\n\nAl-Qur'an 1400 tahun lalu menyatakan bahwa ahli neraka akan diganti kulitnya terus-menerus agar terus merasakan sakit. Ini membuktikan bahwa sumber rasa sakit memang ada pada kulit!", en: "Do you know the shocking medical discovery about burns?\n\nIf a burn is very deep and completely destroys the skin, the patient actually feels no pain because the pain receptors are destroyed along with it.\n\nThe Qur'an stated 1400 years ago that the people of hell will have their skin constantly replaced so they can continue to feel the pain. This proves that the source of pain is indeed in the skin!" },
    quranVerse: {
      arabic: "بَدَّلْنَاهُمْ جُلُودًا غَيْرَهَا لِيَذُوقُوا الْعَذَابَ",
      transliteration: "Baddalnahum juludan ghayraha liyazuqul-'azab",
      translation: { id: "Kami ganti dengan kulit yang lain, agar mereka merasakan azab.", en: "We will replace them with other skins so they may taste the punishment." }
    },
    quiz: [
      {
        question: { id: "Lapisan terluar dari kulit kita disebut...", en: "The outermost layer of our skin is called..." },
        options: [{ text: { id: "Dermis", en: "Dermis" } }, { text: { id: "Epidermis", en: "Epidermis" } }, { text: { id: "Hipodermis", en: "Hypodermis" } }, { text: { id: "Melanin", en: "Melanin" } }],
        answerIdx: 1
      },
      {
        question: { id: "Zat yang memberikan warna pada kulit kita adalah...", en: "The substance that gives color to our skin is..." },
        options: [{ text: { id: "Klorofil", en: "Chlorophyll" } }, { text: { id: "Hemoglobin", en: "Hemoglobin" } }, { text: { id: "Melanin", en: "Melanin" } }, { text: { id: "Karoten", en: "Carotene" } }],
        answerIdx: 2
      },
      {
        question: { id: "Apa bukti medis yang sesuai dengan Al-Qur'an Surah An-Nisa ayat 56?", en: "What medical evidence aligns with the Qur'an Surah An-Nisa verse 56?" },
        options: [{ text: { id: "Tulang manusia sangat keras", en: "Human bones are very hard" } }, { text: { id: "Jantung memompa darah ke kulit", en: "The heart pumps blood to the skin" } }, { text: { id: "Reseptor rasa sakit terletak di kulit", en: "Pain receptors are located in the skin" } }, { text: { id: "Kulit bisa berkeringat", en: "Skin can sweat" } }],
        answerIdx: 2
      }
    ]
  }
};

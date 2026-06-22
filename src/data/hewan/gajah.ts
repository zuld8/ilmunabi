import { ObjectData } from "../objects";

export const gajahData: ObjectData = {
  slug: "gajah",
  name: { id: "Gajah", en: "Elephant" },
  scientificName: "Elephantidae",
  surahName: "Al-Fil (1-5)",
  surahReference: "105:1-5",
  icon: "🐘",
  category: "Hewan Darat",
  type: "hewan",
  unlockedAtPoints: 250,
  kosakata: [
    {
      arab: "فِيلٌ",
      latin: "Fiil",
      arti: "Gajah",
      artiEn: "Elephant",
      contohAyat: "Al-Fil 105:1",
      icon: "🐘"
    },
    {
      arab: "أَصْحَابٌ",
      latin: "Ashhaab",
      arti: "Pasukan/Pemilik",
      artiEn: "Companions/Army",
      contohAyat: "Al-Fil 105:1",
      icon: "👥"
    },
    {
      arab: "كَيْدٌ",
      latin: "Kayd",
      arti: "Tipu daya",
      artiEn: "Strategy/Plot",
      contohAyat: "Al-Fil 105:2",
      icon: "🕸️"
    },
    {
      arab: "تَضْلِيلٌ",
      latin: "Tadhliil",
      arti: "Sia-sia",
      artiEn: "Stray/Misguided",
      contohAyat: "Al-Fil 105:2",
      icon: "❌"
    }
  ],
  balita: {
    text: {
      id: "Ini gajah! Gajah punya belalai panjang dan telinga lebar yang bergoyang-goyang. 🐘",
      en: "This is an elephant! Elephants have long trunks and big floppy ears. 🐘",
    },
    audioTranscript: {
      id: "Ini gajah! Gajah punya belalai panjang dan telinga lebar yang bergoyang-goyang.",
      en: "This is an elephant! Elephants have long trunks and big floppy ears.",
    },
    quiz: {
      question: {
        id: "Manakah ciri khas hidung gajah?",
        en: "What is the signature feature of an elephant's nose?",
      },
      options: [
        { text: { id: "👃 Belalai Panjang", en: "👃 Long Trunk" }, isImage: true },
        { text: { id: "🐦 Paruh", en: "🐦 Beak" }, isImage: true },
        { text: { id: "🦁 Taring", en: "🦁 Fangs" }, isImage: true },
      ],
      answerIdx: 0,
    },
  },
  anak: {
    text: {
      id: "Gajah adalah hewan darat terbesar yang terkenal cerdas dan penyayang keluarga.",
      en: "Elephants are the largest land animals, known for their high intelligence and strong family bonds.",
    },
    facts: [
      {
        id: "Belalai gajah sangat kuat, tersusun dari 40.000 otot untuk menggenggam makanan.",
        en: "An elephant's trunk is extremely strong, containing 40,000 muscles to grasp food.",
      },
      {
        id: "Gajah berkomunikasi menggunakan suara infrasonik frekuensi rendah yang merambat lewat tanah.",
        en: "Elephants communicate using low-frequency infrasound that travels through the ground.",
      },
      {
        id: "Mereka memiliki ingatan luar biasa, mampu mengingat sumber air selama puluhan tahun.",
        en: "They have exceptional memory, remembering waterhole locations for decades.",
      },
    ],
    quranVerse: {
      arabic: "أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِأَصْحَابِ الْفِيلِ",
      transliteration: "Alam tara kaifa fa'ala Rabbuka bi ashaabil feel",
      translation: {
        id: "Tidakkah engkau memperhatikan bagaimana Tuhanmu telah bertindak terhadap pasukan bergajah?",
        en: "Have you not seen how your Lord dealt with the companions of the elephant?",
      },
    },
    quiz: {
      question: {
        id: "Berapa banyak otot yang menyusun belalai gajah?",
        en: "How many muscles make up an elephant's trunk?",
      },
      options: [
        { text: { id: "40 otot", en: "40 muscles" } },
        { text: { id: "4.000 otot", en: "4,000 muscles" } },
        { text: { id: "40.000 otot", en: "40,000 muscles" } },
      ],
      answerIdx: 2,
    },
  },
  explorer: {
    text: {
      id: "Gajah memiliki otak besar dengan kapasitas memori emosional yang luar biasa.",
      en: "Elephants possess large brains capable of deep emotional memory.",
    },
    anatomy: [
      {
        part: { id: "Telinga Lebar", en: "Large Ears" },
        desc: { id: "Berfungsi menyebarkan panas tubuh untuk mendinginkan darah saat cuaca panas.", en: "Used to radiate body heat and cool down blood temperature." },
      },
      {
        part: { id: "Gading", en: "Tusks" },
        desc: { id: "Gigi seri memanjang untuk menggali tanah, mengupas kulit pohon, dan melindungi diri.", en: "Elongated incisor teeth used to dig, strip bark, and protect themselves." },
      },
    ],
    wowFactor: {
      id: "Pasukan Abrahah membawa gajah tempur besar ke Mekah untuk meruntuhkan Ka'bah. Uniknya, riwayat mencatat gajah Abrahah bernama Mahmud menolak maju ke arah Ka'bah dan malah bersimpuh (duduk), tunduk pada takdir Allah, meski dipukuli. Naluri alamiah hewan mengenali kekuasaan Penciptanya.",
      en: "Abrahah's army brought war elephants to destroy the Kaaba. Historical records state the lead elephant, Mahmud, knelt down and refused to march toward the Kaaba, resisting whips, submitting to Allah's decree. Animal instincts recognize the authority of their Creator.",
    },
    quranVerse: {
      arabic: "وَأَرْسَلَ عَلَيْهِمْ طَيْرًا أَبَابِيلَ تَرْمِيهِمْ بِحِجَارَةٍ مِنْ سِجِّيلٍ",
      transliteration: "Wa arsala 'alaihim tairan abaabeel. Tarmeehim bi hijaratim min sijjeel",
      translation: {
        id: "Dan Dia mengirimkan kepada mereka burung yang berbondong-bondong, yang melempari mereka dengan batu dari tanah liat yang dibakar.",
        en: "And He sent against them birds in flocks, striking them with stones of hard clay.",
      },
      context: {
        id: "Peristiwa runtuhnya pasukan gajah ini terjadi pada tahun kelahiran Nabi Muhammad SAW, menandai perlindungan Ilahi atas kota suci Mekah dari penyerbuan militer asing.",
        en: "The collapse of the elephant army occurred in the year of Prophet Muhammad's birth, signaling divine protection over the holy city of Mecca.",
      },
    },
    quiz: {
      question: {
        id: "Apa reaksi gajah utama Abrahah (Mahmud) ketika dihadapkan ke arah Ka'bah?",
        en: "What did Abrahah's lead elephant (Mahmud) do when directed toward the Kaaba?",
      },
      options: [
        { text: { id: "Menyerang Ka'bah dengan marah", en: "Attacked the Kaaba angrily" } },
        { text: { id: "Bersimpuh (duduk) menolak maju", en: "Dutifully knelt down and refused to move forward" } },
        { text: { id: "Berlari kencang kembali ke Yaman", en: "Ran back to Yemen" } },
      ],
      answerIdx: 1,
    },
  },
};

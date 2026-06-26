import { ObjectData } from "../objects";

export const airData: ObjectData = {
  slug: "air",
  name: { id: "Air", en: "Water" },
  icon: "💧",
  category: "alam",
  type: "alam",
  scientificName: "Aqua / H2O",
  surahName: "Al-Anbiya",
  surahReference: "21:30",
  unlockedAtPoints: 50,

  kosakata: [
    { arab: "مَاءٌ", latin: "Ma'un", arti: "Air", artiEn: "Water", contohAyat: "Wa ja'alnaa minal-maa'i kulla syai'in hayy (Dan Kami jadikan dari air segala sesuatu yang hidup)" },
    { arab: "حَيَاةٌ", latin: "Hayah", arti: "Kehidupan", artiEn: "Life", contohAyat: "Air adalah sumber kehidupan" },
    { arab: "نَهْرٌ", latin: "Nahrun", arti: "Sungai", artiEn: "River", contohAyat: "Tajrii min tahtihal-anhaar (Mengalir di bawahnya sungai-sungai)" },
    { arab: "شَرَابٌ", latin: "Syarab", arti: "Minuman", artiEn: "Drink", contohAyat: "Air suci yang enak diminum" }
  ],

  balita: {
    text: { id: "Gluk gluk gluk... Ah, segarnya minum air putih! Air bentuknya cair dan bening. Kita butuh air untuk minum dan mandi bersih. 💧", en: "Glug glug glug... Ah, drinking fresh water is refreshing! Water is liquid and clear. We need water to drink and take a clean bath. 💧" },
    audioTranscript: { id: "Haus ya? Yuk minum air putih! Bismillah... Gluk gluk. Alhamdulillah! Tubuh kita butuh air ciptaan Allah biar kita kuat dan tidak lemas. 💧", en: "Are you thirsty? Let's drink water! Bismillah... Glug glug. Alhamdulillah! Our bodies need Allah's water creation so we are strong and not weak. 💧" },
    quiz: {
      question: { id: "Air putih itu warnanya apa?", en: "What color is pure water?" },
      options: [
        { text: { id: "⬜ Bening (Tidak berwarna)", en: "⬜ Clear (Colorless)" } },
        { text: { id: "🟥 Merah", en: "🟥 Red" } },
        { text: { id: "🟩 Hijau tua", en: "🟩 Dark green" } }
      ],
      answerIdx: 0
    }
  },

  anak: {
    text: { id: "Air adalah benda ajaib yang selalu mengikuti bentuk wadahnya. Kalau dimasukkan ke gelas bentuknya seperti gelas, dimasukkan botol bentuknya botol!", en: "Water is a magical substance that always takes the shape of its container. If put in a glass it shapes like a glass, put in a bottle it shapes like a bottle!" },
    facts: [
      { id: "Tubuh manusia lebih dari setengahnya (sekitar 60%) terbuat dari air!", en: "More than half of the human body (about 60%) is made of water!" },
      { id: "Satu-satunya benda di alam yang bisa berbentuk cair (air), padat (es), dan gas (uap awan) secara alami.", en: "The only substance in nature that can exist as liquid (water), solid (ice), and gas (cloud vapor) naturally." },
      { id: "Es batu bisa mengapung di atas air karena es lebih ringan dari air cair.", en: "Ice cubes float on top of water because ice is lighter than liquid water." },
      { id: "Seekor unta bisa minum ratusan liter air sekaligus agar bisa bertahan lama di gurun pasir.", en: "A camel can drink hundreds of liters of water at once to survive a long time in the desert." },
      { id: "Kita harus berhemat air karena sebagian besar air di bumi adalah air asin (laut), hanya sedikit air tawar yang bisa diminum.", en: "We must save water because most of the water on earth is salty (sea), only a little fresh water is drinkable." }
    ],
    quranVerse: {
      arabic: "وَجَعَلْنَا مِنَ ٱلْمَآءِ كُلَّ شَىْءٍ حَىٍّ ۖ أَفَلَا يُؤْمِنُونَ",
      transliteration: "Wa ja'alnaa minal-maa'i kulla syai'in hayy, afalaa yu'minuun",
      translation: { id: "Dan dari air Kami jadikan segala sesuatu yang hidup. Maka mengapakah mereka tiada juga beriman?", en: "And We made from water every living thing. Then will they not believe?" },
      context: { id: "Tau nggak? Pohon butuh air untuk tumbuh. Hewan butuh air untuk minum. Ikan butuh air untuk berenang. Benar kata Allah, tanpa air, semua makhluk di Bumi ini akan mati kekeringan!", en: "Did you know? Trees need water to grow. Animals need water to drink. Fish need water to swim. Allah is right, without water, all creatures on Earth would die of thirst!" }
    },
    quiz: {
      question: { id: "Air bisa berubah wujud menjadi benda padat yang dingin, disebut apa?", en: "Water can change into a cold solid object, what is it called?" },
      options: [
        { text: { id: "Es (Ice)", en: "Es (Ice)" } },
        { text: { id: "Batu (Stone)", en: "Batu (Stone)" } },
        { text: { id: "Awan (Cloud)", en: "Awan (Cloud)" } },
        { text: { id: "Gelas (Glass)", en: "Gelas (Glass)" } }
      ],
      answerIdx: 0
    }
  },

  explorer: {
    text: { id: "Secara kimiawi, molekul air disebut H2O, yang berarti tersusun dari dua atom Hidrogen dan satu atom Oksigen. Molekul-molekul kecil ini saling berpegangan dengan kuat (ikatan hidrogen), membuat air memiliki tegangan permukaan. Karena itulah serangga seperti anggang-anggang bisa berjalan di atas air tanpa tenggelam!\n\nAir memiliki sebuah anomali (sifat aneh) yang menyelamatkan dunia! Kebanyakan benda akan menyusut dan tenggelam bila membeku jadi padat. Tapi saat air membeku menjadi es, volumenya membesar dan massanya lebih ringan, sehingga es mengapung di atas lautan kutub. Jika es tenggelam, maka dasar laut akan membeku dan menghancurkan seluruh ekosistem Bumi!\n\nSetiap sel dalam makhluk hidup bagaikan balon mikroskopis yang diisi oleh cairan (sitoplasma) yang sebagian besarnya adalah air. Air menjadi pelarut universal (bisa melarutkan banyak zat), membawa nutrisi dan membuang racun ke seluruh tubuh melalui aliran darah.", en: "Chemically, the water molecule is called H2O, meaning it consists of two Hydrogen atoms and one Oxygen atom. These tiny molecules hold onto each other tightly (hydrogen bonds), giving water surface tension. That's why insects like water striders can walk on water without sinking!\n\nWater has an anomaly (strange property) that saves the world! Most substances shrink and sink when freezing solid. But when water freezes into ice, its volume expands and its mass is lighter, so ice floats on polar oceans. If ice sank, the ocean floor would freeze and destroy the entire Earth's ecosystem!\n\nEvery cell in living things is like a microscopic balloon filled with liquid (cytoplasm) that is mostly water. Water acts as a universal solvent (can dissolve many substances), carrying nutrients and removing toxins throughout the body via the bloodstream." },
    anatomy: [
      { part: { id: "Molekul H2O", en: "H2O Molecule" }, desc: { id: "Satu atom Oksigen besar mengikat dua atom Hidrogen kecil mirip telinga Mickey Mouse.", en: "One large Oxygen atom binding two small Hydrogen atoms looking like Mickey Mouse ears." } },
      { part: { id: "Ikatan Hidrogen", en: "Hydrogen Bond" }, desc: { id: "Daya tarik magnetis yang membuat molekul air saling menempel kuat.", en: "The magnetic pull making water molecules stick strongly together." } }
    ],
    wowFactor: { id: "Sains biologi seluler menemukan bahwa protoplasma (materi dasar dalam semua sel makhluk hidup tumbuhan dan hewan) terdiri dari 80% air. Mustahil kehidupan bisa tercipta tanpa cairan pelarut super ini.\n\nFakta mutlak bahwa kehidupan bermula dan bergantung sepenuhnya pada air baru bisa dibuktikan dengan mikroskop di zaman modern. Namun Al-Qur'an secara lugas menantang manusia untuk memikirkannya dalam Surah Al-Anbiya ayat 30 sejak 1400 tahun lalu: 'Dan dari air Kami jadikan SEGALA SESUATU YANG HIDUP. Maka mengapakah mereka tiada juga beriman?' Ayat ini adalah pondasi utama Biologi modern!", en: "Cellular biology science discovered that protoplasm (the basic material in all living plant and animal cells) consists of 80% water. It is impossible for life to be created without this super solvent liquid.\n\nThe absolute fact that life originates and depends entirely on water could only be proven with microscopes in modern times. However, the Qur'an straightforwardly challenges humans to think about it in Surah Al-Anbiya verse 30 since 1400 years ago: 'And We made from water EVERY LIVING THING. Then will they not believe?' This verse is the main foundation of modern Biology!" },
    quranVerse: {
      arabic: "وَجَعَلْنَا مِنَ ٱلْمَآءِ كُلَّ شَىْءٍ حَىٍّ",
      transliteration: "Wa ja'alnaa minal-maa'i kulla syai'in hayy",
      translation: { id: "Dan Kami jadikan dari air segala sesuatu yang hidup.", en: "And We made from water every living thing." }
    },
    quiz: [
      {
        question: { id: "Apa rahasia sifat air (anomali) saat membeku menjadi es yang bisa menyelamatkan ekosistem laut Bumi?", en: "What is the secret property of water (anomaly) when freezing into ice that saves Earth's ocean ecosystem?" },
        options: [{ text: { id: "Es mengapung di atas air, tidak tenggelam ke dasar", en: "Ice floats on water, does not sink to the bottom" } }, { text: { id: "Es berubah menjadi gas beracun", en: "Ice turns into toxic gas" } }, { text: { id: "Es membakar benda di sekitarnya", en: "Ice burns objects around it" } }, { text: { id: "Es menenggelamkan ikan-ikan", en: "Ice drowns the fishes" } }],
        answerIdx: 0
      },
      {
        question: { id: "Berapa banyak jumlah atom penyusun rumus kimia air (H2O)?", en: "How many atoms make up the chemical formula of water (H2O)?" },
        options: [{ text: { id: "2 Hidrogen dan 1 Oksigen", en: "2 Hydrogen and 1 Oxygen" } }, { text: { id: "1 Hidrogen dan 2 Oksigen", en: "1 Hydrogen and 2 Oxygen" } }, { text: { id: "2 Helium dan 2 Oksigen", en: "2 Helium and 2 Oxygen" } }, { text: { id: "1 Besi dan 1 Oksigen", en: "1 Iron and 1 Oxygen" } }],
        answerIdx: 0
      },
      {
        question: { id: "Apa fungsi utama air di dalam aliran darah tubuh kita?", en: "What is the main function of water in our body's bloodstream?" },
        options: [{ text: { id: "Membawa nutrisi makanan dan membuang racun", en: "Carrying food nutrients and removing toxins" } }, { text: { id: "Membuat darah menjadi beku dan keras", en: "Making blood freeze and hard" } }, { text: { id: "Menghasilkan tulang yang kuat", en: "Producing strong bones" } }, { text: { id: "Mengeluarkan api dari mulut", en: "Breathing fire from the mouth" } }],
        answerIdx: 0
      }
    ]
  }
};

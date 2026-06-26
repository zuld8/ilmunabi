import { ObjectData } from "../objects";

export const gandumData: ObjectData = {
  slug: "gandum",
  name: { id: "Gandum", en: "Wheat" },
  icon: "🌾",
  category: "tumbuhan",
  type: "tumbuhan",
  scientificName: "Triticum aestivum",
  surahName: "Al-Baqarah",
  surahReference: "2:261",
  unlockedAtPoints: 100,

  kosakata: [
    { arab: "سُنْبُلَةٌ", latin: "Sunbulah", arti: "Bulir / Tangkai", artiEn: "Ear of Grain", contohAyat: "Satu benih menumbuhkan tujuh sunbulah." },
    { arab: "حَبَّةٌ", latin: "Habbah", arti: "Biji", artiEn: "Seed/Grain", contohAyat: "Satu habbah bisa menghasilkan ratusan panen." },
    { arab: "مُضَاعَفٌ", latin: "Mudha'af", arti: "Berlipat Ganda", artiEn: "Multiplied", contohAyat: "Pahala orang yang bersedekah akan mudha'af seperti benih gandum." },
    { arab: "زَرْعٌ", latin: "Zar'", arti: "Tanam-tanaman", artiEn: "Crops", contohAyat: "Gandum adalah zar' yang menjadi makanan pokok manusia." }
  ],

  balita: {
    text: {
      id: "Ini Gandum! Tumbuhnya mirip rumput emas. Dari biji gandum kecil ini, kita bisa membuat tepung untuk memanggang roti dan kue! 🌾",
      en: "This is Wheat! It grows like golden grass. From these tiny wheat seeds, we can make flour to bake bread and cakes! 🌾"
    },
    audioTranscript: {
      id: "Pernah makan roti atau biskuit? Nah, roti itu asalnya dari tanaman kecil yang ditiup angin ini, namanya Gandum! Biji gandum digiling jadi tepung halus putih.",
      en: "Have you ever eaten bread or biscuits? Well, bread comes from this small plant blowing in the wind, called Wheat! Wheat seeds are ground into fine white flour."
    },
    quiz: {
      question: { id: "Biji gandum digiling atau dihaluskan untuk diubah menjadi apa?", en: "What are wheat seeds ground or crushed to become?" },
      options: [
        { text: { id: "Tepung untuk roti 🍞", en: "Flour for bread 🍞" } },
        { text: { id: "Pasir untuk mainan 🏖️", en: "Sand for toys 🏖️" } },
        { text: { id: "Kapas untuk bantal ☁️", en: "Cotton for pillows ☁️" } }
      ],
      answerIdx: 0
    }
  },

  anak: {
    text: {
      id: "Gandum adalah makanan utama manusia di seluruh bumi! Satu butir biji gandum yang ditanam bisa tumbuh berlipat-lipat ganda menjadi ladang makanan.",
      en: "Wheat is the main human food across the whole earth! A single wheat grain planted can grow multiplied into a field of food."
    },
    facts: [
      { id: "Gandum secara ilmu tumbuhan masih saudara satu keluarga dengan rumput liar.", en: "Botanically, wheat is a relative in the same family as wild grass." },
      { id: "Satu biji gandum yang ditanam di tanah bisa menumbuhkan banyak batang baru.", en: "One wheat seed planted in the ground can grow many new stems." },
      { id: "Mie, makaroni, donat, dan roti, semuanya terbuat dari olahan biji gandum.", en: "Noodles, macaroni, donuts, and bread are all made from processed wheat seeds." },
      { id: "Angin sangat membantu gandum karena angin meniup serbuk sarinya untuk berbuah.", en: "Wind is very helpful for wheat because wind blows its pollen to bear fruit." },
      { id: "Nabi Yusuf menyuruh raja Mesir menyimpan gandum di dalam tangkainya agar tidak mudah busuk selama 7 tahun kelaparan.", en: "Prophet Yusuf told the king of Egypt to store wheat inside its ears so it wouldn't easily rot during 7 years of famine." }
    ],
    quranVerse: {
      arabic: "مَثَلُ الَّذِيْنَ يُنْفِقُوْنَ اَمْوَالَهُمْ فِيْ سَبِيْلِ اللّٰهِ كَمَثَلِ حَبَّةٍ اَنْۢبَتَتْ سَبْعَ سَنَابِلَ فِيْ كُلِّ سُنْبُلَةٍ مِّائَةُ حَبَّةٍ ۗ",
      transliteration: "Maṡalullażīna yunfiqūna amwālahum fī sabīlillāhi kamaṡali ḥabbatin ambatat sab'a sanābila fī kulli sumbulatim mi'atu ḥabbah",
      translation: {
        id: "Perumpamaan orang yang menginfakkan hartanya di jalan Allah seperti sebutir biji yang menumbuhkan tujuh tangkai, pada setiap tangkai ada seratus biji.",
        en: "The example of those who spend their wealth in the way of Allah is like a seed [of grain] which grows seven spikes; in each spike is a hundred grains."
      },
      context: {
        id: "Tau nggak? Kalau kita sedekah Rp 1.000 saja, Allah melipatgandakan pahalanya menjadi seperti pertumbuhan gandum. Dari 1 sedekah, diubah jadi 7 cabang, tiap cabang berisi 100 pahala! (Total 700x lipat) Masya Allah!",
        en: "Did you know? If we give just 1 charity, Allah multiplies the reward like the growth of wheat. From 1 charity, it turns into 7 branches, each branch containing 100 rewards! (Total 700x fold) Masha Allah!"
      }
    },
    quiz: {
      question: { id: "Menurut Al-Qur'an, sebutir benih bisa menumbuhkan berapa tangkai/bulir (cabang)?", en: "According to the Qur'an, how many spikes (branches) can one seed grow?" },
      options: [
        { text: { id: "1 Tangkai", en: "1 Spike" } },
        { text: { id: "7 Tangkai", en: "7 Spikes" } },
        { text: { id: "10 Tangkai", en: "10 Spikes" } },
        { text: { id: "50 Tangkai", en: "50 Spikes" } }
      ],
      answerIdx: 1
    }
  },

  explorer: {
    text: {
      id: "Gandum (Triticum) adalah bukti kecerdasan rekayasa genetika alami. Meskipun secara biologis ia hanyalah sejenis rumput (Poaceae), bagian kepalanya atau 'Spike' menampung puluhan bulir biji padat nutrisi. Biji ini (kernel) terdiri dari 3 bagian: Bran (kulit luar serat tinggi), Germ (embrio benih kaya vitamin), dan Endosperma (cadangan pati/karbohidrat murni pengenyang perut).\n\nTepung putih biasa hanya mengambil Endosperma-nya saja, sementara gandum utuh (Whole wheat) menggiling ketiganya, memberikan asupan serat dan energi yang sempurna bagi metabolisme manusia.\n\nKeajaiban fisiologi gandum disebut 'Tillering' (bertunas). Satu biji gandum yang ditanam tidak hanya tumbuh lurus ke atas menjadi satu tangkai. Ia akan membelah di bawah tanah dan mengirimkan tunas-tunas anakan. Dari satu benih tunggal, bisa muncul rumpun berisi 5 hingga 10 tangkai batang (Spike) menembus permukaan bumi, melipatgandakan panen secara eksponensial!",
      en: "Wheat (Triticum) is proof of natural genetic engineering brilliance. Although biologically it is merely a type of grass (Poaceae), its head or 'Spike' holds dozens of nutrient-dense grains. This seed (kernel) consists of 3 parts: Bran (high-fiber outer skin), Germ (vitamin-rich seed embryo), and Endosperm (pure starch/carbohydrate reserve that fills the stomach).\n\nRegular white flour only extracts the Endosperm, while whole wheat grinds all three, providing perfect fiber and energy intake for human metabolism.\n\nThe physiological miracle of wheat is called 'Tillering'. One planted wheat seed doesn't just grow straight up into a single stalk. It will split underground and send up daughter shoots. From a single seed, a clump containing 5 to 10 stalks (Spikes) can pierce the earth's surface, exponentially multiplying the harvest!"
    },
    anatomy: [
      { part: { id: "Awn (Janggut Gandum)", en: "Awn (Wheat Beard)" }, desc: { id: "Bulu-bulu kaku seperti jarum di ujung bulir untuk mencegah burung pemakan biji mematuknya.", en: "Stiff needle-like hairs at the end of the grain to prevent seed-eating birds from pecking it." } },
      { part: { id: "Endosperma Biji", en: "Seed Endosperm" }, desc: { id: "Baterai makanan internal bagi biji. Ini adalah bagian yang digiling manusia menjadi tepung karbohidrat.", en: "The internal food battery for the seed. This is the part humans grind into carbohydrate flour." } }
    ],
    wowFactor: {
      id: "Sains Biologi modern membenarkan konsep 'Tillering' pada tanaman biji-bijian. Satu bibit unggul gandum yang mendapat air dan nutrisi cukup benar-benar bisa menumbuhkan banyak anakan batang (rata-rata 5-7 tangkai) dari satu akar yang sama!\n\nLebih dari 1400 tahun lalu, Al-Baqarah 261 menjadikan biologi gandum ini (1 biji menumbuhkan 7 tangkai, setiap tangkai berisi 100 biji) sebagai rumus matematika luar biasa dari Allah tentang investasi sedekah. Fakta bahwa gandum bereproduksi dengan cara eksponensial (berkembang biak dengan percabangan masif) digunakan dengan presisi absolut dalam deskripsi Tuhan untuk menggambarkan luasnya rahmat-Nya!",
      en: "Modern Biological Science validates the concept of 'Tillering' in grain plants. One superior wheat seedling getting enough water and nutrients can literally grow many daughter stems (averaging 5-7 stalks) from the exact same root!\n\nOver 1400 years ago, Al-Baqarah 261 used this wheat biology (1 seed growing 7 spikes, each spike containing 100 seeds) as Allah's extraordinary mathematical formula on the investment of charity. The fact that wheat reproduces exponentially (multiplying via massive branching) was used with absolute precision in God's description to illustrate the vastness of His mercy!"
    },
    quranVerse: {
      arabic: "مَثَلُ الَّذِيْنَ يُنْفِقُوْنَ اَمْوَالَهُمْ فِيْ سَبِيْلِ اللّٰهِ كَمَثَلِ حَبَّةٍ اَنْۢبَتَتْ سَبْعَ سَنَابِلَ فِيْ كُلِّ سُنْبُلَةٍ مِّائَةُ حَبَّةٍ ۗ",
      transliteration: "Maṡalullażīna yunfiqūna amwālahum fī sabīlillāhi kamaṡali ḥabbatin ambatat sab'a sanābila fī kulli sumbulatim mi'atu ḥabbah",
      translation: {
        id: "Perumpamaan orang yang menginfakkan hartanya di jalan Allah seperti sebutir biji yang menumbuhkan tujuh tangkai, pada setiap tangkai ada seratus biji.",
        en: "The example of those who spend their wealth in the way of Allah is like a seed [of grain] which grows seven spikes; in each spike is a hundred grains."
      }
    },
    quiz: [
      {
        question: { id: "Secara ilmiah, gandum berasal dari keluarga tumbuhan apa?", en: "Scientifically, wheat comes from what plant family?" },
        options: [
          { text: { id: "Keluarga Beri-berian", en: "Berry family" } },
          { text: { id: "Keluarga Rumput (Poaceae)", en: "Grass family (Poaceae)" } },
          { text: { id: "Keluarga Palem", en: "Palm family" } },
          { text: { id: "Keluarga Kaktus", en: "Cactus family" } }
        ],
        answerIdx: 1
      },
      {
        question: { id: "Kemampuan satu biji gandum menumbuhkan banyak batang dari bawah tanah disebut dengan...", en: "The ability of one wheat seed to grow many stems from underground is called..." },
        options: [
          { text: { id: "Tillering (Bertunas)", en: "Tillering" } },
          { text: { id: "Fotosintesis", en: "Photosynthesis" } },
          { text: { id: "Gugur daun", en: "Leaf shedding" } },
          { text: { id: "Hibernasi", en: "Hibernation" } }
        ],
        answerIdx: 0
      },
      {
        question: { id: "Sifat botani luar biasa gandum ini diumpamakan dalam Al-Qur'an untuk menggambarkan pahala bagi orang yang melakukan apa?", en: "This extraordinary botanical trait of wheat is used as a parable in the Qur'an to describe the reward for someone who does what?" },
        options: [
          { text: { id: "Orang yang puasa setiap hari", en: "Someone who fasts everyday" } },
          { text: { id: "Orang yang bersedekah di jalan Allah", en: "Someone who gives charity in the way of Allah" } },
          { text: { id: "Orang yang tidur siang", en: "Someone who takes naps" } },
          { text: { id: "Orang yang menebang pohon", en: "Someone who cuts down trees" } }
        ],
        answerIdx: 1
      }
    ]
  }
};

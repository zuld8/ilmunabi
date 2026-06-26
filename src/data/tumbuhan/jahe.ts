import { ObjectData } from "../objects";

export const jaheData: ObjectData = {
  slug: "jahe",
  name: { id: "Jahe", en: "Ginger" },
  icon: "🫚",
  category: "tumbuhan",
  type: "tumbuhan",
  scientificName: "Zingiber officinale",
  surahName: "Al-Insan",
  surahReference: "76:17",
  unlockedAtPoints: 100,

  kosakata: [
    { arab: "زَنْجَبِيْلٌ", latin: "Zanjabiyl", arti: "Jahe", artiEn: "Ginger", contohAyat: "Di surga ada minuman campuran jahe (Zanjabiyl)." },
    { arab: "مِزَاجٌ", latin: "Mizaaj", arti: "Campuran", artiEn: "Mixture", contohAyat: "Jahe digunakan sebagai mizaaj minuman yang hangat." },
    { arab: "كَأْسٌ", latin: "Ka's", arti: "Gelas / Piala", artiEn: "Cup / Goblet", contohAyat: "Minuman jahe disajikan di dalam ka's." },
    { arab: "دَافِئٌ", latin: "Daafi'", arti: "Hangat", artiEn: "Warm", contohAyat: "Rasa jahe membuat tenggorokan menjadi daafi'." }
  ],

  balita: {
    text: {
      id: "Ini jahe! Bentuknya lucu seperti jari-jari gendut. Kalau diminum, wushhh, perut kita langsung terasa hangat! 🫚",
      en: "This is ginger! It looks funny like chubby fingers. If you drink it, whoosh, our tummy immediately feels warm! 🫚"
    },
    audioTranscript: {
      id: "Hihi, bentuknya aneh ya? Namanya Jahe! Jahe itu rasanya sedikit pedas, tapi pedasnya enak, bikin perut hangat dan usir masuk angin!",
      en: "Hehe, it looks weird right? Its name is Ginger! Ginger tastes a little spicy, but a good spicy, makes the tummy warm and chases colds away!"
    },
    quiz: {
      question: { id: "Bagaimana rasanya kalau kita minum air jahe?", en: "How does it feel when we drink ginger water?" },
      options: [
        { text: { id: "Sangat dingin 🧊", en: "Very cold 🧊" } },
        { text: { id: "Hangat di perut ☕", en: "Warm in the tummy ☕" } },
        { text: { id: "Bikin gigi sakit 🦷", en: "Makes teeth ache 🦷" } }
      ],
      answerIdx: 1
    }
  },

  anak: {
    text: {
      id: "Jahe adalah rempah ajaib yang sembunyi di dalam tanah! Rasanya pedas hangat dan sangat ampuh menyembuhkan batuk atau masuk angin.",
      en: "Ginger is a magic spice hiding underground! It tastes spicy-warm and is very effective at curing coughs or colds."
    },
    facts: [
      { id: "Bagian jahe yang kita pakai masak dan minum sebenarnya adalah batang bawah tanah (Rimpang).", en: "The part of ginger we use to cook and drink is actually an underground stem (Rhizome)." },
      { id: "Aroma jahe bisa menghilangkan mual atau pusing saat naik mobil.", en: "Ginger's aroma can remove nausea or dizziness during car rides." },
      { id: "Jahe bisa menenangkan tenggorokan yang sakit dan gatal.", en: "Ginger can soothe a sore and itchy throat." },
      { id: "Di cuaca dingin, orang suka meminum jahe agar badannya tidak kedinginan.", en: "In cold weather, people love drinking ginger to keep their bodies from getting cold." },
      { id: "Jahe adalah salah satu minuman spesial yang disiapkan di Surga lho!", en: "Ginger is one of the special drinks prepared in Heaven, you know!" }
    ],
    quranVerse: {
      arabic: "وَيُسْقَوْنَ فِيْهَا كَأْسًا كَانَ مِزَاجُهَا زَنْجَبِيْلًاۚ",
      transliteration: "Wa yusqauna fīhā ka'sang kāna mizājuhā zanjabīlā",
      translation: {
        id: "Di sana mereka diberi minum dari segelas piala yang campurannya adalah jahe.",
        en: "And they will be given to drink there a cup [of wine] whose mixture is of ginger."
      },
      context: {
        id: "Tau nggak? Penghuni surga akan dijamu minuman super lezat dari mata air surga. Dan tahukah kamu rasanya dicampur dengan apa? Jahe! Allah menyebut Zanjabil (jahe) sebagai campuran minuman surga yang hangat dan menyegarkan.",
        en: "Did you know? The people of paradise will be treated to a super delicious drink from a heavenly spring. And do you know what it is mixed with? Ginger! Allah calls Zanjabil (ginger) a mixture of the heavenly drink that is warm and refreshing."
      }
    },
    quiz: {
      question: { id: "Bagian manakah dari tumbuhan jahe yang kita makan atau jadikan minuman?", en: "Which part of the ginger plant do we eat or make into a drink?" },
      options: [
        { text: { id: "Daunnya", en: "Its leaves" } },
        { text: { id: "Rimpang (batang bawah tanah)", en: "Rhizome (underground stem)" } },
        { text: { id: "Bunganya", en: "Its flower" } },
        { text: { id: "Buah gantungnya", en: "Its hanging fruit" } }
      ],
      answerIdx: 1
    }
  },

  explorer: {
    text: {
      id: "Jahe (Zingiber officinale) adalah keajaiban botani sejati. Sering disangka sebagai akar, bagian jahe yang gemuk ini sebenarnya adalah 'Rhizoma' atau rimpang—yaitu batang utama tanaman yang tumbuh menjalar di bawah tanah. Rimpang ini bertugas menyimpan nutrisi ekstra untuk tanaman agar bisa bertahan di masa sulit.\n\nSains biologi dan medis sangat memuja jahe karena kandungan zat aktif uniknya yang bernama 'Gingerol'. Gingerol adalah minyak atsiri senyawa fenolik yang memberikan rasa pedas khas pada jahe. Zat ini memiliki sifat anti-inflamasi (anti-radang) kuat. Ia bekerja melumpuhkan bakteri di pencernaan dan mengelabui saraf sensorik di otak sehingga efektif mencegah rasa mual (nausea)—lebih ampuh daripada beberapa obat mual buatan pabrik!\n\nSaat jahe dikeringkan atau dipanaskan, senyawa Gingerol akan berubah menjadi 'Shogaol', yang memberikan efek rasa hangat tajam yang sangat menyamankan tenggorokan manusia.",
      en: "Ginger (Zingiber officinale) is a true botanical marvel. Often mistaken for a root, this plump part of ginger is actually a 'Rhizome'—the main plant stem that grows horizontally underground. This rhizome is tasked with storing extra nutrients for the plant to survive during tough times.\n\nBiological and medical sciences highly praise ginger because of its unique active substance called 'Gingerol'. Gingerol is an essential oil phenolic compound that gives ginger its characteristic spicy taste. This substance has strong anti-inflammatory properties. It works by paralyzing digestive bacteria and tricking sensory nerves in the brain, making it highly effective at preventing nausea—even more potent than some factory-made nausea drugs!\n\nWhen ginger is dried or heated, the Gingerol compound transforms into 'Shogaol', which provides the sharp warming effect that is highly soothing to the human throat."
    },
    anatomy: [
      { part: { id: "Rimpang (Rhizoma)", en: "Rhizome" }, desc: { id: "Batang termodifikasi di bawah tanah yang bengkak penuh cadangan energi dan minyak atsiri.", en: "Modified underground stem that is swollen with energy reserves and essential oils." } },
      { part: { id: "Mata Tunas", en: "Bud Eye" }, desc: { id: "Titik kecil pada rimpang tempat bakal batang daun baru akan menembus tanah ke atas.", en: "Small points on the rhizome where new leaf shoots will pierce the ground upwards." } }
    ],
    wowFactor: {
      id: "Sains menemukan bahwa efek pemanasan (thermogenic) dari Gingerol sangat hebat untuk mempercepat pemulihan tubuh yang kelelahan dan kedinginan parah.\n\nLuar biasanya, di saat ilmu pengetahuan baru tahu detail kimiawinya, Al-Qur'an (Surah Al-Insan: 17) sudah menyebut Zanjabil (Jahe) sebagai campuran minuman abadi penduduk surga. Kenikmatan rasa hangat dan efek menenangkan dari minuman jahe adalah cicipan kecil dari nikmat surga yang Allah turunkan ke dunia!",
      en: "Science found that the thermogenic (warming) effect of Gingerol is fantastic for speeding up the recovery of an exhausted and severely cold body.\n\nAmazingly, while science only recently discovered its chemical details, the Qur'an (Surah Al-Insan: 17) already mentioned Zanjabil (Ginger) as the mixture for the eternal drink of the people of paradise. The enjoyment of the warming taste and soothing effect of ginger drink is a small taste of heaven's blessing that Allah brought down to earth!"
    },
    quranVerse: {
      arabic: "وَيُسْقَوْنَ فِيْهَا كَأْسًا كَانَ مِزَاجُهَا زَنْجَبِيْلًاۚ",
      transliteration: "Wa yusqauna fīhā ka'sang kāna mizājuhā zanjabīlā",
      translation: {
        id: "Di sana mereka diberi minum dari segelas piala yang campurannya adalah jahe.",
        en: "And they will be given to drink there a cup [of wine] whose mixture is of ginger."
      }
    },
    quiz: [
      {
        question: { id: "Apa nama senyawa kimia utama pada jahe yang memberikannya rasa pedas dan khasiat anti-mual?", en: "What is the main chemical compound in ginger that gives it a spicy taste and anti-nausea benefits?" },
        options: [
          { text: { id: "Klorofil", en: "Chlorophyll" } },
          { text: { id: "Gingerol", en: "Gingerol" } },
          { text: { id: "Kafein", en: "Caffeine" } },
          { text: { id: "Gula darah", en: "Blood sugar" } }
        ],
        answerIdx: 1
      },
      {
        question: { id: "Secara biologi botani, jahe termasuk bagian tumbuhan yang mana?", en: "In botanical biology, which plant part is ginger?" },
        options: [
          { text: { id: "Batang yang merayap di bawah tanah (Rimpang)", en: "Stem creeping underground (Rhizome)" } },
          { text: { id: "Akar tunggang", en: "Taproot" } },
          { text: { id: "Bunga", en: "Flower" } },
          { text: { id: "Kulit kayu", en: "Bark" } }
        ],
        answerIdx: 0
      },
      {
        question: { id: "Al-Qur'an menyebut jahe (Zanjabil) sebagai campuran apa?", en: "The Qur'an mentions ginger (Zanjabil) as a mixture for what?" },
        options: [
          { text: { id: "Campuran makanan burung", en: "A bird food mixture" } },
          { text: { id: "Campuran minuman penduduk surga", en: "A drink mixture for the people of heaven" } },
          { text: { id: "Campuran bahan bangunan", en: "A building material mixture" } },
          { text: { id: "Campuran minyak lampu", en: "A lamp oil mixture" } }
        ],
        answerIdx: 1
      }
    ]
  }
};

import { ObjectData } from "../objects";

export const kudaData: ObjectData = {
  slug: "kuda",
  name: { id: "Kuda", en: "Horse" },
  icon: "🐎", 
  category: "hewan",
  type: "hewan",
  scientificName: "Equus caballus",
  surahName: "Al-Adiyat",
  surahReference: "100:1", 
  unlockedAtPoints: 50, 
  
  kosakata: [
    { arab: "خَيْلٌ", latin: "Khayl", arti: "Kuda", artiEn: "Horse", contohAyat: "Allah menciptakan kuda sebagai perhiasan dan tunggangan" },
    { arab: "عَادِيَاتٌ", latin: "'Aadiyaat", arti: "Kuda perang yang berlari kencang", artiEn: "Galloping war horses", contohAyat: "Demi kuda perang yang berlari kencang" },
    { arab: "ضَبْحٌ", latin: "Dhabh", arti: "Suara napas terengah-engah", artiEn: "Panting sound", contohAyat: "Kuda yang berlari hingga terengah-engah" },
    { arab: "قَدْحٌ", latin: "Qadh", arti: "Percikan api", artiEn: "Sparks of fire", contohAyat: "Kaki kuda memercikkan api saat berlari" }
  ],
  
  balita: {
    text: { id: "Hihihiii... tuk tak tuk tak! Itu suara kaki kuda berlari! Kuda itu hewan yang kuat dan bisa lari kencang sekali. 🐎💨", en: "Neighhh... clippity clop! That's the sound of horse hooves! Horses are strong animals that can run very fast. 🐎💨" },
    audioTranscript: { id: "Dengar deh, tuk tak tuk tak! Kuda sedang berlari lari melompat. Kuda suka makan wortel dan apel, nyam nyam! Siapa yang mau naik kuda?", en: "Listen, clippity clop! The horse is running and jumping. Horses love eating carrots and apples, yum! Who wants to ride a horse?" },
    quiz: {
      question: { id: "Bagaimana suara derap langkah kaki kuda yang sedang berlari?", en: "What is the sound of a running horse's hooves?" },
      options: [
        { text: { id: "🐎 Tuk tak tuk tak", en: "🐎 Clippity clop" } },
        { text: { id: "🐈 Meong meong", en: "🐈 Meow meow" } },
        { text: { id: "🦆 Kwek kwek kwek", en: "🦆 Quack quack" } }
      ],
      answerIdx: 0
    }
  },
  
  anak: {
    text: { id: "Kuda adalah mobil balap versi alam! Hewan ini punya jantung super kuat untuk berlari sekencang angin.", en: "Horses are nature's race cars! This animal has a super strong heart to run as fast as the wind." },
    facts: [
      { id: "Kuda bisa tidur sambil berdiri lho! Mereka mengunci lutut kakinya agar tidak terjatuh.", en: "Horses can sleep standing up! They lock their leg knees so they don't fall over." },
      { id: "Mata kuda adalah mata terbesar dari semua hewan darat, mereka bisa melihat ke belakang tanpa menoleh.", en: "Horse eyes are the largest of any land mammal, they can see behind them without turning their head." },
      { id: "Kecepatan lari kuda bisa mencapai 70-88 kilometer per jam!", en: "A horse's running speed can reach 70-88 kilometers per hour!" },
      { id: "Kuda tidak bisa bernapas lewat mulut, mereka hanya bernapas melalui hidungnya.", en: "Horses cannot breathe through their mouths, they only breathe through their noses." },
      { id: "Anak kuda (foal) bisa langsung berdiri dan berlari hanya beberapa jam setelah dilahirkan.", en: "Baby horses (foals) can stand and run just a few hours after being born." }
    ],
    quranVerse: {
      arabic: "وَالْعَادِيَاتِ ضَبْحًا ۝ فَالْمُورِيَاتِ قَدْحًا",
      transliteration: "Wal-'aadiyaati dhabhaa. Fal-muuriyaati qadhaa.",
      translation: { id: "Demi kuda perang yang berlari kencang dengan terengah-engah. Dan kuda yang mencetuskan api dengan pukulan (kuku kakinya).", en: "By the racers, panting. And the producers of sparks [when] striking." },
      context: { id: "Tau nggak? Allah bersumpah demi kuda perang di Al-Qur'an! Saat kuda memacu lari sangat cepat di jalan berbatu, sepatu besi pelindung kakinya bergesekan dan memercikkan api. Sangat gagah berani!", en: "Did you know? Allah swears by war horses in the Qur'an! When horses gallop super fast on rocky roads, their iron horseshoes strike the rocks and produce sparks of fire. So brave and magnificent!" }
    },
    quiz: {
      question: { id: "Apa posisi unik saat seekor kuda sedang tertidur lelap?", en: "What is the unique position of a sleeping horse?" },
      options: [
        { text: { id: "Tidur sambil berdiri", en: "Sleeping while standing" } },
        { text: { id: "Tidur menggantung seperti kelelawar", en: "Sleeping hanging like a bat" } },
        { text: { id: "Tidur duduk bersila", en: "Sleeping sitting cross-legged" } },
        { text: { id: "Tidur melingkar", en: "Sleeping curled up in a circle" } }
      ],
      answerIdx: 0
    }
  },
  
  explorer: {
    text: { 
      id: "Sepanjang sejarah umat manusia, sebelum mesin uap ditemukan, kuda adalah tulang punggung peradaban, transportasi, dan kemiliteran. Otot dan struktur rangka kuda dirancang secara biomekanik murni untuk efisiensi kecepatan dan tenaga maju.\n\nKuda adalah mamalia herbivora pelari spesialis (cursorial). Untuk memaksimalkan oksigen saat memacu lari (galloping), irama pernapasan kuda akan sinkron dengan irama langkah kakinya. Satu lompatan langkah persis sama dengan satu tarikan napas masuk dan keluar. Itu sebabnya saat mereka sprint maksimal, suara napasnya terdengar keras dan berat, disebut 'Dhabh'.\n\nSelain itu, kaki kuda berevolusi menjadi satu jari raksasa (berupa kuku keras / hooves) untuk mengurangi beban gesekan tanah.", 
      en: "Throughout human history, before steam engines were invented, horses were the backbone of civilization, transport, and military. The muscles and skeletal structure of horses are biomechanically designed purely for forward speed and power efficiency.\n\nHorses are specialized cursorial (running) herbivorous mammals. To maximize oxygen when galloping, a horse's breathing rhythm synchronizes exactly with its stride. One stride equals exactly one breath in and out. That's why at maximum sprint, their breathing sounds loud and heavy, called 'Dhabh'.\n\nAlso, horse legs evolved into one giant toe (hard hooves) to reduce ground friction weight." 
    },
    anatomy: [
      { part: { id: "Limpa Ekstra", en: "Spleen Reservoir" }, desc: { id: "Saat kuda berlari kencang, limpanya menyuntikkan sel darah merah ekstra ke pembuluh darah untuk dorongan oksigen super-turbo.", en: "When galloping, the spleen injects extra red blood cells into the bloodstream for a super-turbo oxygen boost." } },
      { part: { id: "Kuku (Hoof)", en: "Hoof" }, desc: { id: "Terbuat dari keratin padat tebal (seperti kuku manusia) yang menyerap hentakan berat saat mendarat layaknya per kejut pegas.", en: "Made of thick solid keratin (like human nails) that absorbs heavy shock upon landing like a suspension spring." } }
    ],
    wowFactor: { 
      id: "Fakta WOW mencengangkan: Surah Al-Adiyat mendeskripsikan secara mikroskopis detail kuda perang militer yang tidak disadari kebanyakan orang zaman dulu: napasnya sinkron yang terengah-engah karena paru-parunya terkompresi organ dalam setiap kaki mendarat ('Dhabh'), dan memercikkan api dari kuku besinya ('Qadh').\n\nLebih dari itu, kenapa sumpah ini sangat epik? Karena kuda secara naluri biologis adalah 'hewan mangsa' pemakan rumput yang sangat penakut, nalurinya adalah KABUR DARI BAHAYA. Namun, kuda perang melawan insting biologisnya! Dia maju menabrak tombak dan pedang yang mematikan di tengah peperangan hanya karena kepatuhan dan kesetiaannya pada penunggangnya (tuannya). Allah kemudian menyindir di ayat berikutnya: Kuda saja sangat setia rela mati menabrak bahaya demi tuannya, mengapa manusia sangat ingkar kepada Tuhannya? Subhanallah!", 
      en: "Astonishing WOW Fact: Surah Al-Adiyat microscopically describes military war horse details unknown to most ancients: its synchronized panting breath as internal organs compress lungs on every landing ('Dhabh'), and sparking fire from its iron hooves ('Qadh').\n\nMore than that, why is this oath so epic? Because horses are biologically 'prey animals', very easily spooked grass-eaters whose instinct is to FLEE FROM DANGER. But a war horse defies its biological instinct! It charges forward into deadly spears and swords in battle purely out of loyalty and obedience to its rider (its master). Allah then strikes a metaphor in the next verse: Even a horse is fiercely loyal, willing to die charging danger for its master, so why is mankind so ungrateful to his Lord? Subhanallah!" 
    },
    quranVerse: {
      arabic: "وَالْعَادِيَاتِ ضَبْحًا ۝ فَالْمُورِيَاتِ قَدْحًا ۝ فَالْمُغِيرَاتِ صُبْحًا",
      transliteration: "Wal-'aadiyaati dhabhaa. Fal-muuriyaati qadhaa. Fal-mughiiraati shubhaa.",
      translation: { id: "Demi kuda perang yang berlari kencang dengan terengah-engah, dan kuda yang mencetuskan api dengan pukulan (kuku kakinya), dan kuda yang menyerang dengan tiba-tiba di waktu pagi.", en: "By the racers, panting, And the producers of sparks [when] striking, And the chargers at dawn." }
    },
    quiz: [
      {
        question: { id: "Fenomena sinkronisasi apa yang terjadi pada tubuh kuda saat berlari kencang (galloping)?", en: "What synchronization phenomenon happens in a horse's body when galloping?" },
        options: [{ text: { id: "Satu langkah lompatan sama dengan satu tarikan napas", en: "One jumping stride equals exactly one breath" } }, { text: { id: "Detak jantungnya mengikuti gerakan ekor", en: "Its heartbeat follows its tail movement" } }, { text: { id: "Kuda mengedipkan mata setiap melangkah", en: "The horse blinks every step" } }, { text: { id: "Telinganya memutar seirama dengan angin", en: "Its ears rotate to the rhythm of the wind" } }],
        answerIdx: 0
      },
      {
        question: { id: "Pesan mendalam (sindiran) Al-Qur'an menggunakan perumpamaan kuda perang yang melawan insting alaminya adalah untuk mencontohkan...", en: "The deep message (metaphor) of the Qur'an using the war horse defying its natural instinct is to exemplify..." },
        options: [{ text: { id: "Kesetiaan dan kepatuhan total hewan pada tuannya, berbanding terbalik dengan manusia yang ingkar pada Tuhan", en: "The total loyalty and obedience of an animal to its master, contrasting humans who are ungrateful to God" } }, { text: { id: "Bahwa kuda sangat suka bermain api", en: "That horses love playing with fire" } }, { text: { id: "Agar manusia berjalan lebih cepat", en: "So humans can walk faster" } }, { text: { id: "Bahwa manusia sebaiknya tidak ikut perang", en: "That humans shouldn't join wars" } }],
        answerIdx: 0
      },
      {
        question: { id: "Bagaimana cara kuda bisa tidur sambil berdiri tegak berjam-jam tanpa terjatuh?", en: "How can horses sleep standing upright for hours without falling?" },
        options: [{ text: { id: "Mekanisme mengunci sendi lutut kakinya", en: "A mechanism locking their leg knee joints" } }, { text: { id: "Bersandar ke tembok bangunan", en: "Leaning against a building wall" } }, { text: { id: "Menggunakan ekor sebagai penyangga", en: "Using their tail as a prop" } }, { text: { id: "Ada orang yang memeganginya", en: "Someone holds them up" } }],
        answerIdx: 0
      }
    ]
  }
};

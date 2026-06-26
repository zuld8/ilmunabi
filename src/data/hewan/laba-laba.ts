import { ObjectData } from "../objects";

export const labaLabaData: ObjectData = {
  slug: "laba-laba",
  name: { id: "Laba-laba", en: "Spider" },
  icon: "🕷️",
  category: "serangga",
  type: "hewan",
  scientificName: "Araneae",
  surahName: "Al-'Ankabut",
  surahReference: "29:41",
  unlockedAtPoints: 50,
  kosakata: [
    { arab: "عَنْكَبُوت", latin: "Ankabut", arti: "Laba-laba", artiEn: "Spider", contohAyat: "Perumpamaan orang-orang yang mengambil pelindung selain Allah adalah seperti laba-laba yang membuat rumah." }
  ],
  balita: {
    text: { id: "Halo! Aku laba-laba, si pembuat jaring! Aku punya 8 kaki untuk memanjat dinding! 🕸️", en: "Hello! I am a spider, the web maker! I have 8 legs to climb walls! 🕸️" },
    audioTranscript: { id: "Sssht! Lihat jaringku yang cantik. Aku menenunnya sendirian!", en: "Shhh! Look at my beautiful web. I weave it all by myself!" },
    quiz: {
      question: { id: "Berapa jumlah kaki laba-laba?", en: "How many legs does a spider have?" },
      options: [
        { text: { id: "4 kaki", en: "4 legs" } },
        { text: { id: "6 kaki", en: "6 legs" } },
        { text: { id: "8 kaki", en: "8 legs" } }
      ],
      answerIdx: 2
    }
  },
  anak: {
    text: { id: "Tahukah kamu ada surah dalam Al-Qur'an bernama Al-'Ankabut yang artinya Laba-laba? Laba-laba membuat jaring yang menakjubkan, tapi Allah berfirman bahwa jaring laba-laba adalah rumah yang paling rapuh.", en: "Did you know there is a surah in the Quran called Al-'Ankabut which means The Spider? Spiders make amazing webs, but Allah says that a spider's web is the frailest of houses." },
    facts: [
      { id: "Sutra laba-laba 5 kali lebih kuat dari baja dengan ketebalan yang sama!", en: "Spider silk is 5 times stronger than steel of the same thickness!" },
      { id: "Banyak laba-laba memiliki 8 mata, tapi penglihatannya sering kali buruk.", en: "Many spiders have 8 eyes, but their vision is often poor." },
      { id: "Laba-laba bukan serangga! Mereka termasuk kelompok Arachnida.", en: "Spiders are not insects! They belong to the Arachnid group." }
    ],
    quranVerse: {
      arabic: "مَثَلُ الَّذِينَ اتَّخَذُوا مِنْ دُونِ اللَّهِ أَوْلِيَاءَ كَمَثَلِ الْعَنْكَبُوتِ اتَّخَذَتْ بَيْتًا ۖ وَإِنَّ أَوْهَنَ الْبُيُوتِ لَبَيْتُ الْعَنْكَبُوتِ ۖ لَوْ كَانُوا يَعْلَمُونَ",
      transliteration: "Mathalul-ladhina takhadhu min dunillahi awliya'a kamathalil-'ankabuti ttakhadhat baytan. Wa inna awhanal-buyuti labaytul-'ankabut. Law kanu ya'lamun.",
      translation: { id: "Perumpamaan orang-orang yang mengambil pelindung selain Allah adalah seperti laba-laba yang membuat rumah. Dan sesungguhnya rumah yang paling lemah ialah rumah laba-laba, sekiranya mereka mengetahui.", en: "The example of those who take allies other than Allah is like that of the spider who takes a home. And indeed, the weakest of homes is the home of the spider, if they only knew." },
      context: { id: "Allah menggunakan jaring laba-laba sebagai perumpamaan kelemahan bersandar pada selain-Nya.", en: "Allah uses the spider web as an analogy for the weakness of relying on anyone other than Him." }
    },
    quiz: {
      question: { id: "Surah Al-'Ankabut dalam Al-Qur'an dinamakan dari hewan apa?", en: "The Surah Al-'Ankabut in the Quran is named after which animal?" },
      options: [
        { text: { id: "Semut", en: "Ant" } },
        { text: { id: "Lebah", en: "Bee" } },
        { text: { id: "Laba-laba", en: "Spider" } }
      ],
      answerIdx: 2
    }
  },
  explorer: {
    text: { id: "Laba-laba memproduksi sutra (jaring) bentuk cair dari kelenjar di perutnya yang disebut spinneret. Begitu bersentuhan dengan udara, cairan itu langsung mengeras menjadi benang super kuat! Inilah kecanggihan bioteknologi alami ciptaan Allah.", en: "Spiders produce liquid silk from glands in their abdomen called spinnerets. As soon as it touches the air, the liquid hardens into a super strong thread! This is the sophistication of natural biotechnology created by Allah." },
    anatomy: [
      { part: { id: "Spinneret", en: "Spinnerets" }, desc: { id: "Organ di ujung perut yang menembakkan sutra laba-laba cair.", en: "Organs at the end of the abdomen that shoot liquid spider silk." } },
      { part: { id: "Eksoskeleton", en: "Exoskeleton" }, desc: { id: "Kerangka luar yang keras untuk melindungi tubuh lembut mereka.", en: "A hard outer skeleton to protect their soft bodies." } }
    ],
    wowFactor: { id: "Sebuah benang jaring laba-laba yang setebal pensil konon bisa menghentikan pesawat Boeing 747 yang sedang terbang! Sangat elastis dan kuat!", en: "A strand of spider silk as thick as a pencil could supposedly stop a flying Boeing 747 in mid-air! It is incredibly elastic and strong!" },
    quranVerse: {
      arabic: "هَٰذَا خَلْقُ اللَّهِ فَأَرُونِي مَاذَا خَلَقَ الَّذِينَ مِنْ دُونِهِ",
      transliteration: "Hadha khalqullahi fa-aruni madha khalaqal-ladhina min dunihi.",
      translation: { id: "Inilah ciptaan Allah, maka perlihatkanlah kepadaku apa yang telah diciptakan oleh sembahan-sembahan selain Allah.", en: "This is the creation of Allah. So show Me what those other than Him have created." }
    },
    quiz: [
      {
        question: { id: "Bagaimana sifat asli benang sutra laba-laba?", en: "What is the true nature of spider silk thread?" },
        options: [
          { text: { id: "Sangat mudah hancur seperti kapas", en: "Very easily destroyed like cotton" } },
          { text: { id: "Lebih kuat dari baja dengan ukuran yang sama", en: "Stronger than steel of the same size" } },
          { text: { id: "Beracun bila disentuh", en: "Poisonous when touched" } }
        ],
        answerIdx: 1
      }
    ]
  }
};

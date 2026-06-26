import { ObjectData } from "../objects";

export const nyamukData: ObjectData = {
  slug: "nyamuk",
  name: { id: "Nyamuk", en: "Mosquito" },
  icon: "🦟",
  category: "serangga",
  type: "hewan",
  scientificName: "Culicidae",
  surahName: "Al-Baqarah",
  surahReference: "2:26",
  unlockedAtPoints: 65,
  kosakata: [
    { arab: "بَعُوضَة", latin: "Ba'uudah", arti: "Nyamuk", artiEn: "Mosquito", contohAyat: "Sesungguhnya Allah tiada segan membuat perumpamaan berupa nyamuk atau yang lebih rendah dari itu." }
  ],
  balita: {
    text: { id: "Ngiing! Ngiing! Aku nyamuk kecil yang suka terbang di malam hari! 🦟", en: "Zzzz! Zzzz! I am a little mosquito who likes to fly at night! 🦟" },
    audioTranscript: { id: "Ngiing! Jangan lupa tutup pintu kamarmu agar aku tidak masuk, ya!", en: "Zzzz! Don't forget to close your bedroom door so I don't get in!" },
    quiz: {
      question: { id: "Kapan biasanya nyamuk sering terbang dan bersuara ngiing?", en: "When do mosquitoes usually fly and make a buzzing sound?" },
      options: [
        { text: { id: "Saat hujan salju", en: "During a snowstorm" } },
        { text: { id: "Di malam hari", en: "At night" } },
        { text: { id: "Di siang hari yang terik", en: "In the hot afternoon" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Nyamuk disebut di dalam Al-Qur'an! Allah mengatakan bahwa Dia tidak malu membuat perumpamaan hewan yang sekecil nyamuk. Meski sangat kecil, nyamuk adalah hewan yang ciptaannya sangat rumit!", en: "Mosquitoes are mentioned in the Quran! Allah says that He is not ashamed to make an example of an animal as small as a mosquito. Even though it is very small, a mosquito is a very complexly created animal!" },
    facts: [
      { id: "Hanya nyamuk betina yang menggigit manusia. Nyamuk jantan hanya minum nektar bunga manis!", en: "Only female mosquitoes bite humans. Male mosquitoes only drink sweet flower nectar!" },
      { id: "Nyamuk tertarik pada manusia karena gas karbon dioksida yang kita keluarkan saat bernapas.", en: "Mosquitoes are attracted to humans because of the carbon dioxide gas we breathe out." },
      { id: "Suara 'ngiing' nyamuk berasal dari kepakan sayapnya yang sangat cepat.", en: "The 'buzzing' sound of a mosquito comes from its very fast wing flaps." }
    ],
    quranVerse: {
      arabic: "إِنَّ اللَّهَ لَا يَسْتَحْيِي أَنْ يَضْرِبَ مَثَلًا مَا بَعُوضَةً فَمَا فَوْقَهَا",
      transliteration: "Innal-laha la yastahyi an yadriba mathalan ma ba'udhatan fama fawqaha.",
      translation: { id: "Sesungguhnya Allah tiada segan membuat perumpamaan berupa nyamuk atau yang lebih rendah dari itu.", en: "Indeed, Allah is not timid to present an example - that of a mosquito or what is smaller than it." },
      context: { id: "Allah tidak pernah malu memberikan perumpamaan makhluk kecil apa pun, karena dalam setiap ciptaan-Nya terdapat ilmu yang tak terbatas.", en: "Allah is never shy to present an example of any small creature, because in every creation of His there is infinite knowledge." }
    },
    quiz: {
      question: { id: "Nyamuk apa yang biasanya menggigit manusia?", en: "Which mosquito usually bites humans?" },
      options: [
        { text: { id: "Nyamuk Jantan", en: "Male Mosquito" } },
        { text: { id: "Nyamuk Betina", en: "Female Mosquito" } },
        { text: { id: "Nyamuk Bayi", en: "Baby Mosquito" } }
      ],
      answerIdx: 1
    }
  },
  explorer: {
    text: { id: "Tahukah kamu betapa rumitnya tubuh nyamuk? Alat hisap nyamuk (probosis) ternyata bukan cuma satu jarum, tapi terdiri dari ENAM jarum super tipis! Ada yang berfungsi memotong kulit, ada yang menyedot darah, dan ada yang menyuntikkan obat bius agar kita tidak sadar sedang digigit. Maha Besar Allah yang menciptakan teknologi ini pada hewan sekecil nyamuk!", en: "Did you know how complex a mosquito's body is? A mosquito's feeding tube (proboscis) is actually not just one needle, but consists of SIX super thin needles! Some function to cut the skin, some to suck blood, and some to inject anesthetic so we don't realize we are being bitten. Allah is the Greatest who created this technology in an animal as small as a mosquito!" },
    anatomy: [
      { part: { id: "Probosis (Enam Jarum)", en: "Proboscis (Six Needles)" }, desc: { id: "Alat hisap canggih yang bisa menyayat, membius, dan menyedot darah tanpa terasa.", en: "An advanced sucking tool that can slice, anesthetize, and suck blood painlessly." } },
      { part: { id: "Sensor Panas Tubuh", en: "Body Heat Sensor" }, desc: { id: "Nyamuk memiliki sensor untuk mendeteksi panas tubuh dan keringat manusia dari jarak jauh.", en: "Mosquitoes have sensors to detect human body heat and sweat from a distance." } }
    ],
    wowFactor: { id: "Lebih mengejutkan lagi, terkadang ada kutu yang sangat kecil hidup menempel di atas kepala nyamuk! Benar firman Allah: 'berupa nyamuk atau yang LEBIH KECIL dari itu'.", en: "Even more surprisingly, sometimes there are tiny mites living attached to the top of a mosquito's head! True is Allah's word: 'that of a mosquito or what is SMALLER than it'." },
    quranVerse: {
      arabic: "فَأَمَّا الَّذِينَ آمَنُوا فَيَعْلَمُونَ أَنَّهُ الْحَقُّ مِنْ رَبِّهِمْ ۖ وَأَمَّا الَّذِينَ كَفَرُوا فَيَقُولُونَ مَاذَا أَرَادَ اللَّهُ بِهَٰذَا مَثَلًا",
      transliteration: "Fa-ammal-ladhina amanu faya'lamuna annahul haqqu min rabbihim. Wa ammal-ladhina kafaru fayaquluna madha aradallahu bihadha mathalan.",
      translation: { id: "Adapun orang-orang yang beriman, maka mereka yakin bahwa perumpamaan itu benar dari Tuhan mereka. Tetapi mereka yang kafir mengatakan: 'Apakah maksud Allah menjadikan ini untuk perumpamaan?'", en: "And those who have believed know that it is the truth from their Lord. But as for those who disbelieve, they say, 'What did Allah intend by this as an example?'" }
    },
    quiz: [
      {
        question: { id: "Berapa banyak 'jarum' rahasia yang ada di dalam mulut hisap (probosis) nyamuk?", en: "How many secret 'needles' are there inside a mosquito's sucking mouth (proboscis)?" },
        options: [
          { text: { id: "1 jarum", en: "1 needle" } },
          { text: { id: "3 jarum", en: "3 needles" } },
          { text: { id: "6 jarum", en: "6 needles" } }
        ],
        answerIdx: 2
      }
    ]
  }
};

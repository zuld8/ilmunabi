import { ObjectData } from "../objects";

export const bawangMerahData: ObjectData = {
  slug: "bawang-merah",
  name: { id: "Bawang Merah", en: "Red Onion" },
  icon: "🧅",
  category: "tumbuhan",
  type: "tumbuhan",
  scientificName: "Allium cepa",
  surahName: "Al-Baqarah",
  surahReference: "2:61",
  unlockedAtPoints: 10,
  kosakata: [
    { arab: "بَصَل", latin: "Baṣal", arti: "Bawang", artiEn: "Onion", contohAyat: "Bani Israil meminta bawang merah kepada Nabi Musa." }
  ],
  balita: {
    text: { id: "Lihat, bawang merah ini berlapis-lapis bajunya! Kalau Bunda memotongnya, kadang mata bisa keluar air mata. 🧅 Hihihi!", en: "Look, this red onion has many layers of clothes! If Mommy cuts it, sometimes tears can come out of your eyes. 🧅 Hehehe!" },
    audioTranscript: { id: "Bawang merah bikin masakan jadi sedap sekali.", en: "Red onions make food very delicious." },
    quiz: {
      question: { id: "Apa yang sering terjadi saat kita mengiris bawang merah?", en: "What often happens when we slice a red onion?" },
      options: [
        { text: { id: "Telinga jadi gatal", en: "Ears get itchy" } },
        { text: { id: "Mata kita bisa menangis (keluar air mata)", en: "Our eyes can tear up (cry)" } },
        { text: { id: "Hidung jadi panjang", en: "Nose gets longer" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Bawang merah tumbuh di dalam tanah! Dia membuat makanan kita jadi harum dan lezat. Di dalam Al-Qur'an, bawang merah pernah diminta oleh kaum Bani Israil lho! Subhanallah, bawang merah punya banyak obat untuk tubuh kita.", en: "Red onions grow underground! They make our food fragrant and delicious. In the Quran, red onions were once requested by the Children of Israel! Subhanallah, red onions have a lot of medicine for our body." },
    facts: [
      { id: "Bawang merah membuat kita menangis karena mengeluarkan gas yang menyengat mata.", en: "Red onions make us cry because they release a gas that stings the eyes." },
      { id: "Bawang merah memiliki banyak lapisan. Mengupas bawang seperti membuka bungkus kado berulang kali!", en: "Red onions have many layers. Peeling an onion is like opening a gift wrap over and over!" },
      { id: "Bawang bisa disimpan lama di tempat yang kering tanpa cepat busuk.", en: "Onions can be stored for a long time in a dry place without rotting quickly." }
    ],
    quranVerse: {
      arabic: "فَادْعُ لَنَا رَبَّكَ يُخْرِجْ لَنَا مِمَّا تُنْبِتُ الْأَرْضُ مِنْ بَقْلِهَا وَقِثَّائِهَا وَفُومِهَا وَعَدَسِهَا وَبَصَلِهَا",
      transliteration: "Fad‘u lanā rabbaka yukhrij lanā mimmā tunbitu al-arḍu min baqlihā wa qiththā'ihā wa fūmihā wa ‘adasihā wa baṣalihā",
      translation: { id: "...Mohonkanlah untuk kami kepada Tuhanmu, agar Dia mengeluarkan bagi kami dari apa yang ditumbuhkan bumi, yaitu sayur-mayurnya, ketimunnya, bawang putihnya, kacang adasnya, dan bawang merahnya.", en: "...Call upon your Lord for us to bring forth for us from what the earth grows of its herbs, its cucumbers, its garlic, its lentils, and its onions." },
      context: { id: "Bawang merah disebut dalam Al-Qur'an saat Bani Israil bosan dengan satu jenis makanan.", en: "Red onion is mentioned in the Quran when the Children of Israel got bored of one type of food." }
    },
    quiz: {
      question: { id: "Di mana letak bawang merah saat masih di pohonnya?", en: "Where is the red onion located when it is still on the plant?" },
      options: [
        { text: { id: "Bergantung di ranting", en: "Hanging on branches" } },
        { text: { id: "Terkubur di dalam tanah sebagai umbi", en: "Buried underground as a bulb" } },
        { text: { id: "Bersembunyi di dalam bunga", en: "Hiding inside a flower" } }
      ],
      answerIdx: 1
    }
  },
  explorer: {
    text: { id: "Saat bawang merah dipotong, sel-selnya pecah dan melepaskan enzim serta senyawa belerang. Gas inilah yang bereaksi dengan air di mata kita, membentuk asam ringan yang bikin perih! Mekanisme pertahanan unik ini adalah cara Allah melindungi bawang dari dimakan hama. Betapa detilnya penciptaan Allah!", en: "When a red onion is cut, its cells break down and release enzymes and sulfur compounds. This gas reacts with the water in our eyes, forming a mild acid that causes a stinging sensation! This unique defense mechanism is Allah's way of protecting onions from being eaten by pests. How detailed is Allah's creation!" },
    anatomy: [
      { part: { id: "Umbi Lapis (Bulb)", en: "Bulb" }, desc: { id: "Daun tebal berdaging tempat bawang menyimpan makanan.", en: "Thick, fleshy leaves where the onion stores its food." } },
      { part: { id: "Cakram (Basal Plate)", en: "Basal Plate" }, desc: { id: "Bagian paling keras di bawah bawang tempat akar tumbuh.", en: "The hardest part at the bottom of the onion where roots grow." } }
    ],
    wowFactor: { id: "Orang Mesir Kuno sangat menghormati bawang merah karena bentuk bulat dan lapisan dalamnya melambangkan keabadian hidup!", en: "Ancient Egyptians highly respected red onions because their round shape and inner layers symbolized eternal life!" },
    quranVerse: {
      arabic: "وَإِذْ قُلْتُمْ يَا مُوسَىٰ لَنْ نَصْبِرَ عَلَىٰ طَعَامٍ وَاحِدٍ",
      transliteration: "Wa idh qultum yā mūsā lan naṣbira ‘alā ṭa‘āmin wāḥidin",
      translation: { id: "Dan (ingatlah), ketika kamu berkata: 'Hai Musa, kami tidak bisa sabar (tahan) dengan satu macam makanan saja...'", en: "And (remember) when you said: 'O Moses, we can never endure one (kind of) food...'" }
    },
    quiz: [
      {
        question: { id: "Mengapa mata kita perih saat memotong bawang?", en: "Why do our eyes sting when cutting onions?" },
        options: [
          { text: { id: "Karena bawang memancarkan cahaya", en: "Because onions emit light" } },
          { text: { id: "Karena bawang melepaskan senyawa belerang (sulfur) yang berbentuk gas", en: "Because onions release a sulfur compound in the form of gas" } },
          { text: { id: "Karena kita terlalu sedih", en: "Because we are too sad" } }
        ],
        answerIdx: 1
      }
    ]
  }
};

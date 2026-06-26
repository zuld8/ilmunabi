import { ObjectData } from "../objects";

export const anginData: ObjectData = {
  slug: "angin",
  name: { id: "Angin", en: "Wind" },
  icon: "💨",
  category: "alam",
  type: "alam",
  scientificName: "Ventus (Atmosferic Flow)",
  surahName: "Ar-Rum",
  surahReference: "30:46",
  unlockedAtPoints: 15,
  kosakata: [
    { arab: "رِيح", latin: "Rih", arti: "Angin", artiEn: "Wind", contohAyat: "وَمِنْ آيَاتِهِ أَنْ يُرْسِلَ الرِّيَاحَ مُبَشِّرَاتٍ" }
  ],
  balita: {
    text: { id: "Wusss! Angin meniup daun-daun! 💨 Kita tidak bisa melihat angin, tapi kita bisa merasakannya sejuk di kulit kita.", en: "Whoosh! The wind blows the leaves! 💨 We can't see the wind, but we can feel it cooling our skin." },
    audioTranscript: { id: "Angin itu udara yang bergerak-gerak. Wusss! Kincir angin bisa berputar karena ditiup angin yang kuat.", en: "Wind is moving air. Whoosh! Windmills can spin because they are blown by strong winds." },
    quiz: {
      question: { id: "Mainan apa yang bisa terbang tinggi ke atas langit kalau ada angin?", en: "What toy can fly high into the sky when there is wind?" },
      options: [
        { text: { id: "Mobil-mobilan", en: "Toy car" } },
        { text: { id: "Layang-layang", en: "Kite" } },
        { text: { id: "Bola basket", en: "Basketball" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Angin adalah udara yang selalu bergerak dari tempat dingin ke tempat yang panas. Angin bisa membantu menerbangkan layang-layang dan juga membawa awan hujan ke tempat kita!", en: "Wind is air that is always moving from cold places to hot places. Wind can help fly kites and also bring rain clouds to our place!" },
    facts: [
      { id: "Angin terbentuk karena matahari memanaskan Bumi dengan cara yang tidak merata.", en: "Wind is formed because the sun heats the Earth unevenly." },
      { id: "Angin yang sangat kencang dan berputar-putar disebut badai tornado, kecepatannya bisa balapan sama mobil balap!", en: "Very strong and swirling winds are called tornadoes, their speed can race with race cars!" },
      { id: "Burung menggunakan hembusan angin untuk terbang jauh ke berbagai negara tanpa capek mengepakkan sayap.", en: "Birds use gusts of wind to fly far to various countries without getting tired of flapping their wings." }
    ],
    quranVerse: {
      arabic: "وَمِنْ آيَاتِهِ أَنْ يُرْسِلَ الرِّيَاحَ مُبَشِّرَاتٍ",
      transliteration: "Wa min aayaatihii an yursilar-riyaaha mubasysyiraat",
      translation: { id: "Dan di antara tanda-tanda kekuasaan-Nya ialah bahwa Dia mengirimkan angin sebagai pembawa berita gembira.", en: "And among His signs is that He sends the winds as bearers of good tidings." },
      context: { id: "Angin diciptakan Allah sebagai kabar gembira, karena angin membawa awan tebal yang akan menurunkan hujan.", en: "Wind was created by Allah as good news, because wind carries thick clouds that will bring down rain." }
    },
    quiz: {
      question: { id: "Apa yang membuat udara bergerak dan menjadi angin?", en: "What makes the air move and become wind?" },
      options: [
        { text: { id: "Burung yang mengepakkan sayapnya", en: "Birds flapping their wings" } },
        { text: { id: "Orang yang bernapas bersamaan", en: "People breathing together" } },
        { text: { id: "Perbedaan panas matahari di Bumi", en: "The difference in sun heat on Earth" } }
      ],
      answerIdx: 2
    }
  },
  explorer: {
    text: { id: "Angin adalah aliran partikel udara secara besar-besaran karena perbedaan tekanan atmosferik yang diciptakan oleh suhu matahari. Dalam dunia biologi, angin membantu penyerbukan jutaan jenis tanaman (anemogami). Luar biasanya, Allah berfirman dalam Al-Qur'an bahwa Dialah yang mengirimkan angin untuk mengawinkan (menyerbukkan) tumbuh-tumbuhan dan membawa hujan kehidupan!", en: "Wind is the massive flow of air particles due to atmospheric pressure differences created by solar temperatures. In the biological world, wind helps pollinate millions of plant types (anemophily). Amazingly, Allah says in the Quran that He sends the winds to fertilize (pollinate) plants and bring the rain of life!" },
    anatomy: [
      { part: { id: "Angin Pasat", en: "Trade Winds" }, desc: { id: "Angin global yang bertiup kencang secara konsisten ke arah ekuator.", en: "Global winds that blow strongly and consistently toward the equator." } },
      { part: { id: "Jet Stream", en: "Jet Stream" }, desc: { id: "Sungai udara super cepat di atmosfer atas tempat pesawat terbang.", en: "A super-fast river of air in the upper atmosphere where airplanes fly." } }
    ],
    wowFactor: { id: "HAH?! Angin tercepat yang pernah terekam di Bumi kecepatannya mencapai 408 km/jam! Bahkan pesawat terbang komersial memanfaatkan 'sungai udara' (Jet Stream) untuk terbang lebih cepat dan hemat bahan bakar!", en: "WOW?! The fastest wind ever recorded on Earth reached 408 km/h! Even commercial airplanes utilize 'rivers of air' (Jet Streams) to fly faster and save fuel!" },
    quranVerse: {
      arabic: "وَأَرْسَلْنَا الرِّيَاحَ لَوَاقِحَ فَأَنْزَلْنَا مِنَ السَّمَاءِ مَاءً فَأَسْقَيْنَاكُمُوهُ",
      transliteration: "Wa arsalnar-riyaaha lawaaqiha fa anzalnaa minas-samaa'i maa'an fa asqaynaakumuuh",
      translation: { id: "Dan Kami telah meniupkan angin untuk mengawinkan (tumbuh-tumbuhan) dan Kami turunkan hujan dari langit, lalu Kami beri minum kamu dengan air itu.", en: "And We have sent the fertilizing winds and sent down water from the sky and given you drink from it." }
    },
    quiz: [
      {
        question: { id: "Fungsi angin dalam ilmu biologi yang disebutkan dalam Al-Qur'an (lawaaqih) adalah untuk?", en: "The function of wind in biology mentioned in the Quran (lawaaqih) is to?" },
        options: [
          { text: { id: "Mengeringkan pakaian di jemuran", en: "Dry clothes on the line" } },
          { text: { id: "Mengawinkan serbuk sari tanaman", en: "Fertilize plant pollen" } },
          { text: { id: "Memutar kincir listrik raksasa", en: "Spin giant electrical windmills" } }
        ],
        answerIdx: 1
      }
    ]
  }
};

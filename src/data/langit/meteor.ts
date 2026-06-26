import { ObjectData } from "../objects";

export const meteorData: ObjectData = {
  slug: "meteor",
  name: { id: "Meteor", en: "Meteor" },
  icon: "🌠",
  category: "langit",
  type: "langit",
  scientificName: "Meteoroid",
  surahName: "Al-Mulk",
  surahReference: "67:5",
  unlockedAtPoints: 30,
  kosakata: [
    { arab: "شِهَاب", latin: "Shihaab", arti: "Meteor", artiEn: "Meteor", contohAyat: "Meteor jatuh di langit terlihat seperti bintang jatuh." }
  ],
  balita: {
    text: { id: "Horeee! Ada bintang jatuh berkelip di langit malam! Wussss! 🌠", en: "Hooray! There's a shooting star twinkling in the night sky! Whoosh! 🌠" },
    audioTranscript: { id: "Bintang jatuh itu namanya Meteor, batu luar angkasa yang terbakar karena sangat cepat.", en: "A shooting star is called a Meteor, a space rock burning up because it's so fast." },
    quiz: {
      question: { id: "Orang-orang sering menyebut meteor sebagai apa?", en: "What do people often call a meteor?" },
      options: [
        { text: { id: "Bintang diam", en: "Quiet star" } },
        { text: { id: "Bintang jatuh", en: "Shooting star" } },
        { text: { id: "Bulan purnama", en: "Full moon" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Meteor bukan bintang beneran, loh! Meteor adalah batu atau debu luar angkasa (meteoroid) yang menabrak lapisan udara Bumi. Gesekan yang kuat membuatnya sangat panas dan terbakar terang. Kadang ada pertunjukan 'Hujan Meteor' yang keren banget!", en: "Meteors aren't real stars, you know! A meteor is space rock or dust (meteoroid) that crashes into Earth's air layer. The strong friction makes it very hot and burns brightly. Sometimes there is a really cool 'Meteor Shower' show!" },
    facts: [
      { id: "Saat batu masih di luar angkasa, ia disebut Meteoroid.", en: "When the rock is still in outer space, it's called a Meteoroid." },
      { id: "Saat melintas menyala di langit bumi, ia disebut Meteor.", en: "When it streaks and burns in Earth's sky, it is called a Meteor." },
      { id: "Jika batu itu jatuh sampai ke tanah tanpa habis terbakar, ia disebut Meteorit.", en: "If the rock falls to the ground without burning completely, it is called a Meteorite." }
    ],
    quranVerse: {
      arabic: "وَلَقَدْ زَيَّنَّا السَّمَاءَ الدُّنْيَا بِمَصَابِيحَ وَجَعَلْنَاهَا رُجُومًا لِّلشَّيَاطِينِ",
      transliteration: "Wa laqad zayyannas-samaa'ad-dunyaa bimashaabiiha wa ja'alnaahaa rujuumal lish-shayaathiin",
      translation: { id: "Dan sesungguhnya Kami telah menghiasi langit yang dekat dengan bintang-bintang, dan Kami menjadikannya alat-alat pelempar syaitan.", en: "And We have certainly beautified the nearest heaven with stars and have made [from] them what is thrown at the devils." },
      context: { id: "Allah menjelaskan bahwa kilatan meteor di langit malam tidak hanya indah, tapi juga merupakan bentuk perlindungan langit.", en: "Allah explains that the flash of meteors in the night sky is not only beautiful, but also a form of protection for the heavens." }
    },
    quiz: {
      question: { id: "Batu luar angkasa yang berhasil jatuh sampai menyentuh tanah bumi disebut apa?", en: "What is a space rock that successfully falls and touches Earth's ground called?" },
      options: [
        { text: { id: "Meteor", en: "Meteor" } },
        { text: { id: "Meteorit", en: "Meteorite" } },
        { text: { id: "Meteoroid", en: "Meteoroid" } }
      ],
      answerIdx: 1
    }
  },
  explorer: {
    text: { id: "Setiap harinya, ribuan ton debu meteoroid menghantam atmosfer Bumi. Bayangkan jika Allah tidak menciptakan atmosfer! Bumi kita akan terus-menerus dihantam batuan mematikan dari angkasa. Atmosfer bertindak sebagai perisai yang membakar habis meteor-meteor tersebut, menjadikannya kilatan indah yang aman bagi kehidupan kita di bawahnya.", en: "Every day, thousands of tons of meteoroid dust hit Earth's atmosphere. Imagine if Allah didn't create the atmosphere! Our Earth would constantly be hit by deadly rocks from space. The atmosphere acts as a shield that burns up these meteors, turning them into beautiful flashes that are safe for our life below." },
    anatomy: [
      { part: { id: "Jejak Ionisasi", en: "Ionization Trail" }, desc: { id: "Jalur udara bercahaya yang ditinggalkan meteor saat ia melesat panas menembus atmosfer atas.", en: "The glowing path of air left by a meteor as it speeds hotly through the upper atmosphere." } },
      { part: { id: "Kerak Fusi", en: "Fusion Crust" }, desc: { id: "Lapisan tipis berwarna hitam seperti kaca pada permukaan meteorit akibat panas ekstrem saat jatuh.", en: "A thin black glass-like layer on the surface of a meteorite caused by extreme heat while falling." } }
    ],
    wowFactor: { id: "Hujan meteor terjadi ketika Bumi melewati bekas jalur lintasan komet! Ribuan serpihan debu komet akan terbakar bersamaan menjadi meteor di langit kita.", en: "A meteor shower happens when Earth passes through the trail of a comet! Thousands of comet dust fragments will burn simultaneously into meteors in our sky." },
    quranVerse: {
      arabic: "إِلَّا مَنْ خَطِفَ الْخَطْفَةَ فَأَتْبَعَهُ شِهَابٌ ثَاقِبٌ",
      transliteration: "Illaa man khatifal khatfata fa-atba'ahu shihaabun tsaa-qib",
      translation: { id: "Kecuali syaitan yang mencuri-curi (pembicaraan); maka ia dikejar oleh bintang yang menyala (meteor) yang terang benderang.", en: "Except one who snatches [some words] by theft, but they are pursued by a burning flame, piercing [in brightness]." }
    },
    quiz: [
      {
        question: { id: "Apa yang menyebabkan meteoroid hancur dan terbakar saat masuk ke Bumi?", en: "What causes a meteoroid to get destroyed and burn when entering Earth?" },
        options: [{ text: { id: "Disambar petir", en: "Struck by lightning" } }, { text: { id: "Gesekan sangat kuat dengan atmosfer", en: "Very strong friction with the atmosphere" } }, { text: { id: "Meleleh karena sinar matahari", en: "Melts from sunlight" } }],
        answerIdx: 1
      }
    ]
  }
};

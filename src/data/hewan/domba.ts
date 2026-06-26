import { ObjectData } from "../objects";

export const dombaData: ObjectData = {
  slug: "domba",
  name: { id: "Domba", en: "Sheep" },
  icon: "🐑",
  category: "hewan",
  type: "hewan",
  scientificName: "Ovis aries",
  surahName: "As-Saffat",
  surahReference: "37:107",
  unlockedAtPoints: 60,

  kosakata: [
    { arab: "ضَأْنٌ", latin: "Dha'n", arti: "Domba", artiEn: "Sheep", contohAyat: "Hewan peliharaan yang bulunya tebal." },
    { arab: "كَبْشٌ", latin: "Kabsh", arti: "Domba jantan/Kibas", artiEn: "Ram", contohAyat: "Domba yang menggantikan Nabi Ismail." },
    { arab: "صُوفٌ", latin: "Shuuf", arti: "Bulu domba (Wol)", artiEn: "Wool", contohAyat: "Bulu domba dibuat menjadi pakaian hangat." },
    { arab: "رَاعِي", latin: "Raa'ii", arti: "Penggembala", artiEn: "Shepherd", contohAyat: "Para Nabi adalah penggembala domba." }
  ],

  balita: {
    text: { id: "Mbeeek! Ini domba! Bulunya tebal sekali seperti awan yang empuk! 🐑", en: "Baaa! This is a sheep! Its wool is so thick like a fluffy cloud! 🐑" },
    audioTranscript: { id: "Mbeeek! Halo teman-teman, aku domba! Coba lihat badanku, buluku tebaaal dan empuk seperti awan kapas kan? Bulu aku ini bisa bikin baju hangat lho!", en: "Baaa! Hello friends, I'm a sheep! Look at my body, my wool is sooo thick and fluffy like a cotton cloud, right? My wool can make warm clothes you know!" },
    quiz: {
      question: { id: "Hewan apa yang berbulu tebal seperti awan dan bunyinya Mbeeek?", en: "Which animal has thick wool like clouds and says Baaa?" },
      options: [
        { text: { id: "🐘 Gajah", en: "🐘 Elephant" } },
        { text: { id: "🐑 Domba", en: "🐑 Sheep" } },
        { text: { id: "🐈 Kucing", en: "🐈 Cat" } }
      ],
      answerIdx: 1
    }
  },

  anak: {
    text: { id: "Domba adalah hewan yang sangat menurut dan suka hidup bergerombol dengan teman-temannya.", en: "Sheep are very obedient animals and like to live in flocks with their friends." },
    facts: [
      { id: "Mata domba bentuk pupilnya persegi panjang lho! Hah?! Kok bisa?", en: "Sheep have rectangular pupils! What?! How come?" },
      { id: "Karena pupil perseginya, domba bisa melihat ke belakang tanpa menengok! Keren!", en: "Because of rectangular pupils, sheep can see behind without turning their heads! Cool!" },
      { id: "Domba itu pintar, mereka bisa ingat 50 wajah domba lain dan wajah manusia.", en: "Sheep are smart, they can remember 50 sheep faces and human faces." },
      { id: "Semua Nabi dan Rasul ternyata pernah jadi penggembala domba lho.", en: "All Prophets and Messengers were once sheep herders." },
      { id: "Bulu domba terus tumbuh dan nggak pernah berhenti, jadi harus dicukur rajin-rajin.", en: "Sheep wool keeps growing and never stops, so it must be sheared regularly." }
    ],
    quranVerse: {
      arabic: "وَفَدَيْنَاهُ بِذِبْحٍ عَظِيمٍ",
      transliteration: "Wa fadaynaahu bidzibhin 'azhiim",
      translation: { id: "Dan Kami tebus anak itu dengan seekor sembelihan yang besar.", en: "And We ransomed him with a great sacrifice." },
      context: { id: "Tau nggak? Saat Nabi Ibrahim disuruh menyembelih anaknya (Nabi Ismail), Allah menggantinya dengan seekor domba (kibas) besar dari surga! Wah, dari sinilah kita berqurban waktu Idul Adha.", en: "Did you know? When Prophet Ibrahim was told to sacrifice his son (Prophet Ismail), Allah replaced him with a big sheep (ram) from heaven! Wow, this is why we do Qurban on Eid al-Adha." }
    },
    quiz: {
      question: { id: "Bentuk pupil mata domba adalah...", en: "The shape of a sheep's eye pupil is..." },
      options: [
        { text: { id: "Bulat", en: "Round" } },
        { text: { id: "Segitiga", en: "Triangle" } },
        { text: { id: "Persegi Panjang", en: "Rectangular" } },
        { text: { id: "Bintang", en: "Star" } }
      ],
      answerIdx: 2
    }
  },

  explorer: {
    text: { id: "Domba telah hidup berdampingan dengan manusia sejak ribuan tahun lalu. Mereka hewan yang jinak dan tidak punya pertahanan diri alami selain lari berkelompok.\n\nKarena itulah domba butuh sosok penggembala. Profesi menggembala domba melatih kesabaran, kelembutan, dan kewaspadaan ekstra menghadapi serigala atau bahaya. Menariknya, dalam sebuah hadits disebutkan bahwa tidak ada satu Nabi pun yang diutus kecuali pernah menggembala domba!\n\nWol atau bulu domba (Shuuf) adalah serat ajaib buatan Allah. Ia bisa menahan panas tubuh saat musim dingin, namun juga memiliki rongga udara agar kulit domba bisa bernapas saat cuaca hangat.", en: "Sheep have lived alongside humans for thousands of years. They are tame animals with no natural defense other than running in flocks.\n\nThat's why sheep need a shepherd. Herding sheep trains patience, gentleness, and extra vigilance against wolves or danger. Interestingly, a hadith mentions that no Prophet was sent except they once herded sheep!\n\nWool (Shuuf) is a magical fiber made by Allah. It can retain body heat during winter, but also has air pockets so sheep skin can breathe in warm weather." },
    anatomy: [
      { part: { id: "Pupil Persegi Panjang", en: "Rectangular Pupil" }, desc: { id: "Memberikan pandangan nyaris 360 derajat untuk mendeteksi pemangsa.", en: "Provides nearly 360-degree vision to detect predators." } },
      { part: { id: "Wol", en: "Wool" }, desc: { id: "Serat berongga yang anti air dan mengatur suhu tubuh.", en: "Hollow fiber that is water-resistant and regulates body temperature." } }
    ],
    wowFactor: { id: "Sains menegaskan bahwa domba yang tersesat dari kawanannya akan mengalami stres berat (denyut jantung meningkat tajam). Kehadiran manusia yang baik (penggembala) secara ilmiah dapat menenangkan detak jantung domba.\n\nAl-Qur'an menceritakan kisah agung penebusan Nabi Ismail dengan 'Sembelihan Besar' (domba/kibas surga) dalam Surah As-Saffat. Ini adalah mukjizat dan hadiah dari Allah SWT. Domba pun menjadi hewan istimewa untuk syariat Qurban dan Aqiqah umat Islam di seluruh dunia sampai akhir zaman!", en: "Science confirms that a sheep separated from its flock experiences severe stress (sharp heart rate increase). The presence of a kind human (shepherd) scientifically calms a sheep's heartbeat.\n\nThe Qur'an tells the grand story of ransoming Prophet Ismail with a 'Great Sacrifice' (heavenly ram) in Surah As-Saffat. This is a miracle and gift from Allah SWT. Sheep became a special animal for the Islamic sharia of Qurban and Aqiqah worldwide until the end of time!" },
    quranVerse: {
      arabic: "وَفَدَيْنَاهُ بِذِبْحٍ عَظِيمٍ",
      transliteration: "Wa fadaynaahu bidzibhin 'azhiim",
      translation: { id: "Dan Kami tebus anak itu dengan seekor sembelihan yang besar.", en: "And We ransomed him with a great sacrifice." }
    },
    quiz: [
      {
        question: { id: "Kenapa para Nabi dilatih dengan cara menggembala domba?", en: "Why were Prophets trained by herding sheep?" },
        options: [{ text: { id: "Untuk makan dagingnya", en: "To eat their meat" } }, { text: { id: "Melatih kesabaran dan kelembutan", en: "To train patience and gentleness" } }, { text: { id: "Agar bisa jadi kaya", en: "To become rich" } }, { text: { id: "Karena gampang dipelihara", en: "Because it's easy to keep" } }],
        answerIdx: 1
      },
      {
        question: { id: "Seberapa luas pandangan mata domba karena pupil perseginya?", en: "How wide is a sheep's field of vision due to rectangular pupils?" },
        options: [{ text: { id: "90 derajat", en: "90 degrees" } }, { text: { id: "180 derajat", en: "180 degrees" } }, { text: { id: "Hampir 360 derajat", en: "Almost 360 degrees" } }, { text: { id: "Hanya ke depan", en: "Only forward" } }],
        answerIdx: 2
      },
      {
        question: { id: "Kisah domba surga menggantikan Nabi Ismail saat disembelih ada di surah?", en: "The story of the heavenly sheep replacing Prophet Ismail is in which surah?" },
        options: [{ text: { id: "Al-Baqarah", en: "Al-Baqarah" } }, { text: { id: "As-Saffat", en: "As-Saffat" } }, { text: { id: "Al-An'am", en: "Al-An'am" } }, { text: { id: "Yasin", en: "Yasin" } }],
        answerIdx: 1
      }
    ]
  }
};

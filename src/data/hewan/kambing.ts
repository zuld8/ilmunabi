import { ObjectData } from "../objects";

export const kambingData: ObjectData = {
  slug: "kambing",
  name: { id: "Kambing", en: "Goat" },
  icon: "🐐",
  category: "hewan",
  type: "hewan",
  scientificName: "Capra hircus",
  surahName: "Al-An'am",
  surahReference: "6:143",
  unlockedAtPoints: 60,

  kosakata: [
    { arab: "مَعْزٌ", latin: "Ma'z", arti: "Kambing", artiEn: "Goat", contohAyat: "Kambing disebut dalam surah Al-An'am." },
    { arab: "تَيْسٌ", latin: "Tays", arti: "Kambing jantan", artiEn: "Billy goat", contohAyat: "Kambing jantan yang besar." },
    { arab: "لَبَنٌ", latin: "Laban", arti: "Susu", artiEn: "Milk", contohAyat: "Susu kambing sangat menyehatkan." },
    { arab: "قَرْنٌ", latin: "Qarn", arti: "Tanduk", artiEn: "Horn", contohAyat: "Beberapa kambing punya tanduk melengkung." }
  ],

  balita: {
    text: { id: "Mbeeek! Ini kambing! Kambing suka melompat-lompat riang dan makan rumput hijau. 🐐", en: "Baaa! This is a goat! Goats love to jump around happily and eat green grass. 🐐" },
    audioTranscript: { id: "Mbeek! Mbeek! Kenalin, ini kambing! Kambing jago banget lompat-lompat lho! Dia juga punya jenggot lucu di dagunya. Dan kambing bisa kasih kita susu yang enaaak banget!", en: "Baaa! Baaa! Meet the goat! Goats are really good at jumping! They also have a cute beard on their chin. And goats can give us really yummy milk!" },
    quiz: {
      question: { id: "Kambing suka makan apa?", en: "What do goats like to eat?" },
      options: [
        { text: { id: "🍔 Burger", en: "🍔 Burger" } },
        { text: { id: "🌱 Rumput", en: "🌱 Grass" } },
        { text: { id: "🐟 Ikan", en: "🐟 Fish" } }
      ],
      answerIdx: 1
    }
  },

  anak: {
    text: { id: "Kambing sangat jago memanjat lho! Mereka bahkan bisa berdiri di atas tebing yang super curam.", en: "Goats are great climbers! They can even stand on super steep cliffs." },
    facts: [
      { id: "Kambing gunung bisa memanjat pohon dan tebing batu! Hah?! Kok nggak jatuh?", en: "Mountain goats can climb trees and rocky cliffs! What?! Why don't they fall?" },
      { id: "Susu kambing itu pencernaannya lebih mudah buat perut kita dibanding susu sapi lho.", en: "Goat milk is easier for our tummy to digest compared to cow milk." },
      { id: "Sama seperti domba, mata kambing juga punya pupil bentuk persegi panjang.", en: "Just like sheep, goat eyes also have rectangular pupils." },
      { id: "Kambing sangat penasaran! Mereka suka mengunyah apa saja buat nge-cek benda itu, bahkan kertas!", en: "Goats are very curious! They like to chew anything to check what it is, even paper!" },
      { id: "Kambing adalah salah satu hewan yang paling awal dipelihara manusia sejak ribuan tahun lalu.", en: "Goats are one of the earliest animals tamed by humans thousands of years ago." }
    ],
    quranVerse: {
      arabic: "ثَمَانِيَةَ أَزْوَاجٍ ۖ مِنَ الضَّأْنِ اثْنَيْنِ وَمِنَ الْمَعْزِ اثْنَيْنِ",
      transliteration: "Thamaaniyata azwaajin minad-dha'nits-nayni wa minal ma'zits-nayn",
      translation: { id: "(Ada) delapan hewan ternak yang berpasangan; sepasang dari domba, dan sepasang dari kambing.", en: "(There are) eight mates: of the sheep, two and of the goats, two." },
      context: { id: "Tau nggak? Allah menciptakan kambing berpasangan untuk memberi manfaat besar buat kita. Dagingnya enak, susunya sehat banget, dan kulitnya juga bisa dipakai. Nabi Muhammad ﷺ juga sangat suka susu kambing!", en: "Did you know? Allah created goats in pairs to give us great benefits. The meat is tasty, the milk is super healthy, and the skin can be used. Prophet Muhammad ﷺ also really loved goat milk!" }
    },
    quiz: {
      question: { id: "Apa yang membuat kambing unik saat di gunung?", en: "What makes goats unique in the mountains?" },
      options: [
        { text: { id: "Bisa memanjat tebing terjal", en: "Can climb steep cliffs" } },
        { text: { id: "Bisa terbang", en: "Can fly" } },
        { text: { id: "Bisa berenang", en: "Can swim" } },
        { text: { id: "Tidur sambil berdiri", en: "Sleep while standing" } }
      ],
      answerIdx: 0
    }
  },

  explorer: {
    text: { id: "Kambing adalah hewan yang sangat tangkas dan atletis. Tapak kaki mereka terbelah dan setiap belahan bisa bergerak secara mandiri! Ini yang membuat kambing bisa menyeimbangkan diri di celah-celah batu yang hanya selebar beberapa sentimeter.\n\nSusu kambing memiliki struktur molekul lemak yang lebih kecil dibandingkan susu sapi. Karena itu, susu kambing diserap tubuh hanya dalam waktu 20 menit, sedangkan susu sapi butuh waktu 2-3 jam!\n\nTidak heran susu kambing adalah salah satu minuman kesukaan Rasulullah Muhammad ﷺ yang sangat menyehatkan.", en: "Goats are very agile and athletic animals. Their hooves are cloven, and each side can move independently! This allows goats to balance on rock crevices only a few centimeters wide.\n\nGoat milk has a smaller fat molecule structure than cow milk. Because of this, goat milk is absorbed by the body in just 20 minutes, while cow milk takes 2-3 hours!\n\nNo wonder goat milk is one of Prophet Muhammad ﷺ's favorite and highly healthy drinks." },
    anatomy: [
      { part: { id: "Kuku Terbelah", en: "Cloven Hooves" }, desc: { id: "Bantalan kaki lembut di tengah dan keras di luar untuk mencengkeram tebing.", en: "Soft footpads in the middle and hard on the outside to grip cliffs." } },
      { part: { id: "Lambung 4 Ruang", en: "4-Chambered Stomach" }, desc: { id: "Mencerna rumput kasar menjadi susu bergizi.", en: "Digests rough grass into nutritious milk." } }
    ],
    wowFactor: { id: "Sains menemukan bahwa kambing memiliki tingkat kecerdasan yang setara dengan anjing! Mereka bisa memecahkan teka-teki, mengingat cara memecahkannya selama berbulan-bulan, dan bisa berkomunikasi dengan tatapan mata ke manusia saat butuh bantuan.\n\nAl-Qur'an secara spesifik menyebut 'Al-Ma'z' (Kambing) bersama dengan domba, sapi, dan unta dalam Al-An'am sebagai nikmat Allah yang luar biasa. Dibalik tubuhnya yang terlihat biasa, tersembunyi pabrik biologi luar biasa yang mengubah rerumputan menjadi susu dengan gizi yang menyamai ASI manusia!", en: "Science discovered that goats have an intelligence level equal to dogs! They can solve puzzles, remember the solution for months, and communicate via eye contact with humans when needing help.\n\nThe Qur'an specifically mentions 'Al-Ma'z' (Goats) alongside sheep, cows, and camels in Al-An'am as extraordinary blessings from Allah. Behind its ordinary-looking body lies an incredible biological factory turning grass into milk with nutrition rivaling human breast milk!" },
    quranVerse: {
      arabic: "ثَمَانِيَةَ أَزْوَاجٍ ۖ مِنَ الضَّأْنِ اثْنَيْنِ وَمِنَ الْمَعْزِ اثْنَيْنِ",
      transliteration: "Thamaaniyata azwaajin minad-dha'nits-nayni wa minal ma'zits-nayn",
      translation: { id: "(Ada) delapan hewan ternak yang berpasangan; sepasang dari domba, dan sepasang dari kambing.", en: "(There are) eight mates: of the sheep, two and of the goats, two." }
    },
    quiz: [
      {
        question: { id: "Berapa lama susu kambing diserap oleh tubuh manusia?", en: "How long does it take for human bodies to absorb goat milk?" },
        options: [{ text: { id: "2-3 jam", en: "2-3 hours" } }, { text: { id: "20 menit", en: "20 minutes" } }, { text: { id: "5 jam", en: "5 hours" } }, { text: { id: "1 hari", en: "1 day" } }],
        answerIdx: 1
      },
      {
        question: { id: "Apa rahasia kambing bisa berdiri di tebing curam?", en: "What's the goat's secret to standing on steep cliffs?" },
        options: [{ text: { id: "Kuku terbelah yang bisa mencengkeram", en: "Cloven hooves that can grip" } }, { text: { id: "Punya lem di kaki", en: "Has glue on feet" } }, { text: { id: "Bantuan angin", en: "Wind assistance" } }, { text: { id: "Kuku runcing", en: "Sharp nails" } }],
        answerIdx: 0
      },
      {
        question: { id: "Dalam surah Al-An'am, Allah menyebut kambing termasuk nikmat dari hewan...", en: "In surah Al-An'am, Allah mentions goats as blessings from..." },
        options: [{ text: { id: "Buas", en: "Wild" } }, { text: { id: "Ternak (Al-An'am)", en: "Livestock (Al-An'am)" } }, { text: { id: "Laut", en: "Marine" } }, { text: { id: "Terbang", en: "Flying" } }],
        answerIdx: 1
      }
    ]
  }
};

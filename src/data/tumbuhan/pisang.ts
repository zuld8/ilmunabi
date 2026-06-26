import { ObjectData } from "../objects";

export const pisangData: ObjectData = {
  slug: "pisang",
  name: { id: "Pisang", en: "Banana" },
  icon: "🍌",
  category: "tumbuhan",
  type: "tumbuhan",
  scientificName: "Musa spp.",
  surahName: "Al-Waqi'ah",
  surahReference: "56:29",
  unlockedAtPoints: 100,

  kosakata: [
    { arab: "طَلْحٌ", latin: "Talh", arti: "Pohon Pisang", artiEn: "Banana Tree", contohAyat: "Surga memiliki pohon talh yang buahnya bersusun-susun." },
    { arab: "مَنْضُوْدٌ", latin: "Mandhuwd", arti: "Bersusun-susun", artiEn: "Clustered/Stacked", contohAyat: "Buah pisang tumbuh secara mandhuwd." },
    { arab: "فَاكِهَةٌ", latin: "Faakihah", arti: "Buah-buahan", artiEn: "Fruits", contohAyat: "Pisang adalah jenis faakihah yang mengenyangkan." },
    { arab: "ظِلٌّ", latin: "Zhill", arti: "Naungan / Bayangan", artiEn: "Shade", contohAyat: "Daun pisang yang lebar memberi zhill yang teduh." }
  ],

  balita: {
    text: {
      id: "Ini buah pisang! Warnanya kuning, panjang, dan bentuknya melengkung seperti senyum. Buah yang mengenyangkan seperti roti! 🍌",
      en: "This is a banana! It is yellow, long, and curved like a smile. A filling fruit just like bread! 🍌"
    },
    audioTranscript: {
      id: "Buka kulitnya... hap! Nyam nyam. Ini Pisang! Pisang itu manis, lembut, dan gampang banget dimakan. Monyet juga sangat suka pisang!",
      en: "Peel its skin... hop! Yum yum. This is a Banana! Bananas are sweet, soft, and so easy to eat. Monkeys really love bananas too!"
    },
    quiz: {
      question: { id: "Apa warna kulit pisang saat sudah sangat matang dan manis?", en: "What color is the banana peel when it is very ripe and sweet?" },
      options: [
        { text: { id: "Kuning 🍌", en: "Yellow 🍌" } },
        { text: { id: "Hitam legam 🖤", en: "Pitch black 🖤" } },
        { text: { id: "Biru langit 💙", en: "Sky blue 💙" } }
      ],
      answerIdx: 0
    }
  },

  anak: {
    text: {
      id: "Tahukah kamu? Pohon pisang sebenarnya bukan pohon lho, melainkan tanaman rumput raksasa! Batangnya empuk dan penuh air, tidak ada kayunya.",
      en: "Did you know? A banana tree is actually not a tree, but a giant grass plant! Its stem is soft and full of water, there is no wood."
    },
    facts: [
      { id: "Pohon pisang adalah tanaman herba (berbatang lunak) terbesar di dunia.", en: "The banana tree is the largest herbaceous (soft-stemmed) plant in the world." },
      { id: "Buah pisang tumbuh berlapis-lapis dan bersusun bertumpuk menjadi sebuah 'tandan'.", en: "Bananas grow in layers and are clustered on top of each other into a 'bunch'." },
      { id: "Makan dua buah pisang memberi kita tenaga cukup untuk olahraga selama 90 menit!", en: "Eating two bananas gives us enough energy to exercise for 90 minutes!" },
      { id: "Pisang bentuknya melengkung karena saat tumbuh mereka melengkung ke atas mencari sinar matahari.", en: "Bananas are curved because as they grow they bend upwards seeking sunlight." },
      { id: "Daun pisang sangat lebar dan panjang seperti payung raksasa pelindung hujan.", en: "Banana leaves are very wide and long like giant umbrellas protecting from rain." }
    ],
    quranVerse: {
      arabic: "وَطَلْحٍ مَّنْضُوْدٍۙ",
      transliteration: "Wa ṭalḥim manḍūd",
      translation: {
        id: "dan pohon pisang yang bersusun-susun (buahnya),",
        en: "And [banana] trees layered [with fruit],"
      },
      context: {
        id: "Tau nggak? Al-Qur'an menyebutkan pohon pisang (Talh) di Surga tumbuh dengan sangat rapi, buahnya bersusun rapat bertumpuk-tumpuk dari pangkal sampai ujung. Betapa melimpahnya makanan di Surga!",
        en: "Did you know? The Qur'an mentions the banana tree (Talh) in Heaven grows very neatly, its fruits are tightly clustered from bottom to top. How abundant the food in Heaven is!"
      }
    },
    quiz: {
      question: { id: "Sebenarnya pohon pisang itu termasuk jenis tumbuhan apa?", en: "What kind of plant is a banana tree actually?" },
      options: [
        { text: { id: "Tanaman herba (rumput) raksasa", en: "Giant herbaceous plant (grass)" } },
        { text: { id: "Pohon kayu super keras", en: "Super hard woody tree" } },
        { text: { id: "Jamur raksasa", en: "Giant mushroom" } },
        { text: { id: "Tanaman kaktus", en: "Cactus plant" } }
      ],
      answerIdx: 0
    }
  },

  explorer: {
    text: {
      id: "Pisang (Musa spp.) mematahkan semua aturan tentang apa itu 'pohon'. Jika kamu memotong batang pisang, kamu tidak akan menemukan cincin kayu sama sekali! Batang tegaknya disebut 'Pseudostem' (Batang Palsu) karena sebenarnya terbentuk dari pelepah-pelepah daun basah yang menggulung sangat padat berlapis-lapis menopang beban berat.\n\nPisang adalah 'bom potasium' alam. Mineral potasium ini sangat vital (penting) bagi saraf manusia untuk mengirimkan sinyal listrik penggerak otot. Jika kamu kekurangan potasium, ototmu bisa kram mendadak. Itulah sebabnya atlet sering terlihat makan pisang di sela-sela pertandingan—tubuh bisa langsung mengubah karbohidratnya menjadi energi, dan potasiumnya mencegah kram otot.\n\nDalam Al-Waqi'ah: 29, Allah mendeskripsikan 'Talh' (Pisang) dengan kata 'Mandhud', artinya ditumpuk atau disusun sangat rapat. Coba perhatikan tandan pisang; setiap lapis (sisir) pisang secara geometris tumbuh menutupi celah kosong di bawahnya membentuk tumpukan silinder padat yang memaksimalkan jumlah buah dalam satu tangkai!",
      en: "The Banana (Musa spp.) breaks all rules about what a 'tree' is. If you cut a banana trunk, you will not find any wood rings at all! Its upright stem is called a 'Pseudostem' (False Stem) because it's actually formed from wet leaf sheaths rolled very tightly in layers to support heavy loads.\n\nThe banana is nature's 'potassium bomb'. This potassium mineral is vital for human nerves to send electrical signals that move muscles. If you lack potassium, your muscles can cramp suddenly. That's why athletes are often seen eating bananas during breaks in matches—the body can instantly convert its carbohydrates into energy, and its potassium prevents muscle cramps.\n\nIn Al-Waqi'ah: 29, Allah describes 'Talh' (Banana) with the word 'Mandhud', meaning stacked or clustered very tightly. Look closely at a banana bunch; each layer (hand) of bananas geometrically grows to cover the empty gaps below it forming a solid cylindrical stack that maximizes the amount of fruit on one stalk!"
    },
    anatomy: [
      { part: { id: "Batang Semu (Pseudostem)", en: "Pseudostem" }, desc: { id: "Bukan kayu, melainkan gulungan raksasa pelepah daun yang sangat kuat menahan angin.", en: "Not wood, but giant rolls of leaf sheaths that are very strong against the wind." } },
      { part: { id: "Jantung Pisang", en: "Banana Heart/Blossom" }, desc: { id: "Bunga pisang berwarna merah marun raksasa di ujung tangkai buah yang berisi bakal pisang.", en: "The giant maroon banana flower at the end of the fruit stalk containing baby bananas." } }
    ],
    wowFactor: {
      id: "Sains menemukan perilaku tumbuhan langka pada pisang bernama Geotropisme Negatif: Buah pisang awalnya tumbuh menghadap ke bawah menuju bumi, tapi saat berkembang, ia berbelok tajam ke atas menentang gravitasi bumi untuk 'mencari' cahaya matahari, menyebabkan bentuknya melengkung!\n\nAl-Qur'an (56:29) memilih kata sifat (Mandhud / bersusun bertumpuk) sebagai keajaiban botani terbesar dari pisang surga. Dan memang secara fisiologi, cara tandan pisang menyusun ratusan buahnya di satu tangkai tanpa mematahkan tangkainya adalah keajaiban fisika biomekanik yang dikagumi insinyur modern!",
      en: "Science discovered a rare plant behavior in bananas called Negative Geotropism: Banana fruits initially grow pointing downwards towards the earth, but as they develop, they bend sharply upwards defying earth's gravity to 'seek' sunlight, causing their curved shape!\n\nThe Qur'an (56:29) chose the adjective (Mandhud / stacked clustered) as the greatest botanical miracle of the heavenly banana. And indeed physiologically, the way a banana bunch stacks hundreds of fruits on one stalk without breaking the stalk is a biomechanical physics marvel admired by modern engineers!"
    },
    quranVerse: {
      arabic: "وَطَلْحٍ مَّنْضُوْدٍۙ",
      transliteration: "Wa ṭalḥim manḍūd",
      translation: {
        id: "dan pohon pisang yang bersusun-susun (buahnya),",
        en: "And [banana] trees layered [with fruit],"
      }
    },
    quiz: [
      {
        question: { id: "Batang pohon pisang disebut 'Batang Semu' karena sebenarnya terbuat dari...", en: "The banana stem is called a 'Pseudostem' because it is actually made of..." },
        options: [
          { text: { id: "Gulungan pelepah daun", en: "Rolls of leaf sheaths" } },
          { text: { id: "Tulang raksasa", en: "Giant bones" } },
          { text: { id: "Kayu super ringan", en: "Super light wood" } },
          { text: { id: "Tumpukan tanah", en: "Mounds of soil" } }
        ],
        answerIdx: 0
      },
      {
        question: { id: "Mineral hebat apakah pada pisang yang sangat berguna mencegah otot kram?", en: "What great mineral in bananas is very useful for preventing muscle cramps?" },
        options: [
          { text: { id: "Potasium", en: "Potassium" } },
          { text: { id: "Zat Besi", en: "Iron" } },
          { text: { id: "Tembaga", en: "Copper" } },
          { text: { id: "Silver", en: "Silver" } }
        ],
        answerIdx: 0
      },
      {
        question: { id: "Mengapa bentuk buah pisang melengkung?", en: "Why is the banana fruit shape curved?" },
        options: [
          { text: { id: "Ditekan oleh angin", en: "Pressed by the wind" } },
          { text: { id: "Sengaja ditekuk oleh monyet", en: "Intentionally bent by monkeys" } },
          { text: { id: "Karena saat tumbuh buahnya berbelok ke atas menentang gravitasi bumi mencari matahari", en: "Because as it grows its fruit bends upwards defying gravity seeking the sun" } },
          { text: { id: "Karena tangkainya patah", en: "Because its stalk breaks" } }
        ],
        answerIdx: 2
      }
    ]
  }
};

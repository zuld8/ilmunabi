import { ObjectData } from "../objects";

export const dombaData: ObjectData = {
  slug: "domba",
  name: { id: "Domba", en: "Sheep" },
  icon: "🐑",
  category: "mamalia",
  type: "hewan",
  scientificName: "Ovis aries",
  surahName: "Ash-Shaffat",
  surahReference: "37:107",
  unlockedAtPoints: 20,
  kosakata: [
    { arab: "خَرُوْف", latin: "Kharuuf", arti: "Domba", artiEn: "Sheep", contohAyat: "Dan Kami tebus anak itu dengan seekor sembelihan yang besar (domba)." }
  ],
  balita: {
    text: { id: "Mbeeek! Aku domba yang punya bulu super tebal dan selembut awan! ☁️", en: "Baaa! I am a sheep with super thick fur as soft as a cloud! ☁️" },
    audioTranscript: { id: "Mbeeek! Buluku bisa digunakan untuk membuat baju hangat, lho!", en: "Baaa! My fleece can be used to make warm sweaters, you know!" },
    quiz: {
      question: { id: "Bulu domba terasa seperti apa?", en: "What does sheep fleece feel like?" },
      options: [
        { text: { id: "Berduri", en: "Spiky" } },
        { text: { id: "Selembut awan", en: "As soft as a cloud" } },
        { text: { id: "Keras seperti batu", en: "Hard as a rock" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Domba adalah hewan yang istimewa dalam Islam! Nabi Muhammad SAW dan nabi-nabi lainnya pernah menjadi penggembala domba. Bulunya disebut wol dan bisa dibuat pakaian.", en: "Sheep are special animals in Islam! Prophet Muhammad SAW and other prophets used to be sheep herders. Their fleece is called wool and can be made into clothes." },
    facts: [
      { id: "Domba tidak punya gigi depan di rahang atas, mereka menggunakan bibir atasnya yang keras untuk mencabut rumput.", en: "Sheep have no upper front teeth, they use their hard upper lip to pull grass." },
      { id: "Satu ekor domba bisa menghasilkan wol yang cukup untuk membuat 14 baju hangat!", en: "One sheep can produce enough wool to make 14 sweaters!" },
      { id: "Domba memiliki daya ingat yang luar biasa dan bisa mengenali wajah temannya bertahun-tahun.", en: "Sheep have amazing memory and can recognize friends' faces for years." }
    ],
    quranVerse: {
      arabic: "وَفَدَيْنَاهُ بِذِبْحٍ عَظِيمٍ",
      transliteration: "Wa fadaynahu bidhibhin 'azhim.",
      translation: { id: "Dan Kami tebus anak itu dengan seekor sembelihan yang besar.", en: "And We ransomed him with a great sacrifice." },
      context: { id: "Allah mengganti Nabi Ismail dengan seekor domba besar ketika Nabi Ibrahim diperintahkan untuk menyembelihnya.", en: "Allah replaced Prophet Ismail with a large ram when Prophet Ibrahim was ordered to sacrifice him." }
    },
    quiz: {
      question: { id: "Bulu domba disebut apa?", en: "What is sheep's fur called?" },
      options: [
        { text: { id: "Kapas", en: "Cotton" } },
        { text: { id: "Wol", en: "Wool" } },
        { text: { id: "Rambut", en: "Hair" } }
      ],
      answerIdx: 1
    }
  },
  explorer: {
    text: { id: "Mata domba memiliki pupil berbentuk persegi panjang! Ini membuat pandangan mereka sangat lebar hingga nyaris 360 derajat. Allah mendesain mata ini agar mereka cepat menyadari jika ada predator mengintai.", en: "Sheep's eyes have rectangular pupils! This gives them a very wide field of vision, nearly 360 degrees. Allah designed these eyes so they can quickly spot if a predator is lurking." },
    anatomy: [
      { part: { id: "Mata Persegi", en: "Rectangular Eyes" }, desc: { id: "Memberikan sudut pandang luas ke samping tanpa memutar kepala.", en: "Provides a wide side vision without turning the head." } },
      { part: { id: "Bulu Wol", en: "Wool Fleece" }, desc: { id: "Bulu ajaib yang tumbuh terus menerus dan membantu mereka bertahan di udara sangat dingin.", en: "Magic fleece that grows continuously and helps them survive in freezing cold air." } }
    ],
    wowFactor: { id: "Sebagian besar domba memiliki indra penciuman rahasia berkat kelenjar di kaki mereka. Mereka bisa mencium jejak domba lain dari tanah!", en: "Most sheep have a secret sense of smell thanks to glands in their feet. They can smell the tracks of other sheep from the ground!" },
    quranVerse: {
      arabic: "وَمِنَ الْأَنْعَامِ حَمُولَةً وَفَرْشًا",
      transliteration: "Wa minal an'ami hamulatan wa farsha.",
      translation: { id: "Dan di antara hewan ternak itu ada yang dijadikan untuk pengangkutan dan ada yang untuk disembelih.", en: "And of the grazing livestock are carriers [of burdens] and those [too] small." }
    },
    quiz: [
      {
        question: { id: "Bentuk pupil mata domba sangat unik, yaitu bentuknya...", en: "The shape of a sheep's pupil is very unique, it is shaped like a..." },
        options: [
          { text: { id: "Persegi panjang", en: "Rectangle" } },
          { text: { id: "Bulat sempurna", en: "Perfect circle" } },
          { text: { id: "Bintang", en: "Star" } }
        ],
        answerIdx: 0
      }
    ]
  }
};

import { ObjectData } from "../objects";

export const mawarData: ObjectData = {
  slug: "mawar",
  name: { id: "Mawar", en: "Rose" },
  icon: "🌹",
  category: "tumbuhan",
  type: "tumbuhan",
  scientificName: "Rosa",
  surahName: "Ar-Rahman",
  surahReference: "55:37",
  unlockedAtPoints: 10,
  kosakata: [
    { arab: "وَرْدَة", latin: "Wardah", arti: "Mawar", artiEn: "Rose", contohAyat: "Mawar merah bermekaran di taman." }
  ],
  balita: {
    text: { id: "Mawar ini cantik sekali dan wangi! Tapi ingat, di batangnya ada duri-duri kecil yang tajam. 🌹 Hati-hati jangan sampai tertusuk ya!", en: "This rose is so beautiful and fragrant! But remember, on its stem there are tiny sharp thorns. 🌹 Be careful not to get pricked!" },
    audioTranscript: { id: "Bunga mawar cantik tapi batangnya berduri.", en: "Roses are beautiful but their stems are thorny." },
    quiz: {
      question: { id: "Apa yang membuat kita harus hati-hati saat memegang batang mawar?", en: "What makes us have to be careful when holding a rose stem?" },
      options: [
        { text: { id: "Ada duri yang tajam", en: "There are sharp thorns" } },
        { text: { id: "Batangnya bisa menggigit", en: "The stem can bite" } },
        { text: { id: "Bisa terbang tiba-tiba", en: "It can suddenly fly away" } }
      ],
      answerIdx: 0
    }
  },
  anak: {
    text: { id: "Bunga mawar adalah bunga yang paling banyak dikenal di dunia! Banyak orang menggunakan mawar untuk hadiah atau membuat air mawar yang wangi. Di dalam Al-Qur'an, Allah menggambarkan langit yang terbelah pada hari kiamat warnanya akan merah menyerupai bunga mawar (wardah). Subhanallah!", en: "The rose is the most widely known flower in the world! Many people use roses for gifts or to make fragrant rose water. In the Quran, Allah describes the sky splitting on the Day of Judgment turning red resembling a rose (wardah). Subhanallah!" },
    facts: [
      { id: "Mawar bisa berwarna merah, putih, kuning, pink, tapi tidak ada mawar yang asli berwarna biru tua.", en: "Roses can be red, white, yellow, pink, but there are no true dark blue roses." },
      { id: "Duri mawar sebenarnya berfungsi untuk melindunginya dari hewan yang ingin memakan batangnya.", en: "Rose thorns actually serve to protect it from animals that want to eat its stem." },
      { id: "Air rebusan kelopak mawar sudah dipakai sejak zaman dulu untuk membersihkan wajah.", en: "Boiled rose petal water has been used since ancient times to clean the face." }
    ],
    quranVerse: {
      arabic: "فَإِذَا انْشَقَّتِ السَّمَاءُ فَكَانَتْ وَرْدَةً كَالدِّهَانِ",
      transliteration: "Fa-idha inshaqqati as-samā'u fakānat wardatan kal-dihān",
      translation: { id: "Maka apabila langit telah terbelah dan menjadi merah mawar seperti (kilapan) minyak.", en: "And when the heaven is split open and becomes rose-colored like oil." },
      context: { id: "Kehebatan hari Kiamat digambarkan langitnya memerah seperti mawar muda.", en: "The greatness of the Day of Judgment is described with the sky turning red like a young rose." }
    },
    quiz: {
      question: { id: "Warna langit saat terbelah pada hari kiamat diumpamakan menyerupai bunga apa?", en: "The color of the sky when it splits on the Day of Judgment is compared to what flower?" },
      options: [
        { text: { id: "Bunga Matahari", en: "Sunflower" } },
        { text: { id: "Bunga Melati", en: "Jasmine" } },
        { text: { id: "Bunga Mawar Merah", en: "Red Rose" } }
      ],
      answerIdx: 2
    }
  },
  explorer: {
    text: { id: "Tahukah kamu bahwa mawar memiliki buah? Setelah mahkota bunganya rontok, dasar bunganya akan membengkak membentuk buah kecil bernama 'Rose Hip'. Rose hip ini sangat kaya akan Vitamin C, bahkan lebih banyak dari buah jeruk! Ini bukti nyata bagaimana Allah Maha Mencukupi (Al-Muqit), memberikan vitamin dan perlindungan di dalam sekuntum bunga berduri.", en: "Did you know that roses have fruits? After the petals fall off, the base of the flower swells to form a small fruit called a 'Rose Hip'. These rose hips are very rich in Vitamin C, even more than oranges! This is clear proof of how Allah the Nourisher (Al-Muqit), provides vitamins and protection within a thorny flower." },
    anatomy: [
      { part: { id: "Prickles (Duri Palsu)", en: "Prickles" }, desc: { id: "Tonjolan tajam pada batang mawar yang bukan dari kayu terdalam, melainkan kulit luar.", en: "Sharp outgrowths on the rose stem that are not from the inner wood, but the outer skin." } },
      { part: { id: "Rose Hip", en: "Rose Hip" }, desc: { id: "Buah dari mawar yang menyimpan biji dan sangat kaya akan Vitamin C.", en: "The fruit of the rose that stores seeds and is very rich in Vitamin C." } }
    ],
    wowFactor: { id: "Ada semak mawar di Jerman (Mawar Hildesheim) yang telah hidup dan terus berbunga selama lebih dari 1000 tahun berturut-turut!", en: "There is a rose bush in Germany (Hildesheim Rose) that has lived and continuously bloomed for over 1000 consecutive years!" },
    quranVerse: {
      arabic: "هَذَا خَلْقُ اللَّهِ فَأَرُونِي مَاذَا خَلَقَ الَّذِينَ مِنْ دُونِهِ",
      transliteration: "Hādhā khalqu Allāhi fa-arūnī mādhā khalaqa alladhīna min dūnih",
      translation: { id: "Inilah ciptaan Allah, maka perlihatkanlah kepadaku apa yang telah diciptakan oleh sembahan selain-Nya.", en: "This is the creation of Allah. So show Me what those other than Him have created." }
    },
    quiz: [
      {
        question: { id: "Apa nama buah kecil yang tumbuh dari bunga mawar setelah kelopaknya rontok?", en: "What is the name of the small fruit that grows from a rose after its petals fall off?" },
        options: [
          { text: { id: "Rose Hip", en: "Rose Hip" } },
          { text: { id: "Tomat Ceri", en: "Cherry Tomato" } },
          { text: { id: "Apel Mawar", en: "Rose Apple" } }
        ],
        answerIdx: 0
      }
    ]
  }
};

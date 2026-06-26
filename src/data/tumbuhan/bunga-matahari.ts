import { ObjectData } from "../objects";

export const bungaMatahariData: ObjectData = {
  slug: "bunga-matahari",
  name: { id: "B. Matahari", en: "Sunflower" },
  icon: "🌻",
  category: "tumbuhan",
  type: "tumbuhan",
  scientificName: "Helianthus annuus",
  surahName: "Ta Ha",
  surahReference: "20:53",
  unlockedAtPoints: 10,
  kosakata: [
    { arab: "عَبَّادُ الشَّمْسِ", latin: "‘Abbād ash-Shams", arti: "Bunga Matahari", artiEn: "Sunflower", contohAyat: "Bunga matahari selalu menghadap cahaya." }
  ],
  balita: {
    text: { id: "Wah, bunganya besar sekali dan berwarna kuning cerah! Seperti matahari yang sedang tersenyum. 🌻 Lebah suka sekali mampir ke sini!", en: "Wow, the flower is so big and bright yellow! It looks like a smiling sun. 🌻 Bees love to visit here!" },
    audioTranscript: { id: "Bunga matahari sangat tinggi dan indah.", en: "Sunflowers are very tall and beautiful." },
    quiz: {
      question: { id: "Warna apa kelopak bunga matahari?", en: "What color are the petals of a sunflower?" },
      options: [
        { text: { id: "Biru", en: "Blue" } },
        { text: { id: "Kuning terang", en: "Bright yellow" } },
        { text: { id: "Hitam", en: "Black" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Bunga matahari adalah bunga yang unik! Ia suka sekali dengan cahaya matahari, sehingga bunganya akan bergerak mengikuti arah matahari dari timur ke barat. Fenomena ini disebut heliotropisme. Masya Allah, Allah memberikan insting kepada tanaman ini untuk mencari cahaya!", en: "Sunflowers are unique flowers! They love sunlight so much that the flowers will move following the sun from east to west. This phenomenon is called heliotropism. Mashallah, Allah gave this plant the instinct to seek light!" },
    facts: [
      { id: "Satu bunga matahari sebenarnya terdiri dari ribuan bunga kecil di bagian tengahnya!", en: "One sunflower is actually made up of thousands of tiny flowers in its center!" },
      { id: "Biji bunga matahari bisa dimakan lho, biasa kita sebut kuaci.", en: "Sunflower seeds can be eaten, we usually call them kuaci." },
      { id: "Bunga ini dinamakan bunga matahari karena bentuknya yang mirip matahari.", en: "This flower is named sunflower because its shape resembles the sun." }
    ],
    quranVerse: {
      arabic: "أَلَمْ تَرَ أَنَّ اللَّهَ أَنْزَلَ مِنَ السَّمَاءِ مَاءً فَتُصْبِحُ الْأَرْضُ مُخْضَرَّةً",
      transliteration: "Alam tara anna Allāha anzala mina as-samā'i mā'an fatuṣbihu al-arḍu mukhḍarratan",
      translation: { id: "Tidakkah engkau memperhatikan, bahwa Allah menurunkan air dari langit, lalu jadilah bumi itu hijau...", en: "Do you not see that Allah has sent down water from the sky, so the earth becomes green..." },
      context: { id: "Allah memberikan kehidupan pada biji yang ditanam sehingga tumbuh bunga yang indah.", en: "Allah gives life to planted seeds so that beautiful flowers grow." }
    },
    quiz: {
      question: { id: "Ke arah mana bunga matahari muda bergerak di siang hari?", en: "In which direction do young sunflowers move during the day?" },
      options: [
        { text: { id: "Mengikuti arah bayangan", en: "Following the shadow" } },
        { text: { id: "Mengikuti arah cahaya matahari", en: "Following the direction of sunlight" } },
        { text: { id: "Menghadap ke bawah terus", en: "Facing down continuously" } }
      ],
      answerIdx: 1
    }
  },
  explorer: {
    text: { id: "Kemampuan bunga matahari mengikuti pergerakan matahari terjadi karena hormon auksin yang mengatur pertumbuhan sel di batangnya. Sisi batang yang berada di tempat teduh akan tumbuh lebih cepat, sehingga bunga terdorong ke arah cahaya. Desain rumit ini adalah bukti bahwa Allah, Al-Musawwir (Maha Pembentuk Rupa), menciptakan sistem canggih bahkan pada sebatang tanaman!", en: "The sunflower's ability to track the sun happens because of auxin hormones that regulate cell growth in its stem. The shaded side of the stem grows faster, pushing the flower toward the light. This complex design is proof that Allah, Al-Musawwir (The Fashioner), created sophisticated systems even in a single plant!" },
    anatomy: [
      { part: { id: "Floret (Bunga Kecil)", en: "Florets" }, desc: { id: "Ribuan bunga kecil di tengah yang akan menjadi biji kuaci.", en: "Thousands of tiny flowers in the center that will become seeds." } },
      { part: { id: "Auksin", en: "Auxin" }, desc: { id: "Hormon pertumbuhan yang membuat tanaman merespons cahaya.", en: "A growth hormone that makes plants respond to light." } }
    ],
    wowFactor: { id: "Bunga matahari yang ditanam di tempat berpolusi radioaktif bisa membantu menyerap racun dari tanah dan membersihkan lingkungan!", en: "Sunflowers planted in radioactively polluted areas can help absorb toxins from the soil and clean the environment!" },
    quranVerse: {
      arabic: "وَفِي الْأَرْضِ آيَاتٌ لِلْمُوقِنِينَ",
      transliteration: "Wa fī al-arḍi āyātun lil-mūqinīn",
      translation: { id: "Dan di bumi itu terdapat tanda-tanda (kekuasaan Allah) bagi orang-orang yang yakin.", en: "And on the earth are signs for the certain [in faith]." }
    },
    quiz: [
      {
        question: { id: "Bagaimana cara kerja pergerakan bunga matahari ke arah cahaya (heliotropisme)?", en: "How does the movement of sunflowers towards the light (heliotropism) work?" },
        options: [
          { text: { id: "Tanaman memiliki otot seperti manusia", en: "The plant has muscles like a human" } },
          { text: { id: "Sisi batang yang teduh tumbuh lebih cepat, mendorong bunga ke cahaya", en: "The shaded side of the stem grows faster, pushing the flower towards the light" } },
          { text: { id: "Angin yang memutarnya", en: "The wind spins it" } }
        ],
        answerIdx: 1
      }
    ]
  }
};

import { ObjectData } from "../objects";

export const hujanData: ObjectData = {
  slug: "hujan",
  name: { id: "Hujan", en: "Rain" },
  icon: "🌧️",
  category: "alam",
  type: "alam",
  scientificName: "Pluvia",
  surahName: "Ar-Rum",
  surahReference: "30:48",
  unlockedAtPoints: 50,

  kosakata: [
    { arab: "مَطَرٌ", latin: "Matar", arti: "Hujan", artiEn: "Rain", contohAyat: "Hujan yang turun dari langit" },
    { arab: "سَحَابٌ", latin: "Sahab", arti: "Awan", artiEn: "Cloud", contohAyat: "Awan mendung tanda akan hujan" },
    { arab: "قَطْرَةٌ", latin: "Qatrah", arti: "Tetesan", artiEn: "Drop", contohAyat: "Tetesan air hujan" },
    { arab: "مَاءٌ", latin: "Ma'un", arti: "Air", artiEn: "Water", contohAyat: "Air hujan menyuburkan tanaman" }
  ],

  balita: {
    text: { id: "Tik tik tik! Bunyi hujan turun dari awan. Airnya segar sekali. Kalau hujan turun, tanaman bisa minum air! 🌧️", en: "Pitter patter! The sound of rain falling from the clouds. The water is so fresh. When it rains, plants can drink water! 🌧️" },
    audioTranscript: { id: "Horeee hujan turun! Rintik-rintik basahin bumi. Alhamdulillah, Allah kasih kita hujan biar bumi tidak kehausan! 🌧️", en: "Hooray, it's raining! Drizzling wetting the earth. Alhamdulillah, Allah gives us rain so the earth isn't thirsty! 🌧️" },
    quiz: {
      question: { id: "Air hujan turunnya dari mana?", en: "Where does rain water fall from?" },
      options: [
        { text: { id: "☁️ Dari awan di langit", en: "☁️ From clouds in the sky" } },
        { text: { id: "🚿 Dari keran air", en: "🚿 From a water faucet" } },
        { text: { id: "🪨 Dari dalam batu", en: "🪨 From inside a stone" } }
      ],
      answerIdx: 0
    }
  },

  anak: {
    text: { id: "Hujan terjadi saat uap air di awan sudah terlalu berat dan menetes ke Bumi. Hujan sangat penting supaya tumbuhan, hewan, dan manusia bisa mendapatkan air tawar bersih.", en: "Rain happens when water vapor in clouds gets too heavy and drips down to Earth. Rain is very important so plants, animals, and humans can get clean fresh water." },
    facts: [
      { id: "Awan yang berwarna hitam/gelap (mendung) tandanya membawa banyak sekali air hujan.", en: "Dark/black clouds (overcast) indicate they carry a lot of rain water." },
      { id: "Satu tetes hujan jatuhnya sangat cepat lho, seperti mobil yang sedang melaju pelan.", en: "One raindrop falls very fast, like a slow-moving car." },
      { id: "Bau wangi saat hujan turun mengenai tanah basah itu namanya 'Petrichor'.", en: "The sweet smell when rain hits wet soil is called 'Petrichor'." },
      { id: "Pelangi sering muncul setelah hujan karena cahaya matahari menembus sisa rintik hujan.", en: "A rainbow often appears after rain because sunlight passes through leftover raindrops." },
      { id: "Air hujan awalnya berasal dari laut, sungai, dan danau yang menguap ke atas langit.", en: "Rainwater originally comes from seas, rivers, and lakes that evaporate up into the sky." }
    ],
    quranVerse: {
      arabic: "وَأَنزَلْنَا مِنَ ٱلسَّمَآءِ مَآءً طَهُورًا",
      transliteration: "Wa anzalnaa minas-samaa'i maa'an tahuuraa",
      translation: { id: "Dan Kami turunkan dari langit air yang amat bersih (suci).", en: "And We send down from the sky pure water." },
      context: { id: "Tau nggak? Air laut itu sangat asin dan tidak bisa langsung diminum. Tapi Allah punya cara ajaib bernama 'Hujan'. Air laut yang menguap disaring Allah jadi air hujan yang tawar dan bersih untuk kita minum! Hebat kan!", en: "Did you know? Seawater is very salty and cannot be drunk directly. But Allah has a magical way called 'Rain'. Evaporated seawater is filtered by Allah into fresh and clean rain water for us to drink! Isn't that great!" }
    },
    quiz: {
      question: { id: "Apa nama bau wangi tanah basah yang tercium saat hujan pertama kali turun?", en: "What is the name of the sweet wet soil smell when it first rains?" },
      options: [
        { text: { id: "Petrichor", en: "Petrichor" } },
        { text: { id: "Parfum", en: "Perfume" } },
        { text: { id: "Klorofil", en: "Chlorophyll" } },
        { text: { id: "Fotosintesis", en: "Photosynthesis" } }
      ],
      answerIdx: 0
    }
  },

  explorer: {
    text: { id: "Hujan adalah bagian utama dari Siklus Hidrologi Bumi. Panas matahari menyebabkan air di lautan, danau, dan tumbuhan menguap menjadi gas (Evaporasi). Saat uap air naik ke langit yang lebih tinggi dan dingin, ia berubah wujud kembali menjadi titik-titik air kecil yang bergerombol membentuk awan (Kondensasi).\n\nKetika titik-titik air di awan bergabung menjadi lebih besar dan terlalu berat untuk ditahan oleh udara, gaya gravitasi menariknya jatuh kembali ke Bumi sebagai hujan (Presipitasi). Tanpa siklus pengolahan air alami yang terus berputar ini, daratan akan menjadi gurun kering tanpa kehidupan.\n\nUniknya, setiap tetes hujan memiliki bentuk seperti hamburger mini (rata di bawah) saat jatuh menembus udara, bukan seperti bentuk tetesan air mata yang sering kita gambar!", en: "Rain is a major part of the Earth's Hydrological Cycle. Sun's heat causes water in oceans, lakes, and plants to evaporate into gas (Evaporation). As water vapor rises to the higher, colder sky, it changes back into tiny water droplets clustering to form clouds (Condensation).\n\nWhen water droplets in clouds merge into bigger ones and get too heavy for the air to hold, gravity pulls them down to Earth as rain (Precipitation). Without this continuously rotating natural water recycling cycle, the land would be a dry lifeless desert.\n\nUniquely, every raindrop is shaped like a mini hamburger (flat on the bottom) as it falls through the air, not like the teardrop shape we often draw!" },
    anatomy: [
      { part: { id: "Evaporasi", en: "Evaporation" }, desc: { id: "Proses air cair berubah menjadi gas/uap naik ke atas.", en: "The process of liquid water turning into gas/vapor rising up." } },
      { part: { id: "Kondensasi", en: "Condensation" }, desc: { id: "Proses uap air mendingin dan berubah menjadi awan.", en: "The process of water vapor cooling and turning into clouds." } }
    ],
    wowFactor: { id: "Ilmu meteorologi modern merumuskan Siklus Air (evaporasi, pembentukan awan, presipitasi) baru pada abad ke-16. Hujan terbukti berasal dari air permukaan bumi yang diangkat, lalu disucikan di udara, dan diturunkan kembali dalam takaran yang seimbang agar bumi tidak tenggelam seluruhnya.\n\nAl-Qur'an sudah menjelaskan proses fisika awan dan hujan secara akurat ratusan tahun sebelumnya di Surah Az-Zukhruf ayat 11: 'Dan Yang menurunkan air dari langit menurut kadar (ukuran yang seimbang).' Ini membuktikan bahwa Pencipta alam semesta inilah yang menurunkan Al-Qur'an!", en: "Modern meteorology formulated the Water Cycle (evaporation, cloud formation, precipitation) only in the 16th century. Rain is proven to come from earth's surface water lifted, purified in the air, and sent down again in balanced measure so the earth doesn't completely drown.\n\nThe Qur'an had accurately explained the physics of clouds and rain hundreds of years earlier in Surah Az-Zukhruf verse 11: 'And who sends down rain from the sky in measured amounts.' This proves that the Creator of the universe is the one who sent down the Qur'an!" },
    quranVerse: {
      arabic: "وَٱلَّذِى نَزَّلَ مِنَ ٱلسَّمَآءِ مَآءًۢ بِقَدَرٍ فَأَنشَرْنَا بِهِۦ بَلْدَةً مَّيْتًا",
      transliteration: "Wal-ladzii nazzala minas-samaa'i maa'am biqadarin fa ansyarnaa bihii baldatam maytaa",
      translation: { id: "Dan Yang menurunkan air dari langit menurut kadar (yang diperlukan) lalu Kami hidupkan dengan air itu negeri yang mati.", en: "And who sends down rain from the sky in measured amounts, and We revive thereby a dead land." }
    },
    quiz: [
      {
        question: { id: "Apa sebutan ilmiah untuk proses jatuhnya air hujan dari awan?", en: "What is the scientific term for the process of rainwater falling from clouds?" },
        options: [{ text: { id: "Presipitasi", en: "Precipitation" } }, { text: { id: "Evaporasi", en: "Evaporation" } }, { text: { id: "Kondensasi", en: "Condensation" } }, { text: { id: "Sublimasi", en: "Sublimation" } }],
        answerIdx: 0
      },
      {
        question: { id: "Bentuk asli tetesan hujan saat jatuh menembus udara mirip seperti apa?", en: "What does the true shape of a falling raindrop look like?" },
        options: [{ text: { id: "Hamburger mini (rata di bagian bawah)", en: "Mini hamburger (flat on the bottom)" } }, { text: { id: "Bentuk air mata lancip", en: "Pointy teardrop shape" } }, { text: { id: "Bola bundar sempurna", en: "Perfectly round ball" } }, { text: { id: "Kotak es kubus", en: "Ice cube square" } }],
        answerIdx: 0
      },
      {
        question: { id: "Siklus di mana air bumi menguap, jadi awan, dan turun jadi hujan disebut?", en: "The cycle where earth's water evaporates, becomes clouds, and falls as rain is called?" },
        options: [{ text: { id: "Siklus Hidrologi", en: "Hydrological Cycle" } }, { text: { id: "Siklus Biologi", en: "Biological Cycle" } }, { text: { id: "Siklus Karbon", en: "Carbon Cycle" } }, { text: { id: "Siklus Tata Surya", en: "Solar System Cycle" } }],
        answerIdx: 0
      }
    ]
  }
};

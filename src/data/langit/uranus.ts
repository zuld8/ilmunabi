import { ObjectData } from "../objects";

export const uranusData: ObjectData = {
  slug: "uranus",
  name: { id: "Uranus", en: "Uranus" },
  icon: "🧊",
  category: "langit",
  type: "langit",
  scientificName: "Uranus",
  surahName: "Al-Baqarah",
  surahReference: "2:29",
  unlockedAtPoints: 50,
  kosakata: [
    { arab: "أُورَانُوس", latin: "Uuraanuus", arti: "Uranus", artiEn: "Uranus", contohAyat: "Planet Uranus berwarna biru kehijauan yang unik." }
  ],
  balita: {
    text: { id: "Planet ini suka berguling! Nama planet biru muda ini Uranus! 🧊", en: "This planet likes to roll! The name of this light blue planet is Uranus! 🧊" },
    audioTranscript: { id: "Uranus adalah planet yang tiduran! Dia berputar seperti bola yang menggelinding ke samping.", en: "Uranus is a planet that lays down! It spins like a ball rolling on its side." },
    quiz: {
      question: { id: "Bagaimana cara planet Uranus berputar?", en: "How does the planet Uranus spin?" },
      options: [
        { text: { id: "Melompat-lompat", en: "Jumping around" } },
        { text: { id: "Menggelinding menyamping", en: "Rolling sideways" } },
        { text: { id: "Berdiri tegak", en: "Standing straight" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Uranus juga Raksasa Es yang sangat dingin. Yang paling aneh, Uranus adalah satu-satunya planet yang miring hampir 90 derajat! Jadi, saat dia mengelilingi Matahari, ia terlihat seperti bola yang menggelinding rebahan.", en: "Uranus is also a very cold Ice Giant. The strangest thing is, Uranus is the only planet tilted almost 90 degrees! So, as it orbits the Sun, it looks like a ball rolling on its side." },
    facts: [
      { id: "Saking miringnya, musim dingin di Uranus bisa berlangsung selama 21 tahun!", en: "Because it's so tilted, winter on Uranus can last for 21 years!" },
      { id: "Uranus adalah planet pertama yang ditemukan dengan menggunakan teleskop oleh manusia.", en: "Uranus was the first planet discovered by humans using a telescope." },
      { id: "Uranus juga punya cincin seperti Saturnus, tapi sangat tipis dan gelap.", en: "Uranus also has rings like Saturn, but they are very thin and dark." }
    ],
    quranVerse: {
      arabic: "هُوَ الَّذِي خَلَقَ لَكُم مَّا فِي الْأَرْضِ جَمِيعًا ثُمَّ اسْتَوَىٰ إِلَى السَّمَاءِ فَسَوَّاهُنَّ سَبْعَ سَمَاوَاتٍ",
      transliteration: "Huwalladzii khalaqa lakum maa fil ardhi jamii'an tsummastawaa ilas-samaa'i fasawwaahunna sab'a samaawaat",
      translation: { id: "Dialah Allah, yang menjadikan segala yang ada di bumi untuk kamu dan Dia berkehendak (menciptakan) langit, lalu dijadikan-Nya tujuh langit.", en: "It is He who created for you all of that which is on the earth. Then He directed Himself to the heaven, and made them seven heavens." },
      context: { id: "Setiap planet punya jalannya masing-masing. Planet miring seperti Uranus membuktikan bahwa Allah bisa menciptakan segala bentuk dan lintasan di langit.", en: "Every planet has its own way. A tilted planet like Uranus proves that Allah can create all shapes and trajectories in the sky." }
    },
    quiz: {
      question: { id: "Apa yang membuat Uranus terlihat seperti bola yang rebahan?", en: "What makes Uranus look like a rolling ball on its side?" },
      options: [
        { text: { id: "Karena dia lelah", en: "Because it is tired" } },
        { text: { id: "Sumbunya sangat miring", en: "Its axis is highly tilted" } },
        { text: { id: "Karena didorong badai", en: "Because it is pushed by a storm" } }
      ],
      answerIdx: 1
    }
  },
  explorer: {
    text: { id: "Mengapa Uranus bisa miring begitu ekstrem? Ilmuwan menduga miliaran tahun lalu saat tata surya masih muda, sebuah planet sebesar Bumi menabrak Uranus dengan sangat keras hingga membuatnya jatuh ke samping. Meski begitu, Uranus tetap berada di jalur orbitnya yang sempurna, tanda bahwa hukum keseimbangan alam yang Allah buat tak akan pernah hancur secara acak.", en: "Why is Uranus tilted so extremely? Scientists suspect billions of years ago when the solar system was young, an Earth-sized planet crashed into Uranus so hard that it knocked it on its side. Even so, Uranus remains perfectly in its orbital path, a sign that the natural laws of balance created by Allah will never arbitrarily break down." },
    anatomy: [
      { part: { id: "Atmosfer Es", en: "Ice Atmosphere" }, desc: { id: "Lapisan gas hidrogen, helium, dan metana beku yang sangat-sangat dingin, mencapai -224 derajat Celcius.", en: "A layer of hydrogen, helium, and frozen methane gas that is extremely cold, reaching -224 degrees Celsius." } },
      { part: { id: "Mantel Es Cair", en: "Liquid Ice Mantle" }, desc: { id: "Air, amonia, dan metana bertekanan tinggi yang mengalir di atas inti batu.", en: "High-pressure water, ammonia, and methane flowing over the rock core." } }
    ],
    wowFactor: { id: "Tidak ada planet di tata surya kita yang se-dingin Uranus, menjadikannya pemegang rekor suhu planet terdingin meski Neptunus lebih jauh dari matahari!", en: "No planet in our solar system is as cold as Uranus, making it the record holder for the coldest planetary temperature even though Neptune is further from the sun!" },
    quranVerse: {
      arabic: "صُنْعَ اللَّهِ الَّذِي أَتْقَنَ كُلَّ شَيْءٍ",
      transliteration: "Shun'allahilladzii atqana kulla syay'",
      translation: { id: "Ciptaan Allah yang membuat segala sesuatu dengan kokoh (sempurna).", en: "The work of Allah, who perfected all things." }
    },
    quiz: [
      {
        question: { id: "Berapa rekor suhu terdingin di Uranus?", en: "What is the coldest temperature record on Uranus?" },
        options: [{ text: { id: "-50 derajat Celcius", en: "-50 degrees Celsius" } }, { text: { id: "-224 derajat Celcius", en: "-224 degrees Celsius" } }, { text: { id: "0 derajat Celcius", en: "0 degrees Celsius" } }],
        answerIdx: 1
      }
    ]
  }
};

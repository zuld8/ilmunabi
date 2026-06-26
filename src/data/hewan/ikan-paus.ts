import { ObjectData } from "../objects";

export const ikanPausData: ObjectData = {
  slug: "ikan-paus",
  name: { id: "Ikan Paus", en: "Whale" },
  icon: "🐋",
  category: "hewan",
  type: "hewan",
  scientificName: "Cetacea",
  surahName: "As-Saffat",
  surahReference: "37:142",
  unlockedAtPoints: 120,

  kosakata: [
    { arab: "حُوتٌ", latin: "Huut", arti: "Paus / Ikan Besar", artiEn: "Whale", contohAyat: "Ikan paus menelan Nabi Yunus." },
    { arab: "بَحْرٌ", latin: "Bahr", arti: "Laut", artiEn: "Sea", contohAyat: "Laut yang sangat luas." },
    { arab: "ظُلُمَاتٌ", latin: "Zhulumaat", arti: "Kegelapan", artiEn: "Darkness", contohAyat: "Dalam kegelapan perut ikan paus." },
    { arab: "تَسْبِيحٌ", latin: "Tasbiih", arti: "Maha Suci Allah", artiEn: "Glorification", contohAyat: "Nabi Yunus bertasbih di perut ikan." }
  ],

  balita: {
    text: { id: "Bwusssh! Ini Ikan Paus! Hewan paling beeesaaar di lautan! 🐋", en: "Sploosh! This is a Whale! The biiigggest animal in the ocean! 🐋" },
    audioTranscript: { id: "Wah, besar sekaliii! Ini paus laut teman-teman! Dia berenangnya jago banget. Kalau dia bernapas, airnya nyembur ke atas seperti air mancur! Bwussshh!", en: "Wow, it's sooo big! This is a whale, friends! It's great at swimming. When it breathes, water spouts up like a fountain! Sploosh!" },
    quiz: {
      question: { id: "Hewan apa yang besar sekali dan hidup di laut?", en: "Which animal is huge and lives in the ocean?" },
      options: [
        { text: { id: "🐈 Kucing", en: "🐈 Cat" } },
        { text: { id: "🐋 Paus", en: "🐋 Whale" } },
        { text: { id: "🐫 Unta", en: "🐫 Camel" } }
      ],
      answerIdx: 1
    }
  },

  anak: {
    text: { id: "Paus Biru adalah hewan terbesar yang pernah hidup di bumi, lebih besar dari Dinosaurus lho!", en: "The Blue Whale is the largest animal to ever live on Earth, even bigger than Dinosaurs!" },
    facts: [
      { id: "Paus sebenarnya bukan ikan, tapi mamalia seperti kita! Dia bernapas dengan paru-paru.", en: "Whales are actually not fish, but mammals like us! They breathe with lungs." },
      { id: "Lidah Paus Biru beratnya sama dengan berat satu ekor gajah! HAH?!", en: "A Blue Whale's tongue weighs as much as an elephant! WHAT?!" },
      { id: "Jantung Paus Biru besarnya seperti mobil kecil.", en: "A Blue Whale's heart is the size of a small car." },
      { id: "Paus bisa 'bernyanyi' di dalam air, dan suaranya terdengar sampai ribuan kilometer.", en: "Whales can 'sing' underwater, and their voices can be heard thousands of kilometers away." },
      { id: "Meskipun besar banget, paus biru cuma makan hewan-hewan kecil bernama krill.", en: "Despite being so big, blue whales only eat tiny animals called krill." }
    ],
    quranVerse: {
      arabic: "فَالْتَقَمَهُ الْحُوتُ وَهُوَ مُلِيمٌ",
      transliteration: "Faltaqamahul huutu wahuwa muliim",
      translation: { id: "Maka dia (Yunus) ditelan oleh ikan besar dalam keadaan tercela.", en: "Then the great fish swallowed him, while he was blameworthy." },
      context: { id: "Tau nggak? Nabi Yunus pernah ditelan oleh ikan paus raksasa lho! Di dalam perut ikan yang sangat gelap, Nabi Yunus berdoa memohon ampun pada Allah. Akhirnya paus itu memuntahkan Nabi Yunus dengan selamat. Hebatnya pertolongan Allah!", en: "Did you know? Prophet Yunus was once swallowed by a giant whale! In the dark belly of the whale, Prophet Yunus prayed for forgiveness to Allah. Finally, the whale safely spat him out. Allah's help is amazing!" }
    },
    quiz: {
      question: { id: "Nabi siapa yang ditelan oleh Ikan Paus besar?", en: "Which Prophet was swallowed by a huge Whale?" },
      options: [
        { text: { id: "Nabi Musa", en: "Prophet Musa" } },
        { text: { id: "Nabi Yunus", en: "Prophet Yunus" } },
        { text: { id: "Nabi Nuh", en: "Prophet Nuh" } },
        { text: { id: "Nabi Ibrahim", en: "Prophet Ibrahim" } }
      ],
      answerIdx: 1
    }
  },

  explorer: {
    text: { id: "Paus adalah keajaiban mamalia yang beradaptasi di laut. Mereka berdarah panas dan harus naik ke permukaan untuk menghirup oksigen melalui lubang sembur (blowhole) di atas kepala mereka.\n\nPaus Sperma bisa menyelam hingga kedalaman 3.000 meter untuk berburu cumi-cumi raksasa! Mereka bisa menahan napas selama 90 menit. Di kedalaman itu, tekanannya sangat ekstrem, cukup untuk meremukkan kapal selam militer, tapi paus tetap baik-baik saja.\n\nMereka memiliki lapisan lemak tebal (blubber) yang menjaga tubuh mereka tetap hangat di air laut yang membeku di kutub.", en: "Whales are a mammalian miracle adapted to the ocean. They are warm-blooded and must surface to breathe oxygen through the blowhole on top of their head.\n\nSperm Whales can dive up to 3,000 meters deep to hunt giant squids! They can hold their breath for 90 minutes. At that depth, the pressure is extreme, enough to crush a military submarine, but whales are perfectly fine.\n\nThey have a thick layer of fat (blubber) that keeps their body warm in freezing polar ocean waters." },
    anatomy: [
      { part: { id: "Lubang Sembur (Blowhole)", en: "Blowhole" }, desc: { id: "Hidung di atas kepala, otomatis tertutup rapat saat menyelam.", en: "Nose on top of the head, automatically tightly closes when diving." } },
      { part: { id: "Baleen", en: "Baleen" }, desc: { id: "Saringan seperti sikat di mulut Paus Biru untuk menangkap krill.", en: "Brush-like filter in Blue Whale mouths to catch krill." } }
    ],
    wowFactor: { id: "Sains baru mengetahui anatomi perut paus besar di era modern. Perut mereka tidak langsung mencerna makanan dengan asam kuat seperti manusia, melainkan punya beberapa ruang (chamber) berlapis lendir khusus pelindung.\n\nRibuan tahun sebelum ilmu biologi laut ada, Al-Qur'an secara menakjubkan menceritakan Nabi Yunus (Dzun Nuun) selamat di dalam perut paus berhari-hari. Beliau berdoa di tiga kegelapan: gelapnya malam, gelapnya dasar lautan dalam, dan gelapnya perut ikan ('Zhulumaat'). Ini adalah bukti mukjizat penjagaan Allah yang tak terbatas oleh batas-batas sains!", en: "Science only recently discovered the anatomy of large whale stomachs in the modern era. Their stomachs don't immediately digest food with strong acid like humans, but have several chambers lined with special protective mucus.\n\nThousands of years before marine biology existed, the Qur'an amazingly recounted Prophet Yunus surviving in the whale's belly for days. He prayed in three darknesses: the darkness of the night, the darkness of the deep ocean floor, and the darkness of the fish's belly ('Zhulumaat'). This is proof of Allah's miraculous protection unbounded by scientific limits!" },
    quranVerse: {
      arabic: "فَنَادَىٰ فِي الظُّلُمَاتِ أَن لَّا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ",
      transliteration: "Fa naada fiizh-zhulumaati an laa ilaaha illaa anta subhaanaka innii kuntu minazh-zhaalimiin",
      translation: { id: "Maka dia menyeru dalam keadaan yang sangat gelap: 'Tidak ada Tuhan selain Engkau. Maha Suci Engkau, sesungguhnya aku termasuk orang-orang yang zalim.'", en: "And he called out within the darknesses, 'There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers.'" }
    },
    quiz: [
      {
        question: { id: "Apa yang membuat Paus berbeda dari ikan pada umumnya?", en: "What makes Whales different from common fish?" },
        options: [{ text: { id: "Mereka bernapas dengan insang", en: "They breathe with gills" } }, { text: { id: "Mereka adalah mamalia yang bernapas dengan paru-paru", en: "They are mammals that breathe with lungs" } }, { text: { id: "Mereka bertelur", en: "They lay eggs" } }, { text: { id: "Mereka berdarah dingin", en: "They are cold-blooded" } }],
        answerIdx: 1
      },
      {
        question: { id: "Doa Nabi Yunus di perut ikan paus diucapkan di dalam...", en: "Prophet Yunus's prayer in the whale's belly was uttered in..." },
        options: [{ text: { id: "Keramaian", en: "Crowd" } }, { text: { id: "Kegelapan (Zhulumaat)", en: "Darkness (Zhulumaat)" } }, { text: { id: "Cahaya terang", en: "Bright light" } }, { text: { id: "Pulau kosong", en: "Empty island" } }],
        answerIdx: 1
      },
      {
        question: { id: "Paus menyaring makanannya yang kecil-kecil (krill) menggunakan...", en: "Whales filter their tiny food (krill) using..." },
        options: [{ text: { id: "Gigi tajam", en: "Sharp teeth" } }, { text: { id: "Baleen", en: "Baleen" } }, { text: { id: "Lidah", en: "Tongue" } }, { text: { id: "Taring", en: "Fangs" } }],
        answerIdx: 1
      }
    ]
  }
};

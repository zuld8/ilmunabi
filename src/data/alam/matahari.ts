import { ObjectData } from "../objects";

export const matahariData: ObjectData = {
  slug: "matahari",
  name: { id: "Matahari", en: "Sun" },
  icon: "☀️",
  category: "alam",
  type: "langit",
  scientificName: "Sol (Bintang Tipe-G)",
  surahName: "Yunus",
  surahReference: "10:5",
  unlockedAtPoints: 50,
  kosakata: [
    { arab: "شَمْس", latin: "Syams", arti: "Matahari", artiEn: "Sun", contohAyat: "هُوَ الَّذِي جَعَلَ الشَّمْسَ ضِيَاءً" }
  ],
  balita: {
    text: { id: "Selamat pagi Matahari! ☀️ Matahari berwarna kuning terang, dia membangunkan kita setiap pagi biar semangat!", en: "Good morning Sun! ☀️ The sun is bright yellow, it wakes us up every morning so we're cheerful!" },
    audioTranscript: { id: "Matahari panas dan terang benderang. Jangan melihat matahari langsung pakai mata ya, karena silau sekali!", en: "The sun is hot and super bright. Don't look at the sun directly with your eyes, because it's too glaring!" },
    quiz: {
      question: { id: "Kalau matahari sudah terbit tinggi di langit, itu tandanya hari sudah?", en: "When the sun has risen high in the sky, it means the day is?" },
      options: [
        { text: { id: "Malam", en: "Night" } },
        { text: { id: "Pagi/Siang", en: "Morning/Noon" } },
        { text: { id: "Hujan", en: "Rainy" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Matahari adalah bola api super besar yang menyinari seluruh Bumi kita! Kalau tidak ada Matahari, Bumi akan menjadi sangat gelap gulita dan sedingin es. Tumbuhan juga butuh matahari untuk membuat makanan mereka sendiri.", en: "The sun is a super big fireball that lights up our entire Earth! If there were no Sun, the Earth would become pitch black and cold as ice. Plants also need the sun to make their own food." },
    facts: [
      { id: "Matahari itu sangat raksasa! Butuh lebih dari 1 juta planet sebesar Bumi untuk mengisi ruang di dalam Matahari.", en: "The sun is incredibly giant! It would take over 1 million Earth-sized planets to fill the space inside the Sun." },
      { id: "Cahaya matahari butuh waktu 8 menit untuk terbang dari luar angkasa sampai ke mata kita di Bumi.", en: "Sunlight takes 8 minutes to travel from space to our eyes on Earth." },
      { id: "Matahari sebenarnya adalah sebuah bintang raksasa! Dia kelihatan lebih besar karena paling dekat dengan Bumi kita.", en: "The sun is actually a giant star! It looks bigger because it's the closest one to our Earth." }
    ],
    quranVerse: {
      arabic: "هُوَ الَّذِي جَعَلَ الشَّمْسَ ضِيَاءً وَالْقَمَرَ نُورًا",
      transliteration: "Huwal-ladzii ja'alasy-syamsa dhiyaa'aw wal-qamara nuuraa",
      translation: { id: "Dialah yang menjadikan matahari bersinar dan bulan bercahaya.", en: "It is He who made the sun a shining light and the moon a derived light." },
      context: { id: "Allah menciptakan matahari yang mengeluarkan cahayanya sendiri secara aktif (dhiyaa) seperti lampu senter menyala.", en: "Allah created the sun which emits its own light actively (dhiyaa) like a turned-on flashlight." }
    },
    quiz: {
      question: { id: "Siapa yang butuh cahaya matahari untuk memasak makanannya (fotosintesis)?", en: "Who needs sunlight to cook their food (photosynthesis)?" },
      options: [
        { text: { id: "Hewan Kucing", en: "Cats" } },
        { text: { id: "Tumbuh-tumbuhan (Pohon)", en: "Plants (Trees)" } },
        { text: { id: "Batu-batuan", en: "Rocks" } }
      ],
      answerIdx: 1
    }
  },
  explorer: {
    text: { id: "Matahari adalah pusat Tata Surya, massa terbesarnya menghasilkan tarikan gravitasi super kuat yang menahan orbit 8 planet. Yang ajaibnya, Al-Qur'an membedakan istilah 'Matahari' sebagai Dhiyaa (sumber cahaya yang membakar/menyala dari dalam dirinya) dan 'Bulan' sebagai Nuur (cahaya pantulan yang tidak menyala), ribuan tahun sebelum ilmu fisika kuantum mempelajari ini!", en: "The Sun is the center of the Solar System, its massive mass generates a super strong gravitational pull that holds the orbit of 8 planets. Magically, the Quran distinguishes the term 'Sun' as Dhiyaa (a source of light that burns/ignites from within itself) and 'Moon' as Nuur (reflected light that doesn't burn), thousands of years before quantum physics studied this!" },
    anatomy: [
      { part: { id: "Inti (Core)", en: "Core" }, desc: { id: "Pusat matahari dengan suhu 15 juta derajat Celcius, tempat fusi hidrogen menjadi helium.", en: "The center of the sun with a temperature of 15 million degrees Celsius, where hydrogen fuses into helium." } },
      { part: { id: "Fotosfer", en: "Photosphere" }, desc: { id: "Permukaan kuning yang kita lihat, yang melepaskan partikel cahaya ke bumi.", en: "The yellow surface we see, which releases light particles to earth." } }
    ],
    wowFactor: { id: "HAH?! Matahari ternyata selalu bergerak 'lari' mengelilingi pusat galaksi Bima Sakti dengan kecepatan 828.000 km per jam sambil menyeret semua planet bersamanya! Fakta ini persis dengan Al-Qur'an (Surat Yasin: 38) yang berbunyi 'Dan matahari berjalan (tajri) di tempat peredarannya'.", en: "WOW?! The Sun is actually always 'running' around the center of the Milky Way galaxy at a speed of 828,000 km per hour while dragging all the planets with it! This fact exactly matches the Quran (Surah Yasin: 38) which says 'And the sun runs (tajri) to its resting place'." },
    quranVerse: {
      arabic: "وَالشَّمْسُ تَجْرِي لِمُسْتَقَرٍّ لَهَا ۚ ذَٰلِكَ تَقْدِيرُ الْعَزِيزِ الْعَلِيمِ",
      transliteration: "Wasy-syamsu tajrii limustaqarril-lahaa, dzaalika taqdiirul-'aziizil-'aliim",
      translation: { id: "Dan matahari berjalan di tempat peredarannya. Demikianlah ketetapan Yang Maha Perkasa lagi Maha Mengetahui.", en: "And the sun runs [on course] toward its stopping point. That is the determination of the Exalted in Might, the Knowing." }
    },
    quiz: [
      {
        question: { id: "Dalam Al-Qur'an, kata yang digunakan untuk cahaya matahari (sumber api yang terbakar) adalah?", en: "In the Quran, the word used for sunlight (a burning fire source) is?" },
        options: [
          { text: { id: "Nuur (cahaya pantulan)", en: "Nuur (reflected light)" } },
          { text: { id: "Dhiyaa (cahaya menyala)", en: "Dhiyaa (burning light)" } },
          { text: { id: "Siraj (bayangan)", en: "Siraj (shadow)" } }
        ],
        answerIdx: 1
      }
    ]
  }
};

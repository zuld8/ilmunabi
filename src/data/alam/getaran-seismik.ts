import { ObjectData } from "../objects";

export const getaranSeismikData: ObjectData = {
  slug: "getaran-seismik",
  name: { id: "Gempa Bumi (Seismik)", en: "Earthquake (Seismic)" },
  icon: "🫨",
  category: "alam",
  type: "alam",
  scientificName: "Seismic Waves",
  surahName: "Al-Zalzalah",
  surahReference: "Al-Zalzalah:1",
  unlockedAtPoints: 10,
  kosakata: [
    { arab: "زِلْزَالٌ", latin: "Zilzaal", arti: "Gempa", artiEn: "Earthquake" },
    { arab: "أَرْضٌ", latin: "Ardhun", arti: "Bumi", artiEn: "Earth" },
    { arab: "هَزَّةٌ", latin: "Hazzah", arti: "Getaran", artiEn: "Tremor" },
    { arab: "قُوَّةٌ", latin: "Quwwah", arti: "Kekuatan", artiEn: "Power" }
  ],
  balita: {
    text: { id: "Duk, duk, duk! Wah, tanahnya bergoyang seperti jelly! Itu namanya gempa bumi. Di dalam tanah, batu-batu raksasa saling bergeser. Kalau ada gempa, kita harus berlindung di bawah meja ya!", en: "Thump, thump, thump! Wow, the ground is shaking like jelly! That's called an earthquake. Deep underground, giant rocks slide past each other. If there's an earthquake, we must hide under a table!" },
    audioTranscript: { id: "Gempa bumi membuat tanah bergoyang. Jangan lupa berlindung!", en: "An earthquake makes the ground shake. Don't forget to take cover!" },
    quiz: {
      question: { id: "Apa yang harus dilakukan saat gempa bumi terjadi di dalam rumah?", en: "What should you do when an earthquake happens inside the house?" },
      options: [
        { text: { id: "Berdiri di dekat kaca", en: "Stand near glass" } },
        { text: { id: "Berlindung di bawah meja yang kuat", en: "Take cover under a sturdy table" } },
        { text: { id: "Menonton TV", en: "Watch TV" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Bumi kita seperti punya puzzle raksasa di bawah tanah, namanya lempeng tektonik. Terkadang, puzzle ini saling bergesekan atau bertabrakan, blam! Tabrakan itu melepaskan energi yang sangat besar sampai ke permukaan. Al-Qur'an punya satu surat khusus yang menceritakan tentang gempa, yaitu surat Az-Zalzalah!", en: "Our earth is like having a giant puzzle underground, called tectonic plates. Sometimes, these puzzle pieces rub or crash against each other, blam! That crash releases huge energy up to the surface. The Quran has a whole chapter about earthquakes, called Surah Az-Zalzalah!" },
    facts: [
      { id: "Getaran gempa bumi disebut gelombang seismik.", en: "Earthquake tremors are called seismic waves." },
      { id: "Alat untuk mengukur kekuatan gempa bernama Seismograf.", en: "The tool to measure earthquake strength is called a Seismograph." },
      { id: "Bumi tersusun dari lapisan tanah berbatu yang bisa bergerak.", en: "The earth is made of rocky ground layers that can move." },
      { id: "Gunung diciptakan Allah sebagai pasak untuk mengurangi guncangan.", en: "Mountains were created by Allah as pegs to reduce shaking." },
      { id: "Gempa di bawah laut bisa memicu ombak besar (Tsunami).", en: "Underwater earthquakes can trigger huge waves (Tsunami)." }
    ],
    quranVerse: {
      arabic: "إِذَا زُلْزِلَتِ ٱلْأَرْضُ زِلْزَالَهَا",
      transliteration: "Ithaa zulzilatil-ardhu zilzaalahaa",
      translation: { id: "Apabila bumi digoncangkan dengan goncangan (yang dahsyat).", en: "When the earth is shaken with its (final) earthquake." }
    },
    quiz: {
      question: { id: "Alat apa yang digunakan oleh ilmuwan untuk mengukur gempa?", en: "What tool do scientists use to measure earthquakes?" },
      options: [
        { text: { id: "Termometer", en: "Thermometer" } },
        { text: { id: "Teleskop", en: "Telescope" } },
        { text: { id: "Seismograf", en: "Seismograph" } }
      ],
      answerIdx: 2
    }
  },
  explorer: {
    text: { id: "Gempa terjadi ketika Lempeng Tektonik di Litosfer bertumbukan pada Garis Patahan (Fault). Gelombang seismiknya terbagi jadi Gelombang P (Primer) dan S (Sekunder) yang merambat ke seluruh bumi. Menariknya, kata 'Zalzala' dalam bahasa Arab memiliki akar kata berulang 'Zal-Zal', yang secara linguistik menggambarkan getaran (gelombang bolak-balik) yang berulang-ulang, persis seperti sifat fisika gelombang gempa!", en: "Earthquakes occur when Tectonic Plates in the Lithosphere collide at a Fault line. Its seismic waves are divided into P (Primary) and S (Secondary) waves that travel through the earth. Interestingly, the Arabic word 'Zalzala' has a repeating root 'Zal-Zal', which linguistically describes repeated shaking (back-and-forth waves), exactly like the physical nature of earthquake waves!" },
    anatomy: [
      { part: { id: "Lempeng Tektonik", en: "Tectonic Plates" }, desc: { id: "Potongan raksasa kerak bumi yang mengapung di atas magma cair.", en: "Giant pieces of earth's crust floating on liquid magma." } },
      { part: { id: "Garis Patahan", en: "Fault Line" }, desc: { id: "Retakan di bumi tempat dua lempeng saling bergesekan.", en: "A crack in the earth where two plates rub against each other." } }
    ],
    wowFactor: { id: "Hah?! Ada gempa mikro yang terjadi ribuan kali setiap hari, tapi terlalu kecil untuk kita rasakan! Bumi ini sebenarnya selalu bergetar pelan karena isi perut bumi sangat panas dan dinamis.", en: "What?! There are micro-earthquakes happening thousands of times every day, but they are too small for us to feel! The earth is actually always vibrating softly because its core is very hot and dynamic." },
    quranVerse: {
      arabic: "وَأَلْقَىٰ فِى ٱلْأَرْضِ رَوَٰسِىَ أَن تَمِيدَ بِكُمْ",
      transliteration: "Wa alqaa fil-ardhi rawaasiya an tamiida bikum",
      translation: { id: "Dan Dia menancapkan gunung-gunung di bumi supaya bumi itu tidak goncang bersama kamu.", en: "And He has cast into the earth firmly set mountains, lest it shift with you." }
    },
    quiz: [
      {
        question: { id: "Lapisan bumi yang keras dan pecah seperti puzzle disebut apa?", en: "The hard, broken puzzle-like layer of the earth is called?" },
        options: [
          { text: { id: "Atmosfer", en: "Atmosphere" } },
          { text: { id: "Lempeng Tektonik (Litosfer)", en: "Tectonic Plates (Lithosphere)" } },
          { text: { id: "Ionosfer", en: "Ionosphere" } }
        ],
        answerIdx: 1
      },
      {
        question: { id: "Menurut Al-Qur'an, apa benda yang diciptakan Allah untuk mengurangi guncangan bumi?", en: "According to the Quran, what object did Allah create to reduce the earth's shaking?" },
        options: [
          { text: { id: "Pohon besar", en: "Large trees" } },
          { text: { id: "Gunung-gunung (Rawasiya)", en: "Mountains (Rawasiya)" } },
          { text: { id: "Lautan luas", en: "Vast oceans" } }
        ],
        answerIdx: 1
      },
      {
        question: { id: "Kata 'Zal-Zal' menggambarkan gerakan apa dalam bahasa Arab?", en: "What movement does the word 'Zal-Zal' describe in Arabic?" },
        options: [
          { text: { id: "Melayang lambat", en: "Slow floating" } },
          { text: { id: "Getaran bolak-balik yang berulang", en: "Repeated back-and-forth vibration" } },
          { text: { id: "Jatuh dari atas", en: "Falling from above" } }
        ],
        answerIdx: 1
      }
    ]
  }
};

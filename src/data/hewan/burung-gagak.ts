import { ObjectData } from "../objects";

export const burungGagakData: ObjectData = {
  slug: "burung-gagak",
  name: { id: "Burung Gagak", en: "Crow / Raven" },
  icon: "🐦‍⬛", 
  category: "hewan",
  type: "hewan",
  scientificName: "Corvus",
  surahName: "Al-Ma'idah",
  surahReference: "5:31", 
  unlockedAtPoints: 50, 
  
  kosakata: [
    { arab: "غُرَابٌ", latin: "Ghuraab", arti: "Burung Gagak", artiEn: "Crow/Raven", contohAyat: "Allah mengutus seekor gagak" },
    { arab: "يَبْحَثُ", latin: "Yabhatsu", arti: "Menggali", artiEn: "Digging", contohAyat: "Gagak menggali di bumi" },
    { arab: "يُوَارِي", latin: "Yuwaarii", arti: "Menguburkan/Menutupi", artiEn: "Burying/Covering", contohAyat: "Untuk menunjukkan cara menguburkan mayat" },
    { arab: "أَخٌ", latin: "Akh", arti: "Saudara", artiEn: "Brother", contohAyat: "Mayat saudaranya" }
  ],
  
  balita: {
    text: { id: "Kaaak... kaaak! Ini burung Gagak. Bulunya hitam semua dan dia itu sangat pintar lho! 🐦‍⬛✨", en: "Caw... caw! This is the Crow. Its feathers are all black and it's very smart! 🐦‍⬛✨" },
    audioTranscript: { id: "Coba dengar, kaaak kaaak! Itu suara burung gagak terbang. Gagak suka bermain dan pintar sekali cari makan.", en: "Listen, caw caw! That's the sound of a flying crow. Crows love to play and are very smart at finding food." },
    quiz: {
      question: { id: "Apa warna bulu burung gagak?", en: "What color are the crow's feathers?" },
      options: [
        { text: { id: "🖤 Hitam", en: "🖤 Black" } },
        { text: { id: "🤍 Putih", en: "🤍 White" } },
        { text: { id: "💛 Kuning", en: "💛 Yellow" } }
      ],
      answerIdx: 0
    }
  },
  
  anak: {
    text: { id: "Gagak adalah 'Albert Einstein' di dunia burung! Dia bisa memecahkan teka-teki sulit yang tidak bisa dilakukan hewan lain.", en: "The crow is the 'Albert Einstein' of the bird world! It can solve hard puzzles that other animals can't." },
    facts: [
      { id: "Gagak bisa menggunakan alat! Mereka suka membengkokkan kawat jadi kail untuk mengambil makanan.", en: "Crows can use tools! They like bending wires into hooks to get food." },
      { id: "Mereka mengingat wajah manusia. Kalau kamu jahat pada gagak, dia akan mengingat wajahmu selamanya!", en: "They remember human faces. If you are mean to a crow, it will remember your face forever!" },
      { id: "Gagak menjatuhkan kacang keras ke jalan raya agar dilindas mobil, lalu menunggu lampu merah untuk memungut isinya.", en: "Crows drop hard nuts on roads for cars to crush, then wait for the red light to pick up the inside." },
      { id: "Ketika seekor gagak mati, gagak lain akan berkumpul seperti sedang mengadakan 'upacara pemakaman'.", en: "When a crow dies, other crows will gather like they are holding a 'funeral'." },
      { id: "Otak gagak sangat besar jika dibandingkan dengan ukuran tubuhnya, sama seperti simpanse.", en: "A crow's brain is very large compared to its body size, similar to a chimpanzee." }
    ],
    quranVerse: {
      arabic: "فَبَعَثَ اللَّهُ غُرَابًا يَبْحَثُ فِي الْأَرْضِ لِيُرِيَهُ كَيْفَ يُوَارِي سَوْءَةَ أَخِيهِ",
      transliteration: "Faba'atsal-laahu ghuraabany-yabhatsu fil-ardhi liyuriyahu kayfa yuwaarii saw'ata akhiih.",
      translation: { id: "Kemudian Allah menyuruh seekor burung gagak menggali-gali di bumi untuk memperlihatkan kepadanya (Qabil) bagaimana seharusnya menguburkan mayat saudaranya.", en: "Then Allah sent a crow searching in the ground to show him how to hide the disgrace of his brother." },
      context: { id: "Tau nggak? Saat manusia pertama kali kebingungan bagaimana menguburkan orang meninggal, Allah mengirimkan burung paling pintar ini sebagai 'guru' pertama untuk manusia!", en: "Did you know? When humans were first confused about how to bury the dead, Allah sent this smartest bird as the first 'teacher' for mankind!" }
    },
    quiz: {
      question: { id: "Apa bukti bahwa gagak sangat pintar?", en: "What is the proof that crows are very smart?" },
      options: [
        { text: { id: "Bisa mengingat wajah orang jahat", en: "Can remember the faces of bad people" } },
        { text: { id: "Bisa berenang di laut", en: "Can swim in the sea" } },
        { text: { id: "Bisa menyanyi lagu pop", en: "Can sing pop songs" } },
        { text: { id: "Bisa berubah warna", en: "Can change colors" } }
      ],
      answerIdx: 0
    }
  },
  
  explorer: {
    text: { 
      id: "Keluarga Corvidae (gagak, raven, jalak) adalah kelompok burung dengan kecerdasan paling tinggi di planet ini. Sains membuktikan bahwa gagak memahami konsep perpindahan air (hukum Archimedes)! Jika ada makanan mengapung di tabung sempit yang airnya dangkal, gagak akan memasukkan batu-batu ke dalam tabung agar permukaan air naik.\n\nSistem komunikasi gagak juga sangat rumit. Mereka punya 'dialek' bahasa yang berbeda di setiap daerah. Selain itu, gagak adalah satu dari sedikit hewan yang terbukti memiliki 'Theory of Mind' (kemampuan membayangkan sudut pandang pikiran pihak lain); misalnya berpura-pura menyembunyikan makanan di satu tempat padahal menaruhnya di tempat lain, hanya untuk menipu gagak pencuri yang mengintipnya.\n\nBurung ini sangat luar biasa cerdas!", 
      en: "The Corvidae family (crows, ravens, jays) is the group of birds with the highest intelligence on the planet. Science proved that crows understand water displacement (Archimedes' principle)! If food floats in a narrow tube with shallow water, the crow drops stones into the tube to raise the water level.\n\nThe communication system of crows is highly complex. They have different 'dialects' in different regions. Additionally, crows are one of the few animals proven to have 'Theory of Mind' (ability to imagine another's perspective); for example, pretending to hide food in one spot while actually placing it elsewhere, just to trick a thief crow spying on them.\n\nThis bird is remarkably intelligent!" 
    },
    anatomy: [
      { part: { id: "Korteks Otak Depan", en: "Nidopallium (Forebrain)" }, desc: { id: "Area otak gagak sangat padat neuron, mengalahkan monyet dalam kepadatan sel otak pemecah masalah.", en: "The crow's brain area is densely packed with neurons, beating monkeys in problem-solving brain cell density." } },
      { part: { id: "Paruh Serbaguna", en: "Versatile Beak" }, desc: { id: "Cukup kuat untuk memecah tulang, tapi cukup presisi untuk membengkokkan kawat jadi kail.", en: "Strong enough to crack bones, but precise enough to bend wire into a hook." } }
    ],
    wowFactor: { 
      id: "Fakta WOW menakjubkan: Mengapa Allah memilih burung gagak dalam Surah Al-Ma'idah (5:31) untuk mengajarkan manusia (Qabil) cara MENGUBURKAN mayat Habil? Sains biologi dan perilaku hewan modern sangat terkejut menemukan bahwa SATU-SATUNYA burung yang secara alami melakukan 'pemakaman' atau merespons kematian kawanannya secara terorganisir adalah burung gagak!\n\nSaat ada gagak mati, mereka tidak memakannya. Gagak lain akan terbang mengitari, memanggil kawanannya, diam berduka (crow funeral), lalu sering menutupi bangkai tersebut dengan tanah, rumput, atau dahan berdaun! Ribuan tahun lalu, Al-Qur'an secara ilmiah menunjuk hewan yang paling tepat di alam semesta ini sebagai guru untuk mengajarkan prosedur penguburan!", 
      en: "Astonishing WOW Fact: Why did Allah choose the crow in Surah Al-Ma'idah (5:31) to teach the human (Cain) how to BURY the corpse of Abel? Modern biological and animal behavior science is shocked to find that the ONLY bird that naturally performs 'funerals' or responds to a flock member's death in an organized way is the crow!\n\nWhen a crow dies, they don't eat it. Other crows fly around, call their flock, stand in silent mourning (crow funeral), and often cover the corpse with dirt, grass, or leafy branches! Thousands of years ago, the Qur'an scientifically appointed the most precise animal in the universe as the teacher to demonstrate burial procedures!" 
    },
    quranVerse: {
      arabic: "قَالَ يَا وَيْلَتَا أَعَجَزْتُ أَنْ أَكُونَ مِثْلَ هَٰذَا الْغُرَابِ فَأُوَارِيَ سَوْءَةَ أَخِي ۖ فَأَصْبَحَ مِنَ النَّادِمِينَ",
      transliteration: "Qaala yaa waylataa a'ajaztu an akuuna mitsla haadzal-ghuraabi fa uwaariya saw'ata akhii. Fa ashbaha minan-naadimiin.",
      translation: { id: "Berkatalah Qabil: 'Aduhai celaka aku, mengapa aku tidak mampu berbuat seperti burung gagak ini, lalu aku dapat menguburkan mayat saudaraku ini?' Karena itu jadilah dia seorang diantara orang-orang yang menyesal.", en: "He said, 'O woe to me! Have I failed to be like this crow and hide the body of my brother?' And he became of the regretful." }
    },
    quiz: [
      {
        question: { id: "Hukum fisika apa yang dipahami gagak saat menaruh batu ke dalam air untuk menaikkan makanan?", en: "What physics law do crows understand when dropping stones into water to raise food?" },
        options: [{ text: { id: "Perpindahan air / Hukum Archimedes", en: "Water displacement / Archimedes' principle" } }, { text: { id: "Hukum Gravitasi Newton", en: "Newton's Law of Gravity" } }, { text: { id: "Teori Relativitas", en: "Theory of Relativity" } }, { text: { id: "Hukum Termodinamika", en: "Law of Thermodynamics" } }],
        answerIdx: 0
      },
      {
        question: { id: "Apa yang dilakukan kawanan gagak saat melihat ada gagak lain yang mati?", en: "What do a flock of crows do when they see another crow has died?" },
        options: [{ text: { id: "Berkumpul melakukan 'upacara pemakaman'", en: "Gather to hold a 'funeral ceremony'" } }, { text: { id: "Memakan bangkainya", en: "Eat its corpse" } }, { text: { id: "Membawanya terbang ke bulan", en: "Carry it flying to the moon" } }, { text: { id: "Membuat sarang baru di atasnya", en: "Build a new nest on top of it" } }],
        answerIdx: 0
      },
      {
        question: { id: "Dalam kisah Qabil dan Habil, burung gagak diutus Allah untuk mengajarkan apa kepada manusia?", en: "In the story of Cain and Abel, what did Allah send the crow to teach mankind?" },
        options: [{ text: { id: "Cara menguburkan orang yang meninggal", en: "How to bury a dead person" } }, { text: { id: "Cara membuat api", en: "How to make a fire" } }, { text: { id: "Cara menanam gandum", en: "How to plant wheat" } }, { text: { id: "Cara menggunakan tombak", en: "How to use a spear" } }],
        answerIdx: 0
      }
    ]
  }
};

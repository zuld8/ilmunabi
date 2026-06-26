import { ObjectData } from "../objects";

export const ularData: ObjectData = {
  slug: "ular",
  name: { id: "Ular", en: "Snake" },
  icon: "🐍", 
  category: "hewan",
  type: "hewan",
  scientificName: "Serpentes",
  surahName: "Taha",
  surahReference: "20:20", 
  unlockedAtPoints: 50, 
  
  kosakata: [
    { arab: "حَيَّةٌ", latin: "Hayyah", arti: "Ular", artiEn: "Snake", contohAyat: "Tongkat Nabi Musa berubah menjadi ular" },
    { arab: "ثُعْبَانٌ", latin: "Tsu'baan", arti: "Ular Besar/Naga", artiEn: "Large Snake/Serpent", contohAyat: "Maka jadilah ia ular besar yang nyata" },
    { arab: "عَصَا", latin: "'Ashaa", arti: "Tongkat", artiEn: "Staff/Stick", contohAyat: "Lemparkan tongkatmu!" },
    { arab: "تَسْعَىٰ", latin: "Tas'aa", arti: "Merayap dengan cepat", artiEn: "Slithering fast", contohAyat: "Ular itu bergerak sangat cepat" }
  ],
  
  balita: {
    text: { id: "Sssssst... ini hewan ular! Dia bergerak merayap dengan perutnya karena tidak punya kaki. 🐍", en: "Sssssst... this is a snake! It slithers on its belly because it has no legs. 🐍" },
    audioTranscript: { id: "Ssst ssst! Ular suka menjulurkan lidahnya untuk mencium bau. Dia sangat panjang! Jangan dekat-dekat ular liar di hutan ya!", en: "Ssst ssst! The snake likes to stick out its tongue to smell. It is very long! Don't get near wild snakes in the forest!" },
    quiz: {
      question: { id: "Bagaimana ular berjalan merayap di tanah?", en: "How does the snake slither on the ground?" },
      options: [
        { text: { id: "🐍 Menggunakan perutnya", en: "🐍 Using its belly" } },
        { text: { id: "👣 Menggunakan kakinya", en: "👣 Using its legs" } },
        { text: { id: "🪽 Menggunakan sayapnya", en: "🪽 Using its wings" } }
      ],
      answerIdx: 0
    }
  },
  
  anak: {
    text: { id: "Ular adalah hewan misterius dan sakti! Dia bisa menelan mangsa yang jauh lebih besar dari kepalanya.", en: "Snakes are mysterious and magical animals! They can swallow prey much bigger than their heads." },
    facts: [
      { id: "Ular tidak punya kelopak mata, jadi mereka selalu terbangun dan tidak pernah berkedip!", en: "Snakes have no eyelids, so they always look awake and never blink!" },
      { id: "Mereka mencium bau udara menggunakan lidahnya yang bercabang dua.", en: "They smell the air using their forked tongues." },
      { id: "Rahang ular bisa terbuka sangat lebar dan terlepas dari engselnya untuk menelan sebutir telur besar bulat-bulat.", en: "Snake jaws can open extremely wide and unhinge to swallow a large egg whole." },
      { id: "Ular berganti baju! Mereka mengelupas kulit lamanya menjadi kulit baru yang mengkilap.", en: "Snakes change clothes! They shed their old skin for a shiny new one." },
      { id: "Mereka bisa mendeteksi panas tubuh tikus dalam kegelapan menggunakan sensor panas di wajahnya.", en: "They can detect a mouse's body heat in the dark using heat pits on their face." }
    ],
    quranVerse: {
      arabic: "فَأَلْقَاهَا فَإِذَا هِيَ حَيَّةٌ تَسْعَىٰ",
      transliteration: "Fa alqaahaa fa idzaa hiya hayyatun tas'aa.",
      translation: { id: "Maka dilemparkannya tongkat itu (oleh Musa), maka tiba-tiba ia menjadi seekor ular yang merayap dengan cepat.", en: "So he threw it down, and thereupon it was a snake, moving swiftly." },
      context: { id: "Tau nggak? Nabi Musa mendapat mukjizat super hebat dari Allah. Tongkat kayu matinya ketika dilempar tiba-tiba berubah jadi ular sungguhan yang bergerak sangat cepat. Para penyihir jahat pun langsung ketakutan!", en: "Did you know? Prophet Moses received a super miracle from Allah. His dead wooden staff when thrown suddenly turned into a real, fast-moving snake. The evil magicians were terrified instantly!" }
    },
    quiz: {
      question: { id: "Apa yang diubah menjadi ular sungguhan oleh Allah sebagai mukjizat Nabi Musa?", en: "What was turned into a real snake by Allah as a miracle for Prophet Moses?" },
      options: [
        { text: { id: "Tongkat kayu", en: "Wooden staff" } },
        { text: { id: "Tali tambang", en: "Thick rope" } },
        { text: { id: "Bongkahan batu", en: "A boulder" } },
        { text: { id: "Pedang besi", en: "Iron sword" } }
      ],
      answerIdx: 0
    }
  },
  
  explorer: {
    text: { 
      id: "Secara taksonomi biologi, ular adalah reptil predator tanpa ekstremitas (tanpa tangan dan kaki) hasil evolusi luar biasa. Tulang belakang ular terdiri dari ratusan ruas tulang rusuk fleksibel yang memungkinkannya mengikat mangsa dengan kekuatan konstriktor (seperti Piton dan Anaconda) atau bergerak melata dengan gaya otot yang rumit.\n\nUlar berbisa memiliki taring berongga layaknya jarum suntik hipodermik, terhubung dengan kelenjar bisa mematikan yang sanggup merusak saraf atau darah mangsanya dalam hitungan menit.\n\nPencernaan ular sangat korosif. Asam lambung ular mampu melarutkan tulang dan gigi mangsa utuh yang ditelannya bulat-bulat, memakan waktu hingga berhari-hari saat ular tidur.", 
      en: "Biologically, snakes are predatory reptiles without extremities (no arms or legs), a result of remarkable evolution. A snake's spine consists of hundreds of flexible rib bones allowing it to constrict prey with immense power (like Pythons and Anacondas) or slither with complex muscle dynamics.\n\nVenomous snakes have hollow fangs like hypodermic needles, connected to deadly venom glands capable of destroying the prey's nerves or blood in minutes.\n\nA snake's digestion is highly corrosive. Their stomach acid can dissolve bones and teeth of whole prey swallowed intact, taking days while the snake sleeps." 
    },
    anatomy: [
      { part: { id: "Organ Jacobson", en: "Jacobson's Organ" }, desc: { id: "Sensor penciuman di langit-langit mulut. Lidah ular menangkap partikel bau dari udara lalu menempelkannya ke organ ini.", en: "Olfactory sensor on the roof of the mouth. The tongue catches odor particles and touches them to this organ." } },
      { part: { id: "Pit Organ (Sensor Panas)", en: "Pit Organs" }, desc: { id: "Lubang sensor inframerah pemburu di kepala ular untuk 'melihat' suhu tubuh mangsa berdarah panas di kegelapan gulita.", en: "Infrared hunting sensors on the head to 'see' the body heat of warm-blooded prey in pitch black darkness." } }
    ],
    wowFactor: { 
      id: "Fakta WOW mencengangkan: Dalam Al-Qur'an, saat tongkat Nabi Musa berubah menjadi ular di depan Firaun, Al-Qur'an menggunakan DUA kata bahasa Arab berbeda yang membingungkan para ilmuwan masa lalu. Di Surah Taha 20:20 digunakan kata 'HAYYAH' (ular kecil lincah yang bergerak sangat cepat). Tapi di Surah Al-A'raf 7:107 digunakan kata 'TSU'BAAN' (naga atau ular piton raksasa besar yang mengerikan).\n\nSains fisika dan biologi menjelaskan paradoks ini! Ular piton raksasa sangat berat dan lambat merayap (lamban), sedangkan ular kecil bergerak zig-zag secepat kilat. Mukjizat tongkat Nabi Musa MENGGABUNGKAN keduanya yang mustahil di alam nyata: Wujudnya luar biasa RAKSASA (Tsu'baan) tapi pergerakannya selincah dan secepat kilat ULAR KECIL (Hayyah)! Ini membuat para penyihir Firaun sadar ini bukan trik sulap alamiah, tapi benar-benar Kuasa Pencipta Alam Semesta!", 
      en: "Astonishing WOW Fact: In the Qur'an, when Moses' staff turned into a snake before Pharaoh, the Qur'an uses TWO different Arabic words that confused past scientists. In Surah Taha 20:20 it uses 'HAYYAH' (a fast-moving, agile little snake). But in Surah Al-A'raf 7:107 it uses 'TSU'BAAN' (a terrifying giant python or serpent/dragon).\n\nPhysics and biology explain this paradox! Giant pythons are very heavy and slow-moving, while tiny snakes zig-zag with lightning speed. The miracle of Moses' staff COMBINED both, which is impossible in nature: Its physical form was massively GIANT (Tsu'baan) but its movement was as agile and lightning-fast as a TINY SNAKE (Hayyah)! This made Pharaoh's magicians realize it wasn't a natural magic trick, but truly the Power of the Creator of the Universe!" 
    },
    quranVerse: {
      arabic: "فَأَلْقَىٰ عَصَاهُ فَإِذَا هِيَ ثُعْبَانٌ مُبِينٌ",
      transliteration: "Fa alqaa 'ashaahu fa idzaa hiya tsu'baanum mubiin.",
      translation: { id: "Maka Musa melemparkan tongkatnya, yang tiba-tiba tongkat itu (menjadi) ular besar (naga) yang nyata.", en: "So he threw his staff, and suddenly it was a serpent, manifest." }
    },
    quiz: [
      {
        question: { id: "Apa organ luar biasa pada ular yang memungkinkan dia 'melihat' mangsa tikus dalam gelap gulita?", en: "What incredible organ on a snake allows it to 'see' mouse prey in pitch black darkness?" },
        options: [{ text: { id: "Pit Organ penglihatan panas (inframerah)", en: "Pit Organ for heat vision (infrared)" } }, { text: { id: "Mata kucing bersinar", en: "Glowing cat eyes" } }, { text: { id: "Senter alami di keningnya", en: "Natural flashlight on its forehead" } }, { text: { id: "Radar suara kelelawar", en: "Bat's sound radar" } }],
        answerIdx: 0
      },
      {
        question: { id: "Mengapa mukjizat ular tongkat Nabi Musa sangat mengejutkan secara ilmu biologi ular?", en: "Why was the miracle of Prophet Moses' staff snake so shocking according to snake biology?" },
        options: [{ text: { id: "Ukurannya raksasa tapi bergeraknya selincah ular kecil", en: "It was giant in size but moved as agile as a small snake" } }, { text: { id: "Ularnya punya kaki ayam", en: "The snake had chicken legs" } }, { text: { id: "Ularnya bisa bicara", en: "The snake could talk" } }, { text: { id: "Ularnya berwarna pelangi neon", en: "The snake was neon rainbow colored" } }],
        answerIdx: 0
      },
      {
        question: { id: "Ular mencium bau mangsanya dengan cara menangkap partikel udara menggunakan...", en: "A snake smells its prey by catching air particles using..." },
        options: [{ text: { id: "Lidah bercabangnya", en: "Its forked tongue" } }, { text: { id: "Hidung panjangnya", en: "Its long nose" } }, { text: { id: "Ujung ekornya", en: "The tip of its tail" } }, { text: { id: "Mata bulatnya", en: "Its round eyes" } }],
        answerIdx: 0
      }
    ]
  }
};

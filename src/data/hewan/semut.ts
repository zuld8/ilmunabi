import { ObjectData } from "../objects";

export const semutData: ObjectData = {
  slug: "semut",
  name: { id: "Semut", en: "Ant" },
  icon: "🐜",
  category: "serangga",
  type: "hewan",
  scientificName: "Formicidae",
  surahName: "An-Naml",
  surahReference: "27:18",
  unlockedAtPoints: 80,
  kosakata: [
    { arab: "نَمْلَة", latin: "Namlah", arti: "Semut", artiEn: "Ant", contohAyat: "Berkatalah seekor semut: Hai semut-semut, masuklah ke dalam sarang-sarangmu..." }
  ],
  balita: {
    text: { id: "Halo! Aku semut yang kecil tapi kuat! Aku suka berbaris rapi bersama teman-temanku untuk mencari makan! 🐜", en: "Hello! I am a small but strong ant! I love marching in line with my friends to find food! 🐜" },
    audioTranscript: { id: "Ayo berbaris yang rapi! Satu dua, satu dua! Kita angkat remah roti ini bersama-sama!", en: "Let's march neatly! One two, one two! Let's lift this breadcrumb together!" },
    quiz: {
      question: { id: "Apa yang biasa dilakukan semut saat mencari makan?", en: "What do ants usually do when looking for food?" },
      options: [
        { text: { id: "Berbaris dengan rapi", en: "March in a neat line" } },
        { text: { id: "Tidur sendirian", en: "Sleep alone" } },
        { text: { id: "Berenang di air", en: "Swim in the water" } }
      ],
      answerIdx: 0
    }
  },
  anak: {
    text: { id: "Ada surah di dalam Al-Qur'an bernama An-Naml, artinya Semut. Pada zaman Nabi Sulaiman yang bisa berbicara dengan hewan, seekor semut pemimpin memerintahkan rakyatnya masuk ke sarang agar tidak terinjak pasukan Nabi Sulaiman!", en: "There is a surah in the Quran called An-Naml, meaning The Ant. During the time of Prophet Sulaiman who could talk to animals, a leader ant ordered its people to enter their homes so they wouldn't be crushed by Prophet Sulaiman's army!" },
    facts: [
      { id: "Semut sangat kuat! Mereka bisa mengangkat benda yang beratnya 50 kali lipat dari berat badannya sendiri.", en: "Ants are very strong! They can lift objects that are 50 times their own body weight." },
      { id: "Semut tidak punya telinga, mereka 'mendengar' dengan merasakan getaran dari tanah.", en: "Ants do not have ears, they 'hear' by feeling vibrations from the ground." },
      { id: "Sarang semut di bawah tanah seperti kota besar yang punya banyak ruangan rahasia.", en: "Underground ant nests are like big cities that have many secret rooms." }
    ],
    quranVerse: {
      arabic: "حَتَّىٰ إِذَا أَتَوْا عَلَىٰ وَادِ النَّمْلِ قَالَتْ نَمْلَةٌ يَا أَيُّهَا النَّمْلُ ادْخُلُوا مَسَاكِنَكُمْ لَا يَحْطِمَنَّكُمْ سُلَيْمَانُ وَجُنُودُهُ وَهُمْ لَا يَشْعُرُونَ",
      transliteration: "Hatta idha ataw 'ala wadin-namli qalat namlatun ya ayyuhan-namlud-khulu masakinakum la yahtimannakum Sulaimanu wa junuduhu wahum la yash'urun.",
      translation: { id: "Hingga apabila mereka sampai di lembah semut berkatalah seekor semut: Hai semut-semut, masuklah ke dalam sarang-sarangmu, agar kamu tidak diinjak oleh Sulaiman dan tentaranya, sedangkan mereka tidak menyadari.", en: "Until, when they came upon the valley of the ants, an ant said, 'O ants, enter your dwellings that you not be crushed by Solomon and his soldiers while they perceive not.'" },
      context: { id: "Mukjizat Nabi Sulaiman yang tersenyum mendengar peringatan pemimpin semut kepada kaumnya.", en: "The miracle of Prophet Sulaiman who smiled upon hearing the ant leader's warning to its people." }
    },
    quiz: {
      question: { id: "Berapa kali lipat berat beban yang bisa diangkat oleh semut?", en: "How many times their body weight can an ant lift?" },
      options: [
        { text: { id: "50 kali lipat badannya", en: "50 times their body weight" } },
        { text: { id: "Sama dengan berat badannya", en: "Equal to their body weight" } },
        { text: { id: "Mereka tidak bisa mengangkat apapun", en: "They can't lift anything" } }
      ],
      answerIdx: 0
    }
  },
  explorer: {
    text: { id: "Kalimat semut dalam Al-Qur'an memakai kata ganti bahasa Arab yang hanya digunakan untuk makhluk berakal cerdas! Ilmu pengetahuan modern membuktikan semut memang bertani jamur, menggembala kutu daun (seperti sapi perah), dan membagi tugas dengan sistem sosial terumit di dunia hewan. Allah sungguh luar biasa mendesain semut!", en: "The ant's sentence in the Quran uses Arabic pronouns that are only used for intelligent beings! Modern science proves ants indeed farm fungus, herd aphids (like dairy cows), and divide tasks with the most complex social system in the animal kingdom. Allah truly designed ants incredibly!" },
    anatomy: [
      { part: { id: "Antena Kimia", en: "Chemical Antennae" }, desc: { id: "Antena untuk mencium bau jejak zat kimia (feromon) yang ditinggalkan semut lain.", en: "Antennae to smell chemical trails (pheromones) left by other ants." } },
      { part: { id: "Rahang Berotot (Mandibel)", en: "Muscular Jaws (Mandibles)" }, desc: { id: "Gigi capit super kuat untuk menggigit, memotong daun, dan mengangkat batu.", en: "Super strong pincer teeth to bite, cut leaves, and lift rocks." } }
    ],
    wowFactor: { id: "Semut memiliki dua perut! Satu perut untuk menyimpan makanannya sendiri, dan satu lagi perut 'sosial' untuk menyimpan makanan yang akan dimuntahkan kembali untuk dibagikan ke semut lain!", en: "Ants have two stomachs! One stomach to store their own food, and another 'social' stomach to store food to be regurgitated and shared with other ants!" },
    quranVerse: {
      arabic: "فَتَبَسَّمَ ضَاحِكًا مِنْ قَوْلِهَا وَقَالَ رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ",
      transliteration: "Fatabassama dahikan min qawliha wa qala rabbi awzi'ni an ashkura ni'matak.",
      translation: { id: "Maka dia (Sulaiman) tersenyum dengan tertawa karena (mendengar) perkataan semut itu. Dan dia berdoa: 'Ya Tuhanku berilah aku ilham untuk tetap mensyukuri nikmat-Mu...'", en: "So [Solomon] smiled, amused at her speech, and said, 'My Lord, enable me to be grateful for Your favor...'" }
    },
    quiz: [
      {
        question: { id: "Untuk apa semut memiliki perut yang kedua (perut sosial)?", en: "What does an ant have a second stomach (social stomach) for?" },
        options: [
          { text: { id: "Untuk mencerna batu", en: "To digest rocks" } },
          { text: { id: "Untuk menyimpan air minum", en: "To store drinking water" } },
          { text: { id: "Untuk menyimpan makanan yang akan dibagikan ke teman-temannya", en: "To store food that will be shared with its friends" } }
        ],
        answerIdx: 2
      }
    ]
  }
};

import { ObjectData } from "../objects";

export const semutData: ObjectData = {
  slug: "semut",
  name: { id: "Semut", en: "Ant" },
  icon: "🐜", 
  category: "hewan",
  type: "hewan",
  scientificName: "Formicidae",
  surahName: "An-Naml",
  surahReference: "27:18", 
  unlockedAtPoints: 50, 
  
  kosakata: [
    { arab: "نَمْلٌ", latin: "Naml", arti: "Semut", artiEn: "Ant", contohAyat: "Surah An-Naml artinya Semut" },
    { arab: "وَادِ", latin: "Waadi", arti: "Lembah", artiEn: "Valley", contohAyat: "Lembah semut tempat Nabi Sulaiman melintas" },
    { arab: "جَيْشٌ", latin: "Jaisy", arti: "Pasukan", artiEn: "Army", contohAyat: "Pasukan Nabi Sulaiman" },
    { arab: "تَحْطِمَ", latin: "Tahtima", arti: "Menginjak/Menghancurkan", artiEn: "Crush/Destroy", contohAyat: "Agar semut tidak terinjak" }
  ],
  
  balita: {
    text: { id: "Lihat, semut kecil berbaris rapi sekali! Mereka suka bekerja sama lho! 🐜❤️", en: "Look, little ants are marching in a line! They love to work together! 🐜❤️" },
    audioTranscript: { id: "Wah, ada semut berbaris jalan pelan-pelan. Satu, dua, tiga... banyak sekali! Semut hebat ya bisa angkat remah roti!", en: "Wow, marching ants walking slowly. One, two, three... so many! Ants are great at lifting bread crumbs!" },
    quiz: {
      question: { id: "Hewan apa yang suka berbaris rapi saat berjalan?", en: "Which animal likes to march in a neat line?" },
      options: [
        { text: { id: "🐜 Semut", en: "🐜 Ant" } },
        { text: { id: "🐈 Kucing", en: "🐈 Cat" } },
        { text: { id: "🐟 Ikan", en: "🐟 Fish" } }
      ],
      answerIdx: 0
    }
  },
  
  anak: {
    text: { id: "Semut itu seperti atlet angkat besi mini. Biarpun kecil, tenaganya super kuat!", en: "Ants are like mini weightlifters. Even though they are small, their strength is super powerful!" },
    facts: [
      { id: "Semut bisa mengangkat benda yang 50 kali lebih berat dari tubuhnya!", en: "Ants can carry things 50 times heavier than their own body weight!" },
      { id: "Mereka tidak punya telinga, jadi mereka mendengar dari getaran di tanah.", en: "They don't have ears, so they hear by feeling vibrations in the ground." },
      { id: "Semut punya dua perut! Satu untuk dirinya, satu lagi untuk berbagi dengan teman.", en: "Ants have two stomachs! One for themselves, and one to share with friends." },
      { id: "Ketika berjalan, semut meninggalkan jejak bau (feromon) agar tidak tersesat.", en: "When walking, ants leave a smell trail (pheromones) so they don't get lost." },
      { id: "Jumlah semut di bumi ini jutaan kali lipat lebih banyak dari manusia.", en: "There are millions of times more ants on Earth than humans." }
    ],
    quranVerse: {
      arabic: "حَتَّىٰ إِذَا أَتَوْا عَلَىٰ وَادِ النَّمْلِ قَالَتْ نَمْلَةٌ يَا أَيُّهَا النَّمْلُ ادْخُلُوا مَسَاكِنَكُمْ لَا يَحْطِمَنَّكُمْ سُلَيْمَانُ وَجُنُودُهُ وَهُمْ لَا يَشْعُرُونَ",
      transliteration: "Hattaa idzaa ataw 'alaa waadin-namli qaalat namlatun yaa ayyuhan-namludkhuluu masaakinakum laa yahthimannakum sulaimaanu wa junuuduhu wa hum laa yasy'uruun.",
      translation: { id: "Hingga apabila mereka sampai di lembah semut berkatalah seekor semut: 'Hai semut-semut, masuklah ke dalam sarang-sarangmu, agar kamu tidak diinjak oleh Sulaiman dan tentaranya, sedangkan mereka tidak menyadari.'", en: "Until, when they came upon the valley of the ants, an ant said, 'O ants, enter your dwellings that you not be crushed by Solomon and his soldiers while they perceive not.'" },
      context: { id: "Tau nggak? Seekor semut pernah jadi pahlawan! Semut penjaga memperingatkan teman-temannya agar sembunyi dari pasukan Nabi Sulaiman. Hebatnya, Nabi Sulaiman tersenyum karena paham bahasa semut!", en: "Did you know? An ant was once a hero! A guard ant warned its friends to hide from Prophet Solomon's army. Amazingly, Prophet Solomon smiled because he understood the ant's language!" }
    },
    quiz: {
      question: { id: "Bagaimana cara semut mendengarkan suara?", en: "How do ants hear sounds?" },
      options: [
        { text: { id: "Merasakan getaran tanah", en: "Feeling ground vibrations" } },
        { text: { id: "Pakai telinga panjang", en: "Using long ears" } },
        { text: { id: "Melihat gerakan mulut", en: "Looking at mouth movements" } },
        { text: { id: "Menggunakan antena TV", en: "Using a TV antenna" } }
      ],
      answerIdx: 0
    }
  },
  
  explorer: {
    text: { 
      id: "Dunia semut adalah dunia komunikasi kimiawi yang sangat canggih. Tanpa suara vokalisasi, koloni semut yang berisi jutaan individu dapat beroperasi seperti sebuah kota megapolitan yang terorganisir sempurna.\n\nMereka berkomunikasi menggunakan zat kimia bernama feromon. Melalui feromon, mereka bisa membunyikan alarm bahaya, menunjukkan rute makanan, dan bahkan mengenali semut dari koloni mana. Selain itu, semut melakukan spesialisasi kerja tingkat tinggi; ada semut perawat, semut pekerja, semut tentara, bahkan semut petani yang membudidayakan jamur di dalam sarang bawah tanah!\n\nStruktur masyarakat semut sering diteliti oleh ilmuwan untuk mempelajari sistem jaringan dan algoritma optimasi rute.", 
      en: "The ant world is a highly advanced realm of chemical communication. Without vocal sounds, an ant colony of millions can operate like a perfectly organized megacity.\n\nThey communicate using chemicals called pheromones. Through pheromones, they can sound danger alarms, show food routes, and even identify which colony an ant belongs to. Moreover, ants have high-level job specialization; there are nurse ants, worker ants, soldier ants, and even farmer ants that cultivate fungi in underground nests!\n\nAnt society structures are often studied by scientists to learn about network systems and route optimization algorithms." 
    },
    anatomy: [
      { part: { id: "Antena", en: "Antennae" }, desc: { id: "Alat sensor serbaguna untuk mencium, merasakan sentuhan, dan 'mendengar' melalui getaran.", en: "Versatile sensory organs for smelling, touching, and 'hearing' via vibrations." } },
      { part: { id: "Mandibula", en: "Mandibles" }, desc: { id: "Rahang kuat seperti capit yang digunakan untuk memotong daun, mengangkat benda, dan bertarung.", en: "Strong pincer-like jaws used for cutting leaves, carrying things, and fighting." } }
    ],
    wowFactor: { 
      id: "Dalam sains modern, ditemukan bahwa tubuh semut memiliki eksoskeleton dari bahan semacam 'kaca' tipis (kitin) yang bisa remuk. Menariknya, dalam Al-Qur'an (Surah An-Naml ayat 18), kata Arab yang digunakan semut untuk memperingatkan temannya adalah 'la yahthimannakum' yang secara harfiah berarti 'jangan sampai mereka MENGHANCURKAN/MEREMUKKAN kalian (seperti kaca)'.\n\nLebih dari seribu tahun sebelum mikroskop ditemukan, Al-Qur'an menggunakan kata kerja akurat yang menggambarkan tekstur rapuh tubuh semut yang bisa pecah atau remuk, bukan sekadar 'mati' atau 'terinjak' biasa!", 
      en: "In modern science, it is found that an ant's body has an exoskeleton made of a thin 'glass-like' substance (chitin) that can shatter. Interestingly, in the Qur'an (Surah An-Naml verse 18), the Arabic word the ant used to warn its friends is 'la yahthimannakum', which literally means 'lest they SHATTER/CRUSH you (like glass)'.\n\nOver a thousand years before microscopes were invented, the Qur'an used the exact precise verb describing the brittle texture of an ant's body that shatters, rather than just 'die' or 'be stepped on'!" 
    },
    quranVerse: {
      arabic: "فَتَبَسَّمَ ضَاحِكًا مِنْ قَوْلِهَا وَقَالَ رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ وَعَلَىٰ وَالِدَيَّ",
      transliteration: "Fatabassama dhaahikan min qawlihaa wa qaala rabbi awzi'nii an asykura ni'matakal-latii an'amta 'alayya wa 'alaa waalidayya.",
      translation: { id: "Maka dia tersenyum dengan tertawa karena (mendengar) perkataan semut itu. Dan dia berdoa: 'Ya Tuhanku berilah aku ilham untuk tetap mensyukuri nikmat Mu...'", en: "So [Solomon] smiled, amused at her speech, and said, 'My Lord, enable me to be grateful for Your favor...'" }
    },
    quiz: [
      {
        question: { id: "Zat kimia apa yang ditinggalkan semut sebagai jejak jalan?", en: "What chemical do ants leave as a trail?" },
        options: [{ text: { id: "Feromon", en: "Pheromone" } }, { text: { id: "Oksigen", en: "Oxygen" } }, { text: { id: "Asam amino", en: "Amino acid" } }, { text: { id: "Adrenalin", en: "Adrenaline" } }],
        answerIdx: 0
      },
      {
        question: { id: "Apa arti harfiah dari kata Arab 'yahthimannakum' dalam konteks tubuh semut?", en: "What is the literal meaning of the Arabic word 'yahthimannakum' in the context of an ant's body?" },
        options: [{ text: { id: "Meremukkan seperti kaca", en: "Crushing/shattering like glass" } }, { text: { id: "Menyakiti", en: "Hurting" } }, { text: { id: "Mengejar", en: "Chasing" } }, { text: { id: "Membakar", en: "Burning" } }],
        answerIdx: 0
      },
      {
        question: { id: "Nabi siapa yang bisa memahami peringatan sang semut?", en: "Which prophet could understand the ant's warning?" },
        options: [{ text: { id: "Nabi Sulaiman", en: "Prophet Solomon" } }, { text: { id: "Nabi Musa", en: "Prophet Moses" } }, { text: { id: "Nabi Ibrahim", en: "Prophet Abraham" } }, { text: { id: "Nabi Yunus", en: "Prophet Jonah" } }],
        answerIdx: 0
      }
    ]
  }
};

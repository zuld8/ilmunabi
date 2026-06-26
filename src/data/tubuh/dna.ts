import { ObjectData } from "../objects";

export const asamDeoksiribonukleatDnaData: ObjectData = {
  slug: "asam-deoksiribonukleat-dna",
  name: { id: "DNA", en: "DNA" },
  icon: "🧬",
  category: "tubuh",
  type: "tubuh",
  scientificName: "Deoxyribonucleic Acid",
  surahName: "At-Tin",
  surahReference: "95:4",
  unlockedAtPoints: 50,
  
  kosakata: [
    { arab: "شَفْرَةٌ", latin: "Shafrah", arti: "Kode / Sandi", artiEn: "Code", contohAyat: "DNA adalah kode makhluk hidup." },
    { arab: "تَقْوِيمٌ", latin: "Taqwiim", arti: "Bentuk / Susunan", artiEn: "Form / Shape", contohAyat: "Manusia diciptakan dalam bentuk terbaik." },
    { arab: "نَسْلٌ", latin: "Nasl", arti: "Keturunan", artiEn: "Offspring", contohAyat: "Sifat orang tua diwariskan lewat DNA." },
    { arab: "سِرٌّ", latin: "Sirr", arti: "Rahasia", artiEn: "Secret", contohAyat: "Rahasia ciptaan Allah dalam sel." }
  ],
  
  balita: {
    text: { id: "Kenapa kamu mirip ayah dan ibu? Karena ada DNA! 🧬", en: "Why do you look like dad and mom? Because of DNA! 🧬" },
    audioTranscript: { id: "DNA itu seperti buku resep rahasia yang ada di dalam badanmu! Buku resep ini bikin rambutmu lurus atau keriting, dan matamu berwarna apa.", en: "DNA is like a secret recipe book inside your body! This recipe book makes your hair straight or curly, and decides your eye color." },
    quiz: {
      question: { id: "DNA membuat wajahmu mirip dengan siapa?", en: "Who does DNA make your face look like?" },
      options: [
        { text: { id: "Ayah dan Ibu 👨‍👩‍👦", en: "Dad and Mom 👨‍👩‍👦" } },
        { text: { id: "Kucing 🐈", en: "Cat 🐈" } },
        { text: { id: "Mobil 🚗", en: "Car 🚗" } }
      ],
      answerIdx: 0
    }
  },
  
  anak: {
    text: { id: "DNA adalah pita panjang melingkar seperti tangga tali yang menyimpan seluruh informasi cetak biru tubuhmu!", en: "DNA is a long twisting ribbon like a rope ladder that stores the entire blueprint information of your body!" },
    facts: [
      { id: "Jika seluruh DNA di tubuhmu direntangkan, panjangnya bisa bolak-balik dari Bumi ke Matahari hingga 600 kali!", en: "If all the DNA in your body were stretched out, it would reach from Earth to the Sun and back 600 times!" },
      { id: "Setengah DNA-mu berasal dari ibu, dan setengah lagi dari ayah.", en: "Half of your DNA comes from your mother, and half from your father." },
      { id: "DNA kita 99,9% sama dengan semua manusia lain di bumi. Hanya 0,1% yang membedakan wajah dan sifat kita!", en: "Our DNA is 99.9% identical to all other humans on earth. Only 0.1% makes our faces and traits different!" },
      { id: "Pisang punya 50% kesamaan DNA dengan manusia lho!", en: "Bananas share 50% of their DNA with humans!" },
      { id: "Pita DNA tersembunyi jauh di dalam bagian tengah setiap sel di tubuh kita.", en: "The DNA ribbon is hidden deep inside the center of every cell in our body." }
    ],
    quranVerse: {
      arabic: "لَقَدْ خَلَقْنَا الْإِنسَانَ فِي أَحْسَنِ تَقْوِيمٍ",
      transliteration: "Laqad khalaqnal-insana fi ahsani taqwim",
      translation: { id: "Sungguh, Kami telah menciptakan manusia dalam bentuk yang sebaik-baiknya.", en: "We have certainly created man in the best of stature/form." },
      context: { id: "Tau nggak? 'Taqwiim' artinya desain atau struktur yang sempurna. DNA adalah bukti nyata bahwa tubuh kita punya struktur kode yang sangat rumit dan sempurna buatan Allah!", en: "Did you know? 'Taqwiim' means perfect design or structure. DNA is tangible proof that our body has a very complex and perfect code structure made by Allah!" }
    },
    quiz: {
      question: { id: "Berapa banyak DNA kita yang sama dengan teman-teman kita (manusia lain)?", en: "How much of our DNA is identical to our friends (other humans)?" },
      options: [
        { text: { id: "50%", en: "50%" } },
        { text: { id: "0%", en: "0%" } },
        { text: { id: "99,9%", en: "99.9%" } },
        { text: { id: "100%", en: "100%" } }
      ],
      answerIdx: 2
    }
  },
  
  explorer: {
    text: { id: "Setiap sel di tubuhmu memiliki inti (nukleus), dan di sanalah DNA berada.\n\nDNA tersusun dari 4 abjad molekul (A, T, C, dan G) yang menyusun triliunan baris kode.\n\nKode inilah yang memberi tahu tubuhmu kapan harus tumbuh, bagaimana menyembuhkan luka, dan organ apa yang harus dibangun sejak kamu masih di dalam kandungan.", en: "Every cell in your body has a nucleus, and that's where DNA is located.\n\nDNA is made of 4 molecular letters (A, T, C, and G) that form trillions of lines of code.\n\nThis code tells your body when to grow, how to heal wounds, and what organs to build since you were in the womb." },
    anatomy: [
      { part: { id: "Double Helix", en: "Double Helix" }, desc: { id: "Bentuk DNA yang menyerupai tangga yang dipelintir.", en: "The shape of DNA that resembles a twisted ladder." } },
      { part: { id: "Kromosom", en: "Chromosome" }, desc: { id: "Gulungan benang DNA yang sangat padat.", en: "Tightly coiled strands of DNA." } }
    ],
    wowFactor: { id: "Bill Gates, pendiri Microsoft, mengatakan: 'DNA adalah seperti program perangkat lunak komputer, tetapi jauh, jauh lebih maju dari perangkat lunak manapun yang pernah kita ciptakan'.\n\nSebuah kode pemrograman mustahil tercipta tanpa adanya seorang Programmer (Pencipta). Struktur 3 miliar huruf genetik di dalam sel kita adalah tanda tak terbantahkan dari kemahakuasaan Allah, Sang Maha Perancang (Al-Khaliq)!", en: "Bill Gates, founder of Microsoft, said: 'DNA is like a computer program but far, far more advanced than any software ever created'.\n\nA programming code is impossible to exist without a Programmer (Creator). The 3 billion genetic letters in our cells are undeniable signs of the omnipotence of Allah, The Supreme Creator (Al-Khaliq)!" },
    quranVerse: {
      arabic: "إِنَّا كُلَّ شَيْءٍ خَلَقْنَاهُ بِقَدَرٍ",
      transliteration: "Inna kulla shay'in khalaqnahu biqadar",
      translation: { id: "Sungguh, Kami menciptakan segala sesuatu menurut ukuran.", en: "Indeed, all things We created with predestination (precise measure)." }
    },
    quiz: [
      {
        question: { id: "Abjad molekul dasar yang menyusun kode DNA manusia terdiri dari huruf apa saja?", en: "The basic molecular alphabet that makes up human DNA code consists of what letters?" },
        options: [{ text: { id: "A, B, C, D", en: "A, B, C, D" } }, { text: { id: "X, Y, Z", en: "X, Y, Z" } }, { text: { id: "A, T, C, G", en: "A, T, C, G" } }, { text: { id: "1, 2, 3, 4", en: "1, 2, 3, 4" } }],
        answerIdx: 2
      },
      {
        question: { id: "Apa bentuk DNA kita?", en: "What is the shape of our DNA?" },
        options: [{ text: { id: "Kotak", en: "Box" } }, { text: { id: "Bulat seperti bola", en: "Round like a ball" } }, { text: { id: "Tangga yang dipelintir (Double Helix)", en: "Twisted ladder (Double Helix)" } }, { text: { id: "Segitiga", en: "Triangle" } }],
        answerIdx: 2
      },
      {
        question: { id: "Apa yang dibuktikan oleh kerumitan kode DNA?", en: "What does the complexity of DNA code prove?" },
        options: [{ text: { id: "Manusia berasal dari kebetulan", en: "Humans come from chance" } }, { text: { id: "Ada Pencipta (Allah) yang merancangnya", en: "There is a Creator (Allah) who designed it" } }, { text: { id: "Komputer lebih pintar dari manusia", en: "Computers are smarter than humans" } }, { text: { id: "Bumi itu bulat", en: "The earth is round" } }],
        answerIdx: 1
      }
    ]
  }
};

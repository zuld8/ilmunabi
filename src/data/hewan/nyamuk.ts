import { ObjectData } from "../objects";

export const nyamukData: ObjectData = {
  slug: "nyamuk",
  name: { id: "Nyamuk", en: "Mosquito" },
  icon: "🦟", 
  category: "hewan",
  type: "hewan",
  scientificName: "Culicidae",
  surahName: "Al-Baqarah",
  surahReference: "2:26", 
  unlockedAtPoints: 50, 
  
  kosakata: [
    { arab: "بَعُوضَةٌ", latin: "Ba'uudhah", arti: "Nyamuk", artiEn: "Mosquito", contohAyat: "Allah tidak malu membuat perumpamaan nyamuk" },
    { arab: "جَنَاحٌ", latin: "Janaah", arti: "Sayap", artiEn: "Wing", contohAyat: "Dunia di sisi Allah tak seberat sayap nyamuk" },
    { arab: "دَمٌ", latin: "Dam", arti: "Darah", artiEn: "Blood", contohAyat: "Nyamuk betina membutuhkan darah" },
    { arab: "ضَعِيفٌ", latin: "Dha'iif", arti: "Lemah", artiEn: "Weak", contohAyat: "Nyamuk adalah makhluk kecil dan lemah" }
  ],
  
  balita: {
    text: { id: "Nguuung... plak! Wah ada nyamuk kecil suka menggigit. Makanya kita harus jaga kebersihan ya! 🦟✨", en: "Bzzzt... clap! Wow there's a little mosquito that likes to bite. That's why we must keep things clean! 🦟✨" },
    audioTranscript: { id: "Suara apa itu? Nguuung... itu nyamuk terbang! Nyamuk ukurannya sangat kecil, jangan sampai digigit ya, nanti gatal!", en: "What's that sound? Bzzzt... it's a flying mosquito! Mosquitoes are very small, don't let them bite you, or it gets itchy!" },
    quiz: {
      question: { id: "Bagaimana suara nyamuk saat terbang di dekat telinga?", en: "What sound does a mosquito make when flying near your ear?" },
      options: [
        { text: { id: "Nguuung... bzzzt...", en: "Nguuung... bzzzt..." } },
        { text: { id: "Moooo...", en: "Moooo..." } },
        { text: { id: "Guk guk!", en: "Woof woof!" } }
      ],
      answerIdx: 0
    }
  },
  
  anak: {
    text: { id: "Jangan remehkan nyamuk karena dia kecil! Hewan ini punya jarum suntik super canggih di mulutnya.", en: "Don't underestimate mosquitoes because they're small! This animal has super advanced syringes in its mouth." },
    facts: [
      { id: "Hanya nyamuk betina yang menggigit manusia dan hewan. Nyamuk jantan suka makan nektar bunga manis.", en: "Only female mosquitoes bite humans and animals. Male mosquitoes love eating sweet flower nectar." },
      { id: "Sayap nyamuk mengepak 300 hingga 600 kali dalam SATU DETIK! Itu yang bikin suara ngiang di telinga.", en: "Mosquito wings flap 300 to 600 times in ONE SECOND! That creates the buzzing sound." },
      { id: "Nyamuk bisa melacak kita dari gas karbon dioksida yang kita hembuskan dari napas dari jarak jauh.", en: "Mosquitoes can track us from the carbon dioxide we exhale from a distance." },
      { id: "Air liur nyamuk bekerja sebagai 'obat bius' agar kita tidak merasa sakit saat digigit.", en: "Mosquito saliva acts as an 'anesthetic' so we don't feel pain when bitten." },
      { id: "Nyamuk lebih suka orang yang memakai baju warna gelap, seperti hitam dan merah.", en: "Mosquitoes prefer people wearing dark-colored clothes, like black and red." }
    ],
    quranVerse: {
      arabic: "إِنَّ اللَّهَ لَا يَسْتَحْيِي أَنْ يَضْرِبَ مَثَلًا مَا بَعُوضَةً فَمَا فَوْقَهَا",
      transliteration: "Innal-laaha laa yastahyii an yadhriba matsalaa maa ba'uudhatan famaa fawqahaa.",
      translation: { id: "Sesungguhnya Allah tiada segan membuat perumpamaan berupa nyamuk atau yang lebih rendah dari itu.", en: "Indeed, Allah is not timid to present an example - that of a mosquito or what is smaller than it." },
      context: { id: "Tau nggak? Orang-orang zaman dulu heran kenapa Allah menyebut hewan kecil seperti nyamuk dalam kitab suci. Ternyata, nyamuk itu mesin super rumit ciptaan Allah yang bikin ilmuwan tercengang!", en: "Did you know? People in the past wondered why Allah mentioned tiny animals like mosquitoes in the holy book. It turns out, a mosquito is a super complex machine created by Allah that amazes scientists!" }
    },
    quiz: {
      question: { id: "Siapa nyamuk yang suka menggigit manusia?", en: "Which mosquito likes to bite humans?" },
      options: [
        { text: { id: "Nyamuk Betina", en: "Female Mosquitoes" } },
        { text: { id: "Nyamuk Jantan", en: "Male Mosquitoes" } },
        { text: { id: "Anak Nyamuk", en: "Baby Mosquitoes" } },
        { text: { id: "Nyamuk Raksasa", en: "Giant Mosquitoes" } }
      ],
      answerIdx: 0
    }
  },
  
  explorer: {
    text: { 
      id: "Nyamuk sering dianggap sebagai hama paling mengganggu. Namun, secara sains, nyamuk dilengkapi teknologi sensor yang menyaingi pesawat tempur canggih. Nyamuk betina butuh protein dari darah agar bisa menetaskan telurnya.\n\nUntuk mencari mangsa, nyamuk dilengkapi sensor panas termal untuk mendeteksi suhu tubuh, sensor kimiawi untuk melacak karbon dioksida dan keringat asam laktat, dan penglihatan inframerah! Tidak heran nyamuk selalu tahu kamu sembunyi di mana saat gelap gulita di kamar.\n\nAnatomi jarum nyamuk (probosis) bahkan lebih gila lagi. Itu bukan satu jarum tajam, melainkan enam jarum super mikroskopis!", 
      en: "Mosquitoes are often considered the most annoying pests. However, scientifically, mosquitoes are equipped with sensor technology rivaling advanced fighter jets. Female mosquitoes need protein from blood to hatch their eggs.\n\nTo find prey, mosquitoes are equipped with thermal sensors to detect body heat, chemical sensors to track carbon dioxide and lactic acid sweat, and infrared vision! No wonder mosquitoes always know where you hide in a pitch-black room.\n\nThe anatomy of a mosquito's needle (proboscis) is even crazier. It's not one sharp needle, but six super microscopic needles!" 
    },
    anatomy: [
      { part: { id: "Probosis 6 Jarum", en: "6-Needle Proboscis" }, desc: { id: "Dua jarum bergerigi untuk memotong kulit, dua jarum untuk membuka jalan, satu memasukkan cairan bius anti-beku, dan satu lagi menyedot darah.", en: "Two jagged needles to cut the skin, two needles to hold the tissue apart, one to inject anesthetic anti-coagulant, and one to suck blood." } },
      { part: { id: "Organ Johnston", en: "Johnston's Organ" }, desc: { id: "Sensor khusus di antena nyamuk jantan yang mendeteksi kepakan sayap nyamuk betina dari jarak jauh.", en: "A special sensor on the male's antennae that detects the female's wingbeat from afar." } }
    ],
    wowFactor: { 
      id: "Fakta WOW menakjubkan: Dalam Al-Qur'an (2:26) Allah berfirman Dia tidak malu membuat perumpamaan nyamuk, 'FAMAA FAWQAHAA' (atau apa saja yang ada di ATASNYA). Selama berabad-abad ahli tafsir mengira itu bermakna sesuatu yang 'lebih besar'.\n\nNamun, setelah mikroskop elektron ditemukan, sains modern membedah nyamuk dan terkejut: Seringkali, di ATAS punggung nyamuk ada makhluk parasit yang jauh lebih kecil yang hidup menungganginya, bernama tungau/kutu merah (Mites)! Allah mengisyaratkan makhluk yang hidup 'di atas' nyamuk jauh sebelum ada manusia yang bisa melihatnya! Subhanallah!", 
      en: "Astonishing WOW Fact: In the Qur'an (2:26), Allah says He is not timid to make an example of a mosquito, 'FAMAA FAWQAHAA' (or whatever is ABOVE it). For centuries, commentators thought it meant something 'bigger'.\n\nHowever, after the electron microscope was invented, modern science dissected mosquitoes and was shocked: Often, ON TOP OF the mosquito's back, there are much smaller parasitic creatures living and riding on it, called red Mites! Allah hinted at creatures living 'above/on top of' a mosquito long before any human could see them! Subhanallah!" 
    },
    quranVerse: {
      arabic: "إِنَّ اللَّهَ لَا يَسْتَحْيِي أَنْ يَضْرِبَ مَثَلًا مَا بَعُوضَةً فَمَا فَوْقَهَا ۚ فَأَمَّا الَّذِينَ آمَنُوا فَيَعْلَمُونَ أَنَّهُ الْحَقُّ مِنْ رَبِّهِمْ",
      transliteration: "Innal-laaha laa yastahyii an yadhriba matsalaa maa ba'uudhatan famaa fawqahaa. Fa ammalladziina aamanuu faya'lamuuna annahul-haqqu min rabbihim.",
      translation: { id: "Sesungguhnya Allah tiada segan membuat perumpamaan berupa nyamuk atau yang di atasnya (lebih rendah dari itu). Adapun orang-orang yang beriman, maka mereka yakin bahwa perumpamaan itu benar dari Tuhan mereka.", en: "Indeed, Allah is not timid to present an example - that of a mosquito or what is above it. As for those who have believed, they know that it is the truth from their Lord." }
    },
    quiz: [
      {
        question: { id: "Berapa banyak jarum tajam yang tersembunyi di mulut nyamuk betina?", en: "How many sharp needles are hidden in the female mosquito's mouth?" },
        options: [{ text: { id: "Enam jarum mikroskopis", en: "Six microscopic needles" } }, { text: { id: "Satu jarum panjang", en: "One long needle" } }, { text: { id: "Dua capit", en: "Two pincers" } }, { text: { id: "Tiga sedotan", en: "Three straws" } }],
        answerIdx: 0
      },
      {
        question: { id: "Hewan super kecil apa yang sering ditemukan hidup menunggangi di 'ATAS' nyamuk?", en: "What super tiny animal is often found living 'ON TOP OF' a mosquito?" },
        options: [{ text: { id: "Tungau/kutu mikroskopis (Mites)", en: "Microscopic mites" } }, { text: { id: "Semut terbang", en: "Flying ants" } }, { text: { id: "Bakteri saja", en: "Only bacteria" } }, { text: { id: "Lalat kecil", en: "Small flies" } }],
        answerIdx: 0
      },
      {
        question: { id: "Zat tubuh apa dari manusia yang bisa 'dicium' nyamuk dari jarak sangat jauh?", en: "What body substance from humans can a mosquito 'smell' from very far away?" },
        options: [{ text: { id: "Karbon dioksida dari napas kita", en: "Carbon dioxide from our breath" } }, { text: { id: "Warna mata kita", en: "Our eye color" } }, { text: { id: "Suara jantung berdetak", en: "Heartbeat sound" } }, { text: { id: "Gelombang radio", en: "Radio waves" } }],
        answerIdx: 0
      }
    ]
  }
};

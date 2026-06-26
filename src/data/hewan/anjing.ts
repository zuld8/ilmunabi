import { ObjectData } from "../objects";

export const anjingData: ObjectData = {
  slug: "anjing",
  name: { id: "Anjing", en: "Dog" },
  icon: "🐕",
  category: "hewan",
  type: "hewan",
  scientificName: "Canis lupus familiaris",
  surahName: "Al-Kahf",
  surahReference: "18:18",
  unlockedAtPoints: 70,

  kosakata: [
    { arab: "كَلْبٌ", latin: "Kalb", arti: "Anjing", artiEn: "Dog", contohAyat: "Anjing penjaga pemuda Ashabul Kahfi." },
    { arab: "صَيْدٌ", latin: "Shayd", arti: "Buru / Tangkapan", artiEn: "Hunt / Catch", contohAyat: "Anjing pelacak diajari untuk berburu." },
    { arab: "حَارِسٌ", latin: "Haaris", arti: "Penjaga", artiEn: "Guard", contohAyat: "Anjing menjaga ternak dari serigala." },
    { arab: "لُعَابٌ", latin: "Lu'aab", arti: "Air liur", artiEn: "Saliva", contohAyat: "Air liur anjing tergolong najis dalam Islam." }
  ],

  balita: {
    text: { id: "Guk guk! Ini anjing! Anjing hewan penjaga yang sangat pintar. 🐕", en: "Woof woof! This is a dog! Dogs are very smart guard animals. 🐕" },
    audioTranscript: { id: "Guk! Guk! Siapa tuh yang jaga rumah? Itu dia si anjing! Hidungnya pinter banget bisa cium bau dari jauh lho. Dia setia banget sama tuannya!", en: "Woof! Woof! Who is guarding the house? That's the dog! Its nose is so smart it can smell from far away. It's very loyal to its master!" },
    quiz: {
      question: { id: "Bagaimana suara anjing saat menjaga rumah?", en: "What does a dog sound like when guarding the house?" },
      options: [
        { text: { id: "Meow", en: "Meow" } },
        { text: { id: "Guk guk!", en: "Woof woof!" } },
        { text: { id: "Mbeeek", en: "Baaa" } }
      ],
      answerIdx: 1
    }
  },

  anak: {
    text: { id: "Anjing adalah salah satu hewan yang penciumannya paling tajam di dunia!", en: "Dogs are one of the animals with the sharpest sense of smell in the world!" },
    facts: [
      { id: "Penciuman anjing bisa 100.000 kali lebih tajam dari manusia lho! Hah?!", en: "A dog's sense of smell can be 100,000 times sharper than a human's! What?!" },
      { id: "Anjing pelacak polisi bahkan bisa mengendus barang hilang yang terkubur di bawah tanah.", en: "Police tracking dogs can even sniff out lost items buried underground." },
      { id: "Setiap hidung anjing punya pola lipatan unik, persis seperti sidik jari manusia.", en: "Every dog's nose has a unique fold pattern, exactly like human fingerprints." },
      { id: "Anjing berkeringat melalui telapak kakinya, makanya mereka menjulurkan lidah buat membuang panas.", en: "Dogs sweat through their paw pads, that's why they pant with tongues out to release heat." },
      { id: "Dalam Islam, anjing diajarkan untuk dihormati. Bahkan ada orang masuk surga karena memberi minum anjing kehausan!", en: "In Islam, dogs are taught to be respected. Someone even entered heaven for giving water to a thirsty dog!" }
    ],
    quranVerse: {
      arabic: "وَكَلْبُهُم بَاسِطٌ ذِرَاعَيْهِ بِالْوَصِيدِ",
      transliteration: "Wa kalbuhum baasithun dhiraa'ayhi bil-washiid",
      translation: { id: "Dan anjing mereka menjulurkan kedua kaki depannya di depan pintu gua.", en: "And their dog stretched his forelegs at the entrance." },
      context: { id: "Tau nggak? Di surah Al-Kahf, ada kisah 7 pemuda hebat yang tidur di gua ratusan tahun. Dan tebak siapa yang setia berjaga di depan pintunya? Seekor anjing yang baik! Karena kesetiaannya menemani orang saleh, anjing ini pun diabadikan dalam Al-Qur'an.", en: "Did you know? In Surah Al-Kahf, there's a story of 7 great youths who slept in a cave for hundreds of years. And guess who faithfully guarded the door? A good dog! Because of its loyalty in accompanying pious people, this dog was immortalized in the Qur'an." }
    },
    quiz: {
      question: { id: "Kenapa anjing sering menjulurkan lidahnya sambil bernapas cepat?", en: "Why do dogs often stick their tongues out while panting?" },
      options: [
        { text: { id: "Lagi pamer lidah", en: "Showing off tongue" } },
        { text: { id: "Untuk mendinginkan badannya yang kepanasan", en: "To cool their hot bodies" } },
        { text: { id: "Mau makan", en: "Wants to eat" } },
        { text: { id: "Kaget", en: "Startled" } }
      ],
      answerIdx: 1
    }
  },

  explorer: {
    text: { id: "Anjing adalah keturunan serigala yang dijinakkan (domestikasi) ribuan tahun lalu. Mereka memiliki empati luar biasa tinggi terhadap perasaan manusia, mampu membaca ekspresi wajah, dan mencium hormon stres manusia.\n\nDalam hukum Islam, air liur anjing tergolong najis berat (mughallazah) dan jika terkena jilatan anjing, wadah harus dicuci 7 kali, salah satunya dengan debu/tanah liat.\n\nNamun, Islam SANGAT melarang menyakiti anjing. Kisah pelacur yang masuk surga semata-mata karena melepas sepatunya untuk mengambilkan air minum bagi anjing jalanan yang kehausan menjadi bukti bahwa rahmat Allah menembus batas-batas kenajisan.", en: "Dogs are descendants of wolves domesticated thousands of years ago. They have extraordinarily high empathy towards human feelings, able to read facial expressions, and smell human stress hormones.\n\nIn Islamic law, dog saliva is classified as severe impurity (mughallazah) and if licked by a dog, a vessel must be washed 7 times, one of which with dust/clay.\n\nHowever, Islam STRICTLY forbids harming dogs. The story of a prostitute who entered heaven solely for taking off her shoe to get water for a thirsty stray dog is proof that Allah's mercy penetrates the boundaries of impurity." },
    anatomy: [
      { part: { id: "Reseptor Penciuman", en: "Olfactory Receptors" }, desc: { id: "Mencapai 300 juta sel (manusia cuma 6 juta), bisa mencium sel kanker manusia.", en: "Reaches 300 million cells (humans only 6 million), can smell human cancer cells." } },
      { part: { id: "Organ Jacobson", en: "Jacobson's Organ" }, desc: { id: "Organ khusus di langit-langit mulut untuk 'mencium' feromon kimiawi.", en: "Special organ in the roof of the mouth to 'smell' chemical pheromones." } }
    ],
    wowFactor: { id: "Secara menakjubkan, sains modern membuktikan bahwa tanah liat / debu (soil) mengandung mikroorganisme tertentu yang bisa membunuh bakteri patogen dan virus rabies berbahaya yang secara alami hidup di air liur anjing. Aturan syariat Islam mencuci najis anjing dengan debu (turob) kini terbukti sangat ilmiah!\n\nDi dalam Al-Qur'an surah Al-Kahfi, anjing yang menjaga pintu gua Ashabul Kahfi dengan posisi siap (kaki terjulur) menjadi perlambang kesetiaan. Hewan najis yang dianggap rendah pun bisa terangkat derajatnya di hadapan Allah karena ia setia menemani orang-orang yang beriman!", en: "Amazingly, modern science proved that clay/dust (soil) contains certain microorganisms that can kill pathogenic bacteria and dangerous rabies viruses that naturally live in dog saliva. The Islamic sharia rule of washing dog impurity with dust (turob) is now proven highly scientific!\n\nIn the Qur'an Surah Al-Kahf, the dog guarding the door of the Cave Companions in a ready position (legs stretched out) becomes a symbol of loyalty. Even an impure animal considered lowly can have its status raised before Allah because it faithfully accompanied believers!" },
    quranVerse: {
      arabic: "وَتَحْسَبُهُمْ أَيْقَاظًا وَهُمْ رُقُودٌ ۚ وَنُقَلِّبُهُمْ ذَاتَ الْيَمِينِ وَذَاتَ الشِّمَالِ ۖ وَكَلْبُهُم بَاسِطٌ ذِرَاعَيْهِ بِالْوَصِيدِ",
      transliteration: "Wa tahsabuhum ayqaazhan wa hum ruquudun, wa nuqallibuhum dzaatal yamiini wa dzaatash-shimaali, wa kalbuhum baasithun dhiraa'ayhi bil-washiid",
      translation: { id: "Dan engkau mengira mereka bangun, padahal mereka tidur. Kami balik-balikkan mereka ke kanan dan ke kiri, sedang anjing mereka menjulurkan kedua kaki depannya di muka pintu gua.", en: "And you would think them awake, while they were asleep. And We turned them to the right and to the left, while their dog stretched his forelegs at the entrance." }
    },
    quiz: [
      {
        question: { id: "Apa penemuan sains tentang debu/tanah yang dipakai mensucikan liur anjing?", en: "What is the scientific finding about dust/soil used to purify dog saliva?" },
        options: [{ text: { id: "Debu bisa membunuh bakteri berbahaya di liur anjing", en: "Dust can kill dangerous bacteria in dog saliva" } }, { text: { id: "Debu bikin tangan halus", en: "Dust makes hands smooth" } }, { text: { id: "Debu rasanya manis", en: "Dust tastes sweet" } }, { text: { id: "Debu menyerap bau saja", en: "Dust only absorbs smell" } }],
        answerIdx: 0
      },
      {
        question: { id: "Kisah anjing setia yang menjaga orang-orang saleh di gua terdapat di surah...", en: "The story of the loyal dog guarding pious people in the cave is found in surah..." },
        options: [{ text: { id: "Al-Baqarah", en: "Al-Baqarah" } }, { text: { id: "Al-Kahf", en: "Al-Kahf" } }, { text: { id: "Yusuf", en: "Yusuf" } }, { text: { id: "Al-Anbiya", en: "Al-Anbiya" } }],
        answerIdx: 1
      },
      {
        question: { id: "Berapa banyak jumlah sel penciuman di hidung anjing dibanding manusia?", en: "How many olfactory cells are in a dog's nose compared to humans?" },
        options: [{ text: { id: "300 juta (manusia 6 juta)", en: "300 million (humans 6 million)" } }, { text: { id: "Sama saja dengan manusia", en: "Same as humans" } }, { text: { id: "Lebih sedikit", en: "Fewer" } }, { text: { id: "1 triliun", en: "1 trillion" } }],
        answerIdx: 0
      }
    ]
  }
};

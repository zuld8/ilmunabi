import { ObjectData } from "../objects";

export const labalabaData: ObjectData = {
  slug: "laba-laba",
  name: { id: "Laba-laba", en: "Spider" },
  icon: "🕷️", 
  category: "hewan",
  type: "hewan",
  scientificName: "Araneae",
  surahName: "Al-'Ankabut",
  surahReference: "29:41", 
  unlockedAtPoints: 50, 
  
  kosakata: [
    { arab: "عَنْكَبُوتٌ", latin: "Ankabut", arti: "Laba-laba", artiEn: "Spider", contohAyat: "Surah Al-'Ankabut artinya laba-laba betina" },
    { arab: "بَيْتٌ", latin: "Bait", arti: "Rumah", artiEn: "House/Home", contohAyat: "Rumah yang paling rapuh adalah rumah laba-laba" },
    { arab: "أَوْهَنَ", latin: "Awhana", arti: "Paling lemah", artiEn: "Weakest", contohAyat: "Sarang laba-laba sangat mudah rusak oleh angin atau sapu" },
    { arab: "خَيْطٌ", latin: "Khayth", arti: "Benang", artiEn: "Thread", contohAyat: "Laba-laba memintal benang jaring" }
  ],
  
  balita: {
    text: { id: "Wusss! Ini laba-laba, si pembuat jaring yang keren. Jaringnya bisa menangkap nyamuk nakal lho! 🕷️🕸️", en: "Whoosh! This is a spider, a cool web-maker. Its web can catch naughty mosquitoes! 🕷️🕸️" },
    audioTranscript: { id: "Lihat, ada laba-laba sedang membuat sarang! Jaringnya lengket-lengket. Hebat ya laba-laba bisa merajut jaringnya sendiri!", en: "Look, a spider is making its web! The web is sticky. It's so cool the spider can knit its own web!" },
    quiz: {
      question: { id: "Apa yang dibuat laba-laba untuk menangkap nyamuk?", en: "What does the spider make to catch mosquitoes?" },
      options: [
        { text: { id: "🕸️ Jaring lengket", en: "🕸️ Sticky web" } },
        { text: { id: "🏠 Rumah batu", en: "🏠 Stone house" } },
        { text: { id: "🌳 Daun besar", en: "🌳 Big leaf" } }
      ],
      answerIdx: 0
    }
  },
  
  anak: {
    text: { id: "Laba-laba punya jaring ajaib! Yuk kenalan dengan hewan pemintal benang ini.", en: "Spiders have magic webs! Let's meet this thread-spinning animal." },
    facts: [
      { id: "Laba-laba punya 8 kaki. Berbeda dengan serangga yang hanya punya 6 kaki.", en: "Spiders have 8 legs. Unlike insects which only have 6 legs." },
      { id: "Sutra laba-laba sangat tipis, tapi lebih kuat dari baja jika ukurannya sama tebal!", en: "Spider silk is very thin, but it's stronger than steel of the same thickness!" },
      { id: "Kebanyakan laba-laba memiliki 8 mata yang bersinar dalam gelap.", en: "Most spiders have 8 eyes that shine in the dark." },
      { id: "Laba-laba mendaur ulang jaringnya lho! Mereka memakan jaring lama lalu membuat yang baru.", en: "Spiders recycle their webs! They eat the old web and make a new one." },
      { id: "Tidak semua laba-laba membuat jaring melingkar, ada yang melempar jaring, ada yang berburu melompat.", en: "Not all spiders make circular webs, some throw nets, some hunt by jumping." }
    ],
    quranVerse: {
      arabic: "مَثَلُ الَّذِينَ اتَّخَذُوا مِنْ دُونِ اللَّهِ أَوْلِيَاءَ كَمَثَلِ الْعَنْكَبُوتِ اتَّخَذَتْ بَيْتًا ۖ وَإِنَّ أَوْهَنَ الْبُيُوتِ لَبَيْتُ الْعَنْكَبُوتِ ۖ لَوْ كَانُوا يَعْلَمُونَ",
      transliteration: "Matsalulladziinattakhadzuu min duunillaahi awliyaa'a kamatsalil-'ankabuutittakhadzat baitaa. Wa inna awhanal-buyuuti labaitul-'ankabuuti law kaanuu ya'lamuun.",
      translation: { id: "Perumpamaan orang-orang yang mengambil pelindung-pelindung selain Allah adalah seperti laba-laba yang membuat rumah. Dan sesungguhnya rumah yang paling lemah adalah rumah laba-laba kalau mereka mengetahui.", en: "The example of those who take allies other than Allah is like that of the spider who takes a home. And indeed, the weakest of homes is the home of the spider, if they only knew." },
      context: { id: "Tau nggak? Biarpun benang laba-laba kuat, sarangnya secara keseluruhan gampang sekali rusak kena angin atau tangan kita. Allah pakai sarang ini sebagai contoh: menyembah selain Allah itu sangat rapuh!", en: "Did you know? Even though spider silk is strong, the web overall is easily destroyed by wind or our hands. Allah uses this web as an example: seeking protection other than Allah is very fragile!" }
    },
    quiz: {
      question: { id: "Berapa jumlah kaki yang dimiliki laba-laba?", en: "How many legs does a spider have?" },
      options: [
        { text: { id: "Delapan", en: "Eight" } },
        { text: { id: "Enam", en: "Six" } },
        { text: { id: "Sepuluh", en: "Ten" } },
        { text: { id: "Empat", en: "Four" } }
      ],
      answerIdx: 0
    }
  },
  
  explorer: {
    text: { 
      id: "Laba-laba adalah arsitek dan insinyur hebat di alam liar. Sutra yang mereka hasilkan berasal dari kelenjar sutra cair di perutnya, yang mengeras begitu ditarik keluar ke udara.\n\nSecara kimia, benang sutra laba-laba adalah protein ajaib. Ilmuwan dunia berusaha meniru material ini karena sifatnya yang super ringan, lentur, tetapi kekuatannya mengalahkan rompi anti peluru (Kevlar). Jaring ini dirancang menyerap energi tabrakan dari serangga terbang agar tidak robek.\n\nNamun di balik kemampuan arsitektur yang canggih ini, struktur sosial dalam keluarga laba-laba ternyata bisa sangat kacau.", 
      en: "Spiders are great architects and engineers in the wild. The silk they produce comes from liquid silk glands in their abdomen, which solidifies as soon as it's pulled into the air.\n\nChemically, spider silk is a magic protein. Scientists worldwide try to replicate this material because it is super light, flexible, but its strength surpasses bulletproof vests (Kevlar). The web is designed to absorb collision energy from flying insects without tearing.\n\nBut behind this advanced architectural ability, the social structure within a spider's family can be very chaotic." 
    },
    anatomy: [
      { part: { id: "Spinneret", en: "Spinnerets" }, desc: { id: "Organ pemintal sutra di ujung perut laba-laba.", en: "Silk-spinning organs at the end of a spider's abdomen." } },
      { part: { id: "Pedipalpus", en: "Pedipalps" }, desc: { id: "Sepasang anggota badan pendek di dekat mulut untuk merasakan makanan dan kawin.", en: "A pair of short appendages near the mouth for feeling food and mating." } }
    ],
    wowFactor: { 
      id: "Fakta WOW: Kata 'Al-'Ankabut' dalam bahasa Arab merujuk pada laba-laba BETINA, dan sains modern membuktikan bahwa memang laba-laba betinalah yang membuat jaring/rumah.\n\nSelain itu, kenapa Al-Qur'an menyebut 'rumah paling lemah/rapuh'? Sains perilaku hewan mengungkap fakta mengerikan: rumah laba-laba tidak memiliki rasa kasih sayang! Laba-laba betina sering memakan pejantannya setelah kawin, dan anak-anak laba-laba yang menetas terkadang saling memakan saudara mereka sendiri! Rumah laba-laba rapuh secara fisik (mudah tersapu angin), dan lebih rapuh lagi secara ikatan keluarga (tidak aman untuk keluarga sendiri). Benar-benar perumpamaan luar biasa akurat dari Al-Qur'an!", 
      en: "WOW Fact: The Arabic word 'Al-'Ankabut' refers to a FEMALE spider, and modern science proves that it is indeed the female spider that builds the web/home.\n\nAlso, why does the Qur'an say 'the weakest/most fragile of homes'? Animal behavior science reveals a chilling fact: the spider's home is devoid of affection! The female spider often eats the male after mating, and newly hatched spiderlings sometimes eat their own siblings! The spider's home is physically fragile (easily swept away by wind), and even more fragile in family bonds (unsafe for its own family). A truly astonishingly accurate parable from the Qur'an!" 
    },
    quranVerse: {
      arabic: "وَإِنَّ أَوْهَنَ الْبُيُوتِ لَبَيْتُ الْعَنْكَبُوتِ ۖ لَوْ كَانُوا يَعْلَمُونَ",
      transliteration: "Wa inna awhanal-buyuuti labaitul-'ankabuuti law kaanuu ya'lamuun.",
      translation: { id: "Dan sesungguhnya rumah yang paling lemah adalah rumah laba-laba kalau mereka mengetahui.", en: "And indeed, the weakest of homes is the home of the spider, if they only knew." }
    },
    quiz: [
      {
        question: { id: "Dalam Al-Qur'an, kata Al-'Ankabut (laba-laba betina) digunakan karena...", en: "In the Qur'an, the word Al-'Ankabut (female spider) is used because..." },
        options: [{ text: { id: "Hanya laba-laba betina yang membuat jaring", en: "Only female spiders build webs" } }, { text: { id: "Laba-laba jantan bisa terbang", en: "Male spiders can fly" } }, { text: { id: "Laba-laba betina ukurannya raksasa", en: "Female spiders are giant" } }, { text: { id: "Semua laba-laba itu betina", en: "All spiders are female" } }],
        answerIdx: 0
      },
      {
        question: { id: "Secara ilmiah, sutra laba-laba ternyata lebih kuat dari...", en: "Scientifically, spider silk is actually stronger than..." },
        options: [{ text: { id: "Baja dengan ukuran tebal yang sama", en: "Steel of the same thickness" } }, { text: { id: "Berlian", en: "Diamond" } }, { text: { id: "Batu bata", en: "Brick" } }, { text: { id: "Plastik tebal", en: "Thick plastic" } }],
        answerIdx: 0
      },
      {
        question: { id: "Apa arti psikologis dari 'rumah paling rapuh' pada sarang laba-laba menurut biologi hewan?", en: "What is the psychological meaning of 'weakest home' in a spider's nest according to animal biology?" },
        options: [{ text: { id: "Anggota keluarga saling memakan dan tidak harmonis", en: "Family members eat each other and lack harmony" } }, { text: { id: "Rumahnya cepat berjamur", en: "The house gets moldy fast" } }, { text: { id: "Cahaya matahari merusaknya", en: "Sunlight destroys it" } }, { text: { id: "Selalu basah karena embun", en: "Always wet from dew" } }],
        answerIdx: 0
      }
    ]
  }
};

import { ObjectData } from "../objects";

export const lalatData: ObjectData = {
  slug: "lalat",
  name: { id: "Lalat", en: "Fly" },
  icon: "🪰", 
  category: "hewan",
  type: "hewan",
  scientificName: "Musca domestica",
  surahName: "Al-Hajj",
  surahReference: "22:73", 
  unlockedAtPoints: 50, 
  
  kosakata: [
    { arab: "ذُبَابٌ", latin: "Zubaab", arti: "Lalat", artiEn: "Fly", contohAyat: "Contoh perumpamaan kelemahan sesuatu selain Allah" },
    { arab: "سَلَبَ", latin: "Salaba", arti: "Merampas", artiEn: "Snatch", contohAyat: "Jika lalat merampas sesuatu darimu" },
    { arab: "جَنَاحٌ", latin: "Janaah", arti: "Sayap", artiEn: "Wing", contohAyat: "Di satu sayap lalat ada penyakit, sayap lain ada obat" },
    { arab: "ضَعُفَ", latin: "Dha'ufa", arti: "Lemah", artiEn: "Weak", contohAyat: "Sangat lemah yang menyembah dan yang disembah" }
  ],
  
  balita: {
    text: { id: "Wung wung... itu lalat! Dia suka terbang ke sana ke mari. Jangan biarkan dia hinggap di makananmu ya! 🪰🚫", en: "Buzz buzz... that's a fly! It likes to fly around. Don't let it land on your food! 🪰🚫" },
    audioTranscript: { id: "Awas lalat terbang dekat makanan! Hus hus! Lalat itu hewan kecil yang harus kita usir kalau mau makan, supaya perut kita tidak sakit.", en: "Watch out for the fly near the food! Shoo shoo! The fly is a small animal we must chase away when eating, so our tummy doesn't hurt." },
    quiz: {
      question: { id: "Apa yang harus kita lakukan jika ada lalat di dekat makanan kita?", en: "What should we do if there is a fly near our food?" },
      options: [
        { text: { id: "👋 Mengusirnya dan tutup makanan", en: "👋 Chase it away and cover food" } },
        { text: { id: "🍽️ Dibiarkan ikut makan", en: "🍽️ Let it eat with us" } },
        { text: { id: "👀 Ditonton saja", en: "👀 Just watch it" } }
      ],
      answerIdx: 0
    }
  },
  
  anak: {
    text: { id: "Lalat punya mata super besar seperti kacamata alien, lho! Makanya dia sangat susah ditangkap.", en: "Flies have super big eyes like alien glasses! That's why they're so hard to catch." },
    facts: [
      { id: "Lalat mencicipi makanannya menggunakan kaki mereka, bukan lidah!", en: "Flies taste their food using their feet, not their tongue!" },
      { id: "Mereka makan makanan padat dengan meludahkan cairan ke atasnya agar cair, lalu menyedotnya seperti minuman.", en: "They eat solid food by spitting liquid on it to melt it, then sucking it up like a drink." },
      { id: "Mata lalat terbuat dari 4.000 lensa kecil yang bikin dia bisa melihat hampir 360 derajat ke segala arah.", en: "Fly eyes are made of 4,000 tiny lenses that let them see almost 360 degrees in all directions." },
      { id: "Lalat rumah terbang dengan kecepatan sekitar 8 km/jam, sangat cepat untuk hewan sekecil itu.", en: "Houseflies fly at around 8 km/h, which is very fast for such a small animal." },
      { id: "Lalat menggosok-gosokkan kakinya untuk membersihkan sensor di kakinya agar tetap bisa mencicipi dan mencium.", en: "Flies rub their legs together to clean the sensors on their feet so they can keep tasting and smelling." }
    ],
    quranVerse: {
      arabic: "يَا أَيُّهَا النَّاسُ ضُرِبَ مَثَلٌ فَاسْتَمِعُوا لَهُ ۚ إِنَّ الَّذِينَ تَدْعُونَ مِنْ دُونِ اللَّهِ لَنْ يَخْلُقُوا ذُبَابًا وَلَوِ اجْتَمَعُوا لَهُ",
      transliteration: "Yaa ayyuhan-naasu dhuriba matsalun fastami'uu lahu. Innal-ladziina tad'uuna min duunil-laahi lany yakhluquu dzubaabaw-walawijtama'uu lahu.",
      translation: { id: "Hai manusia, telah dibuat perumpamaan, maka dengarkanlah olehmu perumpamaan itu. Sesungguhnya segala yang kamu seru selain Allah sekali-kali tidak dapat menciptakan seekor lalatpun, walaupun mereka bersatu menciptakannya.", en: "O people, an example is presented, so listen to it. Indeed, those you invoke besides Allah will never create [as much as] a fly, even if they gathered together for that purpose." },
      context: { id: "Tau nggak? Semua orang terpintar di seluruh dunia kumpul pun, mereka tidak akan pernah bisa membuat robot kecil yang bisa terbang dan hidup sehebat lalat ciptaan Allah!", en: "Did you know? Even if all the smartest people in the world gathered, they could never build a tiny robot that can fly and live as amazingly as a fly created by Allah!" }
    },
    quiz: {
      question: { id: "Bagian tubuh mana yang dipakai lalat untuk mencicipi rasanya makanan?", en: "Which body part does a fly use to taste food?" },
      options: [
        { text: { id: "Kaki", en: "Feet" } },
        { text: { id: "Lidah", en: "Tongue" } },
        { text: { id: "Antena", en: "Antennae" } },
        { text: { id: "Sayap", en: "Wings" } }
      ],
      answerIdx: 0
    }
  },
  
  explorer: {
    text: { 
      id: "Dunia lalat sangat kotor menurut standar manusia, tapi lalat sendiri adalah mesin luar biasa. Karena lalat tidak punya gigi untuk mengunyah, anatomi pencernaan mereka sangat ekstrim. Saat lalat hinggap di makananmu, dia memuntahkan enzim asam dari perutnya yang segera mencairkan makanan itu, lalu menyedotnya layaknya sup.\n\nSecara mekanik, penerbangan lalat mengalahkan helikopter tercanggih manusia. Lalat memiliki dua antena penyeimbang kecil bernama 'halteres' yang memproses pergerakan angin dalam sepersekian milidetik, sehingga lalat bisa bermanuver menghindari pukulan tanganmu dengan begitu mudah.\n\nMereka bergerak di garis waktu yang berbeda; otak lalat memproses gambar lebih cepat dari kita, membuat gerakan tangan kita terlihat 'slow-motion' bagi mereka!", 
      en: "The world of flies is very dirty by human standards, but the fly itself is an incredible machine. Because flies don't have teeth to chew, their digestive anatomy is extreme. When a fly lands on your food, it vomits acid enzymes from its stomach that instantly melt the food, then sucks it up like soup.\n\nMechanically, fly flight beats humanity's most advanced helicopters. Flies have two tiny balancing organs called 'halteres' that process wind movement in a fraction of a millisecond, allowing them to easily maneuver and dodge your swat.\n\nThey operate on a different timeline; a fly's brain processes images faster than ours, making our hand movements look like slow-motion to them!" 
    },
    anatomy: [
      { part: { id: "Mata Majemuk", en: "Compound Eyes" }, desc: { id: "Ribuan lensa omatidia yang memberikan pandangan mosaik super cepat.", en: "Thousands of ommatidia lenses providing super fast mosaic vision." } },
      { part: { id: "Halteres", en: "Halteres" }, desc: { id: "Sayap belakang yang menyusut menjadi tongkat kecil peningkat keseimbangan terbang giroskopik.", en: "Hind wings reduced to small gyroscopic flight-balancing clubs." } }
    ],
    wowFactor: { 
      id: "Fakta WOW mencengangkan: Nabi Muhammad SAW bersabda, 'Jika ada lalat jatuh ke minumanmu, celupkanlah seluruh tubuhnya lalu buanglah, karena di satu sayapnya ada penyakit dan sayap lainnya ada penawarnya.'\n\nSelama berabad-abad orang ragu dengan hadits ini. Tapi sains biologi mikro modern pada tahun 2000-an akhirnya menemukan bahwa lalat menghasilkan antibiotik kuat di tubuh kanannya, jamur mikroskopis yang secara aktif membunuh bakteri berbahaya! Lalat hidup di tempat kotor namun tak pernah sakit karena antibiotik di sayapnya ini. Mencelupkan lalat memaksa keluarnya zat antimikroba alami untuk menetralkan bakteri! Sains membuktikan perkataan Rasulullah!", 
      en: "Astonishing WOW Fact: Prophet Muhammad PBUH said, 'If a fly falls into your drink, dip it completely and throw it away, because on one of its wings is a disease and on the other is the cure.'\n\nFor centuries people doubted this hadith. But modern microbiology in the 2000s finally discovered that flies produce powerful antibiotics on the right side of their bodies, microscopic fungi that actively kill dangerous bacteria! Flies live in dirty places but never get sick due to antibiotics on their wings. Dipping the fly forces the release of natural antimicrobial substances to neutralize bacteria! Science proves the words of the Prophet!" 
    },
    quranVerse: {
      arabic: "وَإِنْ يَسْلُبْهُمُ الذُّبَابُ شَيْئًا لَا يَسْتَنْقِذُوهُ مِنْهُ ۚ ضَعُفَ الطَّالِبُ وَالْمَطْلُوبُ",
      transliteration: "Wa iny yaslub-humudz-dzubaabu syai'al laa yastanqidzuuhu minhu; dha'ufath-thaalibu wal-mathluub.",
      translation: { id: "Dan jika lalat itu merampas sesuatu dari mereka, tiadalah mereka dapat merebutnya kembali dari lalat itu. Amat lemahlah yang menyembah dan amat lemah (pulalah) yang disembah.", en: "And if the fly should steal away from them a [tiny] thing, they could not recover it from him. Weak are the pursuer and pursued." }
    },
    quiz: [
      {
        question: { id: "Apa yang membuat lalat sangat ahli menghindar saat kita mencoba memukulnya?", en: "What makes flies expert at dodging when we try to swat them?" },
        options: [{ text: { id: "Otak mereka memproses gambar lebih cepat (melihat kita slow-motion)", en: "Their brains process images faster (seeing us in slow-mo)" } }, { text: { id: "Mereka bisa memprediksi masa depan", en: "They can predict the future" } }, { text: { id: "Sayap mereka kebal", en: "Their wings are invulnerable" } }, { text: { id: "Mata mereka bisa mengeluarkan sinar laser", en: "Their eyes shoot lasers" } }],
        answerIdx: 0
      },
      {
        question: { id: "Menurut penemuan mikrobiologi yang membenarkan sabda Nabi SAW, apa yang ada di tubuh lalat?", en: "According to microbiological discoveries validating the Prophet's saying, what is on the fly's body?" },
        options: [{ text: { id: "Zat antibiotik/penawar pembunuh bakteri", en: "Antibiotic substances/cures that kill bacteria" } }, { text: { id: "Racun mematikan yang tak ada obatnya", en: "A deadly poison with no cure" } }, { text: { id: "Debu biasa saja", en: "Just normal dust" } }, { text: { id: "Zat pewarna hitam", en: "Black dye substance" } }],
        answerIdx: 0
      },
      {
        question: { id: "Dalam ayat tentang penciptaan lalat, Al-Qur'an menantang manusia. Manusia takkan bisa merebut kembali apa yang diambil lalat karena...", en: "In the verse about the fly's creation, the Qur'an challenges humans. Humans can't take back what the fly takes because..." },
        options: [{ text: { id: "Lalat mencairkan makanan, mengubah total bentuk aslinya saat disedot", en: "The fly liquefies food, totally changing its original form when sucked" } }, { text: { id: "Lalat terbang terlalu tinggi ke luar angkasa", en: "The fly flies too high into space" } }, { text: { id: "Lalat menyembunyikan makanannya di gua", en: "The fly hides its food in a cave" } }, { text: { id: "Lalat makan besi", en: "The fly eats iron" } }],
        answerIdx: 0
      }
    ]
  }
};

import { ObjectData } from "../objects";

export const sapiData: ObjectData = {
  slug: "sapi",
  name: { id: "Sapi", en: "Cow" },
  icon: "🐄",
  category: "mamalia",
  type: "hewan",
  scientificName: "Bos taurus",
  surahName: "Al-Baqarah",
  surahReference: "2:67",
  unlockedAtPoints: 75,
  kosakata: [
    { arab: "بَقَرَة", latin: "Baqarah", arti: "Sapi (Betina)", artiEn: "Cow", contohAyat: "Sesungguhnya Allah menyuruh kamu menyembelih seekor sapi betina." }
  ],
  balita: {
    text: { id: "Moooo! Halo, aku sapi yang suka makan rumput hijau. Susuku enak dan sehat lho! 🥛", en: "Moooo! Hello, I am a cow who loves eating green grass. My milk is tasty and healthy! 🥛" },
    audioTranscript: { id: "Moooo! Ayo minum susu setiap hari agar tulangmu kuat sepertiku!", en: "Moooo! Let's drink milk every day so your bones grow strong like mine!" },
    quiz: {
      question: { id: "Apa minuman sehat yang dihasilkan oleh sapi betina?", en: "What healthy drink is produced by a female cow?" },
      options: [
        { text: { id: "Air Soda", en: "Soda Water" } },
        { text: { id: "Susu", en: "Milk" } },
        { text: { id: "Jus Apel", en: "Apple Juice" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Tahukah kamu nama surah terpanjang di dalam Al-Qur'an? Ya, namanya Surah Al-Baqarah yang berarti Sapi Betina! Sapi adalah ciptaan Allah yang memberi banyak sekali manfaat untuk manusia, mulai dari susu hingga dagingnya.", en: "Do you know the name of the longest surah in the Quran? Yes, it's Surah Al-Baqarah which means The Cow! Cows are Allah's creation that provide many benefits for humans, from milk to meat." },
    facts: [
      { id: "Sapi punya 1 lambung raksasa yang terbagi menjadi 4 ruangan besar untuk mencerna rumput!", en: "Cows have 1 giant stomach divided into 4 large compartments to digest grass!" },
      { id: "Sapi menghabiskan sekitar 8 jam sehari untuk makan dan 8 jam lagi untuk mengunyah kembali makanannya.", en: "Cows spend about 8 hours a day eating and another 8 hours re-chewing their food." },
      { id: "Sapi bisa mengenali lebih dari 50 sapi lainnya dalam kelompok mereka.", en: "Cows can recognize more than 50 other cows in their herd." }
    ],
    quranVerse: {
      arabic: "وَإِنَّ لَكُمْ فِي الْأَنْعَامِ لَعِبْرَةً ۖ نُسْقِيكُمْ مِمَّا فِي بُطُونِهِ مِنْ بَيْنِ فَرْثٍ وَدَمٍ لَبَنًا خَالِصًا سَائِغًا لِلشَّارِبِينَ",
      transliteration: "Wa inna lakum fil-an'ami la'ibratan nusqikum mimma fi butunihi min bayni farthin wa damin labanan khalisans a'ighan lish-sharibin.",
      translation: { id: "Dan sesungguhnya pada binatang ternak itu benar-benar terdapat pelajaran bagi kamu. Kami memberimu minum dari pada apa yang berada dalam perutnya (berupa) susu yang bersih antara tahi dan darah, yang mudah ditelan bagi orang-orang yang meminumnya.", en: "And indeed, for you in grazing livestock is a lesson. We give you drink from what is in their bellies - between excretion and blood - pure milk, palatable to drinkers." },
      context: { id: "Allah menjelaskan keajaiban proses terbentuknya susu sapi yang murni dan bersih.", en: "Allah explains the miracle of how pure and clean cow's milk is formed." }
    },
    quiz: {
      question: { id: "Apa arti dari nama surah 'Al-Baqarah'?", en: "What does the surah name 'Al-Baqarah' mean?" },
      options: [
        { text: { id: "Sapi Jantan", en: "Bull" } },
        { text: { id: "Gajah Besar", en: "Big Elephant" } },
        { text: { id: "Sapi Betina", en: "Cow" } }
      ],
      answerIdx: 2
    }
  },
  explorer: {
    text: { id: "Proses pembuatan susu sapi sangat menakjubkan! Al-Qur'an menyebutkan susu keluar murni 'di antara tahi dan darah'. Secara sains modern, rumput yang dimakan sapi difermentasi dalam perut (menghasilkan limbah/tahi), nutrisinya diserap darah, lalu kelenjar susu sapi mengambil nutrisi dari darah itu untuk menjadi susu putih bersih! Masya Allah, keajaiban biologi yang telah dijelaskan Al-Qur'an 1400 tahun lalu!", en: "The process of making cow's milk is amazing! The Quran mentions milk comes out pure 'between excretion and blood'. In modern science, grass eaten by cows ferments in the stomach (producing waste), nutrients are absorbed by blood, then mammary glands take nutrients from the blood to become clean white milk! Masya Allah, a biological miracle explained in the Quran 1400 years ago!" },
    anatomy: [
      { part: { id: "Perut Ruminansia", en: "Ruminant Stomach" }, desc: { id: "Perut khusus 4 ruangan (Rumen, Retikulum, Omasum, Abomasum) untuk memfermentasi rumput keras.", en: "A special 4-chambered stomach to ferment tough grass." } },
      { part: { id: "Ambing Susu", en: "Udder" }, desc: { id: "Pabrik alami tempat nutrisi darah diubah menjadi susu murni segar.", en: "A natural factory where blood nutrients are turned into fresh pure milk." } }
    ],
    wowFactor: { id: "Lidah sapi sangat panjang dan kasar, mereka bahkan bisa menggunakannya untuk membersihkan lubang hidungnya sendiri!", en: "A cow's tongue is very long and rough, they can even use it to clean their own nostrils!" },
    quranVerse: {
      arabic: "وَإِذْ قَالَ مُوسَىٰ لِقَوْمِهِ إِنَّ اللَّهَ يَأْمُرُكُمْ أَنْ تَذْبَحُوا بَقَرَةً",
      transliteration: "Wa idh qala Musa liqawmihi innallaha ya'murukum an tadhbahu baqarah.",
      translation: { id: "Dan (ingatlah), ketika Musa berkata kepada kaumnya: 'Sesungguhnya Allah menyuruh kamu menyembelih seekor sapi betina.'", en: "And [recall] when Moses said to his people, 'Indeed, Allah commands you to slaughter a cow.'" }
    },
    quiz: [
      {
        question: { id: "Secara sains, kelenjar susu sapi mengambil nutrisi dari apa untuk diubah menjadi susu?", en: "Scientifically, what do the cow's mammary glands take nutrients from to be turned into milk?" },
        options: [
          { text: { id: "Dari aliran darah", en: "From the bloodstream" } },
          { text: { id: "Langsung dari air minum", en: "Directly from drinking water" } },
          { text: { id: "Dari tulang", en: "From the bones" } }
        ],
        answerIdx: 0
      }
    ]
  }
};

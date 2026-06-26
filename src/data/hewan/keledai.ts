import { ObjectData } from "../objects";

export const keledaiData: ObjectData = {
  slug: "keledai",
  name: { id: "Keledai", en: "Donkey" },
  icon: "🫏",
  category: "hewan",
  type: "hewan",
  scientificName: "Equus asinus",
  surahName: "Luqman",
  surahReference: "31:19",
  unlockedAtPoints: 70,

  kosakata: [
    { arab: "حِمَارٌ", latin: "Himaar", arti: "Keledai", artiEn: "Donkey", contohAyat: "Suara paling buruk adalah suara keledai." },
    { arab: "صَوْتٌ", latin: "Shawt", arti: "Suara", artiEn: "Voice", contohAyat: "Suara keledai sangat keras dan serak." },
    { arab: "حَمْلٌ", latin: "Haml", arti: "Beban", artiEn: "Burden", contohAyat: "Keledai membawa beban di punggungnya." },
    { arab: "أُذُنٌ", latin: "Udzun", arti: "Telinga", artiEn: "Ear", contohAyat: "Telinga keledai panjang dan unik." }
  ],

  balita: {
    text: { id: "Ini keledai! Telinganya panjang dan bunyinya nyaring sekali! 🫏", en: "This is a donkey! Its ears are long and its sound is very loud! 🫏" },
    audioTranscript: { id: "Hi-hoo! Hi-hoo! Itu suara keledai lho! Coba lihat, telinganya panjang banget ya? Keledai itu hewan yang sangat kuat bawa barang berat. Hebat ya!", en: "Hee-haw! Hee-haw! That's a donkey's sound! Look, its ears are really long, right? Donkeys are very strong animals that carry heavy things. Awesome!" },
    quiz: {
      question: { id: "Bagaimana suara keledai?", en: "What does a donkey sound like?" },
      options: [
        { text: { id: "Mbeeek", en: "Baaa" } },
        { text: { id: "Meow", en: "Meow" } },
        { text: { id: "Hi-hoo / meringkik", en: "Hee-haw / bray" } }
      ],
      answerIdx: 2
    }
  },

  anak: {
    text: { id: "Keledai mungkin terlihat seperti kuda kecil, tapi mereka sangat pintar dan kuat!", en: "Donkeys might look like small horses, but they are very smart and strong!" },
    facts: [
      { id: "Telinga keledai yang panjang membantunya mendengar suara dari jarak 100 kilometer lho!", en: "A donkey's long ears help it hear sounds from 100 kilometers away!" },
      { id: "Keledai sering dibilang keras kepala, padahal itu karena mereka super hati-hati terhadap bahaya.", en: "Donkeys are often called stubborn, but that's because they are super cautious of danger." },
      { id: "Suara keledai sangat keras, melengking, dan mengganggu telinga.", en: "Donkey sounds are very loud, shrill, and annoying to the ear." },
      { id: "Mereka bisa memanggul barang seberat tubuhnya sendiri naik turun gunung.", en: "They can carry goods as heavy as their own body up and down mountains." },
      { id: "Keledai adalah teman baik manusia untuk membantu bekerja sejak zaman dulu sekali.", en: "Donkeys have been humanity's good friends for helping with work since ancient times." }
    ],
    quranVerse: {
      arabic: "وَاغْضُضْ مِن صَوْتِكَ ۚ إِنَّ أَنكَرَ الْأَصْوَاتِ لَصَوْتُ الْحَمِيرِ",
      transliteration: "Waghdhudh min shawtika, inna ankaral ashwaati lashawtul hamiir",
      translation: { id: "Dan lunakkanlah suaramu. Sesungguhnya seburuk-buruk suara ialah suara keledai.", en: "And lower your voice; indeed, the most disagreeable of sounds is the voice of donkeys." },
      context: { id: "Tau nggak? Di surah Luqman, Allah menasihati kita supaya tidak teriak-teriak atau bicara terlalu keras. Karena suara keras yang mengganggu itu dimisalkan seperti ringkikan keledai. Jadi bicara yang lembut ya!", en: "Did you know? In Surah Luqman, Allah advises us not to yell or speak too loudly. Because an annoying loud voice is likened to a donkey's bray. So speak gently!" }
    },
    quiz: {
      question: { id: "Apa yang membuat keledai dibilang 'keras kepala'?", en: "What makes donkeys said to be 'stubborn'?" },
      options: [
        { text: { id: "Mereka nakal", en: "They are naughty" } },
        { text: { id: "Mereka sangat berhati-hati sebelum melangkah", en: "They are very cautious before stepping" } },
        { text: { id: "Mereka malas", en: "They are lazy" } },
        { text: { id: "Mereka suka tidur", en: "They like to sleep" } }
      ],
      answerIdx: 1
    }
  },

  explorer: {
    text: { id: "Secara biologis, keledai (Equus asinus) sangat tahan terhadap lingkungan gurun yang kering. Mereka mendapatkan sebagian besar air dari tanaman yang mereka makan dan jarang sakit.\n\nTelinga raksasa mereka tidak hanya berfungsi sebagai radar pendengaran mutakhir, tetapi juga penuh dengan pembuluh darah yang berfungsi melepaskan panas tubuh layaknya telinga gajah!\n\nDi masa lalu, keledai sering dijadikan simbol perumpamaan, baik tentang kekuatan pikulannya, maupun tentang kebebalan jika hanya memikul tanpa mengambil pelajaran.", en: "Biologically, donkeys (Equus asinus) are very resistant to dry desert environments. They get most of their water from the plants they eat and rarely get sick.\n\nTheir giant ears not only serve as advanced hearing radar, but are also full of blood vessels that function to release body heat like an elephant's ears!\n\nIn the past, donkeys were often used as allegorical symbols, both for their carrying strength, and for stubbornness if they only carry burdens without learning lessons." },
    anatomy: [
      { part: { id: "Telinga Panjang", en: "Long Ears" }, desc: { id: "Mendengar jarak jauh & membuang panas tubuh di padang pasir.", en: "Hear from a distance & release body heat in the desert." } },
      { part: { id: "Pita Suara", en: "Vocal Cords" }, desc: { id: "Menghasilkan suara keras bernada ganda (menarik dan menghembus napas).", en: "Produces loud dual-toned sounds (inhaling and exhaling)." } }
    ],
    wowFactor: { id: "Sains tentang suara keledai menunjukkan hal unik: tidak seperti kuda yang merengek saat mengeluarkan napas, keledai meringkik baik saat menarik napas maupun menghembuskannya, sehingga menghasilkan suara 'Hee-Haw' yang sumbang dan kasar menembus frekuensi.\n\nSecara luar biasa, Al-Qur'an dalam surat Luqman menjadikan anatomi vokal keledai ini sebagai perumpamaan agar manusia berakhlak mulia: 'Sesungguhnya seburuk-buruk suara ialah suara keledai (Hamiir)'. Pesan psikologisnya luar biasa: suara keras tak selamanya berwibawa, justru ketenangan dan kelembutanlah letak wibawa manusia!", en: "Science regarding donkey sounds shows a unique thing: unlike horses that whinny when exhaling, donkeys bray both when inhaling and exhaling, producing a discordant and harsh 'Hee-Haw' sound piercing frequencies.\n\nExtraordinarily, the Qur'an in Surah Luqman uses this donkey vocal anatomy as an allegory for humans to have noble character: 'Indeed, the most disagreeable of sounds is the voice of donkeys (Hamiir)'. The psychological message is amazing: a loud voice is not always authoritative; rather, calmness and gentleness are where human authority lies!" },
    quranVerse: {
      arabic: "وَاقْصِدْ فِي مَشْيِكَ وَاغْضُضْ مِن صَوْتِكَ ۚ إِنَّ أَنكَرَ الْأَصْوَاتِ لَصَوْتُ الْحَمِيرِ",
      transliteration: "Waqshid fii masyika waghdhudh min shawtika, inna ankaral ashwaati lashawtul hamiir",
      translation: { id: "Dan sederhanakanlah kamu dalam berjalan dan lunakkanlah suaramu. Sesungguhnya seburuk-buruk suara ialah suara keledai.", en: "And be moderate in your pace and lower your voice; indeed, the most disagreeable of sounds is the voice of donkeys." }
    },
    quiz: [
      {
        question: { id: "Kenapa suara keledai sangat unik (Hee-Haw)?", en: "Why is a donkey's sound so unique (Hee-Haw)?" },
        options: [{ text: { id: "Karena dia marah", en: "Because it's angry" } }, { text: { id: "Bersuara saat tarik napas & hembus napas", en: "Vocalizes when inhaling & exhaling" } }, { text: { id: "Meniru suara burung", en: "Mimicking birds" } }, { text: { id: "Hanya saat menghembus napas", en: "Only when exhaling" } }],
        answerIdx: 1
      },
      {
        question: { id: "Surat apa yang menasihati kita agar tidak berteriak seperti keledai?", en: "Which surah advises us not to yell like a donkey?" },
        options: [{ text: { id: "Al-Baqarah", en: "Al-Baqarah" } }, { text: { id: "Luqman", en: "Luqman" } }, { text: { id: "Ar-Rahman", en: "Ar-Rahman" } }, { text: { id: "Al-Mulk", en: "Al-Mulk" } }],
        answerIdx: 1
      },
      {
        question: { id: "Apa fungsi lain dari telinga panjang keledai selain mendengar?", en: "What is another function of donkey's long ears besides hearing?" },
        options: [{ text: { id: "Membuang panas tubuh", en: "Releasing body heat" } }, { text: { id: "Untuk terbang", en: "To fly" } }, { text: { id: "Untuk menakuti musuh", en: "To scare enemies" } }, { text: { id: "Untuk menyimpan air", en: "To store water" } }],
        answerIdx: 0
      }
    ]
  }
};

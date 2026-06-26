import { ObjectData } from "../objects";

export const terataiData: ObjectData = {
  slug: "teratai",
  name: { id: "Teratai", en: "Lotus" },
  icon: "🪷",
  category: "tumbuhan",
  type: "tumbuhan",
  scientificName: "Nelumbo nucifera",
  surahName: "Al-Anbiya",
  surahReference: "21:30",
  unlockedAtPoints: 10,
  kosakata: [
    { arab: "لُوتَس", latin: "Lūtas", arti: "Teratai", artiEn: "Lotus", contohAyat: "Allah menciptakan setiap yang hidup dari air." }
  ],
  balita: {
    text: { id: "Lihat, bunga ini mengapung di atas air! Daunnya sangat lebar seperti piring hijau yang besar. 🪷 Katak suka sekali duduk di atas daun teratai ini!", en: "Look, this flower is floating on water! Its leaves are very wide like large green plates. 🪷 Frogs really love to sit on these lotus leaves!" },
    audioTranscript: { id: "Bunga teratai hidupnya di air dan daunnya sangat lebar.", en: "The lotus flower lives in the water and its leaves are very wide." },
    quiz: {
      question: { id: "Di mana bunga teratai biasanya hidup dan tumbuh?", en: "Where do lotus flowers usually live and grow?" },
      options: [
        { text: { id: "Di puncak gunung es", en: "On top of an iceberg" } },
        { text: { id: "Mengapung di atas air (kolam/danau)", en: "Floating on water (pond/lake)" } },
        { text: { id: "Di padang pasir", en: "In the desert" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Teratai adalah tanaman ajaib! Akarnya tertanam di dalam lumpur kotor di dasar kolam, tetapi bunganya mekar di atas air dan selalu bersih! Subhanallah, ini adalah pesan indah: Meskipun kita berada di lingkungan yang buruk, kita tetap bisa menjaga diri tetap bersih, baik, dan memancarkan keindahan akhlak.", en: "The lotus is a magical plant! Its roots are planted in the dirty mud at the bottom of the pond, but its flower blooms above the water and is always clean! Subhanallah, this is a beautiful message: Even if we are in a bad environment, we can still keep ourselves clean, good, and radiate the beauty of our character." },
    facts: [
      { id: "Daun teratai tidak pernah basah karena dilapisi lapisan lilin mikro yang menolak air.", en: "Lotus leaves never get wet because they are coated with a micro-wax layer that repels water." },
      { id: "Batang teratai berongga seperti sedotan agar udara bisa sampai ke akar di bawah air.", en: "Lotus stems are hollow like straws so air can reach the roots underwater." },
      { id: "Biji teratai bisa bertahan hidup selama lebih dari 1000 tahun sebelum akhirnya tumbuh!", en: "Lotus seeds can survive for more than 1000 years before finally growing!" }
    ],
    quranVerse: {
      arabic: "وَجَعَلْنَا مِنَ الْمَاءِ كُلَّ شَيْءٍ حَيٍّ",
      transliteration: "Wa ja‘alnā mina al-mā'i kulla shay'in ḥayy",
      translation: { id: "Dan dari air Kami jadikan segala sesuatu yang hidup...", en: "And We made from water every living thing..." },
      context: { id: "Bunga teratai adalah bukti keindahan ciptaan Allah yang bergantung pada air.", en: "The lotus flower is proof of the beauty of Allah's creation that depends on water." }
    },
    quiz: {
      question: { id: "Bunga teratai tumbuh dari lumpur yang kotor, tapi bunganya mekar dengan keadaan seperti apa?", en: "The lotus flower grows from dirty mud, but its flower blooms in what condition?" },
      options: [
        { text: { id: "Menjadi hitam dan kotor", en: "Becomes black and dirty" } },
        { text: { id: "Tetap bersih dan sangat indah", en: "Stays clean and very beautiful" } },
        { text: { id: "Layuh dan bau", en: "Wilted and smelly" } }
      ],
      answerIdx: 1
    }
  },
  explorer: {
    text: { id: "Rahasia kebersihan daun teratai disebut 'Lotus Effect'. Jika diamati dengan mikroskop elektron, permukaan daunnya dipenuhi tonjolan-tonjolan sangat kecil berskala nano. Saat air jatuh ke daun, ia tidak bisa menempel dan langsung menggulung menjadi butiran, menyapu semua debu dan kotoran. Manusia bahkan meniru desain dari Allah Al-Khaliq (Sang Pencipta) ini untuk membuat cat dinding dan pakaian anti air!", en: "The secret to the cleanliness of lotus leaves is called the 'Lotus Effect'. If observed with an electron microscope, the leaf surface is covered in extremely tiny nano-scale bumps. When water drops onto the leaf, it cannot stick and immediately rolls into beads, sweeping away all dust and dirt. Humans even imitate this design from Allah Al-Khaliq (The Creator) to make waterproof paint and clothing!" },
    anatomy: [
      { part: { id: "Papila Nano", en: "Nano Papillae" }, desc: { id: "Tonjolan sangat kecil di daun yang membuat air tergelincir.", en: "Extremely tiny bumps on the leaf that make water slip off." } },
      { part: { id: "Aerenkima", en: "Aerenchyma" }, desc: { id: "Jaringan berongga penyimpan udara agar tanaman bisa bernapas di air.", en: "A spongy tissue storing air so the plant can breathe underwater." } }
    ],
    wowFactor: { id: "Bunga teratai adalah salah satu dari sedikit tanaman yang berdarah panas! Ia bisa mengatur suhu bunganya tetap hangat (sekitar 30°C) meskipun udara luar sedang dingin!", en: "The lotus flower is one of the very few warm-blooded plants! It can regulate its flower temperature to stay warm (around 30°C) even when the outside air is cold!" },
    quranVerse: {
      arabic: "صُنْعَ اللَّهِ الَّذِي أَتْقَنَ كُلَّ شَيْءٍ",
      transliteration: "Sun‘a Allāhi alladhī atqana kulla shay'in",
      translation: { id: "(Itulah) ciptaan Allah yang membuat dengan kokoh (dan sempurna) tiap-tiap sesuatu.", en: "(It is) the work of Allah, who perfected all things." }
    },
    quiz: [
      {
        question: { id: "Apa fenomena yang membuat daun teratai tidak pernah basah dan selalu bersih?", en: "What is the phenomenon that makes lotus leaves never wet and always clean?" },
        options: [
          { text: { id: "Efek Kaca (Glass Effect)", en: "Glass Effect" } },
          { text: { id: "Efek Magnet (Magnet Effect)", en: "Magnet Effect" } },
          { text: { id: "Efek Teratai (Lotus Effect) karena struktur nano di daunnya", en: "Lotus Effect due to nano structures on its leaves" } }
        ],
        answerIdx: 2
      }
    ]
  }
};

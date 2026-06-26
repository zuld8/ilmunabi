import { ObjectData } from "../objects";

export const untaData: ObjectData = {
  slug: "unta",
  name: { id: "Unta", en: "Camel" },
  icon: "🐪",
  category: "hewan",
  type: "hewan",
  scientificName: "Camelus",
  surahName: "Al-Ghashiyah",
  surahReference: "88:17",
  unlockedAtPoints: 100,

  kosakata: [
    { arab: "إِبِلٌ", latin: "Ibil", arti: "Unta", artiEn: "Camel", contohAyat: "Maka apakah mereka tidak memperhatikan unta bagaimana dia diciptakan?" },
    { arab: "جَمَلٌ", latin: "Jamal", arti: "Unta jantan", artiEn: "Male camel", contohAyat: "Digunakan dalam ayat tentang jarum." },
    { arab: "نَاقَةٌ", latin: "Naqah", arti: "Unta betina", artiEn: "Female camel", contohAyat: "Unta betina mukjizat Nabi Shalih AS." },
    { arab: "صَحْرَاءُ", latin: "Sahraa'", arti: "Gurun", artiEn: "Desert", contohAyat: "Tempat hidup alami unta." }
  ],

  balita: {
    text: { id: "Ini unta! Unta punya punuk di punggungnya untuk menyimpan makanan! 🐪", en: "This is a camel! Camels have humps on their backs to store food! 🐪" },
    audioTranscript: { id: "Wah, lihat! Ini unta! Punggungnya ada benjolannya ya? Itu namanya punuk! Unta hebat banget lho, bisa jalan jauh di padang pasir yang panaaas!", en: "Wow, look! It's a camel! It has a bump on its back, right? That's a hump! Camels are awesome, they can walk far in the hot desert!" },
    quiz: {
      question: { id: "Mana gambar unta?", en: "Which one is the camel?" },
      options: [
        { text: { id: "🐪 Unta", en: "🐪 Camel" } },
        { text: { id: "🐘 Gajah", en: "🐘 Elephant" } },
        { text: { id: "🐈 Kucing", en: "🐈 Cat" } }
      ],
      answerIdx: 0
    }
  },

  anak: {
    text: { id: "Unta adalah kendaraan super di padang pasir yang panas!", en: "Camels are super vehicles in the hot desert!" },
    facts: [
      { id: "Unta bisa minum 113 liter air cuma dalam 13 menit! Hah?!", en: "Camels can drink 113 liters of water in just 13 minutes! What?!" },
      { id: "Punuk unta isinya bukan air lho, tapi cadangan lemak.", en: "A camel's hump is not filled with water, but fat reserves." },
      { id: "Bulu mata unta tebal banget buat menahan debu gurun pasir.", en: "Camels have thick eyelashes to keep desert sand out." },
      { id: "Telapak kaki unta lebar seperti sepatu salju supaya tidak tenggelam di pasir.", en: "Camel's feet are wide like snowshoes so they don't sink in the sand." },
      { id: "Mereka bisa menutup lubang hidungnya supaya pasir tidak masuk saat badai!", en: "They can close their nostrils so sand doesn't enter during storms!" }
    ],
    quranVerse: {
      arabic: "أَفَلَا يَنظُرُونَ إِلَى الْإِبِلِ كَيْفَ خُلِقَتْ",
      transliteration: "Afalaa yanzhuruuna ilal ibili kayfa khuliqat",
      translation: { id: "Maka apakah mereka tidak memperhatikan unta bagaimana dia diciptakan?", en: "Then do they not look at the camels - how they are created?" },
      context: { id: "Tau nggak? Allah menyuruh kita memikirkan penciptaan unta lho! Coba lihat betapa keren dan kuatnya ciptaan Allah ini untuk hidup di gurun yang super panas.", en: "Did you know? Allah tells us to think about how camels are created! Look at how cool and strong Allah's creation is to live in the super hot desert." }
    },
    quiz: {
      question: { id: "Apa isi punuk unta?", en: "What is inside a camel's hump?" },
      options: [
        { text: { id: "Air", en: "Water" } },
        { text: { id: "Lemak", en: "Fat" } },
        { text: { id: "Tulang", en: "Bone" } },
        { text: { id: "Pasir", en: "Sand" } }
      ],
      answerIdx: 1
    }
  },

  explorer: {
    text: { id: "Unta dijuluki 'Kapal Gurun'. Mereka bisa bertahan hidup berhari-hari tanpa air dan makanan dalam suhu yang mencapai 50 derajat celcius!\n\nKemampuan adaptasi biologi unta sangat luar biasa. Sistem pencernaan mereka bisa memproses tumbuhan berduri sekalipun tanpa melukai mulutnya yang kebal.\n\nSelain itu, sel darah merah unta berbentuk oval, tidak bulat seperti mamalia lain. Ini memungkinkan darah tetap mengalir lancar walau unta dehidrasi berat!", en: "Camels are dubbed the 'Ships of the Desert'. They can survive for days without water and food in temperatures up to 50 degrees Celsius!\n\nThe camel's biological adaptation is extraordinary. Their digestive system can process thorny plants without hurting their immune mouths.\n\nAlso, camel red blood cells are oval-shaped, not round like other mammals. This allows blood to keep flowing smoothly even when severely dehydrated!" },
    anatomy: [
      { part: { id: "Punuk", en: "Hump" }, desc: { id: "Menyimpan hingga 36 kg lemak cadangan energi.", en: "Stores up to 36 kg of fat for energy reserves." } },
      { part: { id: "Sel Darah Merah", en: "Red Blood Cells" }, desc: { id: "Berbentuk oval agar darah mengalir saat kekurangan cairan.", en: "Oval-shaped so blood flows when lacking fluids." } }
    ],
    wowFactor: { id: "Sains menemukan bahwa sel darah merah unta bisa membesar hingga 240% dari ukuran aslinya saat minum banyak air, tanpa pecah! Mamalia lain sel darahnya akan hancur jika membesar lebih dari 150%.\n\nAl-Qur'an dalam surah Al-Ghashiyah secara khusus memerintahkan kita melihat penciptaan Unta: 'Afalaa yanzhuruuna ilal ibili kayfa khuliqat'. Ayat ini mengajak manusia dari berabad-abad lalu untuk meneliti biologi unta yang ternyata menyembunyikan keajaiban sains luar biasa yang baru terungkap di era modern!", en: "Science found that camel red blood cells can expand up to 240% of their original size when drinking lots of water, without bursting! Other mammals' blood cells would be destroyed if expanded beyond 150%.\n\nThe Qur'an in Surah Al-Ghashiyah specifically commands us to look at the camel's creation. This verse invites humans from centuries ago to research camel biology which apparently hides incredible scientific miracles only revealed in the modern era!" },
    quranVerse: {
      arabic: "أَفَلَا يَنظُرُونَ إِلَى الْإِبِلِ كَيْفَ خُلِقَتْ",
      transliteration: "Afalaa yanzhuruuna ilal ibili kayfa khuliqat",
      translation: { id: "Maka apakah mereka tidak memperhatikan unta bagaimana dia diciptakan?", en: "Then do they not look at the camels - how they are created?" }
    },
    quiz: [
      {
        question: { id: "Apa bentuk sel darah merah unta?", en: "What is the shape of a camel's red blood cells?" },
        options: [{ text: { id: "Bulat", en: "Round" } }, { text: { id: "Kotak", en: "Square" } }, { text: { id: "Oval", en: "Oval" } }, { text: { id: "Segitiga", en: "Triangle" } }],
        answerIdx: 2
      },
      {
        question: { id: "Berapa lama unta bisa minum 113 liter air?", en: "How fast can a camel drink 113 liters of water?" },
        options: [{ text: { id: "13 menit", en: "13 minutes" } }, { text: { id: "1 jam", en: "1 hour" } }, { text: { id: "1 hari", en: "1 day" } }, { text: { id: "30 detik", en: "30 seconds" } }],
        answerIdx: 0
      },
      {
        question: { id: "Surah apa yang menyebutkan keajaiban penciptaan unta?", en: "Which surah mentions the miracle of camel's creation?" },
        options: [{ text: { id: "Al-Fatihah", en: "Al-Fatihah" } }, { text: { id: "Al-Ghashiyah", en: "Al-Ghashiyah" } }, { text: { id: "Al-Baqarah", en: "Al-Baqarah" } }, { text: { id: "Al-Kahf", en: "Al-Kahf" } }],
        answerIdx: 1
      }
    ]
  }
};

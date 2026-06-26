import { ObjectData } from "../objects";

export const jantungData: ObjectData = {
  slug: "jantung",
  name: { id: "Jantung", en: "Heart" },
  icon: "🫀",
  category: "tubuh",
  type: "tubuh",
  scientificName: "Cor / Cardia",
  surahName: "Qaf",
  surahReference: "50:16",
  unlockedAtPoints: 50,
  
  kosakata: [
    { arab: "قَلْبٌ", latin: "Qalb", arti: "Jantung / Hati", artiEn: "Heart", contohAyat: "Pusat dari tubuh dan keyakinan." },
    { arab: "دَمٌ", latin: "Dam", arti: "Darah", artiEn: "Blood", contohAyat: "Yang dipompa oleh jantung." },
    { arab: "صَدْرٌ", latin: "Sadr", arti: "Dada", artiEn: "Chest", contohAyat: "Tempat jantung berdetak." },
    { arab: "وَرِيْدٌ", latin: "Wariid", arti: "Urat Leher / Nadi", artiEn: "Jugular Vein", contohAyat: "Allah lebih dekat dari urat leher." }
  ],
  
  balita: {
    text: { id: "Dug dug! Dug dug! Itu suara jantungmu! 🫀", en: "Thump thump! Thump thump! That's your heart! 🫀" },
    audioTranscript: { id: "Coba pegang dadamu! Terasa ada yang berdetak? Itu jantungmu sedang bekerja memompa darah! MasyaAllah hebat ya!", en: "Try touching your chest! Feel something beating? That's your heart working pumping blood! MasyaAllah, amazing!" },
    quiz: {
      question: { id: "Bagaimana suara detak jantung?", en: "What does a heartbeat sound like?" },
      options: [
        { text: { id: "Dug dug dug", en: "Thump thump thump" } },
        { text: { id: "Miao miao", en: "Meow meow" } },
        { text: { id: "Brum brum", en: "Vroom vroom" } }
      ],
      answerIdx: 0
    }
  },
  
  anak: {
    text: { id: "Jantungmu adalah mesin super yang tidak pernah berhenti berdetak dari sebelum kamu lahir!", en: "Your heart is a super machine that never stops beating since before you were born!" },
    facts: [
      { id: "Ukuran jantungmu kira-kira sebesar kepalan tanganmu sendiri.", en: "Your heart is about the size of your own fist." },
      { id: "Jantung berdetak lebih dari 100 ribu kali setiap hari!", en: "The heart beats more than 100 thousand times every day!" },
      { id: "Tertawa itu sehat karena membuat aliran darah dari jantung lebih lancar.", en: "Laughing is healthy because it makes blood flow from the heart smoother." },
      { id: "Jantung memompa darah ke seluruh tubuh melewati pipa-pipa bernama pembuluh darah.", en: "The heart pumps blood to the whole body through pipes called blood vessels." },
      { id: "Jantung kita bisa terus berdetak karena ada listrik alami di dalamnya.", en: "Our heart can keep beating because there is natural electricity inside it." }
    ],
    quranVerse: {
      arabic: "وَنَحْنُ أَقْرَبُ إِلَيْهِ مِنْ حَبْلِ الْوَرِيدِ",
      transliteration: "Wa nahnu aqrabu ilaihi min hablil-warid",
      translation: { id: "Dan Kami lebih dekat kepadanya daripada urat lehernya.", en: "And We are closer to him than his jugular vein." },
      context: { id: "Tau nggak? Pembuluh darah besar di leher kita itu tersambung langsung dengan jantung. Dan Allah bilang, Allah lebih dekat dengan kita daripada pembuluh darah kita sendiri. Dekat banget!", en: "Did you know? The large blood vessel in our neck connects directly to the heart. And Allah says, Allah is closer to us than our own blood vessels. So close!" }
    },
    quiz: {
      question: { id: "Berapa ukuran jantung kita?", en: "What is the size of our heart?" },
      options: [
        { text: { id: "Sebesar bola sepak", en: "As big as a soccer ball" } },
        { text: { id: "Sebesar kepalan tangan kita", en: "As big as our fist" } },
        { text: { id: "Sebesar kacang polong", en: "As big as a pea" } },
        { text: { id: "Sebesar mobil", en: "As big as a car" } }
      ],
      answerIdx: 1
    }
  },
  
  explorer: {
    text: { id: "Jantung adalah otot terkuat di tubuhmu. Ia mulai berdetak sejak kamu masih berusia 4 minggu di dalam kandungan ibu!\n\nTugas utamanya adalah memompa darah kaya oksigen dari paru-paru ke seluruh tubuh, lalu memompa darah penuh karbon dioksida kembali ke paru-paru.\n\nDalam sehari, jantung bisa memompa darah hingga 7.500 liter!", en: "The heart is the strongest muscle in your body. It started beating when you were just 4 weeks old in your mother's womb!\n\nIts main job is to pump oxygen-rich blood from the lungs to the whole body, and then pump carbon dioxide-filled blood back to the lungs.\n\nIn a day, the heart can pump up to 7,500 liters of blood!" },
    anatomy: [
      { part: { id: "Serambi (Atrium)", en: "Atrium" }, desc: { id: "Bagian atas jantung yang menerima darah.", en: "The upper part of the heart that receives blood." } },
      { part: { id: "Bilik (Ventrikel)", en: "Ventricle" }, desc: { id: "Bagian bawah jantung yang memompa darah keluar.", en: "The lower part of the heart that pumps blood out." } }
    ],
    wowFactor: { id: "Sistem listrik pada jantung sangat luar biasa! Ia bahkan bisa tetap berdetak meskipun dikeluarkan dari tubuh, asalkan masih mendapat oksigen.\n\nDalam Al-Qur'an, kata 'Qalb' (jantung/hati) sering disebut sebagai pusat pemahaman dan keyakinan manusia. Sains terkini juga menemukan bahwa jantung memiliki sistem saraf sendiri yang kompleks, sering disebut sebagai 'otak kecil jantung' yang bisa mengingat dan merasakan!", en: "The electrical system in the heart is incredible! It can even keep beating outside the body, as long as it gets oxygen.\n\nIn the Qur'an, the word 'Qalb' (heart) is often mentioned as the center of human understanding and belief. Modern science also found that the heart has its own complex nervous system, often called the 'little brain of the heart' that can remember and feel!" },
    quranVerse: {
      arabic: "أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ",
      transliteration: "Ala bithikri Allahi tatma'innul-quloob",
      translation: { id: "Ingatlah, hanya dengan mengingat Allah hati (jantung) menjadi tenteram.", en: "Unquestionably, by the remembrance of Allah hearts are assured." }
    },
    quiz: [
      {
        question: { id: "Apa bagian jantung yang bertugas memompa darah keluar?", en: "Which part of the heart pumps blood out?" },
        options: [{ text: { id: "Serambi (Atrium)", en: "Atrium" } }, { text: { id: "Bilik (Ventrikel)", en: "Ventricle" } }, { text: { id: "Aorta", en: "Aorta" } }, { text: { id: "Paru-paru", en: "Lungs" } }],
        answerIdx: 1
      },
      {
        question: { id: "Berapa banyak darah yang dipompa jantung dalam sehari?", en: "How much blood does the heart pump in a day?" },
        options: [{ text: { id: "100 Liter", en: "100 Liters" } }, { text: { id: "500 Liter", en: "500 Liters" } }, { text: { id: "7.500 Liter", en: "7,500 Liters" } }, { text: { id: "1 Juta Liter", en: "1 Million Liters" } }],
        answerIdx: 2
      },
      {
        question: { id: "Apa yang membuat jantung bisa tetap berdetak di luar tubuh dengan oksigen?", en: "What makes the heart able to beat outside the body with oxygen?" },
        options: [{ text: { id: "Sistem listrik internalnya", en: "Its internal electrical system" } }, { text: { id: "Gravitasi bumi", en: "Earth's gravity" } }, { text: { id: "Sinar matahari", en: "Sunlight" } }, { text: { id: "Tekanan udara", en: "Air pressure" } }],
        answerIdx: 0
      }
    ]
  }
};

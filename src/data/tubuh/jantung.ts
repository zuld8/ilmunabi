import { ObjectData } from "../objects";

export const jantungData: ObjectData = {
  slug: "jantung",
  name: {
    id: "Jantung",
    en: "Heart",
  },
  scientificName: "Cor / Cardia",
  surahName: "Qaf",
  surahReference: "50:37",
  icon: "🫀",
  category: "tubuh",
  type: "tubuh",
  unlockedAtPoints: 150,
  kosakata: [
    { arab: "قَلْبٌ", latin: "Qalb", arti: "Jantung/Hati", artiEn: "Heart" },
    { arab: "صَدْرٌ", latin: "Sadr", arti: "Dada", artiEn: "Chest" },
    { arab: "عَقْلٌ", latin: "Aql", arti: "Akal/Pemahaman", artiEn: "Intellect" },
    { arab: "وَرِيدٌ", latin: "Warid", arti: "Urat/Pembuluh Darah", artiEn: "Vein" }
  ],
  balita: {
    text: {
      id: "Ini jantungmu! Jantung berdetak *deg-deg-deg* mengalirkan darah ke seluruh tubuh. 🫀",
      en: "This is your heart! It beats *thump-thump* pumping blood throughout your body. 🫀",
    },
    audioTranscript: {
      id: "Jantung kita berada di dalam dada sebelah kiri. Jantung bekerja siang malam tanpa henti agar kita tetap sehat.",
      en: "Our heart is inside the left chest. The heart works day and night without stopping so we remain healthy.",
    },
    quiz: {
      question: {
        id: "Di mana letak jantung kita?",
        en: "Where is our heart located?",
      },
      options: [
        { text: { id: "Dada sebelah kiri", en: "Left side of the chest" } },
        { text: { id: "Di dalam perut", en: "Inside the stomach" } },
        { text: { id: "Di telapak kaki", en: "In the sole of the foot" } },
      ],
      answerIdx: 0,
    },
  },
  anak: {
    text: {
      id: "Jantung adalah otot penopang hidup kita. Ukuran jantungmu kira-kira sebesar kepalan tanganmu sendiri. Allah merancangnya untuk memompa darah secara konsisten.",
      en: "The heart is the muscular engine of our life. Your heart is about the size of your clenched fist. Allah designed it to pump blood consistently.",
    },
    facts: [
      { id: "Jantung berdetak sekitar 100.000 kali dalam satu hari.", en: "The heart beats about 100,000 times in a single day." },
      { id: "Jantung memompa sekitar 7.500 liter darah setiap hari.", en: "The heart pumps about 7,500 liters of blood daily." },
      { id: "Otot jantung bekerja secara otomatis tanpa harus kita suruh.", en: "Heart muscles work automatically without us telling it to." },
      { id: "Berolahraga secara rutin membantu menjaga kekuatan jantung.", en: "Regular exercise helps maintain the heart's strength." },
    ],
    quranVerse: {
      arabic: "إِنَّ فِي ذَٰلِكَ لَذِكْرَىٰ لِمَنْ كَانَ لَهُ قَلْبٌ",
      transliteration: "Inna fī dhālika ladhikrā liman kāna lahu qalb",
      translation: {
        id: "Sungguh, pada yang demikian itu benar-benar terdapat peringatan bagi orang-orang yang mempunyai jantung (hati),",
        en: "Indeed in that is a reminder for whoever has a heart,",
      },
    },
    quiz: {
      question: {
        id: "Seberapa besar ukuran jantung manusia?",
        en: "How large is the human heart?",
      },
      options: [
        { text: { id: "Sebesar buah semangka", en: "As big as a watermelon" } },
        { text: { id: "Sebesar kepalan tangan sendiri", en: "As big as one's own fist" } },
        { text: { id: "Sebesar kelereng", en: "As big as a marble" } },
      ],
      answerIdx: 1,
    },
  },
  explorer: {
    text: {
      id: "Jantung terbagi menjadi 4 ruang utama (2 atrium dan 2 ventrikel). Jantung memiliki jaringan saraf intrinsik mandiri (pacemaker alami) yang memicu impuls listrik secara otomatis.",
      en: "The heart is divided into 4 chambers (2 atria and 2 ventricles). The heart possesses an intrinsic neural network (natural pacemaker) that generates electrical impulses automatically.",
    },
    anatomy: [
      {
        part: { id: "Nodus Sinoatrial (SA)", en: "SA Node" },
        desc: { id: "Pembangkit listrik alami jantung yang mengatur irama detak.", en: "The natural electrical pacemaker of the heart regulating beat rhythms." },
      },
      {
        part: { id: "Atrium", en: "Atria" },
        desc: { id: "Dua ruang atas jantung yang menerima darah yang masuk.", en: "The two upper chambers of the heart that receive incoming blood." },
      },
      {
        part: { id: "Ventrikel", en: "Ventricles" },
        desc: { id: "Dua ruang bawah berdinding tebal yang memompa darah keluar.", en: "The two thick-walled lower chambers that pump blood out." },
      },
    ],
    wowFactor: {
      id: "Sains modern (neurokardiologi) menemukan bahwa jantung memiliki 'otak kecil' sendiri yang terdiri dari sekitar 40.000 neuron (sel saraf). Jantung bisa memproses informasi, mengingat, dan merasakan secara independen dari otak di kepala. Hal ini menjelaskan mengapa Al-Qur'an mengaitkan pemahaman spiritual dan berpikir dengan 'Qalb' (jantung/hati) bukan semata-mata otak.",
      en: "Modern science (neurocardiology) discovered that the heart has its own 'little brain' consisting of about 40,000 neurons. The heart can process information, remember, and feel independently of the brain in the head. This explains why the Quran attributes spiritual understanding and thinking to the 'Qalb' (heart) rather than the brain alone.",
    },
    quranVerse: {
      arabic: "أَفَلَمْ يَسِيرُوا فِي الْأَرْضِ فَتَكُونَ لَهُمْ قُلُوبٌ يَعْقِلُونَ بِهَا",
      transliteration: "Afalam yasīrū fil-ardhi fatakūna lahum qulūbuy ya'qilūna bihā",
      translation: {
        id: "Maka tidakkah mereka berjalan di bumi, sehingga hati (jantung) mereka dapat memahami,",
        en: "So have they not traveled through the earth and have hearts by which to reason,",
      },
      context: {
        id: "Surah Al-Hajj ayat 46 mengisyaratkan fungsi kognitif dan emosional jantung (Qulub) dalam memahami kebenaran.",
        en: "Surah Al-Hajj verse 46 hints at the cognitive and emotional functions of hearts (Qulub) in understanding truth.",
      },
    },
    quiz: [
      {
        question: {
          id: "Berapa banyak jumlah sel saraf (neuron) intrinsik yang ditemukan di jantung manusia?",
          en: "How many intrinsic neurons are discovered in the human heart?",
        },
        options: [
          { text: { id: "1.000", en: "1,000" } },
          { text: { id: "40.000", en: "40,000" } },
          { text: { id: "1 juta", en: "1 million" } },
        ],
        answerIdx: 1,
      },
    ],
  },
};

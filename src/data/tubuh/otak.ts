import { ObjectData } from "../objects";

export const otakData: ObjectData = {
  slug: "otak",
  name: { id: "Otak", en: "Brain" },
  icon: "🧠",
  category: "tubuh",
  type: "tubuh",
  scientificName: "Encephalon",
  surahName: "Al-'Alaq",
  surahReference: "96:15-16",
  unlockedAtPoints: 50,
  
  kosakata: [
    { arab: "دِمَاغٌ", latin: "Dimaagh", arti: "Otak", artiEn: "Brain", contohAyat: "Pusat berpikir manusia." },
    { arab: "عَقْلٌ", latin: "'Aql", arti: "Akal", artiEn: "Intellect", contohAyat: "Akal yang dianugerahkan Allah untuk memahami." },
    { arab: "نَاصِيَةٌ", latin: "Naasiyah", arti: "Ubun-ubun", artiEn: "Forelock", contohAyat: "Surah Al-'Alaq menyebut ubun-ubun yang berdusta." },
    { arab: "تَفَكَّرَ", latin: "Tafakkara", arti: "Berpikir", artiEn: "To think", contohAyat: "Perintah untuk memikirkan ciptaan Allah." }
  ],
  
  balita: {
    text: { id: "Ini otak! Otak adalah komputer super di dalam kepalamu... 🧠", en: "This is a brain! The brain is a supercomputer inside your head... 🧠" },
    audioTranscript: { id: "Wah, coba pegang kepalamu! Di dalamnya ada otak lho! Otak yang bikin kamu bisa belajar dan bermain! MasyaAllah!", en: "Wow, touch your head! Inside is the brain! It makes you able to learn and play! MasyaAllah!" },
    quiz: {
      question: { id: "Mana gambar otak?", en: "Which one is the brain?" },
      options: [
        { text: { id: "🧠 Otak", en: "🧠 Brain" } },
        { text: { id: "❤️ Jantung", en: "❤️ Heart" } },
        { text: { id: "👀 Mata", en: "👀 Eyes" } }
      ],
      answerIdx: 0
    }
  },
  
  anak: {
    text: { id: "Otakmu bentuknya seperti kacang walnut raksasa yang kenyal!", en: "Your brain looks like a giant, squishy walnut!" },
    facts: [
      { id: "Otak bekerja lebih cepat dari komputer tercepat di dunia.", en: "The brain works faster than the world's fastest computer." },
      { id: "Saat kamu tidur, otakmu justru sibuk merapikan ingatanmu hari itu.", en: "When you sleep, your brain is busy organizing your memories." },
      { id: "Otak kita tidak punya saraf perasa sakit, jadi otak tidak bisa merasakan sakit!", en: "The brain has no pain receptors, so it can't feel pain!" },
      { id: "Otak butuh banyak air, makanya jangan lupa minum air putih ya!", en: "The brain needs a lot of water, so don't forget to drink!" },
      { id: "Membaca Al-Qur'an bisa membuat otak kita makin cerdas.", en: "Reading the Qur'an can make our brain smarter." }
    ],
    quranVerse: {
      arabic: "كَلَّا لَئِن لَّمْ يَنتَهِ لَنَسْفَعًا بِالنَّاصِيَةِ ﴿١٥﴾ نَاصِيَةٍ كَاذِبَةٍ خَاطِئَةٍ",
      transliteration: "Kalla la'il lam yantahi lanasfa'am bin-nasiyah. Nasiyatin kazibatin khati'ah.",
      translation: { id: "Sekali-kali tidak! Sungguh, jika dia tidak berhenti (berbuat durhaka), niscaya Kami tarik ubun-ubunnya, (yaitu) ubun-ubun orang yang mendusta lagi durhaka.", en: "No! If he does not desist, We will surely drag him by the forelock - a lying, sinning forelock." },
      context: { id: "Tau nggak? Bagian depan otak kita (di balik ubun-ubun) adalah tempat kita mengambil keputusan untuk jujur atau bohong. Allah sudah menyebutkannya dalam Al-Qur'an sejak dulu!", en: "Did you know? The front part of our brain (behind the forelock) is where we make decisions to be honest or lie. Allah mentioned it in the Qur'an long ago!" }
    },
    quiz: {
      question: { id: "Bagian tubuh mana yang tidak bisa merasakan sakit?", en: "Which body part cannot feel pain?" },
      options: [
        { text: { id: "Tangan", en: "Hand" } },
        { text: { id: "Otak", en: "Brain" } },
        { text: { id: "Kaki", en: "Foot" } },
        { text: { id: "Perut", en: "Stomach" } }
      ],
      answerIdx: 1
    }
  },
  
  explorer: {
    text: { id: "Otak manusia adalah organ paling kompleks di alam semesta yang kita ketahui.\n\nDi dalamnya terdapat miliaran sel saraf yang disebut neuron. Neuron-neuron ini saling mengirimkan sinyal listrik setiap detik!\n\nItulah mengapa kamu bisa mengedipkan mata, bernapas, bermimpi, dan menyelesaikan soal matematika dalam waktu yang bersamaan.", en: "The human brain is the most complex organ in the known universe.\n\nInside it are billions of nerve cells called neurons. These neurons send electrical signals to each other every second!\n\nThat's why you can blink, breathe, dream, and solve math problems all at the same time." },
    anatomy: [
      { part: { id: "Otak Besar (Cerebrum)", en: "Cerebrum" }, desc: { id: "Bagian terbesar untuk berpikir dan menyimpan memori.", en: "The largest part for thinking and storing memory." } },
      { part: { id: "Otak Kecil (Cerebellum)", en: "Cerebellum" }, desc: { id: "Mengatur keseimbangan tubuhmu agar tidak jatuh.", en: "Controls your body's balance so you don't fall." } }
    ],
    wowFactor: { id: "Ilmuwan modern menemukan bahwa lobus frontal di bagian depan otak (ubun-ubun) bertanggung jawab atas perencanaan dan kebohongan.\n\nLuar biasanya, Al-Qur'an Surah Al-'Alaq menyebut 'nasiyah' (ubun-ubun) sebagai bagian yang berdusta dan durhaka 1400 tahun sebelum ilmu saraf modern menemukannya! Subhanallah!", en: "Modern scientists found that the frontal lobe at the front of the brain (forelock) is responsible for planning and lying.\n\nAmazingly, the Qur'an Surah Al-'Alaq calls the 'nasiyah' (forelock) as lying and sinning 1400 years before modern neuroscience discovered it! Subhanallah!" },
    quranVerse: {
      arabic: "نَاصِيَةٍ كَاذِبَةٍ خَاطِئَةٍ",
      transliteration: "Nasiyatin kazibatin khati'ah",
      translation: { id: "(yaitu) ubun-ubun orang yang mendusta lagi durhaka.", en: "A lying, sinning forelock." }
    },
    quiz: [
      {
        question: { id: "Bagian otak mana yang berfungsi menjaga keseimbangan tubuh?", en: "Which part of the brain functions to maintain body balance?" },
        options: [{ text: { id: "Otak Besar", en: "Cerebrum" } }, { text: { id: "Otak Kecil", en: "Cerebellum" } }, { text: { id: "Batang Otak", en: "Brain Stem" } }, { text: { id: "Sumsum Tulang", en: "Bone Marrow" } }],
        answerIdx: 1
      },
      {
        question: { id: "Sel saraf di dalam otak disebut...", en: "Nerve cells in the brain are called..." },
        options: [{ text: { id: "Neuron", en: "Neuron" } }, { text: { id: "Proton", en: "Proton" } }, { text: { id: "Elektron", en: "Electron" } }, { text: { id: "Melatonin", en: "Melatonin" } }],
        answerIdx: 0
      },
      {
        question: { id: "Fakta apa yang dibenarkan oleh Surah Al-'Alaq tentang otak depan?", en: "What fact is confirmed by Surah Al-'Alaq about the front brain?" },
        options: [{ text: { id: "Tempat mengatur detak jantung", en: "Controls heartbeat" } }, { text: { id: "Tempat mengambil keputusan dan berbohong", en: "Place for decision making and lying" } }, { text: { id: "Tempat menyimpan ingatan masa kecil", en: "Place for childhood memories" } }, { text: { id: "Tempat merasakan rasa manis", en: "Place to taste sweetness" } }],
        answerIdx: 1
      }
    ]
  }
};

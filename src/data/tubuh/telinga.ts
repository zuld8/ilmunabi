import { ObjectData } from "../objects";

export const telingaData: ObjectData = {
  slug: "telinga",
  name: { id: "Telinga", en: "Ear" },
  icon: "👂",
  category: "tubuh",
  type: "tubuh",
  scientificName: "Auris",
  surahName: "Al-Insan",
  surahReference: "76:2",
  unlockedAtPoints: 50,
  
  kosakata: [
    { arab: "أُذُنٌ", latin: "Udhun", arti: "Telinga", artiEn: "Ear", contohAyat: "Telinga untuk mendengar ayat-ayat Allah." },
    { arab: "سَمْعٌ", latin: "Sam'", arti: "Pendengaran", artiEn: "Hearing", contohAyat: "Allah Maha Mendengar (As-Samii')." },
    { arab: "صَوْتٌ", latin: "Sawt", arti: "Suara", artiEn: "Sound", contohAyat: "Suara guntur bertasbih kepada-Nya." },
    { arab: "نِدَاءٌ", latin: "Nidaa'", arti: "Panggilan", artiEn: "Call", contohAyat: "Mendengar panggilan azan." }
  ],
  
  balita: {
    text: { id: "Kriiiing! Suara apa itu? Telingamu yang mendengarnya! 👂", en: "Riiing! What sound is that? Your ear hears it! 👂" },
    audioTranscript: { id: "Pegang telingamu yang di kanan dan kiri! Telinga ini hadiah dari Allah supaya kita bisa mendengar suara burung bernyanyi dan suara azan.", en: "Touch your ears on the right and left! These ears are a gift from Allah so we can hear birds singing and the adhan." },
    quiz: {
      question: { id: "Mana yang dipakai untuk mendengar suara?", en: "Which one is used to hear sounds?" },
      options: [
        { text: { id: "👀 Mata", en: "👀 Eye" } },
        { text: { id: "👂 Telinga", en: "👂 Ear" } },
        { text: { id: "👅 Lidah", en: "👅 Tongue" } }
      ],
      answerIdx: 1
    }
  },
  
  anak: {
    text: { id: "Telingamu itu seperti antena penangkap gelombang suara yang melayang di udara!", en: "Your ear is like an antenna catching sound waves floating in the air!" },
    facts: [
      { id: "Telingamu terus bekerja meskipun kamu sedang tidur lelap.", en: "Your ears keep working even when you are fast asleep." },
      { id: "Tulang terkecil di seluruh tubuhmu ada di dalam telinga!", en: "The smallest bone in your entire body is inside the ear!" },
      { id: "Bentuk luar telinga yang melengkung berfungsi mengumpulkan suara seperti corong.", en: "The curved outer shape of the ear functions to collect sound like a funnel." },
      { id: "Kotoran telinga sebenarnya berguna untuk mencegah kuman dan debu masuk.", en: "Earwax is actually useful to prevent germs and dust from entering." },
      { id: "Telinga bukan hanya untuk mendengar, tapi juga menjaga keseimbangan tubuhmu.", en: "Ears are not just for hearing, but also to keep your body balanced." }
    ],
    quranVerse: {
      arabic: "إِنَّا خَلَقْنَا الْإِنسَانَ مِن نُّطْفَةٍ أَمْشَاجٍ نَّبْتَلِيهِ فَجَعَلْنَاهُ سَمِيعًا بَصِيرًا",
      transliteration: "Inna khalaqnal-insana min nutfatin amshajin nabtalihi faja'alnahu sami'an basira",
      translation: { id: "Sungguh, Kami telah menciptakan manusia dari setetes mani yang bercampur yang Kami hendak mengujinya, karena itu Kami jadikan dia mendengar dan melihat.", en: "Indeed, We created man from a sperm-drop mixture that We may try him; and We made him hearing and seeing." },
      context: { id: "Tau nggak? Di Al-Qur'an, kata 'mendengar' selalu disebutkan lebih dulu daripada 'melihat'. Ilmu kedokteran membuktikan bahwa indera pertama bayi yang aktif saat masih di dalam perut ibu adalah pendengaran!", en: "Did you know? In the Qur'an, the word 'hearing' is always mentioned before 'seeing'. Medical science proves that the first active sense of a baby in the mother's womb is hearing!" }
    },
    quiz: {
      question: { id: "Apa fungsi telinga selain untuk mendengar?", en: "What is the function of the ear besides hearing?" },
      options: [
        { text: { id: "Menjaga keseimbangan tubuh", en: "Maintaining body balance" } },
        { text: { id: "Merasa makanan", en: "Tasting food" } },
        { text: { id: "Memompa darah", en: "Pumping blood" } },
        { text: { id: "Membuat kita tumbuh tinggi", en: "Making us grow tall" } }
      ],
      answerIdx: 0
    }
  },
  
  explorer: {
    text: { id: "Suara yang kamu dengar sebenarnya adalah getaran udara. Getaran ini masuk ke telinga dan menggetarkan selaput tipis yang disebut gendang telinga.\n\nDi belakang gendang telinga, ada tiga tulang super kecil (martil, landasan, dan sanggurdi) yang memperkuat getaran itu.\n\nGetaran lalu masuk ke rumah siput (koklea) di telinga dalam, di mana rambut-rambut halus mengubahnya menjadi sinyal listrik untuk otak kita!", en: "The sound you hear is actually air vibration. This vibration enters the ear and vibrates a thin membrane called the eardrum.\n\nBehind the eardrum, there are three super small bones (malleus, incus, and stapes) that amplify the vibration.\n\nThe vibration then enters the cochlea in the inner ear, where fine hairs convert it into electrical signals for our brain!" },
    anatomy: [
      { part: { id: "Gendang Telinga", en: "Eardrum" }, desc: { id: "Selaput tipis yang bergetar saat terkena suara.", en: "A thin membrane that vibrates when hit by sound." } },
      { part: { id: "Koklea (Rumah Siput)", en: "Cochlea" }, desc: { id: "Bagian telinga dalam yang mengubah getaran menjadi sinyal untuk otak.", en: "The inner ear part that converts vibrations into signals for the brain." } }
    ],
    wowFactor: { id: "Cairan dan rambut halus di telinga dalammu adalah pengatur keseimbangan. Tanpa mereka, kamu tidak akan bisa berdiri tegak dan akan pusing terus-menerus!\n\nAllah menciptakan sistem pendengaran yang luar biasa presisi. Oleh karena itu, kita harus mensyukurinya dengan menggunakan telinga untuk mendengarkan hal-hal yang baik seperti murattal Al-Qur'an dan perkataan yang baik.", en: "The fluid and fine hairs in your inner ear control balance. Without them, you wouldn't be able to stand straight and would be dizzy all the time!\n\nAllah created an incredibly precise hearing system. Therefore, we must be grateful for it by using our ears to listen to good things like Quranic recitation and good words." },
    quranVerse: {
      arabic: "وَجَعَلَ لَكُمُ السَّمْعَ وَالْأَبْصَارَ وَالْأَفْئِدَةَ ۙ قَلِيلًا مَّا تَشْكُرُونَ",
      transliteration: "Waja'ala lakumus-sam'a wal-absara wal-af'idah qalilam ma tashkurun",
      translation: { id: "...Dan Dia memberi kamu pendengaran, penglihatan dan hati nurani. (Tetapi) sedikit sekali kamu bersyukur.", en: "...And He made for you hearing and vision and intellect; little are you grateful." }
    },
    quiz: [
      {
        question: { id: "Apa nama bagian telinga dalam yang bentuknya seperti rumah siput?", en: "What is the name of the inner ear part shaped like a snail shell?" },
        options: [{ text: { id: "Koklea", en: "Cochlea" } }, { text: { id: "Kornea", en: "Cornea" } }, { text: { id: "Retina", en: "Retina" } }, { text: { id: "Serambi", en: "Atrium" } }],
        answerIdx: 0
      },
      {
        question: { id: "Mengapa kita bisa menjaga keseimbangan dan tidak mudah jatuh?", en: "Why can we maintain balance and not fall easily?" },
        options: [{ text: { id: "Karena tulang ekor", en: "Because of the tailbone" } }, { text: { id: "Karena ada cairan di telinga dalam", en: "Because there is fluid in the inner ear" } }, { text: { id: "Karena otot kaki yang kuat", en: "Because of strong leg muscles" } }, { text: { id: "Karena jantung berdetak", en: "Because the heart beats" } }],
        answerIdx: 1
      },
      {
        question: { id: "Tulang terkecil di tubuh manusia ada di mana?", en: "Where is the smallest bone in the human body located?" },
        options: [{ text: { id: "Hidung", en: "Nose" } }, { text: { id: "Telinga", en: "Ear" } }, { text: { id: "Jari kelingking", en: "Pinky finger" } }, { text: { id: "Mata", en: "Eye" } }],
        answerIdx: 1
      }
    ]
  }
};

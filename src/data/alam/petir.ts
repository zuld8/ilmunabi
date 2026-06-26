import { ObjectData } from "../objects";

export const petirData: ObjectData = {
  slug: "petir",
  name: { id: "Petir", en: "Lightning" },
  icon: "⚡",
  category: "alam",
  type: "alam",
  scientificName: "Fulgur",
  surahName: "Ar-Ra'd",
  surahReference: "13:12",
  unlockedAtPoints: 50,

  kosakata: [
    { arab: "بَرْقٌ", latin: "Barq", arti: "Kilat", artiEn: "Lightning Flash", contohAyat: "Yuriikumul-barqa khaufaw watama'aa (Dia memperlihatkan kilat kepadamu untuk menakutkan dan memberi harapan)" },
    { arab: "رَعْدٌ", latin: "Ra'd", arti: "Guruh / Suara Petir", artiEn: "Thunder", contohAyat: "Yusabbihur-ra'du bihamdihi (Guruh itu bertasbih memuji-Nya)" },
    { arab: "سَحَابٌ", latin: "Sahab", arti: "Awan Tebal", artiEn: "Thick Cloud", contohAyat: "Awan hitam membawa petir" },
    { arab: "نُورٌ", latin: "Nur", arti: "Cahaya", artiEn: "Light", contohAyat: "Cahaya kilat sangat terang menyilaukan" }
  ],

  balita: {
    text: { id: "Jdar! Wah, ada suara keras dari langit! Itu namanya petir. Petir menyala terang seperti lampu kilat kamera yang sangat besar. ⚡", en: "Boom! Wow, a loud sound from the sky! That's called lightning. Lightning flashes brightly like a giant camera flash. ⚡" },
    audioTranscript: { id: "Kaget ya dengar suara Jdar? Jangan takut! Itu cuma suara awan yang bertepuk tangan. Kalau ada petir, kita baca doa dan berlindung di dalam rumah ya. ⚡", en: "Startled by the Boom sound? Don't be afraid! It's just the sound of clouds clapping. When there's lightning, we say a prayer and stay safe indoors. ⚡" },
    quiz: {
      question: { id: "Suara petir itu bunyinya seperti apa?", en: "What does thunder sound like?" },
      options: [
        { text: { id: "💥 Jdar! Gemuruh keras!", en: "💥 Boom! Loud rumble!" } },
        { text: { id: "🐈 Meong meong!", en: "🐈 Meow meow!" } },
        { text: { id: "🐝 Nguung nguung!", en: "🐝 Bzzz bzzz!" } }
      ],
      answerIdx: 0
    }
  },

  anak: {
    text: { id: "Petir adalah lompatan listrik raksasa di langit! Sama seperti listrik di rumahmu, tapi jutaan kali lebih kuat. Listrik ini melompat dari awan ke Bumi atau ke awan lainnya.", en: "Lightning is a giant electrical jump in the sky! Just like electricity in your house, but millions of times stronger. This electricity jumps from clouds to Earth or to other clouds." },
    facts: [
      { id: "Suhu petir bisa mencapai 30.000 derajat Celcius, lima kali lebih panas dari permukaan Matahari!", en: "Lightning's temperature can reach 30,000 degrees Celsius, five times hotter than the surface of the Sun!" },
      { id: "Satu sambaran petir punya cukup listrik untuk menyalakan lampu satu rumah berbulan-bulan.", en: "One lightning strike has enough electricity to power a house's lights for months." },
      { id: "Kita selalu melihat cahaya kilat (barq) lebih dulu, baru mendengar suara guruh (ra'd) karena cahaya melaju jauh lebih cepat daripada suara.", en: "We always see the lightning flash (barq) first, then hear the thunder (ra'd) because light travels much faster than sound." },
      { id: "Petir suka menyambar benda yang paling tinggi, makanya kita dilarang berteduh di bawah pohon saat badai petir.", en: "Lightning likes to strike the tallest objects, that's why we shouldn't shelter under trees during a thunderstorm." },
      { id: "Banyak gedung tinggi dipasangi tiang penangkal petir di atapnya agar aman.", en: "Many tall buildings have lightning rods installed on their roofs to be safe." }
    ],
    quranVerse: {
      arabic: "هُوَ ٱلَّذِى يُرِيكُمُ ٱلْبَرْقَ خَوْفًا وَطَمَعًا وَيُنشِئُ ٱلسَّحَابَ ٱلثِّقَالَ",
      transliteration: "Huwal-ladzii yuriikumul-barqa khaufaw wa tama'aw wa yunnsyi'us-sahaabats-tsiqoal",
      translation: { id: "Dialah Tuhan yang memperlihatkan kilat kepadamu untuk menimbulkan ketakutan dan harapan, dan Dia mengadakan awan mendung.", en: "It is He who shows you lightening, [causing] fear and aspiration, and generates the heavy clouds." },
      context: { id: "Tau nggak? Petir itu bikin kita takut karena suaranya keras. Tapi ada 'harapan'-nya lho! Karena petir tanda akan turun hujan lebat yang sangat dinanti oleh tumbuhan dan petani yang butuh air. Keren kan rencana Allah!", en: "Did you know? Lightning makes us scared because of its loud sound. But there's 'aspiration' in it! Because lightning is a sign of heavy rain coming, which is awaited by plants and farmers needing water. Allah's plan is cool, right!" }
    },
    quiz: {
      question: { id: "Mana yang lebih dulu sampai ke kita saat terjadi petir?", en: "Which one reaches us first during a lightning storm?" },
      options: [
        { text: { id: "Cahaya kilatnya", en: "The lightning flash" } },
        { text: { id: "Suara guruh gemuruhnya", en: "The loud thunder sound" } },
        { text: { id: "Air hujannya", en: "The rain water" } },
        { text: { id: "Awan gelapnya", en: "The dark clouds" } }
      ],
      answerIdx: 0
    }
  },

  explorer: {
    text: { id: "Petir terjadi di dalam awan badai besar bernama Cumulonimbus. Di dalam awan yang tinggi menjulang ini, kristal es dan tetesan air saling bertabrakan dengan sangat hebat karena angin kencang (updraft). Gesekan jutaan es ini menghasilkan muatan listrik statis raksasa!\n\nMuatan negatif (elektron) berkumpul di bagian bawah awan, sementara muatan positif berkumpul di atas awan dan di permukaan Bumi. Ketika perbedaan tarikan magnetik ini sudah sangat besar, aliran listrik meledak menembus udara menuju muatan positif. Itulah kilat!\n\nUdara yang dilalui kilat ini memuai (membesar) secara tiba-tiba karena panas super tinggi, lalu menyusut seketika. Ledakan udara ini menghasilkan gelombang kejut yang menggetarkan udara, dan getaran inilah yang masuk ke telinga kita sebagai suara gemuruh (Guruh/Thunder).", en: "Lightning occurs inside huge storm clouds called Cumulonimbus. Inside these towering clouds, ice crystals and water droplets violently crash into each other due to strong updrafts. The friction of millions of ice crystals generates giant static electricity!\n\nNegative charges (electrons) gather at the bottom of the cloud, while positive charges gather at the top of the cloud and on the Earth's surface. When this magnetic pull difference gets too large, an electric current explodes through the air towards the positive charge. That's the flash!\n\nThe air that the lightning passes through expands suddenly due to super high heat, then shrinks instantly. This air explosion creates a shockwave vibrating the air, and this vibration enters our ears as the rumbling sound (Thunder)." },
    anatomy: [
      { part: { id: "Muatan Listrik Statis", en: "Static Electric Charge" }, desc: { id: "Kumpulan ion positif dan negatif hasil gesekan partikel es dalam awan.", en: "A collection of positive and negative ions from ice particle friction in clouds." } },
      { part: { id: "Gelombang Kejut (Shockwave)", en: "Shockwave" }, desc: { id: "Ledakan pemuaian udara akibat panas kilat yang terdengar sebagai bunyi Jdar.", en: "An air expansion explosion due to lightning heat heard as a Boom sound." } }
    ],
    wowFactor: { id: "Sains Meteorologi modern menemukan bahwa petir adalah fenomena pemisahan muatan listrik raksasa dan guruh murni adalah gelombang kejut fisik.\n\nDalam Al-Qur'an terdapat Surah khusus bernama Ar-Ra'd (Guruh). Di sana Allah menyebutkan 'Guruh bertasbih memuji-Nya' (13:13). Lebih luar biasa lagi, sains menemukan bahwa petir mengubah gas nitrogen di udara menjadi pupuk alami (Nitrat) yang jatuh bersama hujan, menyuburkan tanah dengan seketika! Inilah makna 'memberi harapan (Tama'a)' yang disebutkan Allah di ayat 12. Listrik petir yang mematikan ternyata adalah pabrik pupuk raksasa bagi tanaman!", en: "Modern Meteorology found that lightning is a phenomenon of giant electric charge separation and thunder is purely a physical shockwave.\n\nIn the Qur'an there is a specific Surah named Ar-Ra'd (Thunder). There Allah mentions 'The thunder exalts [Him] with praise' (13:13). More amazingly, science discovered that lightning converts nitrogen gas in the air into natural fertilizer (Nitrates) that falls with rain, instantly fertilizing the soil! This is the meaning of 'giving aspiration (Tama'a)' mentioned by Allah in verse 12. The deadly lightning electricity is actually a giant fertilizer factory for plants!" },
    quranVerse: {
      arabic: "وَيُسَبِّحُ ٱلرَّعْدُ بِحَمْدِهِۦ وَٱلْمَلَٰٓئِكَةُ مِنْ خِيفَتِهِۦ",
      transliteration: "Wa yusabbihur-ra'du bihamdihii wal-malaa'ikatu min khiifatih",
      translation: { id: "Dan guruh itu bertasbih dengan memuji Allah, (demikian pula) para malaikat karena takut kepada-Nya.", en: "And the thunder exalts [Him] with praise of Him - and the angels [as well] from fear of Him." }
    },
    quiz: [
      {
        question: { id: "Apa penyebab utama munculnya muatan listrik di awan Cumulonimbus?", en: "What is the main cause of electric charge appearing in Cumulonimbus clouds?" },
        options: [{ text: { id: "Gesekan hebat kristal es dan air di dalam awan", en: "Violent friction of ice crystals and water inside the cloud" } }, { text: { id: "Bintang-bintang yang jatuh menabrak awan", en: "Falling stars hitting the clouds" } }, { text: { id: "Sinar matahari yang terjebak", en: "Trapped sunlight" } }, { text: { id: "Asap pabrik yang naik ke atas", en: "Factory smoke rising up" } }],
        answerIdx: 0
      },
      {
        question: { id: "Bagaimana petir bisa membantu menyuburkan tanah untuk petani?", en: "How does lightning help fertilize soil for farmers?" },
        options: [{ text: { id: "Panas petir mengubah gas nitrogen jadi pupuk alami (nitrat)", en: "Lightning heat converts nitrogen gas into natural fertilizer (nitrates)" } }, { text: { id: "Petir menjatuhkan cacing dari langit", en: "Lightning drops worms from the sky" } }, { text: { id: "Petir membakar rumput liar", en: "Lightning burns weeds" } }, { text: { id: "Petir memasak buah di pohon", en: "Lightning cooks fruits on trees" } }],
        answerIdx: 0
      },
      {
        question: { id: "Kenapa suara guruh terdengar seperti ledakan (Jdar!)?", en: "Why does thunder sound like an explosion (Boom!)?" },
        options: [{ text: { id: "Udara memuai dan menyusut tiba-tiba karena panas kilat (gelombang kejut)", en: "Air expands and shrinks suddenly due to lightning heat (shockwave)" } }, { text: { id: "Awan saling menabrak seperti batu", en: "Clouds hitting each other like rocks" } }, { text: { id: "Ada bom di dalam awan", en: "There are bombs inside clouds" } }, { text: { id: "Suara burung besar di langit", en: "Sound of a large bird in the sky" } }],
        answerIdx: 0
      }
    ]
  }
};

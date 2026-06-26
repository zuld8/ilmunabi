import { ObjectData } from "../objects";

export const bulanData: ObjectData = {
  slug: "bulan",
  name: { id: "Bulan", en: "Moon" },
  icon: "🌙",
  category: "alam",
  type: "alam",
  scientificName: "Luna",
  surahName: "Al-Qamar",
  surahReference: "54:1",
  unlockedAtPoints: 50,

  kosakata: [
    { arab: "قَمَرٌ", latin: "Qamar", arti: "Bulan", artiEn: "Moon", contohAyat: "Iqtarabatis-saa'atu wan-syaqqal-qamar (Telah dekat hari kiamat dan bulan telah terbelah)" },
    { arab: "لَيْلٌ", latin: "Lail", arti: "Malam", artiEn: "Night", contohAyat: "Wal-laili idzaa yaghsyaa (Demi malam apabila menutupi)" },
    { arab: "نُورٌ", latin: "Nur", arti: "Cahaya pantulan", artiEn: "Reflected light", contohAyat: "Wal-qamara nuuran (Dan bulan sebagai cahaya)" },
    { arab: "هِلَالٌ", latin: "Hilal", arti: "Bulan Sabit", artiEn: "Crescent", contohAyat: "Tanda masuknya bulan Ramadhan" }
  ],

  balita: {
    text: { id: "Lihat ke langit malam! Ada bulan yang bersinar indah. Kadang bulan bulat penuh, kadang berbentuk seperti pisang! 🌙", en: "Look at the night sky! The moon shines beautifully. Sometimes it's round, sometimes it looks like a banana! 🌙" },
    audioTranscript: { id: "Wah, bulannya terang sekali ya malam ini! Bulan menemani kita tidur. Terima kasih ya Allah sudah menciptakan bulan! 🌙", en: "Wow, the moon is so bright tonight! It accompanies us to sleep. Thank you Allah for creating the moon! 🌙" },
    quiz: {
      question: { id: "Bulan biasanya terlihat kapan?", en: "When is the moon usually seen?" },
      options: [
        { text: { id: "🌌 Malam hari", en: "🌌 Night time" } },
        { text: { id: "🌅 Pagi hari", en: "🌅 Morning" } },
        { text: { id: "🌧️ Saat hujan badai", en: "🌧️ During a rainstorm" } }
      ],
      answerIdx: 0
    }
  },

  anak: {
    text: { id: "Bulan adalah satelit alami Bumi. Ia selalu mengelilingi Bumi tanpa pernah berhenti. Bulan tidak punya cahaya sendiri lho!", en: "The moon is Earth's natural satellite. It always orbits the Earth without stopping. The moon doesn't have its own light, you know!" },
    facts: [
      { id: "Bulan memantulkan cahaya dari Matahari ke Bumi.", en: "The moon reflects light from the Sun to Earth." },
      { id: "Jarak Bulan ke Bumi sekitar 384.400 kilometer.", en: "The distance from the Moon to Earth is about 384,400 kilometers." },
      { id: "Bentuk bulan terlihat berubah-ubah (fase bulan) karena posisinya mengelilingi Bumi.", en: "The moon's shape appears to change (lunar phases) due to its position orbiting Earth." },
      { id: "Bulan tidak ada udaranya, jadi kita tidak bisa bernapas di sana.", en: "There is no air on the moon, so we can't breathe there." },
      { id: "Gaya gravitasi bulan menyebabkan air laut di Bumi menjadi pasang dan surut.", en: "The moon's gravity causes ocean tides on Earth." }
    ],
    quranVerse: {
      arabic: "وَٱلْقَمَرَ نُورًا وَقَدَّرَهُۥ مَنَازِلَ",
      transliteration: "Wal-qamara nuuran wa qaddarahuu manaazila",
      translation: { id: "Dan bulan sebagai cahaya dan ditetapkannya tempat-tempat orbitnya.", en: "And the moon a derived light and determined for it phases." },
      context: { id: "Tau nggak? Allah menjadikan bulan punya fase-fase (kadang sabit, kadang purnama) supaya kita bisa menghitung hari dan bulan dalam kalender Hijriyah!", en: "Did you know? Allah made the moon have phases (sometimes crescent, sometimes full) so we can count days and months in the Hijri calendar!" }
    },
    quiz: {
      question: { id: "Dari mana cahaya bulan berasal?", en: "Where does the moonlight come from?" },
      options: [
        { text: { id: "Pantulan cahaya Matahari", en: "Reflected light from the Sun" } },
        { text: { id: "Lampu raksasa di bulan", en: "Giant lamps on the moon" } },
        { text: { id: "Pantulan cahaya Bumi", en: "Reflected light from Earth" } },
        { text: { id: "Api di permukaan bulan", en: "Fire on the moon's surface" } }
      ],
      answerIdx: 0
    }
  },

  explorer: {
    text: { id: "Bulan adalah benda langit terdekat dengan Bumi. Permukaan Bulan dipenuhi dengan kawah, gunung, dan lembah, yang terbentuk karena banyak benturan meteorit dan asteroid miliaran tahun lalu.\n\nKarena tidak memiliki atmosfer yang signifikan, langit di Bulan selalu berwarna hitam, bahkan pada siang hari. Tidak ada cuaca, angin, atau hujan di sana, sehingga jejak kaki astronaut yang mendarat di Bulan tidak akan pernah hilang.\n\nFase-fase bulan terjadi karena sudut pantulan cahaya Matahari berubah saat Bulan mengorbit Bumi, menciptakan penampakan dari bulan baru, bulan sabit, hingga bulan purnama.", en: "The Moon is the closest celestial body to Earth. Its surface is filled with craters, mountains, and valleys, formed by many meteorite and asteroid impacts billions of years ago.\n\nBecause it has no significant atmosphere, the sky on the Moon is always black, even during the day. There is no weather, wind, or rain there, so the footprints of astronauts who landed on the Moon will never disappear.\n\nThe lunar phases occur because the angle of sunlight reflection changes as the Moon orbits the Earth, creating appearances from a new moon, crescent moon, to a full moon." },
    anatomy: [
      { part: { id: "Kawah (Craters)", en: "Craters" }, desc: { id: "Lubang besar di permukaan bulan akibat tabrakan meteor.", en: "Large holes on the moon's surface due to meteor impacts." } },
      { part: { id: "Maria", en: "Maria" }, desc: { id: "Dataran rendah yang gelap di bulan, dulu dikira lautan.", en: "Dark lowlands on the moon, once thought to be seas." } }
    ],
    wowFactor: { id: "Sains membuktikan bahwa Bulan tidak memancarkan cahayanya sendiri; ia hanya memantulkan cahaya dari Matahari. Permukaannya kasar, gelap, dan berdebu.\n\nAl-Qur'an secara akurat menyebut bulan sebagai 'Nur' atau 'Muniir' yang berarti cahaya pantulan yang menerangi, berbeda dengan matahari yang disebut 'Siraaj' (pelita/sumber cahaya sejati). Kebenaran ilmiah ini sudah tertulis lebih dari 1400 tahun yang lalu!", en: "Science proved that the Moon does not emit its own light; it only reflects light from the Sun. Its surface is rough, dark, and dusty.\n\nThe Qur'an accurately refers to the moon as 'Nur' or 'Muniir' which means illuminating reflected light, unlike the sun which is called 'Siraaj' (lamp/true light source). This scientific truth was written over 1400 years ago!" },
    quranVerse: {
      arabic: "تَبَارَكَ ٱلَّذِى جَعَلَ فِى ٱلسَّمَآءِ بُرُوجًا وَجَعَلَ فِيهَا سِرَٰجًا وَقَمَرًا مُّنِيرًا",
      transliteration: "Tabaarakal-ladzii ja'ala fis-samaa'i buruujaw wa ja'ala fiihaa siraajaw wa qamaram muniiraa",
      translation: { id: "Maha Suci Allah yang menjadikan di langit gugusan-gugusan bintang dan Dia menjadikan juga padanya matahari dan bulan yang bercahaya.", en: "Blessed is He who has placed in the sky great stars and placed therein a [burning] lamp and luminous moon." }
    },
    quiz: [
      {
        question: { id: "Mengapa jejak kaki astronaut di bulan tidak akan pernah hilang?", en: "Why will astronaut footprints on the moon never disappear?" },
        options: [{ text: { id: "Karena tidak ada angin dan cuaca", en: "Because there is no wind and weather" } }, { text: { id: "Karena tanahnya terbuat dari lem", en: "Because the soil is made of glue" } }, { text: { id: "Karena ada robot yang menjaganya", en: "Because robots guard them" } }, { text: { id: "Karena bulan sangat panas", en: "Because the moon is very hot" } }],
        answerIdx: 0
      },
      {
        question: { id: "Apa nama kawah gelap di bulan yang dulu dikira lautan?", en: "What are the dark craters on the moon called that were once thought to be seas?" },
        options: [{ text: { id: "Maria", en: "Maria" } }, { text: { id: "Oseania", en: "Oceania" } }, { text: { id: "Atlantis", en: "Atlantis" } }, { text: { id: "Luna", en: "Luna" } }],
        answerIdx: 0
      },
      {
        question: { id: "Apa arti kata 'Muniir' dalam Al-Qur'an?", en: "What does the word 'Muniir' mean in the Qur'an?" },
        options: [{ text: { id: "Cahaya yang menerangi (pantulan)", en: "Illuminating light (reflected)" } }, { text: { id: "Api yang membakar", en: "Burning fire" } }, { text: { id: "Batu terbang", en: "Flying stone" } }, { text: { id: "Bintang berekor", en: "Tailed star" } }],
        answerIdx: 0
      }
    ]
  }
};

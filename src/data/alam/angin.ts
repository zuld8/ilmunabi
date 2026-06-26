import { ObjectData } from "../objects";

export const anginData: ObjectData = {
  slug: "angin",
  name: { id: "Angin", en: "Wind" },
  icon: "🌬️",
  category: "alam",
  type: "alam",
  scientificName: "Ventus",
  surahName: "Ar-Rum",
  surahReference: "30:46",
  unlockedAtPoints: 50,

  kosakata: [
    { arab: "رِيحٌ", latin: "Rih", arti: "Angin", artiEn: "Wind", contohAyat: "Wahuwal-ladzii yursilur-riyaaha busyrab (Dan Dialah yang meniupkan angin sebagai pembawa berita gembira)" },
    { arab: "سَحَابٌ", latin: "Sahab", arti: "Awan", artiEn: "Cloud", contohAyat: "Fatusyiiru sahaaban (Lalu angin menggerakkan awan)" },
    { arab: "هَوَاءٌ", latin: "Hawa", arti: "Udara", artiEn: "Air", contohAyat: "Angin adalah udara yang bergerak" },
    { arab: "مَطَرٌ", latin: "Matar", arti: "Hujan", artiEn: "Rain", contohAyat: "Angin membawa awan yang menurunkan hujan" }
  ],

  balita: {
    text: { id: "Wusss! Wusss! Itu suara angin. Kita tidak bisa melihat angin, tapi bisa merasakannya. Angin bikin badan jadi sejuk! 🌬️", en: "Whoosh! Whoosh! That's the sound of the wind. We can't see the wind, but we can feel it. The wind makes us feel cool! 🌬️" },
    audioTranscript: { id: "Coba rasakan, wusss! Ada angin lewat! Daun-daun bergoyang ditiup angin. Alhamdulillah, Allah kasih kita angin yang segar. 🌬️", en: "Try to feel it, whoosh! The wind is passing by! The leaves are swaying blown by the wind. Alhamdulillah, Allah gave us fresh wind. 🌬️" },
    quiz: {
      question: { id: "Apakah kita bisa melihat angin?", en: "Can we see the wind?" },
      options: [
        { text: { id: "❌ Tidak bisa, cuma bisa dirasakan", en: "❌ No, we can only feel it" } },
        { text: { id: "✅ Bisa, warnanya hijau", en: "✅ Yes, it's green" } },
        { text: { id: "✅ Bisa, bentuknya kotak", en: "✅ Yes, it's square" } }
      ],
      answerIdx: 0
    }
  },

  anak: {
    text: { id: "Angin adalah udara yang bergerak dari tempat yang dingin ke tempat yang panas. Angin bisa sangat pelan sepoi-sepoi, atau sangat kuat seperti badai!", en: "Wind is air moving from a cold place to a hot place. Wind can be very gentle like a breeze, or very strong like a storm!" },
    facts: [
      { id: "Angin tidak punya warna dan tidak bisa dipegang.", en: "Wind has no color and cannot be held." },
      { id: "Angin membantu burung dan layang-layang terbang tinggi di langit.", en: "Wind helps birds and kites fly high in the sky." },
      { id: "Biji bunga dandelion terbang terbawa angin untuk tumbuh di tempat baru.", en: "Dandelion seeds fly carried by the wind to grow in new places." },
      { id: "Kita bisa menghasilkan listrik menggunakan kincir angin raksasa.", en: "We can generate electricity using giant windmills." },
      { id: "Angin puting beliung adalah angin berputar yang sangat cepat dan kuat.", en: "A tornado is a spinning wind that is very fast and strong." }
    ],
    quranVerse: {
      arabic: "وَمِنْ ءَايَٰتِهِۦٓ أَن يُرْسِلَ ٱلرِّيَاحَ مُبَشِّرَٰتٍ",
      transliteration: "Wa min aayaatihii an yursilar-riyaaha mubasysyiraatin",
      translation: { id: "Dan di antara tanda-tanda kekuasaan-Nya adalah bahwa Dia mendatangkan angin sebagai pembawa berita gembira.", en: "And of His signs is that He sends the winds as bringers of good tidings." },
      context: { id: "Tau nggak? Al-Qur'an menyebut angin sebagai 'pembawa kabar gembira' karena angin meniupkan awan mendung. Artinya, angin memberi tahu petani bahwa hujan air yang segar akan segera turun! Keren ya cara Allah mengatur cuaca!", en: "Did you know? The Qur'an calls winds 'bringers of good tidings' because winds blow rain clouds. This means the wind tells farmers that fresh rain will soon fall! How cool is Allah's way of managing the weather!" }
    },
    quiz: {
      question: { id: "Apa yang membuat layang-layang bisa terbang di langit?", en: "What makes a kite able to fly in the sky?" },
      options: [
        { text: { id: "Dorongan udara yang bergerak (angin)", en: "The push of moving air (wind)" } },
        { text: { id: "Baterai di dalam layang-layang", en: "A battery inside the kite" } },
        { text: { id: "Sayap layang-layang yang mengepak", en: "Flapping kite wings" } },
        { text: { id: "Sinar matahari", en: "Sunlight" } }
      ],
      answerIdx: 0
    }
  },

  explorer: {
    text: { id: "Angin terjadi karena Matahari memanaskan permukaan Bumi secara tidak merata. Udara panas di suatu tempat akan naik karena lebih ringan, dan ruang kosongnya langsung diisi oleh udara dingin dari tempat lain yang mengalir masuk. Aliran udara inilah yang kita sebut Angin!\n\nSelain membawa cuaca, angin memiliki fungsi ekologis yang sangat vital: Penyerbukan. Banyak pohon dan tanaman pangan sangat bergantung pada angin untuk membawa serbuk sari mereka ke bunga lain agar bisa menghasilkan buah dan biji.\n\nKecepatan angin diukur menggunakan alat yang disebut Anemometer. Angin darat dan angin laut adalah contoh sirkulasi angin harian yang dimanfaatkan nelayan tradisional selama berabad-abad untuk melaut dan pulang berlayar.", en: "Wind occurs because the Sun heats the Earth's surface unevenly. Hot air in a place rises because it is lighter, and its empty space is immediately filled by cold air flowing in from elsewhere. This flow of air is what we call Wind!\n\nBesides bringing weather, wind has a very vital ecological function: Pollination. Many trees and food crops rely heavily on the wind to carry their pollen to other flowers to produce fruits and seeds.\n\nWind speed is measured using a device called an Anemometer. Land breezes and sea breezes are examples of daily wind circulation used by traditional fishermen for centuries to go to sea and sail back." },
    anatomy: [
      { part: { id: "Arus Konveksi", en: "Convection Current" }, desc: { id: "Gerakan naik turunnya udara karena perbedaan suhu panas dan dingin.", en: "The up and down movement of air due to hot and cold temperature differences." } },
      { part: { id: "Anemometer", en: "Anemometer" }, desc: { id: "Alat ilmiah dengan mangkuk-mangkuk kecil untuk mengukur kecepatan angin.", en: "A scientific tool with little cups to measure wind speed." } }
    ],
    wowFactor: { id: "Sains Botani mengelompokkan tanaman tertentu sebagai 'Anemofili' (penyerbukan oleh angin). Angin membawa serbuk sari jantan untuk membuahi putik betina dari tanaman lain yang jaraknya berjauhan.\n\nRibuan tahun sebelum ilmu botani modern ini ada, Al-Qur'an secara eksplisit menyatakan sifat angin yang 'mengawinkan' (Lawaqih) pada Surat Al-Hijr: 'Dan Kami telah meniupkan angin untuk mengawinkan (tumbuh-tumbuhan)'. Ini adalah mukjizat ilmiah yang luar biasa rinci!", en: "Botany classifies certain plants as 'Anemophilous' (pollinated by wind). The wind carries male pollen to fertilize female pistils of other plants far away.\n\nThousands of years before this modern botanical science existed, the Qur'an explicitly stated the 'fertilizing' (Lawaqih) nature of wind in Surah Al-Hijr: 'And We have sent the fertilizing winds'. This is a remarkably detailed scientific miracle!" },
    quranVerse: {
      arabic: "وَأَرْسَلْنَا ٱلرِّيَٰحَ لَوَاقِحَ فَأَنزَلْنَا مِنَ ٱلسَّمَآءِ مَآءً",
      transliteration: "Wa arsalnar-riyaaha lawaaqiha fa anzalnaa minas-samaa'i maa'an",
      translation: { id: "Dan Kami telah meniupkan angin untuk mengawinkan (tumbuh-tumbuhan) dan Kami turunkan hujan dari langit.", en: "And We have sent the fertilizing winds and sent down water from the sky." }
    },
    quiz: [
      {
        question: { id: "Bagaimana proses dasar terbentuknya angin?", en: "How is the basic process of wind formation?" },
        options: [{ text: { id: "Udara panas naik dan digantikan oleh udara dingin", en: "Hot air rises and is replaced by cold air" } }, { text: { id: "Bumi berputar seperti kipas raksasa", en: "Earth spins like a giant fan" } }, { text: { id: "Bintang-bintang meniupkan udara ke Bumi", en: "Stars blow air to Earth" } }, { text: { id: "Pohon-pohon bergerak menghasilkan udara", en: "Trees move producing air" } }],
        answerIdx: 0
      },
      {
        question: { id: "Apa arti sifat angin sebagai 'Lawaqih' dalam Al-Qur'an dan sains botani?", en: "What does the wind's nature as 'Lawaqih' mean in the Qur'an and botany?" },
        options: [{ text: { id: "Angin yang membantu penyerbukan/mengawinkan tanaman", en: "Winds that help pollination/fertilize plants" } }, { text: { id: "Angin yang menghancurkan bangunan", en: "Winds that destroy buildings" } }, { text: { id: "Angin yang membawa debu pasir", en: "Winds that carry sand dust" } }, { text: { id: "Angin yang bertiup di musim panas", en: "Winds that blow in summer" } }],
        answerIdx: 0
      },
      {
        question: { id: "Alat untuk mengukur kecepatan angin disebut?", en: "The instrument to measure wind speed is called?" },
        options: [{ text: { id: "Anemometer", en: "Anemometer" } }, { text: { id: "Termometer", en: "Thermometer" } }, { text: { id: "Barometer", en: "Barometer" } }, { text: { id: "Hidrometer", en: "Hydrometer" } }],
        answerIdx: 0
      }
    ]
  }
};

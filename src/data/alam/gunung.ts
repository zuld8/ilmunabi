import { ObjectData } from "../objects";

export const gunungData: ObjectData = {
  slug: "gunung",
  name: { id: "Gunung", en: "Mountain" },
  icon: "⛰️",
  category: "alam",
  type: "alam",
  scientificName: "Mons",
  surahName: "An-Naba",
  surahReference: "78:7",
  unlockedAtPoints: 50,

  kosakata: [
    { arab: "جَبَلٌ", latin: "Jabal", arti: "Gunung", artiEn: "Mountain", contohAyat: "Wal jibaala autada (Dan gunung-gunung sebagai pasak)" },
    { arab: "حَجَرٌ", latin: "Hajar", arti: "Batu", artiEn: "Stone", contohAyat: "Minal-hijaarah (Dari bebatuan)" },
    { arab: "أَرْضٌ", latin: "Ard", arti: "Bumi", artiEn: "Earth", contohAyat: "Fil-ardhi (Di bumi)" },
    { arab: "طُورٌ", latin: "Tur", arti: "Gunung tinggi (seperti Gunung Sinai)", artiEn: "Mount", contohAyat: "Wat-Tuuri wa kitaabim-mastuur (Demi Gunung Tursina dan kitab yang tertulis)" }
  ],

  balita: {
    text: { id: "Wow, gunung tinggi sekali! Bentuknya seperti segitiga besar yang menunjuk ke langit! Di gunung hawanya sejuk. ⛰️", en: "Wow, the mountain is so tall! It looks like a big triangle pointing to the sky! The air on the mountain is cool. ⛰️" },
    audioTranscript: { id: "Coba lihat ke sana! Wah, gunungnya besaaar sekali! Pohon-pohonnya hijau. Gunung diciptakan Allah biar bumi kita nggak goyang. Keren! ⛰️", en: "Look over there! Wow, the mountain is huuuuge! The trees are green. Allah created mountains so our earth doesn't shake. Cool! ⛰️" },
    quiz: {
      question: { id: "Gunung bentuknya paling mirip apa?", en: "What shape does a mountain look like the most?" },
      options: [
        { text: { id: "🔺 Segitiga besar", en: "🔺 Big triangle" } },
        { text: { id: "⭕ Lingkaran bola", en: "⭕ Ball circle" } },
        { text: { id: "🟦 Kotak", en: "🟦 Square" } }
      ],
      answerIdx: 0
    }
  },

  anak: {
    text: { id: "Gunung itu terbentuk saat bumi kita mengerut atau meletus perlahan-lahan dari bawah tanah. Gunung tertinggi di dunia bisa menembus awan!", en: "Mountains form when our earth crunches up or slowly erupts from underground. The highest mountains in the world can pierce the clouds!" },
    facts: [
      { id: "Gunung tertinggi di dunia di darat adalah Gunung Everest.", en: "The highest mountain in the world on land is Mount Everest." },
      { id: "Ada juga lho gunung berapi yang bisa mengeluarkan cairan panas bernama lava!", en: "There are also volcanoes that can shoot out hot liquid called lava!" },
      { id: "Makin tinggi kamu naik gunung, udaranya akan terasa makin dingin.", en: "The higher you climb a mountain, the colder the air feels." },
      { id: "Banyak sungai besar berawal dari mata air atau salju yang mencair di puncak gunung.", en: "Many large rivers start from springs or melting snow on mountain peaks." },
      { id: "Hewan seperti kambing gunung pintar sekali melompat di tebing yang curam.", en: "Animals like mountain goats are very smart at jumping on steep cliffs." }
    ],
    quranVerse: {
      arabic: "وَٱلْجِبَالَ أَوْتَادًا",
      transliteration: "Wal-jibaala autadaa",
      translation: { id: "Dan gunung-gunung sebagai pasak.", en: "And the mountains as pegs." },
      context: { id: "Tau nggak? Pasak itu seperti paku besar untuk menancapkan tenda. Allah menciptakan gunung seperti paku besar agar lempengan bumi kita kuat dan tidak mudah gempa! Masya Allah!", en: "Did you know? A peg is like a giant nail used to hold down a tent. Allah created mountains like giant nails so our earth's plates are strong and don't shake easily! Masya Allah!" }
    },
    quiz: {
      question: { id: "Gunung di Al-Qur'an diumpamakan sebagai apa agar Bumi tidak oleng?", en: "What are mountains likened to in the Qur'an so the Earth doesn't shake?" },
      options: [
        { text: { id: "Pasak atau Paku Bumi", en: "Pegs or Earth Nails" } },
        { text: { id: "Bantal raksasa", en: "Giant pillows" } },
        { text: { id: "Pohon beringin", en: "Banyan trees" } },
        { text: { id: "Batu loncatan", en: "Stepping stones" } }
      ],
      answerIdx: 0
    }
  },

  explorer: {
    text: { id: "Gunung-gunung terbentuk oleh pergerakan lempeng tektonik yang luar biasa dahsyat. Ketika dua lempeng kerak bumi saling bertabrakan, batu-batuan terdorong ke atas berlipat-lipat hingga membentuk deretan pegunungan raksasa seperti Pegunungan Himalaya.\n\nYang luar biasa adalah apa yang ada di Bawah tanah! Bagian gunung yang terlihat di atas permukaan tanah sebenarnya lebih kecil dibandingkan akar gunungnya. Gunung memiliki akar bebatuan yang menancap sangat dalam ke dalam mantel bumi, mirip seperti akar pohon besar.\n\nGunung berapi punya peran penting untuk bumi. Abu vulkaniknya yang keluar saat meletus mengandung banyak mineral yang membuat tanah di sekitarnya menjadi sangat subur untuk pertanian.", en: "Mountains are formed by the incredibly powerful movement of tectonic plates. When two plates of the earth's crust collide, rocks are pushed upward folding over each other to form massive mountain ranges like the Himalayas.\n\nWhat's amazing is what's UNDERGROUND! The part of the mountain visible above ground is actually smaller compared to its root. Mountains have rock roots that anchor very deep into the earth's mantle, just like the roots of a giant tree.\n\nVolcanoes play a crucial role for the earth. The volcanic ash released during eruptions contains many minerals that make the surrounding soil very fertile for agriculture." },
    anatomy: [
      { part: { id: "Puncak (Peak)", en: "Peak" }, desc: { id: "Titik tertinggi gunung, seringkali bersalju di daerah dingin.", en: "The highest point of a mountain, often snow-capped in cold regions." } },
      { part: { id: "Akar Gunung", en: "Mountain Root" }, desc: { id: "Bagian lempeng tebal di bawah gunung yang menancap ke mantel bumi.", en: "The thick plate portion beneath the mountain anchoring into the earth's mantle." } },
      { part: { id: "Dapur Magma", en: "Magma Chamber" }, desc: { id: "Ruang di bawah gunung berapi tempat magma cair berkumpul.", en: "A space below a volcano where molten magma collects." } }
    ],
    wowFactor: { id: "Sains Geologi modern meneliti struktur kerak bumi dan menemukan 'Isostasi'. Teori ini membuktikan bahwa gunung-gunung memiliki akar padat yang masuk berkilo-kilometer ke bawah tanah. Akar ini berfungsi mengunci lempeng bumi (lithosphere) agar lebih stabil.\n\nFakta luar biasa ini sudah diabadikan dalam Al-Qur'an 14 abad yang lalu, menyebut gunung sebagai 'Autad' (pasak/paku). Sebuah pasak harus memiliki bagian tajam yang tertancap di bawah tanah lebih panjang daripada bagian kepalanya. Fakta ini membuktikan kebenaran ayat Al-Qur'an secara geologis mutlak!", en: "Modern Geological science researches the earth's crust structure and discovered 'Isostasy'. This theory proves that mountains have solid roots going kilometers underground. These roots function to lock the earth's plates (lithosphere) making them more stable.\n\nThis incredible fact was immortalized in the Qur'an 14 centuries ago, calling mountains 'Autad' (pegs/nails). A peg must have its sharp part driven underground longer than its head. This fact absolutely proves the geological truth of the Qur'anic verse!" },
    quranVerse: {
      arabic: "وَأَلْقَىٰ فِى ٱلْأَرْضِ رَوَٰسِىَ أَن تَمِيدَ بِكُمْ",
      transliteration: "Wa alqaa fil-ardhi rawaasiya an tamiida bikum",
      translation: { id: "Dan Dia menancapkan gunung-gunung di bumi supaya bumi itu tidak goncang bersama kamu.", en: "And He has cast into the earth firmly set mountains, lest it shift with you." }
    },
    quiz: [
      {
        question: { id: "Apa istilah geologi yang membuktikan bahwa gunung memiliki struktur menancap ke bawah tanah?", en: "What geological term proves that mountains have structures anchoring underground?" },
        options: [{ text: { id: "Akar Gunung (Teori Isostasi)", en: "Mountain Root (Isostasy Theory)" } }, { text: { id: "Erosi Angin", en: "Wind Erosion" } }, { text: { id: "Efek Rumah Kaca", en: "Greenhouse Effect" } }, { text: { id: "Siklus Hidrologi", en: "Hydrological Cycle" } }],
        answerIdx: 0
      },
      {
        question: { id: "Apa manfaat abu vulkanik dari gunung berapi setelah beberapa waktu?", en: "What is the benefit of volcanic ash from a volcano after some time?" },
        options: [{ text: { id: "Membuat tanah menjadi sangat subur", en: "Makes the soil very fertile" } }, { text: { id: "Membuat air laut surut", en: "Makes sea water recede" } }, { text: { id: "Menghalangi datangnya hujan", en: "Prevents rain from coming" } }, { text: { id: "Membuat cuaca menjadi abadi", en: "Makes the weather eternal" } }],
        answerIdx: 0
      },
      {
        question: { id: "Bagaimana proses utama terbentuknya deretan pegunungan raksasa di Bumi?", en: "What is the main process of the formation of giant mountain ranges on Earth?" },
        options: [{ text: { id: "Tabrakan lempeng tektonik kerak bumi", en: "Collision of tectonic plates of the earth's crust" } }, { text: { id: "Batu meteor yang menumpuk", en: "Accumulation of meteor stones" } }, { text: { id: "Fosil dinosaurus yang membatu", en: "Petrified dinosaur fossils" } }, { text: { id: "Gelombang Tsunami besar", en: "Large Tsunami waves" } }],
        answerIdx: 0
      }
    ]
  }
};

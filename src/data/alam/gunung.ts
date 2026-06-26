import { ObjectData } from "../objects";

export const gunungData: ObjectData = {
  slug: "gunung",
  name: { id: "Gunung", en: "Mountain" },
  icon: "⛰️",
  category: "alam",
  type: "alam",
  scientificName: "Mons (Orology)",
  surahName: "An-Naba",
  surahReference: "78:7",
  unlockedAtPoints: 35,
  kosakata: [
    { arab: "جَبَل", latin: "Jabal", arti: "Gunung", artiEn: "Mountain", contohAyat: "وَالْجِبَالَ أَوْتَادًا" }
  ],
  balita: {
    text: { id: "Wah, gunungnya tinggi sekali menyentuh awan! ⛰️ Ada pepohonan hijau dan udara yang sangat sejuk di sana.", en: "Wow, the mountain is so high touching the clouds! ⛰️ There are green trees and very cool air there." },
    audioTranscript: { id: "Gunung itu seperti tanah yang sangat tinggi bentuknya segitiga. Kalau kita naik ke puncaknya, kita bisa melihat pemandangan yang sangaaat luas!", en: "A mountain is like a very high land shaped like a triangle. If we climb to its peak, we can see a veeery wide view!" },
    quiz: {
      question: { id: "Bentuk gunung biasanya seperti apa ya?", en: "What does a mountain usually look like?" },
      options: [
        { text: { id: "Kotak", en: "Square" } },
        { text: { id: "Segitiga", en: "Triangle" } },
        { text: { id: "Lingkaran", en: "Circle" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Gunung adalah dataran bumi yang menjulang tinggi ke atas. Di dalam gunung berapi terdapat cairan batu super panas bernama magma. Gunung juga menjadi tempat tinggal banyak sekali hewan dan tumbuhan!", en: "A mountain is the earth's land that towers high up. Inside a volcano, there is a super hot liquid rock called magma. Mountains are also home to many animals and plants!" },
    facts: [
      { id: "Semakin tinggi kita naik ke atas gunung, udaranya akan terasa semakin dingin lho!", en: "The higher we climb up the mountain, the colder the air will feel!" },
      { id: "Gunung paling tinggi di dunia namanya Gunung Everest, puncaknya selalu tertutup salju putih.", en: "The highest mountain in the world is named Mount Everest, its peak is always covered in white snow." },
      { id: "Beberapa gunung tertidur lama lalu bisa meletus mengeluarkan api, lahar, dan asap tebal!", en: "Some mountains sleep for a long time and then can erupt, spewing fire, lava, and thick smoke!" }
    ],
    quranVerse: {
      arabic: "وَالْجِبَالَ أَوْتَادًا",
      transliteration: "Wal-jibaala awtaadaa",
      translation: { id: "Dan gunung-gunung sebagai pasak.", en: "And the mountains as pegs." },
      context: { id: "Allah menciptakan gunung seperti pasak (paku) bumi, supaya bumi ini kokoh dan tidak mudah bergetar hebat.", en: "Allah created mountains like pegs (nails) of the earth, so that this earth is sturdy and does not shake violently easily." }
    },
    quiz: {
      question: { id: "Apa nama cairan batu yang sangat panas di dalam perut gunung berapi?", en: "What is the name of the super hot liquid rock inside the belly of a volcano?" },
      options: [
        { text: { id: "Magma", en: "Magma" } },
        { text: { id: "Es Batu", en: "Ice Cubes" } },
        { text: { id: "Lumpur Dingin", en: "Cold Mud" } }
      ],
      answerIdx: 0
    }
  },
  explorer: {
    text: { id: "Gunung terbentuk dari pergerakan lempeng tektonik yang saling bertabrakan selama jutaan tahun. Fungsi utama gunung ternyata untuk menyeimbangkan rotasi bumi dan meredam getaran! Fakta luar biasa ini, bahwa gunung berfungsi sebagai 'pasak' yang menghunjam jauh ke dalam tanah (isostasi), telah dijelaskan dalam Al-Qur'an 1400 tahun sebelum ilmu geologi modern menemukannya!", en: "Mountains are formed by tectonic plates colliding over millions of years. The main function of mountains is actually to balance the earth's rotation and dampen vibrations! This incredible fact, that mountains function as 'pegs' driven deep into the ground (isostasy), was explained in the Quran 1400 years before modern geology discovered it!" },
    anatomy: [
      { part: { id: "Puncak Gunung (Summit)", en: "Summit" }, desc: { id: "Titik tertinggi gunung yang sering ditutupi salju atau awan.", en: "The highest point of a mountain, often covered in snow or clouds." } },
      { part: { id: "Akar Gunung (Mountain Root)", en: "Mountain Root" }, desc: { id: "Bagian gunung yang tertanam sangat dalam ke kerak bumi sebagai penyeimbang.", en: "The part of the mountain buried deep in the earth's crust as a counterbalance." } }
    ],
    wowFactor: { id: "HAH?! Ternyata tinggi gunung yang kita lihat di atas tanah, itu hanya ujungnya saja! Gunung itu punya 'akar' batu raksasa yang tertanam di bawah tanah 10 sampai 15 kali lebih panjang dari tingginya!", en: "WOW?! It turns out the height of the mountain we see above ground is just the tip! The mountain has a giant rock 'root' buried underground that is 10 to 15 times longer than its height!" },
    quranVerse: {
      arabic: "وَأَلْقَىٰ فِي الْأَرْضِ رَوَاسِيَ أَنْ تَمِيدَ بِكُمْ",
      transliteration: "Wa alqaa fil-ardhi rawaasiya an tamiida bikum",
      translation: { id: "Dan Dia menancapkan gunung-gunung di bumi supaya bumi itu tidak goncang bersama kamu.", en: "And He has cast into the earth firmly set mountains, lest it shift with you." }
    },
    quiz: [
      {
        question: { id: "Menurut ilmu geologi dan Al-Qur'an, apa fungsi utama dari akar gunung yang menancap di dalam bumi?", en: "According to geology and the Quran, what is the main function of the mountain's roots planted in the earth?" },
        options: [
          { text: { id: "Tempat menyimpan air hujan emas", en: "A place to store golden rainwater" } },
          { text: { id: "Supaya bumi stabil dan tidak mudah berguncang", en: "So the earth is stable and doesn't easily shake" } },
          { text: { id: "Untuk mencegah angin masuk ke perut bumi", en: "To prevent wind from entering the earth's belly" } }
        ],
        answerIdx: 1
      }
    ]
  }
};

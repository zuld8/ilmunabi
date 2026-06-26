import { ObjectData } from "../objects";

export const mustardData: ObjectData = {
  slug: "mustard",
  name: { id: "Biji Sawi", en: "Mustard Seed" },
  icon: "🌾",
  category: "tumbuhan",
  type: "tumbuhan",
  scientificName: "Brassica nigra",
  surahName: "Luqman",
  surahReference: "31:16",
  unlockedAtPoints: 10,
  kosakata: [
    { arab: "خَرْدَل", latin: "Khardal", arti: "Biji Sawi (Mustard)", artiEn: "Mustard Seed", contohAyat: "Kebaikan seberat biji sawi akan dibalas." }
  ],
  balita: {
    text: { id: "Biji ini kuraang besar, sangat keciiiil sekali seperti titik! Tapi dari biji sekecil itu bisa tumbuh tanaman yang lumayan besar. 🌱 Ajaib, kan?", en: "This seed is not big at all, it's so tiny like a dot! But from such a small seed, a quite big plant can grow. 🌱 Magical, right?" },
    audioTranscript: { id: "Biji sawi itu sangat kecil sekali bentuknya.", en: "Mustard seeds are very very small in shape." },
    quiz: {
      question: { id: "Seberapa besar ukuran biji sawi (mustard)?", en: "How big is a mustard seed?" },
      options: [
        { text: { id: "Sangat kecil, sebesar debu/titik", en: "Very small, like dust/a dot" } },
        { text: { id: "Sebesar bola sepak", en: "As big as a soccer ball" } },
        { text: { id: "Panjang seperti ular", en: "Long like a snake" } }
      ],
      answerIdx: 0
    }
  },
  anak: {
    text: { id: "Di dalam Al-Qur'an, Allah memberikan contoh tentang 'Biji Sawi' (Khardal). Saking kecilnya biji ini, sering tak terlihat! Kata Nabi Luqman kepada anaknya: Jika ada amal kebaikan atau keburukan walaupun hanya seberat biji sawi, Allah pasti akan membalasnya. Masya Allah, Allah melihat semuanya!", en: "In the Quran, Allah gives an example of a 'Mustard Seed' (Khardal). This seed is so small it's often invisible! Prophet Luqman said to his son: If there is a good or bad deed even the weight of a mustard seed, Allah will surely reward it. Mashallah, Allah sees everything!" },
    facts: [
      { id: "Biji mustard sering digiling untuk dijadikan saus berwarna kuning di makanan hamburger.", en: "Mustard seeds are often ground to make the yellow sauce in hamburgers." },
      { id: "Satu biji sawi (mustard) ukurannya hanya sekitar 1 milimeter!", en: "One mustard seed is only about 1 millimeter in size!" },
      { id: "Meskipun bijinya sangat kecil, tanaman mustard bisa tumbuh hingga setinggi dada orang dewasa.", en: "Even though the seed is very small, a mustard plant can grow up to an adult's chest height." }
    ],
    quranVerse: {
      arabic: "يَا بُنَيَّ إِنَّهَا إِنْ تَكُ مِثْقَالَ حَبَّةٍ مِنْ خَرْدَلٍ فَتَكُنْ فِي صَخْرَةٍ أَوْ فِي السَّمَاوَاتِ أَوْ فِي الْأَرْضِ يَأْتِ بِهَا اللَّهُ",
      transliteration: "Yā bunayya innahā in taku mithqāla ḥabbatin min khardalin fatakun fī ṣakhratin aw fī as-samāwāti aw fī al-arḍi ya'ti bihā Allāh",
      translation: { id: "(Luqman berkata): 'Hai anakku, sesungguhnya jika ada (suatu perbuatan) seberat biji sawi, dan berada dalam batu atau di langit atau di bumi, niscaya Allah akan mendatangkannya (membalasinya).' ", en: "(Luqman said): 'O my son, indeed if wrong should be the weight of a mustard seed and should be within a rock or [anywhere] in the heavens or in the earth, Allah will bring it forth.' " },
      context: { id: "Perbuatan sekecil biji sawi pun diketahui oleh Allah.", en: "Even a deed as small as a mustard seed is known to Allah." }
    },
    quiz: {
      question: { id: "Apa pesan dari kisah biji sawi dalam surat Luqman?", en: "What is the message of the mustard seed story in Surah Luqman?" },
      options: [
        { text: { id: "Allah akan melihat amal kita walaupun sangat kecil (seberat biji sawi)", en: "Allah will see our deeds even if they are very small (the weight of a mustard seed)" } },
        { text: { id: "Kita harus makan biji sawi setiap hari", en: "We must eat mustard seeds every day" } },
        { text: { id: "Biji sawi bisa berubah menjadi emas", en: "Mustard seeds can turn into gold" } }
      ],
      answerIdx: 0
    }
  },
  explorer: {
    text: { id: "Keajaiban biologi pada biji mustard sangat luar biasa. Biji yang beratnya tidak sampai seperseribu gram ini mengandung kode DNA lengkap untuk menumbuhkan akar, batang, daun, dan bunga kuning yang lebat! Proses perubahan dari debu kecil menjadi struktur selulosa yang kompleks menunjukkan kekuasaan Al-Khaliq. Ini mengingatkan kita bahwa tak ada hal yang tersembunyi atau terlalu kecil di alam semesta ini dari pengawasan Allah.", en: "The biological wonder of the mustard seed is extraordinary. A seed weighing less than a thousandth of a gram contains the complete DNA code to grow roots, stems, leaves, and dense yellow flowers! The process of changing from tiny dust to a complex cellulose structure shows the power of Al-Khaliq. This reminds us that nothing in this universe is hidden or too small from Allah's surveillance." },
    anatomy: [
      { part: { id: "Embrio Mini", en: "Mini Embryo" }, desc: { id: "Calon tanaman utuh yang terlipat rapi di dalam biji berukuran 1 milimeter.", en: "A complete future plant folded neatly inside a 1 millimeter seed." } },
      { part: { id: "Testa (Kulit Biji)", en: "Seed Coat" }, desc: { id: "Kulit luar keras yang melindungi embrio sampai terkena air.", en: "The hard outer coat that protects the embryo until exposed to water." } }
    ],
    wowFactor: { id: "Satu tanaman mustard bisa menghasilkan lebih dari 10.000 biji kecil setiap kali panen!", en: "One mustard plant can produce over 10,000 tiny seeds every harvest!" },
    quranVerse: {
      arabic: "إِنَّ اللَّهَ لَطِيفٌ خَبِيرٌ",
      transliteration: "Inna Allāha laṭīfun khabīr",
      translation: { id: "Sesungguhnya Allah Maha Halus lagi Maha Mengetahui.", en: "Indeed, Allah is Subtle and Acquainted." }
    },
    quiz: [
      {
        question: { id: "Walaupun ukurannya sangat kecil, apa yang tersimpan di dalam biji mustard?", en: "Even though its size is very small, what is stored inside a mustard seed?" },
        options: [
          { text: { id: "Kode DNA lengkap untuk menumbuhkan satu tanaman utuh", en: "The complete DNA code to grow a whole plant" } },
          { text: { id: "Cairan asam mematikan", en: "Deadly acid liquid" } },
          { text: { id: "Tidak ada apa-apa, hanya batu", en: "Nothing, just stone" } }
        ],
        answerIdx: 0
      }
    ]
  }
};

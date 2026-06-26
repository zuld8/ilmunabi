import { ObjectData } from "../objects";

export const lambungData: ObjectData = {
  slug: "lambung",
  name: { id: "Lambung", en: "Stomach" },
  icon: "🍲",
  category: "tubuh",
  type: "tubuh",
  scientificName: "Ventriculus",
  surahName: "Al-A'raf",
  surahReference: "7:31",
  unlockedAtPoints: 80,
  kosakata: [
    { arab: "مَعِدَةٌ", latin: "Ma'idatun", arti: "Lambung", artiEn: "Stomach", contohAyat: "Kulu washrabu wala tusrifoo (Makan dan minumlah, tetapi jangan berlebihan)." }
  ],
  balita: {
    text: { id: "Krrrukk! Wah perut bunyi, tandanya lambung minta diisi! Lambung itu seperti kantung pencampur makanan biar kita kuat main. Nyamm! 🥣😋", en: "Grrr! Wow the tummy is rumbling, it's a sign the stomach wants to be filled! The stomach is like a food mixing bag so we are strong to play. Yum! 🥣😋" },
    audioTranscript: { id: "Lambung ada di perut kita. Dia mengaduk-aduk makanan jadi bubur halus.", en: "The stomach is in our belly. It mixes food into a smooth porridge." },
    quiz: {
      question: { id: "Suara apa yang terdengar kalau lambung kita kosong?", en: "What sound is heard when our stomach is empty?" },
      options: [
        { text: { id: "Krrrukk (Keroncongan)", en: "Grrr (Rumbling)" } },
        { text: { id: "Ting tong", en: "Ding dong" } },
        { text: { id: "Tik tok", en: "Tick tock" } }
      ],
      answerIdx: 0
    }
  },
  anak: {
    text: { id: "Di dalam perut kita, ada organ berbentuk huruf J bernama lambung! Lambung punya cairan asam khusus yang sangat kuat untuk melelehkan makanan dan membunuh kuman penyakit. Nabi mengajarkan kita makan tidak sampai kekenyangan; 1/3 untuk makanan, 1/3 air, dan 1/3 untuk bernapas. Hebat kan cara Islam menjaga lambung! ⚖️🍗", en: "Inside our belly, there's a J-shaped organ called the stomach! The stomach has a special very strong acid to melt food and kill disease germs. The Prophet taught us not to eat until too full; 1/3 for food, 1/3 for water, and 1/3 for breathing. Isn't Islam's way of protecting the stomach amazing! ⚖️🍗" },
    facts: [
      { id: "Asam lambung manusia sangat kuat, bahkan bisa melarutkan benda besi kecil! 😱", en: "Human stomach acid is so strong, it can even dissolve tiny iron objects! 😱" },
      { id: "Lambung bisa membesar seperti balon untuk menampung banyak makanan saat kita makan.", en: "The stomach can expand like a balloon to hold a lot of food when we eat." },
      { id: "Lambung meremas-remas makanan selama 2 hingga 4 jam sampai bentuknya seperti bubur.", en: "The stomach churns food for 2 to 4 hours until it looks like porridge." }
    ],
    quranVerse: {
      arabic: "وَكُلُوا وَاشْرَبُوا وَلَا تُسْرِفُوا ۚ إِنَّهُ لَا يُحِبُّ الْمُسْرِفِينَ",
      transliteration: "Wakulu washrabu wala tusrifoo; innahu la yuhibbul-musrifeen",
      translation: { id: "Makan dan minumlah, dan janganlah berlebih-lebihan. Sesungguhnya Allah tidak menyukai orang-orang yang berlebih-lebihan.", en: "Eat and drink, but be not excessive. Indeed, He likes not those who commit excess." },
      context: { id: "Makan berlebihan akan membuat lambung bekerja terlalu keras dan bikin kita gampang sakit.", en: "Overeating makes the stomach work too hard and makes us easily sick." }
    },
    quiz: {
      question: { id: "Bentuk lambung kita mirip seperti huruf apa?", en: "Our stomach is shaped like what letter?" },
      options: [
        { text: { id: "Huruf O", en: "Letter O" } },
        { text: { id: "Huruf J", en: "Letter J" } },
        { text: { id: "Huruf Z", en: "Letter Z" } }
      ],
      answerIdx: 1
    }
  },
  explorer: {
    text: { id: "Tahukah kamu misteri terbesar lambung? Asam lambung (HCL) itu sangat korosif (menghancurkan), lalu mengapa lambung tidak hancur oleh asamnya sendiri? Ternyata Allah Al-Khabir (Maha Mengetahui) melengkapi dinding lambung dengan lapisan lendir tebal pelindung (mukus). Bahkan, sel-sel dinding lambung memperbarui diri sangat cepat, setiap 3-4 hari! Sungguh penciptaan yang penuh perhitungan yang mustahil terjadi kebetulan. 🧪🔥", en: "Do you know the stomach's biggest mystery? Stomach acid (HCL) is highly corrosive (destructive), so why doesn't the stomach get destroyed by its own acid? Turns out Allah Al-Khabir (The All-Aware) equipped the stomach walls with a thick protective mucus layer. In fact, the cells of the stomach wall renew themselves very quickly, every 3-4 days! Truly a calculated creation that is impossible to happen by chance. 🧪🔥" },
    anatomy: [
      { part: { id: "Sfingter Esofagus", en: "Esophageal Sphincter" }, desc: { id: "Pintu masuk lambung yang terbuka saat makanan masuk, lalu menutup rapat agar asam tidak naik ke dada.", en: "The stomach's entrance that opens when food enters, then tightly closes so acid doesn't go up the chest." } },
      { part: { id: "Mukosa", en: "Mucosa" }, desc: { id: "Lapisan dalam lambung yang mengeluarkan lendir super pelindung.", en: "The inner lining of the stomach that secretes super protective mucus." } },
      { part: { id: "Sfingter Pilorik", en: "Pyloric Sphincter" }, desc: { id: "Katup bawah yang mengatur keluarnya 'bubur makanan' ke usus sedikit demi sedikit.", en: "The bottom valve that controls the exit of 'food porridge' to the intestines bit by bit." } }
    ],
    wowFactor: { id: "Ketika kamu tersipu malu (blushing), dinding lambungmu juga ikut memerah di dalam! Ini karena sistem saraf dan aliran darah bereaksi bersamaan. 😳", en: "When you blush, your stomach lining also turns red inside! This is because the nervous system and blood flow react simultaneously. 😳" },
    quranVerse: {
      arabic: "وَفِي أَنفُسِكُمْ ۚ أَفَلَا تُبْصِرُونَ",
      transliteration: "Wa fee anfusikum; afalaa tubsiroon",
      translation: { id: "Dan (juga) pada dirimu sendiri (terdapat tanda-tanda kebesaran Allah). Maka apakah kamu tidak memperhatikan?", en: "And in yourselves. Then will you not see?" }
    },
    quiz: [
      {
        question: { id: "Mengapa lambung kita tidak hancur oleh cairan asamnya sendiri?", en: "Why doesn't our stomach get destroyed by its own acid fluid?" },
        options: [
          { text: { id: "Karena lambung terbuat dari besi", en: "Because the stomach is made of iron" } },
          { text: { id: "Karena asamnya tidak panas", en: "Because the acid is not hot" } },
          { text: { id: "Karena dilindungi oleh lapisan lendir tebal (mukus)", en: "Because it's protected by a thick mucus layer" } }
        ],
        answerIdx: 2
      }
    ]
  }
};
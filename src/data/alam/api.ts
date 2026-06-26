import { ObjectData } from "../objects";

export const apiData: ObjectData = {
  slug: "api",
  name: { id: "Api", en: "Fire" },
  icon: "🔥",
  category: "alam",
  type: "alam",
  scientificName: "Ignis",
  surahName: "Al-Waqi'ah",
  surahReference: "56:71",
  unlockedAtPoints: 50,

  kosakata: [
    { arab: "نَارٌ", latin: "Narun", arti: "Api", artiEn: "Fire", contohAyat: "Afa ra'aitumun-naarallatii tuuruun (Maka terangkanlah kepadaku tentang api yang kamu nyalakan)" },
    { arab: "شَجَرَةٌ", latin: "Syajarah", arti: "Pohon/Kayu", artiEn: "Tree/Wood", contohAyat: "Misy-syajaratil-akhdhari naaran (Dari pohon yang hijau menjadi api)" },
    { arab: "حَرَارَةٌ", latin: "Hararah", arti: "Panas", artiEn: "Heat", contohAyat: "Api memancarkan panas" },
    { arab: "نُورٌ", latin: "Nur", arti: "Cahaya", artiEn: "Light", contohAyat: "Api memberikan cahaya di malam hari" }
  ],

  balita: {
    text: { id: "Awas panas! Ini adalah api. Warnanya jingga kemerahan dan menari-nari. Jangan dipegang ya, nanti tangan melepuh! 🔥", en: "Watch out, it's hot! This is fire. Its color is reddish-orange and dances around. Don't touch it, or your hand will get burned! 🔥" },
    audioTranscript: { id: "Wusss! Api menyala di kayu bakar. Api itu panas sekali! Ayah pakai api buat masak makanan biar enak. Ingat, anak kecil tidak boleh main api ya! 🔥", en: "Whoosh! Fire is burning on the firewood. Fire is very hot! Daddy uses fire to cook delicious food. Remember, little kids shouldn't play with fire! 🔥" },
    quiz: {
      question: { id: "Api boleh dipegang tidak?", en: "Can we touch the fire?" },
      options: [
        { text: { id: "❌ Tidak boleh, karena sangat panas!", en: "❌ No, because it is very hot!" } },
        { text: { id: "✅ Boleh, seperti mainan", en: "✅ Yes, like a toy" } },
        { text: { id: "✅ Boleh kalau pakai air", en: "✅ Yes if using water" } }
      ],
      answerIdx: 0
    }
  },

  anak: {
    text: { id: "Api adalah energi bercahaya dan panas yang muncul saat sesuatu sedang terbakar. Manusia sudah menggunakan api sejak zaman purba untuk bertahan hidup!", en: "Fire is glowing, hot energy that appears when something is burning. Humans have used fire since ancient times to survive!" },
    facts: [
      { id: "Api butuh oksigen (udara yang kita hirup) untuk bisa menyala. Tanpa udara, api akan mati seketika.", en: "Fire needs oxygen (the air we breathe) to burn. Without air, fire dies instantly." },
      { id: "Warna api menunjukkan suhunya. Api biru (seperti di kompor) jauh lebih panas daripada api oranye kemerahan.", en: "Fire colors show their temperature. Blue fire (like on a stove) is much hotter than reddish-orange fire." },
      { id: "Api tidak punya bayangan! Jika kamu menyalakan korek api di depan senter, kamu tidak akan melihat bayangan apinya di tembok.", en: "Fire has no shadow! If you light a match in front of a flashlight, you won't see the fire's shadow on the wall." },
      { id: "Bumi adalah satu-satunya planet di tata surya kita yang bisa menyalakan api, karena hanya Bumi yang punya banyak Oksigen.", en: "Earth is the only planet in our solar system where fire can burn, because only Earth has plenty of Oxygen." },
      { id: "Air mematikan api dengan cara mendinginkan bahan bakar dan memblokir oksigen agar tidak masuk.", en: "Water puts out fire by cooling the fuel and blocking oxygen from getting in." }
    ],
    quranVerse: {
      arabic: "أَفَرَءَيْتُمُ ٱلنَّارَ ٱلَّتِى تُورُونَ ۝ ءَأَنتُمْ أَنشَأْتُمْ شَجَرَتَهَآ أَمْ نَحْنُ ٱلْمُنشِـُٔونَ",
      transliteration: "Afa ra'aitumun-naarallatii tuuruun. A antum ansya'tum syajaratahaa am nahnul-munsyi'uun",
      translation: { id: "Maka terangkanlah kepadaku tentang api yang kamu nyalakan. Kamukah yang menjadikan pohon kayunya atau Kamikah yang menjadikannya?", en: "Then tell Me about the fire that you ignite. Is it you who produced its tree, or are We the producer?" },
      context: { id: "Tau nggak? Orang zaman dulu menyalakan api dengan cara menggosokkan dua kayu atau batu hingga keluar percikan. Allah mengingatkan bahwa Allah-lah pencipta kayu dan oksigen itu, agar kita bersyukur punya api untuk memasak dan menghangatkan badan!", en: "Did you know? Ancient people started a fire by rubbing two woods or stones until sparks flew. Allah reminds us that He is the creator of the wood and oxygen, so we are grateful to have fire to cook and warm our bodies!" }
    },
    quiz: {
      question: { id: "Selain kayu/bahan bakar, apa yang paling dibutuhkan api agar tetap menyala?", en: "Besides wood/fuel, what does fire need most to keep burning?" },
      options: [
        { text: { id: "Udara (Oksigen)", en: "Air (Oxygen)" } },
        { text: { id: "Air", en: "Water" } },
        { text: { id: "Batu Es", en: "Ice" } },
        { text: { id: "Cahaya Matahari", en: "Sunlight" } }
      ],
      answerIdx: 0
    }
  },

  explorer: {
    text: { id: "Dalam ilmu kimia, api sebenarnya bukanlah sebuah 'benda', melainkan sebuah peristiwa Reaksi Kimia! Pembakaran (Combustion) adalah reaksi eksotermik di mana bahan bakar bereaksi secara cepat dengan oksigen, melepaskan sejumlah besar energi panas dan foton (cahaya).\n\nUntuk membuat api, kita membutuhkan apa yang disebut 'Segitiga Api' (Fire Triangle): 1) Bahan Bakar (seperti kayu, kertas, atau gas), 2) Oksigen (dari udara), dan 3) Panas pemantik awal (seperti gesekan batu atau korek). Jika kamu menghilangkan salah satu dari tiga hal ini, api tidak akan pernah tercipta atau langsung padam!\n\nPenemuan cara mengendalikan api adalah lompatan teknologi paling penting dalam sejarah umat manusia. Api memungkinkan manusia purba memasak makanan (sehingga pencernaan lebih mudah dan otak berkembang), membuat perkakas besi, dan melindungi diri dari predator di malam hari.", en: "In chemistry, fire is actually not a 'thing', but a Chemical Reaction event! Combustion is an exothermic reaction where fuel reacts rapidly with oxygen, releasing a large amount of heat energy and photons (light).\n\nTo make fire, we need what's called the 'Fire Triangle': 1) Fuel (like wood, paper, or gas), 2) Oxygen (from the air), and 3) Initial Heat spark (like stone friction or a match). If you remove any of these three things, fire will never be created or will go out immediately!\n\nThe discovery of how to control fire is the most important technological leap in human history. Fire allowed ancient humans to cook food (making digestion easier and brains grow), forge iron tools, and protect themselves from predators at night." },
    anatomy: [
      { part: { id: "Segitiga Api", en: "Fire Triangle" }, desc: { id: "Tiga elemen wajib pencipta api: Bahan bakar, Oksigen, dan Panas.", en: "Three required elements creating fire: Fuel, Oxygen, and Heat." } },
      { part: { id: "Reaksi Eksotermik", en: "Exothermic Reaction" }, desc: { id: "Reaksi kimia yang melepaskan/memancarkan energi dalam bentuk panas.", en: "A chemical reaction that releases/emits energy in the form of heat." } }
    ],
    wowFactor: { id: "Sains menemukan bahwa zat klorofil (hijau daun) menyimpan energi cahaya matahari. Jutaan tahun kemudian, sisa fosil pohon-pohon hijau ini berubah menjadi batu bara dan minyak bumi (bahan bakar utama penghasil api modern).\n\nSangat menakjubkan, dalam Surah Yasin ayat 80 Allah berfirman: 'Yaitu Tuhan yang menjadikan untukmu api dari KAYU YANG HIJAU, maka tiba-tiba kamu nyalakan (api) dari kayu itu.' Kata 'Kayu yang hijau' mengisyaratkan secara sains bahwa sumber utama energi pembakaran di bumi ini berasal dari tanaman hijau yang menyimpan energi matahari melalui fotosintesis!", en: "Science discovered that chlorophyll (leaf green) stores solar light energy. Millions of years later, fossilized remains of these green trees turn into coal and petroleum (the main fuels producing modern fire).\n\nAmazingly, in Surah Yaseen verse 80 Allah says: 'It is He who made for you from the GREEN TREE, fire, and then from it you ignite.' The words 'Green tree' scientifically hint that the main source of combustion energy on earth comes from green plants storing solar energy through photosynthesis!" },
    quranVerse: {
      arabic: "ٱلَّذِى جَعَلَ لَكُم مِّنَ ٱلشَّجَرِ ٱلْأَخْضَرِ نَارًا فَإِذَآ أَنتُم مِّنْهُ تُوقِدُونَ",
      transliteration: "Alladzii ja'ala lakum minasy-syajaril-akhdhari naaran fa idzaa antum minhu tuuqiduun",
      translation: { id: "Yaitu Tuhan yang menjadikan untukmu api dari kayu yang hijau, maka tiba-tiba kamu nyalakan (api) dari kayu itu.", en: "It is He who made for you from the green tree, fire, and then from it you ignite." }
    },
    quiz: [
      {
        question: { id: "Apa saja isi dari 'Segitiga Api' yang dibutuhkan untuk membuat reaksi pembakaran?", en: "What are the contents of the 'Fire Triangle' needed to create a combustion reaction?" },
        options: [{ text: { id: "Bahan bakar, Oksigen, dan Panas", en: "Fuel, Oxygen, and Heat" } }, { text: { id: "Kayu, Batu, dan Air", en: "Wood, Stone, and Water" } }, { text: { id: "Korek, Kertas, dan Minyak", en: "Match, Paper, and Oil" } }, { text: { id: "Cahaya Matahari, Tanah, Udara", en: "Sunlight, Soil, Air" } }],
        answerIdx: 0
      },
      {
        question: { id: "Mengapa api kompor gas berwarna biru, bukan oranye kemerahan seperti api unggun?", en: "Why is a gas stove fire blue, not reddish-orange like a campfire?" },
        options: [{ text: { id: "Karena pembakarannya lebih sempurna dan suhunya lebih panas", en: "Because the combustion is more perfect and the temperature is hotter" } }, { text: { id: "Karena gasnya diberi pewarna biru", en: "Because the gas is dyed blue" } }, { text: { id: "Karena kompor terbuat dari besi pendingin", en: "Because the stove is made of cooling iron" } }, { text: { id: "Karena memantulkan langit biru", en: "Because it reflects the blue sky" } }],
        answerIdx: 0
      },
      {
        question: { id: "Apa syarat utama suatu planet di luar angkasa bisa menyalakan api?", en: "What is the main requirement for a planet in space to be able to light a fire?" },
        options: [{ text: { id: "Harus memiliki banyak gas Oksigen di atmosfernya", en: "Must have plenty of Oxygen gas in its atmosphere" } }, { text: { id: "Harus memiliki banyak lautan air", en: "Must have many oceans of water" } }, { text: { id: "Harus sangat dekat dengan Matahari", en: "Must be very close to the Sun" } }, { text: { id: "Harus dipenuhi gunung berapi aktif", en: "Must be filled with active volcanoes" } }],
        answerIdx: 0
      }
    ]
  }
};

import { ObjectData } from "../objects";

export const burungHudhudData: ObjectData = {
  slug: "burung-hudhud",
  name: { id: "Burung Hudhud", en: "Hoopoe Bird" },
  icon: "🪶", 
  category: "hewan",
  type: "hewan",
  scientificName: "Upupa epops",
  surahName: "An-Naml",
  surahReference: "27:20", 
  unlockedAtPoints: 50, 
  
  kosakata: [
    { arab: "هُدْهُدٌ", latin: "Hudhud", arti: "Burung Hudhud", artiEn: "Hoopoe", contohAyat: "Burung Hudhud adalah pasukan Nabi Sulaiman" },
    { arab: "نَبَأٌ", latin: "Naba'", arti: "Berita penting", artiEn: "Important news", contohAyat: "Hudhud membawa berita penting dari negeri Saba" },
    { arab: "يَقِينٌ", latin: "Yaqiin", arti: "Pasti/Yakin", artiEn: "Certain/Sure", contohAyat: "Berita yang dibawa sangat pasti dan benar" },
    { arab: "طَيْرٌ", latin: "Thayr", arti: "Burung", artiEn: "Bird", contohAyat: "Nabi Sulaiman memeriksa barisan burung" }
  ],
  
  balita: {
    text: { id: "Putt putt putt... Ini burung Hudhud! Dia punya mahkota bulu yang cantik di kepalanya seperti raja! 🪶👑", en: "Putt putt putt... This is the Hoopoe bird! It has a beautiful feather crown on its head like a king! 🪶👑" },
    audioTranscript: { id: "Wah, burung apa ini yang kepalanya seperti pakai mahkota? Ini burung Hudhud! Burung pintar yang bisa terbang jauh sekali.", en: "Wow, what bird is this with a crown on its head? It's the Hoopoe bird! A smart bird that can fly very far." },
    quiz: {
      question: { id: "Burung Hudhud punya apa di atas kepalanya?", en: "What does the Hoopoe bird have on top of its head?" },
      options: [
        { text: { id: "👑 Mahkota bulu", en: "👑 Feather crown" } },
        { text: { id: "🧢 Topi baseball", en: "🧢 Baseball cap" } },
        { text: { id: "🕶️ Kacamata", en: "🕶️ Glasses" } }
      ],
      answerIdx: 0
    }
  },
  
  anak: {
    text: { id: "Burung Hudhud bukan burung biasa! Dia adalah utusan rahasia dan mata-mata andalan Nabi Sulaiman lho.", en: "The Hoopoe is no ordinary bird! It was Prophet Solomon's reliable secret messenger and spy." },
    facts: [
      { id: "Burung Hudhud punya mahkota bulu yang bisa mekar terbuka saat terkejut atau bersemangat.", en: "The Hoopoe has a feather crown that can fan open when surprised or excited." },
      { id: "Paruhnya panjang dan melengkung seperti pinset untuk mencapit serangga dari dalam tanah.", en: "Its beak is long and curved like tweezers to pinch insects from the ground." },
      { id: "Penerbangan burung ini unik, gerakannya naik-turun seperti gelombang atau kupu-kupu besar.", en: "This bird's flight is unique, moving up and down like waves or a giant butterfly." },
      { id: "Untuk melindungi sarangnya, Hudhud menyemprotkan cairan berbau busuk agar predator menjauh.", en: "To protect its nest, the Hoopoe sprays a foul-smelling liquid to keep predators away." },
      { id: "Burung ini sangat pandai bernavigasi dan tidak pernah tersesat meskipun terbang ribuan kilometer.", en: "This bird is very good at navigating and never gets lost even flying thousands of kilometers." }
    ],
    quranVerse: {
      arabic: "وَتَفَقَّدَ الطَّيْرَ فَقَالَ مَا لِيَ لَا أَرَى الْهُدْهُدَ أَمْ كَانَ مِنَ الْغَائِبِينَ",
      transliteration: "Wa tafaqqadath-thayra fa qaala maa liya laa aral-hudhuda am kaana minal-ghaa'ibiin.",
      translation: { id: "Dan dia memeriksa burung-burung lalu berkata: 'Mengapa aku tidak melihat hud-hud, apakah dia termasuk yang tidak hadir?'", en: "And he took attendance of the birds and said, 'Why do I not see the hoopoe - or is he among the absent?'" },
      context: { id: "Tau nggak? Nabi Sulaiman sangat kehilangan saat Hudhud tidak ada di barisan pasukan. Ternyata, si burung kecil ini sedang mengintai kerajaan Ratu Balqis di negeri Saba, ratusan kilometer jauhnya!", en: "Did you know? Prophet Solomon missed the Hoopoe when it wasn't in the army ranks. It turns out, this little bird was spying on Queen Sheba's kingdom in Saba, hundreds of kilometers away!" }
    },
    quiz: {
      question: { id: "Apa bentuk paruh burung Hudhud yang berguna untuk mencari makanan?", en: "What is the shape of the Hoopoe's beak that is useful for finding food?" },
      options: [
        { text: { id: "Panjang dan melengkung seperti pinset", en: "Long and curved like tweezers" } },
        { text: { id: "Pendek dan tebal seperti tang", en: "Short and thick like pliers" } },
        { text: { id: "Lebar seperti sendok bebek", en: "Wide like a duck's spoon" } },
        { text: { id: "Tajam lurus seperti pisau", en: "Sharp and straight like a knife" } }
      ],
      answerIdx: 0
    }
  },
  
  explorer: {
    text: { 
      id: "Burung Hudhud adalah burung pengembara (migran) yang melintasi benua. Secara ekologi, burung ini sangat tangguh. Mereka bisa terbang melintasi pegunungan Himalaya dan mengarungi padang pasir panas tanpa tersesat, berkat sistem navigasi magnetik di otaknya.\n\nMereka memiliki pola sayap hitam-putih yang sangat kontras, yang saat terbang menciptakan ilusi optik 'berkedip' membingungkan predator seperti elang. Kemampuan bertahan hidup Hudhud sangat unik: otot lehernya super kuat untuk mematuk tanah seperti palu, layaknya burung pelatuk, namun dilakukan di atas permukaan tanah pasir.\n\nKarena kemampuan jelajah dan penglihatannya yang tajam dari ketinggian inilah, Hudhud sangat cocok dijadikan agen pramuka/pengintai militer.", 
      en: "The Hoopoe is a migratory bird that crosses continents. Ecologically, this bird is very tough. They can fly over the Himalayas and cross hot deserts without getting lost, thanks to the magnetic navigation system in their brains.\n\nThey have highly contrasting black-and-white wing patterns that create a 'flashing' optical illusion when flying, confusing predators like eagles. The Hoopoe's survival skills are unique: its neck muscles are super strong to peck the ground like a hammer, similar to a woodpecker, but done on sandy ground.\n\nBecause of its roaming ability and sharp vision from high altitudes, the Hoopoe was perfect as a military scout/reconnaissance agent." 
    },
    anatomy: [
      { part: { id: "Crest (Mahkota)", en: "Crest" }, desc: { id: "Kumpulan bulu di kepala yang digunakan untuk komunikasi emosi dan menakut-nakuti musuh.", en: "A cluster of feathers on the head used for emotional communication and scaring enemies." } },
      { part: { id: "Kelenjar Uropigial", en: "Uropygial Gland" }, desc: { id: "Kelenjar yang menghasilkan cairan berbau busuk mirip daging busuk untuk mengusir pemangsa dari sarang.", en: "A gland that produces a foul-smelling liquid like rotting meat to repel predators from the nest." } }
    ],
    wowFactor: { 
      id: "Fakta WOW menakjubkan: Dalam Al-Qur'an (27:22), Burung Hudhud berkata kepada Nabi Sulaiman: 'Aku telah mengetahui sesuatu yang kamu belum mengetahuinya, dan kubawa kepadamu dari negeri Saba suatu BERITA PENTING YANG PASTI (Yaqiin)'.\n\nSains biologi mengungkapkan bahwa burung Hudhud adalah penerbang soliter yang mampu melihat secara stereoskopik mendetail dari udara, mampu mengenali landmark geografis, dan merekam memori rute sejauh ribuan kilometer! Al-Qur'an tidak memilih sembarang burung elang atau merpati, melainkan Hudhud—burung penjelajah pintar yang berani mengambil inisiatif terbang melintasi Gurun Arab (dari Palestina ke Yaman/Saba) untuk membawa data intelijen militer yang akurat 100%!", 
      en: "Astonishing WOW Fact: In the Qur'an (27:22), the Hoopoe bird said to Prophet Solomon: 'I have encompassed [in knowledge] that which you have not encompassed, and I have come to you from Sheba with CERTAIN NEWS (Yaqiin)'.\n\nBiological science reveals that the Hoopoe is a solitary flyer capable of detailed stereoscopic vision from the air, recognizing geographic landmarks, and recording route memories of thousands of kilometers! The Qur'an didn't just choose an eagle or pigeon, but a Hoopoe—a smart explorer bird brave enough to take the initiative to fly across the Arabian Desert (from Palestine to Yemen/Sheba) to bring 100% accurate military intelligence data!" 
    },
    quranVerse: {
      arabic: "فَمَكَثَ غَيْرَ بَعِيدٍ فَقَالَ أَحَطْتُ بِمَا لَمْ تُحِطْ بِهِ وَجِئْتُكَ مِنْ سَبَإٍ بِنَبَإٍ يَقِينٍ",
      transliteration: "Famakatsa ghayra ba'iidin fa qaala ahathtu bimaa lam tuhith bihi wa ji'tuka min saba'im binaba'iy yaqiin.",
      translation: { id: "Maka tidak lama kemudian (datanglah hud-hud), lalu ia berkata: 'Aku telah mengetahui sesuatu yang kamu belum mengetahuinya; dan kubawa kepadamu dari negeri Saba suatu berita penting yang diyakini.'", en: "But the hoopoe stayed not long and said, 'I have encompassed [in knowledge] that which you have not encompassed, and I have come to you from Sheba with certain news.'" }
    },
    quiz: [
      {
        question: { id: "Sistem anatomi apa yang dipakai Hudhud untuk mengusir pemangsa dari sarangnya?", en: "What anatomical system does the Hoopoe use to repel predators from its nest?" },
        options: [{ text: { id: "Menyemprotkan cairan berbau busuk", en: "Spraying a foul-smelling liquid" } }, { text: { id: "Membunyikan alarm suara", en: "Sounding a vocal alarm" } }, { text: { id: "Memukul dengan sayap", en: "Hitting with wings" } }, { text: { id: "Menembakkan bulu beracun", en: "Shooting poisonous feathers" } }],
        answerIdx: 0
      },
      {
        question: { id: "Pola penerbangan Hudhud terlihat unik seperti...", en: "The flight pattern of the Hoopoe looks unique like..." },
        options: [{ text: { id: "Gelombang naik-turun", en: "Up-and-down waves" } }, { text: { id: "Meluncur lurus layaknya panah", en: "Gliding straight like an arrow" } }, { text: { id: "Terbang mundur (helikopter)", en: "Flying backwards (helicopter)" } }, { text: { id: "Berputar-putar membuat tornado", en: "Spinning making tornados" } }],
        answerIdx: 0
      },
      {
        question: { id: "Hudhud membawa berita penting kepada Nabi Sulaiman dari sebuah negeri bernama...", en: "The Hoopoe brought important news to Prophet Solomon from a land called..." },
        options: [{ text: { id: "Saba", en: "Sheba/Saba" } }, { text: { id: "Mesir", en: "Egypt" } }, { text: { id: "Babilonia", en: "Babylon" } }, { text: { id: "Mekkah", en: "Mecca" } }],
        answerIdx: 0
      }
    ]
  }
};

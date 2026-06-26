import { ObjectData } from "../objects";

export const kucingData: ObjectData = {
  slug: "kucing",
  name: { id: "Kucing", en: "Cat" },
  icon: "🐈",
  category: "hewan",
  type: "hewan",
  scientificName: "Felis catus",
  surahName: "Hadits (Tirmidzi)",
  surahReference: "Tirmidzi 92",
  unlockedAtPoints: 50,

  kosakata: [
    { arab: "قِطٌّ", latin: "Qitth", arti: "Kucing", artiEn: "Cat", contohAyat: "Hewan peliharaan yang disayangi Nabi." },
    { arab: "هِرَّةٌ", latin: "Hirrah", arti: "Kucing betina", artiEn: "Female cat", contohAyat: "Abu Hurairah berarti Bapak Kucing." },
    { arab: "شَارِبٌ", latin: "Shaarib", arti: "Kumis", artiEn: "Whiskers", contohAyat: "Kumis kucing adalah alat sensor." },
    { arab: "مَخْلَبٌ", latin: "Makhlab", arti: "Cakar", artiEn: "Claw", contohAyat: "Kucing bisa menyembunyikan cakarnya." }
  ],

  balita: {
    text: { id: "Meow! Ini kucing! Kucing suka dielus dan bulunya sangaaat halus. 🐈", en: "Meow! This is a cat! Cats love to be petted and their fur is soooo soft. 🐈" },
    audioTranscript: { id: "Meow! Halo teman kecil, aku kucing! Aku suka dielus-elus lho. Aku juga suka main bola benang. Kalau aku lagi senang, aku suka bunyi purr purr purr... hihihi lucunya!", en: "Meow! Hello little friend, I'm a cat! I love being petted. I also love playing with balls of yarn. When I'm happy, I like to make a purr purr purr sound... hehehe so cute!" },
    quiz: {
      question: { id: "Bagaimana suara kucing?", en: "What sound does a cat make?" },
      options: [
        { text: { id: "Mbeeek", en: "Baaa" } },
        { text: { id: "Rooaaarr", en: "Rooaaarr" } },
        { text: { id: "Meow", en: "Meow" } }
      ],
      answerIdx: 2
    }
  },

  anak: {
    text: { id: "Kucing adalah hewan peliharaan paling populer di dunia karena mereka sangat lucu dan bersih!", en: "Cats are the most popular pets in the world because they are so cute and clean!" },
    facts: [
      { id: "Kumis kucing ternyata dipakai untuk mengukur apakah tubuhnya bisa melewati lubang sempit atau tidak!", en: "Cat whiskers are actually used to measure if their body can pass through a narrow hole!" },
      { id: "Kucing bisa melompat 6 kali tinggi badannya sendiri. Hah?! Jago banget!", en: "Cats can jump 6 times their own body height. What?! So skilled!" },
      { id: "Mereka punya 'rem batin' alias bisa memutar tubuhnya di udara supaya selalu jatuh dengan kaki duluan.", en: "They have an 'inner brake', aka they can twist their bodies in the air to always land on their feet first." },
      { id: "Kucing menghabiskan 30% sampai 50% waktu bangunnya untuk menjilat dan membersihkan diri.", en: "Cats spend 30% to 50% of their awake time licking and cleaning themselves." },
      { id: "Sahabat Nabi bernama Abdurrahman bin Sakhr sangat sayang kucing, sampai dipanggil Abu Hurairah (Bapak Kucing).", en: "The Prophet's companion named Abdurrahman bin Sakhr loved cats so much, he was called Abu Hurairah (Father of Cats)." }
    ],
    quranVerse: {
      arabic: "إِنَّهَا لَيْسَتْ بِنَجَسٍ إِنَّهَا مِنَ الطَّوَّافِينَ عَلَيْكُمْ وَالطَّوَّافَاتِ",
      transliteration: "Innahaa laysat binajasin, innahaa minat-thawwaafiina 'alaykum wath-thawwaafaat",
      translation: { id: "Kucing itu tidak najis. Sesungguhnya dia adalah hewan yang selalu berkeliling (bergaul) dengan kalian.", en: "Cats are not impure. They are among those who wander around among you." },
      context: { id: "Tau nggak? Nabi Muhammad ﷺ sangat sayang sama kucing peliharaannya (namanya Muezza). Nabi bilang kucing itu hewan suci yang tidak najis air liurnya. Jadi kita boleh lho sholat pakai baju yang baru saja dijilat kucing!", en: "Did you know? Prophet Muhammad ﷺ really loved his pet cat (named Muezza). The Prophet said cats are pure animals whose saliva is not impure. So we are allowed to pray in clothes that were just licked by a cat!" }
    },
    quiz: {
      question: { id: "Kenapa kucing suka menjilat-jilat badannya?", en: "Why do cats like to lick their bodies?" },
      options: [
        { text: { id: "Karena lapar", en: "Because hungry" } },
        { text: { id: "Untuk mandi dan membersihkan diri", en: "To bathe and clean themselves" } },
        { text: { id: "Karena kepanasan", en: "Because they are hot" } },
        { text: { id: "Lagi latihan menyanyi", en: "Practicing singing" } }
      ],
      answerIdx: 1
    }
  },

  explorer: {
    text: { id: "Kucing rumah (Felis catus) adalah pemburu soliter yang sangat terampil. Mata mereka memiliki pupil yang bisa mengecil menjadi garis vertikal tipis saat terang benderang, tapi membesar sangat lebar di malam hari untuk menangkap cahaya paling redup sekalipun.\n\nPendengaran kucing luar biasa. Mereka bisa mendengar suara ultrasonik dari tikus dari kejauhan yang tidak bisa didengar anjing maupun manusia! Telinga kucing seperti antena parabola mini yang dikendalikan oleh 32 otot, bisa berputar 180 derajat tanpa menengok.\n\nLidah kucing memiliki papila yang keras seperti duri-duri kecil yang menghadap ke belakang, sangat sempurna untuk menyisir bulu rontok dan kotoran.", en: "House cats (Felis catus) are highly skilled solitary hunters. Their eyes have pupils that can shrink into thin vertical slits in bright light, but expand very widely at night to catch even the dimmest light.\n\nCat hearing is extraordinary. They can hear ultrasonic sounds from mice from afar that neither dogs nor humans can hear! A cat's ear is like a mini satellite dish controlled by 32 muscles, able to rotate 180 degrees without turning their head.\n\nA cat's tongue has hard papillae like tiny backward-facing thorns, perfect for combing loose fur and dirt." },
    anatomy: [
      { part: { id: "Tulang Selangka Lepas", en: "Free-floating Collarbone" }, desc: { id: "Tidak tersambung ke tulang lain, membuat kucing bisa menyusup ke celah sempit.", en: "Not connected to other bones, allowing cats to squeeze into narrow gaps." } },
      { part: { id: "Dengkuran (Purr)", en: "Purr" }, desc: { id: "Getaran 25-150 Hertz yang secara ilmiah bisa mempercepat penyembuhan tulang dan luka.", en: "Vibrations of 25-150 Hertz scientifically proven to speed up bone and wound healing." } }
    ],
    wowFactor: { id: "Sains medis baru-baru ini menemukan bahwa air liur kucing (saliva) mengandung antibiotik alami, dan lidah mereka sangat bersih. Dengkuran (purring) kucing bukan cuma tanda bahagia, tapi frekuensinya secara ajaib memicu perbaikan jaringan tubuh dan tulang hewan itu sendiri!\n\nLebih dari 1400 tahun lalu, Islam menetapkan hukum fiqih unik: Kucing dikategorikan 'Thawwaf' (yang berkeliling di antara manusia) dan air bekas minumnya TIDAK NAJIS, bahkan boleh dipakai wudhu! Fakta higienis kucing ini adalah keistimewaan syariat yang mendahului mikrobiologi modern.", en: "Medical science recently discovered that cat saliva contains natural antibiotics, and their tongues are very clean. A cat's purring is not just a sign of happiness, but its frequency miraculously triggers tissue and bone repair of the animal itself!\n\nOver 1400 years ago, Islam established a unique fiqh ruling: Cats are categorized as 'Thawwaf' (wandering among humans) and their leftover drinking water is NOT IMPURE, and can even be used for ablution (wudhu)! This hygienic fact of cats is a sharia privilege that predates modern microbiology." },
    quranVerse: {
      arabic: "إِنَّهَا لَيْسَتْ بِنَجَسٍ إِنَّهَا مِنَ الطَّوَّافِينَ عَلَيْكُمْ وَالطَّوَّافَاتِ",
      transliteration: "Innahaa laysat binajasin, innahaa minat-thawwaafiina 'alaykum wath-thawwaafaat",
      translation: { id: "Kucing itu tidak najis. Sesungguhnya dia adalah hewan yang selalu berkeliling di antara kalian.", en: "Cats are not impure. They are among those who wander around among you." }
    },
    quiz: [
      {
        question: { id: "Sains menemukan bahwa getaran 'dengkuran' (purr) kucing bisa berfungsi untuk...", en: "Science found that a cat's 'purr' vibration can function to..." },
        options: [{ text: { id: "Menyembuhkan tulang dan luka", en: "Heal bones and wounds" } }, { text: { id: "Memanggil tikus", en: "Call mice" } }, { text: { id: "Mengusir nyamuk", en: "Repel mosquitoes" } }, { text: { id: "Bikin manusia mengantuk", en: "Make humans sleepy" } }],
        answerIdx: 0
      },
      {
        question: { id: "Apa arti nama sahabat Nabi, 'Abu Hurairah'?", en: "What is the meaning of the Prophet's companion's name, 'Abu Hurairah'?" },
        options: [{ text: { id: "Bapak Pemberani", en: "Father of the Brave" } }, { text: { id: "Bapak Singa", en: "Father of Lions" } }, { text: { id: "Bapak Kucing Kecil", en: "Father of Little Cats" } }, { text: { id: "Bapak Penyayang", en: "Father of the Merciful" } }],
        answerIdx: 2
      },
      {
        question: { id: "Hukum air sisa minum kucing menurut sabda Nabi adalah...", en: "The ruling of leftover cat drinking water according to the Prophet's words is..." },
        options: [{ text: { id: "Najis berat", en: "Heavily impure" } }, { text: { id: "Boleh untuk minum tapi tidak wudhu", en: "Allowed to drink but not wudhu" } }, { text: { id: "Tidak najis, dan suci mensucikan", en: "Not impure, and pure/purifying" } }, { text: { id: "Beracun", en: "Poisonous" } }],
        answerIdx: 2
      }
    ]
  }
};

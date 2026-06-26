import { ObjectData } from "../objects";

export const gigiData: ObjectData = {
  slug: "gigi",
  name: { id: "Gigi", en: "Teeth" },
  icon: "🦷",
  category: "tubuh",
  type: "tubuh",
  scientificName: "Dentes",
  surahName: "Al-Infitar",
  surahReference: "82:7-8",
  unlockedAtPoints: 20,
  kosakata: [
    { arab: "سِنٌّ", latin: "Sinnun", arti: "Gigi", artiEn: "Tooth", contohAyat: "As-sinna bis-sinni (Gigi dengan gigi)." }
  ],
  balita: {
    text: { id: "Kres! Kres! Gigi kita super kuat buat mengunyah apel manis. Jangan lupa disikat setiap hari ya, supaya kuman jahat pergi! 😁✨", en: "Crunch! Crunch! Our teeth are super strong for chewing sweet apples. Don't forget to brush them every day, so the bad germs go away! 😁✨" },
    audioTranscript: { id: "Gigimu seputih mutiara! Gosok gigi pagi dan malam supaya selalu sehat.", en: "Your teeth are as white as pearls! Brush your teeth morning and night to keep them healthy." },
    quiz: {
      question: { id: "Berapa kali kita harus menyikat gigi sehari?", en: "How many times should we brush our teeth a day?" },
      options: [
        { text: { id: "Tidak pernah", en: "Never" } },
        { text: { id: "Satu kali", en: "Once" } },
        { text: { id: "Minimal dua kali", en: "At least twice" } }
      ],
      answerIdx: 2
    }
  },
  anak: {
    text: { id: "Gigi adalah penghancur makanan nomor satu! Makanan dihancurkan gigi agar perut mudah mencernanya. Nabi Muhammad ﷺ sangat suka membersihkan gigi dengan siwak. Menjaga kebersihan gigi itu sebagian dari iman, lho! 🪥🦷", en: "Teeth are the number one food crushers! Food is crushed by teeth so the stomach can easily digest it. Prophet Muhammad ﷺ really loved cleaning his teeth with a siwak. Keeping teeth clean is part of faith, you know! 🪥🦷" },
    facts: [
      { id: "Enamel gigi (bagian paling luar) adalah zat paling keras di tubuh manusia, bahkan lebih keras dari tulang! 💪", en: "Tooth enamel (the outermost part) is the hardest substance in the human body, even harder than bone! 💪" },
      { id: "Setiap orang punya susunan gigi yang unik, mirip seperti sidik jari! 🔍", en: "Everyone has a unique set of teeth, much like a fingerprint! 🔍" },
      { id: "Manusia punya dua set gigi: gigi susu dan gigi permanen.", en: "Humans have two sets of teeth: baby teeth and permanent teeth." }
    ],
    quranVerse: {
      arabic: "الَّذِي خَلَقَكَ فَسَوَّاكَ فَعَدَلَكَ",
      transliteration: "Alladzee khalaqaka fasawwaaka fa'adalak",
      translation: { id: "Yang telah menciptakanmu lalu menyempurnakan kejadianmu dan menjadikan (susunan tubuh)mu seimbang.", en: "Who created you, proportioned you, and balanced you?" },
      context: { id: "Susunan gigi kita dibuat sangat rapi oleh Allah agar kita mudah makan dan berbicara.", en: "Our teeth arrangement is made so neatly by Allah so we can easily eat and speak." }
    },
    quiz: {
      question: { id: "Apa yang disukai Nabi Muhammad ﷺ untuk membersihkan gigi?", en: "What did Prophet Muhammad ﷺ like to use to clean his teeth?" },
      options: [
        { text: { id: "Ranting kayu biasa", en: "Regular wood branch" } },
        { text: { id: "Siwak", en: "Siwak (Miswak)" } },
        { text: { id: "Daun pisang", en: "Banana leaf" } }
      ],
      answerIdx: 1
    }
  },
  explorer: {
    text: { id: "Tahukah kamu, di bawah gusi ada pabrik gigi rahasia? Gigi geraham bertugas menumbuk, gigi seri memotong, dan gigi taring merobek. Setiap gigi punya tugas spesifik! Allah Al-Musawwir (Maha Membentuk Rupa) mendesain gigi seri yang tajam tepat di depan, dan geraham yang datar di belakang. Coba bayangkan kalau terbalik, kita pasti kesulitan makan! Desain yang sempurna ini menunjukkan kebesaran Allah. 🌟", en: "Did you know, under the gums there's a secret tooth factory? Molars grind, incisors cut, and canines tear. Every tooth has a specific job! Allah Al-Musawwir (The Flawless Shaper) designed sharp incisors right in the front, and flat molars in the back. Just imagine if it were reversed, we would definitely have trouble eating! This perfect design shows the greatness of Allah. 🌟" },
    anatomy: [
      { part: { id: "Enamel", en: "Enamel" }, desc: { id: "Lapisan terluar gigi pelindung super keras yang berwarna putih.", en: "The outermost layer of the tooth, a super hard white protector." } },
      { part: { id: "Dentin", en: "Dentin" }, desc: { id: "Lapisan di bawah enamel yang warnanya sedikit kekuningan.", en: "The layer beneath the enamel that is slightly yellowish in color." } },
      { part: { id: "Pulpa", en: "Pulp" }, desc: { id: "Bagian dalam gigi yang berisi saraf; ini yang bikin kamu merasa ngilu kalau minum es!", en: "The inside of the tooth containing nerves; this makes you feel a twinge when drinking ice!" } }
    ],
    wowFactor: { id: "Otak nyamuk sangat kecil, tapi nyamuk punya 47 gigi! Namun, gigi manusia jauh lebih kuat dan dirancang bertahan puluhan tahun asal dirawat dengan baik. 😲", en: "A mosquito's brain is very small, but a mosquito has 47 teeth! However, human teeth are far stronger and designed to last decades as long as they are cared for well. 😲" },
    quranVerse: {
      arabic: "الَّذِي خَلَقَكَ فَسَوَّاكَ فَعَدَلَكَ",
      transliteration: "Alladzee khalaqaka fasawwaaka fa'adalak",
      translation: { id: "Yang telah menciptakanmu lalu menyempurnakan kejadianmu dan menjadikan (susunan tubuh)mu seimbang.", en: "Who created you, proportioned you, and balanced you?" }
    },
    quiz: [
      {
        question: { id: "Apa nama lapisan gigi yang paling keras dan berada paling luar?", en: "What is the name of the hardest and outermost layer of the tooth?" },
        options: [
          { text: { id: "Dentin", en: "Dentin" } },
          { text: { id: "Enamel", en: "Enamel" } },
          { text: { id: "Pulpa", en: "Pulp" } }
        ],
        answerIdx: 1
      }
    ]
  }
};
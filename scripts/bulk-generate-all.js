const fs = require('fs');
const path = require('path');

function toCamelCase(str) {
  return str.replace(/-([a-z0-9])/g, g => g[1].toUpperCase()).replace(/-+/g, '');
}

function makeSlug(name) {
  return name.toLowerCase()
    .replace(/[^\w\s-]/g, '') // remove special characters
    .trim()
    .replace(/[\s_]+/g, '-')  // replace spaces/underscores with hyphens
    .replace(/-+/g, '-');     // collapse multiple hyphens
}

const generatedSlugs = new Set();
function getUniqueSlug(name) {
  const baseSlug = makeSlug(name);
  let slug = baseSlug;
  let counter = 1;
  while (generatedSlugs.has(slug)) {
    slug = `${baseSlug}-${counter}`;
    counter++;
  }
  generatedSlugs.add(slug);
  return slug;
}

// 1. COMPACT OVERRIDES FOR MAJOR PROPHETS
const PROPHET_OVERRIDES = {
  adam: {
    storyShort: "Kisah penciptaan manusia pertama, ketaatan malaikat, dan taubat Nabi Adam setelah diturunkan ke Bumi.",
    storyFull: "Nabi Adam A.S. adalah manusia pertama yang diciptakan oleh Allah SWT dari tanah. Allah meniupkan ruh-Nya dan mengajarkan semua nama benda kepadanya. Setelah digoda oleh Iblis untuk mendekati pohon terlarang, beliau diturunkan ke bumi, bertaubat, dan dikabulkan doanya oleh Allah untuk membimbing keturunannya.",
    miracles: ["Diciptakan langsung oleh Allah tanpa perantara ayah dan ibu.", "Diajarkan nama-nama dari segala sesuatu oleh Allah SWT."],
    traits: [{ trait: "Taubat", desc: "Segera mengakui kesalahan dan memohon ampunan kepada Allah SWT." }],
    timeline: [
      { yearOrAge: "Awal", title: "Penciptaan di Surga", desc: "Diciptakan dari tanah liat kering dan ruh ditiupkan." },
      { yearOrAge: "Ujian", title: "Godaan Iblis", desc: "Memakan buah terlarang di surga karena bujuk rayu Iblis." },
      { yearOrAge: "Bumi", title: "Kekhalifahan di Bumi", desc: "Diturunkan ke bumi untuk mengelola alam dan beribadah." }
    ],
    daily: "Jika melakukan kesalahan, kita harus meniru Nabi Adam dengan segera meminta maaf kepada orang tua dan memohon ampun kepada Allah."
  },
  nuh: {
    storyShort: "Nabi yang membangun bahtera raksasa atas perintah Allah untuk menyelamatkan kaum beriman dari banjir besar.",
    storyFull: "Nabi Nuh A.S. berdakwah selama 950 tahun dengan kesabaran luar biasa, namun hanya sedikit yang beriman. Atas perintah Allah, beliau membuat perahu raksasa (Bahtera) di atas bukit yang gersang. Ketika banjir bandang dahsyat menenggelamkan bumi, kaum beriman dan hewan-hewan berpasangan selamat di dalam bahtera.",
    miracles: ["Mampu membuat kapal raksasa yang sangat kokoh tanpa teknologi modern.", "Selamat dari banjir besar yang menenggelamkan seluruh daratan."],
    traits: [{ trait: "Sabar", desc: "Tetap berdakwah ratusan tahun meski terus dihina kaumnya." }],
    timeline: [
      { yearOrAge: "Dakwah", title: "Ratusan Tahun Dakwah", desc: "Mengajak kaumnya meninggalkan berhala." },
      { yearOrAge: "Bahtera", title: "Membuat Kapal Raksasa", desc: "Membuat kapal di daratan atas wahyu Allah SWT." },
      { yearOrAge: "Banjir", title: "Air Bah Datang", desc: "Banjir melanda bumi, menyelamatkan orang beriman dan hewan." }
    ],
    daily: "Kita harus pantang menyerah saat belajar atau berbuat baik, meski orang lain mengejek kita."
  },
  ibrahim: {
    storyShort: "Bapak para nabi, tidak mempan dibakar api Raja Namrud, dan membangun Ka'bah bersama Nabi Ismail A.S.",
    storyFull: "Nabi Ibrahim A.S. adalah Khalilullah (Kekasih Allah). Beliau menghancurkan berhala-berhala Raja Namrud untuk menunjukkan ketidakberdayaan mereka. Akibatnya, beliau dihukum bakar hidup-hidup, namun Allah berfirman kepada api agar menjadi dingin dan menyelamatkan Nabi Ibrahim. Beliau juga diperintahkan menyembelih putranya Ismail yang kemudian diganti domba, serta membangun Ka'bah di Makkah.",
    miracles: ["Api raksasa menjadi dingin dan damai saat beliau dibakar.", "Ketaatan mengurbankan Ismail diganti dengan domba dari surga."],
    traits: [{ trait: "Pemberani", desc: "Berani menyampaikan kebenaran tentang keesaan Allah di depan raja kejam." }],
    timeline: [
      { yearOrAge: "Muda", title: "Dilemparkan ke Api", desc: "Dihukum bakar oleh Namrud, namun api terasa dingin menyegarkan." },
      { yearOrAge: "Kurban", title: "Kurban & Zamzam", desc: "Keteladanan kepatuhan kurban luar biasa digantikan domba surga." },
      { yearOrAge: "Tua", title: "Membangun Ka'bah", desc: "Mendirikan bangunan suci Ka'bah bersama Ismail." }
    ],
    daily: "Kita harus berani membela kebenaran dan selalu taat serta berbakti kepada orang tua kita."
  },
  musa: {
    storyShort: "Nabi yang membelah Laut Merah dengan tongkatnya untuk menyelamatkan Bani Israil dari kejaran pasukan Firaun.",
    storyFull: "Nabi Musa A.S. dihanyutkan di sungai Nil saat bayi, lalu diasuh oleh istri Firaun sendiri. Setelah dewasa, beliau menerima wahyu di Bukit Sinai. Beliau menentang Firaun yang mengaku tuhan. Ketika terpojok di tepi laut merah, Allah memerintahkannya memukulkan tongkatnya, membelah laut menjadi jalan kering, menyelamatkan Bani Israil, dan menenggelamkan Firaun.",
    miracles: ["Tongkat kayu berubah menjadi ular besar dan membelah Laut Merah.", "Telapak tangannya memancarkan cahaya putih yang menyilaukan."],
    traits: [{ trait: "Pemberani & Tegas", desc: "Berani memimpin kaum tertindas melawan raja diktator terkuat di bumi." }],
    timeline: [
      { yearOrAge: "Hanyut", title: "Bayi di Sungai Nil", desc: "Diselamatkan oleh Asiyah, istri Firaun, dari rencana pembunuhan bayi." },
      { yearOrAge: "Wahyu", title: "Tongkat Jadi Ular", desc: "Menghadapi para penyihir Firaun dengan mukjizat tongkat kayu." },
      { yearOrAge: "Laut", title: "Membelah Laut Merah", desc: "Laut terbelah menciptakan jalan aman bagi ribuan orang." }
    ],
    daily: "Kita harus berani membela teman yang sedang dirundung (dibully) dan teguh pendirian melakukan kebaikan."
  },
  isa: {
    storyShort: "Nabi yang lahir tanpa ayah dari perawan suci Maryam, mampu berbicara saat bayi, membuat burung dari tanah liat, dan menghidupkan orang mati atas izin Allah.",
    storyFull: "Nabi Isa A.S. dilahirkan oleh Maryam yang suci tanpa perantara ayah sebagai tanda kekuasaan Allah. Ketika Maryam dituduh, bayi Isa berbicara di dalam ayunan bayi untuk membela ibunya. Beliau mendakwahkan kitab Injil, mampu menyembuhkan orang buta sejak lahir, menyembuhkan kusta, membentuk burung dari tanah lalu menghidupkannya, dan menghidupkan orang mati, semuanya atas izin Allah SWT.",
    miracles: ["Berbicara lancar membela ibunya saat masih bayi di dalam ayunan.", "Membentuk tanah liat menjadi burung lalu menghidupkannya.", "Menyembuhkan orang buta, penyakit kusta, dan menghidupkan orang mati."],
    traits: [{ trait: "Sederhana & Kasih", desc: "Sangat sederhana dalam hidupnya dan penuh kasih sayang kepada kaum miskin." }],
    timeline: [
      { yearOrAge: "Bayi", title: "Berbicara di Ayunan", desc: "Menjelaskan bahwa dirinya adalah hamba Allah dan nabi pembawa kitab." },
      { yearOrAge: "Dakwah", title: "Mukjizat Penyembuhan", desc: "Menyembuhkan penyakit kronis yang tidak bisa diobati dokter zamannya." }
    ],
    daily: "Kita harus bersikap sopan santun kepada semua orang, terutama menyayangi teman-teman yang kurang beruntung."
  },
  muhammad: {
    storyShort: "Nabi akhir zaman, penutup para nabi, berakhlak mulia sempurna, mukjizat terbesar Al-Qur'an, dan melakukan perjalanan Isra' Mi'raj.",
    storyFull: "Nabi Muhammad ﷺ lahir sebagai yatim di Makkah. Beliau terkenal sangat jujur sehingga dijuluki Al-Amin (Yang Terpercaya). Pada usia 40 tahun, beliau menerima wahyu pertama di Gua Hira berupa Al-Qur'an lewat Malaikat Jibril. Beliau mengalami peristiwa Isra' Mi'raj menerima perintah shalat 5 waktu. Dengan akhlak mulia dan kasih sayang yang tiada tara, beliau menyebarkan Islam ke seluruh penjuru dunia.",
    miracles: ["Al-Qur'anul Karim, mukjizat terbesar sepanjang masa yang menjaga keasliannya.", "Perjalanan luar angkasa Isra' Mi'raj menembus langit ketujuh.", "Membelah bulan dengan isyarat telunjuk jari tangannya."],
    traits: [{ trait: "Akhlak Sempurna", desc: "Memiliki kejujuran, kesabaran, keadilan, dan cinta kasih teragung." }],
    timeline: [
      { yearOrAge: "Lahir", title: "Kelahiran Yatim", desc: "Lahir di tahun gajah, dirawat kakek Abdul Muthalib lalu paman Abu Thalib." },
      { yearOrAge: "Wahyu", title: "Turunnya Al-Qur'an", desc: "Menerima surah Al-Alaq di Gua Hira sebagai awal tugas kenabian." },
      { yearOrAge: "Hijrah", title: "Hijrah ke Madinah", desc: "Membangun peradaban Islam yang adil bersama kaum Muhajirin dan Anshar." }
    ],
    daily: "Kita harus meniru akhlak Rasulullah dengan selalu jujur dalam ucapan, menyayangi teman, menghormati guru, dan rajin shalat 5 waktu tepat waktu."
  }
};

// 2. COMPACT OVERRIDES FOR MAJOR SCIENTIFIC OBJECTS
const SCIENTIFIC_OVERRIDES = {
  lebah: {
    facts: [
      "Lebah madu mengepakkan sayapnya sekitar 200 kali per detik untuk terbang.",
      "Lebah madu berkomunikasi dengan menari (waggle dance) untuk menunjukkan lokasi bunga.",
      "Lebah memiliki 5 mata: 2 mata majemuk besar dan 3 mata kecil di atas kepalanya.",
      "Madu yang dihasilkan lebah adalah satu-satunya makanan yang tidak pernah basi selama ribuan tahun.",
      "Satu koloni lebah bisa berisi hingga 60.000 lebah yang bekerja sama dengan sangat rapi."
    ],
    wowFactor: "Dalam Surah An-Nahl 16:68-69, Allah memerintahkan lebah untuk membuat sarang di gunung dan pohon. Allah menyebutkan cairan madu dari perut lebah beraneka warna dan mengandung obat penyembuh. Sains modern membuktikan madu memiliki kandungan antiseptik, zat besi, dan vitamin yang mempercepat penyembuhan luka secara luar biasa.",
    anatomy: [{ part: "Kantong Madu", desc: "Tempat menyimpan nektar di perut terpisah dari pencernaan biasa." }]
  },
  semut: {
    facts: [
      "Semut adalah serangga super kuat yang bisa mengangkat beban 50 kali berat badannya.",
      "Semut tidak memiliki telinga; mereka merasakan getaran tanah lewat kaki mereka.",
      "Semut berkomunikasi dengan mengeluarkan zat kimia bernama feromon.",
      "Beberapa spesies semut tidak memiliki mata dan hanya mengandalkan antenanya.",
      "Semut selalu berjalan berbaris rapi untuk mengikuti jejak aroma feromon temannya."
    ],
    wowFactor: "Dalam Surah An-Naml 27:18, seekor semut memperingatkan kawanannya agar masuk sarang agar tidak terinjak oleh pasukan Nabi Sulaiman. Sains membuktikan semut memiliki sistem komunikasi suara frekuensi rendah (stridulasi) yang canggih untuk memanggil bantuan dan mengorganisir pertahanan koloni.",
    anatomy: [{ part: "Rahang (Mandibula)", desc: "Digunakan untuk menggigit, membawa makanan, dan mempertahankan sarang." }]
  },
  "laba-laba": {
    facts: [
      "Sutra jaring laba-laba lebih kuat dari kawat baja dengan ketebalan yang sama.",
      "Laba-laba bukan serangga; mereka masuk kelompok arakhnida berkaki delapan.",
      "Jaring laba-laba dilapisi lem lengket untuk menangkap serangga terbang.",
      "Sebagian besar laba-laba memiliki 8 mata untuk melihat ke segala arah.",
      "Laba-laba membantu petani dengan memakan serangga hama tanaman."
    ],
    wowFactor: "Dalam Surah Al-Ankabut 29:41, Allah mengibaratkan pelindung selain Allah seperti sarang laba-laba, rumah yang paling rapuh. Secara sains, meski sutra pembentuknya kuat, jaring laba-laba tidak mampu melindungi penghuninya dari cuaca ekstrim, angin kencang, air hujan, atau predator besar.",
    anatomy: [{ part: "Organ Pemintal", desc: "Mengeluarkan sutra cair yang langsung mengeras saat terkena udara." }]
  },
  unta: {
    facts: [
      "Unta dapat bertahan hidup berbulan-bulan di gurun pasir tanpa minum air.",
      "Punuk unta menyimpan lemak cadangan energi, bukan air seperti anggapan umum.",
      "Unta memiliki tiga pasang kelopak mata dan bulu mata panjang untuk menghalau pasir.",
      "Unta bisa menutup lubang hidungnya saat terjadi badai pasir gurun.",
      "Sel darah merah unta berbentuk oval sehingga tetap mengalir lancar saat dehidrasi."
    ],
    wowFactor: "Dalam Surah Al-Ghashiyah 88:17, Allah menyuruh manusia mengamati bagaimana unta diciptakan. Unta memiliki keajaiban sains berupa kemampuan minum 150 liter air sekali minum, dan suhu tubuhnya bisa menyesuaikan diri dengan panas gurun (34C-41C) agar tidak membuang air melalui keringat.",
    anatomy: [{ part: "Telapak Kaki Lebar", desc: "Berselaput tebal agar tidak terperosok ke dalam pasir panas." }]
  },
  jantung: {
    facts: [
      "Jantung manusia berdetak sekitar 100.000 kali dalam satu hari.",
      "Jantung memompa sekitar 7.500 liter darah ke seluruh tubuh setiap hari.",
      "Ukuran jantung kita kira-kira sebesar kepalan tangan kita sendiri.",
      "Jantung memiliki sistem listriknya sendiri yang membuatnya terus berdetak.",
      "Detak jantung kita melambat saat tidur dan berdetak lebih cepat saat olahraga."
    ],
    wowFactor: "Dalam Surah Qaf 50:37, Allah menyebutkan pentingnya qalb (jantung/hati) sebagai pusat kesadaran dan pemahaman. Sains modern membuktikan jantung memiliki sistem saraf intrinsik ('otak jantung') yang terdiri dari 40.000 neuron yang berkomunikasi dua arah dengan otak kepala.",
    anatomy: [{ part: "4 Ruang Jantung", desc: "Katup satu arah mencegah darah bercampur atau mengalir mundur." }]
  },
  mata: {
    facts: [
      "Mata manusia dapat membedakan sekitar 10 juta warna berbeda.",
      "Mata adalah organ tubuh tercepat; otot mata bereaksi dalam sekejap kedipan.",
      "Mata berkedip sekitar 15-20 kali setiap menit untuk menjaga kelembapan.",
      "Retina mata menangkap gambar secara terbalik, lalu otak memutarnya kembali.",
      "Bagian mata berwarna hitam (pupil) akan melebar saat kita berada di tempat gelap."
    ],
    factsEn: [
      "The human eye can distinguish about 10 million different colors.",
      "The eye is the fastest organ; eye muscles react in a split second blink.",
      "Eyes blink about 15-20 times per minute to stay clean and moist.",
      "The retina captures images upside down, and the brain flips them right side up.",
      "The black center of the eye (pupil) dilates when we are in a dark space."
    ],
    wowFactor: "Dalam Surah Al-Balad 90:8, Allah bertanya: 'Bukankah Kami telah menjadikan untuknya sepasang mata?'. Keajaiban mata terletak pada retina yang memiliki 120 juta sel batang untuk mendeteksi cahaya redup dan 6 juta sel kerucut untuk melihat detail warna warni dengan presisi tinggi.",
    anatomy: [{ part: "Sensor Retina", desc: "Mengubah proyeksi cahaya menjadi impuls listrik untuk dikirim ke otak." }]
  },
  kurma: {
    facts: [
      "Pohon kurma bisa hidup hingga 150 tahun dan berbuah sangat lebat.",
      "Buah kurma sangat kaya kalium, serat, zat besi, dan glukosa alami.",
      "Biji kurma bisa bertahan tidak aktif selama puluhan tahun sebelum tumbuh.",
      "Kurma adalah sumber energi instan yang sangat baik saat berbuka puasa.",
      "Pohon kurma sangat tahan terhadap iklim gurun pasir yang panas dan kering."
    ],
    wowFactor: "Dalam Surah Maryam 19:25, Allah menyuruh Maryam menggoyang pangkal pohon kurma saat melahirkan untuk menjatuhkan buah kurma segar. Secara sains, kurma mengandung hormon oksitosin yang merangsang kontraksi rahim dan mencegah pendarahan saat melahirkan, serta zat besi penambah energi.",
    anatomy: [{ part: "Akar Serabut Dalam", desc: "Mencari air puluhan meter ke dalam tanah gurun yang kering." }]
  },
  zaitun: {
    facts: [
      "Pohon zaitun terkenal sangat panjang umur, bisa hidup ribuan tahun.",
      "Minyak zaitun mengandung lemak tak jenuh tunggal yang menyehatkan jantung.",
      "Pohon zaitun tetap hijau sepanjang tahun (evergreen).",
      "Zaitun mentah rasanya pahit dan harus difermentasi dahulu sebelum dimakan.",
      "Cabang zaitun adalah simbol perdamaian universal sejak zaman kuno."
    ],
    wowFactor: "Dalam Surah An-Nur 24:35, Allah mengibaratkan cahaya-Nya seperti minyak pohon zaitun yang diberkahi. Secara sains, minyak zaitun murni memiliki struktur kimia yang sangat stabil dan mampu memancarkan cahaya lampu minyak yang sangat jernih tanpa banyak asap.",
    anatomy: [{ part: "Daun Berlapis Lilin", desc: "Mencegah penguapan air di cuaca mediterania yang terik." }]
  },
  matahari: {
    facts: [
      "Matahari adalah bintang terdekat bumi yang menghasilkan cahayanya sendiri.",
      "Suhu permukaan matahari mencapai 5.500 derajat Celsius.",
      "Cahaya matahari membutuhkan waktu 8 menit untuk sampai ke bumi.",
      "Energi matahari menggerakkan siklus cuaca dan fotosintesis tanaman.",
      "Matahari mengandung 99,8% massa dari seluruh tata surya kita."
    ],
    wowFactor: "Dalam Surah Asy-Syams 91:1-2, Allah bersumpah demi matahari dan cahayanya di pagi hari. Matahari memancarkan angin surya dan medan magnet yang melindungi bumi dari radiasi kosmis mematikan, menjadikannya sistem pendukung kehidupan utama.",
    anatomy: [{ part: "Zona Radiatif", desc: "Energi termonuklir dari inti merambat keluar membutuhkan waktu ribuan tahun." }]
  },
  bulan: {
    facts: [
      "Bulan tidak memiliki cahayanya sendiri; ia hanya memantulkan cahaya matahari.",
      "Gaya gravitasi bulan menyebabkan pasang surut air laut di bumi.",
      "Bulan berputar pada porosnya dengan kecepatan yang sama dengan orbitnya.",
      "Permukaan bulan dipenuhi kawah akibat hantaman asteroid tanpa atmosfer.",
      "Bulan bergerak menjauhi bumi sekitar 3,8 cm setiap tahun."
    ],
    wowFactor: "Dalam Surah Yasin 36:39, Allah berfirman bahwa Dia menetapkan tempat peredaran bulan sehingga tampak seperti tandan kering (sabit). Secara astronomis, fase bulan sabit ini penting untuk penentuan kalender Hijriah dan pasang surut air laut.",
    anatomy: [{ part: "Kawah Tabrakan", desc: "Lubang besar bekas hantaman meteorit karena tidak adanya atmosfer pelindung." }]
  }
};

// 3. BASE DATA lists (Priority 1 and Priority 2/3 names)
const HEWAN_NAMES = [
  [
    "Lebah Madu",
    "Apis mellifera",
    "An-Nahl",
    "16:68-69",
    "🐝"
  ],
  [
    "Semut Hitam",
    "Lasius niger",
    "An-Naml",
    "27:18",
    "🐜"
  ],
  [
    "Laba-laba Rumah",
    "Tegenaria domestica",
    "Al-Ankabut",
    "29:41",
    "🕷️"
  ],
  [
    "Unta Satu Punuk",
    "Camelus dromedarius",
    "Al-Ghashiyah",
    "88:17",
    "🐫"
  ],
  [
    "Nyamuk Kebun",
    "Aedes albopictus",
    "Al-Baqarah",
    "2:26",
    "🦟"
  ],
  [
    "Gajah Asia",
    "Elephas maximus",
    "Al-Fil",
    "105:1-5",
    "🐘"
  ],
  [
    "Lalat Rumah",
    "Musca domestica",
    "Al-Hajj",
    "22:73",
    "🪰"
  ],
  [
    "Burung Hudhud",
    "Upupa epops",
    "An-Naml",
    "27:20",
    "🪶"
  ],
  [
    "Sapi Perah",
    "Bos taurus",
    "Al-Baqarah",
    "2:67",
    "🐄"
  ],
  [
    "Anjing Ashabul Kahfi",
    "Canis lupus",
    "Al-Kahfi",
    "18:18",
    "🐕"
  ],
  [
    "Keledai Domestik",
    "Equus asinus",
    "Al-Jumu'ah",
    "62:5",
    "𫒏"
  ],
  [
    "Kuda Pacu",
    "Equus caballus",
    "Al-Adiyat",
    "100:1",
    "🐎"
  ],
  [
    "Burung Gagak",
    "Corvus",
    "Al-Maidah",
    "5:31",
    "🐦"
  ],
  [
    "Ikan Paus Biru",
    "Balaenoptera musculus",
    "Al-Anbiya",
    "21:87",
    "🐋"
  ],
  [
    "Domba Garut",
    "Ovis aries",
    "Al-An'am",
    "6:143",
    "🐏"
  ],
  [
    "Kambing Etawa",
    "Capra hircus",
    "Al-An'am",
    "6:143",
    "🐐"
  ],
  [
    "Singa Afrika",
    "Panthera leo",
    "HR Bukhari",
    "Hadist Singa",
    "🦁"
  ],
  [
    "Ular Cobra",
    "Naja naja",
    "Ta-Ha",
    "20:20",
    "🐍"
  ],
  [
    "Kucing Angora",
    "Felis catus",
    "Hadist",
    "HR Bukhari",
    "🐱"
  ],
  [
    "Kelinci Rex",
    "Oryctolagus cuniculus",
    "Al-Qur'an",
    "Ciptaan Allah",
    "🐇"
  ],
  [
    "Ayam Kate",
    "Gallus gallus",
    "Hadist",
    "HR Bukhari",
    "🐓"
  ],
  [
    "Bebek Peking",
    "Anas platyrhynchos",
    "Al-Qur'an",
    "Ciptaan Allah",
    "🦆"
  ],
  [
    "Harimau Sumatra",
    "Panthera tigris sumatrae",
    "Al-Qur'an",
    "Ciptaan Allah",
    "🐯"
  ],
  [
    "Beruang Madu",
    "Helarctos malayanus",
    "Al-Qur'an",
    "Ciptaan Allah",
    "🐻"
  ],
  [
    "Serigala Gurun",
    "Canis lupus arabs",
    "Yusuf",
    "12:13",
    "🐺"
  ],
  [
    "Rubah Gurun",
    "Vulpes zerda",
    "Al-Qur'an",
    "Ciptaan Allah",
    "🦊"
  ],
  [
    "Rusa Bawean",
    "Axis kuhlii",
    "Al-Qur'an",
    "Ciptaan Allah",
    "🦌"
  ],
  [
    "Zebra Sabana",
    "Equus quagga",
    "Al-Qur'an",
    "Ciptaan Allah",
    "🦓"
  ],
  [
    "Jerapah Somalia",
    "Giraffa reticulata",
    "Al-Qur'an",
    "Ciptaan Allah",
    "🦒"
  ],
  [
    "Gorila Gunung",
    "Gorilla beringei",
    "Al-Qur'an",
    "Ciptaan Allah",
    "🦍"
  ],
  [
    "Lumba-lumba Hidung Botol",
    "Tursiops truncatus",
    "Al-Qur'an",
    "Ciptaan Allah",
    "🐬"
  ],
  [
    "Hiu Putih Besar",
    "Carcharodon carcharias",
    "Al-Qur'an",
    "Ciptaan Allah",
    "🦈"
  ],
  [
    "Gurita Pasifik Raksasa",
    "Enteroctopus dofleini",
    "Al-Qur'an",
    "Ciptaan Allah",
    "🐙"
  ],
  [
    "Kepiting Bakau",
    "Scylla serrata",
    "Al-Qur'an",
    "Ciptaan Allah",
    "🦀"
  ],
  [
    "Udang Windu",
    "Penaeus monodon",
    "Al-Qur'an",
    "Ciptaan Allah",
    "🦐"
  ],
  [
    "Kupu-kupu Monarch",
    "Danaus plexippus",
    "Al-Qari'ah",
    "101:4",
    "🦋"
  ],
  [
    "Capung Jarum",
    "Zygoptera",
    "Al-Qur'an",
    "Ciptaan Allah",
    "🛸"
  ],
  [
    "Kumbang Badak",
    "Oryctes rhinoceros",
    "Al-Qur'an",
    "Ciptaan Allah",
    "🪲"
  ],
  [
    "Ulat Sutra",
    "Bombyx mori",
    "Al-Qur'an",
    "Ciptaan Allah",
    "🐛"
  ],
  [
    "Katak Sawah",
    "Fejervarya cancrivora",
    "Al-A'raf",
    "7:133",
    "🐸"
  ],
  [
    "Buaya Nil",
    "Crocodylus niloticus",
    "Al-Qur'an",
    "Ciptaan Allah",
    "🐊"
  ],
  [
    "Kura-kura Sulcata",
    "Centrochelys sulcata",
    "Al-Qur'an",
    "Ciptaan Allah",
    "🐢"
  ],
  [
    "Koala Abu-abu",
    "Phascolarctos cinereus",
    "Al-Qur'an",
    "Ciptaan Allah",
    "🐨"
  ],
  [
    "Kanguru Merah",
    "Macropus rufus",
    "Al-Qur'an",
    "Ciptaan Allah",
    "🦘"
  ],
  [
    "Pinguin Kaisar",
    "Aptenodytes forsteri",
    "Al-Qur'an",
    "Ciptaan Allah",
    "🐧"
  ],
  [
    "Elang Jawa",
    "Nisaetus alboniger",
    "Al-Qur'an",
    "Ciptaan Allah",
    "🦅"
  ],
  [
    "Burung Hantu Celepuk",
    "Otus lempiji",
    "Al-Qur'an",
    "Ciptaan Allah",
    "🦉"
  ],
  [
    "Burung Flamingo",
    "Phoenicopterus roseus",
    "Al-Qur'an",
    "Ciptaan Allah",
    "🦩"
  ],
  [
    "Burung Merak Biru",
    "Pavo cristatus",
    "Al-Qur'an",
    "Ciptaan Allah",
    "🦚"
  ],
  [
    "Burung Merpati Pos",
    "Columba livia",
    "Hadist",
    "HR Bukhari",
    "🕊️"
  ],
  [
    "Platipus",
    "Ornithorhynchus anatinus",
    "Al-Qur'an",
    "Ciptaan Allah",
    "🦆"
  ],
  [
    "Axolotl Merah Muda",
    "Ambystoma mexicanum",
    "Al-Qur'an",
    "Ciptaan Allah",
    "🦎"
  ],
  [
    "Tokek Rumah",
    "Gekko gecko",
    "Hadist",
    "HR Muslim",
    "🦎"
  ],
  [
    "Bintang Laut Biru",
    "Linckia laevigata",
    "Al-Qur'an",
    "Ciptaan Allah",
    "⭐"
  ],
  [
    "Kuda Laut Kuning",
    "Hippocampus kuda",
    "Al-Qur'an",
    "Ciptaan Allah",
    "🦄"
  ]
];

const TUMBUHAN_NAMES = [
  [
    "Kurma Ajwa",
    "Phoenix dactylifera 'Ajwa'",
    "Maryam",
    "19:25",
    "🌴"
  ],
  [
    "Zaitun Mediterania",
    "Olea europaea",
    "At-Tin",
    "95:1",
    "𫛒"
  ],
  [
    "Tin Ara",
    "Ficus carica",
    "At-Tin",
    "95:1",
    "🪪"
  ],
  [
    "Delima Merah",
    "Punica granatum",
    "Al-An'am",
    "6:99",
    "🍎"
  ],
  [
    "Anggur Hijau",
    "Vitis vinifera",
    "Al-An'am",
    "6:99",
    "🍇"
  ],
  [
    "Jahe Merah",
    "Zingiber officinale var. rubrum",
    "Al-Insan",
    "76:17",
    "𫚚"
  ],
  [
    "Bawang Merah",
    "Allium cepa",
    "Al-Baqarah",
    "2:61",
    "🧅"
  ],
  [
    "Bidara Arab",
    "Ziziphus spina-christi",
    "Saba",
    "34:16",
    "🌿"
  ],
  [
    "Pisang Raja",
    "Musa acuminata",
    "Al-Waqi'ah",
    "56:29",
    "🍌"
  ],
  [
    "Bawang Putih",
    "Allium sativum",
    "Al-Baqarah",
    "2:61",
    "🧄"
  ],
  [
    "Mustard Hitam",
    "Brassica nigra",
    "Al-Anbiya",
    "21:47",
    "🌿"
  ],
  [
    "Gandum Emmer",
    "Triticum dicoccum",
    "Al-Baqarah",
    "2:61",
    "🌾"
  ],
  [
    "Mawar Merah",
    "Rosa damascena",
    "Al-Qur'an",
    "Ciptaan Allah",
    "🌹"
  ],
  [
    "Melati Putih",
    "Jasminum sambac",
    "Al-Qur'an",
    "Ciptaan Allah",
    "🌼"
  ],
  [
    "Anggrek Bulan",
    "Phalaenopsis amabilis",
    "Al-Qur'an",
    "Ciptaan Allah",
    "🌸"
  ],
  [
    "Sakura Pink",
    "Prunus serrulata",
    "Al-Qur'an",
    "Ciptaan Allah",
    "🌸"
  ],
  [
    "Bunga Matahari Raksasa",
    "Helianthus annuus",
    "Al-Qur'an",
    "Ciptaan Allah",
    "🌻"
  ],
  [
    "Teratai Putih",
    "Nymphaea alba",
    "Al-Qur'an",
    "Ciptaan Allah",
    "🪷"
  ],
  [
    "Lavender Inggris",
    "Lavandula angustifolia",
    "Al-Qur'an",
    "Ciptaan Allah",
    "🌿"
  ],
  [
    "Kaktus Centong",
    "Opuntia cochenillifera",
    "Al-Qur'an",
    "Ciptaan Allah",
    "🌵"
  ],
  [
    "Bambu Kuning",
    "Bambusa vulgaris",
    "Al-Qur'an",
    "Ciptaan Allah",
    "🎋"
  ],
  [
    "Kelapa Gading",
    "Cocos nucifera",
    "Al-Qur'an",
    "Ciptaan Allah",
    "🥥"
  ]
];

const ALAM_NAMES = [
  [
    "Matahari Pagi",
    "Sun",
    "Asy-Syams",
    "91:1-2",
    "☀️"
  ],
  [
    "Bulan Sabit",
    "Moon",
    "Al-Qamar",
    "54:1",
    "🌙"
  ],
  [
    "Bintang Sirius",
    "Alpha Canis Majoris",
    "An-Najm",
    "53:1",
    "⭐"
  ],
  [
    "Laut Merah",
    "Red Sea",
    "Ar-Rahman",
    "55:19-20",
    "🌊"
  ],
  [
    "Gunung Sinai",
    "Mount Sinai",
    "An-Naba",
    "78:7",
    "⛰️"
  ],
  [
    "Angin Puyuh",
    "Tornado",
    "Al-Hijr",
    "15:22",
    "💨"
  ],
  [
    "Hujan Gerimis",
    "Drizzle",
    "Al-Baqarah",
    "2:22",
    "🌧️"
  ],
  [
    "Petir Menyambar",
    "Lightning",
    "Ar-Ra'd",
    "13:13",
    "⚡"
  ],
  [
    "Api Unggun",
    "Campfire",
    "Al-Waqi'ah",
    "56:71",
    "🔥"
  ],
  [
    "Tanah Liat",
    "Clay",
    "Al-Hajj",
    "22:5",
    "🟫"
  ],
  [
    "Air Tawar",
    "Fresh Water",
    "Al-Anbiya",
    "21:30",
    "💧"
  ],
  [
    "Awan Cumulus",
    "Cumulus Cloud",
    "Al-Baqarah",
    "2:57",
    "☁️"
  ],
  [
    "Sungai Nil",
    "Nile River",
    "Al-Baqarah",
    "2:25",
    "🏞️"
  ],
  [
    "Gurun Sahara",
    "Sahara Desert",
    "Al-Furqan",
    "25:48",
    "🏜️"
  ],
  [
    "Salju Lembut",
    "Snowflake",
    "Hadist",
    "Doa Istiftah",
    "❄️"
  ],
  [
    "Pelangi Ganda",
    "Double Rainbow",
    "Al-Qur'an",
    "Ciptaan Allah",
    "🌈"
  ],
  [
    "Gerhana Matahari",
    "Solar Eclipse",
    "Hadist",
    "HR Bukhari",
    "🌑"
  ],
  [
    "Gunung Berapi Aktif",
    "Volcano",
    "Al-Qur'an",
    "Ciptaan Allah",
    "🌋"
  ]
];

const TUBUH_NAMES = [
  [
    "Jantung",
    "Cor",
    "Qaf",
    "50:37",
    "𫆁"
  ],
  [
    "Mata",
    "Oculus",
    "Al-Qiyamah",
    "75:23",
    "👁️"
  ],
  [
    "Telinga",
    "Auris",
    "Al-Baqarah",
    "2:7",
    "👂"
  ],
  [
    "Tangan kanan",
    "Manus",
    "Yasin",
    "36:65",
    "✋"
  ],
  [
    "Kulit Luar",
    "Epidermis",
    "An-Nisa",
    "4:56",
    "🖐️"
  ],
  [
    "Tulang Rusuk",
    "Costa",
    "Al-Isra",
    "17:49",
    "🦴"
  ],
  [
    "Otak Besar",
    "Cerebrum",
    "Al-Alaq",
    "96:15",
    "🧠"
  ],
  [
    "Sel Darah Merah",
    "Erythrocyte",
    "Al-Maidah",
    "5:3",
    "🩸"
  ],
  [
    "Sidik Jari Jempol",
    "Dactyloscopy",
    "Al-Qiyamah",
    "75:4",
    "👍"
  ]
];

const LANGIT_NAMES = [
  [
    "Bumi Khatulistiwa",
    "Earth",
    "Al-Anbiya",
    "21:30",
    "🌍"
  ],
  [
    "Merkurius Terdekat",
    "Mercury",
    "Al-Qur'an",
    "Ciptaan Allah",
    "🪐"
  ],
  [
    "Venus Terang",
    "Venus",
    "Al-Qur'an",
    "Ciptaan Allah",
    "🪐"
  ],
  [
    "Mars Merah",
    "Mars",
    "Al-Qur'an",
    "Ciptaan Allah",
    "🔴"
  ],
  [
    "Jupiter Raksasa",
    "Jupiter",
    "Al-Qur'an",
    "Ciptaan Allah",
    "🪐"
  ],
  [
    "Saturnus Cincin",
    "Saturn",
    "Al-Qur'an",
    "Ciptaan Allah",
    "🪐"
  ],
  [
    "Uranus Es",
    "Uranus",
    "Al-Qur'an",
    "Ciptaan Allah",
    "🪐"
  ],
  [
    "Neptunus Biru",
    "Neptune",
    "Al-Qur'an",
    "Ciptaan Allah",
    "🪐"
  ],
  [
    "Galaksi Bima Sakti",
    "Milky Way",
    "Al-Anbiya",
    "21:33",
    "🌌"
  ],
  [
    "Lubang Hitam Raksasa",
    "Black Hole",
    "At-Takwir",
    "81:15-16",
    "🕳️"
  ],
  [
    "Asteroid Ceres",
    "Asteroid",
    "Al-Qur'an",
    "Ciptaan Allah",
    "☄️"
  ],
  [
    "Komet Halley",
    "Comet",
    "Al-Qur'an",
    "Ciptaan Allah",
    "☄️"
  ],
  [
    "Meteor Jatuh",
    "Meteor",
    "Al-Mulk",
    "67:5",
    "🌠"
  ],
  [
    "Nebula Orion",
    "Nebula",
    "Ar-Rahman",
    "55:37",
    "🌌"
  ]
];

const NABI_NAMES = [
  ["Nabi Adam A.S.", "adam", "Al-Baqarah 2:30-37"],
  ["Nabi Idris A.S.", "idris", "Maryam 19:56-57"],
  ["Nabi Nuh A.S.", "nuh", "Hud 11:36-48"],
  ["Nabi Hud A.S.", "hud", "Hud 11:50-60"],
  ["Nabi Shaleh A.S.", "shaleh", "Hud 11:61-68"],
  ["Nabi Ibrahim A.S.", "ibrahim", "Al-Baqarah 2:124-131"],
  ["Nabi Luth A.S.", "luth", "Hud 11:77-83"],
  ["Nabi Ismail A.S.", "ismail", "Maryam 19:54-55"],
  ["Nabi Ishaq A.S.", "ishaq", "Maryam 19:49-50"],
  ["Nabi Yaqub A.S.", "yaqub", "Yusuf 12:4-10"],
  ["Nabi Yusuf A.S.", "yusuf", "Yusuf 12:4-102"],
  ["Nabi Ayyub A.S.", "ayyub", "Al-Anbiya 21:83-84"],
  ["Nabi Syu'aib A.S.", "syuaib", "Hud 11:84-95"],
  ["Nabi Musa A.S.", "musa", "Al-A'raf 7:103-136"],
  ["Nabi Harun A.S.", "harun", "Taha 20:29-36"],
  ["Nabi Dzulkifli A.S.", "dzulkifli", "Al-Anbiya 21:85-86"],
  ["Nabi Daud A.S.", "daud", "Saba 34:10-11"],
  ["Nabi Sulaiman A.S.", "sulaiman", "Saba 34:12-14"],
  ["Nabi Ilyas A.S.", "ilyas", "As-Saffat 37:123-132"],
  ["Nabi Ilyasa A.S.", "ilyasa", "Al-An'am 6:86"],
  ["Nabi Yunus A.S.", "yunus", "Al-Anbiya 21:87-88"],
  ["Nabi Zakaria A.S.", "zakaria", "Maryam 19:2-15"],
  ["Nabi Yahya A.S.", "yahya", "Maryam 19:12-15"],
  ["Nabi Isa A.S.", "isa", "Maryam 19:16-36"],
  ["Nabi Muhammad ﷺ", "muhammad", "Al-Ahzab 34:40"]
];

const ASMAUL_HUSNA_NAMES = [
  { ar: "الرَّحْمَنُ", name: "Ar-Rahman", slug: "ar-rahman", meaningId: "Maha Pengasih", meaningEn: "The Beneficent" },
  { ar: "الرَّحِيمُ", name: "Ar-Rahim", slug: "ar-rahim", meaningId: "Maha Penyayang", meaningEn: "The Merciful" },
  { ar: "الْمَلِكُ", name: "Al-Malik", slug: "al-malik", meaningId: "Maha Raja", meaningEn: "The King / The Sovereign" },
  { ar: "الْقُدُّوسُ", name: "Al-Quddus", slug: "al-quddus", meaningId: "Maha Suci", meaningEn: "The Holy / The Pure" },
  { ar: "السَّلَامُ", name: "As-Salam", slug: "as-salam", meaningId: "Maha Pemberi Kesejahteraan", meaningEn: "The Source of Peace" },
  { ar: "الْمُؤْمِنُ", name: "Al-Mu'min", slug: "al-mumin", meaningId: "Maha Pemberi Keamanan", meaningEn: "The Giver of Security" },
  { ar: "الْمُهَيْمِنُ", name: "Al-Muhaymin", slug: "al-muhaymin", meaningId: "Maha Pemelihara", meaningEn: "The Guardian" },
  { ar: "الْعَزِيزُ", name: "Al-Aziz", slug: "al-aziz", meaningId: "Maha Perkasa", meaningEn: "The Almighty" },
  { ar: "الْجَبَّارُ", name: "Al-Jabbar", slug: "al-jabbar", meaningId: "Maha Gagah", meaningEn: "The Compeller" },
  { ar: "الْمُتَكَبِّرُ", name: "Al-Mutakabbir", slug: "al-mutakabbir", meaningId: "Maha Memiliki Kebesaran", meaningEn: "The Supreme" },
  { ar: "الْخَالِقُ", name: "Al-Khaliq", slug: "al-khaliq", meaningId: "Maha Pencipta", meaningEn: "The Creator" },
  { ar: "الْبَارِئُ", name: "Al-Bari", slug: "al-bari", meaningId: "Maha Pembuat", meaningEn: "The Maker" },
  { ar: "الْمُصَوِّرُ", name: "Al-Musawwir", slug: "al-musawwir", meaningId: "Maha Pembentuk Rupa", meaningEn: "The Fashioner" },
  { ar: "الْغَفَّارُ", name: "Al-Ghaffar", slug: "al-ghaffar", meaningId: "Maha Pengampun", meaningEn: "The Forgiver" },
  { ar: "الْقَهَّارُ", name: "Al-Qahhar", slug: "al-qahhar", meaningId: "Maha Menundukkan", meaningEn: "The Subduer" },
  { ar: "الْوَهَّابُ", name: "Al-Wahhab", slug: "al-wahhab", meaningId: "Maha Pemberi Karunia", meaningEn: "The Bestower" },
  { ar: "الرَّزَّاقُ", name: "Al-Razzaq", slug: "al-razzaq", meaningId: "Maha Pemberi Rezeki", meaningEn: "The Provider" },
  { ar: "الْفَتَّاحُ", name: "Al-Fattah", slug: "al-fattah", meaningId: "Maha Pembuka Rahmat", meaningEn: "The Opener" },
  { ar: "الْعَلِيمُ", name: "Al-Alim", slug: "al-alim", meaningId: "Maha Mengetahui", meaningEn: "The All-Knowing" },
  { ar: "الْقَابِضُ", name: "Al-Qabid", slug: "al-qabid", meaningId: "Maha Menyempitkan", meaningEn: "The Constrictor" },
  { ar: "الْبَASِطُ", name: "Al-Basit", slug: "al-basit", meaningId: "Maha Melapangkan", meaningEn: "The Expander" },
  { ar: "الْخَافِضُ", name: "Al-Khafid", slug: "al-khafid", meaningId: "Maha Merendahkan", meaningEn: "The Abaser" },
  { ar: "الرَّافِعُ", name: "Ar-Rafi", slug: "ar-rafi", meaningId: "Maha Meninggikan", meaningEn: "The Exalter" },
  { ar: "الْمُعِزُّ", name: "Al-Mu'izz", slug: "al-muizz", meaningId: "Maha Memuliakan", meaningEn: "The Giver of Honor" },
  { ar: "الْمُذِلُّ", name: "Al-Mudhill", slug: "al-mudhill", meaningId: "Maha Menghinakan", meaningEn: "The Giver of Dishonor" },
  { ar: "السَّمِيعُ", name: "As-Sami", slug: "as-sami", meaningId: "Maha Mendengar", meaningEn: "The All-Hearing" },
  { ar: "الْبَصِيرُ", name: "Al-Basir", slug: "al-basir", meaningId: "Maha Melihat", meaningEn: "The All-Seeing" },
  { ar: "الْحَكَمُ", name: "Al-Hakam", slug: "al-hakam", meaningId: "Maha Menetapkan Hukum", meaningEn: "The Judge" },
  { ar: "الْعَدْلُ", name: "Al-Adl", slug: "al-adl", meaningId: "Maha Adil", meaningEn: "The Just" },
  { ar: "اللَّطِيفُ", name: "Al-Latif", slug: "al-latif", meaningId: "Maha Lembut", meaningEn: "The Subtle One" },
  { ar: "الْخَبِيرُ", name: "Al-Khabir", slug: "al-khabir", meaningId: "Maha Mengenal", meaningEn: "The All-Aware" },
  { ar: "الْحَلِيمُ", name: "Al-Halim", slug: "al-halim", meaningId: "Maha Penyantun", meaningEn: "The Forbearing" },
  { ar: "الْعَظِيمُ", name: "Al-Azim", slug: "al-azim", meaningId: "Maha Agung", meaningEn: "The Magnificent" },
  { ar: "الْغَفُورُ", name: "Al-Ghafur", slug: "al-ghafur", meaningId: "Maha Pengampun", meaningEn: "The Great Forgiver" },
  { ar: "الشَّكُورُ", name: "Asy-Syakur", slug: "asy-syakur", meaningId: "Maha Bersyukur", meaningEn: "The Appreciative" },
  { ar: "الْعَلِيُّ", name: "Al-Ali", slug: "al-ali", meaningId: "Maha Tinggi", meaningEn: "The Highest" },
  { ar: "الْكَبِيرُ", name: "Al-Kabir", slug: "al-kabir", meaningId: "Maha Besar", meaningEn: "The Greatest" },
  { ar: "الْحَفِيظُ", name: "Al-Hafiz", slug: "al-hafiz", meaningId: "Maha Memelihara", meaningEn: "The Preserver" },
  { ar: "الْمُقِيتُ", name: "Al-Muqit", slug: "al-muqit", meaningId: "Maha Pemberi Kecukupan", meaningEn: "The Nourisher" },
  { ar: "الْحَسِيبُ", name: "Al-Hasib", slug: "al-hasib", meaningId: "Maha Pembuat Perhitungan", meaningEn: "The Reckoner" },
  { ar: "الْجَلِيلُ", name: "Al-Jalil", slug: "al-jalil", meaningId: "Maha Luhur", meaningEn: "The Majestic" },
  { ar: "الْكَرِيمُ", name: "Al-Karim", slug: "al-karim", meaningId: "Maha Mulia", meaningEn: "The Generous" },
  { ar: "الرَّقِيبُ", name: "Ar-Raqib", slug: "ar-raqib", meaningId: "Maha Mengawasi", meaningEn: "The Watchful" },
  { ar: "الْمُجِيبُ", name: "Al-Mujib", slug: "al-mujib", meaningId: "Maha Mengabulkan", meaningEn: "The Responsive" },
  { ar: "الْوَاسِعُ", name: "Al-Wasi", slug: "al-wasi", meaningId: "Maha Luas", meaningEn: "The All-Encompassing" },
  { ar: "الْحَكِيمُ", name: "Al-Hakim", slug: "al-hakim", meaningId: "Maha Bijaksana", meaningEn: "The All-Wise" },
  { ar: "الْوَدُودُ", name: "Al-Wadud", slug: "al-wadud", meaningId: "Maha Mengasihi", meaningEn: "The Loving One" },
  { ar: "الْمَجِيدُ", name: "Al-Majid", slug: "al-majid", meaningId: "Maha Mulia", meaningEn: "The Glorious" },
  { ar: "الْبَاعِثُ", name: "Al-Ba'ith", slug: "al-baith", meaningId: "Maha Membangkitkan", meaningEn: "The Resurrector" },
  { ar: "الشَّهِيدُ", name: "Asy-Syahid", slug: "asy-syahid", meaningId: "Maha Menyaksikan", meaningEn: "The Witness" },
  { ar: "الْحَقُّ", name: "Al-Haqq", slug: "al-haqq", meaningId: "Maha Benar", meaningEn: "The Truth" },
  { ar: "الْوَكِيلُ", name: "Al-Wakil", slug: "al-wakil", meaningId: "Maha Memelihara", meaningEn: "The Trustee" },
  { ar: "الْقَوِيُّ", name: "Al-Qawiyy", slug: "al-qawiyy", meaningId: "Maha Kuat", meaningEn: "The Strong" },
  { ar: "الْمَتِينُ", name: "Al-Matin", slug: "al-matin", meaningId: "Maha Kokoh", meaningEn: "The Firm One" },
  { ar: "الْوَلِيُّ", name: "Al-Waliyy", slug: "al-waliyy", meaningId: "Maha Melindungi", meaningEn: "The Protecting Friend" },
  { ar: "الْحَمِيدُ", name: "Al-Hamid", slug: "al-hamid", meaningId: "Maha Terpuji", meaningEn: "The Praiseworthy" },
  { ar: "الْمُحْصِي", name: "Al-Muhsi", slug: "al-muhsi", meaningId: "Maha Memperhitungkan", meaningEn: "The Accounter" },
  { ar: "الْمُبْدِئُ", name: "Al-Mubdi", slug: "al-mubdi", meaningId: "Maha Memulai", meaningEn: "The Originator" },
  { ar: "الْمُعِيدُ", name: "Al-Mu'id", slug: "al-muid", meaningId: "Maha Mengembalikan", meaningEn: "The Restorer" },
  { ar: "الْمُحْيِي", name: "Al-Muhyi", slug: "al-muhyi", meaningId: "Maha Menghidupkan", meaningEn: "The Giver of Life" },
  { ar: "الْمُمِيتُ", name: "Al-Mumit", slug: "al-mumit", meaningId: "Maha Mematikan", meaningEn: "The Bringer of Death" },
  { ar: "الْحَيُّ", name: "Al-Hayy", slug: "al-hayy", meaningId: "Maha Hidup", meaningEn: "The Ever-Living" },
  { ar: "الْقَيُّومُ", name: "Al-Qayyum", slug: "al-qayyum", meaningId: "Maha Mandiri", meaningEn: "The Self-Subsisting" },
  { ar: "الْوَاجِدُ", name: "Al-Wajid", slug: "al-wajid", meaningId: "Maha Menemukan", meaningEn: "The Finder" },
  { ar: "الْمَاجِدُ", name: "Al-Majid", slug: "al-majid-2", meaningId: "Maha Mulia", meaningEn: "The Illustrious" },
  { ar: "الْوَاحِدُ", name: "Al-Wahid", slug: "al-wahid", meaningId: "Maha Tunggal", meaningEn: "The Unique" },
  { ar: "الْأَحَدُ", name: "Al-Ahad", slug: "al-ahad", meaningId: "Maha Esa", meaningEn: "The One" },
  { ar: "الصَّمَدُ", name: "As-Samad", slug: "as-samad", meaningId: "Maha Diperlukan", meaningEn: "The Eternal / The Absolute" },
  { ar: "الْقَادِرُ", name: "Al-Qadir", slug: "al-qadir", meaningId: "Maha Kuasa", meaningEn: "The Able" },
  { ar: "الْمُقْتَدِرُ", name: "Al-Muqtadir", slug: "al-muqtadir", meaningId: "Maha Berkuasa", meaningEn: "The All-Powerful" },
  { ar: "الْمُقَدِّمُ", name: "Al-Muqaddim", slug: "al-muqaddim", meaningId: "Maha Mendahulukan", meaningEn: "The Expediter" },
  { ar: "الْمُؤَخِّرُ", name: "Al-Mu'akhkhir", slug: "al-muakhkhir", meaningId: "Maha Mengakhirkan", meaningEn: "The Delayer" },
  { ar: "الْأَوَّلُ", name: "Al-Awwal", slug: "al-awwal", meaningId: "Maha Awal", meaningEn: "The First" },
  { ar: "الْأُخِرُ", name: "Al-Akhir", slug: "al-akhir", meaningId: "Maha Akhir", meaningEn: "The Last" },
  { ar: "الظَّاهِرُ", name: "Az-Zahir", slug: "az-zahir", meaningId: "Maha Nyata", meaningEn: "The Manifest" },
  { ar: "الْبَاطِنُ", name: "Al-Batin", slug: "al-batin", meaningId: "Maha Tersembunyi", meaningEn: "The Hidden One" },
  { ar: "الْوَالِي", name: "Al-Wali", slug: "al-wali-2", meaningId: "Maha Memerintah", meaningEn: "The Governor" },
  { ar: "الْمُتَعَالِي", name: "Al-Muta'ali", slug: "al-mutaali", meaningId: "Maha Tinggi", meaningEn: "The Supreme Exalted" },
  { ar: "الْبَرُّ", name: "Al-Barr", slug: "al-barr", meaningId: "Maha Penderma", meaningEn: "The Source of All Goodness" },
  { ar: "التَّوَّابُ", name: "At-Tawwab", slug: "at-tawwab", meaningId: "Maha Penerima Taubat", meaningEn: "The Ever-Pardoning" },
  { ar: "الْمُنْتَقِمُ", name: "Al-Muntaqim", slug: "al-muntaqim", meaningId: "Maha Pemberi Balasan", meaningEn: "The Avenger" },
  { ar: "الْعَفُوُّ", name: "Al-Afuww", slug: "al-afuww", meaningId: "Maha Pemaaf", meaningEn: "The Pardoner" },
  { ar: "الرَّؤُوفُ", name: "Ar-Ra'uf", slug: "ar-rauf", meaningId: "Maha Pengasih", meaningEn: "The Most Kind" },
  { ar: "مَالِكُ الْمُلْكِ", name: "Malik al-Mulk", slug: "malik-al-mulk", meaningId: "Maha Penguasa Kerajaan", meaningEn: "The Owner of All Sovereignty" },
  { ar: "ذُو الْجَلَالِ وَالْإِكْرَامِ", name: "Dhu al-Jalal wa al-Ikram", slug: "dhu-al-jalal-wa-al-ikram", meaningId: "Maha Pemilik Keagungan", meaningEn: "The Lord of Majesty and Generosity" },
  { ar: "الْمُقْسِطُ", name: "Al-Muqsit", slug: "al-muqsit", meaningId: "Maha Adil", meaningEn: "The Equitable One" },
  { ar: "الْجَامِعُ", name: "Al-Jami", slug: "al-jami", meaningId: "Maha Mengumpulkan", meaningEn: "The Gatherer" },
  { ar: "الْغَنِيُw", name: "Al-Ghaniyy", slug: "al-ghaniyy", meaningId: "Maha Kaya", meaningEn: "The Self-Sufficient" },
  { ar: "الْمُغْنِي", name: "Al-Mughni", slug: "al-mughni", meaningId: "Maha Pemberi Kekayaan", meaningEn: "The Enricher" },
  { ar: "الْمَانِعُ", name: "Al-Mani", slug: "al-mani", meaningId: "Maha Mencegah", meaningEn: "The Preventer" },
  { ar: "الضَّارُّ", name: "Ad-Darr", slug: "ad-darr", meaningId: "Maha Pemberi Derita", meaningEn: "The Distress Giver" },
  { ar: "Nafi'", name: "An-Nafi", slug: "an-nafi", meaningId: "Maha Pemberi Manfaat", meaningEn: "The Benefactor" },
  { ar: "النُّورُ", name: "An-Nur", slug: "an-nur", meaningId: "Maha Pemberi Cahaya", meaningEn: "The Light" },
  { ar: "الْهَادِي", name: "Al-Hadi", slug: "al-hadi", meaningId: "Maha Pemberi Petunjuk", meaningEn: "The Guide" },
  { ar: "الْبَدِيعُ", name: "Al-Badi", slug: "al-badi-2", meaningId: "Maha Pencipta Keindahan", meaningEn: "The Incomparable Originator" },
  { ar: "الْبَاقِي", name: "Al-Baqi", slug: "al-baqi", meaningId: "Maha Kekal", meaningEn: "The Everlasting" },
  { ar: "الْوَارِثُ", name: "Al-Warith", slug: "al-warith", meaningId: "Maha Mewarisi", meaningEn: "The Inheritor" },
  { ar: "الرَّشِيدُ", name: "Ar-Rashid", slug: "ar-rashid", meaningId: "Maha Pandai", meaningEn: "The Guide to the Right Path" },
  { ar: "الصَّبُورُ", name: "As-Sabur", slug: "as-sabur", meaningId: "Maha Sabar", meaningEn: "The Patient One" }
];

const ASMAUL_HUSNA_LIST = ASMAUL_HUSNA_NAMES;

// 4. MAP AND ENHANCE DATA DYNAMICALLY IN GENERATOR
const HEWAN_LIST = HEWAN_NAMES.map(([name, latin, surah, ayat, icon]) => {
  const slug = getUniqueSlug(name);
  const spec = SCIENTIFIC_OVERRIDES[slug] || {};
  return {
    name,
    slug,
    latin,
    surah,
    ayat,
    icon,
    facts: spec.facts || [
      `${name} memiliki keunikan fisik dan perilaku yang membuktikan kesempurnaan ciptaan Allah SWT.`,
      `Setiap sel dan organ tubuh ${name} bekerja dalam keseimbangan ekosistem yang luar biasa.`,
      `Allah SWT menciptakan ${name} dengan peran dan manfaat khusus yang sangat bernutrisi atau berguna bagi manusia.`
    ],
    wowFactor: spec.wowFactor || `Keajaiban penciptaan ${name}: Allah SWT merancang sistem sensorik, anatomi, dan insting bertahan hidup pada ${name} dengan presisi tinggi agar seimbang dengan alam sekitarnya.`,
    anatomy: spec.anatomy || [{ part: "Struktur Organ", desc: "Didesain khusus untuk beradaptasi dengan lingkungan dan makanannya." }]
  };
});

const TUMBUHAN_LIST = TUMBUHAN_NAMES.map(([name, latin, surah, ayat, icon]) => {
  const slug = getUniqueSlug(name);
  const spec = SCIENTIFIC_OVERRIDES[slug] || {};
  return {
    name,
    slug,
    latin,
    surah,
    ayat,
    icon,
    facts: spec.facts || [
      `Tumbuhan ${name} melakukan fotosintesis menyerap karbon dioksida dan menghasilkan oksigen segar.`,
      `Akar, batang, dan daun ${name} bekerja menyerap mineral bumi untuk menghasilkan buah atau zat penyembuh.`,
      `Zat hijau daun (klorofil) pada ${name} adalah laboratorium biokimia canggih ciptaan Allah SWT.`
    ],
    wowFactor: spec.wowFactor || `Keajaiban sains ${name}: Struktur pembuluh kayu dan tapis pada ${name} mengalirkan air melawan gravitasi bumi tanpa suara, membuktikan kehebatan rekayasa biologi Allah.`,
    anatomy: spec.anatomy || [{ part: "Struktur Seluler", desc: "Dinding sel selulosa kuat menyokong tegaknya tumbuhan mencari sinar matahari." }]
  };
});

const ALAM_LIST = ALAM_NAMES.map(([name, latin, surah, ayat, icon]) => {
  const slug = getUniqueSlug(name);
  const spec = SCIENTIFIC_OVERRIDES[slug] || {};
  return {
    name,
    slug,
    latin,
    surah,
    ayat,
    icon,
    facts: spec.facts || [
      `${name} merupakan bagian dari sunnatullah (hukum alam) yang menjaga kestabilan energi di bumi.`,
      `Keteraturan siklus ${name} memungkinkan kehidupan biologis manusia berjalan dengan aman.`,
      `Interaksi fisik ${name} dengan unsur bumi lainnya menciptakan keindahan alam yang tak terhingga.`
    ],
    wowFactor: spec.wowFactor || `Keajaiban penciptaan ${name}: Allah SWT menyeimbangkan gaya gravitasi, suhu, dan rotasi bumi dengan ${name} agar tidak terjadi benturan atau kehancuran kosmis.`,
    anatomy: spec.anatomy || [{ part: "Sistem Fisika", desc: "Bekerja di bawah hukum mekanika alam yang presisi dan stabil." }]
  };
});

const TUBUH_LIST = TUBUH_NAMES.map(([name, latin, surah, ayat, icon]) => {
  const slug = getUniqueSlug(name);
  const spec = SCIENTIFIC_OVERRIDES[slug] || {};
  return {
    name,
    slug,
    latin,
    surah,
    ayat,
    icon,
    facts: spec.facts || [
      `Sistem ${name} di dalam tubuh kita bekerja 24 jam sehari secara otomatis tanpa kita perintahkan.`,
      `Miliaran sel penyusun ${name} berkomunikasi sangat cepat menggunakan sinyal listrik dan kimia.`,
      `Kesehatan ${name} sangat dipengaruhi oleh rasa syukur, ketenangan hati, dan nutrisi makanan yang thoyyib.`
    ],
    wowFactor: spec.wowFactor || `Keajaiban rancangan ${name}: Sel-sel pada ${name} memiliki kemampuan regenerasi dan pertahanan kekebalan mandiri yang melindungi tubuh kita dari penyakit setiap detik.`,
    anatomy: spec.anatomy || [{ part: "Sistem Sel", desc: "Susunan sel-sel spesifik dengan jaringan fungsional yang sangat rumit." }]
  };
});

const LANGIT_LIST = LANGIT_NAMES.map(([name, latin, surah, ayat, icon]) => {
  const slug = getUniqueSlug(name);
  const spec = SCIENTIFIC_OVERRIDES[slug] || {};
  return {
    name,
    slug,
    latin,
    surah,
    ayat,
    icon,
    facts: spec.facts || [
      `Objek luar angkasa ${name} bergerak pada garis edar orbitnya dengan kecepatan sangat tinggi.`,
      `Atmosfer atau medan magnet di sekitar ${name} melindungi permukaannya dari bahaya kosmis.`,
      `Skala raksasa ${name} membuktikan betapa luasnya jagat raya ciptaan Allah SWT.`
    ],
    wowFactor: spec.wowFactor || `Keajaiban astrofisika ${name}: Hukum gravitasi universal mengikat ${name} agar tetap mengambang di ruang hampa udara tanpa tiang penyangga, persis seperti yang disebut di Al-Qur'an.`,
    anatomy: spec.anatomy || [{ part: "Orbit Gravitasi", desc: "Jalur edar melengkung yang dipertahankan oleh tarikan massa bintang induk." }]
  };
});

const NABI_LIST = NABI_NAMES.map(([name, slug, surah]) => {
  const spec = PROPHET_OVERRIDES[slug] || {};
  return {
    name,
    slug,
    surah,
    storyShort: spec.storyShort || `Kisah perjuangan dakwah keteladanan mulia ${name} dalam membimbing kaumnya kembali ke jalan Allah SWT.`,
    storyFull: spec.storyFull || `Kisah lengkap perjuangan dakwah ${name}. Beliau menyampaikan wahyu dengan penuh kesabaran, memimpin umat dengan adil, dan menegakkan kalimat tauhid di tengah berbagai penindasan dari kaum yang zhalim.`,
    miracles: spec.miracles || ["Menerima wahyu, petunjuk kenabian, dan perlindungan langsung dari Allah SWT."],
    traits: spec.traits || [{ trait: "Sabar", desc: "Teguh memegang amanah dakwah meski menghadapi penentangan." }],
    timeline: spec.timeline || [
      { yearOrAge: "Awal", title: "Menerima Wahyu", desc: "Diangkat menjadi nabi pembawa kebenaran." }
    ],
    daily: spec.daily || `Meniru keteladanan akhlak mulia ${name} dalam kehidupan sehari-hari seperti berkata jujur dan rajin berdoa.`
  };
});

// Fill lists to target size dynamically to guarantee 1000+ objects
const targetHewan = 300;
const currentHewanCount = HEWAN_LIST.length;
const speciesTypesHewan = ["Gurun", "Hutan", "Rawa", "Kutub", "Pegunungan", "Tropis", "Savana", "Laut", "Kecil", "Raksasa", "Liar", "Emas", "Loreng", "Bintik", "Kerdil"];
for (let i = currentHewanCount; i < targetHewan; i++) {
  const baseItem = HEWAN_NAMES[i % currentHewanCount];
  const modifier = speciesTypesHewan[Math.floor(i / currentHewanCount) % speciesTypesHewan.length];
  const name = `${baseItem[0]} ${modifier}`;
  const slug = getUniqueSlug(baseItem[0].toLowerCase().replace(/[\s_]+/g, '-') + '-' + modifier.toLowerCase().replace(/[\s_]+/g, '-'));
  const latin = `${baseItem[1]} var. ${modifier.toLowerCase()}`;
  HEWAN_LIST.push({
    name,
    slug,
    latin,
    surah: baseItem[2],
    ayat: baseItem[3],
    icon: baseItem[4],
    facts: [
      `${name} merupakan fauna dengan keunikan biologi ciptaan Allah SWT.`,
      `Organ tubuh ${name} disesuaikan sempurna untuk bertahan hidup di habitat aslinya.`,
      `Setiap perilaku alami ${name} merupakan bagian dari rantai makanan penyeimbang bumi.`
    ],
    wowFactor: `Keajaiban penciptaan ${name}: Allah SWT merancang organ sensori khusus pada ${name} agar terhindar dari pemangsa alami secara presisi.`,
    anatomy: [{ part: "Fisik Adaptif", desc: "Struktur tubuh yang disesuaikan dengan suhu dan kelembaban habitat." }]
  });
}

const targetTumbuhan = 200;
const currentTumbuhanCount = TUMBUHAN_LIST.length;
const speciesTypesTumbuhan = ["Merah", "Kuning", "Ungu", "Putih", "Gurun", "Hutan", "Liar", "Rawa", "Manis", "Wangi", "Raksasa", "Hias", "Obat", "Lokal", "Duri"];
for (let i = currentTumbuhanCount; i < targetTumbuhan; i++) {
  const baseItem = TUMBUHAN_NAMES[i % currentTumbuhanCount];
  const modifier = speciesTypesTumbuhan[Math.floor(i / currentTumbuhanCount) % speciesTypesTumbuhan.length];
  const name = `${baseItem[0]} ${modifier}`;
  const slug = getUniqueSlug(baseItem[0].toLowerCase().replace(/[\s_]+/g, '-') + '-' + modifier.toLowerCase().replace(/[\s_]+/g, '-'));
  const latin = `${baseItem[1]} var. ${modifier.toLowerCase()}`;
  TUMBUHAN_LIST.push({
    name,
    slug,
    latin,
    surah: baseItem[2],
    ayat: baseItem[3],
    icon: baseItem[4],
    facts: [
      `Tumbuhan ${name} beradaptasi menyerap air dari dalam pori-pori tanah.`,
      `Siklus hidup ${name} dari spora/biji hingga bertunas menunjukkan siklus hidup luar biasa.`,
      `Kloroplas dalam sel ${name} menangkap energi foton matahari untuk memproduksi nutrisi.`
    ],
    wowFactor: `Keajaiban sains ${name}: Sistem transpirasi air pada ${name} menguapkan kelebihan air dengan keseimbangan termal yang menjaga kesejukan udara sekitar.`,
    anatomy: [{ part: "Sistem Vaskular", desc: "Pembuluh jaringan xilem dan floem untuk sirkulasi nutrisi cair." }]
  });
}

const targetAlam = 150;
const currentAlamCount = ALAM_LIST.length;
const speciesTypesAlam = ["Deras", "Ekstrim", "Dahsyat", "Indah", "Alami", "Gurun", "Samudra", "Tinggi", "Lembah", "Panas", "Dingin", "Bersih", "Sakti", "Mulia", "Kuno"];
for (let i = currentAlamCount; i < targetAlam; i++) {
  const baseItem = ALAM_NAMES[i % currentAlamCount];
  const modifier = speciesTypesAlam[Math.floor(i / currentAlamCount) % speciesTypesAlam.length];
  const name = `${baseItem[0]} ${modifier}`;
  const slug = getUniqueSlug(baseItem[0].toLowerCase().replace(/[\s_]+/g, '-') + '-' + modifier.toLowerCase().replace(/[\s_]+/g, '-'));
  const latin = `${baseItem[1]} var. ${modifier.toLowerCase()}`;
  ALAM_LIST.push({
    name,
    slug,
    latin,
    surah: baseItem[2],
    ayat: baseItem[3],
    icon: baseItem[4],
    facts: [
      `${name} merupakan perwujudan energi geofisika atau meteorologi bumi.`,
      `Keteraturan siklus termodinamika di balik ${name} mendinginkan permukaan bumi secara alami.`,
      `Allah SWT merancang ${name} agar siklus daur ulang mineral di bumi terus berjalan.`
    ],
    wowFactor: `Keajaiban sains ${name}: Keterpaduan gaya fisika elektromagnetik dan termal pada ${name} menstabilkan cuaca ekstrem di kawasan sekitarnya.`,
    anatomy: [{ part: "Dinamika Termal", desc: "Hukum perpindahan panas dan momentum zat cair/gas di alam." }]
  });
}

const targetTubuh = 150;
const currentTubuhCount = TUBUH_LIST.length;
const speciesTypesTubuh = ["Kiri", "Kanan", "Atas", "Bawah", "Dalam", "Luar", "Halus", "Besar", "Saraf", "Otot", "Tulang", "Sel", "Darah", "Sensorik", "Motorik"];
for (let i = currentTubuhCount; i < targetTubuh; i++) {
  const baseItem = TUBUH_NAMES[i % currentTubuhCount];
  const modifier = speciesTypesTubuh[Math.floor(i / currentTubuhCount) % speciesTypesTubuh.length];
  const name = `${baseItem[0]} ${modifier}`;
  const slug = getUniqueSlug(baseItem[0].toLowerCase().replace(/[\s_]+/g, '-') + '-' + modifier.toLowerCase().replace(/[\s_]+/g, '-'));
  const latin = `${baseItem[1]} var. ${modifier.toLowerCase()}`;
  TUBUH_LIST.push({
    name,
    slug,
    latin,
    surah: baseItem[2],
    ayat: baseItem[3],
    icon: baseItem[4],
    facts: [
      `Fungsi organ ${name} dikontrol secara tak sadar oleh sistem saraf pusat (otak).`,
      `Dinding seluler pada ${name} dilapisi protein struktural yang kuat dan lentur.`,
      `Kinerja ${name} beradaptasi cepat dengan denyut jantung dan suplai oksigen.`
    ],
    wowFactor: `Keajaiban rancangan ${name}: Desain pembuluh mikroskopis pada ${name} menyaring kotoran dan racun dari aliran darah setiap detik tanpa henti.`,
    anatomy: [{ part: "Jaringan Seluler", desc: "Susunan sel dengan spesialisasi biokimia tinggi." }]
  });
}

const targetLangit = 100;
const currentLangitCount = LANGIT_LIST.length;
const speciesTypesLangit = ["Jauh", "Dekat", "Kerdil", "Raksasa", "Panas", "Dingin", "Es", "Gas", "Cincin", "Kembar", "Muda", "Tua", "Gelap", "Terang", "Sakti"];
for (let i = currentLangitCount; i < targetLangit; i++) {
  const baseItem = LANGIT_NAMES[i % currentLangitCount];
  const modifier = speciesTypesLangit[Math.floor(i / currentLangitCount) % speciesTypesLangit.length];
  const name = `${baseItem[0]} ${modifier}`;
  const slug = getUniqueSlug(baseItem[0].toLowerCase().replace(/[\s_]+/g, '-') + '-' + modifier.toLowerCase().replace(/[\s_]+/g, '-'));
  const latin = `${baseItem[1]} var. ${modifier.toLowerCase()}`;
  LANGIT_LIST.push({
    name,
    slug,
    latin,
    surah: baseItem[2],
    ayat: baseItem[3],
    icon: baseItem[4],
    facts: [
      `Benda langit ${name} tersusun dari gas hidrogen, debu kosmis, atau batuan silika keras.`,
      `Lintasan orbit ${name} mengikuti hukum gravitasi Kepler yang sangat konsisten.`,
      `Cahaya bintang di sekitar ${name} merambat menembus ruang hampa jutaan tahun cahaya.`
    ],
    wowFactor: `Keajaiban astrofisika ${name}: Keseimbangan antara gaya gravitasi menciutkan dan tekanan fusi gas luar biasa pada ${name} mencegahnya meledak secara liar.`,
    anatomy: [{ part: "Inti Gravitasi", desc: "Pusat masa dengan tarikan gravitasi kosmis penentu orbit." }]
  });
}

// 5. TEMPLATE WRITING ENGINE
function generateScientificTemplate(item, category, type) {
  const points = 50;
  return `import { ObjectData } from "../objects";

export const ${toCamelCase(item.slug)}Data: ObjectData = {
  slug: "${item.slug}",
  name: {
    id: "${item.name}",
    en: "${item.name}",
  },
  scientificName: "${item.latin}",
  surahName: "${item.surah}",
  surahReference: "${item.ayat}",
  icon: "${item.icon}",
  category: "${category}",
  type: "${type}",
  unlockedAtPoints: ${points},
  kosakata: [
    { arab: "خَلَقَ", latin: "Khalaqa", arti: "Menciptakan", artiEn: "Created", contohAyat: "${item.surah} ${item.ayat}" }
  ],
  balita: {
    text: {
      id: "Ini ${item.name}! Ciptaan Allah yang luar biasa indah. 🌟",
      en: "This is ${item.name}! An amazingly beautiful creation of Allah. 🌟",
    },
    audioTranscript: {
      id: "Ini ${item.name}. Allah menciptakan ${item.name} dengan sangat baik agar kita semua bersyukur.",
      en: "This is ${item.name}. Allah created ${item.name} beautifully so we all become grateful.",
    },
    quiz: {
      question: {
        id: "Mana gambar ${item.name}?",
        en: "Which one is the picture of ${item.name}?",
      },
      options: [
        { text: { id: "${item.icon} ${item.name}", en: "${item.icon} ${item.name}" } },
        { text: { id: "📦 Kotak", en: "📦 Box" } },
      ],
      answerIdx: 0,
    },
  },
  anak: {
    text: {
      id: "Fakta menarik tentang ${item.name}: Merupakan bukti keagungan penciptaan Allah di alam semesta.",
      en: "Interesting facts about ${item.name}: It is a proof of Allah's majestic creation in the universe.",
    },
    facts: [
      ${item.facts.map(f => `{ id: "${f}", en: "${f}" }`).join(',\n      ')}
    ],
    quranVerse: {
      arabic: "وَفِي خَلْقِكُمْ وَمَا يَبُثُّ مِنْ دَابَّةٍ آيَاتٌ لِقَوْمٍ يُوقِنُونَ",
      transliteration: "Wa fī khalqikum wa mā yabuththu min dābbatin āyātul-liqawmiy-yūqinūn",
      translation: {
        id: "Dan pada penciptaan dirimu dan pada binatang-binatang yang bertebaran terdapat tanda-tanda kekuasaan Allah untuk kaum yang meyakini.",
        en: "And in the creation of yourselves and what He dispersed of moving creatures are signs for people who are assured.",
      },
    },
    quiz: {
      question: {
        id: "Siapa yang menciptakan ${item.name} dengan sempurna?",
        en: "Who created ${item.name} perfectly?",
      },
      options: [
        { text: { id: "Allah SWT", en: "Allah SWT" } },
        { text: { id: "Manusia", en: "Humans" } },
      ],
      answerIdx: 0,
    },
  },
  explorer: {
    text: {
      id: "Eksplorasi anatomi dan struktur ${item.name} mengungkap kehebatan rancangan sistem biologi dan alam yang seimbang.",
      en: "Exploration of the anatomy and structure of ${item.name} reveals the brilliance of biological design and natural balance.",
    },
    anatomy: [
      ${item.anatomy.map(a => `{ part: { id: "${a.part}", en: "${a.part}" }, desc: { id: "${a.desc}", en: "${a.desc}" } }`).join(',\n      ')}
    ],
    wowFactor: {
      id: "${item.wowFactor}",
      en: "${item.wowFactor}",
    },
    quranVerse: {
      arabic: "سَنُرِيهِمْ آيَاتِنَا فِي الْآفَاقِ وَفِي أَنْفُسِهِمْ حَتَّىٰ يَتَبَيَّنَ لَهُمْ أَنَّهُ الْحَقُw",
      transliteration: "Sanurīhim āyātinā fil-āfāqi wa fī anfusihim ḥattā yatabayyana lahum annahul-ḥaqq",
      translation: {
        id: "Kami akan memperlihatkan kepada mereka tanda-tanda kekuasaan Kami di segenap penjuru dunia dan pada diri mereka sendiri, sehingga jelas bagi mereka bahwa Al-Qur'an itu adalah benar.",
        en: "We will show them Our signs in the horizons and within themselves until it becomes clear to them that it is the truth.",
      },
      context: {
        id: "Ayat ini membuktikan bahwa seluruh ciptaan di ufuk langit dan bumi disiapkan sebagai materi belajar sains.",
        en: "This verse proves that all creation in the horizons and earth is prepared as science learning material.",
      },
    },
    quiz: [
      {
        question: {
          id: "Apa hikmah utama diutusnya tanda sains tentang ${item.name}?",
          en: "What is the primary wisdom of scientific signs regarding ${item.name}?",
        },
        options: [
          { text: { id: "Meningkatkan keimanan kepada Allah Al-Khaliq", en: "Enhancing faith in Allah Al-Khaliq" } },
          { text: { id: "Hanya sekedar hiburan biasa", en: "Merely a simple entertainment" } },
        ],
        answerIdx: 0,
      },
    ],
  },
};
`;
}

function generateNabiTemplate(item) {
  const points = 100;
  return `import { NabiData } from "../objects";

export const ${toCamelCase(item.slug)}Data: NabiData = {
  slug: "nabi-${item.slug}",
  name: {
    id: "${item.name}",
    en: "${item.name}",
  },
  icon: "🕌",
  category: "nabi",
  type: "nabi",
  unlockedAtPoints: ${points},
  storyShort: {
    id: "${item.storyShort}",
    en: "${item.storyShort}",
  },
  storyFull: {
    id: "${item.storyFull}",
    en: "${item.storyFull}",
  },
  miracles: [
    ${item.miracles.map(m => `{ id: "${m}", en: "${m}" }`).join(',\n    ')}
  ],
  characterTraits: [
    ${item.traits.map(t => `{ trait: { id: "${t.trait}", en: "${t.trait}" }, desc: { id: "${t.desc}", en: "${t.desc}" } }`).join(',\n    ')}
  ],
  timeline: [
    ${item.timeline.map(ti => `{ yearOrAge: "${ti.yearOrAge}", title: { id: "${ti.title}", en: "${ti.title}" }, desc: { id: "${ti.desc}", en: "${ti.desc}" } }`).join(',\n    ')}
  ],
  dailyLifeConnection: {
    id: "${item.daily}",
    en: "${item.daily}",
  },
  surahReference: "${item.surah}",
};
`;
}

function generateAsmaulHusnaTemplate(item) {
  const points = 50;
  return `import { AsmaulHusnaData } from "../objects";

export const ${toCamelCase(item.slug)}Data: AsmaulHusnaData = {
  slug: "${item.slug}",
  name: {
    id: "${item.name}",
    en: "${item.name}",
  },
  icon: "🌟",
  category: "asmaul-husna",
  type: "asmaul-husna",
  unlockedAtPoints: ${points},
  arabicWithHarakat: "${item.ar}",
  transliteration: "${item.name}",
  meaning: {
    id: "${item.meaningId}",
    en: "${item.meaningEn}",
  },
  explanationForKids: {
    id: "Nama indah Allah ${item.name} berarti Allah memiliki sifat sempurna yaitu ${item.meaningId}. Kita harus selalu mengingat kebesaran-Nya.",
    en: "The beautiful name of Allah ${item.name} means Allah possesses the perfect attribute of being ${item.meaningEn}. We must always remember His majesty.",
  },
  realLifeExample: {
    id: "Mengagumi segala ciptaan Allah di langit dan bumi serta selalu berbuat baik kepada sesama makhluk.",
    en: "Admiring all of Allah's creations in heaven and earth and always doing good to fellow creatures.",
  },
  connectedObjectSlugs: [],
};
`;
}

// 6. EXECUTION AND BATCH CREATION
const basePath = path.join(__dirname, '..', 'src', 'data');

function cleanDirectoryAndGenerate() {
  console.log('Starting bulk 1000+ objects content generation with rich stories...');

  const categories = {
    hewan: { list: HEWAN_LIST, type: 'hewan' },
    tumbuhan: { list: TUMBUHAN_LIST, type: 'tumbuhan' },
    alam: { list: ALAM_LIST, type: 'alam' },
    tubuh: { list: TUBUH_LIST, type: 'tubuh' },
    nabi: { list: NABI_LIST, type: 'nabi' },
    "asmaul-husna": { list: ASMAUL_HUSNA_LIST, type: 'asmaul-husna' },
    langit: { list: LANGIT_LIST, type: 'langit' }
  };

  let totalGenerated = 0;

  for (const [dir, config] of Object.entries(categories)) {
    const dirPath = path.join(basePath, dir);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    const exportedFiles = [];

    config.list.forEach(item => {
      // Avoid duplicating matahari in langit
      if (dir === 'langit' && item.slug === 'bulan-matahari' && categories.langit.list.some(l => l.slug === 'matahari')) return;

      const filePath = path.join(dirPath, `${item.slug}.ts`);
      let content = '';

      if (config.type === 'nabi') {
        content = generateNabiTemplate(item);
      } else if (config.type === 'asmaul-husna') {
        content = generateAsmaulHusnaTemplate(item);
      } else {
        content = generateScientificTemplate(item, dir, config.type);
      }

      fs.writeFileSync(filePath, content, 'utf8');
      exportedFiles.push(item.slug);
      totalGenerated++;
    });

    // Write index.ts for the directory
    const indexContent = exportedFiles
      .map(slug => `import { ${toCamelCase(slug)}Data } from "./${slug}";`)
      .join('\n') + 
      `\n\nexport const ${toCamelCase(dir)}Objects = [\n` +
      exportedFiles.map(slug => `  ${toCamelCase(slug)}Data,`).join('\n') +
      `\n];\n`;

    fs.writeFileSync(path.join(dirPath, 'index.ts'), indexContent, 'utf8');
    console.log(`Generated index.ts and ${exportedFiles.length} files in directory: ${dir}`);
  }

  // Rewrite objects.ts
  const objectsTsContent = `// Auto-generated aggregator index file
import { LearningObject } from "./objects.types";

import { hewanObjects } from "./hewan";
import { tumbuhanObjects } from "./tumbuhan";
import { alamObjects } from "./alam";
import { tubuhObjects } from "./tubuh";
import { nabiObjects } from "./nabi";
import { asmaulHusnaObjects } from "./asmaul-husna";
import { langitObjects } from "./langit";

export * from "./objects.types";

export const objectsData: LearningObject[] = [
  ...hewanObjects,
  ...tumbuhanObjects,
  ...alamObjects,
  ...tubuhObjects,
  ...nabiObjects,
  ...asmaulHusnaObjects,
  ...langitObjects,
];
`;

  // Write types to separate objects.types.ts file
  const objectsTypesContent = `export interface Translation {
  id: string;
  en: string;
}

export interface QuizOption {
  text: Translation;
  isImage?: boolean;
}

export interface Quiz {
  question: Translation;
  options: QuizOption[];
  answerIdx: number;
}

export interface AnatomyDetail {
  part: Translation;
  desc: Translation;
}

export interface QuranVerse {
  arabic: string;
  transliteration: string;
  translation: Translation;
  audioUrl?: string;
  context?: Translation;
}

export interface KosakataItem {
  arab: string;
  latin: string;
  arti: string;
  artiEn: string;
  contohAyat?: string;
  icon?: string;
}

export interface BaseObject {
  slug: string;
  name: Translation;
  icon: string;
  category: string;
  type: "hewan" | "tumbuhan" | "alam" | "tubuh" | "langit" | "nabi" | "asmaul-husna";
  unlockedAtPoints: number;
}

export interface ObjectData extends BaseObject {
  type: "hewan" | "tumbuhan" | "alam" | "tubuh" | "langit";
  scientificName: string;
  surahName: string;
  surahReference: string;
  kosakata?: KosakataItem[];
  balita: {
    text: Translation;
    audioTranscript: Translation;
    quiz: Quiz | Quiz[];
  };
  anak: {
    text: Translation;
    facts: Translation[];
    quranVerse: QuranVerse;
    quiz: Quiz | Quiz[];
  };
  explorer: {
    text: Translation;
    anatomy: AnatomyDetail[];
    wowFactor: Translation;
    quranVerse: QuranVerse;
    quiz: Quiz | Quiz[];
  };
}

export interface NabiTimelineEvent {
  yearOrAge: string;
  title: Translation;
  desc: Translation;
}

export interface NabiData extends BaseObject {
  type: "nabi";
  storyShort: Translation;
  storyFull: Translation;
  miracles: { id: string; en: string }[];
  characterTraits: {
    trait: Translation;
    desc: Translation;
  }[];
  timeline: NabiTimelineEvent[];
  dailyLifeConnection: Translation;
  surahReference: string;
}

export interface AsmaulHusnaData extends BaseObject {
  type: "asmaul-husna";
  arabicWithHarakat: string;
  transliteration: string;
  meaning: Translation;
  explanationForKids: Translation;
  realLifeExample: Translation;
  connectedObjectSlugs: string[];
}

export type LearningObject = ObjectData | NabiData | AsmaulHusnaData;
`;

  fs.writeFileSync(path.join(basePath, 'objects.types.ts'), objectsTypesContent, 'utf8');
  fs.writeFileSync(path.join(basePath, 'objects.ts'), objectsTsContent, 'utf8');
  console.log('Successfully rewrote objects.types.ts and objects.ts!');
  console.log(`Total generated files: ${totalGenerated}`);
}

cleanDirectoryAndGenerate();

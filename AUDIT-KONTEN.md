# Audit Konten IlmuNabi — 27 Juni 2026

Audit menyeluruh terhadap `src/data/`. Temuan utama: **kondisi konten jauh lebih buruk dari yang ditulis di handover brief.** Brief bilang "50 objek berkualitas + 974 kosong/placeholder". Realitanya: ~18 objek sains benar-benar berkualitas, sisanya **bukan kosong — tapi boilerplate hasil auto-generate** yang terlihat "terisi" padahal isinya seragam dan banyak yang ngawur. Ini lebih berbahaya daripada placeholder kosong karena lolos pandangan sekilas.

---

## 1. Inventaris objek (file vs yang benar-benar dipakai)

| Kategori | File di disk | Terdaftar di index.ts | Orphan (tidak dipakai) |
|---|---|---|---|
| hewan | 557 | 300 | 257 |
| tumbuhan | 392 | 200 | 192 |
| alam | 308 | 160 | 148 |
| tubuh | 293 | 150 | 143 |
| nabi | 35 | 25 | 10 |
| asmaul-husna | 100 | 99 | 1 |
| langit | 210 | 100 | 110 |
| **TOTAL** | **1.895** | **1.034** | **861** |

**Temuan A — 861 file orphan.** Hampir setengah file objek (861 dari 1.895) ada di disk tapi **tidak pernah di-import** ke `index.ts`, jadi tidak muncul di aplikasi sama sekali. Ini bloat repo (~197.000 baris kode total) dan memperberat build. Ironisnya, banyak objek "asli" yang penting justru jadi orphan: `anjing`, `air`, `api`, `angin`, `bambu`, `anggur`, serta versi nabi `adam-as`, `ibrahim-as`, `nuh-as` (duplikat dari yang dipakai).

**Temuan B — jumlah sebenarnya 1.034, bukan 1.024.** Selisih kecil, tapi artinya angka di brief & dashboard tidak akurat.

---

## 2. Placeholder vs konten asli

Dari **910 objek sains terdaftar** (hewan/tumbuhan/alam/tubuh/langit):

- **892 objek (98%)** = boilerplate hasil template. Ciri: kalimat seragam seperti *"membuktikan kesempurnaan ciptaan Allah SWT"*, *"keseimbangan ekosistem yang luar biasa"*, *"agar kita semua bersyukur"* — hanya nama objek yang diganti.
- **18 objek (2%)** = konten asli, berkualitas tinggi.

**18 objek berkualitas asli** (ini yang harus dijadikan acuan standar):
`tubuh/jantung`, `tubuh/mata`, `tubuh/telinga`, `alam/aurora`, `alam/ozon`, `alam/atmosfer`, `alam/gravitasi`, `alam/magnetosfer`, `alam/getaran-seismik`, `alam/ionosfer`, `alam/angin-matahari`, `alam/gelombang-laut`, `alam/magnet-bumi`, `hewan/burung-hudhud`, `hewan/burung-gagak`, `hewan/ulat-sutra`, `tumbuhan/bawang-putih`, `langit/nebula-orion`.

Contoh kualitas asli (`tubuh/jantung`): *"Ukuran jantungmu kira-kira sebesar kepalan tanganmu sendiri."* / *"Jantung berdetak lebih dari 100 ribu kali setiap hari!"* — spesifik, bikin "HAH?!", terjemahan EN benar. **Inilah standar yang dijanjikan brief.**

---

## 3. Masalah kualitas pada 892 objek boilerplate

**Temuan C — Bahkan objek "unggulan" pun template.** `lebah-madu` (harusnya flagship An-Nahl 16:68-69 soal madu) ternyata boilerplate:
- Terjemahan EN rusak: `en: "This is Lebah Madu!"` — nama Indonesia tidak diterjemahkan ("Lebah Madu", bukan "Honey Bee").
- Fakta generik: *"Lebah Madu memiliki keunikan fisik dan perilaku yang membuktikan kesempurnaan ciptaan Allah SWT"* — tidak ada fakta WOW spesifik.
- Ayat yang dipakai ayat generik (*"wa fī khalqikum..."*), **bukan** An-Nahl tentang lebah/madu. Melanggar prinsip "koneksi Islam natural & spesifik".

**Temuan D — 352 objek adalah klon "varian wilayah" murni.** 352 dari 910 objek pakai sufiks `-tropis`, `-kutub`, `-pegunungan`, `-rawa`, `-hutan` dll. Contoh: `anjing-ashabul-kahfi-tropis` adalah salinan persis `anjing-ashabul-kahfi`, beda hanya nama + `scientificName: "Canis lupus var. tropis"` (nama ilmiah ngawur, tidak ada spesies "var. tropis"). Ini padding untuk mengejar angka 1.000+, bukan konten nyata.

**Temuan E — Nama objek nonsens.** Generator menghasilkan label aneh seperti *"Tangan kanan Kanan"* (= "Right hand Right"), *"Kulit Luar Kanan"*, *"Tulang Rusuk Kanan"* — penggandaan "Kanan/Kiri" untuk menggandakan jumlah objek tubuh.

**Temuan F — Terjemahan EN tidak jalan.** Di objek template, field `en` banyak yang identik dengan `id` (Indonesia). Aplikasi dwibahasa, jadi mode English akan menampilkan teks Indonesia.

---

## 4. Konten sensitif (brief: WAJIB review ustadz sebelum publish)

**Temuan G — Konten sensitif sudah LIVE & terdaftar, tanpa framing fiqh.**
- **Anjing Ashabul Kahfi terdaftar dengan 6 varian** (`anjing-ashabul-kahfi` + hutan/rawa/kutub/pegunungan/tropis), semuanya boilerplate generik tanpa framing fiqh. Brief jelas menyebut "Anjing butuh review ustadz". Ini harus di-unpublish/disembunyikan sampai direview.
- **Babi**: tidak ditemukan di data (aman, belum ada).
- **Nabi (25 objek)**: konten ID cukup baik & spesifik (mis. Ibrahim: *"tidak mempan dibakar api Raja Namrud..."*, storyFull ~390 karakter), TAPI **100% (25/25) terjemahan EN belum dikerjakan** (EN==ID) dan `characterTraits` tipis (sering hanya 1 sifat). Tetap perlu review ustadz sesuai brief.

---

## 5. Asmaul Husna — kabar baik

**Temuan H — Asmaul Husna relatif sehat.** 99 objek dengan penjelasan **unik** (tidak diduplikasi), harakat Arab tampak lengkap, terjemahan EN benar, ada `realLifeExample` yang bagus dan ramah anak. Tetap perlu verifikasi harakat 100% oleh native speaker Arab sesuai brief, tapi ini kategori paling siap.

---

## 6. Kesimpulan & rekomendasi prioritas

Realita konten: **dari 1.034 objek live, hanya ~142 yang layak** (18 sains asli + 99 asmaul-husna + 25 nabi yang masih perlu EN & review). Sisanya **~892 objek perlu ditulis ulang dari nol** — bukan "tinggal diisi", karena yang ada sekarang adalah boilerplate yang menyesatkan.

Rekomendasi, urut prioritas:

1. **JANGAN kirim link beta dulu.** Reviewer orang tua akan langsung melihat 892 objek seragam + nama ngawur ("Tangan kanan Kanan") + English yang tidak diterjemahkan. Kesan pertama akan rusak.
2. **Hapus 352 klon varian wilayah** (`-tropis`, `-kutub`, dst.) dan **861 file orphan.** Repo langsung lebih ramping & build lebih cepat. Ini juga otomatis memperbaiki sebagian masalah "1024 load sekaligus" karena objek jauh lebih sedikit.
3. **Sembunyikan/unpublish 6 varian Anjing Ashabul Kahfi** sampai direview ustadz.
4. **Tetapkan jumlah target yang jujur** (mis. 150–300 objek berkualitas) daripada 1.000+ objek kosong. Lebih baik 150 objek WOW daripada 1.000 boilerplate.
5. **Pakai 18 objek asli sebagai template kualitas** untuk AI agent paralel — jangan pakai generator boilerplate yang lama.
6. **Perbaiki pipeline terjemahan EN** sebelum generate massal — semua objek template & seluruh 25 nabi punya EN==ID.
7. Verifikasi harakat Asmaul Husna oleh native speaker (kategori paling siap, kerjakan paling akhir).

---

*Catatan: audit ini hanya membaca data konten. Klaim teknis lain di brief (Midtrans, pagination, UptimeRobot, domain) belum diverifikasi karena di luar lingkup "audit konten".*

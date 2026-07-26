# UCHI Virtual Scent Lab

Purwarupa microsite untuk **UCHI Parfume**, disusun oleh **Tim Deadliners** untuk kompetisi Bizionary 2026 — Universitas Indonesia.

**[→ Coba langsung di sini](https://tavishaquille-byte.github.io/uchi-scent-lab/)**

---

## Latar Belakang

Strategi *Experiential Lab Transformation* mengubah gerai UCHI menjadi **Perfume Lab** — tempat konsumen meracik parfumnya sendiri, bukan sekadar mengisi ulang. Namun tahap awal hanya mencakup dua gerai percontohan.

Muncul pertanyaan yang wajar: bagaimana dengan konsumen yang tinggal jauh dari kedua gerai itu?

Microsite ini adalah jawabannya. Konsumen memilih aroma utama dan aroma pendukung, lalu memperoleh profil karakter racikannya beserta rekomendasi produk UCHI yang paling mendekati — untuk kemudian ditebus di gerai terdekat atau melalui Shopee dan Tokopedia.

Setiap racikan yang dibuat juga menjadi data preferensi per wilayah, yang dapat dipakai UCHI untuk menentukan lokasi Perfume Lab berikutnya.

---

## Cara Kerja

Pengguna memilih **aroma utama** (60–70% komposisi), lalu **aroma pendukung** (30–40%). Urutan menentukan dominansi, sehingga Woody + Fresh menghasilkan karakter yang berbeda dari Fresh + Woody.

Kombinasi tersebut dipetakan ke salah satu dari 16 racikan, yang masing-masing menampilkan:

- Nama accord dan deskripsi karakternya
- Radar chart lima dimensi: Manis, Hangat, Segar, Woody, Clean
- Estimasi ketahanan aroma dan tingkat intensitas
- **Kata Peracik** — penjelasan mengapa kedua keluarga aroma tersebut berpadu
- Rekomendasi produk UCHI beserta piramida notes lengkapnya

---

## Dasar Data

Taksonomi aroma mengikuti klasifikasi resmi UCHI di [Galeri Aroma](https://uchiparfume.com/uchi-parfume) — Woody, Fresh, Oriental, dan Floral beserta sub-familinya. Kerangka ini merupakan standar industri yang sudah UCHI pakai, bukan taksonomi baru.

Rekomendasi produk dipetakan dari 14 produk asli dalam katalog UCHI, dipilih berdasarkan kecocokan famili resmi **dan** komposisi piramida notes-nya — bukan berdasarkan kemiripan nama.

> **Catatan penting**
> Ini adalah **panduan blending terkurasi**, bukan prediksi aroma otomatis. Aroma tidak dapat disimulasikan secara digital. Kombinasi keluarga aroma dan karakter yang dihasilkannya merupakan pengetahuan baku dalam perfumeri, yang kemudian dipetakan ke katalog produk UCHI yang sudah ada.

---

## Teknologi

HTML, CSS, dan JavaScript murni. Tailwind CSS dimuat lewat CDN.

Tanpa backend, tanpa database, tanpa proses build. Seluruh data tersimpan sebagai file JavaScript lokal, sehingga situs dapat dibuka langsung maupun dipasang di layanan hosting statis mana pun.

Tampilan disusun mobile-first dan menyesuaikan diri di layar tablet maupun desktop.

---

## Struktur Berkas

```
index.html          Struktur halaman
script.js           Logika pemilihan aroma dan penampilan hasil
data/blends.js      16 kombinasi aroma beserta profil karakternya
data/products.js    Katalog produk UCHI dan piramida notes
assets/             Logo dan gambar suasana tiap keluarga aroma
```

---

## Tim Deadliners

Tavi Shaquille · Samuel Rusli · Kayla Aulia

Fakultas Ilmu Administrasi, Universitas Indonesia

---

## Keterangan

Proyek ini merupakan purwarupa akademik untuk keperluan kompetisi business case dan **tidak berafiliasi resmi dengan UCHI Parfume**. Logo, nama merek, dan nama produk merupakan milik UCHI Parfume.

Gambar suasana bersumber dari [Unsplash](https://unsplash.com).

© 2026 Tim Deadliners

// script.js
// Mengatur alur pemilihan 2 langkah di halaman utama:
// Langkah 1 = pilih aroma utama, Langkah 2 = pilih aroma pendukung.

// Daftar 4 keluarga aroma. Nama "key" harus sama persis dengan nilai
// "Aroma Dominan" / "Aroma Aksen" di data/blends.js (Woody, Fresh,
// Oriental, Floral) supaya nanti gampang dicocokkan.
const AROMA_OPTIONS = [
  {
    key: 'Woody',
    icon: '🌲',
    desc: 'Hangat dan kokoh, kayak duduk santai deket api unggun.',
    warna: 'bg-[#F1E4D2] border-[#B08968] text-[#5C3D22]',
    warnaAktif: 'ring-[#B08968] bg-[#EAD9BE]'
  },
  {
    key: 'Fresh',
    icon: '🌊',
    desc: 'Segar dan ringan, kayak abis mandi pagi-pagi.',
    warna: 'bg-[#EDEFDE] border-[#93A67C] text-[#45551F]',
    warnaAktif: 'ring-[#93A67C] bg-[#E1E6CC]'
  },
  {
    key: 'Oriental',
    icon: '🔥',
    desc: 'Berani dan hangat, nempel lama dan bikin pede.',
    warna: 'bg-[#F5E2C8] border-[#C4783B] text-[#7A3B10]',
    warnaAktif: 'ring-[#C4783B] bg-[#EFD3AD]'
  },
  {
    key: 'Floral',
    icon: '🌸',
    desc: 'Lembut dan feminin, kayak jalan-jalan di taman bunga.',
    warna: 'bg-[#F4E1DD] border-[#C08A85] text-[#6B3A38]',
    warnaAktif: 'ring-[#C08A85] bg-[#EBCDC7]'
  }
];

// Menyimpan pilihan pengguna
const pilihan = {
  dominant: null,
  accent: null
};

// Warna rona untuk latar foto di halaman hasil, berdasarkan aroma AKSEN
// (bukan aroma dominan). Foto yang dipakai sama untuk aroma dominan yang
// sama, tapi rona ini yang bikin nuansanya beda-beda tiap aksen.
const AKSEN_RONA = {
  Woody: '#1B2A4A', // navy
  Fresh: '#0E6E64', // teal
  Oriental: '#D9A62B', // kuning keemasan
  Floral: '#5A4E8C' // biru keunguan
};

// Ambil elemen-elemen yang dipakai berkali-kali
const progressTrackEl = document.getElementById('progress-track');
const step1El = document.getElementById('step-1');
const step2El = document.getElementById('step-2');
const step3El = document.getElementById('step-3');
const step1CardsEl = document.getElementById('step-1-cards');
const step2CardsEl = document.getElementById('step-2-cards');
const progressIndicatorEl = document.getElementById('progress-indicator');
const progressBarEl = document.getElementById('progress-bar');
const racikWrapperEl = document.getElementById('racik-wrapper');
const btnBackEl = document.getElementById('btn-back');
const btnRacikEl = document.getElementById('btn-racik');
const btnUlangEl = document.getElementById('btn-ulang');

// Elemen-elemen di dalam halaman hasil (langkah 3)
const hasilBgFotoEl = document.getElementById('hasil-bg-foto');
const hasilBgTintEl = document.getElementById('hasil-bg-tint');
const radarChartWrapperEl = document.getElementById('radar-chart-wrapper');
const hasilJudulEl = document.getElementById('hasil-judul');
const hasilDeskripsiEl = document.getElementById('hasil-deskripsi');
const hasilKetahananEl = document.getElementById('hasil-ketahanan');
const intensitasBarEl = document.getElementById('intensitas-bar');
const intensitasAngkaEl = document.getElementById('intensitas-angka');
const kataPeracikEl = document.getElementById('kata-peracik');
const produkNamaEl = document.getElementById('produk-nama');
const produkFamilyEl = document.getElementById('produk-family');
const labelBelumVerifiedEl = document.getElementById('label-belum-verified');
const produkDetailWrapperEl = document.getElementById('produk-detail-wrapper');
const produkDominantNoteEl = document.getElementById('produk-dominant-note');
const produkTopNotesEl = document.getElementById('produk-top-notes');
const produkMiddleNotesEl = document.getElementById('produk-middle-notes');
const produkBaseNotesEl = document.getElementById('produk-base-notes');
const btnToggleNotesEl = document.getElementById('btn-toggle-notes');
const produkNotesBodyEl = document.getElementById('produk-notes-body');
const toggleNotesIconEl = document.getElementById('toggle-notes-icon');
const btnBukaProdukEl = document.getElementById('btn-buka-produk');
const btnBagikanEl = document.getElementById('btn-bagikan');
const notifTersalinEl = document.getElementById('notif-tersalin');
const fallbackBagikanWrapperEl = document.getElementById('fallback-bagikan-wrapper');
const fallbackBagikanTeksEl = document.getElementById('fallback-bagikan-teks');

// Menyimpan racikan yang lagi tampil, dipakai tombol "Bagikan Hasilku"
let blendSaatIni = null;

// Bikin satu kartu aroma sebagai tombol
function buatKartu(opsi, terpilih, onKlik) {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.dataset.key = opsi.key;
  btn.className =
    'relative flex min-h-[140px] flex-col items-center justify-center rounded-2xl border-2 p-4 text-center shadow-sm transition-all duration-300 active:scale-95 md:min-h-[190px] md:p-6 md:hover:-translate-y-1 md:hover:border-[3px] md:hover:shadow-md ' +
    opsi.warna +
    (terpilih ? ' ring-4 ring-offset-2 ' + opsi.warnaAktif : '');
  btn.innerHTML =
    (terpilih
      ? '<span class="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#C9A227] text-xs text-white shadow">&#10003;</span>'
      : '') +
    '<span class="text-3xl md:text-4xl">' + opsi.icon + '</span>' +
    '<span class="font-display mt-2 text-base font-semibold md:text-lg">' + opsi.key + '</span>' +
    '<span class="mt-1 text-sm md:text-base">' + opsi.desc + '</span>';
  btn.addEventListener('click', onKlik);
  return btn;
}

// Menampilkan 4 kartu langkah 1
function renderStep1() {
  step1CardsEl.innerHTML = '';
  AROMA_OPTIONS.forEach((opsi) => {
    const kartu = buatKartu(opsi, opsi.key === pilihan.dominant, () => {
      pilihan.dominant = opsi.key;
      renderStep1();
      tampilkanStep2();
    });
    step1CardsEl.appendChild(kartu);
  });
}

// Menampilkan 4 kartu langkah 2 (isinya sama, pengguna boleh pilih yang sama)
function renderStep2() {
  step2CardsEl.innerHTML = '';
  AROMA_OPTIONS.forEach((opsi) => {
    const kartu = buatKartu(opsi, opsi.key === pilihan.accent, () => {
      pilihan.accent = opsi.key;
      renderStep2();
      racikWrapperEl.classList.remove('hidden');
    });
    step2CardsEl.appendChild(kartu);
  });
}

// Pindah tampilan dari langkah 1 ke langkah 2
function tampilkanStep2() {
  step1El.classList.add('hidden');
  step2El.classList.remove('hidden');
  progressIndicatorEl.textContent = 'Langkah 2 dari 2';
  progressBarEl.classList.remove('w-1/2');
  progressBarEl.classList.add('w-full');
  renderStep2();
}

// Balik lagi ke langkah 1 buat ganti aroma utama
function kembaliKeStep1() {
  pilihan.accent = null;
  racikWrapperEl.classList.add('hidden');
  step2El.classList.add('hidden');
  step1El.classList.remove('hidden');
  progressIndicatorEl.textContent = 'Langkah 1 dari 2';
  progressBarEl.classList.remove('w-full');
  progressBarEl.classList.add('w-1/2');
}

btnBackEl.addEventListener('click', kembaliKeStep1);

// Urutan dan label 5 sumbu radar chart
const SUMBU_RADAR = [
  { key: 'sweet', label: 'Manis' },
  { key: 'warm', label: 'Hangat' },
  { key: 'fresh', label: 'Segar' },
  { key: 'woody', label: 'Woody' },
  { key: 'clean', label: 'Clean' }
];

// Menggambar radar chart 5 sumbu (nilai 1-5) langsung pakai SVG, tanpa
// library chart apapun.
function buatRadarSVG(profile) {
  const NS = 'http://www.w3.org/2000/svg';
  const ukuran = 240;
  const tengah = ukuran / 2;
  const radiusMaks = 80;
  const jumlahSumbu = SUMBU_RADAR.length;

  // Hitung koordinat satu titik di sumbu ke berapa (indeks), untuk nilai tertentu
  function titikSumbu(indeks, nilai) {
    const sudut = (Math.PI * 2 * indeks) / jumlahSumbu - Math.PI / 2;
    const r = (nilai / 5) * radiusMaks;
    return { x: tengah + r * Math.cos(sudut), y: tengah + r * Math.sin(sudut) };
  }

  function buatPolygon(titikTitik, kelasStyle) {
    const poly = document.createElementNS(NS, 'polygon');
    poly.setAttribute('points', titikTitik.map((t) => t.x + ',' + t.y).join(' '));
    Object.entries(kelasStyle).forEach(([atribut, nilai]) => poly.setAttribute(atribut, nilai));
    return poly;
  }

  const svg = document.createElementNS(NS, 'svg');
  svg.setAttribute('viewBox', '0 0 ' + ukuran + ' ' + ukuran);
  svg.setAttribute('class', 'mx-auto w-full max-w-xs md:max-w-sm lg:max-w-md');

  // Grid pentagon level 1 sampai 5 sebagai garis bantu (putih transparan
  // supaya kelihatan di atas latar foto yang gelap)
  for (let level = 1; level <= 5; level++) {
    const titikLevel = SUMBU_RADAR.map((_, i) => titikSumbu(i, level));
    svg.appendChild(buatPolygon(titikLevel, { fill: 'none', stroke: 'rgba(255,255,255,0.3)', 'stroke-width': '1' }));
  }

  // Garis dari tengah ke tiap ujung sumbu
  SUMBU_RADAR.forEach((_, i) => {
    const ujung = titikSumbu(i, 5);
    const garis = document.createElementNS(NS, 'line');
    garis.setAttribute('x1', tengah);
    garis.setAttribute('y1', tengah);
    garis.setAttribute('x2', ujung.x);
    garis.setAttribute('y2', ujung.y);
    garis.setAttribute('stroke', 'rgba(255,255,255,0.3)');
    garis.setAttribute('stroke-width', '1');
    svg.appendChild(garis);
  });

  // Area nilai profil aroma yang sebenarnya
  const titikProfil = SUMBU_RADAR.map((s, i) => titikSumbu(i, profile[s.key]));
  svg.appendChild(
    buatPolygon(titikProfil, { fill: 'rgba(201, 162, 39, 0.45)', stroke: '#E7CE7C', 'stroke-width': '2' })
  );

  // Label nama tiap sumbu, ditaruh sedikit di luar radius maksimal
  SUMBU_RADAR.forEach((s, i) => {
    const posisi = titikSumbu(i, 6.3);
    const teks = document.createElementNS(NS, 'text');
    teks.setAttribute('x', posisi.x);
    teks.setAttribute('y', posisi.y);
    teks.setAttribute('text-anchor', 'middle');
    teks.setAttribute('dominant-baseline', 'middle');
    teks.setAttribute('font-size', '11');
    teks.setAttribute('fill', '#FBF3E7');
    teks.textContent = s.label;
    svg.appendChild(teks);
  });

  return svg;
}

// Mencari detail produk (buat piramida notes) dari data/products.js
// berdasarkan nama produk yang tercatat di racikan
function cariProduk(namaProduk) {
  return PRODUCTS.find((p) => p.name === namaProduk) || null;
}

// Mengisi satu baris notes (Top/Middle/Base) jadi chip-chip kecil
function isiChipNotes(container, notes) {
  container.innerHTML = '';
  (notes || []).forEach((catatan) => {
    const chip = document.createElement('span');
    chip.className = 'rounded-full border border-white/20 bg-white/10 px-2 py-0.5 text-xs text-[#FBF3E7]';
    chip.textContent = catatan;
    container.appendChild(chip);
  });
}

// Memasang latar foto + rona warna di halaman hasil.
// Foto mengikuti aroma dominan, rona warna mengikuti aroma aksen.
function perbaruiLatarHasil(dominant, accent) {
  // Reset dulu supaya animasi fade-in terulang tiap racikan baru
  hasilBgFotoEl.classList.remove('opacity-100');
  hasilBgFotoEl.classList.add('opacity-0');

  hasilBgFotoEl.onload = () => {
    hasilBgFotoEl.classList.remove('opacity-0');
    hasilBgFotoEl.classList.add('opacity-100');
  };
  // Kalau file foto tidak ada/gagal dimuat, biarkan tetap transparan
  // supaya gradasi polos di lapis paling belakang yang terlihat.
  hasilBgFotoEl.onerror = () => {
    hasilBgFotoEl.classList.remove('opacity-100');
    hasilBgFotoEl.classList.add('opacity-0');
  };
  hasilBgFotoEl.src = 'assets/aroma/' + dominant.toLowerCase() + '.webp';

  hasilBgTintEl.style.backgroundColor = AKSEN_RONA[accent] || AKSEN_RONA[dominant];
  hasilBgTintEl.style.opacity = '0.5';
}

// Menampilkan halaman hasil racikan berdasarkan pilihan dominant + accent
function tampilkanHasil() {
  const blend = BLENDS.find((b) => b.dominant === pilihan.dominant && b.accent === pilihan.accent);

  if (!blend) {
    alert('Waduh, kombinasi ini belum ada di data racikan kami.');
    return;
  }

  blendSaatIni = blend;
  notifTersalinEl.classList.add('hidden');
  fallbackBagikanWrapperEl.classList.add('hidden');

  perbaruiLatarHasil(blend.dominant, blend.accent);

  hasilJudulEl.textContent = blend.accordName;
  hasilDeskripsiEl.textContent = blend.description;

  radarChartWrapperEl.innerHTML = '';
  radarChartWrapperEl.appendChild(buatRadarSVG(blend.profile));

  hasilKetahananEl.textContent = 'Tahan ' + blend.longevityMin + '-' + blend.longevityMax + ' jam';

  intensitasBarEl.style.width = (blend.intensity / 5) * 100 + '%';
  intensitasAngkaEl.textContent = blend.intensity + '/5';

  kataPeracikEl.textContent = blend.perfumerNote;

  produkNamaEl.textContent = blend.product.name;
  produkFamilyEl.textContent = blend.product.family;
  btnBukaProdukEl.href = 'https://uchiparfume.com/uchi-parfume/' + blend.product.slug;
  labelBelumVerifiedEl.classList.toggle('hidden', blend.verified !== false);

  // Detail notes (dominant note + piramida) dicocokkan dari data/products.js.
  // Kalau produknya tidak ketemu di data, sembunyikan bagian ini saja.
  const produk = cariProduk(blend.product.name);
  if (produk) {
    produkDominantNoteEl.textContent = produk.dominantNote;
    isiChipNotes(produkTopNotesEl, produk.topNotes);
    isiChipNotes(produkMiddleNotesEl, produk.middleNotes);
    isiChipNotes(produkBaseNotesEl, produk.baseNotes);
    produkDetailWrapperEl.classList.remove('hidden');
  } else {
    produkDetailWrapperEl.classList.add('hidden');
  }
  // Accordion notes selalu mulai tertutup tiap kali racikan baru tampil
  produkNotesBodyEl.classList.add('hidden');
  toggleNotesIconEl.classList.remove('rotate-180');

  // Pindah dari langkah 2 ke langkah 3 (hasil)
  progressTrackEl.classList.add('hidden');
  step2El.classList.add('hidden');
  racikWrapperEl.classList.add('hidden');
  step3El.classList.remove('hidden');
}

btnRacikEl.addEventListener('click', tampilkanHasil);

// Accordion "Detail Notes" di HP (di md: ke atas kontennya selalu tampil
// lewat class md:block, jadi tombol ini tidak berpengaruh di layar besar)
btnToggleNotesEl.addEventListener('click', () => {
  produkNotesBodyEl.classList.toggle('hidden');
  toggleNotesIconEl.classList.toggle('rotate-180');
});

// Menampilkan notifikasi "Tersalin!" lalu menghilang sendiri setelah 2 detik
function tampilkanNotifTersalin() {
  notifTersalinEl.classList.remove('hidden');
  setTimeout(() => notifTersalinEl.classList.add('hidden'), 2000);
}

// Cadangan terakhir: tampilkan teksnya di textarea supaya bisa disalin manual
function tampilkanFallbackBagikan(teks) {
  fallbackBagikanWrapperEl.classList.remove('hidden');
  fallbackBagikanTeksEl.value = teks;
  fallbackBagikanTeksEl.focus();
  fallbackBagikanTeksEl.select();
}

// Tombol "Bagikan Hasilku": coba share sheet bawaan HP dulu, kalau tidak ada
// coba salin ke clipboard, kalau itu juga gagal baru tampilkan textarea manual
btnBagikanEl.addEventListener('click', () => {
  if (!blendSaatIni) {
    return;
  }

  const teksBagikan =
    'Aku baru meracik ' + blendSaatIni.accordName + ' di UCHI Virtual Scent Lab! 🧪\n' +
    'Racik punyamu sendiri: #BuildYourParfume';

  if (navigator.share) {
    navigator.share({ title: 'UCHI Virtual Scent Lab', text: teksBagikan }).catch(() => {});
    return;
  }

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard
      .writeText(teksBagikan)
      .then(tampilkanNotifTersalin)
      .catch(() => tampilkanFallbackBagikan(teksBagikan));
    return;
  }

  tampilkanFallbackBagikan(teksBagikan);
});

// Racik ulang dari awal: balik ke langkah 1 dan kosongkan pilihan
btnUlangEl.addEventListener('click', () => {
  pilihan.dominant = null;
  pilihan.accent = null;
  step3El.classList.add('hidden');
  progressTrackEl.classList.remove('hidden');
  kembaliKeStep1();
  renderStep1();
});

renderStep1();

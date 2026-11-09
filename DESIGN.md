# Portfolio Design Direction

Panduan ini menetapkan arah visual dan isi untuk portofolio Faisal Akmal, dengan Brittany Chiang sebagai referensi suasana dan pola presentasi. Tujuannya adalah mengambil prinsip desain yang relevan—bukan menyalin teks, aset, atau implementasi situs referensi.

## Tujuan

Dalam beberapa detik, pengunjung harus memahami bahwa Faisal adalah QA Engineer/SDET, melihat bagaimana ia menjaga kualitas produk, meninjau pengalaman dan proyek yang relevan, lalu dapat menghubunginya.

## Arah visual

- Gunakan satu halaman panjang dengan navigasi samping yang tetap terlihat di desktop.
- Gunakan paper `#f4f4f4` sebagai kanvas, silk `#DCD0C0` untuk permukaan, charcoal `#373737` untuk teks, dan pale gold `#C0B283` sebagai aksen.
- Terapkan aturan 60–30–10 sebagai titik awal: sekitar 60% kanvas netral, 30% permukaan, dan 10% aksen. Angka ini panduan keseimbangan, bukan batas kaku.
- Pakai tipografi sans-serif yang bersih; berikan hierarki jelas untuk nama, peran, judul bagian, tanggal, dan deskripsi.
- Gunakan Inter seperti referensi: teks isi 16 px, nama 36 px di layar kecil hingga 48 px di desktop, peran 18–20 px, dan label navigasi/bagian sekitar 14 px.
- Batasi lebar kolom isi agar paragraf mudah dibaca. Pertahankan ruang kosong yang cukup di antara bagian.
- Utamakan tautan teks dan kartu sederhana. Efek hover ringan boleh membantu menunjukkan interaksi, tetapi jangan menjadi pengganti indikator fokus keyboard.
- Jangan memakai foto, logo perusahaan, statistik, testimoni, atau klaim yang tidak disediakan dan diverifikasi.

## Struktur halaman

1. **Hero** — nama, peran QA Engineer/SDET, satu kalimat nilai yang spesifik, dan tautan menuju proyek atau CV.
2. **About** — ringkasan singkat tentang pendekatan terhadap kualitas dan kolaborasi lintas fungsi.
3. **Experience** — riwayat kerja dalam urutan terbaru ke terlama; tampilkan periode, jabatan, organisasi, dampak yang dapat dibuktikan, dan alat yang benar-benar digunakan.
4. **Projects** — pilih beberapa proyek yang menunjukkan kemampuan QA. Untuk tiap proyek, jelaskan konteks, kontribusi, teknik pengujian, hasil yang dapat dibuktikan, serta tautan demo atau repositori bila tersedia.
5. **Contact** — tautan email dan profil profesional yang aktif dan tepat.

Hindari mengisi ruang dengan pengulangan deskripsi pekerjaan. Jika bagian Writing atau publikasi belum punya materi nyata, jangan tampilkan bagian itu.

## Navigasi dan perilaku

- Desktop: sidebar ringkas berisi nama/role, tautan bagian, dan ikon sosial yang punya label aksesibel.
- Mobile: ubah sidebar menjadi header/nav ringkas yang tidak menutupi konten; tautan bagian tetap mudah disentuh.
- Tautan ke bagian halaman menggunakan anchor asli agar dapat dibuka dengan keyboard dan tetap bekerja tanpa JavaScript.
- Gunakan scroll halus hanya jika pengaturan `prefers-reduced-motion` pengguna tidak meminta gerakan dikurangi.
- Tautan eksternal membuka tab baru hanya bila diperlukan dan menyertakan `rel="noopener noreferrer"`.

## Responsivitas dan aksesibilitas

- Mulai tata letak dari layar kecil; hindari sidebar tetap yang menghabiskan lebar ponsel.
- Pastikan halaman tidak meluber secara horizontal pada lebar 320 px.
- Pertahankan kontras yang cukup, fokus keyboard yang terlihat, landmark HTML semantik, urutan heading logis, dan teks tautan yang jelas.
- Ikon dekoratif disembunyikan dari pembaca layar; tautan ikon diberi nama aksesibel.
- Hormati pengaturan pengurangan gerakan.

## Batas konten dan data

- Proyek terpilih lebih bernilai daripada daftar seluruh repositori tanpa konteks.
- Jangan menempelkan label teknologi yang sama ke semua proyek. Tampilkan hanya teknologi yang dikonfirmasi untuk repositori tersebut.
- Simpan pilihan repositori dan ringkasannya di `assets/data/projects.json`; tautan setiap kartu menuju repositori aslinya di GitHub.
- Halaman tidak bergantung pada GitHub API, sehingga kartu proyek tetap tampil saat kuota API anonim habis atau layanan tidak tersedia.
- Gunakan teks konten melalui DOM `textContent`, bukan menyisipkan data API mentah ke `innerHTML`.

## Arah arsitektur

- `index.html` menjadi satu-satunya entry point halaman.
- Simpan JavaScript halaman di `assets/js/`; hindari skrip inline untuk perilaku halaman.
- Simpan CSS di `assets/css/` dan aset gambar/favikon di `assets/images/`.
- Simpan keputusan desain dan catatan implementasi di dokumen Markdown pada root proyek.
- Pertahankan dependensi seminimal mungkin dan pastikan halaman inti tetap bisa dinavigasi tanpa JavaScript.

## Penerapan saat ini

- Layout desktop memakai pengenalan dan navigasi sticky di sisi kiri, dengan bagian konten yang mengalir di sisi kanan.
- Ponsel memakai layout bertumpuk dengan navigasi horizontal dan kartu pengalaman/proyek satu kolom.
- Palet memakai paper `#f4f4f4`, silk `#DCD0C0`, charcoal `#373737`, dan pale gold `#C0B283`.
- Implementasi menggunakan CSS lokal di `assets/css/style.css`, daftar proyek terkurasi di `assets/data/projects.json`, dan interaksi ringan di `assets/js/main.js`; Tailwind CDN tidak diperlukan.

## Kriteria penerimaan desain

- Identitas dan peran mudah ditemukan pada tampilan awal.
- Pengunjung dapat berpindah ke Experience, Projects, dan Contact tanpa kebingungan.
- Riwayat dan proyek memuat informasi konkret, tidak berulang, serta tidak mengada-ada.
- Navigasi bekerja di desktop dan ponsel tanpa overflow horizontal.
- Seluruh kontrol dapat dioperasikan dengan keyboard dan memiliki fokus yang terlihat.
- Kegagalan API GitHub tidak menyebabkan error tak tertangani atau bagian proyek kosong tanpa penjelasan.

# Florism

Florism adalah platform pemesanan tiket wisata alam untuk membantu wisatawan menemukan dan memesan tiket destinasi wisata di sekitar Yogyakarta — mulai dari Gunung Kidul, Bantul, Kulon Progo, hingga Magelang — dalam satu tempat, tanpa perlu mendatangi lokasi langsung untuk mengecek harga atau ketersediaan.

## Fitur Utama

- **Jelajahi destinasi** — katalog wisata dengan foto, rating, dan harga, lengkap dengan pencarian dan tautan lokasi di Google Maps.
- **Pemesanan tiket** — pilih tanggal kunjungan dan jumlah tiket, harga terhitung otomatis, langsung masuk ke keranjang.
- **Akun pengguna** — registrasi dan login, profil yang bisa diisi dan tersimpan.
- **Pembayaran & riwayat pesanan** — checkout dari keranjang dan lihat daftar tiket yang sudah dipesan.
- **Dashboard admin** — tambah destinasi wisata baru yang langsung tampil di katalog untuk semua pengguna.

## Teknologi

Frontend dibangun dengan HTML, CSS, dan JavaScript murni (tanpa framework), dengan backend dan database menggunakan [Supabase](https://supabase.com) — data pengguna, keranjang, dan destinasi tersimpan di database PostgreSQL online yang sama untuk semua pengguna.

## Struktur Proyek

- `mainmenu.html` — halaman utama (landing + login/registrasi)
- `gallery.html` — katalog destinasi wisata
- `formtiket.html` — form pemesanan tiket
- `registrasi.html` — konfirmasi pembayaran
- `tiket.html` — riwayat pesanan
- `profile.html` — profil pengguna
- `developer.html` — dashboard admin
- `css/theme.css` — design system bersama (warna, tipografi, komponen UI)
- `js/auth.js` — koneksi Supabase dan autentikasi

## Menjalankan Secara Lokal

Buka `mainmenu.html` langsung di browser, atau lewat live server (misalnya ekstensi Live Server di VS Code). Tidak perlu setup database atau server tambahan — backend sudah online di Supabase.

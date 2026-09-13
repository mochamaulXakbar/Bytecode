# Bytecode - Florism

Website pemesanan tiket wisata alam di sekitar Yogyakarta (Gunung Kidul, Bantul, Kulon Progo, Magelang, dll). Frontend HTML/CSS/JS murni, backend & database pakai [Supabase](https://supabase.com) (PostgreSQL + Auth online sungguhan).

## Struktur

- `index.html` - redirect ke `mainmenu.html` (dipakai GitHub Pages/hosting statis sebagai entry point)
- `mainmenu.html` - halaman utama satu-satunya (landing sebelum login, otomatis berubah jadi tampilan setelah login kalau sesi aktif)
- `menutama.html` - hanya redirect ke `mainmenu.html`, dipertahankan supaya link lama tetap jalan
- `gallery.html` - katalog wisata (data dari tabel `destinations`), bisa dicari dan dipesan
- `formtiket.html` - form pemesanan tiket untuk satu destinasi
- `registrasi.html` - halaman konfirmasi pembayaran
- `tiket.html` - daftar pesanan tiket milik user
- `profile.html` - profil user
- `developer.html` - dashboard admin untuk menambah destinasi baru ke Gallery
- `Database/florismdb.sql` - skema database contoh lama (tidak dipakai lagi, sudah digantikan skema Supabase)
- `css/theme.css` - design system bersama (warna, tipografi, komponen header/nav/tombol/form/modal/drawer) yang dipakai semua halaman
- `js/auth.js` - koneksi Supabase + helper autentikasi, dimuat di semua halaman

## Menjalankan

Buka `mainmenu.html` langsung di browser, atau lewat live server (mis. ekstensi Live Server di VS Code). Karena backend-nya online (Supabase), tidak perlu setup server/database lokal apapun.

## Backend (Supabase)

Database & autentikasi berjalan di project Supabase online (region `ap-southeast-1`, free tier). Tabelnya:

- `destinations` - data wisata (dibaca publik, ditambah/dihapus oleh user yang login lewat dashboard admin)
- `profiles` - profil per user (satu baris per akun, dibuat otomatis lewat trigger saat registrasi)
- `cart_items` - keranjang tiket per user

Semua tabel pakai **Row Level Security (RLS)**: user cuma bisa lihat/ubah baris keranjang & profilnya sendiri; data destinasi bisa dibaca semua orang tapi cuma bisa ditambah/dihapus oleh pemiliknya.

Login pakai username (bukan email) — di balik layar, `js/auth.js` mengubah username jadi email semu (`username@florism.local`) supaya cocok dengan sistem Supabase Auth yang berbasis email. Ada trigger database yang otomatis meng-konfirmasi akun baru (karena email semu itu tidak akan pernah benar-benar menerima email konfirmasi).

## Deploy online

1. **Frontend**: hosting statis apapun (GitHub Pages, Vercel, Netlify) — tinggal hubungkan ke repo ini, tidak perlu build step.
2. **Backend**: sudah online di Supabase, tidak perlu dikerjakan ulang.

## Keterbatasan

- Perlindungan "leaked password" Supabase (cek password bocor lewat HaveIBeenPwned) belum diaktifkan — perlu diaktifkan manual lewat Supabase Dashboard kalau mau.
- `login.html` tidak terhubung dari navigasi manapun (alur login yang dipakai adalah modal di `mainmenu.html`); dipertahankan dan tetap disambungkan ke Supabase untuk konsistensi kalau suatu saat mau dipakai.
- Belum ada fitur lupa password / reset password.

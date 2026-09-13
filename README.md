# Bytecode - Florism

Website statis untuk pemesanan tiket wisata alam di sekitar Yogyakarta (Gunung Kidul, Bantul, Kulon Progo, Magelang, dll). Dibangun dengan HTML, CSS, dan JavaScript murni (tanpa framework/backend).

## Struktur

- `mainmenu.html` - halaman utama satu-satunya (landing sebelum login, otomatis berubah jadi tampilan setelah login kalau sesi aktif)
- `menutama.html` - hanya redirect ke `mainmenu.html`, dipertahankan supaya link lama tetap jalan
- `gallery.html` - katalog wisata, bisa dicari dan dipesan
- `formtiket.html` - form pemesanan tiket untuk satu destinasi
- `registrasi.html` - halaman konfirmasi pembayaran
- `tiket.html` - daftar pesanan tiket milik user
- `profile.html` - profil user
- `developer.html` - dashboard admin untuk menambah destinasi baru ke Gallery
- `Database/florismdb.sql` - skema database contoh (belum dipakai oleh aplikasi ini, lihat bagian Keterbatasan)
- `css/theme.css` - design system bersama (warna, tipografi, komponen header/nav/tombol/form/modal/drawer) yang dipakai semua halaman

## Menjalankan

Cukup buka `mainmenu.html` langsung di browser, atau jalankan lewat live server (mis. ekstensi Live Server di VS Code) agar path relatif berjalan normal.

## Cara kerja login & data

Karena tidak ada backend, autentikasi dan data pengguna disimpan di `localStorage`/`sessionStorage` browser (lihat `js/auth.js`):

- Akun tersimpan di `localStorage` (`florismUsers`)
- Status login per sesi disimpan di `sessionStorage` (`user`)
- Keranjang tiket tersimpan di `localStorage` (`keranjangTiket`)
- Data profil tersimpan di `localStorage` (`florismProfile_<username>`)

## Keterbatasan

- Tidak ada backend/server sungguhan — semua data hanya tersimpan di browser masing-masing pengguna dan akan hilang jika localStorage dibersihkan.
- `Database/florismdb.sql` masih berupa contoh skema dan belum terhubung ke aplikasi. Kalau mau dipakai beneran, opsi paling nyambung adalah PHP + MySQL lewat XAMPP (lokal) karena dump-nya memang format MySQL/MariaDB, atau pindah ke BaaS seperti Supabase/Firebase kalau mau langsung online tanpa nulis backend sendiri.
- Password akun tersimpan polos (plain text) di localStorage, bukan di-hash — cukup aman untuk demo lokal tapi jangan dipakai untuk data sungguhan.
- `login.html` tidak terhubung dari navigasi manapun (alur login yang dipakai adalah modal di `mainmenu.html`); dipertahankan dan tetap didesain ulang untuk konsistensi kalau suatu saat mau dipakai.

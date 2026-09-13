# Bytecode - Florism

Website statis untuk pemesanan tiket wisata alam di sekitar Yogyakarta (Gunung Kidul, Bantul, Kulon Progo, Magelang, dll). Dibangun dengan HTML, CSS, dan JavaScript murni (tanpa framework/backend).

## Struktur

- `mainmenu.html` - halaman awal (landing page) berisi modal login & registrasi
- `menutama.html` - halaman utama setelah login, daftar destinasi & event
- `gallery.html` - katalog wisata, bisa dicari dan dipesan
- `formtiket.html` - form pemesanan tiket untuk satu destinasi
- `registrasi.html` - halaman konfirmasi pembayaran
- `tiket.html` - daftar pesanan tiket milik user
- `profile.html` - profil user
- `developer.html` - dashboard input data wisata (belum terhubung ke penyimpanan manapun)
- `Database/florismdb.sql` - skema database contoh (belum dipakai oleh aplikasi ini)

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
- `Database/florismdb.sql` masih berupa contoh skema dan belum terhubung ke aplikasi.
- `developer.html` (dashboard admin) belum memiliki fungsi simpan data.

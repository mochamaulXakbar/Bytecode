// Modul autentikasi & koneksi Supabase (database online sungguhan)
// dipakai bersama oleh semua halaman.

const SUPABASE_URL = 'https://peohaavelmcumqwinqbm.supabase.co';
const SUPABASE_KEY = 'sb_publishable_Qeeki1MVEB_nO6jMVIDySg_PrPr2nZH';

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Supabase Auth butuh format email. Supaya user cukup daftar pakai
// username (seperti sebelumnya), kita ubah username jadi email semu
// yang konsisten setiap kali (tidak pernah benar-benar dikirimi email).
function usernameToEmail(username) {
    const clean = username.trim().toLowerCase().replace(/[^a-z0-9_.-]/g, '');
    return clean + '@florism.local';
}

async function getCurrentUser() {
    const { data } = await supabaseClient.auth.getUser();
    return data.user || null;
}

async function isLoggedIn() {
    return !!(await getCurrentUser());
}

async function requireLogin() {
    const user = await getCurrentUser();
    if (!user) {
        alert("Anda harus login terlebih dahulu.");
        window.location.href = "mainmenu.html";
    }
    return user;
}

// Tutup modal/drawer/toast konfirmasi manapun yang sedang terbuka,
// baik lewat klik di area gelap (overlay) maupun tombol Esc.
function closeAllOverlays() {
    document.querySelectorAll('.fl-overlay.is-open, .fl-modal.is-open, .fl-drawer.is-open, .fl-confirm.is-open')
        .forEach(function (el) { el.classList.remove('is-open'); });
}

document.addEventListener('click', function (e) {
    if (e.target.classList.contains('fl-overlay')) {
        closeAllOverlays();
    }
});

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeAllOverlays();
    }
});

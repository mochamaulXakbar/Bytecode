// Modul autentikasi sederhana berbasis localStorage/sessionStorage
// dipakai bersama oleh semua halaman yang butuh status login.

function getUsers() {
    return JSON.parse(localStorage.getItem('florismUsers')) || [];
}

function saveUsers(users) {
    localStorage.setItem('florismUsers', JSON.stringify(users));
}

function isLoggedIn() {
    return sessionStorage.getItem('user') !== null;
}

function requireLogin() {
    if (!isLoggedIn()) {
        alert("Anda harus login terlebih dahulu.");
        window.location.href = "mainmenu.html";
    }
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

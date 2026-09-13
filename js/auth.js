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

document.addEventListener("DOMContentLoaded", function () {
    if (isLoggedIn()) {
        document.getElementById('navGuest').style.display = 'none';
        document.getElementById('navUser').style.display = 'flex';
        document.getElementById('navUsername').textContent = sessionStorage.getItem('user');
    }
});

function kehome(){
    window.location.href = ("mainmenu.html")
}

function ketiketNav(){
    window.location.href = ("tiket.html")
}

function kegalleryNav(){
    window.location.href = ("gallery.html")
}

function keprofileNav(){
    window.location.href = ("profile.html")
}

function kelogoutNav(){
    sessionStorage.removeItem('user');
    window.location.href = ("mainmenu.html")
}

// Fungsi redirect
function redirectToPageIfLoggedIn(destinationPage) {
    if (isLoggedIn()) {
        window.location.href = destinationPage;
    } else {
        alert("Anda harus login atau registrasi terlebih dahulu.");
        login()
    }
}

function login(){
    document.getElementById('masking').classList.add('is-open')
    document.getElementById('log').classList.add('is-open')
}

function exit(){
    document.getElementById('masking').classList.remove('is-open')
    document.getElementById('log').classList.remove('is-open')
}

function signup(){
    document.getElementById('log').classList.remove('is-open')
    document.getElementById('reg').classList.add('is-open')
}

function klogin(){
    document.getElementById('log').classList.add('is-open')
    document.getElementById('reg').classList.remove('is-open')
}

function exitRegister(){
    document.getElementById('masking').classList.remove('is-open')
    document.getElementById('reg').classList.remove('is-open')
}

function registerhead(){
    document.getElementById('masking').classList.add('is-open')
    document.getElementById('reg').classList.add('is-open')
}

function hasil(){
    const username = document.getElementById('login-username').value.trim();
    const password = document.getElementById('login-password').value;

    const user = getUsers().find(u => u.username === username && u.password === password);
    if (!user) {
        alert("Username atau password salah.");
        return;
    }

    sessionStorage.setItem('user', username);
    window.location.href = ("mainmenu.html")
}

function register(){
    const username = document.getElementById('reg-username').value.trim();
    const password = document.getElementById('reg-password').value;
    const passwordConfirm = document.getElementById('reg-password-confirm').value;

    if (!username || !password) {
        alert("Username dan password wajib diisi.");
        return;
    }
    if (password !== passwordConfirm) {
        alert("Konfirmasi password tidak cocok.");
        return;
    }

    const users = getUsers();
    if (users.some(u => u.username === username)) {
        alert("Username sudah terdaftar. Silakan login.");
        return;
    }

    users.push({ username, password });
    saveUsers(users);
    alert("Registrasi berhasil. Silakan login.");
    klogin();
}

// Fungsi navbar
function ketiket() {
    redirectToPageIfLoggedIn("tiket.html");
}

function kegallery() {
    const ler = document.getElementById("aler")
    ler.classList.add('is-open')
    setTimeout(function() {
        ler.classList.remove('is-open')
    }, 2000);
}

function keprofile() {
    redirectToPageIfLoggedIn("profile.html");
}
function keregister() {
    window.location.href = "registrasi.html";
}



// fungsi halaman
function haljelajah() {
    var tujuanElement = document.getElementById('jel');
    tujuanElement.scrollIntoView({ behavior: 'smooth' });
}

function haleven() {
    var tujuanElement = document.getElementById('even');
    tujuanElement.scrollIntoView({ behavior: 'smooth' });
}


// Baca Selengkapnya
function JogjaNatureCamp() {
    window.location.href = ("https://visitingjogja.jogjaprov.go.id/40052/jogja-nature-camp-21-22-oktober-2023/")
}
function JogjaToursimDay() {
    window.location.href = ("https://jogjaprov.go.id/berita/jogja-tourism-day-2023-momentum-memajukan-pariwisata-kulon-progo")
}
function GunungKidul() {
    window.location.href = ("https://visitingjogja.jogjaprov.go.id/39765/gunungkidul-tourism-fest-2023-18-27-september-2023/")
}

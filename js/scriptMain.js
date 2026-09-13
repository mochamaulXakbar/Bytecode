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
    const masky = document.getElementById('masking')
    const loginre = document.getElementById('log')
    masky.style.display=("block")
    loginre.style.transform=("translateY(600px)")
    loginre.style.transform=("translateY(600px)")

}

function exit(){
    const masky = document.getElementById('masking')
    const loginre = document.getElementById('log')
    masky.style.display=("none")
    loginre.style.transform=("translateY(-600px)")

}

function signup(){
    const rege = document.getElementById('reg')
    const loginre = document.getElementById('log')
    loginre.style.transform=("translateY(-600px)")
    rege.style.transform=("translateY(600px)")
}

function klogin(){
    const rege = document.getElementById('reg')
    const loginre = document.getElementById('log')
    loginre.style.transform=("translateY(600px)")
    rege.style.transform=("translateY(-600px)")
}

function exitRegister(){
    const rege = document.getElementById('reg')
    const masky = document.getElementById('masking')
    const loginre = document.getElementById('log')
    masky.style.display=("none")
    rege.style.transform=("translateY(-600px)")

}
function registerhead(){
    const masky = document.getElementById('masking')
    const rege = document.getElementById('reg')
    masky.style.display=("block")
    rege.style.transform=("translateY(600px)")
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
    window.location.href = ("menutama.html")
}

function register(){
    const username = document.getElementById('reg-username').value.trim();
    const password = document.getElementById('reg-password').value;

    if (!username || !password) {
        alert("Username dan password wajib diisi.");
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
   ler.style.transform=("translateY(200px)")
    setTimeout(function() {
    ler.style.transform = "translateY(-200px)";
   
  }, 2000);
}

function aleroke(){
    const ler = document.getElementById("aler")
    ler.style.transform=("translateY(-110px)")
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

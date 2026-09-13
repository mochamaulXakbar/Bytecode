
requireLogin();

//fungsi navbar
function kehome(){
    window.location.href = ("menutama.html")
}

function ketiket() {
    window.location.href = ("tiket.html");
}

function kegallery() {
    window.location.href = ("gallery.html");
}

function keprofile() {
    window.location.href = ("profile.html");
}

function kelogout(){
    sessionStorage.removeItem('user');
    window.location.href = ("mainmenu.html")
}
function keregister(){
    window.location.href = ("registrasi.html")
}

// Halaman
function haljelajah(){
    var tujuanElement = document.getElementById('jel');
    tujuanElement.scrollIntoView({ behavior: 'smooth' });
}
function haleven(){
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
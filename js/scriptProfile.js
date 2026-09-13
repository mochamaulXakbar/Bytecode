requireLogin();

document.addEventListener("DOMContentLoaded", function () {
    const username = sessionStorage.getItem('user');
    const profil = JSON.parse(localStorage.getItem('florismProfile_' + username)) || {};

    document.getElementById("name").value = profil.name || "";
    document.getElementById("email").value = profil.email || "";
    document.getElementById("phone").value = profil.phone || "";
    document.getElementById("gender").value = profil.gender || "";
});

function saveProfile() {
    const username = sessionStorage.getItem('user');
    const profil = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        gender: document.getElementById("gender").value
    };

    localStorage.setItem('florismProfile_' + username, JSON.stringify(profil));
    alert("Profil berhasil disimpan.");
}

function kehome(){
    window.location.href = ("mainmenu.html")
}

function kegallery(){
    window.location.href = ("gallery.html")
}

function keprofile(){
    window.location.href = ("profile.html")
}

function ketiket(){
    window.location.href = ("tiket.html")
}

function kelogout(){
    sessionStorage.removeItem('user');
    window.location.href = ("mainmenu.html")
}
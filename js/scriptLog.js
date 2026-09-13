function hasil() {
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

function kelogout(){
    window.location.href = ("mainmenu.html")
}
function signup(){
    window.location.href = ("registrasi.html")
}
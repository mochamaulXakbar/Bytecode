async function hasil() {
    const username = document.getElementById('login-username').value.trim();
    const password = document.getElementById('login-password').value;

    const { error } = await supabaseClient.auth.signInWithPassword({
        email: usernameToEmail(username),
        password: password
    });

    if (error) {
        alert("Username atau password salah.");
        return;
    }

    window.location.href = ("mainmenu.html")
}

async function kelogout(){
    await supabaseClient.auth.signOut();
    window.location.href = ("mainmenu.html")
}
function signup(){
    window.location.href = ("mainmenu.html")
}
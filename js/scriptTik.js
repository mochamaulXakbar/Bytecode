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

async function kelogout(){
    await supabaseClient.auth.signOut();
    window.location.href = ("mainmenu.html")
}

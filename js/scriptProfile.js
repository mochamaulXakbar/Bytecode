let currentUser = null;

document.addEventListener("DOMContentLoaded", async function () {
    currentUser = await requireLogin();
    if (!currentUser) return;

    const { data } = await supabaseClient
        .from('profiles')
        .select('*')
        .eq('id', currentUser.id)
        .maybeSingle();

    if (data) {
        document.getElementById("name").value = data.name || "";
        document.getElementById("email").value = data.email || "";
        document.getElementById("phone").value = data.phone || "";
        document.getElementById("gender").value = data.gender || "";
    }
});

async function saveProfile() {
    const profil = {
        id: currentUser.id,
        username: currentUser.user_metadata.username || currentUser.email,
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        gender: document.getElementById("gender").value,
        updated_at: new Date().toISOString()
    };

    const { error } = await supabaseClient.from('profiles').upsert(profil);

    if (error) {
        alert("Gagal menyimpan profil: " + error.message);
        return;
    }

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

async function kelogout(){
    await supabaseClient.auth.signOut();
    window.location.href = ("mainmenu.html")
}

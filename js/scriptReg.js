let currentUser = null;

document.addEventListener("DOMContentLoaded", async function () {
    currentUser = await requireLogin();
    if (!currentUser) return;

    const urlParams = new URLSearchParams(window.location.search);
    const total = urlParams.get('harga');

    if (!total || isNaN(parseFloat(total))) {
        alert("Tidak ada pesanan untuk dibayar. Silakan pilih tiket dari keranjang.");
        window.location.href = "gallery.html";
        return;
    }

    document.getElementById("totalhg").value = total;
});

function pesanan(){
    window.location.href = "gallery.html";
}

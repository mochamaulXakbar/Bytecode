requireLogin();

document.addEventListener("DOMContentLoaded", function () {
    // This ensures that the DOM is fully loaded before executing the script

    const urlParams = new URLSearchParams(window.location.search);
    const isian = urlParams.get('isian');
    const ayam = urlParams.get('ayam')
    const harga = urlParams.get('harga')

    if (!isian || !ayam || !harga) {
        alert("Data wisata tidak ditemukan. Silakan pilih wisata dari gallery.");
        window.location.href = "gallery.html";
        return;
    }

    document.getElementById("namwis").value = isian;
    document.getElementById("fotobg").src = ayam;
    document.getElementById("harga").value = harga * 1;
});
function cekharga() {
    const urlParams = new URLSearchParams(window.location.search);
    const hargaSatuan = parseFloat(urlParams.get('harga'));
    const jumlah = parseInt(document.getElementById('jumlahTiket').value);

    if (isNaN(hargaSatuan) || isNaN(jumlah) || jumlah < 1) {
        alert("Jumlah tiket tidak valid.");
        return;
    }

    document.getElementById("harga").value = hargaSatuan * jumlah;
}


function submitForm() {
    alert("Tiket sudah di pesan.");
    // Arahkan pengguna kembali ke halaman utama
    window.location.href = "gallery.html";
}
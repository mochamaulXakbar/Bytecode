requireLogin();

function getDestinasiTambahan() {
    return JSON.parse(localStorage.getItem('florismDestinasiTambahan')) || [];
}

function saveDestinasiTambahan(data) {
    localStorage.setItem('florismDestinasiTambahan', JSON.stringify(data));
}

function updatePreview() {
    const foto = document.getElementById('devFoto').value.trim();
    document.getElementById('devPreviewImg').src = foto || "css/Asset/kulon.jpg";
}

function tambahData() {
    const namaWisata = document.getElementById('devNama').value.trim();
    const foto = document.getElementById('devFoto').value.trim();
    const rating = document.getElementById('devRating').value.trim();
    const harga = document.getElementById('devHarga').value.trim();
    const lokasiLink = document.getElementById('devLokasi').value.trim();

    if (!namaWisata) {
        alert("Nama Wisata wajib diisi.");
        return;
    }
    if (!harga || isNaN(parseFloat(harga))) {
        alert("Harga harus berupa angka.");
        return;
    }

    const data = getDestinasiTambahan();
    data.push({ namaWisata, foto, rating, harga, lokasiLink });
    saveDestinasiTambahan(data);

    document.getElementById('devNama').value = "";
    document.getElementById('devFoto').value = "";
    document.getElementById('devRating').value = "";
    document.getElementById('devHarga').value = "";
    document.getElementById('devLokasi').value = "";
    updatePreview();

    alert("Data wisata berhasil ditambahkan. Cek halaman Gallery.");
    renderList();
}

function hapusData(index) {
    const data = getDestinasiTambahan();
    data.splice(index, 1);
    saveDestinasiTambahan(data);
    renderList();
}

function renderList() {
    const data = getDestinasiTambahan();
    const wrapper = document.getElementById('daftarData');
    const list = document.getElementById('listData');
    list.innerHTML = "";

    if (data.length === 0) {
        wrapper.style.display = "none";
        return;
    }

    wrapper.style.display = "block";
    data.forEach(function (item, index) {
        const row = document.createElement('div');
        row.style.marginBottom = "8px";
        row.innerHTML = "<strong>" + item.namaWisata + "</strong> - Rp" + item.harga + " ";
        const hapusBtn = document.createElement('button');
        hapusBtn.textContent = "Hapus";
        hapusBtn.onclick = function () { hapusData(index); };
        row.appendChild(hapusBtn);
        list.appendChild(row);
    });
}

document.addEventListener("DOMContentLoaded", renderList);

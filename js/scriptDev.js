let currentUser = null;

document.addEventListener("DOMContentLoaded", async function () {
    currentUser = await requireLogin();
    if (!currentUser) return;

    await renderList();
});

function updatePreview() {
    const foto = document.getElementById('devFoto').value.trim();
    document.getElementById('devPreviewImg').src = foto || "css/Asset/kulon.jpg";
}

async function tambahData() {
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

    const { error } = await supabaseClient.from('destinations').insert({
        nama_wisata: namaWisata,
        foto: foto,
        rating: rating,
        harga: parseFloat(harga),
        lokasi_link: lokasiLink,
        created_by: currentUser.id
    });

    if (error) {
        alert("Gagal menambahkan data: " + error.message);
        return;
    }

    document.getElementById('devNama').value = "";
    document.getElementById('devFoto').value = "";
    document.getElementById('devRating').value = "";
    document.getElementById('devHarga').value = "";
    document.getElementById('devLokasi').value = "";
    updatePreview();

    alert("Data wisata berhasil ditambahkan. Cek halaman Gallery.");
    await renderList();
}

async function hapusData(id) {
    await supabaseClient.from('destinations').delete().eq('id', id);
    await renderList();
}

async function renderList() {
    const wrapper = document.getElementById('daftarData');
    const list = document.getElementById('listData');
    list.innerHTML = "";

    const { data, error } = await supabaseClient
        .from('destinations')
        .select('*')
        .eq('created_by', currentUser.id)
        .order('created_at', { ascending: true });

    if (error || !data || data.length === 0) {
        wrapper.style.display = "none";
        return;
    }

    wrapper.style.display = "block";
    data.forEach(function (item) {
        const row = document.createElement('div');
        row.innerHTML = "<strong>" + item.nama_wisata + "</strong> - Rp" + item.harga + " ";
        const hapusBtn = document.createElement('button');
        hapusBtn.textContent = "Hapus";
        hapusBtn.onclick = function () { hapusData(item.id); };
        row.appendChild(hapusBtn);
        list.appendChild(row);
    });
}

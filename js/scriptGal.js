let currentUser = null;

document.addEventListener("DOMContentLoaded", async function () {
    currentUser = await requireLogin();
    if (!currentUser) return;

    await renderDestinations();
    await renderCart();
});

function kehome(){
    window.location.href = ("mainmenu.html")
}

function kekeranjang(){
    document.getElementById('masking').classList.add('is-open')
    document.getElementById('keran').classList.add('is-open')
}

function kluar(){
    document.getElementById('masking').classList.remove('is-open')
    document.getElementById('keran').classList.remove('is-open')
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

function pesan(isian, ayam, harga){
    window.location.href = "formtiket.html?isian=" + encodeURIComponent(isian) + "&ayam=" + encodeURIComponent(ayam) + "&harga=" + encodeURIComponent(harga);
}

async function renderDestinations() {
    const grid = document.getElementById('galleryGrid');
    const { data, error } = await supabaseClient
        .from('destinations')
        .select('*')
        .order('created_at', { ascending: true });

    if (error) {
        grid.innerHTML = '<p class="empty-state">Gagal memuat data wisata: ' + error.message + '</p>';
        return;
    }

    grid.innerHTML = '';

    data.forEach(function (item) {
        const listgal = document.createElement('div');
        listgal.className = 'listgal';

        const isi = document.createElement('div');
        isi.className = 'isi';
        isi.onclick = function () {
            pesan(item.nama_wisata, item.foto || 'css/Asset/kulon.jpg', item.harga);
        };

        const img = document.createElement('img');
        img.src = item.foto || 'css/Asset/kulon.jpg';
        img.loading = 'lazy';
        img.alt = item.nama_wisata;
        isi.appendChild(img);

        const badge = document.createElement('span');
        badge.className = 'rating-badge';
        badge.innerHTML = '&#10026; ' + (item.rating || '-');
        isi.appendChild(badge);

        const h3 = document.createElement('h3');
        h3.textContent = item.nama_wisata;
        isi.appendChild(h3);

        const pHarga = document.createElement('p');
        pHarga.textContent = 'Start From ' + Math.round(item.harga / 1000) + 'k';
        isi.appendChild(pHarga);

        listgal.appendChild(isi);

        if (item.lokasi_link) {
            const a = document.createElement('a');
            a.href = item.lokasi_link;
            a.target = '_blank';
            a.rel = 'noopener';
            a.innerHTML = '&#128962; Location';
            listgal.appendChild(a);
        }

        grid.appendChild(listgal);
    });
}

async function renderCart() {
    const tbody = document.getElementById('tbodykeranjang');
    tbody.innerHTML = '';

    const { data, error } = await supabaseClient
        .from('cart_items')
        .select('*')
        .eq('user_id', currentUser.id)
        .order('created_at', { ascending: true });

    if (error || !data) return;

    data.forEach(function (tiket) {
        const row = tbody.insertRow();
        row.insertCell(0).innerHTML = tiket.nama_wisata;
        row.insertCell(1).innerHTML = tiket.tanggal;
        row.insertCell(2).innerHTML = tiket.jumlah;
        row.insertCell(3).innerHTML = tiket.harga;

        const cell5 = row.insertCell(4);
        const hapusButton = document.createElement('button');
        hapusButton.className = 'cart-remove';
        hapusButton.innerHTML = 'Hapus';
        hapusButton.onclick = function () { hapusTiket(tiket.id); };
        cell5.appendChild(hapusButton);
    });
}

async function hapusTiket(id) {
    await supabaseClient.from('cart_items').delete().eq('id', id);
    await renderCart();
}

async function bayar() {
    const { data } = await supabaseClient
        .from('cart_items')
        .select('harga')
        .eq('user_id', currentUser.id);

    let totalHarga = 0;
    (data || []).forEach(function (tiket) {
        totalHarga += parseInt(tiket.harga) || 0;
    });

    window.location.href = "registrasi.html?harga=" + encodeURIComponent(totalHarga);
}

function searchWisata(){
    let searchKeyword = document.getElementById('searchBarWisata').value;
    let wisataList = document.getElementsByClassName('listgal');
    let any = false;

    for (let i = 0; i < wisataList.length; i++) {
        let currentKeyword = wisataList[i].getElementsByTagName('h3')[0].innerText.toLowerCase();
        let currentElement = wisataList[i];

        if (currentKeyword.includes(searchKeyword.toLowerCase())) {
            currentElement.style.display = 'block';
            any = true;
        } else {
            currentElement.style.display = 'none';
        }
    }

    let noMatchElement = document.getElementById('searchNotFound');
    noMatchElement.innerText = any ? '' : 'Pencarian Tidak Ditemukan';
}

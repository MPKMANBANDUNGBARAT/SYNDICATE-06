const products = [
    {
        id: 1,
        name: "Lanyard Premium MPK",
        price: "15000",
        stock: 5,
        sold: "45",
        rating: "4.9",
        image: "foto/lanyard.jpg",
        category: "Aksesoris",
        desc: "Lanyard kualitas premium dengan bahan tisu lembut. Cocok untuk kartu pelajar atau id card panitia."
    },
    {
        id: 2,
        name: "Basreng Pedas Daun Jeruk",
        price: "5000",
        stock: 5,
        sold: "210",
        rating: "5.0",
        image: "foto/basreng.jpg",
        category: "Makanan",
        desc: "Basreng renyah dengan bumbu pedas melimpah dan aroma daun jeruk yang segar. Isi melimpah, dijamin nagih untuk teman belajar!"
    },
    {
        id: 3,
        name: "Brownies Lumer Cup",
        price: "10000",
        stock: 5,
        sold: "85",
        rating: "4.9",
        image: "foto/brownies.jpg",
        category: "Makanan",
        desc: "Brownies cokelat lumer di dalam cup. Manisnya pas dan bikin mood balik lagi setelah pelajaran matematika!"
    },
    {
        id: 4,
        name: "SYNDICATE 06 // BATCH 01",
        price: "85000",
        stock: 5,
        sold: "12",
        rating: "5.0",
        image: "foto/tshirt.jpg",
        category: "Pakaian",
        desc: "Kaos eksklusif SYNDICATE 06. Bahan katun combed 30s yang sangat nyaman."
    }
];

// Fungsi untuk menampilkan produk ke HTML
function renderProducts(data) {
    const grid = document.getElementById('product-grid');
    if (!grid) return;
    
    grid.innerHTML = data.map(p => `
        <div class="item-card flex flex-col cursor-pointer group" onclick="bukaProduk('${p.name}', '${p.price}', '${p.image}', '${p.desc}', '${p.category}')">
            <div class="relative overflow-hidden">
                <img src="${p.image}" class="w-full aspect-[4/5] object-cover transition-transform duration-500">
                <div class="absolute top-2 right-2 bg-[#8b0000] text-[8px] font-bold px-2 py-1 rounded shadow-lg uppercase">${p.category}</div>
                <div class="overlay absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span class="bg-white text-black text-[10px] font-bold px-3 py-2 rounded-full">LIHAT DETAIL</span>
                </div>
            </div>
            <div class="item-info p-3">
                <h3 class="text-xs font-normal line-clamp-2 mb-1 text-zinc-300">${p.name}</h3>
                <p class="price-tag text-sm font-bold text-red-500">Rp${parseInt(p.price).toLocaleString('id-ID')}</p>
            </div>
        </div>
    `).join('');

    // Di dalam loop renderProducts, tambahkan logika ini pada bagian tombol/card
const isOutOfStock = p.stock === 0;
const cardHTML = `
    <div class="${isOutOfStock ? 'opacity-50 grayscale' : ''} ...">
        ${isOutOfStock ? '<div class="absolute top-2 left-2 bg-zinc-900 text-white text-[8px] px-2 py-1 rounded">HABIS</div>' : ''}
        ...
    </div>
`;
}

// Fungsi untuk berpindah ke halaman detail
function bukaProduk(nama, harga, gambar, deskripsi, kategori) {
    const params = new URLSearchParams({
        name: nama,
        price: harga,
        img: gambar,
        desc: deskripsi,
        cat: kategori
    });
    window.location.href = `product-detail.html?${params.toString()}`;
}

// Inisialisasi saat dokumen siap
document.addEventListener('DOMContentLoaded', () => {
    // Tampilkan semua produk pertama kali
    renderProducts(products);

    const searchInput = document.getElementById('search-input');
    const filterBtns = document.querySelectorAll('.filter-btn');

    function filterAll() {
        const searchTerm = searchInput ? searchInput.value.toLowerCase() : "";
        const activeBtn = document.querySelector('.filter-btn.active');
        const activeCategory = activeBtn ? activeBtn.dataset.category : 'all';

        const filtered = products.filter(p => {
            const matchesSearch = p.name.toLowerCase().includes(searchTerm);
            const matchesCategory = activeCategory === 'all' || p.category.toLowerCase() === activeCategory.toLowerCase();
            return matchesSearch && matchesCategory;
        });

        renderProducts(filtered);
    }

    if(searchInput) {
        searchInput.addEventListener('input', filterAll);
    }

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active', 'bg-[#8b0000]', 'text-white'));
            btn.classList.add('active', 'bg-[#8b0000]', 'text-white');
            filterAll();
        });
    });
});

/* Import Base dari CSS kamu sebelumnya */
body {
    margin: 0; padding: 0; font-family: 'Inter', sans-serif;
    color: white; background-color: #050505;
    background-image: radial-gradient(circle at 50% -20%, rgba(185, 28, 28, 0.15) 0%, transparent 50%);
    background-attachment: fixed;
}

.glass {
    background: rgba(20, 20, 20, 0.7);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.header-sticky {
    position: sticky; top: 0;
}

input {
    background: rgba(255, 255, 255, 0.05) !important;
    border: 1px solid rgba(255, 255, 255, 0.1) !important;
    border-radius: 8px !important;
    color: white;
}

/* Category Pill */
.category-pill {
    padding: 6px 16px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    margin-right: 8px;
    font-size: 12px;
    transition: 0.3s;
}

.category-pill.active {
    background: #b91c1c;
    border-color: #b91c1c;
}

/* Marketplace Card Style */
.item-card {
    background: #111;
    border-radius: 12px;
    overflow: hidden;
    transition: 0.3s;
}

.item-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.5);
}

.item-info {
    padding: 10px;
}

.price-tag {
    color: #ef4444;
    font-weight: 700;
    font-size: 1.1rem;
}

.hide-scrollbar::-webkit-scrollbar {
    display: none;
}

/* Menambahkan efek glow dan interaksi pada kartu produk */
.item-card {
    background: #0a0a0a; /* Warna lebih gelap agar kontras */
    border: 1px solid rgba(255, 255, 255, 0.03);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.item-card:hover {
    transform: translateY(-8px) scale(1.02);
    border-color: rgba(220, 38, 38, 0.5); /* Border merah saat di-hover */
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6), 0 0 20px rgba(220, 38, 38, 0.1);
}

/* Efek zoom pada gambar */
.item-card img {
    transition: transform 0.6s ease;
}

.item-card:hover img {
    transform: scale(1.1);
}

/* Memperbaiki tipografi agar lebih tajam */
.price-tag {
    letter-spacing: -0.02em;
    font-feature-settings: "tnum"; /* Angka rata (tabular figures) */
}

/* Font Khusus untuk Kesan 'Lab/Syndicate' */
.tech-spec {
    font-family: 'Courier New', Courier, monospace;
    letter-spacing: 0.05em;
}

/* Mengubah warna merah agar lebih mewah (Deep Maroon) */
.text-brand-red {
    color: #8b0000;
}

.bg-brand-red {
    background-color: #8b0000;
}

/* Micro-Interaction: View Detail Overlay */
.item-card .overlay {
    opacity: 0;
    transition: opacity 0.3s ease;
    background: rgba(0, 0, 0, 0.7);
}

.item-card:hover .overlay {
    opacity: 1;
}

/* Skeleton Loading Shimmer */
.shimmer {
    background: linear-gradient(90deg, #121212 25%, #1a1a1a 50%, #121212 75%);
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
}

/* Memberikan ruang di bawah agar konten tidak tertutup tombol sticky mobile */
main {
    padding-bottom: 120px;
}

@media (min-width: 768px) {
    main {
        padding-bottom: 48px;
    }
}

/* Memperhalus input focus */
input:focus, select:focus, textarea:focus {
    border-color: #8b0000 !important;
    box-shadow: 0 0 15px rgba(139, 0, 0, 0.2);
}

/* Efek fokus pada search input ala SYNDICATE 06 */
#search-input {
    background: rgba(20, 20, 20, 0.5);
    backdrop-filter: blur(10px);
}

#search-input:focus {
    background: rgba(30, 30, 30, 0.8);
    border-color: #8b0000;
    box-shadow: 0 0 20px rgba(139, 0, 0, 0.1);
}

/* Animasi saat produk difilter */
.item-card {
    animation: fadeIn 0.5s ease forwards;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}

/* Pastikan Tech-Spec terbaca tajam */
.tech-spec {
    font-family: 'Courier New', Courier, monospace;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    font-size: 0.75rem; /* Sedikit lebih besar agar tidak 'hilang' */
}

/* Modal Overlay yang Solid */
#checkoutModal, #successModal {
    z-index: 999 !important;
}

/* Animasi Fade In untuk produk saat difilter */
#main-grid > div {
    animation: fadeIn 0.4s ease-out forwards;
}


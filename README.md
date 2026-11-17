# TIMELESS - Catalog Landing Page

Landing page katalog jam tangan **TIMELESS**, dibangun dengan React, TypeScript, Tailwind CSS, dan Vite.

Project ini dibuat hanya untuk bersenang-senang. Tidak ada paksaan, tidak ada tenggat waktu, dan tidak ada target komersial. Silakan pakai, ubah, atau tinggalkan sesuai keinginan.

## Fitur

- Hero section full-screen dengan CTA ke katalog
- Katalog produk dengan filter kategori (Elegance / Sport / Minimalist)
- Live search dengan hasil muncul langsung saat mengetik
- Quick view modal untuk detail produk
- Shopping bag (cart drawer) dengan update quantity dan subtotal
- Login / register dalam drawer akun (sesi disimpan di localStorage, tanpa backend)
- Newsletter subscription section
- Navigasi anchor: Collection, Craftsmanship, Heritage, Contact
- Responsive di semua ukuran layar

## Tech Stack

| Teknologi | Versi |
|-----------|-------|
| React | 19 |
| TypeScript | 6 |
| Tailwind CSS | 4 |
| Vite | 8 |
| Lucide React | Icons |

## Kebutuhan

- Node.js 20 atau lebih baru
- npm (sudah termasuk bersama Node.js)

## Cara Menjalankan

1. Clone repository lalu masuk ke foldernya.

   ```bash
   git clone https://github.com/Dikapedia/e-commerce-frontend.git
   cd catalog-landingpage
   ```

2. Install dependency.

   ```bash
   npm install
   ```

3. Jalankan development server.

   ```bash
   npm run dev
   ```

4. Buka URL yang muncul di terminal, biasanya `http://localhost:5173`.

## Scripts

| Command | Keterangan |
|---------|------------|
| `npm run dev` | Menjalankan development server dengan hot reload |
| `npm run build` | TypeScript check + production build ke folder `dist/` |
| `npm run preview` | Preview hasil build production secara lokal |
| `npm run lint` | Lint dengan oxlint |

## Cara Menggunakan Halaman

- Klik ikon menu di kiri atas untuk membuka drawer navigasi. Setiap item menggulir ke section terkait.
- Klik ikon search untuk mencari produk berdasarkan nama, tagline, kategori, warna dial, atau strap.
- Klik ikon account untuk login atau register. Data hanya disimpan di browser, tidak dikirim ke server.
- Klik **BAG** untuk membuka shopping bag, mengubah quantity, dan melihat subtotal.
- Klik kartu produk atau tombol panah untuk melihat detail dan menambahkan produk ke bag.
- Isi email di section newsletter untuk mencoba alur subscribe.

Catatan: proses checkout dan login masih berupa simulasi sisi client. Belum ada backend, pembayaran, atau verifikasi akun.

## Struktur Project

```text
src/
├── components/
│   ├── header/        # Header dan tombol (Menu, Logo, Search, Account, Bag)
│   ├── menu-drawer/   # Drawer navigasi dan kontak concierge
│   ├── hero/          # Hero section dan intro card
│   ├── features/      # Grid fitur produk
│   ├── collection/    # Katalog, filter kategori, product card
│   ├── philosophy/    # Philosophy section dan statistik
│   ├── newsletter/    # Form dan notice subscribe
│   ├── footer/        # Footer, kolom link, social links
│   └── overlays/
│       ├── auth/      # Login dan register
│       ├── cart/      # Shopping bag
│       ├── search/    # Live search
│       └── product/   # Detail produk
├── data/              # Data produk katalog
├── hooks/             # useCart dan useGoogleFonts
├── lib/               # Validasi form dan sesi auth client-side
├── types/             # TypeScript types
├── assets/            # Gambar
├── App.tsx            # Susunan section dan state global
└── main.tsx           # Entry point React
```

## Check

Untuk memastikan validasi auth tidak rusak setelah diubah:

```bash
node src/lib/auth.check.ts
```

Script akan mencetak `auth checks passed` bila semua assertion lolos.

## Kustomisasi

- Produk: ubah `src/data/products.ts`.
- Warna dan font: ubah utility Tailwind di komponen terkait serta `src/index.css`.
- Bagian halaman: ubah susunan section di `src/App.tsx`.
- Menu navigasi: ubah `NAV_ITEMS` di `src/components/menu-drawer/MenuNav.tsx`.

## Lisensi

Bebas dipakai untuk belajar dan eksperimen pribadi.

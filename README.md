# 🌙 BerkahFitri

Aplikasi kartu ucapan Selamat Hari Raya Idul Fitri yang dibuat menggunakan **React + Vite**. Dilengkapi dengan animasi indah, efek confetti, dan tombol **"Berbagi Berkah"** yang mengarahkan ke link donasi DANA.

---

## 🚀 Cara Menjalankan

```bash
npm install
npm run dev
```

---

## 🔗 Cara Mengubah Link DANA

Link DANA terdapat di file **`src/components/SupportButton.jsx`**.

### Langkah-langkah:

1. Buka file `src/components/SupportButton.jsx`
2. Cari baris kode berikut:

   ```jsx
   window.open(
     "https://link.dana.id/minta?full_url=https://qr.dana.id/v1/281012012026022639740658",
     "_blank"
   );
   ```

3. Ganti URL di dalam tanda kutip `"..."` dengan link DANA milikmu yang baru.

   **Contoh:**

   ```jsx
   window.open(
     "https://link.dana.id/minta?full_url=https://qr.dana.id/v1/LINK_DANA_BARU_KAMU",
     "_blank"
   );
   ```

4. Simpan file, lalu jalankan `npm run dev` untuk melihat hasilnya.

### Cara Mendapatkan Link DANA:

1. Buka aplikasi **DANA** di HP
2. Pilih menu **"Minta"** atau **"Request"**
3. Masukkan nominal (opsional)
4. Tap **"Salin Link"** atau **"Copy Link"**
5. Paste link tersebut ke dalam kode di atas

---

## 📁 Struktur Proyek

```
BerkahFitri/
├── src/
│   ├── assets/
│   │   └── lenteraRamadhan.png
│   ├── components/
│   │   ├── Greeting.jsx        ← Komponen ucapan & doa
│   │   └── SupportButton.jsx   ← Tombol donasi DANA (ubah link di sini)
│   ├── App.jsx                 ← Komponen utama
│   ├── App.css                 ← Styling utama
│   ├── index.css               ← Styling global
│   └── main.jsx                ← Entry point
├── index.html
├── package.json
└── vite.config.js
```

---

## 🌐 Cara Upload ke GitHub & Deploy ke Vercel

### 1. Upload ke GitHub

1. Buat akun di [github.com](https://github.com) (jika belum punya)
2. Klik tombol **"+"** di kanan atas → pilih **"New repository"**
3. Isi nama repository (contoh: `BerkahFitri`), lalu klik **"Create repository"**
4. Buka terminal di folder proyek, lalu jalankan perintah berikut:

   ```bash
   git init
   git add .
   git commit -m "first commit"
   git branch -M main
   git remote add origin https://github.com/USERNAME_KAMU/BerkahFitri.git
   git push -u origin main
   ```

   > **Catatan:** Ganti `USERNAME_KAMU` dengan username GitHub kamu.

### 2. Deploy ke Vercel

1. Buka [vercel.com](https://vercel.com) dan login menggunakan akun **GitHub**
2. Klik **"Add New..."** → **"Project"**
3. Pilih repository **BerkahFitri** dari daftar
4. Vercel akan otomatis mendeteksi bahwa ini proyek **Vite**
5. Klik **"Deploy"** dan tunggu hingga selesai
6. Setelah selesai, kamu akan mendapatkan link website yang bisa dibagikan! 🎉

### Jika Ada Perubahan (Update)

Setiap kali kamu mengubah kode (misalnya mengganti link DANA), jalankan:

```bash
git add .
git commit -m "update link dana"
git push
```

Vercel akan **otomatis deploy ulang** setiap ada perubahan di GitHub.

---

## ❓ Butuh Bantuan?

Jika kamu mengalami kesulitan dalam mengubah link DANA, upload ke GitHub, atau deploy ke Vercel, silakan **hubungi developer** untuk dibantu langsung.

---

## 🛠️ Teknologi

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- [Framer Motion](https://www.framer.com/motion/) — Animasi
- [React Confetti](https://www.npmjs.com/package/react-confetti) — Efek confetti

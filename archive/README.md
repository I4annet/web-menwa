# Archive

Folder ini berisi file hasil export desain / stitch yang **tidak digunakan** oleh build Next.js namun dipertahankan sebagai arsip referensi (sesuai instruksi: jangan hapus file yang belum pasti tidak digunakan).

- stitch-exports/ — 13 folder berisi code.html + screen.png dari Stitch (beranda, biodata, detail kegiatan, kontak, program kerja, struktur organisasi, portal, logo, image.png)
- design-system/ — dhikari_system/DESIGN.md & egiment_institutional_system/DESIGN.md (token warna & tipografi)

File di sini TIDAK diimport oleh src/app atau src/components. Build Next.js tidak menyentuhnya.

Scripts scripts/download-assets.mjs masih mengacu ke path lama logo_menwa_polinema/screen.png — setelah arsip, path tersebut berubah menjadi rchive/stitch-exports/.... Jika ingin re-download, update path atau copy manual. Public images sudah terisi dan tidak perlu re-download.

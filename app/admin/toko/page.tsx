// Definisikan tipe data untuk kejelasan
interface Product {
  id: number;
  name: string;
  price: number;
  description?: string | null;
}

interface Toko {
  id: number;
  name: string;
  categories: string;
  products?: Product[];
}

import AddTokoForm from "./components/AddTokoForm";
import TokoItem from "./components/TokoMenu";

// Komponen ini adalah Server Component, jadi boleh pakai async/await
export default async function TokoPage() {
  // Data fetching terjadi di sisi server sebelum rendering
  const res = await fetch("http://localhost:3000/api/toko", {
    // Tambahkan opsi ini jika Anda ingin memastikan data di-cache (atau tidak di-cache)
    // cache: "no-store",
  });

  // Ambil data JSON
  const dataToko: Toko[] = await res.json();

  return (
    <>
      {/* Main content */}
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-extrabold mb-6 text-gray-800">
          Daftar Toko
        </h1>

        <AddTokoForm />

        {/* Grid untuk Card Toko */}
        {/* Grid akan menampilkan 1 kolom di layar kecil, 2 di medium, dan 3 di large */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {/* DataToko sekarang tersedia dari hasil fetch server */}
          {dataToko.map((toko) => (
            <TokoItem key={toko.id} toko={toko} />
          ))}
        </div>

        {/* Tampilan alternatif untuk "Tidak ada Toko" */}
        {dataToko.length === 0 && (
          <div className="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-700 rounded-md">
            <p className="font-bold">Tidak ada Toko ditemukan.</p>
            <p>Silakan klik Tambah Toko untuk memulai.</p>
          </div>
        )}
      </main>
    </>
  );
}

// Definisikan tipe data untuk kejelasan
interface Toko {
  id: number;
  name: string;
  categories: string;
}

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
        <h1 className="text-3xl font-extrabold mb-6 text-gray-800">Daftar Toko</h1>
        
        {/* Tombol Tambah Toko */}
        <button className="px-4 py-2 mb-6 text-white bg-amber-600 rounded-lg shadow-md hover:bg-amber-700 transition duration-150 ease-in-out font-medium">
          Tambah Toko
        </button>
        
        {/* Grid untuk Card Toko */}
        {/* Grid akan menampilkan 1 kolom di layar kecil, 2 di medium, dan 3 di large */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* DataToko sekarang tersedia dari hasil fetch server */}
          {dataToko.map((toko) => (
            <div 
              key={toko.id} 
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 ease-in-out p-6 border border-gray-100"
            >
              {/* Nama Toko */}
              <h2 className="text-xl font-bold mb-2 text-gray-900">{toko.name}</h2>
              
              {/* Kategori */}
              <p className="text-sm text-amber-600 font-semibold mb-4">
                {toko.categories}
              </p>
              
              {/* Deskripsi/Info Tambahan (Opsional) */}
              <p className="text-gray-600 mb-4">
                Lihat detail menu dan produk yang ditawarkan oleh **{toko.name}**.
              </p>
              
              {/* Tombol Lihat Menu */}
              <button className="mt-2 w-full py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-150 ease-in-out font-medium">
                Lihat Menu
              </button>
            </div>
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


interface Toko {
  id: number
  name: string
  categories?: string
  products?: {id: number}[]

}

export default async function AdminPage() {
 
  const res = await fetch("http://localhost:3000/api/toko");
  const datas = await res.json();
  const totalToko = datas.length;
  const totalProduk = datas.reduce(
    (sum: number, toko: Toko) => sum + (toko.products?.length || 0),
    0
  );

  return (
    <main className="flex-1 p-6 space-y-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard Admin</h1>

      {/* Statistik */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-gray-500 text-sm">Total Toko</h2>
          <p className="text-3xl font-bold mt-2">{totalToko}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-gray-500 text-sm">Total Produk</h2>
          <p className="text-3xl font-bold mt-2">{totalProduk}</p>
        </div>
      </div>
    </main>
  );
}

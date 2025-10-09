export default function AdminPage() {
  return (
    <>
      {/* Sidebar */}
      {/* Main content */}
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Dashboard Admin</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-gray-500 text-sm">Total Toko</h2>
            <p className="text-3xl font-bold mt-2">6</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-gray-500 text-sm">Total Produk</h2>
            <p className="text-3xl font-bold mt-2">24</p>
          </div>
        </div>
      </main>
    </>
  );
}

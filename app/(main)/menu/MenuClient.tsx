"use client";

interface Product {
  id: number;
  name: string;
  price: number;
  description?: string | null;
  image?: string | null;
}

interface Toko {
  id: number;
  name: string;
  categories?: string;
  products?: Product[];
}

export default function MenuClient({ tokoList }: { tokoList: Toko[] }) {
  // const [selectedToko, setSelectedToko] = useState<Toko | null>(
  //   tokoList[0] ?? null
  // );
  console.log(tokoList);

  return (
    <main className="flex flex-col h-dvh py-12">
      {/* Header */}
      <header className="text-center py-6">
        <h1 className="text-3xl font-bold text-black">{tokoList[0].name}</h1>
      </header>

      {/* Bagian Menu */}
      <section className="flex-1 px-6 grid grid-cols-2 gap-8">
        {/* Kolom Kiri */}
        <div className="space-y-6 text-center">
          <div className="bg-amber-600 shadow-md rounded-xl h-56 flex items-center justify-center">
            Img Toko
          </div>

          <div className="bg-amber-600 p-3 rounded-lg shadow-md text-xl font-semibold mb-2">
            HeaderMenu
          </div>
          <ul className="space-y-4">
            <li>ListMenu</li>
            <li>ListMenu</li>
          </ul>
        </div>

        {/* Kolom Kanan */}
        <div className="space-y-6 text-center">
          <div>
            <div className="bg-amber-600 p-3 rounded-lg shadow-md text-xl font-semibold mb-2">
              HeaderMenu
            </div>
            <ul className="space-y-4">
              <li>ListMenu</li>
              <li>ListMenu</li>
            </ul>
          </div>

          <div className="bg-amber-600 shadow-md rounded-xl h-56 flex items-center justify-center">
            Img Toko
          </div>
        </div>
      </section>

      {/* Navbar Bawah */}
      <footer className="absolute bottom-0 w-full">
        <div className="bg-amber-600 m-4 p-2 rounded-xl shadow-md">
          <div className="flex items-center justify-center gap-4 px-4">
            {tokoList.map((product) => (
              <div
                key={product.id}
                className="flex items-center justify-center w-18 h-18 bg-white rounded-full"
              >
                {product.categories}
              </div>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}

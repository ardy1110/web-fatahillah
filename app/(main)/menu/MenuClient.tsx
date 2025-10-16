// "use client";

import { Store } from "@/lib/types";

export default function MenuClient({ stores }: { stores: Store[] }) {
  // const [selectedToko, setSelectedToko] = useState<Toko | null>(
  //   tokoList[0] ?? null
  // );
  console.log(stores.length);

  return (
    // Tambah scroll
    <main className="flex flex-col h-dvh py-12">
      {/* Header */}
      <header className="text-center py-6">
        <h1 className="text-3xl font-bold text-black">{stores[2].name}</h1>
      </header>

      {/* Bagian Menu */}
      <section className="flex-1 px-12 grid grid-cols-2 gap-8">
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
      <footer className="absolute bottom-0 left-0 w-full flex justify-center">
        <div className="relative p-3 m-4 rounded-2xl shadow-lg inline-flex items-center justify-center gap-4 px-10 overflow-hidden backdrop-blur-md bg-amber-500/30 border border-white/20">
          <div className="flex gap-4 overflow-x-auto sm:overflow-visible max-w-full scrollbar-none">
            {stores.map((store) => (
              <div
                key={store.id}
                className="relative bg-white w-16 h-16 rounded-xl text-sm shadow-md shrink-0 hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                {store.name}
                {/* <Image
                  src={`/${store.name}.jpg`}
                  alt="Logo Toko"
                  fill
                  className="object-cover rounded-xl"
                /> */}
              </div>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}

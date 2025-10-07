"use client";

import { useState } from "react";
import Image from "next/image";

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
  const [selectedToko, setSelectedToko] = useState<Toko | null>(
    tokoList[0] ?? null
  );

  return (
    <section className="flex flex-col md:flex-row min-h-screen bg-[#faf6f2]">
      {/* Sidebar */}
      <aside className="w-full md:w-1/4 bg-white border-r border-gray-200 pt-28 px-6">
        <ul className="space-y-3">
          {tokoList.map((toko) => (
            <li key={toko.id}>
              <button
                onClick={() => setSelectedToko(toko)}
                className={`w-full text-left px-4 py-3 rounded-lg transition cursor-pointer ${
                  selectedToko?.id === toko.id
                    ? "bg-amber-600 text-white font-semibold"
                    : "hover:bg-[#f1e7dd] text-gray-600"
                }`}
              >
                {toko.name}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Konten */}
      <main className="flex-1 p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 py-3">
          {selectedToko?.name ?? "Pilih toko"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {selectedToko?.products?.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:-translate-y-1 hover:shadow-xl transition"
            >
              <div className="relative w-full h-48">
                <Image
                  src={p.image ?? "/bg.jpg"}
                  alt={p.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900">
                  {p.name}
                </h3>
                <p className="text-amber-600 font-bold mt-1">Rp {p.price}</p>
                <p className="text-gray-600 text-sm mt-2">{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </section>
  );
}

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
    <section className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar */}
      <aside className="w-full md:w-1/4 bg-[#faf7f3] border-r rounded-xl border-gray-200 pt-22 px-6 shadow-md">
        <ul className="space-y-3">
          {tokoList.map((toko) => (
            <li key={toko.id}>
              <button
                onClick={() => setSelectedToko(toko)}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 font-medium cursor-pointer ${
                  selectedToko?.id === toko.id
                    ? "bg-amber-600 text-white shadow-sm"
                    : "bg-white hover:bg-amber-50 text-gray-700 hover:text-amber-700 border border-gray-100"
                }`}
              >
                {toko.name}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Konten */}
      <main className="flex-1 px-8 py-2">
        <h2 className="flex justify-center text-3xl font-bold text-gray-900 mb-6 py-3">
          {selectedToko?.name ?? "Pilih Toko"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-8">
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

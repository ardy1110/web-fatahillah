"use client";

import React from "react";
import AddProductForm from "./AddProductForm";
import ProductActions from "./ProductActions";

type Product = {
  id: number;
  name: string;
  price: number;
  description?: string | null;
  image?: string | null;
};

type Toko = {
  id: number;
  name: string;
  categories: string;
  products?: Product[];
};

export default function TokoItem({ toko }: { toko: Toko }) {
  const [open, setOpen] = React.useState(false);
  const [products, setProducts] = React.useState<Product[] | undefined>(
    toko.products
  );
  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="p-0">
      <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 ease-in-out p-6 border border-gray-100">
        <h2 className="text-xl font-bold mb-2 text-gray-900">{toko.name}</h2>
        <p className="text-sm text-amber-600 font-semibold mb-4">
          {toko.categories}
        </p>
        <p className="text-gray-600 mb-4">
          Lihat detail menu dan produk yang ditawarkan oleh{" "}
          <strong>{toko.name}</strong>.
        </p>

        <button
          onClick={() => setOpen(true)}
          className="mt-2 w-full py-2 text-white bg-blue-500 rounded-lg cursor-pointer hover:bg-blue-600 transition duration-150 ease-in-out font-medium"
        >
          Lihat Menu
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          />
          <div className="relative z-10 w-full max-w-3xl mx-4">
            <div className="bg-white rounded-lg shadow-lg overflow-auto max-h-[80vh]">
              <div className="flex items-center justify-between p-4 border-b">
                <h3 className="text-lg font-semibold">Menu - {toko.name}</h3>
                <button
                  onClick={() => setOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  Tutup
                </button>
              </div>
              <div className="p-4">
                <AddProductForm
                  tokoId={toko.id}
                  onCreated={(p) =>
                    setProducts((s) => (Array.isArray(s) ? [p, ...s!] : [p]))
                  }
                />

                {products && products.length > 0 ? (
                  <ul className="space-y-3">
                    {products.map((p) => (
                      <li key={p.id} className="p-3 border rounded-md">
                        <div className="flex justify-between items-start gap-4">
                          <div className="flex-1">
                            <div className="font-medium">{p.name}</div>
                            {p.description && (
                              <div className="text-sm text-gray-500">
                                {p.description}
                              </div>
                            )}
                          </div>

                          <ProductActions
                            product={p}
                            onUpdated={(upd) =>
                              setProducts((s) =>
                                s?.map((x) => (x.id === p.id ? upd : x))
                              )
                            }
                            onDeleted={(id) =>
                              setProducts((s) => s?.filter((x) => x.id !== id))
                            }
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="text-sm text-gray-500">
                    Tidak ada produk untuk toko ini.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

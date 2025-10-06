"use client";

import React from "react";
import EditProductForm from "./EditProductForm";

type Product = {
  id: number;
  name: string;
  price: number;
  description?: string | null;
};

export default function ProductActions({
  product,
  onUpdated,
  onDeleted,
}: {
  product: Product;
  onUpdated?: (p: Product) => void;
  onDeleted?: (id: number) => void;
}) {
  const [editing, setEditing] = React.useState(false);

  return (
    <div className="flex flex-col items-end gap-2">
      <div className="text-sm font-semibold">Rp {product.price}</div>
      <div className="flex gap-2">
        {!editing ? (
          <>
            <button
              onClick={() => setEditing(true)}
              className="px-2 py-1 text-sm border rounded cursor-pointer"
            >
              EDIT MENU
            </button>
            <button
              onClick={async () => {
                if (!confirm("Hapus produk ini?")) return;
                try {
                  const res = await fetch(`/api/products/${product.id}`, {
                    method: "DELETE",
                  });
                  if (!res.ok) throw new Error(`HTTP ${res.status}`);
                  await res.json();
                  if (onDeleted) onDeleted(product.id);
                } catch (err) {
                  console.error(err);
                  alert("Gagal menghapus produk");
                }
              }}
              className="px-2 py-1 text-sm bg-red-600 text-white rounded cursor-pointer"
            >
              HAPUS MENU
            </button>
          </>
        ) : (
          <EditProductForm
            product={product}
            onSaved={(p) => {
              if (onUpdated) onUpdated(p);
              setEditing(false);
            }}
            onCancel={() => setEditing(false)}
          />
        )}
      </div>
    </div>
  );
}

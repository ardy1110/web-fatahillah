"use client";

import React from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  description?: string | null;
};

type Props = {
  tokoId: number;
  onCreated?: (p: Product) => void;
};

export default function AddProductForm({ tokoId, onCreated }: Props) {
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState<string>("");
  const [description, setDescription] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  async function handleAdd() {
    if (!name || price === "") return alert("Isi nama dan harga");
    setLoading(true);
    try {
      const res = await fetch(`/api/products`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, description, price: Number(price), tokoId }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const created = await res.json();
      if (onCreated) onCreated(created.product ?? created);
      setName("");
      setPrice("");
      setDescription("");
    } catch (err) {
      console.error(err);
      alert("Gagal menambah produk");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mb-4 border-b pb-4">
      <div className="flex gap-2 mb-2">
        <input className="flex-1 border rounded px-2 py-1" placeholder="Nama produk" value={name} onChange={(e) => setName(e.target.value)} />
        <input className="w-28 border rounded px-2 py-1" placeholder="Harga" type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
      </div>
      <div className="flex gap-2">
        <input className="flex-1 border rounded px-2 py-1" placeholder="Deskripsi (opsional)" value={description} onChange={(e) => setDescription(e.target.value)} />
        <button onClick={handleAdd} disabled={loading} className={`px-3 py-1 rounded ${loading ? 'bg-gray-400' : 'bg-amber-600 text-white hover:bg-amber-700'}`}>
          {loading ? 'Menambahkan...' : 'TAMBAH MENU'}
        </button>
      </div>
    </div>
  );
}

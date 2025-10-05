"use client";

import React from "react";

type Product = { id: number; name: string; price: number; description?: string | null };

type Props = {
  product: Product;
  onSaved?: (p: Product) => void;
  onCancel?: () => void;
};

export default function EditProductForm({ product, onSaved, onCancel }: Props) {
  const [name, setName] = React.useState(product.name);
  const [price, setPrice] = React.useState<string>(String(product.price));
  const [description, setDescription] = React.useState(product.description ?? "");
  const [loading, setLoading] = React.useState(false);

  async function handleSave() {
    setLoading(true);
    try {
      const res = await fetch(`/api/products/${product.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, price: Number(price), description }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const updated = await res.json();
      if (onSaved) onSaved(updated.product ?? updated);
    } catch (err) {
      console.error(err);
      alert('Gagal mengupdate produk');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-2">
      <input className="w-full border rounded px-2 py-1" value={name} onChange={(e) => setName(e.target.value)} />
      <input className="w-full border rounded px-2 py-1" value={price} onChange={(e) => setPrice(e.target.value)} />
      <input className="w-full border rounded px-2 py-1" value={description} onChange={(e) => setDescription(e.target.value)} />
      <div className="flex gap-2">
        <button onClick={handleSave} className="px-3 py-1 bg-blue-600 text-white rounded" disabled={loading}>{loading ? 'Menyimpan...' : 'Simpan'}</button>
        <button onClick={onCancel} className="px-3 py-1 border rounded">Batal</button>
      </div>
    </div>
  );
}

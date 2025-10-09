"use client";

import React from 'react'
import { useRouter } from 'next/navigation'
import { Trash2 } from 'lucide-react';

type Props = {
  tokoId: number;
  className?: string;
  onDeleted?: (id: number) => void;
};

export default function DeleteToko({ tokoId, className = '', onDeleted }: Props) {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);

  async function handleDelete() {
    if (!confirm('Yakin ingin menghapus toko ini? Semua produk terkait akan terpengaruh.')) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/toko/${tokoId}`, { method: 'DELETE' });
      if (!res.ok) {
        const err = await res.text();
        throw new Error(err || `HTTP ${res.status}`);
      }
      // optional json body
  await res.json().catch(() => null);
      if (onDeleted) onDeleted(tokoId);
      else router.refresh();
    } catch (err) {
      console.error(err);
      alert('Gagal menghapus toko');
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
    <button
      onClick={handleDelete}
      disabled={loading}
      className={`text-red-600 hover:text-red-800 transition ${className} cursor-pointer`}
      aria-label="Hapus toko"
      title="Hapus toko"
    >
      <Trash2 className={`w-5 h-5 ${loading ? "opacity-50" : ""}`} />
    </button>
    </>
  )
}





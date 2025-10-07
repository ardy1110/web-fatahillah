'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface Product {
  id: number
  name: string
  price: number
  description?: string | null
  image?: string | null
}

interface Toko {
  id: number
  name: string
  categories?: string
  products?: Product[]
}

export default function Menu() {
  const [tokoList, setTokoList] = useState<Toko[]>([])
  const [selectedToko, setSelectedToko] = useState<Toko | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let mounted = true
    async function fetchToko() {
      try {
        setLoading(true)
        const res = await fetch('/api/toko')
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const data: Toko[] = await res.json()
        if (!mounted) return
        setTokoList(data)
        setSelectedToko(data[0] ?? null)
      } catch (rawErr) {
        const err = rawErr as Error | undefined | null
        console.error(err)
        setError(err?.message ?? 'Gagal memuat data')
      } finally {
        if (mounted) setLoading(false)
      }
    }
    fetchToko()
    return () => { mounted = false }
  }, [])

  if (loading) return <div className="p-8">Memuat toko...</div>
  if (error) return <div className="p-8 text-red-600">{error}</div>

  return (
    <section className="flex flex-col md:flex-row min-h-screen bg-[#faf6f2]">
      {/* Sidebar */}
      <aside className="w-full md:w-1/4 bg-white border-r border-gray-200 py-18 px-6">
   
        <ul className="space-y-3">
          {tokoList.map((toko) => (
            <li key={toko.id}>
              <button
                onClick={() => setSelectedToko(toko)}
                className={`w-full text-left px-4 py-3 rounded-lg transition ${
                  selectedToko?.id === toko.id
                    ? 'bg-[#d4a373] text-white font-semibold'
                    : 'hover:bg-[#f1e7dd] text-gray-800'
                }`}
              >
                {toko.name}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Konten Menu */}
      <main className="flex-1 p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 py-3">
          {selectedToko?.name ?? 'Pilih toko'}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {selectedToko?.products && selectedToko.products.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:-translate-y-1 hover:shadow-xl transition"
            >
              <div className="relative w-full h-48">
                <Image
                  src={p.image ?? '/bg.jpg'}
                  alt={p.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900">{p.name}</h3>
                <p className="text-[#d4a373] font-bold mt-1">Rp {p.price}</p>
                <p className="text-gray-600 text-sm mt-2">{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </section>
  )
}

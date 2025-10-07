'use client'

import { useState } from 'react'
import Image from 'next/image'

interface MenuItem {
  name: string
  price: string
  description: string
  image: string
}

interface Toko {
  name: string
  menus: MenuItem[]
}

export default function Menu() {
  const tokoList: Toko[] = [
    {
      name: 'Kopi Kenangan',
      menus: [
        {
          name: 'Es Kopi Kenangan Mantan',
          price: '25K',
          description: 'Perpaduan espresso, susu, dan gula aren khas Kenangan.',
          image: '/kopi-kenangan.jpg',
        },
        {
          name: 'Latte Aren',
          price: '28K',
          description: 'Kopi latte lembut dengan sentuhan manis gula aren.',
          image: '/latte-aren.jpg',
        },
      ],
    },
    {
      name: 'Janji Jiwa',
      menus: [
        {
          name: 'Kopi Susu Jiwa Toast',
          price: '27K',
          description: 'Racikan kopi susu khas Janji Jiwa dengan cita rasa manis gurih.',
          image: '/kopi-jiwa.jpg',
        },
        {
          name: 'Hazelnut Latte',
          price: '30K',
          description: 'Latte dengan aroma kacang hazelnut yang lembut.',
          image: '/hazelnut-latte.jpg',
        },
      ],
    },
    {
      name: 'Starbucks',
      menus: [
        {
          name: 'Caramel Macchiato',
          price: '45K',
          description: 'Kopi espresso dengan sirup vanila dan saus karamel.',
          image: '/caramel-macchiato.jpg',
        },
        {
          name: 'Cold Brew',
          price: '40K',
          description: 'Kopi seduh dingin dengan rasa halus dan seimbang.',
          image: '/cold-brew.jpg',
        },
      ],
    },
  ]

  const [selectedToko, setSelectedToko] = useState<Toko>(tokoList[0])

  return (
    <section className="flex flex-col md:flex-row min-h-screen bg-[#faf6f2]">
      {/* Sidebar */}
      <aside className="w-full md:w-1/4 bg-white border-r border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center md:text-left">
          Pilih Toko
        </h2>
        <ul className="space-y-3">
          {tokoList.map((toko) => (
            <li key={toko.name}>
              <button
                onClick={() => setSelectedToko(toko)}
                className={`w-full text-left px-4 py-3 rounded-lg transition ${
                  selectedToko.name === toko.name
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
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          {selectedToko.name}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {selectedToko.menus.map((menu, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:-translate-y-1 hover:shadow-xl transition"
            >
              <div className="relative w-full h-48">
                <Image
                  src={menu.image}
                  alt={menu.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900">
                  {menu.name}
                </h3>
                <p className="text-[#d4a373] font-bold mt-1">{menu.price}</p>
                <p className="text-gray-600 text-sm mt-2">
                  {menu.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </section>
  )
}

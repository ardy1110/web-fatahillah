'use client'

import Image from 'next/image'

export default function Landing() {
  return (
    <main className="relative h-screen w-full overflow-hidden font-sans">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/bg.jpg" // ganti dengan path gambar kamu
          alt="Coffee Shop Background"
          fill
          className="object-cover"
          priority
        />
       
      </div>

      {/* Content */}
      <section className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <div className="mb-2 text-sm tracking-[0.3em] uppercase text-[#d4a373]">Craft</div>
        <h1 className="text-6xl md:text-7xl font-extrabold mb-4 font-serif">Coffee</h1>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">COFFEE SERVED RIGHT</h2>
        <p className="max-w-md text-gray-200 mb-8">
          Lorem ipsum dolor sit amet, nec ne officiis electrarm. Dolore nominati vim et.
        </p>
        <div className="flex space-x-4">
          <button className="border border-white px-6 py-2 text-sm font-semibold hover:bg-white hover:text-black transition">
            READ MORE
          </button>
          <button className="bg-[#d4a373] px-6 py-2 text-sm font-semibold hover:bg-[#c39363] transition">
            READ MORE
          </button>
        </div>
      </section>
    </main>
  )
}

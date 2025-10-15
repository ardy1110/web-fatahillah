"use client";

import Image from "next/image";

export default function Landing() {
  return (
    <main className="relative h-dvh">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/bg.jpg" 
          alt="Warkop Background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Content */}
      <section className="relative z-10 flex flex-col items-start justify-center h-full text-center text-white px-4">
        <div>
          <div className="mb-2 text-sm tracking-[0.3em] uppercase text-[#d4a373]">
            Craft
          </div>
          <h1 className="text-6xl md:text-7xl font-extrabold mb-4 font-serif">
            Coffee
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            COFFEE SERVED RIGHT
          </h2>
          <p className="max-w-md text-gray-200 mb-8">
            Lorem ipsum dolor sit amet, nec ne officiis electrarm. Dolore
            nominati vim et.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="border border-white px-6 py-2 rounded text-sm font-semibold hover:bg-white hover:text-black transition">
              READ MORE
            </button>
            <button className="bg-[tomato] px-6 py-2 rounded text-sm font-semibold hover:bg-[#c39363] transition">
              READ MORE
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

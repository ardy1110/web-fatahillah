'use client'
import { useState } from 'react'
import Image from "next/image"

export default function About() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const cards = [
    {
      image: "/taman.jpg",
      title: "Taman Bermain",
      description: "Taman bermain di Warkop Fatahillah jadi tempat favorit keluarga dan anak-anak untuk bersantai sambil menikmati suasana. Didesain dengan area bermain yang aman dan nyaman, anak-anak bisa bebas bermain ayunan, perosotan, dan berbagai permainan ringan lainnya. Sambil itu, orang tua bisa menikmati kopi dan jajanan khas Warkop Fatahillah dengan pemandangan hijau yang menenangkan. Tempat ini cocok buat nongkrong santai, kumpul keluarga, atau sekadar melepas penat di sore hari."
    },
    {
      image: "/warkop.jpg",
      title: "Suasana Warkop Fatahillah",
      description: "Bagian dalam Warkop Fatahillah dirancang untuk menciptakan suasana yang hangat dan nyaman bagi pengunjung. Interiornya memadukan warna dengan pencahayaan lembut, menciptakan nuansa klasik khas warung kopi tradisional namun tetap modern. Setiap sudut memiliki sentuhan dekorasi unik yang menambah kesan hangat dan bersahabat. Tempat ini menjadi pilihan ideal untuk menikmati kopi, berdiskusi ringan, atau sekadar beristirahat dari kesibukan harian."
    },
    {
      image: "/makanan.jpg",
      title: "Aneka Makanan",
      description: "Di Warkop Fatahillah, kamu nggak cuma bisa nikmatin kopi yang nikmat, tapi juga berbagai macam makanan yang bikin kenyang dan puas! Mulai dari camilan ringan seperti gorengan hangat dan roti bakar, sampai hidangan berat seperti nasi goreng, mie rebus, dan aneka lauk khas rumahan. Setiap sajian dibuat dengan bahan segar dan rasa yang autentik — cocok buat nemenin ngobrol santai, kerja, atau kumpul bareng teman."
    }
  ]

  return (
    <section
      id="tentang"
      className="relative flex flex-col items-center justify-center max-w-6xl mx-auto px-6 md:px-12 py-20 scroll-mt-6"
    >
      <div className="w-full md:w-1/2 md:pl-12 mt-8 md:mt-0 text-center">
        <h2 className="text-4xl font-bold text-black mb-4">
          TENTANG KAMI
        </h2>
        <p className="text-gray-700 dark:text-black leading-relaxed mb-6">
          Kami adalah kedai kopi yang berkomitmen menyajikan cita rasa terbaik
          dari biji kopi pilihan. Setiap cangkir kami seduh dengan penuh
          ketelitian dan cinta, menciptakan pengalaman hangat yang tak
          terlupakan untuk setiap pelanggan.
        </p>
        <p className="text-gray-700 dark:text-black leading-relaxed mb-6">
          Dengan suasana yang nyaman dan aroma kopi yang menggoda, kami ingin
          menjadi tempat favorit untuk bersantai, bekerja, atau sekadar
          menikmati waktu bersama teman.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 w-full">
        {cards.map((card, index) => {
          const isExpanded = expandedCard === index
          const shortText = card.description.slice(0, 150) + '...'
          
          return (
            <div key={index} className="bg-white shadow-lg rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-xl transition duration-300">
              <div className="relative w-full h-56">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2 text-[#d4a373]">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {isExpanded ? card.description : shortText}
                </p>
                <button
                  onClick={() => setExpandedCard(isExpanded ? null : index)}
                  className="mt-3 text-[#d4a373] font-medium text-sm hover:underline focus:outline-none cursor-pointer"
                >
                  {isExpanded ? 'Lebih Sedikit' : 'Baca Selengkapnya'}
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
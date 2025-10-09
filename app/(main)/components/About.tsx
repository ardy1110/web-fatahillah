'use client'
import Image from "next/image";

export default function About() {
  return (
    <section
      id="tentang"
      className="relative flex flex-col items-center justify-center  max-w-6xl mx-auto px-6 md:px-12 py-20">
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
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-xl transition duration-300">
          <div className="relative w-full h-56">
            <Image
              src="/iconBgWhite.jpeg" // ganti sesuai gambar di /public
              alt="Biji Kopi Pilihan"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6 text-center">
            <h3 className="text-xl font-semibold mb-2 text-[#d4a373]">
              Biji Kopi Pilihan
            </h3>
            <p className="text-gray-600 text-sm">
              Kami hanya menggunakan biji kopi terbaik dari petani lokal untuk
              menjamin cita rasa yang autentik di setiap tegukan.
            </p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-xl transition duration-300">
          <div className="relative w-full h-56">
            <Image
              src="/iconBgWhite.jpeg" // ganti sesuai gambar di /public
              alt="Biji Kopi Pilihan"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6 text-center">
            <h3 className="text-xl font-semibold mb-2 text-[#d4a373]">
              Biji Kopi Pilihan
            </h3>
            <p className="text-gray-600 text-sm">
              Kami hanya menggunakan biji kopi terbaik dari petani lokal untuk
              menjamin cita rasa yang autentik di setiap tegukan.
            </p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-xl transition duration-300">
          <div className="relative w-full h-56">
            <Image
              src="/iconBgWhite.jpeg"// ganti sesuai gambar di /public
              alt="Biji Kopi Pilihan"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6 text-center">
            <h3 className="text-xl font-semibold mb-2 text-[#d4a373]">
              Biji Kopi Pilihan
            </h3>
            <p className="text-gray-600 text-sm">
              Kami hanya menggunakan biji kopi terbaik dari petani lokal untuk
              menjamin cita rasa yang autentik di setiap tegukan.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

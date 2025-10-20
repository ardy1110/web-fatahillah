"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Landing() {
  const scrollToAbout = () => {
    const element = document.getElementById("tentang");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <main className="relative h-dvh overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/bg.jpg"
          alt="Warkop Fatahillah Background"
          fill
          priority
          className="object-cover brightness-75"
        />
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <section className="relative z-10 flex flex-col items-start justify-end md:justify-center h-full px-6 pb-7 md:px-20 text-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <h1 className="text-2xl md:text-5xl font-extrabold mb-4 leading-tight font-serif text-[#f8f4f0]">
            Kopi Enak, <br /> Suasana Asik!
          </h1>
          <h2 className="text-sm md:text-2xl font-medium text-[#e8c39e] mb-6">
            Kopi Nikmat, Maknan Enak, Harga Bersahabat!
          </h2>
          <p className="text-gray-200 text-sm md:text-lg mb-10 leading-relaxed">
            Dari pagi sampai malam, Warkop Fatahillah selalu siap nyajikan cita
            rasa kopi dan makanan yang bikin balik lagi.
          </p>

          <div className="flex space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => {
                const element = document.getElementById("lokasi");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="border border-[#f8f4f0] px-5 py-2 md:px-8 md:py-3 rounded-full text-sm font-semibold hover:bg-[#f8f4f0] hover:text-black transition cursor-pointer"
            >
              Lokasi Kami
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={scrollToAbout}
              className="bg-[#d86b33] px-5 py-2 md:px-8 md:py-3 rounded-full text-sm font-semibold hover:bg-[#b85624] transition cursor-pointer"
            >
              Tentang Kami
            </motion.button>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

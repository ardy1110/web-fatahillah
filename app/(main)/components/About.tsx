'use client'


export default function About() {
  return (
    <section
      id="tentang"
      className="relative flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto px-6 md:px-12 py-20"
    >
      <div className="w-full md:w-1/2 md:pl-12 mt-8 md:mt-0 text-center md:text-left">
        <h2 className="text-4xl font-bold text-black mb-4">
          TENTANG KAMI
        </h2>
        <p className="text-gray-700 dark:text-black leading-relaxed mb-6">
          Kami adalah kedai kopi yang berkomitmen menyajikan cita rasa terbaik
          dari biji kopi pilihan. Setiap cangkir kami seduh dengan penuh
          ketelitian dan cinta, menciptakan pengalaman hangat yang tak
          terlupakan untuk setiap pelanggan.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          Dengan suasana yang nyaman dan aroma kopi yang menggoda, kami ingin
          menjadi tempat favorit untuk bersantai, bekerja, atau sekadar
          menikmati waktu bersama teman.
        </p>
        
      </div>
    </section>
  );
}

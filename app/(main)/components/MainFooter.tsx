import Image from "next/image";
import React from "react";
import { SiFacebook, SiInstagram, SiTiktok } from "react-icons/si";

const MainFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="h-[50dvh] bg-amber-600 text-white p-10">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Kolom 1  */}
        <div>
          {/* Ganti jadi logo kita  */}
          <div className="relative w-[126] h-[39] text-lg font-bold flex items-center gap-2">
            <Image src="/wf.png" alt="Logo Footer" fill />
          </div>
          <p className="mt-3 text-sm text-gray-100">
            Your neighborhood coffee stall, serving the best coffee and snacks
            since 2005.
          </p>
          {/* Brand/Sponsor  */}
          <div className="flex gap-4 mt-4">
            <SiFacebook size={25} />
            <SiInstagram size={25} />
            <SiTiktok size={25} />
          </div>
        </div>

        {/* Kolom 2: Toko-toko Penjual*/}
        <div>
          <h3 className="text-lg font-semibold mb-3">Penjual Makanan</h3>
          <ul className="space-y-1 text-sm">
            {/* Suseaikan lagi  */}
            <li>Mie Bangladesh Costa</li>
            <li>Soto Dapur Rini</li>
            <li>Lala Kitchen</li>
            <li>Martabak Durian</li>
            <li>Minang saiyo</li>
          </ul>
        </div>

        {/* Kolom 3: Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Hubungi Kami</h3>
          <p className="text-sm">Jl. Merdeka No. 123, Jakarta</p>
          <p className="text-sm">warkopjaya@email.com</p>
          <p className="text-sm">+62 812 3456 7890</p>
        </div>

        {/* Kolom 4: Jam Buka */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Buka pada jam</h3>
          <p className="text-sm">Monday - Friday: 7 AM - 10 PM</p>
          <p className="text-sm">Saturday - Sunday: 8 AM - 11 PM</p>
        </div>
      </div>

      {/* Garis Bawah */}
      <div className="border-t mt-10 pt-4 text-center text-sm text-gray-200">
        &copy; {currentYear} Warkop Fatahillah. All rights reserved.
      </div>
    </footer>
  );
};

export default MainFooter;

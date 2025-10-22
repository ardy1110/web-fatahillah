import Image from "next/image";
import React from "react";
import { SiFacebook, SiInstagram, SiTiktok } from "react-icons/si";

const MainFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="min-h-[50dvh] bg-amber-600 text-white py-6 px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:px-32 py-2">
        {/* Kolom 1  */}
        <div>
          {/* Ganti jadi logo kita  */}
          <div className="relative w-[126] h-[39] text-lg font-bold flex items-center gap-2">
            <Image src="/wf.png" alt="Logo Footer" fill />
          </div>
          <p className="mt-3 text-sm text-gray-100">
            Kopi Nikmat, Makanan Enak, Harga Bersahabat!
          </p>
          {/* Brand/Sponsor  */}
          <div className="flex gap-4 mt-4">
            <a
              href="https://www.facebook.com/share/14LKPhRcfaM/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition"
            >
              <SiFacebook size={25} />
            </a>
            <a
              href="https://www.instagram.com/warkop_fatahillah?igsh=Z2ZiZGdxdXNqZndj"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition"
            >
              <SiInstagram size={25} />
            </a>
            <a
              href="https://www.tiktok.com/@warkop_fatahillah?_t=ZS-90hvcipGjk0&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition"
            >
              <SiTiktok size={25} />
            </a>
          </div>
        </div>

        {/* Kolom 2: Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-6">Hubungi Kami</h3>
          <p className="text-sm">
            Jl. Fatahillah Geuceu Kayee Jato, Kec. Banda Raya, Kota Banda Aceh
          </p>
          <p className="text-sm">warkopfatahillah@gmail.com</p>
          <p className="text-sm">0821-6064-4668</p>
        </div>

        {/* Kolom 3: Toko-toko Penjual*/}
        <div>
          <h3 className="text-lg font-semibold mb-6">Penjual Makanan</h3>
          <ul className="space-y-1 text-sm">
            <li>Mie Bangladesh Costa</li>
            <li>Soto Dapur Rini</li>
            <li>Lala Kitchen</li>
            <li>Martabak Durian</li>
            <li>Minang saiyo</li>
            <li>Sate Matang Bang Bass</li>
            <li>Jajanan Warkop Fatahillah</li>
            <li>Pecel Lele Abiyu</li>
          </ul>
        </div>

        {/* Kolom 4: Jam Buka */}
        <div>
          <h3 className="text-lg font-semibold mb-6">Buka</h3>
          <p className="text-sm">Setiap hari</p>
          <p className="text-sm">( 05.30 - 23.59 )</p>
          {/* <p className="text-sm">Saturday - Sunday: 8 AM - 11 PM</p> */}
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

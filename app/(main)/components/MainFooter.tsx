import Image from "next/image";
import React from "react";
import { SiFacebook, SiInstagram, SiTiktok } from "react-icons/si";

const MainFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="min-h-[50dvh] bg-amber-600 text-white p-10">
      <div className="mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Kolom 1  */}
        <div>
          {/* Ganti jadi logo kita  */}
          <div className="relative w-[126] h-[39] text-lg font-bold flex items-center gap-2">
            <Image src="/wf.png" alt="Logo Footer" fill />
          </div>
          <p className="mt-3 text-sm text-gray-100">
            Kopi Nikmat, Maknan Enak, Harga Bersahabat!
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
          <div className="text-sm grid grid-cols-2 gap-2">
            {/* Suseaikan lagi  */}
            <p>Mie Bangladesh Costa</p>
            <p>Soto Dapur Rini</p>
            <p>Lala Kitchen</p>
            <p>Martabak Durian</p>
            <p>Minang saiyo</p>
            <p>Jajanan Warkop Fatahillah</p>
            <p>Sate Matang Bang Bass</p>
            <p>Pecel Lele Abiyu</p>


            
          </div>
        </div>

        {/* Kolom 3: Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Hubungi Kami</h3>
          <p className="text-sm">Jl. Fatahillah Geuceu Kayee Jato, Kec. Banda Raya, Kota Banda Aceh</p>
          <p className="text-sm">warkopfatahillah@gmail.com</p>
          <p className="text-sm">0821-6064-4668</p>
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

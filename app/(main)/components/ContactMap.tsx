import { MapPinned, UserRoundPen } from "lucide-react";
import React from "react";

const ContactMap = () => {
  return (
    <div
      id="lokasi"
      className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch justify-between px-6 md:px-12 mb-24 scroll-mt-26"
    >
      <div className="flex flex-col justify-between">
        <div>
          <h2 className="text-center md:text-start pb-4 font-bold text-2xl">
            Kontak Kami
          </h2>
          <p className="text-center md:text-start font-normal pb-4">
            Jangan ragu untuk menghubungi kami jika Anda memiliki pertanyaan,
            saran, atau ingin melakukan pemesanan. Kami siap melayani Anda
            dengan senang hati.
          </p>
        </div>

        <div className="text-center md:text-start text-md space-y-2">
          {/* Card Kontak */}
          <div className="flex justify-center md:justify-start">
            <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-4 flex items-center gap-4 w-fit">
              <div className="bg-amber-50 p-3 rounded-full">
                <UserRoundPen className="text-amber-500" size={24} />
              </div>

              <div className="flex flex-col">
                <span className="font-medium text-gray-800">
                  warkopfatahillah@gmail.com
                </span>
                <span className="text-sm text-gray-500">0821-6064-4668</span>
              </div>
            </div>
          </div>

          {/* Card Alamat */}
          <div className="flex justify-center md:justify-start">
            <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-4 flex items-center gap-4 w-fit">
              <div className="bg-amber-50 p-3 rounded-full">
                <MapPinned className="text-amber-500" size={24} />
              </div>
              <span>
                Jl. Fatahillah Geuceu Kayee Jato, Kec. Banda Raya, Kota Banda
                Aceh
              </span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-center md:text-start pb-4 font-bold text-2xl">
          Lokasi Kami
        </h2>
        <div className="relative w-full h-[250px] rounded-2xl overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.2351077229428!2d95.30465977420894!3d5.532101994448091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30403b0003db853d%3A0x180858a4a9d2d4fa!2sWarkop%20Fatahillah!5e0!3m2!1sid!2sid!4v1759661072583!5m2!1sid!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokasi Warkop Fatahillah"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactMap;

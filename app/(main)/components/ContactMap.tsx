import React from "react";

const ContactMap = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-between h-dvh px-6 mb-24">
      <div className="flex items-center justify-center h-full bg-green-800 rounded-2xl text-3xl font-bold">
        Contact Content
      </div>
      <div>
        <h2 className="pb-4 font-bold text-2xl">Lokasi Kami</h2>
        <iframe
          className="w-full h-dvh bg-green-800 rounded-2xl"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.2351077229428!2d95.30465977420894!3d5.532101994448091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30403b0003db853d%3A0x180858a4a9d2d4fa!2sWarkop%20Fatahillah!5e0!3m2!1sid!2sid!4v1759661072583!5m2!1sid!2sid"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactMap;

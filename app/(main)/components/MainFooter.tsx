import React from "react";

const MainFooter = () => {
  return (
    <footer className="h-[50dvh] bg-amber-600 text-white p-2">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-1.5">
        <div>
          <h1>Fatahillah Warkop</h1>
          <p>Kopi nikmat, makanan enak, harga bersahabat</p>
          
        </div>
        <div>
          <h1>Toko</h1>
        </div>
        <div>
          <h1>Contact Us</h1>
        </div>
        <div>
          <h1>Buka Saat</h1>
        </div>
      </div>
      <div className="border-t-2"></div>
    </footer>
  );
};

export default MainFooter;

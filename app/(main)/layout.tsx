import React from "react";
import ButtonMenu from "./components/ButtonMenu";

export default function mainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col gap-12">
      {/* Navbar  */}
      <nav className="fixed py-5 px-10 top-0 left-0 w-full z-50 bg-transparent text-white">
        <div className="flex justify-between">
          {/* Bagian kiri */}
          <h1 className="text-2xl font-bold">☕ LOGO</h1>
          {/* Bagian kanan */}
          <ButtonMenu />
        </div>
      </nav>
      {children}
      {/* Footer  */}
      <footer className="flex items-center justify-center h-[50dvh] bg-black text-white text-3xl">
        Footer Content
      </footer>
    </main>
  );
}

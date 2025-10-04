import React from "react";

export default function mainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <nav className="flex items-center justify-between p-6 m-2 rounded-2xl bg-white ">
        {/* Bagian kiri */}
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-bold">☕ LOGO</h1>
        </div>

        {/* Bagian kanan */}
        <div className="flex items-center space-x-4">
          <button className="px-4 py-1 border rounded-lg bg-[tomato] text-white">
            Menu
          </button>
        </div>
      </nav>
      {children}
    </main>
  );
}

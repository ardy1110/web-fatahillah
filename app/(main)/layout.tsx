import React from "react";
import MainNavBar from "./components/MainNavBar";

export default function mainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col gap-12">
      {/* Navbar  */}
      <MainNavBar />
      {children}
      {/* Footer  */}
      <footer className="flex items-center justify-center h-[50dvh] bg-black text-white text-3xl">
        Footer Content
      </footer>
    </main>
  );
}

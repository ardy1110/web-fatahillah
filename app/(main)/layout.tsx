import React from "react";
import MainNavBar from "./components/MainNavBar";
import MainFooter from "./components/MainFooter";

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
      <MainFooter />
    </main>
  );
}

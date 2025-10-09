import Sidebar from "@/app/admin/components/sidebar";
import React from "react";

export default function adminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      {children}
    </div>
  );
}

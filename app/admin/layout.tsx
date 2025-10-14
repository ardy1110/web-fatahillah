import { Toaster } from "sonner";
import SidebarAdmin from "./components/Sidebar";

export default function adminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <SidebarAdmin />
      {children}
      <Toaster richColors position="top-right" />
    </div>
  );
}

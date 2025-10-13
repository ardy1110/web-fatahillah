import { redirect } from "next/navigation";

export default async function AdminPage() {
  const res = await fetch("http://localhost:3000/api/store", {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch stores");

  const stores = await res.json();

  if (stores.length > 0) {
    redirect(`/admin/${stores[0].id}`);
  }

  return <div>Belum ada toko</div>;
}

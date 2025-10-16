import MenuClient from "./MenuClient";

export default async function PageMenu() {
  // ✅ Fetch data di server
  const res = await fetch("http://localhost:3000/api/store");

  if (!res.ok) {
    throw new Error("Gagal memuat data toko");
  }

  const tokoList = await res.json();

  // ✅ Kirim ke komponen client
  return <MenuClient tokoList={tokoList} />;
}

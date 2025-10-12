import Image from "next/image";
import Link from "next/link";

// Tambahkan type untuk array
interface Store {
  id: number;
  name: string;
}

export default async function Admin() {
  const res = await fetch("http://localhost:3000/api/store", {
    // cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch");
  }

  const datas: Store[] = await res.json();

  return (
    <main className="flex-1 px-36 py-12">
      <h1 className="flex justify-center font-bold text-2xl pb-12">
        Dashboard
      </h1>
      <div className="grid grid-cols-3 gap-12 w-full">
        {datas.map((data) => (
          <Link
            key={data.id}
            href={`/admin/${data.id}`}
            className="relative h-36"
          >
            <Image
              src="/IconBlack.jpeg"
              alt="Logo Toko"
              fill
              className="object-cover rounded-xl"
            />
          </Link>
        ))}
      </div>
    </main>
  );
}

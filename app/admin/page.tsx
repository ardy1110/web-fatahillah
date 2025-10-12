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
    <>
      <div>Admin</div>
      <ul>
        {datas.map((data) => (
          <li key={data.id}>
            <Link href={`/admin/${data.id}`}>{data.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

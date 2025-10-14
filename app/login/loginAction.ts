"use server";

import { redirect } from "next/navigation";

export async function loginAction(formData: FormData) {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  const res = await fetch("http://localhost:3000/api/user", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  const data = await res.json();
  console.log("API Response:", data);

  if (!res.ok) {
    throw new Error("Login gagal");
  }

  // const cookieStore = await cookies();
  // cookieStore.set("admin_token", "your-secure-token", {
  //   path: "/",
  //   httpOnly: true,
  //   sameSite: "lax",
  // });
  const storeRes = await fetch("http://localhost:3000/api/store", {});

  const stores = await storeRes.json();

  if (stores.length > 0) {
    redirect(`/admin/${stores[0].id}`);
  }

  redirect("/admin");
}

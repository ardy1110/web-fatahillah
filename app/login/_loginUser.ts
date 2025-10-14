// "use server";

// export async function loginUser(username: string, password: string) {
//   try {
//     const res = await fetch(`http://localhost:3000/api/user`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ username, password }),
//       cache: "no-store", // pastikan tidak di-cache
//     });

//     const data = await res.json();

//     if (!res.ok) {
//       throw new Error(data.error || "Login gagal");
//     }

//     // set cookie / session di sini nanti
//     console.log("Login sukses:", data);

//     return data;
//   } catch (err) {
//     if (err instanceof Error) {
//       throw new Error(err.message || "Terjadi kesalahan saat login");
//     }
//     throw new Error("Terjadi kesalahan tidak dikenal saat login");
//   }
// }

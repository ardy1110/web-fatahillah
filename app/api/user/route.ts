import { NextResponse, NextRequest } from "next/server";
import { prisma } from "../../../lib/prisma"; // pastikan file ini sudah ada

// GET /api/users → ambil semua user
export async function GET() {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        username: true,
        // password tidak dikembalikan demi keamanan
      },
      orderBy: {
        id: "asc",
      },
    });

    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { message: "Gagal mengambil data user" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { username, password } = body;

  const user = await prisma.user.findUnique({
    where: { username },
  });

  if (!user || user.password !== password) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  // Simpel: simpan session di cookie
  const res = NextResponse.json({ message: "Login success" });
  res.cookies.set("admin_token", "logged_in", { httpOnly: true });
  return res;
}

import { NextResponse } from "next/server";
import { prisma } from "../../lib/prisma"; // pastikan file ini sudah ada

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

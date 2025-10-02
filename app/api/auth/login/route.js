import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export async function GET() {
  try {
    const users = await prisma.user.findMany();
    return NextResponse.json(users);  // kirim data beneran
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req) {
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


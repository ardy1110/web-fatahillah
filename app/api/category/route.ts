import { NextResponse } from "next/server";
import {prisma} from '@/lib/prisma'


export async function GET() {
  try {
    const categories = await prisma.category.findMany({
      include: { store: true, products: true },
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(categories);
  } catch (error) {
    console.error("❌ Error get categories:", error);
    return NextResponse.json({ error: "Gagal mengambil kategori" }, { status: 500 });
  }
}


export async function POST(req: Request) {
  try {
    const { name, storeId } = await req.json();

    if (!name || !storeId)
      return NextResponse.json({ error: "Nama dan storeId wajib diisi" }, { status: 400 });

    const newCategory = await prisma.category.create({
      data: { name, storeId },
    });

    return NextResponse.json(newCategory);
  } catch (error) {
    console.error("❌ Error create category:", error);
    return NextResponse.json({ error: "Gagal membuat kategori" }, { status: 500 });
  }
}

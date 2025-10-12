import { NextResponse } from "next/server";
import {prisma} from '@/app/lib/prisma'

// ✅ GET semua produk
export async function GET() {
  try {
    const products = await prisma.product.findMany({
      include: {
        store: true,
        category: true,
      },
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(products);
  } catch (error) {
    console.error("❌ Error get products:", error);
    return NextResponse.json({ error: "Gagal mengambil produk" }, { status: 500 });
  }
}

// ✅ POST tambah produk baru
export async function POST(req: Request) {
  try {
    const { name, price, storeId, categoryId, description, imageUrl } = await req.json();

    if (!name || !price || !storeId)
      return NextResponse.json(
        { error: "Nama, harga, dan storeId wajib diisi" },
        { status: 400 }
      );

    const newProduct = await prisma.product.create({
      data: {
        name,
        price,
        description,
        imageUrl,
        storeId,
        categoryId: categoryId || null,
      },
    });

    return NextResponse.json(newProduct);
  } catch (error) {
    console.error("❌ Error create product:", error);
    return NextResponse.json({ error: "Gagal membuat produk" }, { status: 500 });
  }
}

import { NextResponse } from "next/server";
import prisma from "../prisma";

export async function GET() {
  try {
    const product = await prisma.product.findMany({
      include: {
        toko: true,
      },
    });
    return NextResponse.json(product);
  } catch (e) {
    return NextResponse.json({ message: e.message });
  }
}

export async function POST(req) {
  try {
    const { name, description, price, tokoId } = await req.json();
    const newProduct = await prisma.product.create({
      data: {
        name,
        description,
        price,
        tokoId,
      },
    });
    return NextResponse.json(newProduct);
  } catch (e) {
    return NextResponse.json({ message: e.message });
  }
}

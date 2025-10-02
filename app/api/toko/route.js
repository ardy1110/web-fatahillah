import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
    const toko = await prisma.toko.findMany({
        include: {products: true}
    })
    return NextResponse.json(toko)
}

export async function POST(req){
    const {name, categories} = await req.json()
    const newToko = await prisma.toko.create({
        data: {
            name,
            categories
        }
    })
    return NextResponse.json(newToko)
}
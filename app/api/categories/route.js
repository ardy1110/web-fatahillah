import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
    const categories = await prisma.category.findMany({
        include: {products: true}
    })
    return NextResponse.json(categories)
}

export async function POST(req){
    const {name, description} = await req.json()
    const newCategory = await prisma.category.create({
        data: {
            name,
            description
        }
    })
    return NextResponse.json(newCategory)
}
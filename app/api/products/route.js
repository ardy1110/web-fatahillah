import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient()

export async function GET() {
    try {
        const product = await prisma.product.findMany({
            include: {
                category: true
            }
        })
        return NextResponse.json(product)
    } catch (e) {
        return NextResponse.json({message: e.message})
    }
}

export async function POST(req) {
    try {
        const {name, description, price, categoryId} = await req.json()
        const newProduct = await prisma.product.create({
            data: {
                name,
                description,
                price,
                categoryId
            }
        })
        return NextResponse.json(newProduct)
    } catch (e) {
        return NextResponse.json({message: e.message})
    }
}


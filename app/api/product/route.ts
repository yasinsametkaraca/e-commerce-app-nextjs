import {getCurrentUser} from "@/app/actions/getCurrentUser";
import {NextResponse} from "next/server";
import prisma from "@/libs/prismadb";


export async function POST(request: Request) {  // bir ürün eklemek için kullanılacak. Ürünü ekleyen kullanıcı admin ve giriş yapmış olmalı.

    const currentUser = await getCurrentUser();
    if (!currentUser) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    if (currentUser.role !== "ADMIN") {
        return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const body = await request.json();
    const {name, price, brand, category, image, description, inStock} = body;

    const product = await prisma.product.create({
        data: {
            name,
            price: parseFloat(price),
            brand,
            category,
            image,
            description,
            inStock,
            userId: currentUser.id
        }
    })

    return NextResponse.json({ message: "Product added successfully", data: product});
}
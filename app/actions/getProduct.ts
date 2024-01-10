import prisma from "@/libs/prismadb";

interface IProductParams {
    productId: string
}

export default async function getProduct(params: IProductParams) {
    const {productId} = params

    try {
        const product = await prisma.product.findUnique({
            where: {
                id: productId
            },
            include: {
                reviews: {
                    include: {
                        user: true
                    },
                    orderBy: {
                        createdAt: 'desc'
                    }
                }
            }
        })
        if (!product)
            return null
        return product
    } catch (e: any) {
        throw new Error(e)
    }
}
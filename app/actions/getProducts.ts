import prisma from "@/libs/prismadb";

export interface IProductParams {
    category?: string | null
    search?: string | null
}

export default async function getProducts(params: IProductParams) {
    const {category, search} = params
    let searchString = search
    if (searchString) searchString = searchString.toLowerCase(); else searchString = "";

    let query: any = {}
    if (category) query.category = category

    try {
        const products = await prisma.product.findMany({
            where: {
                ...query,
                OR: [
                    {
                        name: {
                            contains: searchString,
                            mode: 'insensitive'
                        }
                    },
                    {
                        description: {
                            contains: searchString,
                            mode: 'insensitive'
                        }
                    }
                ]
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
        return products
    } catch (e: any) {
        throw new Error(e)
    }
}
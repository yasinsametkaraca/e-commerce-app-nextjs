//bütün sayfalarda import ederek kullanacağımız fonksiyonlarımızı action altına tanımladım.

import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";
import prisma from "@/libs/prismadb";

export async function getSession() {
    return await getServerSession(authOptions)
}

export async function getCurrentUser() {
    try {
        const session = await getSession();

        if (!session?.user?.email)
            return null

        const currentUser = await prisma.user.findUnique({
            where: {
                email: session?.user?.email
            }
        })
        if (!currentUser)
            return null

        return {
            ...currentUser,
            hashedPassword: undefined,
            createdAt: currentUser.createdAt.toISOString(),
            updatedAt: currentUser.updatedAt.toISOString(),
            emailVerified: currentUser.emailVerified?.toISOString() || null,
        }

    } catch (e: any) {
        return null
    }
}
import { PrismaClient } from "@prisma/client";

declare global {
    var prisma: PrismaClient | undefined;
}

const client = globalThis.prisma || new PrismaClient();  // önceki prisma nesnesi varsa onu kullan, yoksa yeni bir nesne oluştur

if (process.env.NODE_ENV !== "production") globalThis.prisma = client;  // geliştirme ortamında global prisma nesnesini oluştur

export default client;
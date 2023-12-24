import NextAuth, {AuthOptions} from "next-auth"
import GoogleProvider from "next-auth/providers/google"
// import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "@/libs/prismadb";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcrypt';


export const authOptions: AuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "credentials",
            // `credentials` is used to generate a form on the sign in page.
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                email: { label: "Email", type: "text" },
                password: {  label: "Password", type: "password" }
            },
            async authorize(credentials, req) {  // email ve password ile giriş yapılacak ise burası kullanılacak
                if(!credentials?.email || !credentials.password) {  // credentials kullanıcıdan gelen bilgileri tutuyor (login olurken)
                    throw new Error("Email and Password must be provided");
                }
                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email,
                    }
                })
                if(!user || !user.hashedPassword) {
                    throw new Error("User not found");
                }
                const comparePassword = await bcrypt.compare(credentials.password, user.hashedPassword);
                if(!comparePassword) {
                    throw new Error("Incorrect Password");
                }
                return user;
            }
        })
    ],
    pages: {
        signIn: "/login",
    },
    debug: process.env.NODE_ENV === "development",  // development ortamında çalışıyorsa debug modu açık olacak
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
}

export default NextAuth(authOptions)
import bcrypt from "bcrypt";
import prisma from "@/libs/prismadb";
import {NextResponse} from "next/server";  //for creating user

export async function POST(request: Request) {
    const { email, password, name } = await request.json();

    const hashedPassword = await bcrypt.hash(password, 10); // second parameter is salt. Salt is a random string that is added to the password before hashing. This makes it harder for hackers to crack passwords using rainbow tables. The salt is stored with the hashed password, so when a user tries to log in, the salt is retrieved and added to the password before hashing it. This way, the hashed password is always different, even if the user has the same password as another user.
    const user = await prisma.user.create({
        data: {
            email,
            hashedPassword,
            name,
        }
    })
    return NextResponse.json(user)
}


"use client"
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/navigation";

const Logo = () => {
    const router = useRouter()

    return (
        <>
            <Image
                onClick={() => router.push("/")}
                className="cursor-pointer"
                src="/ysk.png"
                alt="ysk logo"
                width={75}
                height={50}
            />
        </>
    )
}
export default Logo

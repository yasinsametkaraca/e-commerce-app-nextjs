"use client"
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/navigation";

const Logo = () => {
    const router = useRouter()

    return (
        <>
            <Link href="/">
                <Image
                    className="cursor-pointer"
                    src="/ysk.png"
                    alt="ysk logo"
                    width={75}
                    height={50}
                />
            </Link>
        </>
    )
}
export default Logo

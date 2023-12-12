"use client"
import { PiBasketFill } from "react-icons/pi";
import useCart from "@/hooks/useCart";
import {useRouter} from "next/navigation";

const CardCount = () => {
    const {cartProducts} = useCart()
    const router = useRouter()

    return (
        <div className='hidden md:flex relative cursor-pointer' onClick={() => router.push("/cart")}>
            <PiBasketFill size={25} />
            {cartProducts &&
                <div className='absolute -top-1 -right-2 w-4 h-4 bg-orange-900 flex items-center justify-center rounded-full text-slate-50 text-xs'>{cartProducts?.length}</div>
            }
        </div>
    )
}

export default CardCount

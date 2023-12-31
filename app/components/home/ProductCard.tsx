"use client"
import React from 'react'
import Image from "next/image";
import {Rating} from "@mui/material";
import {textClip} from "@/utils/TextClip";
import {useRouter} from "next/navigation";

const ProductCard = ({product}: {product: any}) => {
    const router = useRouter()

    let productRating = product?.reviews?.reduce((acc: number, item: any) => acc + item.rating, 0) / product?.reviews?.length //  average of rating all comments
    return (
        <div onClick={() => router.push(`/product/${product?.id}`)} className="w-[260px] shadow-lg p-2 rounded-md cursor-pointer flex flex-col">
            <div className="relative h-[150px]">
                <Image src={product.image} alt={product.name} fill className="object-contain" />
            </div>
            <div className="space-y-1 text-center">
                <div className="text-slate-500 text-sm md:text-lg text-center mt-2">
                    {textClip(product.name)}
                </div>
                <Rating name="read-only" value={productRating} readOnly />
                <div className="text-orange-500 text-lg font-medium md:text-xlg text-center mt-2">
                    {product.price} $
                </div>
            </div>

        </div>
    )
}
export default ProductCard

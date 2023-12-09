"use client"
import PageContainer from "@/app/components/containers/PageContainer";
import Image from "next/image";

const ProductDetailClient = ({product} : {product: any}) => {

    return (
        <PageContainer>
            <div className="block md:flex justify-center gap-10">
                <div className="relative h-[400px] md:w-[400px] ">
                    <Image src={product?.image} alt={product?.name} fill />
                </div>
                <div className="md:w-1/2 space-y-3">
                    <div className="text-2xl md:text-3xl font-medium text-slate-800">
                        {product?.name}
                    </div>
                    <div className="text-lg text-slate-500">
                        {product?.description}
                    </div>
                    <div className="text-lg text-orange-500 font-medium">
                        {product?.price} $
                    </div>
                    <div className="text-lg text-slate-500">
                        {product?.category}
                    </div>
                    <div className="text-lg text-slate-500">
                        {product?.brand}
                    </div>
                    <div className="text-lg text-slate-500">
                        {product?.countInStock} in stock
                    </div>

                </div>
            </div>
        </PageContainer>
    )
}
export default ProductDetailClient

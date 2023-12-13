"use client"
import PageContainer from "@/app/components/containers/PageContainer";
import useCart from "@/hooks/useCart";
import Image from "next/image";
import Button from "@/app/components/general/Button";
import {CartProductProps} from "@/app/components/product/ProductDetailClient";
import Counter from "@/app/components/general/Counter";
import { CiCircleRemove } from "react-icons/ci";

const CartClient = () => {
    const {cartProducts, increaseQuantity, decreaseQuantity, deleteProductFromCart, removeAllCart} = useCart()

    if (!cartProducts || cartProducts.length == 0) return (
        <PageContainer>
            <div className="text-lg text-slate-500">Cart is empty</div>
        </PageContainer>
    )

    return (
        <PageContainer>
            <div className="flex items-center gap-3 font-medium text-lg max-sm:text-xs text-center border-b py-3">
                <div className="w-1/5">Product Image</div>
                <div className="w-1/5">Product Name</div>
                <div className="w-1/5">Product Price</div>
                <div className="w-1/5">Product Quantity</div>
                <div className="w-1/5"></div>
            </div>
            <div>
                {
                    cartProducts?.map((product: any) => (
                        <div key={product?.id} className="flex items-center gap-3 text-center justify-between my-5">
                            <div className="w-1/5 flex items-center justify-center">
                                <Image src={product?.image} alt={product?.name} width={100} height={100} />
                            </div>
                            <div className="w-1/5">{product?.name}</div>
                            <div className="w-1/5 text-orange-600">{product?.price} $</div>
                            <div className="w-1/5 flex justify-center">
                                <Counter cartProduct={product} increaseFunc={() => increaseQuantity(product)} decreaseFunc={() => decreaseQuantity(product)} />
                            </div>
                            <div className="w-1/5">
                                <CiCircleRemove size={32} className="cursor-pointer" onClick={() => deleteProductFromCart(product.id)}/>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="flex items-center justify-between my-5 py-5 border-t">
                <button onClick={() => removeAllCart()} className="underline hover:text-slate-600">Delete Cart</button>
                <div className="text-lg md:text-2xl text-orange-500 font-bold">
                    Total: {cartProducts?.reduce((acc: any, curr: CartProductProps) => acc + curr?.price * curr?.quantity, 0).toFixed(2)} $
                </div>
            </div>
        </PageContainer>
    )
}
export default CartClient

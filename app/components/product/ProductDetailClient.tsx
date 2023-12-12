"use client"
import PageContainer from "@/app/components/containers/PageContainer";
import Image from "next/image";
import Counter from "@/app/components/general/Counter";
import {useEffect, useState} from "react";
import {Rating} from "@mui/material";
import Button from "@/app/components/general/Button";
import Comment from "@/app/components/comment/Comment";
import Heading from "@/app/components/general/Heading";
import useCart from "@/hooks/useCart";

export type CartProductProps = {
    id: string
    name: string
    description: string
    price: number
    image: string
    quantity: number
    inStock: boolean
}

const ProductDetailClient = ({product} : {product: any}) => {

    const {productCartQuantity, addProductToCart, cartProducts} = useCart()
    const [displayButton, setDisplayButton] = useState(false)

    console.log("cartProducts", cartProducts)


    const [cartProduct, setCartProduct] = useState<CartProductProps>({  // state of product in cart
        id: product?.id,
        name: product?.name,
        description: product?.description,
        price: product?.price,
        image: product?.image,
        quantity: 1,
        inStock: product?.inStock
    })

    useEffect(() => {
        let controlDisplayButton: any = cartProducts?.find((cart: any) => cart?.id === product?.id)
        if (controlDisplayButton) {
            setDisplayButton(true)
        }
    }, [cartProducts]);

    const increaseFunc = () => {
        if (cartProduct.quantity >= 10) return
        setCartProduct({
            ...cartProduct,
            quantity: cartProduct.quantity + 1
        })
    }
    const decreaseFunc = () => {
        if (cartProduct.quantity >= 2) {
            setCartProduct({
                ...cartProduct,
                quantity: cartProduct.quantity - 1
            })
        }
    }
    let productRating = product?.reviews?.reduce((acc: number, item: any) => acc + item.rating, 0) / product?.reviews?.length //  average of rating all comments


    return (
        <PageContainer>
            <div className="block md:flex gap-10">
                <div className="relative mb-3 md:w-1/3 md:mb-0">
                    <Image src={product?.image} alt={product?.name}  width={0}
                           height={0}
                           sizes="100vw"
                           style={{ width: '100%', height: 'auto' }}
                    />
                </div>
                <div className="md:w-2/3 w-full space-y-4">
                    <div className="text-2xl md:text-3xl font-medium text-slate-800">
                        {product?.name}
                    </div>
                    <div className="text-lg text-slate-500">
                        {product?.description}
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="text-lg font-medium">Stock:</div>
                        {
                            product?.inStock ? <div className="text-lg text-green-500">In stock</div> :
                                <div className="text-lg text-red-500">Out of stock</div>
                        }
                    </div>
                    <Rating name="read-only" value={productRating} readOnly />
                    <div className="flex items-center gap-2">
                        <div className="text-lg font-medium">Price:</div>
                        <div className="text-lg text-orange-500">
                            {product?.price} $
                        </div>
                    </div>
                    {
                        displayButton ?
                            <div className="flex justify-start">
                                <Button text={`Added to cart`} style="max-sm:w-full" onClick={() => {}} outline={true} small={true}/>
                            </div>
                            :
                            <>
                                <div>
                                    <Counter cartProduct={cartProduct} increaseFunc={increaseFunc} decreaseFunc={decreaseFunc} />
                                </div>
                                {cartProduct?.quantity > 1 && (
                                    <div className="flex items-center gap-2">
                                        <div className="text-lg font-medium">Total:</div>
                                        <div className="text-lg text-orange-500">
                                            {((cartProduct?.quantity * product?.price).toFixed(2))} $
                                        </div>
                                    </div>
                                )}
                                <div className="flex justify-start">
                                    <Button text="Add to cart" style="max-sm:w-full" onClick={() => addProductToCart(cartProduct)} outline={false} small={true}/>
                                </div>
                            </>
                    }


                </div>
            </div>
            <div className="my-8">
                <Heading text={`${product?.reviews?.length} Reviews`} />
                <div className="flex flex-col gap-5 mt-5">
                    {
                        product?.reviews?.map((review: any) => (
                            <Comment key={review.id} review={review}/>
                        ))
                    }
                </div>
            </div>
        </PageContainer>
    )
}
export default ProductDetailClient

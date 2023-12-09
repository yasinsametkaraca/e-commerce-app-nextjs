import React from 'react'
import ProductDetailClient from "@/app/components/product/ProductDetailClient";
import {products} from "@/utils/Product";

type ProductDetailProps = {
    params: {
        productId: string
    }
}
const ProductDetail:React.FC<ProductDetailProps> = ({params}) => {
    const {productId} = params
    const product = products.find((product) => product.id.toLocaleString() === productId)

    return (
        <div>
            <ProductDetailClient product={product}/>
        </div>
    )
}
export default ProductDetail

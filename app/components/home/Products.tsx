import React from 'react'
import Heading from "@/app/components/general/Heading";
import {products} from "@/utils/Product";
import ProductCard from "@/app/components/home/ProductCard";

const Products = () => {
    return (
        <div>
            <Heading text={"All Products"} center={true} />
            <div className="flex items-center justify-center gap-3 md:gap-10 flex-wrap px:3 md:px-10">
                {
                    products.map((product, index) => (
                        <ProductCard key={product.id} product={product} />
                    ))
                }
            </div>
        </div>
    )
}
export default Products

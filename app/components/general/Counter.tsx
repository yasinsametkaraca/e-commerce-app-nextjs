import React from "react";
import {CartProductProps} from "@/app/components/product/ProductDetailClient";

interface CounterProps {
    cartProduct: CartProductProps,
    increaseFunc: () => void,
    decreaseFunc: () => void,
}

const Counter: React.FC<CounterProps> = ({cartProduct, increaseFunc, decreaseFunc }) => {
    const buttonStyle = "px-2 py-1 border border-gray-300 rounded-md"

    return (
        <div>
            <div className="flex items-center justify-start gap-2">
                <button onClick={decreaseFunc} className={buttonStyle}>-</button>
                <div className="px-2 py-1 border border-gray-300 rounded-md">{cartProduct?.quantity}</div>
                <button onClick={increaseFunc} className={buttonStyle}>+</button>
            </div>
        </div>
    )
}
export default Counter

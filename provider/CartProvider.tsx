import React from "react";
import {CartContextProvider} from "@/context/CartContext";

const CartProvider = ({children}: {children:React.ReactNode}) => {

    return (
        <CartContextProvider>{children}</CartContextProvider>
    )
}
export default CartProvider

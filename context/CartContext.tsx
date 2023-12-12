"use client";

import {createContext, useCallback, useContext, useEffect, useState} from "react";
import {CartProductProps} from "@/app/components/product/ProductDetailClient";
import toast from "react-hot-toast";

interface CartContextType {
    productCartQuantity: number;
    addProductToCart: (product: CartProductProps) => void;
    cartProducts: CartProductProps[] | null;
    deleteProductFromCart: (id: string) => void;
    removeAllCart: () => void;
    increaseQuantity: (product: CartProductProps) => void;
    decreaseQuantity: (product: CartProductProps) => void;
}

export const CartContext = createContext<CartContextType | null>(null);


interface Props {
    [propName: string]: any;
}
export const CartContextProvider = (props: Props) => {
    const [productCartQuantity, setProductCartQuantity] = useState(0)
    const [cartProducts, setCartProducts] = useState<CartProductProps[] | null>(null)

    useEffect(() => {
        let getCart = localStorage.getItem("cart");
        try {
            let getCartParse: CartProductProps[] = JSON.parse(getCart || "[]");
            setCartProducts(getCartParse);
        } catch (error) {
            console.error("Error parsing cart data:", error);
        }
    }, []);

    const increaseQuantity = useCallback((product: CartProductProps) => {
        setCartProducts(prevState => {
            const updatedCart = Array.isArray(prevState) ? prevState.map((cartProduct: CartProductProps) => {
                if (cartProduct.id === product.id && cartProduct.quantity <= 9) {
                    return {
                        ...cartProduct,
                        quantity: cartProduct.quantity + 1
                    }
                }
                return cartProduct;
            }) : [];
            localStorage.setItem("cart", JSON.stringify(updatedCart));
            return updatedCart;
        })
    }, []);

    const decreaseQuantity = useCallback((product: CartProductProps) => {
        setCartProducts(prevState => {
            const updatedCart = Array.isArray(prevState) ? prevState.map((cartProduct: CartProductProps) => {
                if (cartProduct.id === product.id  && cartProduct.quantity >= 2 ) {
                    return {
                        ...cartProduct,
                        quantity: cartProduct.quantity - 1
                    }
                }
                return cartProduct;
            }) : [];
            localStorage.setItem("cart", JSON.stringify(updatedCart));
            return updatedCart;
        })
    }, []);

    const removeAllCart = useCallback(() => {
        localStorage.removeItem("cart");
        setCartProducts(null);
        toast.success('Cart deleted!')
        setProductCartQuantity(0);
    },[cartProducts]);


    const addProductToCart = useCallback((product: CartProductProps) => {
        setCartProducts(prevState => {
            const updatedCart = Array.isArray(prevState) ? [...prevState, product] : [product];
            toast.success('Product added to cart!')
            localStorage.setItem("cart", JSON.stringify(updatedCart));
            console.log("updatedCart", updatedCart)
            return updatedCart;
        });
    }, [cartProducts]);

    const deleteProductFromCart = useCallback((id: string) => {
        setCartProducts(prevState => {
            const filteredProducts = Array.isArray(prevState) ? prevState.filter((product: any) => product.id !== id) : [];
            toast.success('Product removed from cart!')
            localStorage.setItem("cart", JSON.stringify(filteredProducts));
            return filteredProducts;
        });
    }, [cartProducts]);


    let value = {
        productCartQuantity,
        addProductToCart,
        cartProducts,
        deleteProductFromCart,
        removeAllCart,
        increaseQuantity,
        decreaseQuantity
    }

    return (
        <CartContext.Provider value={value} {...props} />
    )
}

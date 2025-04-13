"use client";

import {CartProvider} from "react-use-cart";

export default function ContextProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    return <CartProvider id="interior">
        {children}
    </CartProvider>;
}

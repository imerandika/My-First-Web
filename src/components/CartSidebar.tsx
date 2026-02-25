"use client";

import { useCart } from "../context/CartContext";
import Image from "next/image";

export default function CartSidebar() {
    const { cart, removeFromCart, isCartOpen, setIsCartOpen } = useCart();

    if (!isCartOpen) return null;

    const total = cart.reduce((acc, item) => {
        const itemPrice = parseFloat(item.price.replace("$", ""));
        return acc + itemPrice * item.quantity;
    }, 0);

    return (
        <div className="fixed inset-0 z-50 flex justify-end">
            <div
                className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
                onClick={() => setIsCartOpen(false)}
            />
            <div className="w-[400px] h-full bg-white shadow-2xl relative z-10 flex flex-col transform transition-transform duration-300">
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                    <h2 className="font-playfair font-bold text-2xl uppercase tracking-widest text-text-dark">Cart</h2>
                    <button
                        onClick={() => setIsCartOpen(false)}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
                    {cart.length === 0 ? (
                        <div className="flex-1 flex flex-col items-center justify-center text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 mb-4 opacity-50">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                            <p className="font-sans text-sm tracking-wider uppercase">Your cart is empty</p>
                        </div>
                    ) : (
                        cart.map((item) => (
                            <div key={item.id} className="flex gap-4 items-center bg-gray-50/50 p-4 rounded-xl border border-gray-100">
                                <div className="w-20 h-24 relative rounded-md overflow-hidden bg-white shrink-0">
                                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                                </div>
                                <div className="flex-1 flex flex-col justify-center">
                                    <span className="font-playfair text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">{item.brand}</span>
                                    <h3 className="font-sans font-bold text-sm tracking-wider uppercase">{item.name}</h3>
                                    <div className="flex justify-between items-center mt-3">
                                        <span className="font-bold text-sm text-primary">{item.price}</span>
                                        <div className="flex gap-4 items-center">
                                            <span className="text-xs text-gray-500 font-bold">QTY: {item.quantity}</span>
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="text-red-400 hover:text-red-600 transition-colors text-xs uppercase tracking-widest font-bold"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {cart.length > 0 && (
                    <div className="p-6 border-t border-gray-100 bg-gray-50/50">
                        <div className="flex justify-between mb-6 font-bold text-lg font-playfair uppercase">
                            <span>Subtotal</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                        <button className="w-full bg-primary hover:bg-primary-dark text-white rounded-full py-4 font-bold tracking-[0.2em] uppercase transition-colors shadow-lg shadow-primary/30">
                            Checkout
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

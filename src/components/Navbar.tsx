"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function Navbar() {
    const { cart, setIsCartOpen } = useCart();
    const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <nav className="w-full h-24 flex items-center justify-between px-8 md:px-16 absolute top-0 left-0 z-40">
            <div className="flex items-center">
                <Link href="/">
                    <h1 className="font-playfair font-bold text-3xl tracking-tight text-text-dark cursor-pointer">
                        Pearl
                    </h1>
                </Link>
            </div>

            <div className="hidden md:flex items-center space-x-12 font-semibold text-sm uppercase tracking-wider">
                <Link href="#" className="hover:text-primary transition-colors">Home</Link>
                <Link href="#about" className="hover:text-primary transition-colors">About</Link>
                <Link href="#products" className="hover:text-primary transition-colors">Beauty Products</Link>
                <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
            </div>

            <div className="flex items-center gap-6">
                <button
                    onClick={() => setIsCartOpen(true)}
                    className="relative text-text-dark hover:text-primary transition-colors"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                    {cartItemCount > 0 && (
                        <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full shadow-sm">
                            {cartItemCount}
                        </span>
                    )}
                </button>
                <Link href="/login" className="bg-primary text-white px-8 py-2 rounded-full font-bold tracking-widest text-xs uppercase hover:bg-primary-dark transition-colors shadow-md hover:shadow-lg">
                    Login
                </Link>
            </div>
        </nav>
    );
}

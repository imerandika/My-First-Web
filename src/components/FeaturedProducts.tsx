"use client";

import Image from "next/image";
import { useCart } from "../context/CartContext";

export default function FeaturedProducts() {
    const { addToCart } = useCart();

    const products = [
        {
            id: 1,
            imageAlt: "Lipsticks",
            brand: "LIPTONES",
            name: "ROSE",
            price: "$40.00",
            type: "lipstick",
            src: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=400&crop=top",
        },
        {
            id: 2,
            imageAlt: "Foundation Set",
            brand: "POUDRE NON",
            name: "GLOW",
            price: "$25.00",
            type: "foundation",
            src: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=400&crop=bottom",
        },
        {
            id: 3,
            imageAlt: "Serums",
            brand: "SERUM MORE",
            name: "SHINE",
            price: "$30.00",
            type: "serum",
            src: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=400&crop=left",
        },
        {
            id: 4,
            imageAlt: "Compact Powder",
            brand: "POUDRE BASE",
            name: "MATTE",
            price: "$20.00",
            type: "powder",
            src: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=400&crop=right",
        },
        {
            id: 5,
            imageAlt: "Model Face",
            brand: "SKIN GLOW",
            name: "BASE",
            price: "$50.00",
            type: "model",
            src: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=400&crop=entropy",
        },
    ];

    return (
        <div id="products" className="w-full bg-white py-24 px-8 md:px-16 flex flex-col items-center">
            <h3 className="font-playfair font-bold text-3xl text-text-dark mb-16 uppercase tracking-widest">
                Featured Product
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8 w-full max-w-6xl">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="flex flex-col items-center group cursor-pointer"
                        onClick={() => {
                            if (product.type !== 'model') {
                                addToCart({
                                    id: product.id,
                                    name: product.name,
                                    brand: product.brand,
                                    price: product.price,
                                    image: product.src,
                                    quantity: 1
                                });
                            }
                        }}
                    >
                        {/* Image Container */}
                        <div className="w-full aspect-[4/5] bg-primary-light/5 relative flex items-center justify-center overflow-hidden mb-6 transition-transform transform group-hover:-translate-y-2 rounded-xl">
                            <Image
                                src={product.src}
                                alt={product.imageAlt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Add to cart overlay icon */}
                            {product.type !== 'model' && (
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                                    <div className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-primary-light translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                        </svg>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Typography */}
                        <span className="font-playfair font-bold text-sm tracking-widest text-text-dark group-hover:text-primary transition-colors text-center w-full truncate uppercase">
                            {product.brand}
                        </span>
                        <span className="font-sans text-[10px] text-primary-light font-bold mt-1 uppercase tracking-widest italic">
                            {product.name}
                        </span>
                        <div className="flex items-center gap-1 mt-2 text-text-light text-xs font-semibold">
                            {product.price}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

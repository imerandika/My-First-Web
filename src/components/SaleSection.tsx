import Link from "next/link";
import Image from "next/image";

export default function SaleSection() {
    return (
        <div className="w-full bg-gradient-to-r from-primary-light/40 via-primary-light/20 to-primary/10 py-16 px-8 md:px-24 flex flex-col md:flex-row items-center justify-between">

            {/* Left Content */}
            <div className="w-full md:w-1/2 flex flex-col items-start mb-12 md:mb-0">
                <h2 className="font-playfair font-bold text-4xl text-text-dark leading-tight mb-2">
                    Spring Beauty Sale <br /> Up to 40% Off
                </h2>
                <p className="font-sans text-xs text-text-light max-w-sm mb-6 leading-relaxed">
                    Discover new arrivals and exclusive limited editions. Don&apos;t miss out on seasonal promotions to glow like never before.
                </p>

                {/* Color swatches */}
                <div className="flex items-center gap-2 mb-8">
                    <div className="w-3 h-3 rounded-full bg-black cursor-pointer ring-2 ring-transparent hover:ring-gray-400"></div>
                    <div className="w-3 h-3 rounded-full bg-primary-dark cursor-pointer ring-2 ring-offset-1 ring-primary-dark shadow-sm"></div>
                    <div className="w-3 h-3 rounded-full bg-primary-light cursor-pointer ring-2 ring-transparent hover:ring-gray-400"></div>
                    <div className="w-3 h-3 rounded-full bg-white border border-gray-300 cursor-pointer ring-2 ring-transparent hover:ring-gray-400"></div>
                    <span className="text-[10px] text-gray-500 font-bold ml-2">COLOR PALETTE</span>
                </div>

                <Link href="#products" className="bg-primary/80 text-white rounded-full px-10 py-3 font-bold tracking-wider hover:bg-primary transition-colors text-sm shadow-md">
                    SHOP NOW
                </Link>
            </div>

            {/* Right Content - Product Image */}
            <div className="w-full md:w-1/2 flex items-center justify-center md:justify-end relative h-[300px] md:h-[400px]">
                <div className="relative w-full max-w-[450px] h-full rounded-2xl overflow-hidden shadow-2xl group">
                    <Image
                        src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800&crop=center"
                        alt="Spring Sale Products"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                </div>
                {/* Decorative floating element */}
                <div className="absolute right-[-20px] bottom-10 w-40 h-10 bg-white/80 backdrop-blur-md shadow-lg rounded-full flex items-center justify-center -rotate-6 z-10 border border-white">
                    <span className="text-primary-dark text-[10px] font-bold tracking-widest uppercase">Rose Essence Paris</span>
                </div>
            </div>
        </div>
    );
}

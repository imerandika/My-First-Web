import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <div id="home" className="relative w-full min-h-screen bg-bg-light flex flex-col md:flex-row items-center pt-24 px-8 md:px-16 overflow-hidden uppercase">

            {/* Left Content */}
            <div className="w-full md:w-1/2 flex flex-col justify-center z-10 pt-12 md:pt-0">
                <h1 className="font-playfair font-bold text-5xl md:text-7xl text-text-dark leading-tight mb-4">
                    Cosmetics that <br />
                    <span className="font-normal font-sans">Everyone loves!</span>
                </h1>
                <p className="text-text-light font-sans max-w-md mb-8 normal-case italic">
                    We have Huge collection for cosmetics in our Paris Branch. Our Products are always Quality products.
                </p>
                <Link href="#products" className="bg-primary hover:bg-primary-dark text-white rounded-full px-8 py-3 w-max font-semibold text-lg transition-colors shadow-lg shadow-primary/30 text-center">
                    Explore Products
                </Link>

                {/* Small floating cards */}
                <div className="flex flex-row gap-6 mt-16 pb-8 md:pb-0">
                    {/* Card 1 */}
                    <div className="bg-white rounded-2xl p-4 flex items-center shadow-lg border border-gray-100 min-w-[240px]">
                        <div className="relative w-12 h-20 bg-primary-light rounded-md flex-shrink-0 overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=200"
                                alt="Cosmetic 1"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="ml-4 normal-case">
                            <p className="text-xs text-text-light">Cool Water by Davidoff</p>
                            <p className="font-bold text-lg text-text-dark">$25.50</p>
                            <p className="text-xs text-text-light">-35%</p>
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div className="bg-white rounded-2xl p-4 flex items-center shadow-lg border border-gray-100 min-w-[240px] relative">
                        <div className="relative w-12 h-20 bg-primary rounded-md flex-shrink-0 overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1594465919760-441fe5908ab0?auto=format&fit=crop&q=80&w=200"
                                alt="Cosmetic 2"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="ml-4 normal-case">
                            <p className="text-xs text-text-light">Diamonds Rose</p>
                            <p className="font-bold text-lg text-text-dark">$25.50</p>
                            <p className="text-xs text-text-light">-35%</p>
                        </div>

                        {/* Arrow Icon */}
                        <div className="absolute right-[-20px] top-1/2 -translate-y-1/2 bg-primary-dark text-white w-10 h-10 rounded-xl flex items-center justify-center cursor-pointer hover:bg-primary transition-colors shadow-md shadow-primary/40">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Content / Image Area */}
            <div className="w-full md:w-1/2 flex justify-center items-center h-[500px] md:h-full relative mt-12 md:mt-0">
                <div className="relative w-full max-w-[600px] aspect-square rounded-full flex items-center justify-center">
                    {/* Splash background effect */}
                    <div className="absolute inset-0 bg-primary-light/30 rounded-full blur-3xl scale-110"></div>

                    {/* Central Product Image */}
                    <div className="relative w-[300px] h-[450px] z-10 transition-transform hover:scale-105 duration-500">
                        <Image
                            src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800"
                            alt="Hero Product"
                            fill
                            className="object-contain drop-shadow-2xl"
                            priority
                        />
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute top-10 right-0 w-24 h-24 bg-primary-light/20 rounded-full blur-xl animate-pulse"></div>
                    <div className="absolute bottom-10 left-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-pulse delay-700"></div>
                </div>
            </div>

        </div>
    );
}

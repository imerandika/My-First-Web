import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
    return (
        <div className="min-h-screen bg-bg-light flex">
            {/* Left side Form */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-8 md:px-24">
                <div className="w-full max-w-md">
                    <Link href="/" className="flex items-center mb-12 group">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 mr-2 text-text-light group-hover:text-primary transition-colors">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                        </svg>
                        <span className="text-sm font-bold tracking-widest uppercase text-text-light group-hover:text-primary transition-colors">Return to Home</span>
                    </Link>

                    <h2 className="font-playfair font-bold text-4xl text-text-dark mb-2">Welcome Back</h2>
                    <p className="font-sans text-sm text-text-light mb-12">Please enter your details to access your Pearl account.</p>

                    <form className="flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-bold tracking-widest uppercase text-text-dark">Email Address</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="border border-gray-200 rounded-lg p-4 font-sans text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-bold tracking-widest uppercase text-text-dark">Password</label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="border border-gray-200 rounded-lg p-4 font-sans text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                            />
                        </div>

                        <div className="flex items-center justify-between mt-2">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-primary accent-primary" />
                                <span className="text-xs text-text-light font-sans">Remember me</span>
                            </label>
                            <span className="text-xs text-primary font-bold hover:text-primary-dark cursor-pointer transition-colors">Forgot Password?</span>
                        </div>

                        <button
                            type="button"
                            className="w-full bg-primary hover:bg-primary-dark text-white rounded-full py-4 mt-4 font-bold tracking-[0.2em] uppercase transition-colors shadow-lg shadow-primary/30"
                        >
                            Sign In
                        </button>
                    </form>

                    <p className="text-center text-sm text-text-light mt-12 font-sans">
                        Don&apos;t have an account? <span className="text-primary font-bold cursor-pointer hover:text-primary-dark transition-colors">Sign up</span>
                    </p>
                </div>
            </div>

            {/* Right side Image */}
            <div className="hidden md:flex w-1/2 bg-primary-light relative items-center justify-center p-12">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-dark/20 to-transparent"></div>
                <div className="w-full max-w-lg aspect-[3/4] relative rounded-t-full rounded-b-2xl overflow-hidden shadow-2xl border-4 border-white">
                    <Image
                        src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800&crop=edges"
                        alt="Luxurious Cosmetics"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 mix-blend-multiply"></div>
                </div>
            </div>
        </div>
    );
}

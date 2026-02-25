export default function Footer() {
    return (
        <footer id="contact" className="w-full bg-primary-light/10 py-16 px-8 md:px-16 flex flex-col items-center justify-between border-t border-primary-light/20">
            <div className="w-full max-w-6xl flex flex-col md:flex-row items-center md:items-start justify-between gap-12">

                {/* Brand & Socials */}
                <div className="flex flex-col items-center md:items-start gap-6">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-playfair font-bold italic">P</div>
                        <span className="font-playfair font-bold text-xl text-text-dark tracking-widest">PEARL</span>
                    </div>
                    <p className="text-xs font-sans text-text-light max-w-xs text-center md:text-left leading-relaxed">
                        Cosmetics that everyone loves. Discover new arrivals and exclusive limited editions to glow like never before.
                    </p>
                    <div className="flex gap-4 items-center">
                        <a href="#" className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:bg-primary transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                        </a>
                        <a href="#" className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:bg-primary transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        </a>
                        <a href="#" className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:bg-primary transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                        </a>
                    </div>
                </div>

                {/* Contact Email Form */}
                <div className="flex flex-col items-center md:items-start gap-4">
                    <span className="font-playfair font-bold text-lg text-text-dark tracking-wide uppercase">Join our Newsletter</span>
                    <p className="text-xs text-text-light font-sans">Subscribe to receive updates, access to exclusive deals, and more.</p>
                    <form className="flex w-full max-w-sm mt-2 relative">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="bg-white border border-gray-200 rounded-full py-3 px-6 w-full text-xs font-sans text-text-dark focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary shadow-sm"
                            required
                        />
                        <button
                            type="submit"
                            className="absolute right-1 top-1 bottom-1 bg-primary text-white text-xs font-bold uppercase tracking-widest px-6 rounded-full hover:bg-primary-dark transition-colors shadow-md"
                        >
                            Subscribe
                        </button>
                    </form>
                    <a href="mailto:hello@pearlcosmetics.com" className="text-xs text-primary font-bold hover:text-primary-dark transition-colors mt-2 underline underline-offset-4 tracking-widest uppercase">
                        Contact us directly
                    </a>
                </div>

                {/* Quick Links */}
                <div className="flex flex-col items-center md:items-start gap-4 text-xs font-sans text-text-light uppercase tracking-widest mt-4 md:mt-0">
                    <a href="#" className="hover:text-primary transition-colors py-1">Privacy Policy</a>
                    <a href="#" className="hover:text-primary transition-colors py-1">Terms of Service</a>
                    <a href="#about" className="hover:text-primary transition-colors py-1">About Us</a>
                    <a href="#products" className="hover:text-primary transition-colors py-1">Shop Collections</a>
                </div>

            </div>

            <div className="w-full max-w-6xl border-t border-primary-light/20 mt-12 pt-8 flex justify-center">
                <p className="text-[10px] text-text-light/80 font-sans tracking-widest uppercase">&copy; {new Date().getFullYear()} Pearl Cosmetics. All rights reserved.</p>
            </div>
        </footer>
    );
}

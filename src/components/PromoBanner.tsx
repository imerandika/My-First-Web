"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function PromoBanner() {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <section id="about" className="w-full relative bg-bg-light overflow-hidden flex flex-col items-center py-24 md:py-32 px-6">

            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary-dark/5 rounded-full blur-[120px] translate-y-1/4 -translate-x-1/4 pointer-events-none"></div>

            <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center justify-between gap-16 z-10">

                {/* 3D Animated Image Side */}
                <div className="w-full lg:w-1/2 flex justify-center perspective-[1200px]">
                    <motion.div
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        style={{
                            rotateX,
                            rotateY,
                            transformStyle: "preserve-3d",
                        }}
                        className="relative w-full max-w-[400px] aspect-[3/4] rounded-2xl cursor-pointer"
                    >
                        {/* Shadow layer */}
                        <div
                            style={{ transform: "translateZ(-50px)" }}
                            className="absolute inset-0 bg-black/20 rounded-2xl blur-xl"
                        ></div>

                        {/* Main Image */}
                        <motion.div
                            className="absolute inset-0 rounded-2xl overflow-hidden border border-white/40 shadow-2xl bg-white"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=800"
                                alt="Our Heritage"
                                fill
                                className="object-cover"
                            />
                            {/* Inner gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        </motion.div>

                        {/* Floating elements inside the 3D space */}
                        <motion.div
                            style={{ transform: "translateZ(80px)" }}
                            className="absolute bottom-10 left-[-20px] bg-white/80 backdrop-blur-md px-6 py-4 rounded-xl shadow-xl flex items-center gap-4 border border-white"
                        >
                            <div className="w-12 h-12 rounded-full overflow-hidden relative border-2 border-primary-light bg-primary/10">
                                <Image src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=150" alt="Founder" fill className="object-cover object-top" />
                            </div>
                            <div>
                                <h4 className="font-playfair font-bold text-text-dark text-sm leading-tight">Estrella Rose</h4>
                                <p className="font-sans text-[9px] text-text-light uppercase tracking-[0.2em] mt-1">Founder & CEO</p>
                            </div>
                        </motion.div>

                        <motion.div
                            style={{ transform: "translateZ(50px)" }}
                            className="absolute top-10 right-[-30px] bg-primary/90 backdrop-blur-md text-white px-5 py-3 rounded-full shadow-lg border border-white/20"
                        >
                            <span className="font-bold text-[10px] tracking-[0.3em] uppercase">Since 2010</span>
                        </motion.div>

                    </motion.div>
                </div>

                {/* Text Description Side */}
                <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-primary font-bold text-xs uppercase tracking-[0.3em] mb-6 relative"
                    >
                        Our Story
                        <span className="absolute -bottom-2 lg:left-0 left-1/2 lg:-translate-x-0 -translate-x-1/2 w-12 h-0.5 bg-primary-light"></span>
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="font-playfair font-bold text-4xl lg:text-5xl text-text-dark leading-tight mb-8"
                    >
                        Revealing your <br className="hidden lg:block" />
                        <span className="italic font-light text-primary">natural radiance</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="font-sans text-sm md:text-base text-text-light leading-relaxed mb-6 max-w-lg"
                    >
                        Born from a desire to blend nature&apos;s most potent botanicals with modern science, our formulations are crafted to honor your unique skin. We believe that true beauty comes from authentic confidence and radiant health.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="font-sans text-sm md:text-base text-text-light leading-relaxed mb-10 max-w-lg"
                    >
                        Every product in our collection is sustainably sourced, cruelty-free, and meticulously dermatologically tested. Discover a ritual that doesn&apos;t just cover up, but elevates and nourishes your natural glow.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex items-center gap-6 md:gap-10"
                    >
                        <div className="flex flex-col items-center lg:items-start">
                            <h3 className="font-playfair text-3xl md:text-4xl font-bold text-text-dark">1M+</h3>
                            <span className="text-[9px] md:text-[10px] uppercase tracking-widest text-text-light mt-2">Happy Clients</span>
                        </div>
                        <div className="w-px h-12 bg-gray-200"></div>
                        <div className="flex flex-col items-center lg:items-start">
                            <h3 className="font-playfair text-3xl md:text-4xl font-bold text-text-dark">100%</h3>
                            <span className="text-[9px] md:text-[10px] uppercase tracking-widest text-text-light mt-2">Organic Assets</span>
                        </div>
                        <div className="w-px h-12 bg-gray-200"></div>
                        <div className="flex flex-col items-center lg:items-start">
                            <h3 className="font-playfair text-3xl md:text-4xl font-bold text-text-dark">30+</h3>
                            <span className="text-[9px] md:text-[10px] uppercase tracking-widest text-text-light mt-2">Awards Won</span>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

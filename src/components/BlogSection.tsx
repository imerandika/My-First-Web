import Link from "next/link";
import Image from "next/image";

export default function BlogSection() {
    const articles = [
        {
            id: 1,
            title: "HOW TO USE",
            brand: "VONIL GLOWING",
            desc: "Comprehensive guide to maximize your skincare routine with Vonil products. Discover the glowing effect.",
            src: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=600&crop=top",
        },
        {
            id: 2,
            title: "TRENDING",
            brand: "ROSE ESSENCE",
            desc: "Experience the timeless beauty of rose extracts. Our formula brings out your natural luminescence perfectly.",
            src: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=600&crop=bottom",
        },
        {
            id: 3,
            title: "TUTORIAL",
            brand: "BEAUTY ROUTINE",
            desc: "Step-by-step guide to achieving the flawless look. Learn the secrets of professional makeup artists.",
            src: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=600&crop=entropy",
        },
    ];

    return (
        <div id="blog" className="w-full bg-white py-16 px-8 md:px-16 pb-32 flex flex-col items-center">

            <h3 className="font-playfair font-bold text-3xl text-text-dark mb-16 uppercase tracking-widest">
                Beauty Insights
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
                {articles.map((article) => (
                    <div key={article.id} className="flex flex-col items-center group cursor-pointer border border-gray-100/50 hover:shadow-xl transition-shadow bg-white pb-6 rounded-b-sm overflow-hidden">
                        {/* Image Box */}
                        <div className={`w-full aspect-[4/3] bg-primary relative overflow-hidden transition-transform duration-500`}>
                            <Image
                                src={article.src}
                                alt={article.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>

                        {/* Text Box styled as overlapping card (from reference) */}
                        <div className="w-11/12 bg-white -mt-12 relative z-10 pt-8 px-6 pb-2 text-center shadow-md flex flex-col items-center border border-gray-50">
                            <span className="text-[10px] text-primary-light font-bold tracking-widest font-sans uppercase mb-1">{article.title}</span>
                            <h4 className="font-playfair font-bold text-lg text-text-dark mb-3 tracking-wide truncate w-full">{article.brand}</h4>
                            <p className="font-sans text-[10px] text-text-light leading-relaxed max-w-xs">{article.desc}</p>
                            <Link href={`#blog`} className="text-[10px] font-bold text-text-dark mt-4 border-b border-text-dark pb-0.5 hover:text-primary hover:border-primary transition-colors uppercase tracking-wider inline-block">
                                Read More
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

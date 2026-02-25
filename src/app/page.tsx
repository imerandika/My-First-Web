import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PromoBanner from "@/components/PromoBanner";
import FeaturedProducts from "@/components/FeaturedProducts";
import SaleSection from "@/components/SaleSection";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-bg-light font-sans text-text-dark w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <PromoBanner />
      <FeaturedProducts />
      <SaleSection />
      <BlogSection />
      <Footer />
    </main>
  );
}

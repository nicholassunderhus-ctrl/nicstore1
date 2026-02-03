import { useState } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { CategoryGrid } from "@/components/CategoryGrid";
import { SocialProof } from "@/components/SocialProof";
import { ReviewsCarousel } from "@/components/ReviewsCarousel";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { toast } from "sonner";

const Index = () => {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount((prev) => prev + 1);
    toast.success("Produto adicionado ao carrinho!", {
      description: "Continue comprando ou finalize seu pedido.",
      duration: 3000,
    });
  };

  const handleCartClick = () => {
    toast.info(`Você tem ${cartCount} item(s) no carrinho`, {
      description: "Funcionalidade de carrinho em breve!",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Grid Pattern Background */}
      <div className="fixed inset-0 grid-pattern opacity-20 pointer-events-none" />
      
      {/* Header */}
      <Header cartCount={cartCount} onCartClick={handleCartClick} />

      {/* Main Content */}
      <main>
        <HeroSection />
        <CategoryGrid />
        <SocialProof />
        <ReviewsCarousel />
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;

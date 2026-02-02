import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  id: number;
  title: string;
  category: string;
  image: string;
  originalPrice: number;
  price: number;
  discount: number;
  onBuy: () => void;
  delay?: number;
}

export const ProductCard = ({
  title,
  image,
  originalPrice,
  price,
  discount,
  onBuy,
  delay = 0,
}: ProductCardProps) => {
  const formatPrice = (value: number) => {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  return (
    <div 
      className="group relative bg-card/50 backdrop-blur-sm border border-border rounded-xl overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_30px_hsl(var(--primary)/0.15)] animate-fade-in"
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Discount Badge */}
      <div className="absolute top-3 left-3 z-10">
        <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
          -{discount}%
        </span>
      </div>

      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-bold text-sm uppercase tracking-wide text-foreground mb-3 line-clamp-2 min-h-[2.5rem]">
          {title}
        </h3>

        {/* Price Section */}
        <div className="mb-4">
          <span className="text-sm text-muted-foreground line-through">
            {formatPrice(originalPrice)}
          </span>
          <div className="flex items-baseline gap-1 mt-1">
            <span className="text-2xl font-black text-primary">
              {formatPrice(price)}
            </span>
          </div>
        </div>

        {/* Buy Button */}
        <Button 
          variant="neon" 
          className="w-full gap-2 group/btn"
          onClick={onBuy}
        >
          <ShoppingCart className="h-4 w-4 transition-transform group-hover/btn:scale-110" />
          COMPRAR AGORA
        </Button>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
      </div>
    </div>
  );
};

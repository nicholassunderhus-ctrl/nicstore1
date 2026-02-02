import { useState } from "react";
import { ProductCard } from "./ProductCard";

const categories = [
  { id: "all", label: "Todos" },
  { id: "contas", label: "Contas" },
  { id: "gamepass", label: "Game Pass" },
  { id: "frutas", label: "Frutas" },
  { id: "itens", label: "Itens" },
];

const products = [
  {
    id: 1,
    title: "CONTA BLOX FRUITS LVL 2450",
    category: "contas",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop",
    originalPrice: 199.90,
    price: 89.90,
    discount: 55,
  },
  {
    id: 2,
    title: "GAME PASS PREMIUM 12 MESES",
    category: "gamepass",
    image: "https://images.unsplash.com/photo-1493711662062-fa541f7f3d24?w=400&h=300&fit=crop",
    originalPrice: 499.90,
    price: 299.90,
    discount: 40,
  },
  {
    id: 3,
    title: "FRUTA DRAGON MÍTICA",
    category: "frutas",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=300&fit=crop",
    originalPrice: 149.90,
    price: 79.90,
    discount: 47,
  },
  {
    id: 4,
    title: "ESPADA YORU LENDÁRIA",
    category: "itens",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
    originalPrice: 89.90,
    price: 49.90,
    discount: 44,
  },
  {
    id: 5,
    title: "FRUTA LEOPARD MÍTICA",
    category: "frutas",
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400&h=300&fit=crop",
    originalPrice: 199.90,
    price: 129.90,
    discount: 35,
  },
  {
    id: 6,
    title: "CONTA ROBLOX ROBUX 10K",
    category: "contas",
    image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=400&h=300&fit=crop",
    originalPrice: 299.90,
    price: 179.90,
    discount: 40,
  },
  {
    id: 7,
    title: "GAMEPASS DARK BLADE",
    category: "gamepass",
    image: "https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?w=400&h=300&fit=crop",
    originalPrice: 59.90,
    price: 39.90,
    discount: 33,
  },
  {
    id: 8,
    title: "KIT INICIANTE COMPLETO",
    category: "itens",
    image: "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?w=400&h=300&fit=crop",
    originalPrice: 79.90,
    price: 29.90,
    discount: 63,
  },
];

interface ProductGridProps {
  onAddToCart: () => void;
}

export const ProductGrid = ({ onAddToCart }: ProductGridProps) => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-primary">PRODUTOS</span> EM DESTAQUE
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Confira nossa seleção exclusiva de itens digitais com os melhores preços do mercado
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`filter-chip ${activeCategory === category.id ? 'active' : ''}`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              {...product}
              onBuy={onAddToCart}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

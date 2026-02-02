import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string | null;
  description: string | null;
}

interface ProductsSectionProps {
  onAddToCart: () => void;
}

export const ProductsSection = ({ onAddToCart }: ProductsSectionProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      // Busca os produtos da tabela 'products'
      const { data, error } = await supabase
        .from('products')
        .select('*');

      if (error) {
        console.error('Erro ao buscar produtos:', error);
      } else {
        setProducts(data || []);
      }
      setLoading(false);
    }

    fetchProducts();
  }, []);

  if (loading) return <div className="text-center py-20 text-primary animate-pulse">Carregando produtos...</div>;

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          NOSSOS <span className="text-primary">PRODUTOS</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="glass-card p-5 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
              <div className="aspect-video bg-muted/30 rounded-lg mb-4 overflow-hidden flex items-center justify-center">
                 {product.image ? (
                   <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                 ) : (
                   <span className="text-muted-foreground text-sm">Sem imagem</span>
                 )}
              </div>
              
              <h3 className="text-xl font-bold mb-2 text-foreground">{product.name}</h3>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-2 min-h-[40px]">
                {product.description || "Sem descrição"}
              </p>
              
              <div className="flex items-center justify-between mt-auto">
                <span className="text-2xl font-bold text-primary">
                  {Number(product.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </span>
                <Button variant="neon" size="sm" onClick={onAddToCart}>
                  COMPRAR
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        {products.length === 0 && (
          <p className="text-center text-muted-foreground">Nenhum produto encontrado.</p>
        )}
      </div>
    </section>
  );
};
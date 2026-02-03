import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    name: "ESCAPE TSUNAMI FOR BRAINROTS",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop", // Placeholder
  },
  {
    name: "STEAL A BRAINROT",
    image: "https://images.unsplash.com/photo-1493711662062-fa541f7f3d24?w=400&h=300&fit=crop", // Placeholder
  },
  {
    name: "PLANTS VS BRAINROTS",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=300&fit=crop", // Placeholder
  },
];

export const CategoryGrid = () => {
  return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div 
              key={category.name}
              className="group relative bg-card/50 backdrop-blur-sm border border-border rounded-xl overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_30px_hsl(var(--primary)/0.15)] animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Container */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <h3 className="font-black text-xl uppercase tracking-wide text-foreground mb-4 line-clamp-2">
                  {category.name}
                </h3>
                <Button variant="neon" className="w-full gap-2 group/btn">
                  Ver produtos
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
  );
};
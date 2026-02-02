import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const reviews = [
  {
    id: 1,
    name: "Lucas Silva",
    avatar: "LS",
    rating: 5,
    text: "Comprei minha conta Blox Fruits e recebi em menos de 5 minutos! Atendimento incrível e preço muito bom.",
    date: "2 dias atrás",
  },
  {
    id: 2,
    name: "Maria Santos",
    avatar: "MS",
    rating: 5,
    text: "Melhor loja de itens digitais que já encontrei. Sempre compro aqui e nunca tive problemas.",
    date: "1 semana atrás",
  },
  {
    id: 3,
    name: "Pedro Oliveira",
    avatar: "PO",
    rating: 5,
    text: "Frutas míticas com preço justo! A entrega foi instantânea. Super recomendo a Nic Store!",
    date: "3 dias atrás",
  },
  {
    id: 4,
    name: "Ana Costa",
    avatar: "AC",
    rating: 5,
    text: "Game Pass original com ativação rápida. Suporte no Discord muito atencioso!",
    date: "5 dias atrás",
  },
  {
    id: 5,
    name: "Gabriel Mendes",
    avatar: "GM",
    rating: 5,
    text: "Já fiz mais de 10 compras aqui. Confiança total nessa loja. Preços imbatíveis!",
    date: "1 dia atrás",
  },
];

export const ReviewsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const itemsToShow = typeof window !== 'undefined' && window.innerWidth >= 1024 ? 3 : typeof window !== 'undefined' && window.innerWidth >= 640 ? 2 : 1;

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const next = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const getVisibleReviews = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(reviews[(currentIndex + i) % reviews.length]);
    }
    return visible;
  };

  return (
    <section className="py-20 px-4 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            O QUE NOSSOS <span className="text-primary">CLIENTES</span> DIZEM
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Avaliações reais de compradores satisfeitos
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Reviews Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {getVisibleReviews().map((review, index) => (
              <div
                key={`${review.id}-${index}`}
                className="glass-card p-6 relative animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Quote Icon */}
                <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/20" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-foreground/90 text-sm leading-relaxed mb-6">
                  "{review.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                    {review.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-foreground">{review.name}</p>
                    <p className="text-xs text-muted-foreground">{review.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="glass"
              size="icon"
              onClick={prev}
              className="rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            {/* Dots */}
            <div className="flex items-center gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrentIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'w-6 bg-primary' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="glass"
              size="icon"
              onClick={next}
              className="rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

import { useEffect, useState, useRef } from "react";
import { Users, Star, Shield, Zap } from "lucide-react";

const stats = [
  { icon: Users, value: 10000, label: "Clientes satisfeitos", suffix: "+" },
  { icon: Star, value: 50000, label: "Avaliações positivas", suffix: "+" },
  { icon: Shield, value: 100, label: "Transações seguras", suffix: "%" },
  { icon: Zap, value: 5, label: "Entrega em minutos", suffix: " min" },
];

const AnimatedCounter = ({ end, suffix }: { end: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const steps = 60;
          const increment = end / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, hasAnimated]);

  return (
    <div ref={ref} className="text-4xl sm:text-5xl font-black text-primary">
      {count.toLocaleString()}{suffix}
    </div>
  );
};

export const SocialProof = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            POR QUE ESCOLHER A <span className="text-primary">NIC STORE</span>?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Milhares de gamers confiam em nós para suas compras de itens digitais
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="glass-card p-6 sm:p-8 text-center hover-glow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-xl mb-4">
                <stat.icon className="h-7 w-7 text-primary" />
              </div>
              <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import { Clock } from "lucide-react";
import { CategoryGrid } from "./CategoryGrid";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[60vh] flex flex-col items-center justify-center pt-40 pb-20 px-4 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
      
      {/* Floating Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Online Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-8 animate-fade-in">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
          </span>
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Estamos Online</span>
        </div>

        {/* Main Title */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <span className="text-primary neon-text">NIC</span>
          <span className="text-foreground"> STORE</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Sua loja de itens digitais com os <span className="text-primary">melhores preços</span> e
          <span className="text-green-500"> entrega rápida</span>
        </p>

        {/* Operating Hours */}
        <div className="inline-flex items-center gap-3 px-5 py-3 glass-card animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <Clock className="h-5 w-5 text-primary" />
          <div className="text-left">
            <p className="text-xs text-muted-foreground uppercase tracking-wider">Horário de Atendimento</p>
            <p className="text-sm font-semibold text-foreground">24 Horas - Todos os dias</p>
          </div>
        </div>

        {/* Categories */}
        <div className="w-full max-w-7xl mt-24 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <CategoryGrid />
        </div>
      </div>
    </section>
  );
};

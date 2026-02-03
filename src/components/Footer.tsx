import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
  </svg>
);

const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/50 border-t border-border pt-16 pb-8">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-black mb-4">
              <span className="text-primary neon-text">NIC</span>
              <span className="text-foreground"> STORE</span>
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-md mb-6">
              Sua loja de confiança para itens digitais. Oferecemos os melhores preços do mercado 
              com entrega instantânea e suporte 24 horas.
            </p>
            <div className="flex gap-3">
              <Button variant="glass" size="icon" asChild>
                <a href="https://www.tiktok.com/@eonictv2" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                  <TikTokIcon />
                </a>
              </Button>
              <Button variant="glass" size="icon" asChild>
                <a href="https://www.youtube.com/@Elfuuu" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <YouTubeIcon />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-start-4">
            <h4 className="font-bold text-foreground mb-4">Links Rápidos</h4>
            <ul className="space-y-3 text-sm">
              {["Produtos", "Sobre Nós", "FAQ", "Termos de Uso", "Política de Privacidade"].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} Nic Store. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

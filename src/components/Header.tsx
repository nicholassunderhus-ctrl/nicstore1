import { useState, useEffect } from "react";
import { Search, ShoppingCart, Menu, X, LogOut, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "./SocialLinks";
import { LoginModal } from "./LoginModal";
import { supabase } from "@/lib/supabase";

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
}

export const Header = ({ cartCount, onCartClick }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Verifica se já tem alguém logado ao carregar a página
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    // Fica escutando quando alguém entra ou sai da conta
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        {/* Announcement Bar */}
        <div className="bg-gradient-to-r from-primary/20 via-primary/10 to-secondary/20 py-2 px-4 text-center">
          <p className="text-xs sm:text-sm font-medium">
            🎮 <span className="text-primary">Sorteios diários</span> no nosso Discord! 
            <span className="ml-2 text-muted-foreground">Entre agora e participe</span>
          </p>
        </div>

        {/* Main Header */}
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
                <span className="text-primary neon-text">NIC</span>
                <span className="text-foreground"> STORE</span>
              </h1>
            </div>

            {/* Search Bar - Desktop */}
            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <div className="relative w-full group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <input
                  type="text"
                  placeholder="Buscar produtos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-11 pl-11 pr-4 bg-muted/50 border border-border rounded-full text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:bg-muted transition-all duration-300"
                />
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-4">
              <SocialLinks />
              
              <div className="h-6 w-px bg-border mx-2" />
              
              {user ? (
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <User className="h-4 w-4 text-primary" />
                    <span className="hidden lg:inline-block max-w-[150px] truncate">{user.email}</span>
                  </div>
                  <Button variant="ghost" size="iconSm" onClick={handleLogout} title="Sair">
                    <LogOut className="h-4 w-4 text-muted-foreground hover:text-destructive" />
                  </Button>
                </div>
              ) : (
                <Button variant="neonOutline" size="sm" onClick={() => setIsLoginOpen(true)}>
                  Entrar
                </Button>
              )}
              
              <Button variant="glass" size="icon" onClick={onCartClick} className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 bg-primary text-primary-foreground text-xs font-bold rounded-full flex items-center justify-center animate-pulse-glow">
                    {cartCount}
                  </span>
                )}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-3">
              <Button variant="glass" size="iconSm" onClick={onCartClick} className="relative">
                <ShoppingCart className="h-4 w-4" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 h-4 w-4 bg-primary text-primary-foreground text-[10px] font-bold rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Button>
              
              <Button 
                variant="ghost" 
                size="iconSm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Search */}
          <div className="md:hidden mt-4">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Buscar produtos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-10 pl-10 pr-4 bg-muted/50 border border-border rounded-full text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-all"
              />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-card/95 backdrop-blur-md animate-slide-in-bottom">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <SocialLinks />
              
              {user ? (
                <div className="space-y-3">
                  <p className="text-sm text-center text-muted-foreground">{user.email}</p>
                  <Button variant="outline" className="w-full gap-2" onClick={handleLogout}>
                    <LogOut className="h-4 w-4" /> Sair
                  </Button>
                </div>
              ) : (
                <Button 
                  variant="neon" 
                  className="w-full" 
                  onClick={() => {
                    setIsLoginOpen(true);
                    setIsMenuOpen(false);
                  }}
                >
                  Entrar
                </Button>
              )}
            </div>
          </div>
        )}
      </header>

      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
};

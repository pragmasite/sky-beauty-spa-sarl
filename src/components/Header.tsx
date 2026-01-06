import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Globe, Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const Header = () => {
  const { t, lang, otherLangs, getLangPath } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <a href="#" className="flex flex-col">
          <span className={`font-serif text-xl font-bold ${isScrolled ? "text-primary" : "text-white"}`}>
            SKY BEAUTY
          </span>
          <span
            className={`text-xs tracking-widest ${isScrolled ? "text-muted-foreground" : "text-white/70"}`}
          >
            {t.nav.profession}
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#about" className={`text-sm font-medium transition-colors ${isScrolled ? "text-foreground hover:text-primary" : "text-white/80 hover:text-white"}`}>
            {t.nav.about}
          </a>
          <a href="#services" className={`text-sm font-medium transition-colors ${isScrolled ? "text-foreground hover:text-primary" : "text-white/80 hover:text-white"}`}>
            {t.nav.services}
          </a>
          <a href="#gallery" className={`text-sm font-medium transition-colors ${isScrolled ? "text-foreground hover:text-primary" : "text-white/80 hover:text-white"}`}>
            {t.nav.gallery}
          </a>
          <a href="#hours" className={`text-sm font-medium transition-colors ${isScrolled ? "text-foreground hover:text-primary" : "text-white/80 hover:text-white"}`}>
            {t.nav.hours}
          </a>
          <a href="#contact" className={`text-sm font-medium transition-colors ${isScrolled ? "text-foreground hover:text-primary" : "text-white/80 hover:text-white"}`}>
            {t.nav.contact}
          </a>

          {/* Language Switcher */}
          <div className="flex items-center gap-2 border-l border-white/20 pl-6">
            <Globe className={`h-4 w-4 ${isScrolled ? "text-primary" : "text-white/70"}`} />
            <select
              value={lang}
              onChange={(e) => {
                const newLang = e.target.value as typeof lang;
                window.location.href = getLangPath(newLang);
              }}
              className={`text-sm font-medium bg-transparent border-none cursor-pointer ${isScrolled ? "text-foreground" : "text-white"}`}
            >
              <option value="fr">Français</option>
              <option value="en">English</option>
              <option value="de">Deutsch</option>
            </select>
          </div>

          <Button asChild className="bg-primary hover:bg-primary/90">
            <a href="tel:+41763403671">
              <Phone className="h-4 w-4 mr-2" />
              {t.nav.call}
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2"
        >
          {isOpen ? (
            <X className={`h-6 w-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
          ) : (
            <Menu className={`h-6 w-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
          )}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md shadow-soft md:hidden">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <a href="#about" className="text-sm font-medium text-foreground hover:text-primary" onClick={() => setIsOpen(false)}>
                {t.nav.about}
              </a>
              <a href="#services" className="text-sm font-medium text-foreground hover:text-primary" onClick={() => setIsOpen(false)}>
                {t.nav.services}
              </a>
              <a href="#gallery" className="text-sm font-medium text-foreground hover:text-primary" onClick={() => setIsOpen(false)}>
                {t.nav.gallery}
              </a>
              <a href="#hours" className="text-sm font-medium text-foreground hover:text-primary" onClick={() => setIsOpen(false)}>
                {t.nav.hours}
              </a>
              <a href="#contact" className="text-sm font-medium text-foreground hover:text-primary" onClick={() => setIsOpen(false)}>
                {t.nav.contact}
              </a>
              <div className="flex items-center gap-2 py-2 border-t">
                <Globe className="h-4 w-4 text-primary" />
                <select
                  value={lang}
                  onChange={(e) => {
                    const newLang = e.target.value as typeof lang;
                    window.location.href = getLangPath(newLang);
                  }}
                  className="text-sm font-medium bg-transparent border-none cursor-pointer text-foreground"
                >
                  <option value="fr">Français</option>
                  <option value="en">English</option>
                  <option value="de">Deutsch</option>
                </select>
              </div>
              <Button asChild className="bg-primary hover:bg-primary/90 w-full">
                <a href="tel:+41763403671">
                  <Phone className="h-4 w-4 mr-2" />
                  {t.nav.call}
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

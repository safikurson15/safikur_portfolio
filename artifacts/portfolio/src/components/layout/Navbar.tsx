import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      
      let current = "home";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-3 glass-panel" : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <a 
          href="#home" 
          onClick={(e) => { e.preventDefault(); scrollTo("#home"); }}
          className="text-xl font-display font-bold text-foreground tracking-tight flex items-center gap-2"
        >
          <div className="w-8 h-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
            SR
          </div>
          Safikur<span className="text-primary">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
              className={`text-sm font-medium transition-colors hover:text-primary relative ${
                activeSection === link.href.substring(1) ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.name}
              {activeSection === link.href.substring(1) && (
                <motion.div 
                  layoutId="activeNav"
                  className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-primary rounded-full"
                />
              )}
            </a>
          ))}
          <a 
            href={PORTFOLIO_DATA.personal.resume} 
            target="_blank" 
            rel="noreferrer"
            className="px-5 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300"
          >
            Resume
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-foreground p-2 -mr-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-panel border-x-0 border-b-0 absolute top-full left-0 right-0 overflow-hidden"
          >
            <div className="flex flex-col px-4 py-6 gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                  className={`text-lg font-medium px-4 py-2 rounded-lg transition-colors ${
                    activeSection === link.href.substring(1) 
                      ? "bg-primary/10 text-primary" 
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href={PORTFOLIO_DATA.personal.resume} 
                target="_blank" 
                rel="noreferrer"
                className="mt-4 px-4 py-3 bg-primary text-primary-foreground text-center font-semibold rounded-xl shadow-lg shadow-primary/25"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

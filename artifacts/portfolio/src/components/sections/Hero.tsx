import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { ArrowRight, Download, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={`${import.meta.env.BASE_URL}images/hero-bg.png`} 
          alt="Civil Engineering Blueprint Abstract" 
          className="w-full h-full object-cover opacity-15 dark:opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background dark:from-background/60 dark:to-background"></div>
        
        {/* Decorative Gradients */}
        <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full bg-primary/10 blur-[120px] mix-blend-multiply pointer-events-none"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-accent/20 blur-[100px] mix-blend-multiply pointer-events-none"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 border border-primary/20 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for Opportunities
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tight mb-6 leading-[1.1]"
          >
            Hello, I'm <br />
            <span className="text-gradient">{PORTFOLIO_DATA.personal.name}</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground font-light mb-8 max-w-2xl leading-relaxed"
          >
            {PORTFOLIO_DATA.personal.title}. {PORTFOLIO_DATA.personal.tagline}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 mb-12"
          >
            <a 
              href="#projects" 
              className="px-8 py-4 bg-foreground text-background rounded-full font-semibold flex items-center gap-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-1"
            >
              View My Work <ArrowRight size={18} />
            </a>
            <a 
              href={PORTFOLIO_DATA.personal.resume} 
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 bg-card border-2 border-border text-foreground rounded-full font-semibold flex items-center gap-2 hover:border-primary hover:text-primary transition-all duration-300 hover:-translate-y-1"
            >
              Resume <Download size={18} />
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center gap-6 text-sm text-muted-foreground font-medium"
          >
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-primary" />
              {PORTFOLIO_DATA.personal.location}
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-border"></div>
            <div>{PORTFOLIO_DATA.personal.nationality}</div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-xs uppercase tracking-widest font-semibold">Scroll</span>
        <div className="w-[1px] h-12 bg-border overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-full h-1/2 bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
}

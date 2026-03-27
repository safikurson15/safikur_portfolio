import { SectionHeading } from "@/components/SectionHeading";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <img 
          src={`${import.meta.env.BASE_URL}images/texture.png`} 
          alt="Texture" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading title="Education" subtitle="My academic background and continuous learning journey." />

        <div className="relative pl-4 md:pl-0">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block"></div>
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 md:hidden"></div>

          <div className="space-y-12">
            {PORTFOLIO_DATA.education.map((edu, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-card border-4 border-primary rounded-full -translate-x-1/2 flex items-center justify-center z-10">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>

                  {/* Content Box */}
                  <div className={`w-full pl-12 md:pl-0 md:w-1/2 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 text-left'}`}>
                    <div className="bg-card p-6 md:p-8 rounded-2xl shadow-lg border border-border hover:border-primary/50 transition-colors duration-300">
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-bold rounded-full mb-4">
                        {edu.period}
                      </span>
                      <h3 className="text-xl font-bold text-foreground mb-2 leading-tight">
                        {edu.degree}
                      </h3>
                      <h4 className="text-lg font-medium text-muted-foreground mb-4">
                        {edu.institution}
                      </h4>
                      <p className="text-sm text-muted-foreground flex items-center gap-1.5 opacity-80 justify-start">
                        <GraduationCap size={16} className="text-primary" /> {edu.location}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

import { SectionHeading } from "@/components/SectionHeading";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { motion } from "framer-motion";
import { ArrowUpRight, Folders } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Academic Projects" subtitle="Research and practical engineering studies undertaken during my academic tenure." />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          {PORTFOLIO_DATA.projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group h-full flex flex-col bg-card rounded-3xl overflow-hidden border border-border hover:border-primary/40 shadow-lg shadow-black/5 hover:shadow-xl transition-all duration-500"
            >
              <div className="p-8 flex flex-col h-full">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:-translate-y-1 transition-transform">
                  <Folders size={28} />
                </div>
                
                <div className="mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2 block">
                    {project.context}
                  </span>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-muted-foreground mb-8 flex-grow">
                  {project.description}
                </p>
                
                <div className="mt-auto pt-6 border-t border-border/60 flex items-center justify-between text-sm text-muted-foreground font-medium">
                  <span>{project.period}</span>
                  <ArrowUpRight className="text-primary opacity-0 -translate-x-4 translate-y-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

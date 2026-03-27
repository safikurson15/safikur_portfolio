import { SectionHeading } from "@/components/SectionHeading";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { motion } from "framer-motion";
import { Award, BookOpen, Presentation, FileBadge } from "lucide-react";

export function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Achievements & Learnings" subtitle="Certifications, workshops, and recognition that expand my engineering toolkit." />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          
          {/* Certifications & Awards */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold flex items-center gap-3 mb-6">
              <FileBadge className="text-primary" /> Certifications & Awards
            </h3>
            
            <div className="space-y-4">
              {PORTFOLIO_DATA.certifications.map((cert, idx) => (
                <motion.div 
                  key={`cert-${idx}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-card p-6 rounded-2xl border border-border shadow-sm flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                    <Award size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-lg">{cert.title}</h4>
                    <p className="text-muted-foreground">{cert.issuer}</p>
                    <p className="text-xs font-semibold text-primary mt-2">{cert.date}</p>
                  </div>
                </motion.div>
              ))}

              {PORTFOLIO_DATA.awards.map((award, idx) => (
                <motion.div 
                  key={`award-${idx}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-card p-6 rounded-2xl border border-border shadow-sm flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center shrink-0 mt-1">
                    <Award size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-lg">{award.title}</h4>
                    <p className="text-muted-foreground">{award.issuer} - {award.date}</p>
                    <p className="text-sm text-muted-foreground mt-2">{award.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Workshops & Webinars */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold flex items-center gap-3 mb-6">
              <Presentation className="text-primary" /> Continuous Learning
            </h3>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden"
            >
              <div className="p-6 bg-muted/50 border-b border-border">
                <h4 className="font-bold text-lg flex items-center gap-2">
                  <BookOpen size={18} className="text-primary" /> Workshops Attended
                </h4>
              </div>
              <ul className="p-6 space-y-4">
                {PORTFOLIO_DATA.workshops.map((ws, idx) => (
                  <li key={`ws-${idx}`} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></div>
                    <span className="leading-relaxed">{ws}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden"
            >
              <div className="p-6 bg-muted/50 border-b border-border">
                <h4 className="font-bold text-lg flex items-center gap-2">
                  <Presentation size={18} className="text-primary" /> Webinars Attended
                </h4>
              </div>
              <ul className="p-6 space-y-4">
                {PORTFOLIO_DATA.webinars.map((wb, idx) => (
                  <li key={`wb-${idx}`} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></div>
                    <span className="leading-relaxed">{wb}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

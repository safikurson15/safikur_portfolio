import { SectionHeading } from "@/components/SectionHeading";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Work Experience" subtitle="My professional trajectory and practical industry involvement." />

        <div className="space-y-12">
          {PORTFOLIO_DATA.experience.map((job, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-card rounded-3xl p-8 md:p-10 shadow-xl shadow-black/5 border border-border/50 relative overflow-hidden group hover:border-primary/30 transition-colors"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 border-b border-border pb-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-3">
                    <Briefcase className="w-6 h-6 text-primary" /> {job.role}
                  </h3>
                  <div className="text-lg font-semibold text-primary">{job.company}</div>
                </div>
                <div className="flex flex-col gap-2 text-sm font-medium text-muted-foreground">
                  <span className="flex items-center gap-2 bg-muted px-3 py-1 rounded-full w-fit">
                    <Calendar size={14} /> {job.period}
                  </span>
                  <span className="flex items-center gap-2 bg-muted px-3 py-1 rounded-full w-fit">
                    <MapPin size={14} /> {job.location}
                  </span>
                </div>
              </div>

              <ul className="space-y-4">
                {job.responsibilities.map((resp, rIdx) => (
                  <li key={rIdx} className="flex items-start gap-3 text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                    <span className="leading-relaxed">{resp}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8">Internships</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PORTFOLIO_DATA.internships.map((internship, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel p-6 rounded-2xl flex flex-col"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <Briefcase size={20} />
                  </div>
                  <h4 className="font-bold text-lg">{internship.role}</h4>
                </div>
                <p className="text-foreground font-medium mb-2">{internship.company}</p>
                <p className="text-sm text-muted-foreground flex items-center gap-2 mt-auto pt-4 border-t border-border/50">
                  <MapPin size={14} /> {internship.location}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

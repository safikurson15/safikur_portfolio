import { SectionHeading } from "@/components/SectionHeading";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { motion } from "framer-motion";
import { Building2, Compass, Ruler } from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: <Building2 className="w-6 h-6 text-primary" />,
      title: "Infrastructure Design",
      desc: "Creating sustainable, reliable structures."
    },
    {
      icon: <Ruler className="w-6 h-6 text-primary" />,
      title: "Precision Analysis",
      desc: "Expert in AutoCAD, STAAD-PRO & GIS."
    },
    {
      icon: <Compass className="w-6 h-6 text-primary" />,
      title: "Project Management",
      desc: "Delivering quality within budget constraints."
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="About Me" subtitle="A brief overview of my professional journey and aspirations." />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 prose prose-lg dark:prose-invert prose-p:text-muted-foreground prose-p:leading-relaxed"
          >
            <p className="text-xl font-medium text-foreground mb-6">
              I am a dedicated Civil Engineer with a deep passion for transforming communities through thoughtful infrastructure.
            </p>
            <p>
              {PORTFOLIO_DATA.about}
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-panel p-4 rounded-xl flex flex-col">
                <span className="text-sm text-muted-foreground mb-1">Education Focus</span>
                <span className="font-semibold text-foreground">Water Resources & Hydraulic Engineering</span>
              </div>
              <div className="glass-panel p-4 rounded-xl flex flex-col">
                <span className="text-sm text-muted-foreground mb-1">Current Role</span>
                <span className="font-semibold text-foreground">Assistant Engineer (Civil)</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 grid gap-6"
          >
            {highlights.map((item, idx) => (
              <div 
                key={idx}
                className="bg-card border border-border/50 p-6 rounded-2xl shadow-lg shadow-black/5 flex gap-4 hover:border-primary/30 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

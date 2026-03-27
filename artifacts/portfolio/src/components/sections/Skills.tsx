import { SectionHeading } from "@/components/SectionHeading";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { motion } from "framer-motion";

export function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1 }
  };

  return (
    <section id="skills" className="py-24 bg-foreground text-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* We need a light text heading variant here since bg is dark */}
        <div className="mb-12 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            Technical Skills<span className="text-primary">.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-gray-400 max-w-2xl"
          >
            Software proficiencies and core engineering capabilities.
          </motion.p>
          <div className="h-1 w-24 bg-primary mt-6 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(PORTFOLIO_DATA.skills).map(([category, skills], idx) => (
            <motion.div 
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md hover:bg-white/10 transition-colors"
            >
              <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">{category}</h3>
              <motion.div 
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-wrap gap-3"
              >
                {skills.map(skill => (
                  <motion.span
                    key={skill}
                    variants={item}
                    className="px-4 py-2 bg-primary/20 text-primary-foreground border border-primary/30 rounded-xl text-sm font-semibold shadow-inner"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative large text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] font-black text-white/5 pointer-events-none whitespace-nowrap">
        EXPERTISE
      </div>
    </section>
  );
}

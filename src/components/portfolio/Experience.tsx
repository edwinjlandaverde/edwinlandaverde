import { motion } from "framer-motion";
import { experiences } from "@/data/portfolio";

const Experience = () => {
  return (
    <section id="experience" className="py-32 lg:py-40 border-t border-border bg-bg-secondary/40">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <span className="eyebrow">/03 · Trayectoria</span>
            <h2 className="display-serif text-5xl md:text-7xl mt-6 text-balance">
              Cuatro capítulos, <em className="italic">una práctica.</em>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-xs">
            De pasante a docente. Del print al prompt. Una línea editorial que evoluciona con cada proyecto.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-2 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          <div className="space-y-16 md:space-y-24">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}
              >
                {/* Dot */}
                <div className="absolute left-2 md:left-1/2 top-2 w-3 h-3 rounded-full bg-primary -translate-x-1/2 ring-4 ring-background" />

                <div className={`pl-10 md:pl-0 ${i % 2 ? "md:pl-16" : "md:pr-16 md:text-right"}`}>
                  <div className="mono text-[10px] uppercase tracking-widest text-primary mb-3">{exp.period}</div>
                  <h3 className="display-serif text-3xl md:text-4xl mb-1">{exp.company}</h3>
                  <p className="text-sm text-muted-foreground">{exp.role}</p>
                </div>

                <div className={`pl-10 md:pl-0 ${i % 2 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                  <p className="text-base leading-relaxed text-foreground/80 mb-5">
                    {exp.description}
                  </p>
                  <div className={`flex flex-wrap gap-2 ${i % 2 ? "md:justify-end" : ""}`}>
                    {exp.skills.map((s) => (
                      <span key={s} className="text-[10px] mono uppercase tracking-widest px-3 py-1 border border-border rounded-full text-muted-foreground">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

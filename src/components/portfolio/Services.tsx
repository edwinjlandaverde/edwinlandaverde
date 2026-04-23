import { motion } from "framer-motion";
import { services } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="py-32 lg:py-40 border-t border-border">
      <div className="container-x">
        <div className="mb-20">
          <span className="eyebrow">/04 · Especialidades</span>
          <h2 className="display-serif text-5xl md:text-7xl mt-6 max-w-4xl text-balance">
            Cuatro pilares para <em className="italic">marcas que importan.</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {services.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="group bg-background hover:bg-bg-secondary p-8 md:p-12 transition-colors cursor-default relative overflow-hidden"
            >
              <div className="flex items-start justify-between mb-12">
                <span className="mono text-xs text-muted-foreground">{s.n}</span>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground transition-all group-hover:text-primary group-hover:rotate-45" />
              </div>
              <h3 className="display-serif text-3xl md:text-4xl mb-4 group-hover:text-primary transition-colors">
                {s.title}
              </h3>
              <p className="text-muted-foreground max-w-md leading-relaxed">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

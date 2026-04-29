import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { categories, projects, type Project } from "@/data/portfolio";
import { Sparkles, X } from "lucide-react";
import AnimationsCTA from "./AnimationsCTA";

const Portfolio = () => {
  const [filter, setFilter] = useState<(typeof categories)[number]>("Todos");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = filter === "Todos" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="lg:py-40 border-t border-border py-[75px]">
      <div className="container-x">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <span className="eyebrow">/05 · Portafolio</span>
            <h2 className="display-serif text-5xl md:text-7xl mt-6 text-balance">
              Trabajo <em className="italic">seleccionado.</em>
            </h2>
          </div>

        </div>

        <motion.div
          layout
          className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-3 md:gap-4 [column-fill:_balance]"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.button
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setSelected(p)}
                className="group relative block w-full mb-3 md:mb-4 break-inside-avoid overflow-hidden bg-bg-secondary rounded-sm text-left"
              >
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="block w-full h-auto transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />


                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="mono text-[10px] uppercase tracking-widest text-primary mb-2">{p.category}</div>
                  <div className="display-serif text-xl md:text-2xl leading-tight">{p.title}</div>
                  <div className="text-xs text-muted-foreground mt-1">Ver caso →</div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimationsCTA />

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[80] bg-background/90 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
          >
            <motion.div
              initial={{ y: 30, scale: 0.96 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 30, scale: 0.96 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-bg-secondary border border-border rounded-sm max-w-5xl w-full max-h-[90vh] overflow-auto"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <img src={selected.image} alt={selected.title} className="w-full aspect-[16/10] object-scale-down" />
              <div className="p-6 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <div className="mono text-xs uppercase tracking-widest text-primary mb-3 flex items-center gap-2">
                    {selected.category}
                    {selected.ai && <span className="inline-flex items-center gap-1"><Sparkles className="w-3 h-3" /> MODELADO 3D</span>}
                  </div>
                  <h3 className="display-serif text-4xl md:text-5xl mb-4">{selected.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{selected.description}</p>
                </div>
                <div className="space-y-5 mono text-xs">
                  <div>
                    <div className="uppercase tracking-widest text-muted-foreground mb-1.5">Cliente</div>
                    <div>{selected.client}</div>
                  </div>
                  <div>
                    <div className="uppercase tracking-widest text-muted-foreground mb-1.5">Año</div>
                    <div>{selected.year}</div>
                  </div>
                  <div>
                    <div className="uppercase tracking-widest text-muted-foreground mb-1.5">Herramientas</div>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {selected.tools.map((t) => (
                        <span key={t} className="px-2 py-1 border border-border rounded-full text-[10px]">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
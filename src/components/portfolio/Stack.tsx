import { motion } from "framer-motion";
import { stack } from "@/data/portfolio";

const Stack = () => {
  return (
    <section id="stack" className="py-32 lg:py-40 border-t border-border bg-bg-secondary/40">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="eyebrow">/07 · Stack</span>
            <h2 className="display-serif text-5xl md:text-7xl mt-6">
              Herramientas <em className="italic">del oficio.</em>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
          {Object.entries(stack).map(([cat, items], i) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-background p-6 lg:p-8 min-h-[260px]"
            >
              <div className="eyebrow mb-6 text-primary">{cat}</div>
              <ul className="space-y-2.5">
                {items.map((it, j) => (
                  <motion.li
                    key={it}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 + j * 0.05 }}
                    className="text-sm flex items-center gap-3"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary" />
                    {it}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;

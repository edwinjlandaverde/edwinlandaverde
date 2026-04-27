import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const steps = [
  { n: "01", t: "Prompt engineering", b: "Construcción de briefs visuales." },
  { n: "02", t: "Generación", b: "Gemini · NanoBanana 2 · Google Flow · Grok Imagine." },
  { n: "03", t: "Post-producción", b: "Retoque, color y composición." },
  { n: "04", t: "Arte final", b: "Adaptación multi-formato y entrega." },
];

const stats = [
  { n: "∞", l: "Multiples campañas mejoradas gráficamente con IA en producción comercial" },
  { n: "+7", l: "Plataformas dominadas: Gemini, NanoBanana 2, Google Flow, Claude, Grok Imagine, Perplexity" },
  { n: "70%", l: "Reducción en tiempos de producción fotográfica" },
];

const AISection = () => {
  return (
    <section id="ai" className="py-32 lg:py-40 border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-30"
        style={{ background: "radial-gradient(circle at 70% 30%, hsl(var(--primary) / 0.2), transparent 50%)" }} />

      <div className="container-x relative">
        <div className="flex items-center gap-3 mb-6">
          <span className="eyebrow text-primary">/06 · Diferenciador</span>
          <Sparkles className="w-3 h-3 text-primary" />
        </div>

        <h2 className="display-serif text-5xl md:text-7xl lg:text-8xl text-balance max-w-5xl mb-8">
          Workflow de producción con <em className="italic text-primary">IA generativa.</em>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mb-20">
          Convertí la IA en un músculo de producción dentro de marcas reales no como gadget,
          sino como capa creativa con resultados medibles.
        </p>

        {/* Flow */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border mb-24 border border-border">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-background p-6 md:p-8 relative group hover:bg-bg-secondary transition-colors"
            >
              <div className="mono text-xs text-primary mb-8">{s.n} →</div>
              <div className="display-serif text-2xl md:text-3xl mb-2">{s.t}</div>
              <div className="text-sm text-muted-foreground">{s.b}</div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="border-l-2 border-primary pl-6 py-2"
            >
              <div className="display-serif text-6xl md:text-7xl text-primary mb-2 leading-none">{s.n}</div>
              <div className="text-sm text-muted-foreground max-w-[14rem]">{s.l}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AISection;

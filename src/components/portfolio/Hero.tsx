import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import portrait from "@/assets/portrait.jpg";

const stackItems = [
  "ADOBE CC", "GEMINI", "CINEMA 4D", "VEO", "MARKETING DIGITAL",
  "AFTER EFFECTS", "PHOTOSHOP", "DOCENCIA", "BRANDING", "CINEMA 4D",
  "ADOBE CC", "GEMINI", "BRANDING", "ILLUSTRATOR", "RETAIL DESIGN",
  "CLAUDE", "MAILING", "GOOGLE FLOW", "BRANDING", "CINEMA 4D",
  "ADOBE CC", "GEMINI", "CINEMA 4D", "VEO", "MARKETING DIGITAL",
  "AFTER EFFECTS", "PHOTOSHOP", "DOCENCIA", "BRANDING", "CINEMA 4D",
  "ADOBE CC", "GEMINI", "BRANDING", "ILLUSTRATOR", "RETAIL DESIGN",
  "CLAUDE", "MAILING", "MOTION GRAPHICS", "BRANDING", "CINEMA 4D",
  "ADOBE CC", "GEMINI", "CINEMA 4D", "VEO", "MARKETING DIGITAL",
  "AFTER EFFECTS", "PHOTOSHOP", "DOCENCIA", "BRANDING", "CINEMA 4D",
  "ADOBE CC", "GEMINI", "BRANDING", "ILLUSTRATOR", "RETAIL DESIGN",
  "CLAUDE", "MAILING", "GOOGLE FLOW", "BRANDING", "CINEMA 4D",
  "ADOBE CC", "GEMINI", "CINEMA 4D", "VEO", "MARKETING DIGITAL",
  "AFTER EFFECTS", "PHOTOSHOP", "DOCENCIA", "BRANDING", "CINEMA 4D",
  "ADOBE CC", "GEMINI", "BRANDING", "ILLUSTRATOR", "RETAIL DESIGN",
  "CLAUDE", "MAILING", "CONTENT CREATION", "BRANDING", "CINEMA 4D"
];

const Hero = () => {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="relative min-h-screen flex items-end pt-32 pb-16 overflow-hidden">
      {/* Background radial */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--gradient-radial)" }} />

      <div className="container-x relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
        {/* Left 60 */}
        <div className="lg:col-span-7 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4"
          >
            <span className="w-8 h-px bg-primary" />
            <span className="eyebrow text-foreground">El Salvador · 2026</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="display-serif text-balance"
            style={{ fontSize: "clamp(3rem, 8.5vw, 8rem)" }}
          >
            Diseño, datos y{" "}
            <em className="italic text-primary">narrativa digital.</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
          >
            <span className="text-foreground">Content & Multimedia Strategist.</span> Fusiono diseño gráfico,
            Inteligencia Artificial y análisis para construir marcas humanas con propósito.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="flex flex-wrap items-center gap-3"
          >
            <button
              onClick={() => scrollTo("portfolio")}
              className="group inline-flex items-center gap-3 rounded-full bg-primary px-7 py-3.5 text-primary-foreground font-medium hover:bg-primary/90 transition-all hover:scale-[1.02]"
            >
              Ver portafolio
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center gap-3 rounded-full border border-border px-7 py-3.5 hover:border-primary hover:text-primary transition-colors"
            >
              Agenda conmigo
            </button>
          </motion.div>

          <div className="flex flex-wrap gap-x-8 gap-y-2 pt-8 mono text-xs uppercase tracking-widest text-muted-foreground">
            <div><span className="text-primary mr-2">→</span>DISEÑO GRÁFICO</div>
            <div><span className="text-primary mr-2">→</span>+5 AÑOS DE EXPERIENCIA</div>
            <div><span className="text-primary mr-2">→</span>DOCENTE UNIVERSITARIO</div>
          </div>
        </div>

        {/* Right 40 — portrait + marquee */}
        <div className="lg:col-span-5 grid grid-cols-5 gap-4 h-[520px] lg:h-[640px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-4 relative overflow-hidden rounded-sm bg-bg-secondary"
          >
            <img
              src={portrait}
              alt="Edwin Landaverde"
              className="w-full h-full object-cover"
              style={{ filter: "contrast(1.05)" }}
            />
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between mono text-[10px] uppercase tracking-widest">
              <div>
                <div className="text-primary">EJML · 2026</div>
                <div className="text-foreground/70 mt-1">EL SALVADOR</div>
              </div>
              <div className="text-foreground/70">/01</div>
            </div>
          </motion.div>

          <div className="col-span-1 relative overflow-hidden marquee-mask">
            <div className="absolute inset-x-0 flex flex-col gap-4 animate-marquee-y mono text-xs uppercase tracking-widest text-muted-foreground">
              {[...stackItems, ...stackItems].map((s, i) => (
                <div key={i} className="rotate-180 [writing-mode:vertical-rl] py-2 border-t border-border">
                  {s}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo("about")}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 mono text-[10px] uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
      >
        Scroll
        <ArrowDown className="w-4 h-4" />
      </motion.button>
    </section>
  );
};

export default Hero;

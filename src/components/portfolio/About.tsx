import { motion } from "framer-motion";
import { education } from "@/data/portfolio";

const About = () => {
  return (
    <section id="about" className="py-32 lg:py-40 border-t border-border">
      <div className="container-x grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-3">
          <div className="sticky top-32">
            <span className="eyebrow">/02 · Sobre mí</span>
            <h2 className="display-serif italic text-5xl md:text-6xl mt-6">
              Hola.
            </h2>
          </div>
        </div>

        <div className="lg:col-span-9 space-y-12">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-2xl md:text-3xl lg:text-4xl leading-snug text-balance display-serif font-light"
          >
            Soy <em className="italic text-primary">Diseñador Gráfico Multimedia</em> por la Universidad Autónoma de Santa Ana,
            con posgrado en <em className="italic">Comunicación Digital</em> (UTEC) y actualmente estudio un Máster
            en Dirección Comercial y Marketing en la Escuela de Negocios Europea de Barcelona.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="text-lg leading-relaxed text-muted-foreground max-w-3xl"
          >
            Mi práctica se articula en cuatro ejes: <span className="text-foreground">habilidades técnicas, valores,
            diseño funcional e innovación digital.</span> Además como docente universitario, formo a la próxima
            generación de diseñadores en fundamentos, señalética y diseño corporativo, integrando metodologías
            ágiles y herramientas de IA generativa.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 pt-12 border-t border-border">
            <div>
              <h3 className="eyebrow mb-6">Formación &amp; Credenciales</h3>
              <ul className="space-y-5">
                {education.map((e, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="grid grid-cols-[100px_1fr] gap-4 pb-5 border-b border-border last:border-0"
                  >
                    <span className="mono text-[10px] uppercase tracking-widest text-primary pt-1">{e.year}</span>
                    <div>
                      <div className="text-sm font-medium leading-tight">{e.degree}</div>
                      <div className="text-xs text-muted-foreground mt-1">{e.school}</div>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="eyebrow mb-6">Filosofía de diseño</h3>
              <div className="space-y-4">
                {[
                  ["Habilidades", "Dominio técnico de la herramienta como base creativa."],
                  ["Valores", "Honradez, proactividad y responsabilidad en cada entrega."],
                  ["Diseño", "Función antes que ornamento — propósito sobre tendencia."],
                  ["Innovación", "IA y datos como aliados, no como sustitutos."],
                ].map(([t, b]) => (
                  <div key={t} className="grid grid-cols-[100px_1fr] gap-4 pb-4 border-b border-border last:border-0">
                    <span className="mono text-[10px] uppercase tracking-widest text-primary pt-1">{t}</span>
                    <p className="text-sm text-muted-foreground leading-relaxed">{b}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

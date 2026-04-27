import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(2, "Mínimo 2 caracteres").max(80),
  email: z.string().trim().email("Email inválido").max(255),
  message: z.string().trim().min(10, "Mínimo 10 caracteres").max(1000),
});

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(form);
    if (!r.success) {
      const errs: Record<string, string> = {};
      r.error.issues.forEach((i) => (errs[i.path[0] as string] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    const subject = encodeURIComponent(`Contacto de ${r.data.name}`);
    const body = encodeURIComponent(`${r.data.message}\n\n— ${r.data.name} (${r.data.email})`);
    window.location.href = `mailto:edwinlandaverde98@gmail.com?subject=${subject}&body=${body}`;
    toast.success("¡Gracias! Abriendo tu cliente de correo…");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-32 lg:py-40 border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-50"
        style={{ background: "radial-gradient(ellipse at bottom, hsl(var(--primary) / 0.15), transparent 60%)" }} />

      <div className="container-x relative grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-7 space-y-10">
          <div>
            <span className="eyebrow">/08 · Contacto</span>
            <h2 className="display-serif text-6xl md:text-8xl lg:text-9xl mt-6 leading-[0.9]">
              Construyamos <em className="italic text-primary">algo memorable.</em>
            </h2>
          </div>

          <div className="space-y-5 pt-8">
            {[
              { Icon: Mail, label: "Email", value: "edwinlandaverde98@gmail.com", href: "mailto:edwinlandaverde98@gmail.com" },
              { Icon: Phone, label: "Teléfono", value: "+503 7402-2992", href: "tel:+50374022992" },
              { Icon: MapPin, label: "Ubicación", value: "El Salvador" },
            ].map(({ Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                className="group flex items-center justify-between gap-4 py-5 border-b border-border hover:border-primary transition-colors"
              >
                <div className="flex items-center gap-5">
                  <Icon className="w-5 h-5 text-primary" />
                  <div>
                    <div className="mono text-[10px] uppercase tracking-widest text-muted-foreground">{label}</div>
                    <div className="text-lg mt-0.5">{value}</div>
                  </div>
                </div>
                {href && <ArrowUpRight className="w-5 h-5 text-muted-foreground transition-all group-hover:text-primary group-hover:rotate-45" />}
              </a>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <a href="https://instagram.com/edwinjlandaverde" target="_blank" rel="noreferrer" className="pill hover:border-primary">@edwinjlandaverde · IG</a>
            <a href="https://t.me/edwinjlandaverde" target="_blank" rel="noreferrer" className="pill hover:border-primary">Telegram</a>
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={submit}
          className="lg:col-span-5 bg-bg-secondary border border-border p-8 md:p-10 rounded-sm h-fit space-y-6"
        >
          <div>
            <label className="eyebrow block mb-2">Nombre</label>
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              maxLength={80}
              className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-2 text-foreground transition-colors"
              placeholder="Tu nombre"
            />
            {errors.name && <p className="text-xs text-accent mt-1">{errors.name}</p>}
          </div>
          <div>
            <label className="eyebrow block mb-2">Email</label>
            <input
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              maxLength={255}
              type="email"
              className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-2 text-foreground transition-colors"
              placeholder="tu@email.com"
            />
            {errors.email && <p className="text-xs text-accent mt-1">{errors.email}</p>}
          </div>
          <div>
            <label className="eyebrow block mb-2">Cuéntame</label>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              maxLength={1000}
              rows={5}
              className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-2 text-foreground transition-colors resize-none"
              placeholder="¿En qué proyecto andas?"
            />
            {errors.message && <p className="text-xs text-accent mt-1">{errors.message}</p>}
          </div>
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-3 rounded-full bg-primary text-primary-foreground py-4 font-medium hover:scale-[1.02] transition-transform group"
          >
            Enviar mensaje
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
          </button>
        </motion.form>
      </div>

      <footer className="container-x mt-32 pt-10 border-t border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="mono text-xs uppercase tracking-widest text-muted-foreground">
          © 2026 EDWIN LANDAVERDE · Esta obra está bajo la licencia CC BY-NC-ND 4.0.
        </div>
        <div className="mono text-xs uppercase tracking-widest text-muted-foreground">
          {"\n"}
        </div>
      </footer>
    </section>
  );
};

export default Contact;

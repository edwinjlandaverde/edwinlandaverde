import { useEffect, useState } from "react";
import { sections } from "@/data/portfolio";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Nav = () => {
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "py-3 bg-background/70 backdrop-blur-xl border-b border-border" : "py-5"
        }`}
      >
        <div className="container-x flex items-center justify-between">
          <button onClick={() => go("hero")} className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-sm bg-primary flex items-center justify-center text-primary-foreground font-serif italic text-lg">
              EL
            </div>
            <span className="hidden sm:inline mono text-xs uppercase tracking-[0.25em] text-muted-foreground group-hover:text-foreground transition-colors">
              Edwin Landaverde
            </span>
          </button>

          <nav className="hidden lg:flex items-center gap-1">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => go(s.id)}
                className={`relative px-4 py-2 mono text-xs uppercase tracking-widest transition-colors ${
                  active === s.id ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {s.label}
                {active === s.id && (
                  <motion.span
                    layoutId="nav-dot"
                    className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"
                  />
                )}
              </button>
            ))}
          </nav>

          <button
            onClick={() => go("contact")}
            className="hidden lg:inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2 text-sm font-medium hover:scale-105 transition-transform"
          >
            Hablemos
            <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground animate-pulse" />
          </button>

          <button onClick={() => setOpen(true)} className="lg:hidden text-foreground p-2" aria-label="Menú">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-background lg:hidden"
          >
            <div className="container-x py-5 flex items-center justify-between">
              <span className="display-serif italic text-2xl">Menú</span>
              <button onClick={() => setOpen(false)} className="p-2"><X className="w-6 h-6" /></button>
            </div>
            <nav className="container-x mt-12 flex flex-col gap-2">
              {sections.map((s, i) => (
                <motion.button
                  key={s.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => go(s.id)}
                  className="text-left display-serif italic text-5xl py-2 hover:text-primary transition-colors"
                >
                  {s.label}.
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;

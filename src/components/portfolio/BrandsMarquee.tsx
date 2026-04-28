const logos = [
  { alt: "VIDRÍ" },
  { alt: "RYOBI" },
  { alt: "MILWAUKEE" },
  { alt: "KÄRCHER" },
  { alt: "POLARBOX" },
  { alt: "NINJA" },
  { alt: "CRS" },
  { alt: "LINGODOCS" },
  { alt: "TUHE GLOBAL" },
  { alt: "UKN PRODUCCIONES" },
  { alt: "GRUPO CALVO" },
  { alt: "NEBRASKA REALTY" },
];

const BrandsMarquee = () => {
  return (
    <section
      aria-label="Marcas con las que he trabajado"
      className="relative overflow-hidden py-6 group"
      style={{
        backgroundColor: "#0A0A0B",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div
        className="flex w-max gap-6 group-hover:[animation-play-state:paused]"
        style={{
          animation: "brands-marquee 40s linear infinite",
        }}
      >
        {[...logos, ...logos].map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center bg-[#141416] border border-white/10 rounded-full px-8 py-3 transition-all duration-300 hover:border-white/20"
          >
            <img
              src="/brands-logos-new.png"
              alt={logo.alt}
              className="h-7 w-auto object-contain grayscale brightness-[1.8] transition-all duration-300 hover:grayscale-0 hover:brightness-100 opacity-100"
              style={{ filter: undefined }}
            />
          </div>
        ))}
      </div>

      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-24"
        style={{ background: "linear-gradient(to right, #0A0A0B, transparent)" }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-24"
        style={{ background: "linear-gradient(to left, #0A0A0B, transparent)" }}
      />

      <style>{`
        @keyframes brands-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default BrandsMarquee;

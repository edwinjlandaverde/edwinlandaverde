const logos = [
  { alt: "VIDRÍ", src: "/logos/vidri.png" },
  { alt: "RYOBI", src: "" },
  { alt: "MILWAUKEE", src: "" },
  { alt: "KÄRCHER", src: "/logos/karcher.png" },
  { alt: "POLARBOX", src: "" },
  { alt: "NINJA", src: "" },
  { alt: "CRS", src: "" },
  { alt: "LINGODOCS", src: "" },
  { alt: "TUHE GLOBAL", src: "" },
  { alt: "UKN PRODUCCIONES", src: "" },
  { alt: "GRUPO CALVO", src: "" },
  { alt: "NEBRASKA REALTY", src: "" },
];

const BrandsMarquee = () => {
  return (
    <section
      aria-label="Marcas con las que he trabajado"
      className="relative overflow-hidden group py-[40px]"
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
              src={logo.src}
              alt={logo.alt}
              className="h-7 w-auto object-contain grayscale brightness-[1.8] transition-all duration-300 hover:grayscale-0 hover:brightness-100 opacity-100"
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

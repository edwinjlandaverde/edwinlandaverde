import vidriLogo from "@/assets/logos/vidri.png";
import karcherLogo from "@/assets/logos/karcher.png";
import crsLogo from "@/assets/logos/crs.png";
import threeMLogo from "@/assets/logos/3m.png";
import lancoLogo from "@/assets/logos/lanco.png";
import boschLogo from "@/assets/logos/bosch.png";
import milwaukeeLogo from "@/assets/logos/milwaukee.png";
import ryobiLogo from "@/assets/logos/ryobi.png";
import castroLogo from "@/assets/logos/castro.png";
import holcimLogo from "@/assets/logos/holcim.png";
import uknLogo from "@/assets/logos/ukn.png";

const logos = [
  { alt: "VIDRÍ", src: vidriLogo },
  { alt: "RYOBI", src: ryobiLogo },
  { alt: "MILWAUKEE", src: milwaukeeLogo },
  { alt: "KÄRCHER", src: karcherLogo },
  { alt: "BOSCH", src: boschLogo },
  { alt: "3M", src: threeMLogo },
  { alt: "CRS", src: crsLogo },
  { alt: "LANCO", src: lancoLogo },
  { alt: "HOLCIM", src: holcimLogo },
  { alt: "CASTRO REALTY GROUP", src: castroLogo },
  { alt: "UKN PRODUCCIONES", src: uknLogo },
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
            className="flex items-center justify-center shrink-0"
            style={{ width: 120, height: 75 }}
          >
            {logo.src ? (
              <img
                src={logo.src}
                alt={logo.alt}
                loading="lazy"
                className="max-w-full max-h-full object-contain grayscale brightness-[1.8] transition-all duration-300 hover:grayscale-0 hover:brightness-100 opacity-100"
              />
            ) : (
              <span className="mono text-[10px] uppercase tracking-widest text-white/40">
                {logo.alt}
              </span>
            )}
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

import { Play, ExternalLink } from "lucide-react";

const AnimationsCTA = () => {
  const baseClass =
    "group relative inline-flex items-center gap-2 rounded-full px-8 py-4 border border-[#E8FF3A]/30 bg-transparent text-[#E8FF3A] font-mono text-[11px] tracking-[0.2em] uppercase overflow-hidden transition-all duration-300 hover:bg-[#E8FF3A] hover:text-[#0A0A0B] hover:border-[#E8FF3A]";

  const sweepStyle = {
    background:
      "linear-gradient(90deg, transparent 0%, rgba(232,255,58,0.12) 50%, transparent 100%)",
    backgroundSize: "200% 100%",
  } as const;

  return (
    <div className="container-x">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-16">
        <a
          href="https://vimeo.com/1187568010?share=copy&fl=sv&fe=ci"
          target="_blank"
          rel="noopener noreferrer"
          className={baseClass}
        >
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-full animate-[shimmer_10s_ease-in-out_infinite] group-hover:[animation-play-state:paused]"
            style={sweepStyle}
          />
          <Play size={13} className="relative z-10" />
          <span className="relative z-10">CONOCE MIS ANIMACIONES más recientes</span>
        </a>

        <a
          href="https://vimeo.com/edwinjlandaverde"
          target="_blank"
          rel="noopener noreferrer"
          className={baseClass}
        >
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-full animate-[shimmer_10s_ease-in-out_infinite] [animation-delay:4s] group-hover:[animation-play-state:paused]"
            style={sweepStyle}
          />
          <ExternalLink size={13} className="relative z-10" />
          <span className="relative z-10">VISITA MI PERFIL DE VIMEO</span>
        </a>
      </div>
    </div>
  );
};

export default AnimationsCTA;

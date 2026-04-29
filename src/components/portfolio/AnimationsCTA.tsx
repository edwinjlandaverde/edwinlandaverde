import { Play } from "lucide-react";

const AnimationsCTA = () => {
  return (
    <div className="container-x">
      <div className="flex justify-center mt-16">
        <a
          href="https://vimeo.com/1187568010?share=copy&fl=sv&fe=ci"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-2 rounded-full px-8 py-4 border border-[#E8FF3A]/30 bg-transparent text-[#E8FF3A] font-mono text-[11px] tracking-[0.2em] uppercase overflow-hidden transition-all duration-300 hover:bg-[#E8FF3A] hover:text-[#0A0A0B] hover:border-[#E8FF3A] animate-[float_6s_ease-in-out_infinite]"
        >
          {/* Pulse ring — sutil */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-full border border-[#E8FF3A]/15 animate-[pulse-ring_4s_ease-out_infinite] group-hover:[animation-play-state:paused]"
          />
          {/* Shimmer sweep — sutil */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-full animate-[shimmer_5s_ease-in-out_infinite] group-hover:[animation-play-state:paused]"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(232,255,58,0.06) 50%, transparent 100%)",
              backgroundSize: "200% 100%",
            }}
          />
          <Play size={13} className="relative z-10" />
          <span className="relative z-10">CONOCE MIS ANIMACIONES</span>
        </a>
      </div>
    </div>
  );
};

export default AnimationsCTA;

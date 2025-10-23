import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

interface StickyEnrollBarProps {
  onCTAClick: () => void;
  dismissible?: boolean;
}

export const StickyEnrollBar = ({ onCTAClick, dismissible = true }: StickyEnrollBarProps) => {
  const [hidden, setHidden] = useState(false);
  if (hidden) return null;

  return (
    <motion.aside
      role="region"
      aria-label="Enrollment bar"
      initial={{ y: 64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
      className="
        fixed inset-x-0 bottom-0 z-50
        bg-[#0F1A29]/95 backdrop-blur
        border-t border-[#FFD43B]/20
        px-3 sm:px-6
        pb-[env(safe-area-inset-bottom)]
      "
    >
      <div
        className="
          max-w-7xl mx-auto
          py-2.5 sm:py-3
          flex flex-col sm:flex-row items-center gap-2 sm:gap-3
          text-white 
        "
      >
        {/* Left: status */}
        <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
          <span className="relative inline-flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[#FFD43B] opacity-70 animate-ping" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FFD43B]" />
          </span>
          <div className="text-left leading-tight">
            <p className="font-bold text-xs sm:text-sm">
              Almost Full — <span className="text-[#FFD43B]">Only 2 Seats Left</span>
            </p>
            <p className="text-[11px] sm:text-xs text-white/80">
              Enrollment closes on <span className="font-semibold text-white">23 October</span>
            </p>
          </div>
        </div>

        {/* Right: CTA + Dismiss */}
        <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto sm:ml-auto">
          <button
            type="button"
            onClick={onCTAClick}
            className="
              inline-flex items-center justify-center
              h-9 sm:h-10 px-3.5 sm:px-5
              rounded-md
              bg-gradient-to-r from-[#FFD43B] to-[#FACC15]
              text-black font-extrabold tracking-wide
              shadow-sm hover:shadow-md
              hover:from-[#FFE873] hover:to-[#FACC15]
              active:scale-[0.98]
              transition-all duration-200
              text-[12px] sm:text-sm
              whitespace-nowrap
            "
          >
            Join Now for ₹99
          </button>

          {dismissible && (
            <button
              aria-label="Dismiss enrollment bar"
              onClick={() => setHidden(true)}
              className="
                p-1.5 rounded-md border border-white/10 text-white/70
                hover:text-white hover:border-white/20 transition
              "
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </motion.aside>
  );
};

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import coachImage from "@/assets/Chirag1.webp";

interface HeroSectionProps {
  onCTAClick: () => void;
}

export const HeroSection = ({ onCTAClick }: HeroSectionProps) => {
  return (
    <section
      className="
        relative overflow-hidden bg-gradient-hero
        min-h-[100svh] md:min-h-[90vh]
        py-10 sm:py-12 md:py-16
        [overflow-anchor:none]
      "
    >
      {/* Animated background blobs */}
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <div className="absolute top-10 left-4 sm:left-10 w-40 h-40 sm:w-72 sm:h-72 bg-primary rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-10 right-4 sm:right-10 w-48 h-48 sm:w-96 sm:h-96 bg-highlight rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="relative z-10 container mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className="
            grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center
            md:min-h-[80vh]
          "
        >
          {/* ---------------- LEFT SIDE ---------------- */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="
              text-white space-y-4 sm:space-y-6
              text-center lg:text-left
              max-w-2xl mx-auto lg:mx-0
            "
          >
            <h1
              className="
                font-serif font-bold leading-snug sm:leading-tight
                text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                break-words
              "
            >
              Become A Highly Paid Data Scientist
            </h1>

            <p
              className="
                text-base sm:text-lg md:text-xl
                text-gray-200 font-medium
              "
            >
              By Mastering AI Tools &amp; Prompt Engineering To Earn 40–60 Lakhs
              Per Year
            </p>

            <p className="text-sm sm:text-base md:text-lg text-gray-300">
              (6x faster and easier than generic Data Science Courses)
            </p>

            <p className="text-highlight text-base sm:text-lg md:text-xl font-semibold">
              No Prior AI Knowledge Or Experience Required
            </p>

            {/* --- Desktop CTA (inline with left content) --- */}
            <div className="hidden lg:block space-y-4">
              <button
                type="button"
                onClick={onCTAClick}
                aria-label="Become a Data Scientist using AI Tools Now"
                className="
                  inline-flex items-center justify-center
                  h-12 px-10 text-base font-bold tracking-wide
                  text-black
                  bg-gradient-to-r from-[#FFD43B] to-[#FACC15]
                  rounded-md shadow-sm hover:shadow-md
                  hover:from-[#FFE873] hover:to-[#FACC15]
                  active:scale-[0.98]
                  transition-all duration-200
                  whitespace-normal leading-snug
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FACC15]/60 focus-visible:ring-offset-2
                "
              >
                Become a Data Scientist using AI Tools Now!
              </button>

              <p className="text-lg">
                Get FREE Bonuses{" "}
                <span className="text-primary font-bold">Worth ₹29,997</span>
              </p>
            </div>
          </motion.div>

          {/* ---------------- RIGHT SIDE ---------------- */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex justify-center lg:justify-end"
          >
            <div
              className="
                bg-white rounded-3xl p-5 sm:p-6 lg:p-8 shadow-card
                w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[560px]
              "
            >
              <div className="flex flex-col items-center gap-3 sm:gap-5">
                <img
                  src={coachImage}
                  alt="Chirag Jhumkhawala - Data Science Expert"
                  className="
                    rounded-full object-cover shadow-glow
                    w-28 h-28 sm:w-36 sm:h-36 lg:w-48 lg:h-48
                  "
                />

                <h3
                  className="
                    font-serif font-bold text-secondary text-center
                    text-xl sm:text-2xl lg:text-[26px]
                  "
                >
                  Chirag Jhumkhawala
                </h3>

                <p className="text-muted-foreground text-center text-sm sm:text-base">
                  Founder Of Black Elephant | Mentored 1000+ Professionals
                </p>

                <div
                  className="
                    bg-primary/10 rounded-xl p-3 sm:p-4 w-full
                    flex flex-col sm:flex-row items-center sm:justify-between gap-3
                  "
                >
                  <div className="flex gap-1">
                    {[1, 2, 3, 4].map((i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 sm:w-5 sm:h-5 fill-primary text-primary"
                      />
                    ))}
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-primary/50 text-primary" />
                  </div>

                  <div className="flex items-center gap-2 text-sm sm:text-base">
                    <span className="font-bold">4.6</span>
                    <span className="text-muted-foreground">
                      | 455 Reviews By
                    </span>
                    <span className="bg-secondary text-white text-[10px] sm:text-xs px-2 py-1 rounded font-semibold">
                      Trustpilot
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* --- MOBILE CTA (below coach) --- */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:hidden flex flex-col items-center gap-3 mt-4"
          >
            <button
              type="button"
              onClick={onCTAClick}
              aria-label="Become a Data Scientist using AI Tools Now"
              className="
                inline-flex items-center justify-center
                w-full sm:w-auto
                h-12 px-10 text-base font-bold tracking-wide
                text-black
                bg-gradient-to-r from-[#FFD43B] to-[#FACC15]
                rounded-md shadow-sm hover:shadow-md
                hover:from-[#FFE873] hover:to-[#FACC15]
                active:scale-[0.98]
                transition-all duration-200
                whitespace-normal leading-snug
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FACC15]/60 focus-visible:ring-offset-2
              "
            >
              Become a Data Scientist using AI Tools Now!
            </button>

            <p className="text-white text-base sm:text-lg text-center">
              Get FREE Bonuses{" "}
              <span className="text-primary font-bold">Worth ₹29,997</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

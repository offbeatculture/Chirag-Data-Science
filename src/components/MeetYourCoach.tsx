import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Cpu, Code2, Database, CheckCircle2 } from "lucide-react";
import coachImage from "@/assets/Chirag3.jpg";

// OPTIONAL: use real brand logos if you have them in your assets folder
// import chatgptLogo from "@/assets/ai/chatgpt.svg";
// import geminiLogo from "@/assets/ai/gemini.svg";
// import claudeLogo from "@/assets/ai/claude.svg";
// import llamaLogo from "@/assets/ai/llama.svg";
// import cohereLogo from "@/assets/ai/cohere.svg";

interface MeetYourCoachProps {
  onCTAClick: () => void;
}

const tools: Array<{ name: string; logo?: string }> = [
  { name: "ChatGPT" /*, logo: chatgptLogo */ },
  { name: "Google Gemini" /*, logo: geminiLogo */ },
  { name: "Anthropic Claude" /*, logo: claudeLogo */ },
  { name: "Meta Llama" /*, logo: llamaLogo */ },
  { name: "Cohere" /*, logo: cohereLogo */ },
];

export const MeetYourCoach = ({ onCTAClick }: MeetYourCoachProps) => {
  return (
    <section
      className="
        bg-gradient-hero relative overflow-hidden
        py-12 sm:py-16 md:py-20
        px-4 sm:px-6
      "
    >
      {/* Floating AI / Python / Data motifs */}
      <motion.div
        aria-hidden
        animate={{ y: [0, -16, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute top-10 sm:top-14 right-3 sm:right-8 opacity-15"
      >
        <Cpu className="w-12 h-12 sm:w-16 sm:h-16 text-primary" />
      </motion.div>
      <motion.div
        aria-hidden
        animate={{ y: [0, 18, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        className="pointer-events-none absolute bottom-16 sm:bottom-20 left-3 sm:left-10 opacity-15"
      >
        <Database className="w-14 h-14 sm:w-20 sm:h-20 text-highlight" />
      </motion.div>
      <motion.div
        aria-hidden
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        className="pointer-events-none absolute top-1/2 -translate-y-1/2 left-1 opacity-15 hidden md:block"
      >
        <Code2 className="w-10 h-10 text-primary" />
      </motion.div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h2
            className="
              font-serif font-bold text-white
              text-2xl sm:text-4xl md:text-5xl
              leading-tight
            "
          >
            Meet Your Coach
          </h2>
        </motion.div>

        {/* Coach + Bio */}
        <div
          className="
            grid grid-cols-1 lg:grid-cols-2 items-center
            gap-8 sm:gap-10 lg:gap-12
            mb-6 sm:mb-8 md:mb-10
          "
        >
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white space-y-4 sm:space-y-5 md:space-y-6 max-w-2xl mx-auto lg:mx-0"
          >
            <h3
              className="
                font-serif font-bold text-[#FFD43B]
                text-2xl sm:text-3xl md:text-4xl
              "
            >
              Chirag Jhumkhawala
            </h3>

            <p className="text-sm sm:text-base md:text-lg text-gray-200">
              Helped over <span className="font-semibold">1000+ professionals</span> master
              <span className="font-semibold"> ChatGPT, Gemini, Claude</span> and more — with an
              average rating of <span className="font-semibold">4.95</span>.
            </p>

            <p className="text-base sm:text-lg font-semibold text-primary">
              World’s Leading AI Expert
            </p>

            <ul className="mt-1 sm:mt-2 space-y-2 sm:space-y-2.5">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 w-4 h-4 text-[#FFD43B]" />
                <span className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  <span className="text-white font-semibold">Prompt Engineering</span> with{" "}
                  <span className="text-white">ChatGPT & Gemini</span> (system prompts, role prompting, toolformer-style patterns).
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 w-4 h-4 text-[#FFD43B]" />
                <span className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  <span className="text-white font-semibold">Multimodal workflows</span> — image, text, and docs with{" "}
                  <span className="text-white">Gemini/Claude</span>, plus Python data pipelines.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 w-4 h-4 text-[#FFD43B]" />
                <span className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  <span className="text-white font-semibold">Agents & Retrieval</span> — function calling, RAG, and evaluation with
                  <span className="text-white"> Llama & Cohere</span> alternatives.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 w-4 h-4 text-[#FFD43B]" />
                <span className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  <span className="text-white font-semibold">Python-first data science</span> — Pandas, NumPy, Plotting; deploy with modern API stacks.
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Right: Coach Image + badges */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-sm sm:max-w-md">
              <img
                src={coachImage}
                alt="Chirag Jhumkhawala - AI & Data Science Coach"
                className="w-full rounded-2xl sm:rounded-3xl shadow-glow object-cover"
                loading="lazy"
              />

              {/* Badge: AI */}
              <motion.div
                animate={{ rotate: [0, 6, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="
                  absolute -top-3 -right-3
                  bg-primary text-secondary
                  px-3 sm:px-4 py-1.5 sm:py-2
                  rounded-full font-bold text-xs sm:text-sm
                  shadow-glow
                "
              >
                AI Expert
              </motion.div>

              {/* Badge: Mentored */}
              <motion.div
                animate={{ rotate: [0, -6, 0] }}
                transition={{ duration: 2.3, repeat: Infinity, ease: "easeInOut" }}
                className="
                  absolute -bottom-3 -left-3
                  bg-[#FFD43B] text-black
                  px-3 sm:px-4 py-1.5 sm:py-2
                  rounded-full font-bold text-xs sm:text-sm
                  shadow-glow
                "
              >
                1000+ Mentored
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Tool ecosystem strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-8 sm:mb-10"
        >
          <div className="text-center mb-3">
            <p className="text-white/80 text-xs sm:text-sm">
              Learn with an industry-standard AI stack
            </p>
          </div>

          <div
            className="
              -mx-4 sm:-mx-6 px-4 sm:px-6
              overflow-x-auto
              scroll-px-4 sm:scroll-px-6
              snap-x snap-mandatory
              flex items-stretch gap-3 sm:gap-4 md:gap-5
              pb-1
              [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
              justify-center md:justify-center
            "
          >
            {tools.map((t) => (
              <div
                key={t.name}
                className="
                  snap-start
                  flex items-center gap-2
                  bg-white/10 backdrop-blur-md
                  border border-white/10
                  rounded-full
                  px-3.5 sm:px-4 py-1.5
                  shadow-[0_2px_10px_rgba(0,0,0,0.25)]
                  text-white text-xs sm:text-sm font-semibold
                  whitespace-nowrap
                "
              >
                {/* If you have a logo, use <img src={t.logo} .../> */}
                {/* {t.logo && <img src={t.logo} alt={`${t.name} logo`} className="h-4 w-auto" />} */}
                <span>{t.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-3 sm:space-y-4"
        >
          <Button
            variant="cta"
            size="xl"
            onClick={onCTAClick}
            className="mx-auto w-full sm:w-auto whitespace-normal leading-snug"
          >
            Become a Data Scientist using AI Tools Now!
          </Button>
          <p className="text-white text-sm sm:text-lg">
            Get FREE Bonuses <span className="text-primary font-bold">Worth ₹29,997</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

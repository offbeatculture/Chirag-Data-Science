import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface WhatYouWillLearnProps {
  onCTAClick: () => void;
}

type LearnPoint = {
  title: string;
  body: string;
  spanFull?: boolean;
};

const points: LearnPoint[] = [
  {
    title: "Statistics & Analytics Basics",
    body:
      "Build a solid foundation in data analysis—essential for getting started in prompt engineering and data science.",
  },
  {
    title: "Introduction to NLP",
    body:
      "Learn the fundamentals of Natural Language Processing to enhance your prompt creation skills.",
  },
  {
    title: "LLM: Basic Prompt Crafting",
    body:
      "Master crafting effective prompts for Large Language Models—key to AI-powered work.",
  },
  {
    title: "Prompting with Image, Audio & Video",
    body:
      "Explore prompt engineering for multimedia content, from image creation to audio prompts.",
  },
  {
    title: "OpenAI API Fundamentals",
    body:
      "Understand how to use OpenAI APIs to start building real-world AI projects efficiently.",
  },
  {
    title: "Introductory Prompt Techniques",
    body:
      "Refine your prompt engineering approach with simple and powerful techniques.",
  },
  {
    title: "Job & Freelancing Opportunities",
    body:
      "Learn to land high-paying roles and freelance projects as a Data Analyst or Prompt Engineer (15–20 LPA).",
    spanFull: true,
  },
];

export const WhatYouWillLearn = ({ onCTAClick }: WhatYouWillLearnProps) => {
  return (
    <section className="bg-[#1b2e4a] py-10 sm:py-12 md:py-14 px-3 sm:px-6 border-b border-white/10">
      <div className="container mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6 sm:mb-8"
        >
          <h2
            className="
              font-sans font-extrabold
              text-[#FFD43B]
              text-lg sm:text-2xl md:text-3xl
              leading-tight
            "
          >
            What Will You Learn?
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div
          className="
            grid grid-cols-2
            sm:grid-cols-2 md:grid-cols-2
            gap-x-2 sm:gap-x-4 md:gap-x-5
            gap-y-3 sm:gap-y-4
            px-1 sm:px-2
          "
        >
          {points.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className={`
                rounded-xl
                bg-[#0F1A29] text-white
                border border-white/8
                shadow-[0_3px_12px_rgba(0,0,0,0.25)]
                p-3.5 sm:p-4 md:p-5
                hover:scale-[1.02] transition-transform
                ${p.spanFull ? "col-span-2" : ""}
              `}
            >
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="flex-shrink-0 mt-0.5">
                  <span className="inline-flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-[#FFD43B]/20">
                    <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#FFD43B]" />
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-sm sm:text-base leading-snug">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-white/80">
                    {p.body}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-center mt-8 sm:mt-10 space-y-3"
        >
          <button
            type="button"
            onClick={onCTAClick}
            className="
              inline-flex items-center justify-center
              h-10 sm:h-12 px-6 sm:px-10
              bg-gradient-to-r from-[#FFD43B] to-[#FACC15]
              text-black font-bold tracking-wide
              rounded-md shadow-sm hover:shadow-md
              hover:from-[#FFE873] hover:to-[#FACC15]
              active:scale-[0.98]
              transition-all duration-200
              text-sm sm:text-base
            "
          >
            Become a Data Scientist using AI Tools Now!
          </button>

          <p className="text-white/85 text-xs sm:text-sm">
            Get FREE Bonuses <span className="text-[#FFD43B] font-bold">Worth ₹29,997</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

const faqs: FAQItem[] = [
  {
    q: "Do I need to be online at a specific time for the sessions?",
    a: "Yes. The live Zoom session will take place at 8 p.m. It’s best to join live to interact with the instructor. If you miss the session, you can opt to receive the recorded session by paying an additional fee during registration. The workshop runs for 2 days and attending live is highly recommended.",
  },
  {
    q: "What if I miss a live session?",
    a: "If you miss a live session, you can still access the recordings by paying an additional fee during registration. The final session will also be recorded and provided to you. Once purchased, you’ll have lifetime access to these recordings.",
  },
  {
    q: "What language will the course be taught in?",
    a: "The course will be taught in English. All lessons and course materials will be in English.",
  },
  {
    q: "Will this course prepare me for real data science jobs?",
    a: "Yes, this course teaches the basics of data science—core theories and how to apply them in real roles—so you gain the skills employers look for in data science positions.",
  },
  {
    q: "Can a short course really help me learn data science?",
    a: "Yes! Short courses are powerful when they focus on the right skills and use interactive learning. You’ll build a strong foundation and feel more confident quickly.",
  },
  {
    q: "How do you handle my privacy?",
    a: "Your privacy matters. We use your personal information only for course-related communications and do not share it with third parties.",
  },
];

export const FAQ = () => {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 px-2 sm:px-6" >
      <div className="container mx-auto max-w-5xl">
        {/* Heading */}
        <div className="text-center mb-4 sm:mb-10 md:mb-12">
          <h2 className="font-serif font-bold text-[#FFD43B] text-2xl sm:text-4xl md:text-5xl leading-tight">
            Frequently Asked Questions
          </h2>
          <div className="mt-3 mx-auto h-1 w-20 rounded-full bg-[#FFD43B]" />
        </div>

        {/* Accordion */}
        <ul className="space-y-3 sm:space-y-4">
          {faqs.map((item, idx) => (
            <li key={idx}>
              <AccordionItem index={idx} item={item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

function AccordionItem({ item, index }: { item: FAQItem; index: number }) {
  const [open, setOpen] = useState(false);
  const panelId = `faq-panel-${index}`;
  const buttonId = `faq-button-${index}`;

  return (
    <div
      className="
        rounded-xl border border-black/10 bg-white
        shadow-sm hover:shadow-md transition-shadow
      "
    >
      <button
        id={buttonId}
        aria-controls={panelId}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="
          w-full flex items-center gap-3 sm:gap-4
          text-left px-4 sm:px-6 py-4 sm:py-5
          focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD43B]/60 rounded-xl
        "
      >
        <span className="shrink-0">
          <HelpCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#FFD43B]" />
        </span>
        <span className="flex-1 font-semibold text-sm sm:text-base md:text-lg text-black">
          {item.q}
        </span>
        <span
          className="
            ml-2 grid place-items-center rounded-full
            border border-black/10 bg-black/5
            w-8 h-8
          "
        >
          <motion.span
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown className="w-4 h-4 text-black/80" />
          </motion.span>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden"
          >
            <div className="px-4 sm:px-6 pb-4 sm:pb-5">
              <div className="ml-[2.4rem] sm:ml-[2.9rem] border-l-4 border-[#FFD43B] pl-4">
                <p className="text-sm sm:text-base text-black/80 leading-relaxed">
                  {item.a}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

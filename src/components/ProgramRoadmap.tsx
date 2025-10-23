import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import normalRoute from "@/assets/normalroute.svg"; // desktop/tablet
import normalMob from "@/assets/normalmob.svg"; // mobile
import fastRoute from "@/assets/6xfast.svg"; // desktop/tablet
import fastMob from "@/assets/6xfastmob.svg"; // mobile

interface ProgramRoadmapProps {
  onCTAClick: () => void;
}

export const ProgramRoadmap = ({ onCTAClick }: ProgramRoadmapProps) => {
  return (
    <section className="bg-background py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h2
            className="
              font-serif font-bold
              text-[22px] sm:text-3xl md:text-4xl lg:text-5xl
              leading-snug sm:leading-tight
              text-[#FFD43B]
              mx-auto max-w-4xl
            "
          >
            Program Roadmap And Your Success Timeline
          </h2>
          <p className="mt-3 text-sm sm:text-base md:text-lg text-muted-foreground">
            Time taken to become a highly-paid Data Scientist
          </p>
        </motion.div>

        {/* Normal Route (Responsive SVGs) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-6 sm:mb-8 md:mb-10"
        >
          <div className="w-full mx-auto max-w-5xl">
            {/* ✅ Desktop / Tablet SVG */}
            <img
              src={normalRoute}
              alt="The Normal Route (24–48 Months)"
              className="
                hidden sm:block
                w-full h-auto
                rounded-xl sm:rounded-2xl
                shadow-card
                object-contain
              "
              loading="lazy"
            />
            {/* ✅ Mobile SVG */}
            <img
              src={normalMob}
              alt="The Normal Route (24–48 Months) Mobile"
              className="
                block sm:hidden
                w-full h-auto
                rounded-xl
                shadow-card
                object-contain
              "
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* VS Divider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center my-6 sm:my-8 md:my-12"
        >
          <div
            className="
              inline-block
              bg-[#0B1220] text-white
              text-xl sm:text-3xl md:text-4xl lg:text-5xl
              font-extrabold
              px-6 sm:px-10 md:px-12
              py-2.5 sm:py-4 md:py-5
              rounded-full shadow-glow
            "
          >
            VS
          </div>
        </motion.div>

        {/* AI Route (Responsive SVGs) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-8 sm:mb-10 md:mb-12"
        >
          <div className="w-full mx-auto max-w-5xl">
            {/* ✅ Desktop / Tablet SVG */}
            <img
              src={fastRoute}
              alt="The AI Route (1–6 Months) (6x Faster)"
              className="
                hidden sm:block
                w-full h-auto
                rounded-xl sm:rounded-2xl
                shadow-card
                object-contain
              "
              loading="lazy"
            />
            {/* ✅ Mobile SVG */}
            <img
              src={fastMob}
              alt="The AI Route (1–6 Months) (6x Faster) Mobile"
              className="
                block sm:hidden
                w-full h-auto
                rounded-xl
                shadow-card
                object-contain
              "
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3 sm:space-y-4"
        >
          <Button
            variant="cta"
            size="xl"
            onClick={onCTAClick}
            className="mx-auto w-full sm:w-auto text-center whitespace-normal leading-snug"
          >
            Become a Data Scientist using AI Tools Now!
          </Button>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
            Get FREE Bonuses{" "}
            <span className="text-primary font-bold">Worth ₹29,997</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

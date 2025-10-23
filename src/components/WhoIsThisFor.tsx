import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import professionalImage from "@/assets/working-professionals.jpg";
import freelancerImage from "@/assets/freelancer.jpg";
import studentImage from "@/assets/student.jpg";

interface WhoIsThisForProps {
  onCTAClick: () => void;
}

const audiences = [
  {
    title: "Working Professionals",
    image: professionalImage,
    description:
      "Did you know that the median salary of a Data Scientist in India is 24 LPA? Learn how to use Data Science tools and AI to continue making accurate decisions and building impactful data.",
  },
  {
    title: "Freelancer",
    image: freelancerImage,
    description:
      "Data science can feel complex, challenging, and resource-heavy. Learn how to integrate AI to fast-track your growth and learning, so you can achieve more with less, for long-term success.",
  },
  {
    title: "Student",
    image: studentImage,
    description:
      "Data Science and AI are the most lucrative career options today and are completely future-proof with the increasing demand for AI. Businesses are investing heavily in Data and are actively seeking skilled individuals with a deep understanding of AI capabilities.",
  },
];

export const WhoIsThisFor = ({ onCTAClick }: WhoIsThisForProps) => {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className="font-serif font-bold text-[#FFD43B] text-2xl sm:text-4xl md:text-5xl leading-tight">
            Who is this program for?
          </h2>
        </motion.div>

        {/* Audience Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12">
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
              className="rounded-2xl overflow-hidden shadow-card hover:shadow-glow transition-all border-2 border-yellow-300/40 bg-[#FFD43B] text-black"
            >
              {/* Image */}
              <div className="h-36 sm:h-44 md:h-48 overflow-hidden">
                <img
                  src={audience.image}
                  alt={audience.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 md:p-6 space-y-3 sm:space-y-4">
                <h3 className="text-lg sm:text-xl font-bold leading-snug">
                  {audience.title}
                </h3>

                <p className="text-sm sm:text-base font-semibold leading-relaxed text-black/90">
                  {audience.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
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
          <p className="text-sm sm:text-lg text-black/70">
            Get FREE Bonuses <span className="text-[#FFD43B] font-bold">Worth ₹29,997</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

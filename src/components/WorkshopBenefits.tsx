import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import mentorImage from "@/assets/mentor-interaction.jpg";
import whatsappImage from "@/assets/whatsapp-community.jpg";
import roadmapImage from "@/assets/roadmap-success.jpg";

interface WorkshopBenefitsProps {
  onCTAClick: () => void;
}

const benefits = [
  {
    title: "1-on-1 Mentor Interaction",
    description:
      "Get personalized guidance from experienced mentors to plan your career trajectory.",
    price: "₹17,997",
    image: mentorImage,
  },
  {
    title: "Whatsapp Community Support",
    description:
      "Join our exclusive WhatsApp community to engage with fellow participants, ask questions, and receive additional support",
    price: "₹6,997",
    image: whatsappImage,
  },
  {
    title: "Roadmap To Success",
    description:
      "Gain clarity on the step-by-step roadmap you need to follow to become a successful, industry-ready AI-powered professional",
    price: "PRICELESS",
    image: roadmapImage,
  },
];

export const WorkshopBenefits = ({ onCTAClick }: WorkshopBenefitsProps) => {
  return (
    <section className="bg-gradient-hero py-12 sm:py-14 md:py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className="font-serif font-bold text-white text-2xl sm:text-4xl md:text-5xl leading-tight mb-3 sm:mb-6">
            Here is Everything You Get when You Join the Workshop
          </h2>
          <p className="text-base sm:text-2xl">
            <span className="line-through text-destructive font-bold">worth Rs. 29,997</span>{" "}
            <span className="text-primary font-bold text-xl sm:text-3xl">For just Rs. 99</span>
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
              // Disable aggressive hover on touch; keep subtle on md+
              whileHover={{ scale: 1.03, y: -6 }}
              className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-glow transition-all"
            >
              {/* Image: shorter on mobile, taller on larger screens */}
              <div className="h-36 sm:h-40 md:h-48 overflow-hidden">
                <img
                  src={benefit.image}
                  alt={benefit.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Content: tighter on mobile */}
              <div className="p-4 sm:p-5 md:p-6 space-y-3 sm:space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-highlight">
                  {benefit.title}
                </h3>

                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  {benefit.description}
                </p>

                <div className="pt-3 sm:pt-4 border-t">
                  <span
                    className={`font-bold ${
                      benefit.price === "PRICELESS"
                        ? "text-highlight text-base sm:text-xl"
                        : "text-primary text-lg sm:text-xl"
                    }`}
                  >
                    {benefit.price}
                  </span>
                </div>
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
          <p className="text-white text-sm sm:text-lg">
            Get FREE Bonuses <span className="text-primary font-bold">Worth ₹29,997</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

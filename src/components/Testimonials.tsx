import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Quote } from "lucide-react";

interface TestimonialsProps {
  onCTAClick: () => void;
}

type Testimonial = {
  name: string;
  text: string;
  location?: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Amit Malhotra",
    location: "Mumbai",
    text:
      "Amazing response from all the mentors! The session was incredibly valuable and practical. Great learning experience from experts in the field.",
  },
  {
    name: "Nishchaye Shandilya",
    location: "Pune",
    text:
      "This is awesome. The class delivered tons of learning and clarity. I finally know the exact steps to get started.",
  },
  {
    name: "Avinash Deshpande",
    location: "Hyderabad",
    text:
      "A great session—perfect as a kick-start. Crisp frameworks and hands-on demos that actually stick.",
  },
  {
    name: "Priya Jaswani",
    location: "Delhi",
    text:
      "Amazing teaching techniques. The training was detailed yet easy to follow. I’m already applying the learnings.",
  },
  {
    name: "Palak Jadhwani",
    location: "Ahmedabad",
    text:
      "The way concepts were explained made complex topics feel simple. Exactly what I needed to move faster.",
  },
  {
    name: "Naman Patwari",
    location: "Bangalore",
    text:
      "Highly recommended. Clear roadmap, strong community, and real-world examples. Worth every minute.",
  },
];

export const Testimonials = ({ onCTAClick }: TestimonialsProps) => {
  return (
    <section className="bg-[#1b2e4a] py-10 sm:py-12 md:py-16 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
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
              font-serif font-bold
              text-[#FFD43B]
              text-xl sm:text-2xl md:text-3xl
              leading-tight
            "
          >
            Listen from thousands of professionals like you on how this masterclass changed their lives
          </h2>
        </motion.div>

        {/* Horizontally scrollable testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="
            relative
            -mx-4 sm:-mx-6 px-4 sm:px-6
          "
        >
          <div
            className="
              flex gap-4 sm:gap-5 md:gap-6
              overflow-x-auto
              snap-x snap-mandatory
              scroll-px-4 sm:scroll-px-6
              pb-2
              [-ms-overflow-style:none] [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            "
          >
            {testimonials.map((t, i) => (
              <article
                key={t.name + i}
                className="
                  snap-start
                  flex-shrink-0
                  min-w-[260px] sm:min-w-[280px] md:min-w-[280px] lg:min-w-[300px] xl:min-w-[320px]
                  max-w-[80%] sm:max-w-none
                  rounded-2xl
                  bg-[#0F1A29]
                  text-white
                  p-5 sm:p-6
                  shadow-[0_6px_20px_rgba(0,0,0,0.25)]
                  border border-white/5
                  transition-transform duration-300 hover:scale-[1.02]
                "
              >
                <div className="w-full">
                  <Quote className="w-6 h-6 text-white/25 mb-3" />
                  <blockquote className="italic text-[15px] sm:text-base leading-relaxed text-white/90">
                    “{t.text}”
                  </blockquote>

                  <div className="my-4 h-px w-full bg-white/10" />

                  <div className="space-y-0.5">
                    <p className="font-semibold text-white text-base">{t.name}</p>
                    {t.location && (
                      <p className="text-white/60 text-sm">{t.location}</p>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-center mt-8 sm:mt-10 space-y-3 sm:space-y-4"
        >
          <Button
            variant="cta"
            size="xl"
            onClick={onCTAClick}
            className="mx-auto w-full sm:w-auto whitespace-normal leading-snug"
          >
            Become a Data Scientist using AI Tools Now!
          </Button>
          <p className="text-white/80 text-sm sm:text-base md:text-lg">
            Get FREE Bonuses <span className="text-[#FFD43B] font-bold">Worth ₹29,997</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

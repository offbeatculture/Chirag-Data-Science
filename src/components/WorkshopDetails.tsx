import { motion } from "framer-motion";
import { Calendar, Clock, Video, Languages } from "lucide-react";

interface WorkshopDetailsProps {
  onCTAClick: () => void;
}

const details = [
  { icon: Calendar, label: "Date", value: "16th & 17th Oct" },
  { icon: Clock, label: "Time", value: "8:00 PM – 10:30 PM" },
  { icon: Video, label: "Live", value: "2 Hours • 2 Days" },
  { icon: Languages, label: "Language", value: "English" },
];

export const WorkshopDetails = ({ onCTAClick }: WorkshopDetailsProps) => {
  return (
    <section
      className="
        relative overflow-hidden
        bg-[#1b2e4a]
        py-12 sm:py-14 md:py-16
        px-4 sm:px-6
      "
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8 sm:mb-10"
      >
        <h2
          className="
            text-2xl sm:text-3xl md:text-4xl font-serif font-bold
            text-white leading-tight
          "
        >
          Workshop Details
        </h2>
        <div className="mt-3 flex justify-center">
          <div className="h-1 w-20 bg-[#FFD43B] rounded-full" />
        </div>
      </motion.div>

      {/* Details Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 sm:gap-6 max-w-3xl mx-auto mb-10">
        {details.map((detail, index) => (
          <motion.div
            key={detail.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="
              bg-[#0F1A29]
              text-white
              rounded-xl
              py-6 px-4
              shadow-md hover:shadow-lg
              flex flex-col items-center text-center
              transition-all duration-200 hover:scale-[1.03]
            "
          >
            <div className="mb-3 w-12 h-12 bg-[#FFD43B]/20 rounded-full flex items-center justify-center">
              <detail.icon className="w-6 h-6 text-[#FFD43B]" />
            </div>
            <h3 className="font-bold text-sm sm:text-base text-white">{detail.label}</h3>
            <p className="text-sm sm:text-base font-medium text-gray-300">{detail.value}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-3 mb-12"
      >
        <button
          type="button"
          onClick={onCTAClick}
          className="
            inline-flex items-center justify-center
            h-12 px-8 sm:px-10
            bg-gradient-to-r from-[#FFD43B] to-[#FACC15]
            text-black font-bold tracking-wide
            rounded-md shadow-sm hover:shadow-md
            hover:from-[#FFE873] hover:to-[#FACC15]
            active:scale-[0.98]
            transition-all duration-200
          "
        >
          Become a Data Scientist using AI Tools Now!
        </button>

        <p className="text-white text-base sm:text-lg">
          Get FREE Bonuses{" "}
          <span className="text-[#FFD43B] font-bold">Worth ₹29,997</span>
        </p>
      </motion.div>

      {/* Urgency Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="
          mt-10 sm:mt-12
          bg-[#0F1A29]
          rounded-xl p-5 sm:p-6
          max-w-md mx-auto text-center
          text-white shadow-lg border border-[#FFD43B]/40
        "
      >
        <p className="text-xl sm:text-2xl font-bold mb-1 text-[#FFD43B]">Almost Full!</p>
        <p className="text-sm sm:text-base font-medium text-gray-300">
          Enrollment closes on{" "}
          <span className="font-bold text-white">22 October</span>
        </p>
      </motion.div>
    </section>
  );
};

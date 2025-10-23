import { motion } from "framer-motion";
import { CheckCircle, Calendar, Clock, Video } from "lucide-react";
import { Button } from "@/components/ui/button";

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center px-4 py-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-3xl shadow-glow max-w-2xl w-full p-8 md:p-12 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
        >
          <CheckCircle className="w-20 h-20 text-primary mx-auto mb-6" />
        </motion.div>

        <h1 className="text-3xl md:text-5xl font-serif font-bold text-secondary mb-4">
          Registration Successful!
        </h1>

        <p className="text-xl text-muted-foreground mb-8">
          Welcome to the Data Science Masterclass
        </p>

        <div className="bg-primary/10 rounded-2xl p-6 mb-8 space-y-4">
          <h2 className="text-2xl font-bold text-secondary mb-4">
            Workshop Details
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex flex-col items-center">
              <Calendar className="w-8 h-8 text-highlight mb-2" />
              <p className="font-semibold">16th & 17th Oct</p>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="w-8 h-8 text-highlight mb-2" />
              <p className="font-semibold">8:00 PM - 10:30 PM</p>
            </div>
            <div className="flex flex-col items-center">
              <Video className="w-8 h-8 text-highlight mb-2" />
              <p className="font-semibold">Live on Zoom</p>
            </div>
          </div>
        </div>

        <div className="space-y-4 text-left bg-gray-50 rounded-xl p-6 mb-8">
          <h3 className="font-bold text-lg text-secondary">What's Next?</h3>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              Check your email for the workshop confirmation and Zoom link
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              Join our WhatsApp community for updates and support
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              Prepare your questions for the live Q&A session
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              Get ready to transform your career with AI tools!
            </li>
          </ul>
        </div>

        <Button
          variant="cta"
          size="xl"
          onClick={() => window.location.href = "/"}
          className="w-full md:w-auto"
        >
          Back to Home
        </Button>

        <p className="text-sm text-muted-foreground mt-6">
          Questions? Contact us at{" "}
          <a href="mailto:support@blackelephant.in" className="text-highlight hover:underline">
            support@blackelephant.in
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default ThankYou;

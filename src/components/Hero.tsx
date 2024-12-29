import { motion } from 'framer-motion';
// import Background from "../assets/images/hero.jpeg"

const Hero = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative h-screen flex items-center justify-center text-white"
    >
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={"https://images.unsplash.com/photo-1511795409834-ef04bbd61622"}
          alt="Event Planning"
          className="w-full h-full object-center object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative z-10 text-center">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Create Unforgettable Moments
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl mb-8"
        >
          Your Nigerian one-stop solution for weddings, makeup, catering, and decorations.
        </motion.p>
        <motion.a
          href="https://wa.me/2349164902923"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ delay: 0.6 }}
          className="bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors"
        >
          Get Started
        </motion.a>
      </div>
    </motion.div>
  );
  export default Hero;
  
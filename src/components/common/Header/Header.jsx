import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Header = () => {
  const ref = useRef(null);

  // Hook to check if the header is in view
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Delay between each child element
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 }, // Text starts slightly below with opacity 0
    visible: { opacity: 1, y: 0 }, // Text comes to its normal position with opacity 1
  };

  return (
    <motion.div
      ref={ref}
      className="text-white text-center z-[50] flex-col justify-center items-center"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.h1
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold"
        variants={textVariants}
        transition={{ type: "tween", duration: 0.6 }}
      >
        Soar Above the Ordinary
      </motion.h1>

      <motion.h1
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3"
        variants={textVariants}
        transition={{ type: "tween", duration: 0.6 }}
      >
        Discover Adventure from the Skies
      </motion.h1>

      <motion.p
        className="text-sm sm:text-base md:text-lg lg:text-xl font-medium mt-5"
        variants={textVariants}
        transition={{ type: "tween", duration: 0.6 }}
      >
        Take your travel experience to new heights with thrilling air balloon
        rides and more.
      </motion.p>
    </motion.div>
  );
};

export default Header;
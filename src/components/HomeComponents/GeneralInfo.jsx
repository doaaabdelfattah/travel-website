import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const GeneralInfo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-8 lg:w-[80%] mx-auto bg-[#ffff] my-[100px] text-[#1f2937] relative"
      id="aboutus"
    >
      {/* Image Section */}
      <motion.div
        className="w-full lg:w-6/12 relative justify-center lg:order-1"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="h-[400px] lg:h-[600px] w-full lg:w-[500px] relative mx-auto">
          <div className="hidden lg:block back-rectangle"></div>
          <img
            src="http://localhost:5173/src/assets/images/AirBalloon-4.jpg"
            className="h-full w-full object-cover z-30 hover:scale-[.9] duration-300 transition-all"
          />
        </div>
      </motion.div>
      {/* Text Section */}
      <motion.div
        className="flex flex-col lg:w-6/12 justify-center items-center lg:items-start lg:static absolute inset-0 lg:inset-auto lg:p-0 bg-gradient-to-t from-black/60 to-transparent lg:bg-none text-white lg:text-[#1f2937]"
        initial={{ opacity: 0, x: -100 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <motion.span
          className="uppercase tracking-widest text-hover-color"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          The Best Travel Experience
        </motion.span>
        <motion.h1
          className="text-4xl lg:text-7xl mt-3"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Discover the magic of EGYPT
        </motion.h1>
        <motion.p
          className="mt-5 lg:mt-10 text-lg lg:text-2xl font-light line-clamp-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Lorem ipsum odor amet, consectetuer adipiscing elit. Hendrerit
          efficitur vulputate lorem magnis quam. Cras leo volutpat neque mus et
          torquent nunc interdum. Fames ac pulvinar rhoncus placerat elementum
          libero vehicula eget. Lectus ridiculus integer fermentum, velit
          malesuada et.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default GeneralInfo;
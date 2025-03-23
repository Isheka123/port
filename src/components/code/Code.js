import React from "react";
import { github } from "../../assests/index";
import { Link } from "react-scroll";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Code = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Increased for slower appearance
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1} }, // Increased duration for slower transition
  };

  // useInView hook to trigger animation when in view
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,  // Trigger only once
    threshold: 0.5,     // 50% of the component is visible
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div
      id="code"
      className="lg:h-screen bg-gradient-to-b from-[#344444] to-black flex items-center justify-center"
    >
      <motion.div
        className="text-white text-center max-w-xl lg:max-w-2xl mt-10 mb-20"
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.p className="text-7xl font-bold mb-10" variants={itemVariants}>
          Code
        </motion.p>
        <motion.p className="text-2xl mb-4" variants={itemVariants}>
          Want my public code as well?
        </motion.p>
        <motion.p className="text-2xl mb-4" variants={itemVariants}>
          Check out my Github
        </motion.p>
        <motion.p className="text-2xl" variants={itemVariants}>
          Computer Vision, Gen AI, Machine Learning, Django, FastAPI,
          AWS, PyTorch etc.
        </motion.p>
        <motion.div
          className="mt-20 flex lg:flex-row md:flex-row flex-col items-center justify-center gap-20"
          variants={itemVariants}
        >
          <a
            href="https://github.com/Vikas-ABD"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.img
              src={github}
              alt="Github"
              className="lg:h-[17rem] lg:w-[17rem] md:h-[16rem] h-[17rem] w-35"
              variants={itemVariants}
            />
          </a>

          <Link
            to="youtube"
            smooth={true}
            duration={500}
            className="text-gray-300 cursor-pointer text-center hover:text-white p-14 lg:pt-20 lg:h-85 lg:w-60 md:pt-20 md:h-[16rem] md:w-60 font-bold text-2xl bg-gradient-to-b from-[#E0DCBB] to-black hover:from-[#D3CFA6] rounded-lg"
          >
            Freelance
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Code;

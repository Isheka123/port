import React from "react";
import { desktop, spritle, seewise } from "../../assests/index";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Youtube = () => {
  const handleContactMe = () => {
    window.location.href = "mailto:vikaschelluru@gmail.com";
  };
  const handleConnectLinkedIn = () => {
    window.location.href =
      "https://www.youtube.com/channel/UC4QLrLIifQKPSyIpa0UdUlg";
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  // useInView hook to trigger animation when in view
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger only once
    threshold: 0.1, // 10% of the component is visible
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div
      id="youtube"
      className="lg:h-screen bg-gradient-to-b from-[#403445] to-black flex items-center justify-center text-white text-center p-8"
    >
      <motion.div
        className="lg:max-w-4xl"
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.h1 className="text-6xl font-bold mt-5 mb-5" variants={itemVariants}>
          Youtube
        </motion.h1>
        <motion.p className="text-2xl mb-4" variants={itemVariants}>
          I create videos about AI, Machine Learning, Deep Learning,
          <br /> Computer Vision & My Life.
        </motion.p>
        <motion.div
          className="flex lg:flex-row flex-col justify-center items-center gap-20"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <img src={desktop} alt="laptop" className="h-60 w-50 mt-10" />
            <motion.button
              onClick={handleConnectLinkedIn}
              className="mt-[2.1rem] py-3 lg:py-6 px-6 lg:px-12 bg-[#F2F5C5] text-black text-xl sm:text-2xl font-bold rounded-3xl hover:bg-[#ACE1AF] hover:text-black transition duration-300 md:max-w-md"
              variants={itemVariants}
            >
              Go To My Youtube
            </motion.button>
          </motion.div>
          <motion.div className="lg:mt-10" variants={itemVariants}>
            <p className="text-white font-bold lg:text-3xl text-5xl mb-6">
              Company Collaborations
            </p>
            <div className="flex flex-col justify-center items-center">
              <motion.p className="text-white font-bold text-2xl mb-3" variants={itemVariants}>
                Syncopation AI
              </motion.p>
              <motion.img src={seewise} alt="seewise" className="h-25 w-40" variants={itemVariants} />
              <motion.img src={spritle} alt="spritle" className="h-20 w-40 mb-5" variants={itemVariants} />
              <motion.h4 className="text-3xl font-bold mb-4" variants={itemVariants}>
                Promotion Videos
              </motion.h4>
              <motion.button
                onClick={handleContactMe}
                className="py-3 lg:py-6 px-6 lg:px-12 bg-[#F2F5C5] text-black text-xl sm:text-2xl font-bold rounded-3xl hover:bg-[#ACE1AF] hover:text-black transition duration-300 mb-4 sm:mb-0 md:max-w-md"
                variants={itemVariants}
              >
                Contact Me Directly
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Youtube;

import React from "react";
import { youtube, spritle, seewise } from "../../assests/index";
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
        className="lg:max-w-5xl"
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
          <motion.div variants={itemVariants} className="mt-10">
            <img src={youtube} alt="laptop" className="h-[15rem] w-[25rem] mb-5" />
           
            <motion.button
              onClick={handleConnectLinkedIn}
              className=" text-white bg-gradient-to-r from-[#403445]-400 via-[#403445]-500 to-[#403445]-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 rounded-lg text-xl px-10 font-bold py-6 text-center me-2 mb-2"
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
              <motion.p className=" font-bold text-orange-300 text-2xl mb-3" variants={itemVariants}>
                Syncopation AI
              </motion.p>
              <motion.h4 className="text-3xl font-bold mt-10 mb-4" variants={itemVariants}>
                Promotion Videos
              </motion.h4>
              <motion.button
                onClick={handleContactMe}
                className="text-white bg-gradient-to-r from-[#403445]-400 via-[#403445]-500 to-[#403445]-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 rounded-lg text-xl px-10 font-bold py-6 text-center me-2 mb-2"
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

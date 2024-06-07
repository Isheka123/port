import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Computer Vision Developer.",
      "Machine Learning Engineer.",
      "Problem Solver.",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  // Animation variants
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="mt-5 mb-10 text-white text-center order-2 lg:order-1">
      <motion.h3
        className="lg:text-4xl md:text-4xl font-bold text-3xl"
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <span className="block">Hi, I'm Vikas,</span>
      </motion.h3>
      <motion.h2
        className="lg:text-4xl md:text-4xl mt-1 font-bold text-white text-3xl"
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 0.5, delay: 1 }}
      >
        a <span>{text}</span>
        <Cursor cursorBlinking="false" cursorStyle="|" cursorColor="#ff014f" />
      </motion.h2>
      <motion.p
        className="lg:text-3xl md:text-3xl text-2xl p-5 pt-2 lg:mt-5 mt-10 lg:max-w-xl md:max-w-xl"
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        I help companies and people build Computer Vision and Deep Learning
        applications.
      </motion.p>
    </div>
  );
};

export default LeftBanner;

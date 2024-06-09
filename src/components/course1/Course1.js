import React from "react";
import { motion } from "framer-motion";
import { laptop } from "../../assests/index";

const Course1 = () => {
  const handleContactMe = () => {
    window.location.href = "mailto:vikaschelluru@gmail.com";
  };
  return (
    <motion.div
      className="bg-black mt-0 lg:h-screen flex lg:flex-row flex-col items-center justify-center "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="mt-7 lg:mt-0 flex flex-col items-center justify-center text-white p-2 lg:p-0">
        <motion.h1
          className="lg:text-6xl text-5xl md:text-6xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          CUSTOM <br /> SOLUTIONS
        </motion.h1>
        <motion.p
          className="text-2xl md:text-2xl mb-5 lg:p-3 pr-5 max-w-xl text-center p-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          We develop cutting-edge AI solutions, specializing in computer vision.
          It's incredibly rewarding to see our innovative work making a real
          impact in the industry.
        </motion.p>
        <motion.button
          className="text-3xl mb-12 bg-blue-500 px-16 py-4 font-bold rounded-full hover:bg-blue-600 transition-colors"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          onClick={handleContactMe}
        >
          Contact us
        </motion.button>
      </div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <img
          src={laptop}
          alt="hello"
          className="lg:h-[45rem] lg:w-[40rem] md:h-[45rem] md:w-[40rem] h-[33rem] w-[45rem] "
        />
      </motion.div>
    </motion.div>
  );
};

export default Course1;

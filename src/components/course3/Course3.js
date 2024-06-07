import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaPython, FaRobot, FaCogs } from "react-icons/fa";
import { SiPytorch, SiNvidia, SiOpencv, SiCplusplus } from "react-icons/si";
import { tf } from "../../assests"; 
const Course3 = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Increased staggerChildren to 0.3 for slower appearance
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }, // Increased duration to 1 for smoother transition
  };

  // useInView hook to trigger animation when in view
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,  // Trigger only once
    threshold: 0.1,     // 10% of the component is visible
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="lg:h-screen md:h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#354445] to-black text-white p-10">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="flex flex-col items-center"
      >
        <motion.h1
          className="text-6xl font-bold mb-8 text-center"
          variants={itemVariants}
        >
          OUR EXPERTISE
        </motion.h1>
        <motion.p
          className="text-2xl mb-10 max-w-4xl text-center"
          variants={itemVariants}
        >
          We specialize in AI, Deep Learning, Computer Vision, and Robotics. Our
          team is proficient in Python and hardware electronics, and skilled in
          frameworks such as PyTorch, TensorFlow, NVIDIA, and OpenCV. We bring
          cutting-edge technology and innovation to your projects.
        </motion.p>
        <motion.div
          className="flex flex-wrap justify-center items-center gap-6 mb-10"
          variants={itemVariants}
        >
        
          <FaPython className="text-6xl" />
          <FaRobot className="text-6xl" />
          <FaCogs className="text-6xl" />
          <img src={tf} alt="icon" className="w-20 h-20 text-6xl" />
          <SiPytorch className="text-6xl" />
          <SiNvidia className="text-6xl" />
          <SiOpencv className="text-6xl" />
          
        </motion.div>
        <motion.div
          className="flex md:flex-row lg:flex-row flex-col-reverse gap-6 items-center"
          variants={itemVariants}
        >
          <a
            href="https://github.com/Vikas-ABD"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors"
          >
            Go to GitHub
          </a>
          <a
            href="https://github.com/Vikas-ABD"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-9xl"
          >
            <FaGithub />
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Course3;

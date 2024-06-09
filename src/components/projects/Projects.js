import React from "react";
import { maxresdefault, parking, three } from "../../assests";
import { Link } from "react-router-dom";
import { Element } from "react-scroll";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
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
    <Element
      name="projects"
      className=" flex flex-col items-center justify-center bg-gradient-to-b from-[#473938] to-black text-white text-center p-8 font-sans"
    >
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="flex flex-col items-center"
      >
        <motion.h1 className="text-6xl font-bold mb-6" variants={itemVariants}>
          Projects
        </motion.h1>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 lg:p-[5rem] lg:pt-10 lg:pb-5"
          variants={containerVariants}
        >
          {/* Project Card 1 */}
          <motion.div
            className="bg-[#5a4a4a] rounded-lg shadow-lg overflow-hidden relative"
            variants={itemVariants}
          >
            <img
              src={maxresdefault}
              alt="Project 1"
              className="w-full h-48 object-cover"
            />
            <a
              href="https://github.com/Vikas-ABD/digital_shadow_of_Tello_drone"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-2 right-2 text-white text-3xl bg-black p-2 rounded-full"
            >
              <FaGithub />
            </a>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">
                Digital Shadow Of Tello Drone
              </h2>
              <p className="text-lg">
                This project integrates Tello drone control via MATLAB,
                featuring object detection with Tiny YOLOv4, anomaly detection
                using SVM, Isolation Forest, and autoencoders. Data exchange via
                OPC UA and Node-RED facilitates visualization and control
                functionalities.
              </p>
            </div>
          </motion.div>
          {/* Project Card 2 */}
          <motion.div
            className="bg-[#5a4a4a] rounded-lg shadow-lg overflow-hidden  relative"
            variants={itemVariants}
          >
            <img
              src={parking}
              alt="Project 2"
              className="w-full h-48 object-cover"
            />
            <a
              href="https://github.com/Vikas-ABD/segmentation"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-2 right-2 text-white text-3xl bg-black p-2 rounded-full"
            >
              <FaGithub />
            </a>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">
                Parking Spot Detection and Counter
              </h2>
              <p className="text-lg">
                This project implements a real-time system using computer
                vision and machine learning to detect parking
                spaces and vehicle occupancy in video streams. It employs
                efficient techniques like mask overlap, connected components analysis, and an
                XGBoost classifier for robust classification.
              </p>
            </div>
          </motion.div>
          {/* Project Card 3 */}
          <motion.div
            className="bg-[#5a4a4a] rounded-lg shadow-lg overflow-hidden relative transition-transform transform duration-500 ease-in-out "
            variants={itemVariants}
          >
            <img
              src={three}
              alt="Project 3"
              className="w-full h-48 object-cover"
            />
            <a
              href="https://github.com/Vikas-ABD" // Add the actual link for project 3 if available
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-2 right-2 text-white text-3xl bg-black p-2 rounded-full"
            >
              <FaGithub />
            </a>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">
                Accident Prevention Using AI/ML
              </h2>
              <p className="text-lg">
                The project builds a hardware-controlled car using Simulink,
                Raspberry Pi, and sensors, implements reinforcement
                learning for lane following, and develops a Modified U-Net segmentation
                model for vehicle identification, setting the stage for future
                integration to enhance traffic management.
              </p>
            </div>
          </motion.div>
        </motion.div>
        <motion.div variants={itemVariants}>
          <Link to="/freelance">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              className=" text-white bg-gradient-to-r from-[#433635]-400 via-[#433635]-500 to-[#433635]-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 rounded-lg text-xl px-5 font-bold py-3 text-center me-2 mb-2"
            >
             Show More
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </Element>
  );
};

export default Projects;

import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { IoIosQuote } from "react-icons/io";
import { isheka, swetha } from "../../assests";

const clients = [
    {
        name: "Swetha",
        position: "Assosiate ML Engineer at Spritle",
        img_url: swetha,
        stars: 4,
        disc: `Vikas developed an advanced inspection and tracking application for water bottle production line using YOLOv8. The application not only accurately detects defects but also efficiently tracks each bottle throughout the inspection process. Vikas's deep understanding of computer vision and machine learning technologies was crucial in achieving such a high level of precision and reliability. The project was completed on time and exceeded all performance expectations. I highly recommend Vikas for any industrial automation and AI-driven projects.`,
      },
  {
    name: "Kavya Sai Isheka",
    position: "Full Stack Developer",
    img_url: isheka,
    stars: 4,
    disc: ` Vikas developed an pothole detection web application project. The primary goal was to create a lightweight, efficient solution, and Vikas delivered beyond my expectations. The application is incredibly fast, responsive, and easy to use, all while maintaining a minimal footprint. Vikas's expertise and attention to detail are evident in every aspect of the application. I am thoroughly impressed with the quality of work and highly recommend Vikas to anyone looking to integrate AI into their application.`,
  },
 
];

const Course4 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Stagger children animations
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }, // Smooth transition for each item
  };

  // useInView hook to trigger animation when in view
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger only once
    threshold: 0.1, // 10% of the component is visible
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? clients.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === clients.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <motion.div
      className="lg:h-screen md:h-screen flex flex-col items-center justify-center bg-gray-800 text-white lg:p-4 pt-10 pb-10 md:p-4"
      ref={ref} // Mark the container for visibility tracking
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      <p className="text-4xl mb-8 md:text-5xl md:mb-12 text-center">
        What Our Clients Say
      </p>
      <div className="flex items-center justify-center w-full">
        <motion.button
          onClick={handlePrev}
          className="p-2 mx-4 rounded-full"
          whileHover={{ scale: 1.1 }}
        >
          <FaArrowLeft className="lg:text-3xl md:text-3xl text-2xl" />
        </motion.button>
        <motion.div className="w-full max-w-5xl lg:p-4 md:p-4 pb-2 pt-2 pl-1 pr-1 flex items-center justify-center overflow-hidden">
          <motion.div className="grid grid-cols-1 gap-4">
            {clients
              .slice(currentIndex, currentIndex + 1)
              .map((client, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-700 rounded-xl p-4 flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:rounded-2xl hover:bg-gray-600 w-full"
                  variants={itemVariants}
                >
                  <motion.div className="flex flex-row justify-between w-full">
                    <span className="text-6xl text-[#01be96] opacity-70">
                      <IoIosQuote />
                    </span>
                    <motion.div className="flex mt-5 ">
                      {Array.from({ length: client.stars }).map(
                        (_, starIndex) => (
                          <FaStar key={starIndex} className="text-yellow-500" />
                        )
                      )}
                    </motion.div>
                  </motion.div>
                  <p className="mt-4">{client.disc}</p>
                  <motion.div className="flex gap-5 mt-5">
                    <motion.img
                      src={client.img_url}
                      alt={client.name}
                      className="w-20 h-20 rounded-full mt-2"
                      whileHover={{ scale: 1.1 }}
                    />
                    <motion.div className="mt-5">
                      <h3 className="text-2xl font-semibold">{client.name}</h3>
                      <p className="text-gray-400">{client.position}</p>
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
          </motion.div>
        </motion.div>
        <motion.button
          onClick={handleNext}
          className="p-2 mx-4 transition-transform transform hover:scale-110 hover:bg-gray-600 rounded-full"
          whileHover={{ scale: 1.1 }}
        >
          <FaArrowRight className="lg:text-3xl md:text-3xl text-2xl" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Course4;

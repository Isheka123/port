import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaStar, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const clients = [
  {
    name: "John Michel",
    position: "Web Developer",
    img_url: "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
    stars: 3,
    disc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
    Temporibus consequuntur dolores labore natus similique nemo doloribus cum accusantium adipisci maiores.`
  },
  {
    name: "John Michel",
    position: "Web Developer",
    img_url: "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
    stars: 4,
    disc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
    Temporibus consequuntur dolores labore natus similique nemo doloribus cum accusantium adipisci maiores.`
  },
  {
    name: "John Michel",
    position: "Web Developer",
    img_url: "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
    stars: 5,
    disc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
    Temporibus consequuntur dolores labore natus similique nemo doloribus cum accusantium adipisci maiores.`
  },
  {
    name: "John Michel",
    position: "Web Developer",
    img_url: "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
    stars: 5,
    disc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
    Temporibus consequuntur dolores labore natus similique nemo doloribus cum accusantium adipisci maiores.`
  },
];

const Course4 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [numCardsToShow, setNumCardsToShow] = useState(getCardsToShow());

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
    triggerOnce: true,  // Trigger only once
    threshold: 0.1,     // 10% of the component is visible
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  useEffect(() => {
    const handleResize = () => {
      setNumCardsToShow(getCardsToShow());
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? clients.length - numCardsToShow : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === clients.length - numCardsToShow ? 0 : prevIndex + 1));
  };

  function getCardsToShow() {
    if (window.innerWidth >= 1024) return 3; // Large screen
    if (window.innerWidth >= 768) return 2; // Medium screen
    return 1; // Small screen
  }

  return (
    <motion.div
      className="lg:h-screen md:h-screen flex flex-col items-center justify-center bg-gray-800 text-white lg:p-4 pt-10 pb-10 md:p-4"
      ref={ref} // Mark the container for visibility tracking
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      <p className='text-4xl mb-8 md:text-5xl md:mb-12 text-center'>What Our Clients Say</p>
      <div className='flex items-center justify-center w-full'>
        <motion.button
          onClick={handlePrev}
          className="p-2 mx-4 rounded-full"
          whileHover={{ scale: 1.1 }}
        >
          <FaArrowLeft className="lg:text-3xl md:text-3xl text-2xl" />
        </motion.button>
        <motion.div
          className="w-full max-w-5xl lg:p-4 md:p-4 pb-2 pt-2 pl-1 pr-1 flex items-center justify-center overflow-hidden"
        >
          <motion.div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 ">
            {clients.slice(currentIndex, currentIndex + numCardsToShow).map((client, index) => (
              <motion.div
                key={index}
                className="bg-gray-700 rounded-xl p-4 flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:rounded-2xl hover:bg-gray-600 w-full"
                variants={itemVariants}
              >
                <motion.img
                  src={client.img_url}
                  alt={client.name}
                  className="w-24 h-24 rounded-full mb-4"
                  whileHover={{ scale: 1.1 }}
                />
                <h3 className="text-2xl font-semibold">{client.name}</h3>
                <p className="text-gray-400">{client.position}</p>
                <motion.div className="flex justify-center mt-2">
                  {Array.from({ length: client.stars }).map((_, starIndex) => (
                    <FaStar key={starIndex} className="text-yellow-500" />
                  ))}
                </motion.div>
                <p className="mt-4">{client.disc}</p>
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

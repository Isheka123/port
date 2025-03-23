import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const handleContactMe = () => {
    window.location.href = "mailto:vikaschelluru@gmail.com";
  };

  const handleConnectLinkedIn = () => {
    window.location.href = "https://www.linkedin.com/in/ch-vikas/";
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Increased staggerChildren to 0.5 for slower appearance
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }, // Increased duration to 1.5 for slower transition
  };

  // useInView hook to trigger animation when in view
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,  // Trigger only once
    threshold: 0.1,     // 10% of the component is visible
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="lg:h-screen bg-gradient-to-b from-[rgb(70,71,59)] to-black flex items-center justify-center">
      <motion.div
        className="text-white text-center m-10 ml-5 mr-5 md:m-20 lg:mb-25 max-w-xl md:max-w-2xl lg:max-w-5xl"
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.p
          className="lg:text-7xl font-bold lg:mt-10 lg:mb-6 pb-5 text-5xl"
          variants={itemVariants}
        >
          About Me
        </motion.p>
        <motion.p
          className="lg:text-xl md:text-xl text-lg mb-8 lg:mb-8"
          variants={itemVariants}
        >
          My journey into the world of AI and computer vision began back in college, where I immersed myself in exploring groundbreaking technologies and sharing the fascinating things I learned. What started as a passion for learning quickly evolved into a love for creating content, staying on the cutting edge of innovation, and working on projects that truly excite me.
        </motion.p>
        <motion.p
          className="lg:text-xl md:text-xl text-lg mb-8 lg:mb-8"
          variants={itemVariants}
        >
        Fast forward to today, I’m proud to be growing my personal brand while doing what I love—building, creating, and inspiring. I’m actively involved in several exciting ventures:
🚀 YouTube channel simplifying complex AI concepts,
🤝 Freelance projects and impactful collaborations.
I’m also developing innovative products:
🤖 Agentic Chatbots for business process automation,
👁️ Real-Time Vision AI Systems powered by AWS and FastAPI
        </motion.p>
        <motion.p
          className="lg:text-xl md:text-xl text-lg mt-2 lg:mt-4"
          variants={itemVariants}
        >
          If you’re interested in collaborating, partnering, or exploring opportunities together, feel free to reach out. I’m always excited to connect with like-minded innovators and businesses ready to make an impact.
        </motion.p>
        <motion.div
          className="lg:mt-15 mt-5 md:mt-10 flex gap-2 lg:gap-14 md:gap-8 md:ml-6 flex-col md:flex-row lg:flex-row justify-center"
          variants={itemVariants}
        >
          <button
            onClick={handleContactMe}
            className="py-3 lg:py-6 px-6 lg:px-12 bg-[#F2F5C5] text-black text-xl sm:text-2xl font-bold rounded-3xl hover:bg-[#ACE1AF] hover:text-black transition duration-300 mb-4 sm:mb-0 md:max-w-md"
          >
            Contact Me
          </button>
          <button
            onClick={handleConnectLinkedIn}
            className="py-3 lg:py-6 px-6 lg:px-12 bg-[#F2F5C5] text-black text-xl sm:text-2xl font-bold rounded-3xl hover:bg-[#ACE1AF] hover:text-black transition duration-300 md:max-w-md"
          >
            Connect on Linkedin
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;

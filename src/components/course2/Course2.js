import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer'; // Step 1: Import useInView

const Course2 = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,  // Trigger animation only once
    threshold: 0.1,     // Trigger when 50% of the component is visible
  });

  return (
    <motion.div
      className="lg:h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#3F3333] to-black text-white p-10"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }} // Step 4: Animate based on inView
      transition={{ duration: 1 }}
      ref={ref} // Step 3: Attach ref to the container
    >
      <div className='max-w-5xl flex flex-col justify-center items-center'>
        <motion.h1
          className="text-4xl font-bold mb-16 text-center leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Step 4: Animate based on inView
          transition={{ duration: 1, delay: 0.5 }}
        >
          THE CODE SOLUTIONS ARE PERFECT FOR COMPANIES LOOKING FOR:
        </motion.h1>
        <ul className="text-xl md:text-2xl mb-10 list-disc list-inside">
          <motion.li
            className="mb-4"
            style={{ textIndent: '-1.35em', paddingLeft: '1.5em' }}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Step 4: Animate based on inView
            transition={{ duration: 1, delay: 1 }}
          >
            <span className="font-bold">Automate repetitive tasks</span> to reduce manual intervention and errors, boosting <span className="font-bold">accuracy and productivity.</span>
          </motion.li>
          <motion.li
            className="mb-4"
            style={{ textIndent: '-1.35em', paddingLeft: '1.5em' }}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Step 4: Animate based on inView
            transition={{ duration: 1, delay: 1.25 }}
          >
            <span className="font-bold">Utilize AI for continuous monitoring</span> and instant alerts during industrial accidents, enhancing <span className="font-bold">safety and response times.</span>
          </motion.li>
          <motion.li
            className="mb-4"
            style={{ textIndent: '-1.35em', paddingLeft: '1.5em' }}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Step 4: Animate based on inView
            transition={{ duration: 1, delay: 1.5 }}
          >
            <span className="font-bold">Integrate AI and CCTV</span> for real-time surveillance, ensuring comprehensive oversight and improved <span className="font-bold">operational security.</span>
          </motion.li>
          <motion.li
            className="mb-4"
            style={{ textIndent: '-1.35em', paddingLeft: '1.5em' }}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Step 4: Animate based on inView
            transition={{ duration: 1, delay: 1.75 }}
          >
            <span className="font-bold">Lead the way in Industry 5.0</span> by merging human creativity with AI-driven automation for efficient, innovative <span className="font-bold">industrial solutions.</span>
          </motion.li>
          <motion.li
            className="mb-4"
            style={{ textIndent: '-1.35em', paddingLeft: '1.5em' }}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Step 4: Animate based on inView
            transition={{ duration: 1, delay: 2 }}
          >
            Solutions that <span className="font-bold">learn</span> from new data and <span className="font-bold">adjust their strategies</span> over time, ensuring that solutions remain <span className="font-bold">relevant and effective.</span>
          </motion.li>
        </ul>
        <motion.div
          className="flex flex-col font-bold lg:text-2xl md:text-2xl text-xl lg:flex-row md:flex-row items-center justify-center gap-6"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Step 4: Animate based on inView
          transition={{ duration: 1, delay: 2.5 }}
        >
          <a href="https://www.linkedin.com/in/ch-vikas/" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white text-center lg:px-16 lg:py-4 px-10 py-5 rounded-full hover:bg-blue-600 transition-colors">
            Meet us on Linkedin
          </a>
          <a href="mailto:vikaschelluru@gmail.com" className="bg-blue-500 text-white px-16 py-4 md:py-5 rounded-full hover:bg-blue-600 text-center transition-colors">
            Contact us
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Course2;

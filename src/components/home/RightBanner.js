import React from 'react';
import { profile } from "../../assests";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from 'framer-motion';
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-lazy-load-image-component/src/effects/opacity.css";

const RightBanner = () => {
  // Animation variants
  const variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      className="order-1 lg:order-2"
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <LazyLoadImage
        src={profile}
        effect="blur"
        placeholderSrc={profile}
        alt="logo"
        className="w-[20rem] h-[23rem] md:w-[30rem] md:h-[35rem] lg:w-[33rem] lg:h-[38rem] lg:mb-10"
      />
    </motion.div>
  );
};

export default RightBanner;

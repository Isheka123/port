import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa"; // Import an arrow icon from react-icons

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <div
          onClick={goToBtn}
          className="fixed bottom-5 right-5 bg-gray-800 text-white p-4 rounded-full shadow-lg cursor-pointer hover:bg-gray-700 transition duration-300"
          title="Go to top"
        >
          <FaArrowUp size={24} />
        </div>
      )}
    </>
  );
};

export default GoToTop;

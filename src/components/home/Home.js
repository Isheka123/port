import React from "react";
import Navbar from "../navbar/Navbar";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";

const Home = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <div className=" flex flex-col lg:flex-row lg:gap-28 justify-center items-center">
        <div className="flex flex-col lg:flex-row items-center">
          <RightBanner />
          <LeftBanner />
        </div>
      </div>
    </div>
  );
};

export default Home;

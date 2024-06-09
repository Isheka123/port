import React from "react";
import Navbar from "../navbar/Navbar";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";

const Home = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <div className=" flex flex-col lg:flex-row lg:gap-38 justify-center items-center p-15">
        <div className="flex flex-col mt-10 lg:flex-row lg:gap-28 items-center ">
          <RightBanner />
          <LeftBanner />
        </div>
      </div>
    </div>
  );
};

export default Home;

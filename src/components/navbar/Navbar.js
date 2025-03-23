import React from "react";
import { useLocation } from "react-router-dom";
import { logo } from "../../assests/index";
import { Link } from "react-router-dom";
import { Link as SmoothScroll } from "react-scroll";

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      <nav className="p-5 lg:pb-0 flex flex-wrap items-center justify-between bg-black">
        <div className="w-full flex lg:w-auto lg:justify-start justify-center md:justify-center mb-2 ">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="h-20 sm:h-22 md:h-36 lg:h-20"
            />
          </Link>
        </div>
        <div className="mt-10 lg:mt-0 w-full flex justify-center md:justify-center lg:gap-3 gap-1 md:gap-5 lg:justify-end lg:w-auto">
          {isHomePage ? (
            <SmoothScroll
              to="projects"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className="text-gray-300 hover:text-white lg:p-5 md:p-6 p-4 pt-3 pb-5 font-bold lg:text-xl md:pb-6 md:text-xl text-lg bg-gradient-to-b from-[#E2B6B7] to-black hover:from-[#DDA2A3] rounded-lg cursor-pointer"
            >
              Projects
            </SmoothScroll>
          ) : (
            <Link
              to="/"
              className="text-gray-300 hover:text-white lg:p-5 md:p-6 p-4 pt-3 pb-5 font-bold lg:text-xl md:pb-6 md:text-xl text-lg bg-gradient-to-b from-[#E2B6B7] to-black hover:from-[#DDA2A3] rounded-lg cursor-pointer"
            >
              Home
            </Link>
          )}
          <Link
            to="/freelance"
            className="text-gray-300 hover:text-white lg:p-5 md:p-6 p-4 pt-3 pb-5 font-bold lg:text-xl md:pb-6 md:text-xl text-lg bg-gradient-to-b from-[#E0DCBB] to-black hover:from-[#D3CFA6] rounded-lg mx-1 "
          >
            Freelance
          </Link>
          <Link
            to="/courses"
            className="text-gray-300 hover:text-white lg:p-5 md:p-6 p-4 pt-3 pb-5 font-bold lg:text-xl md:pb-6 md:text-xl text-lg bg-gradient-to-b from-[#C59FD1] to-black hover:from-[#B285C2] rounded-lg"
          >
            Courses
          </Link>
          <Link
            to="/my-products"
            className="text-gray-300 hover:text-white lg:p-5 md:p-6 p-4 pt-3 pb-5 font-bold lg:text-xl md:pb-6 md:text-xl text-lg bg-gradient-to-b from-[#A3D9A5] to-black hover:from-[#8FCB91] rounded-lg"
          >
            My Products
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import LeftPanel from "./LeftPanel";

const Navbar = () => {
  return (
    <nav className="w-[100%] overflow-x-hidden  h-16 bg-[#FE3C47] relative font-sans flex flex-row justify-between items-center">
      <Link to="/">
        <h1
          className="text-left text-white text-2xl md:text-4xl font-bold 
      p-3 font-[Georgia] left-1 top-0 cursor-pointer"
        >
          BloodBuddy
        </h1>
      </Link>
      <div className="flex flex-col  min-h-screen py-2   top-0  md:right-10">
        <LeftPanel absolute="absolute" top="16" bgSlider="fixed" />
      </div>

      <div className="icon flex mr-[65px]  md:mx-[120px] items-center   ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 text-white  mx-35 md:mx-4 hover:scale-125"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;

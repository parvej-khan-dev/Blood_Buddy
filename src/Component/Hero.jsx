import React from "react";
import { Link } from "react-router-dom";
import videoBg from "../assets/video.mp4";

const Hero = () => {
  return (
    <div className="main ">
      <div className="overlay z-10 relative "></div>
      <video src={videoBg} autoPlay loop muted className="lg:w-full " />
      <div className="content">
        <Link to={"./register"}>
          <button
            className="w-96 mx-10 px-6 py-2.5 text-sm font-medium 
                                  tracking-wider
                   text-white uppercase transition-colors duration-300 transform bg-red-600
                    rounded-lg lg:w-auto lg:mx-4 hover:bg-gray-500 focus:outline-none
                    focus:bg-gray-600  z-1 absolute hidden lg:block lg:top-[25rem]  lg:left-[-70px] lg:rotate-90"
          >
            Donote Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;

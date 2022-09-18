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

        <h1
          className="text-4xl lg:text-[126px] font-extrabold leading-9 my-5 text-center mb-10
       lg:text-white lg:pb-10 text-white mb-12 absolute bottom-[10rem] left-[0rem] lg:top-[8rem] lg:right-[-45rem] "
        >
          BE A HERO
        </h1>
      </div>
    </div>

    /* <header className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-16 mx-auto">
          <div className="items-center lg:flex ">
            <div className="w-full lg:w-1/2 ">
              <div className="lg:max-w-lg">
                <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl">
                  Donote Blood get a chance to{" "}
                  <span className="text-red-600">Save Life</span>
                </h1>

                <div className="flex flex-col ml-10 mt-8 space-y-3 lg:space-y-0 lg:flex-row">
                  <Link to={"./register"}>
                    <button
                      className="w-full px-6 py-2.5 text-sm font-medium 
                                  tracking-wider
                   text-white uppercase transition-colors duration-300 transform bg-red-600
                    rounded-lg lg:w-auto lg:mx-4 hover:bg-gray-500 focus:outline-none
                    focus:bg-gray-600"
                    >
                      Donote Now
                    </button>
                  </Link>
                  <Link to={"./register"}>
                    <button
                      className="w-full px-6 py-2.5 text-sm font-medium 
                  tracking-wider text-white uppercase transition-colors duration-300
                  transform bg-transprant rounded-lg lg:w-auto lg:mx-4 hover:bg-gray-600
                   focus:outline-none ring-1 focus:bg-gray-600"
                    >
                      Blood Donor request
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center w-full   mt-6 lg:mt-0  lg:w-1/2">
              <img
                className="w-96 h-96 lg:max-w-md  "
                src={require("../assets/hero2.png")}
                alt="email illustration vector art"
              />
            </div>
          </div>
        </div>
      </header> */
  );
};

export default Hero;

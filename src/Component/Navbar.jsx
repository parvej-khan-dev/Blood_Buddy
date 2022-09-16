import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { FiUser } from "react-icons/fi";

// import LeftPanel from "./LeftPanel";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-3.5 lg:py-5 dark:bg-gray-800">
        <div className="flex md:flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to={"/"} className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="BloodBoddy Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              BloodBoddy
            </span>
          </Link>
          <div className="flex items-center lg:order-2">
            <Link
              to={"./Login"}
              className=" text-gray-800 md:visible invisible dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              Log in
            </Link>
            <Link
              to={"/"}
              className="text-white bg-red-700 hover:bg-red-800
               focus:ring-4 focus:ring-red-300 font-medium rounded-lg
                text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
            >
              <Link to={"./register"}>Donate</Link>
            </Link>
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg 
              lg:hidden hover:bg-gray-100 focus:outline-none
               focus:ring-2 focus:ring-gray-200 dark:text-gray-400
                dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                className={`hidden w-6 h-6 text-black`}
                onClick={() => setIsNavOpen(false)}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {/* moblie menu  */}

          {isNavOpen && (
            <nav>
              <section className="MOBILE-MENU flex lg:hidden">
                <div
                  className="HAMBURGER-ICON space-y-2"
                  onClick={() => setIsNavOpen((prev) => !prev)}
                >
                  <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                  <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                  <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                </div>

                <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                  <div
                    className="absolute top-0 right-0 px-8 py-8"
                    onClick={() => setIsNavOpen(false)}
                  >
                    <svg
                      className="h-8 w-8 text-gray-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </div>
                  <ul className="flex flex-col items-center justify-between min-h-[250px]">
                    <li className="border-b border-gray-400 my-8 uppercase text-black">
                      <Link to={"/"}>Home</Link>
                    </li>
                    <li className="border-b border-gray-400 my-8 uppercase  text-black">
                      <Link to={"/register"}>Donate Blood</Link>
                    </li>
                    <li className="border-b border-gray-400 my-8 uppercase text-black">
                      <Link to={"/register"}>Post Donor request</Link>
                    </li>
                  </ul>
                </div>
              </section>

              <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
                <li>
                  <Link to={"/Home"}>Home</Link>
                </li>
                <li>
                  <Link to={"/portfolio"}>Portfolio</Link>
                </li>
                <li>
                  <Link to={"/contact"}>Contact</Link>
                </li>
              </ul>
            </nav>
          )}
          {/* desktiopmenu */}

          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link
                  to={"./"}
                  className="block py-2 pr-4 pl-3 text-white rounded
                  bg-red-700 lg:bg-transparent lg:text-red-700 lg:p-0
                  dark:text-white"
                  aria-current="page"
                >
                  {" "}
                  Home
                </Link>
              </li>

              {/* donate */}

              <li>
                <Link
                  to={"/register"}
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-red-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Donate
                </Link>
              </li>

              <li>
                <Link
                  to={"/"}
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b
                  border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent
                  lg:border-0 lg:hover:text-red-700 lg:p-0 dark:text-gray-400
                  lg:dark:hover:text-white dark:hover:bg-gray-700
                  dark:hover:text-white lg:dark:hover:bg-transparent
                  dark:border-gray-700"
                >
                  Donee
                </Link>
              </li>
              <li>
                <Link
                  to={"/finddoner"}
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-red-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Search Donor
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-red-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to={"/Contact"}
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-red-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </header>

    // <nav className="w-[100%]   h-16 bg-[#FE3C47] relative font-sans flex flex-row justify-between items-center">
    //   <Link to="/">
    //     <h1
    //       className="text-left text-white text-2xl md:text-4xl font-bold
    //   p-3 font-[Georgia] left-1 top-0 cursor-pointer"
    //     >
    //       BloodBuddy
    //     </h1>
    //   </Link>
    //   <div className="flex flex-col  min-h-screen py-2   top-0  md:right-10">
    //     <LeftPanel absolute="absolute" top="16" bgSlider="fixed" />
    //   </div>

    //   <div className="icon flex mr-[65px]  md:mx-[120px] items-center   ">
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       fill="none"
    //       viewBox="0 0 24 24"
    //       strokeWidth={1.5}
    //       stroke="currentColor"
    //       className="w-10 h-10 text-white  mx-35 md:mx-4 hover:scale-125"
    //     >
    //       <path
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
    //       />
    //     </svg>
    //     <Link to={"./Login"}>
    //       <p className="text-2xl font-mono">Login</p>
    //     </Link>
    //   </div>
    // </nav>
  );
};

export default Navbar;

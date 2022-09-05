import React, { useState } from "react";
import {
  HiOutlinePlusCircle,
  HiSearch,
  HiUserCircle,
  HiOutlineHome,
} from "react-icons/hi";
import { Link } from "react-router-dom";

const LeftPanel = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <>
      {showSidebar ? (
        <button
          className="flex text-4xl text-white items-center cursor-pointer fixed right-10 top-2 z-50"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          x
        </button>
      ) : (
        <svg
          onClick={() => setShowSidebar(!showSidebar)}
          className="fixed  z-30 flex items-center cursor-pointer right-10 top-4"
          fill="#fff"
          viewBox="0 0 100 80"
          width="40"
          height="40"
        >
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg>
      )}
      <div
        className={`top-[68px] right-0 w-[20vw] bg-white	text-left  text-white fixed h-full z-40  ease-in-out duration-300 ${
          showSidebar ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <h3 className="mt-20 text-4xl font-semibold text-white">
          <ul>
            <Link to="/">
              <li
                className="bg-red-600 h-15 text-[22px] py-2 
        shadow-lg shadow-red-600/50 m-4 hover:border-red-600 cursor-pointer hover:border-2  p-2 rounded hover:bg-black
        hover:text-red-600"
                onClick={() => setShowSidebar(!showSidebar)}
              >
                <HiOutlineHome
                  className="  text-2xl font-bold
          text-white rounded  inline mx-3 "
                />
                Home
              </li>
            </Link>
            <Link to="/register">
              <li
                className="bg-red-600 h-15 text-[22px] py-2 
        shadow-lg shadow-red-600/50 m-4 hover:border-red-600 cursor-pointer hover:border-2  p-2 rounded hover:bg-black
        hover:text-red-600"
                onClick={() => setShowSidebar(!showSidebar)}
              >
                <HiUserCircle
                  className="  text-2xl font-bold
          text-white rounded  inline mx-3 "
                />
                Donate Blood
              </li>
            </Link>
            <Link to="/finddoner">
              <li
                className="bg-red-600 h-15 text-[22px] py-2 
        shadow-lg shadow-red-600/50 m-4 hover:border-red-600
         hover:border-2  p-2 rounded hover:bg-black hover:text-red-600 cursor-pointer "
                onClick={() => setShowSidebar(!showSidebar)}
              >
                <HiSearch
                  className="  text-2xl font-bold
          text-white rounded  inline mx-3 "
                />
                Find Donor
              </li>
            </Link>
            <Link to="/request">
              <li
                className="bg-red-600 h-15 text-[22px] py-2 
        shadow-lg shadow-red-600/50 m-4 hover:border-red-600 hover:border-2 cursor-pointer  p-2 rounded hover:bg-black hover:text-red-600"
                onClick={() => setShowSidebar(!showSidebar)}
              >
                <HiOutlinePlusCircle
                  className="  text-2xl font-bold
          text-white rounded  inline mx-3"
                />
                Blood Request
              </li>
            </Link>
          </ul>
        </h3>
      </div>
    </>
  );
};

export default LeftPanel;

import React, { useState } from "react";
import { HiOutlinePlusCircle, HiSearch, HiUserCircle } from "react-icons/hi";

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
        className={`top-[68px] right-0 w-[35vw] bg-white	text-left  text-white fixed h-full z-40  ease-in-out duration-300 ${
          showSidebar ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <h3 className="mt-20 text-4xl font-semibold text-white">
          <ul>
            <li
              className="bg-red-600 h-15 text-2xl py-2 uppercase
        shadow-lg shadow-red-600/50 m-4 hover:border-red-600 cursor-pointer hover:border-2  p-2 rounded hover:bg-black
        hover:text-red-600"
            >
              <HiUserCircle
                className="  text-4xl font-bold
          text-white rounded  inline mx-3 "
              />
              Register for Blood Donation
            </li>
            <li
              className="bg-red-600 h-15 text-2xl py-2 uppercase
        shadow-lg shadow-red-600/50 m-4 hover:border-red-600
         hover:border-2  p-2 rounded hover:bg-black hover:text-red-600 cursor-pointer "
            >
              <HiSearch
                className="  text-4xl font-bold
          text-white rounded  inline mx-3 "
              />
              Find Blood Near You
            </li>
            <li
              className="bg-red-600 h-15 text-2xl py-2 uppercase
        shadow-lg shadow-red-600/50 m-4 hover:border-red-600 hover:border-2 cursor-pointer  p-2 rounded hover:bg-black hover:text-red-600"
            >
              <HiOutlinePlusCircle
                className="  text-4xl font-bold
          text-white rounded  inline mx-3"
              />
              Post Blood Request
            </li>
          </ul>
        </h3>
      </div>
    </>
  );
};

export default LeftPanel;

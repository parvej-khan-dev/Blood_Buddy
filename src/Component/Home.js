import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import hero from "../assets/hero2.png";
import CardUI from "./CardUI";
import Search from "./Search";

const Image = styled.img`
  border-radius: 50%;
  width: 575px;
  margin-right: 90px;
  height: 500px;
  @media (max-width: 360px) {
    display: none;
  }
`;

const Home = () => {
  return (
    <div className="overflow-x-hidden	">
      <section className="w-[100%] md:h-[100vh] h-[60vh] text-white md:p-[10px]  bg-gradient-to-r from-cyan-600 to-blue-900 flex flex-row justify-center items-center ">
        <div style={{ position: "relative" }}>
          <h1 className="w-[85%] text-[30px] md:text-[3.0rem] font-bold mx-[25px]">
            Donote Blood Near you get a chance to Save Life
          </h1>
          <div className="block grid grid-cols-2 gap-2 lg:my-10 lg:ml-[0.25rem] lg:mr-[6.50rem]  mx-2 my-4">
            <Link to="./register">
              <button
                type="button"
                className="inline-flex px-8 py-3 my-1 text-sm lg:text-xl text-right lg:ml-[10rem]
                 font-medium text-white transition bg-red-600 rounded-md shadow-sm hover:bg-indigo-700"
                data-bs-toggle="button"
                autocomplete="off"
              >
                Search Donor
              </button>
            </Link>
            <Link to="./register">
              <button
                type="button"
                className="inline-flex px-8 py-3 my-1 text-sm lg:text-xl  font-medium lg:mr-[13rem]
              text-white transition bg-gray-800 rounded-md shadow-sm hover:bg-indigo-700 active"
                data-bs-toggle="button"
                autocomplete="off"
                aria-pressed="true"
              >
                Donote Blood
              </button>
            </Link>
          </div>
        </div>

        <Image src={hero}></Image>
      </section>

      {/* find filter */}
      <div className="pb-20">
        <h2 className="md:text-[3.5rem] text-[1.5rem] font-[800] leading-snug tracking-wide  uppercase mt-10 ">
          Find Blood Doner<br></br> Near You
        </h2>
        <Search />
      </div>

      {/* Card blood donation camp */}
      <h2
        className="md:text-[3.5rem] text-[1.5rem] font-[800] 
      leading-snug tracking-wide  uppercase  md:mt-10 mb-[2.5rem]"
      >
        Blood Donation Camp<br></br> Near You
      </h2>
      <div className="grid lg:grid-cols-4 gap-4 grid-row-4 ">
        <CardUI
          name="Blood Camp In Jhotwara"
          image={require("../assets/blooddoationvaishali.jpg")}
        />
        <CardUI
          name="Blood Camp at Vaishali nagar"
          image={require("../assets/blooddonationjaipur.jpg")}
        />
        <CardUI
          name="Blood Camp at Vidhadhar nagar"
          image={require("../assets/bloodmalviya.jpg")}
        />
        <CardUI
          name="Blood Camp at Vidhadhar nagar"
          image={require("../assets/bloodmalviya.jpg")}
        />
      </div>
      {/* footer */}
    </div>
  );
};

export default Home;

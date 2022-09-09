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
          <div className=" w-[70%] flex flex-row md:justify-center md:mx-10 md:my-10 pt-10 ">
            <Link to="./register">
              <button className="bg-red-600 text-2xl md:text-[23px] md:mr-[40px] md:px-18 md:py-3 m-3 px-8 py-3 ring-offset-2 ring-2 rounded hover:bg-black hover:text-white">
                Register
              </button>
            </Link>
            <button className="bg-red-600 text-2xl md:text-[23px] md:mr-[40px] md:px-18 md:py-3 px-8 py-3 m-3 ring-offset-2 ring-2 rounded hover:bg-black hover:text-white ">
              Support
            </button>
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
      <div className="md:p-10 md:m-10 m-5 flex flex-row flex-wrap place-items-center">
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
      </div>
      {/* footer */}
    </div>
  );
};

export default Home;

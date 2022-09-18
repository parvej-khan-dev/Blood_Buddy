import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import hero from "../assets/hero2.png";
import CardUI from "./CardUI";
import Faq from "./Faq";
import Hero from "./Hero";

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
      <section>
        <Hero />
      </section>

      {/* find filter */}
      <div className="pb-00">
        <h2 className="lg:text-[2.5rem] text-[1.5rem] font-[800] leading-snug tracking-wide  uppercase mt-10 ">
          Find Blood Doner<br></br> Near You
        </h2>
        <Search />
      </div>

      {/* Card blood donation camp */}
      <h2
        className="md:text-[2.5rem] text-[1.5rem] font-[800] 
      leading-snug tracking-wide  uppercase  md:mt-10 lg:text-[2.5rem]"
      >
        Blood Donation Camp<br></br> Near You
      </h2>
      <div className="grid lg:grid-cols-4 gap-4 grid-row-4 lg:py-10 ">
        <CardUI
          name="Blood Camp In Jhotwara"
          image={require("../assets/bloodmalviya.jpg")}
        />
        <CardUI
          name="Blood Camp at Vaishali nagar"
          image={require("../assets/bloodmalviya.jpg")}
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

      {/* Faq */}
      <Faq />

      {/* footer */}
    </div>
  );
};

export default Home;

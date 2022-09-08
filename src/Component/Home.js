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
  height: 400px;
`;

const H1 = styled.h1`
  width: 100%;
  font-size: 3.5rem;
  font-family: sans-serif;
  text-transform: uppercase;
  margin-bottom: 10px;
  text-align: center;
  font-weight: 700;
  margin: 0px 5px;
  text-align: center;
  line-height: 1.5;
  margin: 0px 25px;

  @media (max-width: 360px) {
    font-size: 1.5rem;
    width: 90%;
    padding: 10px;
    margin-left: 20px;
  }
`;

const Button = styled.button`
  background-color: #ab071e;
  color: white;
  padding: 15px 30px;
  font-size: 22px;
  font-weight: 700px;
  margin: 20px;
  border-radius: 10px;
  text-transform: uppercase;
  font-family: sans-serif;

  &:hover {
    background-color: black;
  }

  @media (max-width: 360px) {
    font-size: 14px;
    padding: 8px 15px;
    margin: 5px;
  }
`;

const Home = () => {
  return (
    <div>
      <section className="w-[100%] md:h-[100vh]  h-[35vh] text-white md:p-[10px]  bg-gradient-to-r from-cyan-600 to-blue-900 flex flex-row justify-center items-center ">
        <div style={{ position: "relative" }}>
          <H1>Donote Blood Near you get a chance to Save Life </H1>
          <div className="flex flex-row md:mx-10 mx-5 md:my-5 my-2 md:leading-5 justify-center	">
            <Link to="./register">
              <Button>Register Now</Button>
            </Link>
            <Button>Support Us</Button>
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

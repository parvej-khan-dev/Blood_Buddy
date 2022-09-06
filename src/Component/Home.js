import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import hero from "../assets/hero2.png";

const Section = styled.section`
  width: 100%;
  height: 100vh;
  color: white;
  padding: 10px;
  /* background-image: url(${hero}) ; */
  background-size: contain;

  background: linear-gradient(90deg, #1e293b, #0f172a 100%);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  border-radius: 50%;
  width: 575px;
  margin-right: 90px;
  height: 400px;
`;

const H1 = styled.h1`
  width: 100%;
  font-size: 3rem;
  font-family: sans-serif;
  text-transform: capitalize;
  margin-bottom: 10px;
  text-align: center;
  font-weight: 700;
  margin: 0px 5px;
  text-align: center;
  line-height: 1.5;
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
`;

const Home = () => {
  return (
    <div>
      <Section>
        <div style={{ position: "relative" }}>
          <H1>Donote Blood Near you get a chance to Save Life </H1>
          <div className="flex flex-row mx-10 my-5 leading-5 justify-center	">
            <Link to="./register">
              <Button>Register Now</Button>
            </Link>
            <Button>Support Us</Button>
          </div>
        </div>

        <Image src={hero}></Image>
      </Section>
    </div>
  );
};

export default Home;

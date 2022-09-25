import React from "react";
// import { Link } from "react-router-dom";

import CardUI from "./CardUI";
import Faq from "./Faq";
import Hero from "./Hero";

import Search from "./Search";

const Home = () => {
  return (
    <div className="overflow-x-hidden	">
      <section>
        <Hero />
      </section>

      {/* find filter */}
      <div className="pb-00">
        <h2 className="text-3xl font-extrabold leading-9 my-10 text-center mb-10 border-b-2 border-gray-100 text-gray-900 mb-12 ">
          Find Blood Doner<br></br> Near You
        </h2>
        <Search />
      </div>

      {/* Card blood donation camp */}
      <section className="lg:bg-[#1e293b] lg:text-white lg:p-10 lg:my-10">
        <h2
          className="text-2xl font-extrabold leading-9 my-5 text-center mb-10 border-b-2 border-gray-100 
       lg:text-white lg:pb-10 text-gray-900 mb-12"
        >
          Blood Donation Camp<br></br> Near You
        </h2>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2">
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
          </div>
        </div>
      </section>

      {/* Faq */}
      <Faq />

      {/* footer */}
    </div>
  );
};

export default Home;

import React, { useState } from "react";
import donationgif from "../assets/donation.gif";
import "./Register.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    password: "",
    bloodType: "",
    State: "",
    City: "",
    avialble: "",
  });

  let name, value;

  const handleChange = (e) => {
    console.log(handleChange);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  //sent data  to database

  const postData = async (e) => {
    e.preventDefault();
    console.log("datashow");
    const {
      firstName,
      lastName,
      phone,
      password,
      avialble,
      bloodType,
      State,
      City,
    } = user;

    const res = await fetch("http://localhost:5000/api/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        phone,
        password,
        avialble,
        bloodType,
        State,
        City,
      }),
    });
    const data = res.json();

    if (!data) {
      window.alert("Invilad Registertion");
      console.log("please fill data");
    } else {
      window.alert(" Registertion Sucessfull");
      console.log(" Registertion Sucessfull");
      navigate("/Login");
    }
  };

  return (
    <div className="countiner md:w-[90%]  h-[70%] mx-auto  my-10 border-white border-2 flex flex-row  rounded shadow-lg  shadow-white/50">
      <img src={donationgif} className="md:w-[50%] " alt="register" />
      <div className="md:w-[50%] mx-2">
        <h1 className="md:text-5xl font-bold text-center my-5 head text-center">
          Register Form{" "}
        </h1>
        <form method="POST" className="flex flex-col ml-5 text-[18px]  my-10">
          {/* full name */}
          <div className="FullNam flex flex-row input-box justify-around ">
            <input
              type="text"
              onChange={handleChange}
              name="firstName"
              placeholder="first Name"
              value={user.firstName}
              className="bg-transparent border-2 pl-2 ml-1 mr-5 text-[18px] capitalize border-white"
            />
            <input
              type="text"
              onChange={handleChange}
              name="lastName"
              placeholder="Last Name"
              value={user.lastName}
              className="bg-transparent border-2 text-[18px] pl-2 ml-1 mr-5 capitalize border-white"
            />
          </div>
          {/* phone */}
          <div className="flex flex-row input-box justify-around">
            <input
              type="tel"
              onChange={handleChange}
              name="phone"
              placeholder="phone number"
              autoComplete="off"
              value={user.phone}
              className="bg-transparent border-2 pl-2 ml-1 text-[18px] mr-5 capitalize border-white"
            />
            <input
              type="password"
              onChange={handleChange}
              name="password"
              placeholder="password"
              value={user.password}
              className="bg-transparent border-2 text-[18px] pl-2 ml-1 mr-5 capitalize border-white"
            />
          </div>
          {/* blood grop and phone number */}
          <div className="flex flex-row input-box justify-around">
            <select
              value={user.avialble}
              onChange={handleChange}
              name="avialble"
              className="bg-black block w-[92%] md:w-full md:mr-5 md:ml-1 text-[18px] border-2 pl-2   capitalize border-white"
            >
              <option defaultValue>Availablty</option>
              <option value="YES">YES</option>
              <option value="NO">NO</option>
            </select>
            {/* blood group  */}
            <select
              onChange={handleChange}
              name="bloodType"
              value={user.bloodType}
              className="bg-black block w-[92%] md:w-full mr-5 ml-1 border-2 pl-2 text-[18px]  capitalize border-white"
            >
              <option defaultValue value="Select Blood Group">
                Select Blood Group
              </option>
              <option value="A+" n>
                A+
              </option>
              <option value="A-">A-</option>
              <option value="B-">B-</option>
              <option value="B+">B+</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB-">AB-</option>
              <option value="AB+">AB+</option>
            </select>
          </div>
          <div className="adress input-box flex flex-row justify-around ">
            <select
              value={user.State}
              onChange={handleChange}
              name="State"
              className="bg-black block w-[92%] md:w-full md:mr-5 md:ml-1 text-[18px] border-2 pl-2   capitalize border-white"
            >
              <option value="Rajasthan">Rajasthan</option>
              <option value="Delhi">Delhi</option>
            </select>
            <input
              type="text"
              onChange={handleChange}
              name="City"
              placeholder="City"
              value={user.City}
              className="bg-transparent border-2  text-[18px] pl-2 ml-1 mr-3  capitalize border-white"
            />
          </div>

          <input
            type="submit"
            value="Submit"
            onClick={postData}
            className="md:w-[35rem] w-[28rem] md:ml-2 mt-[10px] text-[18px]  my-5 hover:bg-red-600 border-2 border-white "
          />
        </form>
      </div>
    </div>
  );
};

export default Register;

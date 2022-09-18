import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// import postwithbg from "../assets/blood.png";
import "./Register.css";
function Postrequest() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    patientName: "",
    phone: "",
    bloodType: "",
    State: "",
    City: "",
    hospitalName: "",
    description: " ",
  });

  let name, value;

  const handleChange = (e) => {
    console.log(handleChange);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();
    console.log("datashow");
    const {
      patientName,
      phone,
      bloodType,
      State,
      City,
      hospitalName,
      description,
    } = user;

    const res = await fetch(
      "https://blood-blood-api1.herokuapp.com/api/donations",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          patientName,
          phone,
          bloodType,
          State,
          City,
          hospitalName,
          description,
        }),
      }
    );
    const data = res.json();

    if (!data) {
      window.alert("Invilad Registertion");
      console.log("please fill data");
    } else {
      window.alert(" Blood Request Sucessfull");
      console.log("  Blood Request Sucessfull");
      navigate("/Login");
    }
  };

  return (
    <div className="bg-white">
      <form
        method="POST"
        className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 text-left lg:px-10"
      >
        <div>
          <label className="block mb-2 text-sm text-gray-600 dark:text-gray-800">
            Patient Name
          </label>
          <input
            name="patientName"
            value={user.patientName}
            onChange={handleChange}
            type="text"
            placeholder="John"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm text-gray-600 dark:text-gray-800">
            Hospital Name
          </label>
          <input
            onChange={handleChange}
            name="hospitalName"
            value={user.hospitalName}
            type="text"
            placeholder="Hospital Name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm text-gray-600 dark:text-gray-800">
            Phone number
          </label>
          <input
            onChange={handleChange}
            name="phone"
            value={user.phone}
            type="text"
            placeholder="XXX-XX-XXXX-XXX"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        {/* bloodgroup & Availvblty */}

        <div>
          <label
            htmlFor="countries"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-800"
          >
            Choose Your BloodGroup
          </label>
          <select
            name="bloodType"
            value={user.bloodType}
            onChange={handleChange}
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected="">Choose Your BloodGroup</option>
            <option value="A-">A-</option>
            <option value="B-">B-</option>
            <option value="B+">B+</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB-">AB-</option>
            <option value="AB+">AB+</option>
          </select>
        </div>
        {/* <div>
          <label
            htmlFor="countries"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-800"
          >
            When Blood Required
          </label>
          <input
            name="Date"
            value={user.date}
            onChange={handleChange}
            type="date"
            placeholder="Date"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div> */}

        {/* location  */}
        <div>
          <label className="block mb-2 text-sm text-gray-600 dark:text-gray-800">
            State
          </label>
          <input
            name="State"
            value={user.State}
            onChange={handleChange}
            type="text"
            placeholder="State"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm text-gray-600 dark:text-gray-800">
            City
          </label>
          <input
            name="City"
            value={user.City}
            onChange={handleChange}
            type="text"
            placeholder="City"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm text-gray-600 dark:text-gray-800">
            Massage
          </label>
          <input
            onChange={handleChange}
            name="description"
            value={user.description}
            type="text"
            placeholder="Message"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div></div>

        <button
          onClick={postData}
          className="flex items-center justify-between w-full px-6 py-3 
                text-sm tracking-wide text-white capitalize transition-colors duration-300
                 transform bg-red-500 rounded-md hover:bg-red-400 focus:outline-none focus:ring
                 focus:ring-red-300 focus:ring-opacity-50 mb-10"
        >
          <span>Post Request </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 rtl:-scale-x-100"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </form>
    </div>
  );
}

export default Postrequest;

import React, { useState, useEffect } from "react";
import "./Serach.css";
import Table from "./Table";
// import data from "../data.json";

const Search = () => {
  const [users, setUsers] = useState([]);

  const fatchdata = () => {
    fetch("https://blood-blood-api1.herokuapp.com/api/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        console.log(data);
      });
  };

  useEffect(() => {
    fatchdata();
  }, []);

  console.log("users", users);
  return (
    <div>
      {/* search header */}
      <div className="input-box flex flex-row justify-center m-5">
        <input
          type="text"
          name="City"
          placeholder="Select Your Location"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />

        <select
          className=" lg:w-[20%] mx-4 bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
          // onChange={(e) => {
          //   setFilterParam(e.target.value);
          // }}
        >
          <option defaultValue value="All">
            Select Blood Group
          </option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
          <option value="O-">O-</option>
          <option value="O+">O+</option>
        </select>
        <button
          className="bg-red-600 h-15 text-[22px] py-1  px-8
        shadow-lg  m-2 hover:border-red-600 cursor-pointer hover:border-2  p-2 rounded hover:bg-black
        hover:text-red-600"
        >
          Search
        </button>
      </div>
      {/* get data from api  */}
      <div className="overflow-x-auto">
        <table className="md:table-fixed border-collapse border-2 mx-auto my-10 w-[85%] text-[18px]">
          <thead>
            <tr className="border-2">
              <th className="border-2 font-bold text-[16px] md:text-[22px] text-red-600 uppercase">
                Donor Name
              </th>
              <th className="border-2 font-bold text-[16px] md:text-[22px] text-red-600 uppercase">
                Location
              </th>
              <th className="border-2 font-bold text-[16px] md:text-[22px] text-red-600 uppercase">
                Contact No.
              </th>
              <th className="border-2 font-bold text-[16px] md:text-[22px] text-red-600 uppercase">
                Blood Group
              </th>
              <th className="border-2 font-bold text-[16px] md:text-[22px] text-red-600 uppercase">
                Availability
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((item, index) => {
              return (
                <tr key={index}>
                  <td className="border-2">{item.firstName}</td>
                  <td className="border-2">{item.City}</td>
                  <td className="border-2">{item.phone}</td>
                  <td className="border-2">{item.bloodType}</td>
                  <td className="border-2">{item.avialble}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Search;

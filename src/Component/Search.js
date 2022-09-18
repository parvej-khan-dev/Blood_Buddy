// import { useSelector, useDispatch } from "react-redux";
// import { searchUserStart, loadUsersStart } from "../redux/action";
// import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import "./Serach.css";

const Search = () => {
  const [users, setUsers] = useState([]);
  const [q, setQ] = useState("");
  const [searchParam] = useState(["City", "bloodType"]);
  const [filterParam, setFilterParam] = useState(["All"]);
  const [showdata, setShowData] = useState(false);

  const fatchdata = () => {
    fetch("https://blood-blood-api1.herokuapp.com/api/users")
      .then((res) => res.json())
      .then((result) => {
        setUsers(result);
      });
  };

  useEffect(() => {
    fatchdata();
  }, []);

  const data = Object.values(users);

  function search(data) {
    return data.filter((item) => {
      if (item.bloodType == filterParam) {
        return searchParam.some((newItem) => {
          return (
            item[newItem]?.toString().toLowerCase().indexOf(q.toLowerCase()) >
            -1
          );
        });
      } else if (filterParam == "All") {
        return searchParam.some((newItem) => {
          return (
            item[newItem]?.toString().toLowerCase().indexOf(q.toLowerCase()) >
            -1
          );
        });
      }
    });
  }

  // const Bloodtypes_items = [...new Set(data.map((item) => item.bloodType))];

  const Showhandlebar = () => {
    if (q.length <= 0) {
      alert("Please Select Location And Blood Group");
    } else {
      setShowData(!showdata);
    }
  };

  return (
    <div className={`${showdata} ? h-[90vh]: null`}>
      {/* search header */}
      <div className="input-box flex flex-row justify-center m-5  lg:my-10">
        <input
          type="text"
          name="City"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Select Your Location"
          className="form-control lg:w-[50%] bg-gray-50 border 
          lg:mx-2 border-gray-300 text-gray-900
           text-sm rounded-lg focus:ring-blue-500
            focus:border-blue-500 block w-full 
            p-2.5 dark:bg-gray-700 dark:border-gray-600
             dark:placeholder-gray-400 dark:text-white lg:text-lg
             dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />

        <select
          className=" lg:w-[20%] mx-4 ml-0 bg-gray-50 border 
          border-gray-300 text-gray-900 text-sm lg:text-lg rounded-lg focus:ring-blue-500 
          focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
          dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
          dark:focus:border-blue-500 "
          onChange={(e) => {
            setFilterParam(e.target.value);
          }}
        >
          <option defaultValue value="All">
            Select Blood Group
          </option>
          <option value="A+">A+</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="A-">A-</option> // "A+", "B+", "O+", "AB+", "A-", "B-",
          "O-", "AB-"
          <option value="O-">O-</option>
          <option value="AB-">AB-</option>
          <option value="AB+">AB+</option>
          <option value="O+">O+</option>
        </select>
        <button
          onClick={Showhandlebar}
          className="bg-red-600 h-15 text-md py-1  px-5 ml-0 w-[317px]
        shadow-lg  m-2 hover:border-red-600 cursor-pointer hover:border-2  text-white
         p-2 rounded hover:bg-black
        hover:text-white"
        >
          {showdata ? "Hide Data" : "Search "}
        </button>
      </div>
      {/* get data from api  */}
      <div className="overflow-x-auto">
        {showdata && (
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
              {search(data).map((item) => {
                return (
                  <tr key={data._id}>
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
        )}
      </div>
    </div>
  );
};

export default Search;

// import { useSelector, useDispatch } from "react-redux";
// import { searchUserStart, loadUsersStart } from "../redux/action";
// import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import "./Serach.css";

const Search = () => {
  const [users, setUsers] = useState([]);
  const [q, setQ] = useState("");
  const [searchParam] = useState(["City", "firstName", "bloodType"]);
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

  // const search_parameters = Object.keys(Object.assign({}, ...data));
  const Bloodtypes_items = [...new Set(data.map((item) => item.bloodType))];
  // const City_items = [...new Set(data.map((item) => item.City))];

  // function search(users) {
  //   return users.filter(
  //     (item) =>
  //       item.bloodType.includes(filter) &&
  //       search_parameters.some((parameter) =>
  //         item[parameter].toString().toLowerCase().includes(query)
  //       )
  //   );
  // }

  // const load_more = () => {
  //   setpaginate((prevValue) => prevValue + 8);
  // };

  const Showhandlebar = () => {
    if (q.length <= 0) {
      alert("Please Select Location And Blood Group");
    } else {
      setShowData(!showdata);
    }
  };

  return (
    <div className="h-[80vh]">
      {/* search header */}
      <div className="input-box flex flex-row justify-center m-5">
        <input
          type="text"
          name="City"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Select Your Location"
          className="form-control bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />

        <select
          className=" lg:w-[20%] mx-4 bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
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
          <option value="A-">A-</option>
          {/* {Bloodtypes_items.map((item, index) => (
            <option value={item} key={index}>
              {item}
            </option> */}
          {/* ))} */}
        </select>
        <button
          onClick={Showhandlebar}
          className="bg-red-600 h-15 text-[22px] py-1  px-8
        shadow-lg  m-2 hover:border-red-600 cursor-pointer hover:border-2  p-2 rounded hover:bg-black
        hover:text-red-600"
        >
          Search
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
              {/* {users &&
                users.map((item, index) => ( */}
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

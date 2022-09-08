import React, { useState } from "react";
import "./Serach.css";
import data from "../data.json";

const Search = () => {
  // const [error, setError] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(false);
  // const [items, setItems] = useState(data);
  const [q, setQ] = useState("");
  const [searchParam] = useState(["city", "name", "bloodgroup"]);
  const [filterParam, setFilterParam] = useState(["All"]);
  const [showdata, setShowData] = useState(false);

  // fatec api data

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => res.json())
  //     .then(
  //       (result) => {
  //         setIsLoaded(true);
  //         setItems(result);
  //       },
  //       (error) => {
  //         setIsLoaded(true);
  //         setError(error);
  //       }
  //     );
  // }, []);

  const dataValue = Object.values(data);

  function search(data) {
    return data.filter((item) => {
      if (item.bloodgroup == filterParam) {
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

  function showtoggle() {
    if (q.length <= 0) {
      alert("Please Select Location And Blood Group");
    } else {
      setShowData(!showdata);
    }
  }
  // help to add blood in dropdown

  return (
    <div>
      {/* search header */}
      <div className="input-box flex flex-row justify-center m-5">
        <input
          type="text"
          name="City"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Select Your Location"
          className="md:w-[60%] w-[100%] text-[20px] pl-[10px] bg-black border-2 border-white "
        />

        <select
          className="text-gray-400 md:mx-5 md:w-[30%] w-[99%] pl-2 "
          onChange={(e) => {
            setFilterParam(e.target.value);
          }}
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
          onClick={showtoggle}
        >
          Search
        </button>
      </div>
      {/* get data from api  */}

      {showdata && (
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
              {search(dataValue).map((user) => {
                return (
                  <tr key={user.id}>
                    <td className="border-2">{user.name}</td>
                    <td className="border-2">{user.city}</td>
                    <td className="border-2">{user.phone}</td>
                    <td className="border-2">{user.bloodgroup}</td>
                    <td className="border-2">{user.availbty}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Search;

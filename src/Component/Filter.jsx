import React, { useState } from "react";

const Filter = ({ bloodgroups, onNameFilter }) => {
  const [location, setLocation] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setLocation(value);
    onNameFilter(value);
  };

  return (
    <div>
      <div className="input-box flex flex-row justify-center m-5">
        <input
          type="text"
          name="City"
          onChange={handleChange}
          placeholder="Select Your Location"
          className="w-[40rem] form-control"
        />
        <select className="text-gray-400 mx-5">
          <option defaultValue value="Select Blood Group">
            Select Blood Group
          </option>

          {bloodgroups.map((blooggroup) => {
            return (
              <option value={blooggroup} key={blooggroup}>
                {blooggroup}
              </option>
            );
          })}
        </select>
        <input
          type="submit"
          value="Search"
          icon="search"
          className="w-[10rem] hover:bg-red-600 cursor-pointer "
        />
      </div>
    </div>
  );
};

export default Filter;

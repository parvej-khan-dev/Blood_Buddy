import React, { useState, useEffect } from "react";

const Search = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [q, setQ] = useState("");
  const [searchParam] = useState(["address", "name", "website"]);
  const [filterParam, setFilterParam] = useState(["All"]);

  // fatec api data

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  const data = Object.values(items);

  function search(items) {
    return items.filter((item) => {
      if (item.username == filterParam) {
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

  // help to add blood in dropdown
  if (error) {
    return (
      <p>
        {error.message}, if you get this error, the free API I used might have
        stopped working, but I created a simple example that demonstrate how
        this works,{" "}
        <a href="https://codepen.io/Spruce_khalifa/pen/mdXEVKq">
          {" "}
          check it out{" "}
        </a>{" "}
      </p>
    );
  } else if (!isLoaded) {
    return <>loading...</>;
  } else {
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
            className="w-[40rem] form-control"
          />
          <select
            className="text-gray-400 mx-5"
            onChange={(e) => {
              setFilterParam(e.target.value);
            }}
          >
            <option defaultValue value="All">
              Select Blood Group
            </option>
            <option value="Bret">Bret</option>
            <option value="Antonette">Antonette</option>
            <option value="Samantha">Samantha</option>
            <option value="Samantha">Samantha</option>
            <option value="Karianne">Karianne</option>
            <option value="Maxime_Nienow">Maxime_Nienow</option>
          </select>
        </div>
        {/* get data from api  */}

        <table className="table-fixed border-2 mx-auto my-10 w-[85%] text-[18px]">
          <thead>
            <tr className="border-2">
              <th className="border-2 font-bold text-[22px] text-red-600 uppercase">
                Donor Name
              </th>
              <th className="border-2 font-bold text-[22px] text-red-600 uppercase">
                Location
              </th>
              <th className="border-2 font-bold text-[22px] text-red-600 uppercase">
                Contact No.
              </th>
              <th className="border-2 font-bold text-[22px] text-red-600 uppercase">
                Blood Group
              </th>
              <th className="border-2 font-bold text-[22px] text-red-600 uppercase">
                Availability
              </th>
            </tr>
          </thead>
          <tbody>
            {search(data).map((user) => {
              return (
                <tr key={user.id}>
                  <td className="border-2">{user.name}</td>
                  <td className="border-2">{user.website}</td>
                  <td className="border-2">{user.phone}</td>
                  <td className="border-2">{user.username}</td>
                  <td className="border-2">Yes</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
};

export default Search;

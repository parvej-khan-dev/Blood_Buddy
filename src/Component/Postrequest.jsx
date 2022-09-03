import React from "react";
// import postImage from "../assets/post.png";
import postwithbg from "../assets/blood.png";
import "./Register.css";
function Postrequest() {
  return (
    <div className=" w-[80%]  h-[70%] mx-auto  my-10 border-white border-2 flex flex-row  rounded shadow-lg  shadow-white/50">
      <img src={postwithbg} className="w-[50%] " alt="postrequest" />
      <div>
        <div>
          <h1 className="text-5xl font-bold text-center my-5 head">
            Post Blood Request
          </h1>
          <form className="flex flex-col ml-5   my-10">
            {/* full name */}
            <div className="FullNam flex flex-row input-box justify-around ">
              <input
                type="text"
                name="name"
                placeholder=" patient first Namee"
              />
              <input type="text" name="name" placeholder="patient last Name" />
            </div>
            {/* email */}
            <div className="flex flex-row input-box justify-around">
              <input type="number" name="phone" placeholder="Contact number" />
              <input type="number" name="unit" placeholder="unit required" />
            </div>
            {/* blood grop and phone number */}
            <div className="flex flex-row input-box justify-around">
              <input
                type="number"
                name="Phone Number"
                placeholder="patient Age"
                className=" w-50  "
              />
              <select className="text-gray-500">
                <option defaultValue value="Select Blood Group">
                  patient Blood Group
                </option>
                <option value="A+">A+</option>
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
              <input
                type="text"
                name="Hospital Name"
                placeholder="Hospital Name"
                className="w-50 "
              />
              <input
                type="text"
                name="Location"
                placeholder="Location"
                className=" w-50 "
              />
            </div>

            <input
              type="submit"
              value="Submit"
              className="w-[35rem] mx-5 my-7 hover:bg-red-600 "
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Postrequest;

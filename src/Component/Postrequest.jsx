import React from "react";
import postwithbg from "../assets/blood.png";
import "./Register.css";
function Postrequest() {
  return (
    <div className=" md:w-[80%] w-[95%]  h-[70%] mx-auto  my-10 border-white md:border-2 flex flex-row  rounded shadow-lg  shadow-white/50">
      <img src={postwithbg} className="w-[70%] " alt="postrequest" />
      <div className="w-[100%]">
        <div className="w-[95%]">
          <h1 className="md:text-5xl text-8xl font-bold text-center my-5 head">
            Post Blood Request
          </h1>
          <form className="flex flex-col mx-5   my-10">
            {/* full name */}
            <div className="FullNam flex flex-row input-box justify-around ">
              <input
                type="text"
                name="name"
                placeholder=" Patient Namee"
                className="bg-transparent border-2 ml-1 pl-2 mr-5 capitalize border-white"
              />{" "}
              <input
                type="number"
                name="phone"
                placeholder="Contact number"
                className="bg-transparent border-2 pl-2 ml-1 mr-5 capitalize border-white"
              />
            </div>
            {/* email */}
            <div className="flex flex-row input-box justify-around">
              <input
                type="number"
                name="unit"
                placeholder="unit required"
                className="bg-transparent border-2 pl-2 mr-5 ml-1 capitalize border-white"
              />
              <input
                type="number"
                name="Phone Number"
                placeholder="patient Age"
                id="postAge"
                className="bg-transparent  border-2 pl-2 mr-5 ml-1 capitalize border-white"
              />
            </div>
            {/* blood grop and phone number */}
            <div className="flex flex-row input-box justify-around">
              <select className="bg-black block w-[92%] md:w-full text-xl md:mr-5 mr-1 ml-1 border-2 pl-2   capitalize border-white">
                <option defaultValue value="Select Blood Group" id="bloodgroup">
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
              <input
                type="text"
                name="Hospital Name"
                placeholder="Hospital Name"
                className="bg-transparent border-2 pl-2 mr-5  capitalize border-white"
              />
            </div>
            <div className="adress input-box flex flex-row justify-around  ">
              <textarea
                name="Location"
                placeholder="Location"
                rows="2"
                cols="50"
                className=" location bg-transparent text-xl   w-[93%] pl-2 
                mr-6 ml-2 mb-5 mt-2 mr-5 rounded capitalize "
              ></textarea>
            </div>

            <input
              type="submit"
              value="Submit"
              className="w-[34rem] ml-3 text-xl  mt-[10px] hover:bg-red-600 border-2 border-white "
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Postrequest;

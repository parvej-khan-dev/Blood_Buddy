import React from "react";

const Table = () => {
  return (
    <div>
      {" "}
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
          <tr>
            <td className="border-2"></td>
            <td className="border-2"></td>
            <td className="border-2"></td>
            <td className="border-2"></td>
            <td className="border-2"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;

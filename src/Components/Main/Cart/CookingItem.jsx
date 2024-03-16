import React from "react";

export const CookingItem = ({ button }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr className="border-none">
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            {button && <th></th>}
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr className="border-none">
            <td>1</td>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
            {button && <td>Prepraing</td>}
          </tr>
          {/* row 2 */}
          <tr className="border-none">
            <td>2</td>
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
            <td>Purple</td>
            {button && <td>Prepraing</td>}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

import React from "react";
import { CustomButton } from "../../../assets/CustomButton";

export const CookingItemContainer = ({ button, cartIteams }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table  ">
        {/* head */}
        <thead>
          <tr className="border-none">
            <th></th>
            <th>Name</th>
            <th>Time</th>
            <th>Calories</th>
            {button && <th></th>}
          </tr>
        </thead>
        <tbody className="bg-[#28282808]">
          {cartIteams &&
            cartIteams.map((el) => {
              return (
                <tr key={el.id} className="border-none flex-none items-center">
                  <td>1</td>
                  <td>Cy Ganderton</td>
                  <td>Quality Control Specialist</td>
                  <td>Blue</td>
                  {button && (
                    <td>
                      <CustomButton name={"Prepraing"} />
                    </td>
                  )}
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

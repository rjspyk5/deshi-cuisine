import React from "react";
import { CustomButton } from "../../../assets/CustomButton";

export const CookingIteam = ({ button, item }) => {
  const { name, time, calories } = item;
  return (
    <tr className="border-none flex-none items-center">
      <td>1</td>
      <td>{name}</td>
      <td>{time}</td>
      <td>{calories}</td>
      {button && (
        <td>
          <button
            onClick={() => button(item)}
            type="button"
            className="bg-main  text-[#150B2B] hover:text-[white] hover:bg-[#559433] font-medium py-2 px-4 rounded-full"
          >
            Prepraing
          </button>
        </td>
      )}
    </tr>
  );
};

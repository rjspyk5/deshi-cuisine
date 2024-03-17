import React from "react";
import { CustomButton } from "../../../assets/CustomButton";

export const CookingIteam = ({ button, item }) => {
  const { name, time, calories } = item;
  return (
    <tr className="border-none flex-none items-center firaFont text-[#282828B2]">
      <td>1</td>
      <td>{name}</td>
      <td>{time}</td>
      <td>{calories}</td>
      {button && (
        <td>
          <button
            onClick={() => button(item)}
            type="button"
            className="bg-main  text-[#150B2B] hover:transition-colors duration-300  hover:bg-[#4cd77d] font-semibold py-2 px-4 rounded-full"
          >
            Prepraing
          </button>
        </td>
      )}
    </tr>
  );
};

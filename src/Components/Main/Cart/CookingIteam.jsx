import React from "react";
import { CustomButton } from "../../../assets/CustomButton";

export const CookingIteam = ({ button, item: { name, time, calories } }) => {
  return (
    <tr className="border-none flex-none items-center">
      <td>1</td>
      <td>{name}</td>
      <td>{time}</td>
      <td>{calories}</td>
      {button && (
        <td>
          <CustomButton name={"Prepraing"} />
        </td>
      )}
    </tr>
  );
};

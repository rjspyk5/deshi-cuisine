import React from "react";

export const CustomButton = ({ name }) => {
  return (
    <button
      type="button"
      className="bg-main  text-[#150B2B] hover:text-[white] hover:bg-[#559433] font-medium py-2 px-4 rounded-full"
    >
      {name}
    </button>
  );
};

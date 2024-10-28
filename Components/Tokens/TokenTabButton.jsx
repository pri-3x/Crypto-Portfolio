import React from "react";

const TokenTabButton = ({ name, handleClick, activeTab }) => {
  return (
    <button
      onClick={handleClick}
      className={`p-2 mx-2 font-medium border-b-2  focus:outline-none focus:ring-0 sm:w-[144px] ${
        activeTab == name
          ? "text-primary-default border-primary-default"
          : "border-transparent text-default"
      }`}
    >
      {name}
    </button>
  );
};

export default TokenTabButton;

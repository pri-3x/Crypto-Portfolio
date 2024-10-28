import React from "react";

const NFTsButton = ({ name, openTab, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className={`p-2 mx-2 font-medium border-b-2 ${
        openTab == name
          ? "text-primary-default border-primary-default"
          : "border-transparent text-default"
      }   focus:outline-none focus:ring-0`}
    >
      {name}
    </button>
  );
};

export default NFTsButton;

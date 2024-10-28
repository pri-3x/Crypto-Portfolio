import React from "react";

const DashboardTabButton = ({ name, handleClick, activeTab }) => {
  return (
    <button
      onClick={handleClick}
      className={`p-2 mx-2 font-medium border-b-2  focus:outline-none focus:ring-0 whitespace-nowrap lg:px-4 xl:px-12 ${
        name == activeTab
          ? "text-primary-default border-primary-default"
          : "border-transparent text-default"
      }`}
    >
      {name}
    </button>
  );
};

export default DashboardTabButton;

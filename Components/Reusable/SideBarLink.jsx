import React from "react";

const SideBarLink = ({ icon, name, handleClick }) => {
  return (
    <a
      onClick={handleClick}
      className="group flex items-center px-4 py-2 hover:bg-hover relative text-alternative "
    >
      <div className="flex justify-center items-center mr-2">{icon}</div>
      <span className="truncate">{name}</span>
    </a>
  );
};

export default SideBarLink;

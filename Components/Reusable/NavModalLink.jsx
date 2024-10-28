import React from "react";

const NavModalLink = ({ icon, name, handleClick }) => {
  return (
    <a
      className="group flex items-center px-4 py-2 hover:bg-hover relative text-alternative"
      onClick={handleClick}
    >
      <div className="flex justify-center items-center mr-2">{icon}</div>
      <span className="truncate">{name}</span>
    </a>
  );
};

export default NavModalLink;

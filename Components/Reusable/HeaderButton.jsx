import React from "react";

const HeaderButton = ({ name, icon, handleClick }) => {
  return (
    <a
      className="cursor-pointer  transition px-5 py-2 rounded-full border flex items-center justify-center text-center text-xs border-primary-default bg-primary-default text-primary-inverse hover:border-primary-default-hover hover:bg-primary-default-hover"
      onClick={handleClick}
    >
      <span className="flex mr-2.5 items-center">{icon}</span>
      <span>{name}</span>
    </a>
  );
};

export default HeaderButton;

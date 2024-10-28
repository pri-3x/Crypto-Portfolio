import React from "react";

const UserModalLink = ({ handleClick, name }) => {
  return (
    <a
      className="text-inherit block px-4 py-2 text-sm hover:bg-hover hover:no-underline"
      onClick={handleClick}
    >
      {name}
    </a>
  );
};

export default UserModalLink;

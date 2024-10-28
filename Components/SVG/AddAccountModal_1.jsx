import React from "react";

const AddAccountModal_1 = ({ handleClick }) => {
  return (
    <svg
      onClick={handleClick}
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-label="Close modal"
      className="cursor-pointer text-icon-default h-6 w-6 absolute right-0 z-50"
      data-testid="x-icon"
    >
      <line x1={18} y1={6} x2={6} y2={18} />
      <line x1={6} y1={6} x2={18} y2={18} />
    </svg>
  );
};

export default AddAccountModal_1;

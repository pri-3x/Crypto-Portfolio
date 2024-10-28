import React from "react";

const GasModalRate = ({ icon, title, elementID }) => {
  return (
    <div className="py-2 border-b border-muted last:border-0 flex justify-between">
      <div className="flex items-center text-default text-sm md:text-base">
        {title}
        <div
          data-tooltip-id={elementID}
          data-testid={elementID}
          className="ml-1 cursor-pointer flex items-center"
        >
          {icon}
        </div>
        <div data-theme="dark" />
      </div>
      <div>2.00&nbsp;GWEI</div>
    </div>
  );
};

export default GasModalRate;

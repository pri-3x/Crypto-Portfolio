import React from "react";

import { GasModalButton_1 } from "../SVG/index";

const GasModalButton = ({
  index,
  item,
  activeNetwork,
  setActiveNetwork,
  SELECT_NETWORK,
  setOpenNetwork,
}) => {
  return (
    <button
      key={index}
      className="text-default select-none relative mx-1 px-3 sm:px-4 rounded-lg hover:bg-hover group text-sm py-3"
    >
      <div className="flex items-center">
        <div className="flex items-center mr-3">
          {activeNetwork == item.name && <GasModalButton_1 />}
        </div>

        <div
          onClick={() => (SELECT_NETWORK(item), setOpenNetwork(false))}
          className="truncate flex-1 mr-3 text-left flex items-center font-medium"
        >
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2">
              <img
                src={item.image}
                className="rounded-full mr-2"
                alt={item.name}
                style={{ height: 22, width: 22 }}
              />
              <span className="font-medium">{item.name}</span>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default GasModalButton;

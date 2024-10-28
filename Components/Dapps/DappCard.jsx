import React from "react";

const DappCard = ({ item, index }) => {
  return (
    <a
      href={item.link}
      className="text-primary-default hover:no-underline flex-1"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex flex-col bg-default justify-between h-full hover:no-underline overflow-hidden rounded-xl p-4 border border-muted gap-2 hover:bg-default-hover cursor-pointer">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 max-w-full">
              <img
                className="w-6 h-6 rounded-full"
                src={item.image}
                alt={item.name}
              />
              <p className="text-sm sm:text-base text-default font-bold truncate">
                {item.name}
              </p>
            </div>
          </div>
          <p className="text-xs sm:text-sm leading-5 font-normal text-alternative !text-[12px] line-clamp-3">
            {item.description}
          </p>
        </div>
        <div className="rounded-md px-2 py-0.5 bg-alternative text-alternative text-xs flex items-center w-fit capitalize font-medium mt-2">
          {item.type}
        </div>
      </div>
    </a>
  );
};

export default DappCard;

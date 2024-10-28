import React from "react";

import { NotificationModalList_1 } from "../SVG/index";

const NotificationModalList = ({ title, date, description }) => {
  return (
    <button className="cursor-pointer disabled:cursor-auto transition border items-center text-sm border-transparent bg-inherit text-default hover:bg-hover px-6 py-4 flex flex-row justify-center align-middle rounded-none text-left gap-3 w-full">
      <div className="relative isolate flex flex-row gap-2 self-start">
        <div className="bg-primary-default rounded-lg p-2 flex justify-center items-center leading-none w-9 h-9">
          <NotificationModalList_1 />
        </div>
      </div>
      <div className="w-full flex flex-col justify-between gap-1">
        <div className="flex flex-row justify-between w-full gap-2">
          <div className="w-full line-clamp-2">
            <div className="sm:text-xs font-medium text-alternative">
              {title}
            </div>
          </div>
          <p className="sm:text-xs font-normal text-alternative line-clamp-1 text-right min-w-fit">
            {date}
          </p>
        </div>
        <div className="flex flex-row gap-2 justify-between w-full">
          <div className="w-full">
            <p className="text-xs sm:text-sm text-default font-normal leading-none line-clamp-3">
              {description}
            </p>
          </div>
        </div>
      </div>
    </button>
  );
};

export default NotificationModalList;

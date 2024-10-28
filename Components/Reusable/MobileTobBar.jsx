import React, { useEffect, useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import {
  MobileTobBar_1,
  MobileTobBar_2,
  MobileTobBar_3,
  MobileTobBar_4,
  MobileTobBar_5,
  MobileTobBar_6,
} from "../SVG/index";
import NotificationModal from "../Modal/NotificationModal";

const MobileTobBar = ({ setOpenSideBar }) => {
  const [openNotification, setOpenNotification] = useState(false);
  return (
    <div className="flex flex-col border-b md:border-b-0 border-muted">
      <div className="md:hidden flex justify-between lg:justify-start top-0 z-10 flex-shrink-0 h-16 sm:h-20 ">
        <div className="flex  items-center flex-shrink-0 px-2 lg:hidden">
          <a href="/">
            <img
              style={{
                width: "20px",
                height: "auto",
              }}
              className=" w-auto outline-none"
              src="/logo.png"
            />
          </a>
        </div>
        <div className="mx-4 sm:mx-6 items-center hidden lg:flex pl-1">
          <div>
            <div className="relative">
              <div className="relative w-full">
                <div className="absolute ml-4 flex items-center h-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 text-alternative"
                  >
                    <circle cx={11} cy={11} r={8} />
                    <line x1={21} y1={21} x2="16.65" y2="16.65" />
                  </svg>
                </div>
                <input
                  className="bg-inherit border border-muted px-4 w-full pl-10 py-2.5 md:w-72 transition-transform duration-500 rounded-lg placeholder:text-default"
                  placeholder="Search for a token..."
                  defaultValue=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mx-6 flex gap-4 items-center lg:hidden text-alternative text-xl">
          <ConnectButton />
          <div>
            <button
              onClick={() => setOpenNotification(!openNotification)}
              className="cursor-pointer disabled:cursor-auto transition border flex items-center justify-center text-center text-sm border-transparent bg-inherit text-default p-0 rounded-lg hover:bg-hover"
            >
              <div className="relative isolate leading-none">
                <MobileTobBar_3 />
              </div>
            </button>
            {openNotification && <NotificationModal />}
          </div>

          <button
            className=" text-default lg:hidden rounded-lg hover:bg-hover"
            onClick={() => setOpenSideBar(true)}
          >
            <MobileTobBar_5 />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileTobBar;

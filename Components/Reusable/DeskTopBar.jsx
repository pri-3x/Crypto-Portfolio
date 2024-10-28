import React, { useState, useEffect } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import NotificationModal from "../Modal/NotificationModal";
import HeaderButton from "../Reusable/HeaderButton";

import {
  DeskTopBar_1,
  DeskTopBar_2,
  DeskTopBar_3,
  DeskTopBar_4,
  DeskTopBar_5,
  DeskTopBar_6,
  Header_1,
  Header_2,
  Header_3,
  Header_4,
  Header_5,
  Header_6,
  Header_7,
  Header_8,
  Header_9,
  Header_10,
  Header_11,
} from "../SVG/index";
import Networks from "../Data/Networks.json";

const DeskTopBar = ({
  component,
  setOpenComponent,
  addAccountModal,
  setAddAccountModal,
  setOpenCreateNFT,
}) => {
  const [openNotification, setOpenNotification] = useState(false);

  return (
    <div className="flex flex-col py-4 px-4 lg:px-6 sm:border-b border-muted">
      <div className="relative flex justify-between pb-4 md:pb-9 -mx-4 px-4 items-center sm:!pb-2">
        <div className="flex justify-start w-full md:w-max md:flex-col md:space-y-2 space-x-3 md:space-x-0 flex-1">
          <div className="flex w-full justify-between md:justify-start items-center whitespace-nowrap md:gap-x-4">
            <h3 className="text-xl sm:text-2xl text-default font-bold">
              {component}
            </h3>
          </div>
        </div>
        <div className="hidden md:flex top-1 right-0 md:top-auto md:right-auto items-center justify-end sm:space-x-2">
          <div>
            <button
              onClick={() => setOpenNotification(!openNotification)}
              className="space-x-2 p-3.5 text-sm inline-flex justify-center items-center bg-inherit hover:text-info border-default transition-colors group border-0 rounded-lg hover:bg-hover text-default"
            >
              <div className="flex items-center truncate flex-1">
                <div className="relative">
                  <div className="relative isolate leading-none">
                    <DeskTopBar_3 />
                  </div>
                </div>
              </div>
            </button>
            {openNotification && <NotificationModal />}
          </div>

          <ConnectButton />
        </div>
      </div>
      <div className="flex items-center gap-4 sm:justify-between overflow-x-auto hide-scrollbar">
        <div className="flex items-center gap-4">
          {component == "Dashboard" && (
            <>
              <HeaderButton
                name={<Header_5 />}
                icon={"Create NFTs"}
                handleClick={() => setOpenComponent("Create NFTs")}
              />
              <HeaderButton
                name={<Header_6 />}
                icon={"Swap"}
                handleClick={() => setOpenComponent("Swap")}
              />
              <HeaderButton
                name={<Header_7 />}
                icon={"Transfer Token"}
                handleClick={() => setOpenComponent("Transfer Token")}
              />
            </>
          )}
          {component == "Tokens" && (
            <>
              <HeaderButton
                name={<Header_5 />}
                icon={"Swap"}
                handleClick={() => setOpenComponent("Swap")}
              />
              <HeaderButton
                name={<Header_5 />}
                icon={"Create Token"}
                handleClick={() => setOpenComponent("Create Token")}
              />
              <HeaderButton
                name={<Header_6 />}
                icon={"Transfer Token"}
                handleClick={() => setOpenComponent("Transfer Token")}
              />
              <HeaderButton
                name={<Header_7 />}
                icon={"Approve"}
                handleClick={() => setOpenComponent("Token Approve")}
              />
              <HeaderButton
                name={<Header_8 />}
                icon={"Allowance"}
                handleClick={() => setOpenComponent("Allowance")}
              />
              <HeaderButton
                name={<Header_8 />}
                icon={"Token Detail"}
                handleClick={() => setOpenComponent("Token Details")}
              />
            </>
          )}
          {component == "NFTs" && (
            <HeaderButton
              name={<DeskTopBar_5 />}
              icon={"Create NFTs"}
              handleClick={() => setOpenComponent("Create NFTs")}
            />
          )}
        </div>
        <div className="flex items-center gap-4">
          {component == "Tokens" ? (
            <a
              onClick={() => setOpenComponent("All Token List")}
              className="cursor-pointer disabled:cursor-auto transition px-5 py-2 rounded-full border flex items-center justify-center text-center text-xs border-default bg-inherit hover:bg-hover text-alternative"
            >
              <span>View your Tokens</span>
              <span className="flex ml-2.5 items-center">
                <DeskTopBar_6 />
              </span>
            </a>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default DeskTopBar;

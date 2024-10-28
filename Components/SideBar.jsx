import React, { useEffect, useState } from "react";

//INTERNAL IMPORT
import {
  SideBar_1,
  SideBar_2,
  SideBar_3,
  SideBar_4,
  SideBar_5,
  SideBar_6,
  SideBar_7,
  SideBar_8,
  SideBar_9,
  Dashboard_9,
} from "./SVG/index";
import SideBarLink from "./Reusable/SideBarLink";
import DashboardNetwork from "./Dashboard/DashboardNetwork";

const SideBar = ({
  openSideNav,
  setOpenSideNav,
  setOpenComponent,
  openSideBar,
  setOpenSideBar,
}) => {
  const [openNetwork, setOpenNetwork] = useState(false);
  return (
    <div
      className={`group z-[10]  md:flex md:flex-col h-screen py-5 pt-8 bg-default border-r border-muted transition-all duration-700 ease-in-out relative md:min-w-[200px] md:max-w-[200px] ${
        openSideBar ? "DESK_TO__BAR_display" : "hidden"
      } `}
    >
      <div className="flex-shrink-0 flex items-center px-4">
        <a className="outline-none" href="/">
          <img
            className="h-8 w-auto dark:hidden outline-none"
            src="/cryptoking.png"
            alt="MetaMask"
          />
          <span className="ml-4">Portfolio</span>
        </a>
      </div>
      <div
        onClick={() => setOpenSideBar(false)}
        className="group-hover:flex absolute hidden h-5 bg-default hover:bg-default-hover border border-default stroke-icon-default items-center rounded-lg w-5 justify-center right-0 -mr-2.5 z-50 -mt-2 DESK_TO__BAR_CLOSE"
        style={{ boxShadow: "rgba(80, 81, 106, 0.2) 0px 1px 4px" }}
      >
        <SideBar_1 />
      </div>
      <div className="mt-6 flex flex-col overflow-y-auto h-full">
        <nav className="space-y-3 mt-8">
          <a
            onClick={() => setOpenComponent("Dashboard")}
            className="group flex items-center px-4 py-2 hover:bg-hover relative text-primary-default dark:text-default font-semibold"
          >
            <div className="hidden md:inline-block h-6 w-0.5 bg-primary-default absolute right-0" />
            <div className="flex justify-center items-center mr-2">
              <SideBar_2 />
            </div>
            <span className="truncate">Overview</span>
          </a>

          <SideBarLink
            icon={<SideBar_3 />}
            name={"Swap"}
            handleClick={() => setOpenComponent("Swap")}
          />
          <SideBarLink
            icon={<SideBar_5 />}
            name={"Tokens"}
            handleClick={() => setOpenComponent("Tokens")}
          />
          <SideBarLink
            icon={<SideBar_6 />}
            name={"NFTs"}
            handleClick={() => setOpenComponent("NFTs")}
          />

          <SideBarLink
            icon={<SideBar_9 />}
            name={"Dapps"}
            handleClick={() => setOpenComponent("Dapps")}
          />
        </nav>
      </div>
      <a
        target="_blank"
        href="https://www.theblockchaincoders.com/SourceCode"
        className="py-4 -mb-5 border-t border-muted flex text-alternative cursor-pointer items-center hover:bg-hover px-6"
      >
        <div className="font-medium text-sm mr-2">@theblockchain</div>
        <SideBar_8 />
      </a>
    </div>
  );
};

export default SideBar;

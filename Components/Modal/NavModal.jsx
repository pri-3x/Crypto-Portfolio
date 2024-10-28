import React from "react";
//INTERNA IMPORT
import {
  NavModal_1,
  NavModal_2,
  NavModal_3,
  NavModal_4,
  NavModal_5,
  NavModal_6,
} from "../SVG/index";
import NavModalLink from "../Reusable/NavModalLink";
const NavModal = ({ setOpenComponent }) => {
  return (
    <div
      className="absolute top-0 z-[5] pt-6 w-[180px] h-screen bg-default border-r border-muted overflow-auto md:left-[200px]"
      style={{ opacity: 1 }}
    >
      <nav className="space-y-3">
        <NavModalLink
          handleClick={() => setOpenComponent("Buy")}
          icon={<NavModal_1 />}
          name={"Buy"}
        />
        <NavModalLink
          handleClick={() => setOpenComponent("Sell")}
          icon={<NavModal_2 />}
          name={"Sell"}
        />
        <NavModalLink
          handleClick={() => setOpenComponent("Swap")}
          icon={<NavModal_3 />}
          name={"Swap"}
        />
        <NavModalLink
          handleClick={() => setOpenComponent("RecevieModal")}
          icon={<NavModal_4 />}
          name={`Send / Receive`}
        />
        <NavModalLink
          handleClick={() => setOpenComponent("Bridge")}
          icon={<NavModal_5 />}
          name={`Bridge`}
        />
        <NavModalLink
          handleClick={() => setOpenComponent("Stake")}
          icon={<NavModal_6 />}
          name={`Stake`}
        />
        {/* <a
          className="group flex items-center px-4 py-2 hover:bg-hover relative text-alternative"
          href="/buy"
        >
          <div className="flex justify-center items-center mr-2">
            <NavModal_1 />
          </div>
          <span className="truncate">Buy</span>
        </a>
        <a
          id="sidebar-item-Sell"
          className="group flex items-center px-4 py-2 hover:bg-hover relative text-alternative"
          href="/sell"
        >
          <div className="flex justify-center items-center mr-2">
            <NavModal_2 />
          </div>
          <span className="truncate">Sell</span>
        </a>
        <a
          id="sidebar-item-Swap"
          className="group flex items-center px-4 py-2 hover:bg-hover relative text-alternative"
          href="/swap"
        >
          <div className="flex justify-center items-center mr-2">
            <NavModal_3 />
          </div>
          <span className="truncate">Swap</span>
        </a>
        <a
          id="sidebar-item-Send & Receive"
          className="group flex items-center px-4 py-2 hover:bg-hover relative text-alternative"
          href="/send"
        >
          <div className="flex justify-center items-center mr-2">
            <NavModal_4 />
          </div>
          <span className="truncate">Send &amp; Receive</span>
        </a>
        <a
          id="sidebar-item-Bridge"
          className="group flex items-center px-4 py-2 hover:bg-hover relative text-alternative"
          href="/bridge"
        >
          <div className="flex justify-center items-center mr-2">
            <NavModal_5 />
          </div>
          <span className="truncate">Bridge</span>
        </a>
        <a
          id="sidebar-item-Stake"
          className="group flex items-center px-4 py-2 hover:bg-hover relative text-alternative"
          href="/stake"
        >
          <div className="flex justify-center items-center mr-2">
            <NavModal_6 />
          </div>
          <span className="truncate">Stake</span>
        </a> */}
      </nav>
    </div>
  );
};

export default NavModal;

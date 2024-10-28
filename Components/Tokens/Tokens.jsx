import React, { useState, useEffect } from "react";

import DeskTopBar from "../Reusable/DeskTopBar";
import MobileTobBar from "../Reusable/MobileTobBar";
import TokenFeatures from "./TokenFeatures";
import TokenMarket from "./TokenMarket";

const Tokens = ({ setOpenComponent, setOpenSideBar }) => {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-y-auto relative">
      <MobileTobBar setOpenSideBar={setOpenSideBar} />
      <main className="flex-1 isolate">
        <div className="flex flex-col">
          <DeskTopBar
            component={"Tokens"}
            setOpenComponent={setOpenComponent}
          />
        </div>
        <div className="flex flex-col gap-y-6 m-4 sm:m-6">
          <h4 className="text-base sm:text-xl text-default font-semibold hidden md:flex">
            Exchange
          </h4>

          <TokenFeatures />

          <TokenMarket />
        </div>
      </main>
    </div>
  );
};

export default Tokens;

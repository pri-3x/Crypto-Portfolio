import React, { useEffect, useState, useRef } from "react";
import { useAccount, useChains } from "wagmi";

import toast, { Toaster } from "react-hot-toast";
import { DEFAULT_VALUE, ETH } from "../../utils/saleToken";
import SwapComponent from "./SwapComponent";
//INTERNAL IMPORT
import MobileTobBar from "../Reusable/MobileTobBar";
import DeskTopBar from "../Reusable/DeskTopBar";

import {
  Swap_1,
  Swap_2,
  Swap_3,
  Swap_4,
  Swap_5,
  Swap_6,
  Swap_7,
  Swap_8,
  Swap_9,
  Swap_10,
  Swap_11,
  Swap_12,
  Swap_13,
  Swap_14,
  Swap_15,
  Swap_16,
  Swap_17,
  Swap_18,
} from "../SVG/index";
import { SwapModal_One, SwapNetwork, SwapCurrency } from "../index";
import { SHORTEN_ADDRESS } from "../../Context/constants";

const Swap = ({ setOpenImageModal, setOpenComponent, setOpenSideBar }) => {
  const { address } = useAccount();
  const chains = useChains();

  return (
    <div className="flex flex-col min-h-screen w-full overflow-y-auto relative">
      <MobileTobBar setOpenSideBar={setOpenSideBar} />
      <main className="flex-1 isolate">
        <div className="pb-10 md:mx-4 my-4 lg:mx-8 lg:my-0">
          <DeskTopBar component={"Swap"} setOpenComponent={setOpenComponent} />
          <div className="justify-center flex py-2 sm:py-3">
            <div className="!bg-inherit md:!bg-default w-full rounded-2xl sm:max-w-md py-4 sm:px-3 md:px-8 sm:py-8">
              <div id="build-quote" className="space-y-3">
                <SwapComponent />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Swap;

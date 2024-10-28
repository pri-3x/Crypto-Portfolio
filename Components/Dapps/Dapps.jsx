import React, { useState, useEffect } from "react";

///INTERNAL IMPORT
import MobileTobBar from "../Reusable/MobileTobBar";
import DeskTopBar from "../Reusable/DeskTopBar";
import DappCard from "../Dapps/DappCard";

import dappLists from "../Data/Dapps.json";

import { useStateContext } from "../../Context/index";

const Dapps = ({ setOpenImageModal, setOpenComponent, setOpenSideBar }) => {
  const { CREATE_NFT, nfts, userNfts, ADD_NFT_METAMASK } = useStateContext();

  return (
    <div className="flex flex-col min-h-screen w-full overflow-y-auto relative">
      <MobileTobBar setOpenSideBar={setOpenSideBar} />
      <main className="flex-1 isolate">
        <div className="flex flex-col">
          <DeskTopBar component={"Dapps"} setOpenComponent={setOpenComponent} />
          <div className="flex flex-col gap-4 py-4 px-4 lg:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-5 gap-4">
              {dappLists.map((item, index) => (
                <DappCard item={item} index={index} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dapps;

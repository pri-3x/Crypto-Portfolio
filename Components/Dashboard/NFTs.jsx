import React, { useState, useEffect } from "react";

import {
  Transaction_1,
  Transaction_2,
  Transaction_3,
  Transaction_4,
  Transaction_5,
  Transaction_6,
  Transaction_7,
  GenerateNFTs_6,
} from "../SVG/index";
import NFTTable from "./NFTTable";
import { useStateContext } from "../../Context/index";
import InnerLoader from "../Reusable/InnerLoader";

const NFTs = ({}) => {
  const { GET_USER_OWN_NFTS, GET_USER_CREATED_NFTS } = useStateContext();

  const [contractNFTs, setContractNFTs] = useState();

  const LOCAT_DATA = async () => {
    const contractNFTs = await GET_USER_CREATED_NFTS();

    setContractNFTs(contractNFTs);
  };

  useEffect(() => {
    LOCAT_DATA();
  }, []);
  return (
    <div className="mt-7 focus:outline-none">
      <div>
        <div className="rounded-2xl py-2">
          <div>
            <div className="relative border-muted">
              <div className="relative">
                {!contractNFTs || contractNFTs.length === 0 ? (
                  <div className="flex w-full rounded-lg justify-center items-center text-center flex-col px-8 h-48 md:h-60 md:bg-default mt-6">
                    <GenerateNFTs_6 />
                    <p className="text-sm sm:text-base font-normal text-alternative">
                      You don't have any nfts yet.
                    </p>
                  </div>
                ) : (
                  <NFTTable nfts={contractNFTs} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTs;

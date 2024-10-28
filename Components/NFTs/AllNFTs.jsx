import React, { useState, useEffect } from "react";

import NFTCard from "./NFTCard";
import { GenerateNFTs_6 } from "../SVG/index";

import nfts from "../Data/NFTs.json";

const AllNFTs = ({ setMintNft, setOpenTab }) => {
  const [nfts, setNfts] = useState();
  useEffect(() => {
    const savedFiles =
      JSON.parse(localStorage.getItem("IPFS_UPLOADED_NFT")) || [];
    if (savedFiles.length > 0) {
      setNfts(savedFiles.reverse());
    }
  }, []);

  return (
    <div className="mt-4">
      <div className="flex flex-wrap gap-6 pb-4 -mx-4 sm:-mx-6 px-4 sm:px-6 h-[375px] ">
        {!nfts?.length && (
          <div className="flex w-full rounded-lg justify-center items-center text-center flex-col px-8 h-48 md:h-60 md:bg-default mt-6">
            <GenerateNFTs_6 />
            <p className="text-sm sm:text-base font-normal text-alternative">
              You don't have any nfts yet.
            </p>
          </div>
        )}
        {nfts?.map((nft, index) => (
          <NFTCard
            setMintNft={setMintNft}
            setOpenTab={setOpenTab}
            nft={nft}
            index={index}
            type="Created NFTs"
            hide={false}
          />
        ))}
      </div>
    </div>
  );
};

export default AllNFTs;

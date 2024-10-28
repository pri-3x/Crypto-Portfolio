import React, { useState, useEffect } from "react";

//INTERNAL IMPORT
import MobileTobBar from "../Reusable/MobileTobBar";
import DeskTopBar from "../Reusable/DeskTopBar";
import NFTCard from "./NFTCard";
import NFTMarketplace from "./NFTMarketplace";

import nfts from "../Data/NFTs.json";
import nftMarketplace from "../Data/NFTMarketplace.json";
import { useStateContext } from "../../Context/index";
import { ALL_NFTS } from "../../Context/constants";

const NFTs = ({ setOpenImageModal, setOpenComponent, setOpenSideBar }) => {
  const {
    CREATE_NFT,
    GET_USER_OWN_NFTS,
    GET_USER_CREATED_NFTS,
    ADD_NFT_METAMASK,
  } = useStateContext();

  const [contractNFTs, setContractNFTs] = useState();
  const [allUserNfts, setAllUserNfts] = useState();
  const [mintNft, setMintNft] = useState();

  const LOCAT_DATA = async () => {
    const contractNFTs = await GET_USER_OWN_NFTS();
    setContractNFTs(contractNFTs?.reverse());

    const allUserNfts = await GET_USER_CREATED_NFTS();
    setAllUserNfts(allUserNfts?.reverse());
  };

  useEffect(() => {
    LOCAT_DATA();
  }, []);

  return (
    <div className="flex flex-col min-h-screen w-full overflow-y-auto relative">
      <MobileTobBar setOpenSideBar={setOpenSideBar} />
      <main className="flex-1 isolate">
        <div className="flex flex-col">
          <DeskTopBar component={"NFTs"} setOpenComponent={setOpenComponent} />
          <div className="flex flex-col gap-4 py-4 px-4 lg:px-6">
            <div className="flex flex-col">
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-col items-start">
                  <h4 className="text-base sm:text-xl text-default font-semibold">
                    Created NFTs
                  </h4>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-stretch gap-6 pb-4 -mx-4 sm:-mx-6 px-4 sm:px-6 h-[375px] overflow-x-auto hide-scrollbar">
                  {allUserNfts?.map((nft, index) => (
                    <NFTCard
                      setOpenImageModal={setOpenImageModal}
                      nft={nft}
                      index={index}
                      type="Created NFTs"
                      hide={true}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-col items-start">
                  <h4 className="text-base sm:text-xl text-default font-semibold">
                    Owned NFTs
                  </h4>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-stretch gap-6 pb-4 -mx-4 sm:-mx-6 px-4 sm:px-6 h-[375px] overflow-x-auto hide-scrollbar">
                  {contractNFTs?.map((nft, index) => (
                    <NFTCard
                      setMintNft={setMintNft}
                      setOpenImageModal={setOpenImageModal}
                      nft={nft}
                      index={index}
                      type="Owned NFTs"
                      hide={true}
                      addMetaMask={true}
                      ADD_NFT_METAMASK={ADD_NFT_METAMASK}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-col items-start">
                  <h4 className="text-base sm:text-xl text-default font-semibold">
                    NFT Marketplaces
                  </h4>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-stretch gap-6 pb-4 overflow-x-auto hide-scrollbar px-4 sm:px-6 -mx-4 sm:-mx-6">
                  {nftMarketplace?.map((item, index) => (
                    <NFTMarketplace item={item} index={index} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NFTs;

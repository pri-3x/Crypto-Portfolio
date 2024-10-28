import React, { useState } from "react";

//INTERNAL IMPORT
import MobileTobBar from "../Reusable/MobileTobBar";
import DeskTopBar from "../Reusable/DeskTopBar";
import AllNFTs from "./AllNFTs";
import UploadNFTs from "./UploadNFTs";
import GenerateNFTs from "./GenerateNFTs";
import TransferNFT from "./TransferNFT";
import MintNFT from "./MintNFT";
import NFTsButton from "./NFTsButton";

import nfts from "../Data/NFTs.json";

const CreateNFTs = ({
  setOpenComponent,
  setOpenGeneratedFile,
  selectedTransferNFT,
  openTab,
  setOpenTab,
  setOpenSideBar,
}) => {
  const [mintNft, setMintNft] = useState();
  return (
    <div className="flex flex-col min-h-screen w-full overflow-y-auto relative">
      <MobileTobBar setOpenSideBar={setOpenSideBar} />
      <main className="flex-1 isolate">
        <div id="page-card" className="pb-10 md:mx-4 my-4 lg:mx-8 lg:my-0">
          <DeskTopBar
            component={"Create NFT"}
            setOpenComponent={setOpenComponent}
          />
          <div className="bg-alternative px-4 pb-10 sm:px-10 sm:pt-8 sm:pb-12 lg:px-4">
            <div className="flex bg-alternative -mx-4 sticky top-0 z-10 overflow-hidden md:border-b border-default md:-mx-14 md:px-8 lg:-mx-12 lg:px-8 overflow-x-auto hide-scrollbar">
              <NFTsButton
                openTab={openTab}
                name={"All NFTs"}
                handleClick={() => setOpenTab("All NFTs")}
              />
              <NFTsButton
                openTab={openTab}
                name={"Upload NFTs"}
                handleClick={() => setOpenTab("Upload NFTs")}
              />
              <NFTsButton
                openTab={openTab}
                name={"NFT Generator"}
                handleClick={() => setOpenTab("NFT Generator")}
              />
              <NFTsButton
                openTab={openTab}
                name={"Transfer NFT"}
                handleClick={() => setOpenTab("Transfer NFT")}
              />
              {mintNft && (
                <NFTsButton
                  openTab={openTab}
                  name={"Mint NFTs"}
                  handleClick={() => setOpenTab("Mint NFTs")}
                />
              )}
            </div>
            {openTab == "All NFTs" ? (
              <AllNFTs setMintNft={setMintNft} setOpenTab={setOpenTab} />
            ) : openTab == "Upload NFTs" ? (
              <UploadNFTs setOpenGeneratedFile={setOpenGeneratedFile} />
            ) : openTab == "NFT Generator" ? (
              <GenerateNFTs
                setOpenGeneratedFile={setOpenGeneratedFile}
                setOpenTab={setOpenTab}
              />
            ) : openTab == "Mint NFTs" ? (
              <MintNFT setMintNft={setMintNft} mintNft={mintNft} />
            ) : openTab == "Transfer NFT" ? (
              <TransferNFT selectedTransferNFT={selectedTransferNFT} />
            ) : (
              ""
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default CreateNFTs;

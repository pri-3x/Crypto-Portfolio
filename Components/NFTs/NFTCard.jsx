import React from "react";

import { NFTCard_1, NFTCard_2, UserModal_2 } from "../SVG/index";

import { SHORTEN_ADDRESS } from "../../Context/constants";

const NFTCard = ({
  nft,
  index,
  type,
  setMintNft,
  setOpenTab,
  hide,
  setOpenImageModal,
  addMetaMask,
  ADD_NFT_METAMASK,
}) => {
  return (
    <div className="relative flex flex-col justify-between bg-default h-full cursor-pointer hover:bg-hover hover:no-underline overflow-hidden rounded-xl p-4 border border-muted gap-2 flex-1 min-w-[212px] max-w-[212px]">
      <img
        onClick={() => hide && setOpenImageModal(nft)}
        className="object-cover rounded-xl w-full min-h-[71%]"
        src={nft.image}
        alt="Jayden Hills - How Does It Feel"
      />
      <div className="flex flex-col flex-1 gap-2">
        <p className="text-sm sm:text-base text-default font-semibold truncate pt-1">
          {nft.name}
        </p>
      </div>

      <div className="flex flex-row justify-between">
        <div className="flex flex-col w-full h-full">
          <div className="flex items-center gap-1">
            <NFTCard_1 />
            <p className="text-xs flex gap-2 sm:text-sm leading-5 font-normal text-alternative truncate">
              Created by {SHORTEN_ADDRESS(nft.creator)} <UserModal_2 />
            </p>
          </div>
          {type === "Created NFTs" && !hide && (
            <div className="flex flex-row items-center justify-between w-full pt-1">
              <p className="text-xs sm:text-sm leading-5 font-semibold text-alternative mr-auto truncate" />
              <button
                onClick={() => (setMintNft(nft), setOpenTab("Mint NFTs"))}
                className="cursor-pointer disabled:cursor-auto transition rounded-full border flex items-center justify-center text-center text-xs border-primary-default bg-primary-default text-primary-inverse hover:border-primary-default-hover hover:bg-primary-default-hover max-w-max py-2 px-4 mt-2, h-[30px] ml-auto"
                data-testid="details-btn-44922556-008a-4cf3-a968-73e8e55eea77"
              >
                <span>Mint Now</span>
                <span className="flex ml-2.5 items-center">
                  <NFTCard_2 />
                </span>
              </button>
            </div>
          )}
        </div>
      </div>
      {type === "Created NFTs" && (
        <div className="rounded-md px-2 py-0.5 bg-alternative text-alternative text-xs font-bold uppercase flex items-center absolute top-6 right-6">
          {nft.type}
        </div>
      )}
    </div>
  );
};

export default NFTCard;

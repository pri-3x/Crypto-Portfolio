import React, { useState, useEffect } from "react";

import {
  SideBar,
  MobileHeader,
  Dashboard,
  Swap,
  NFTs,
  Tokens,
  NavModal,
  MusicModal,
  ImageModal,
} from "../Components/index";
import CreateNFTs from "../Components/NFTs/CreateNFTs";
import NFTOverview from "../Components/NFTs/NFTOverview";
import CreateToken from "../Components/Tokens/CreateToken";
import TransferToken from "../Components/Tokens/TransferToken";
import TokenApprove from "../Components/Tokens/TokenApprove";
import AllowanceToken from "../Components/Tokens/AllowanceToken";
import TokenDetails from "../Components/Tokens/TokenDetails";
import AllTokenList from "../Components/Tokens/AllTokenList";
import Dapps from "../Components/Dapps/Dapps";
import Loader from "../Components/Reusable/Loader";

import { useStateContext } from "../Context/index";

const index = () => {
  const { loader, setLoader, address, HANDLE_UPLOAD } = useStateContext();

  const [openSideNav, setOpenSideNav] = useState(false);
  const [openComponent, setOpenComponent] = useState("Dashboard");
  const [addAccountModal, setAddAccountModal] = useState(false);
  const [openLocationModal, setOpenLocationModal] = useState(false);
  const [openCurrencyModal, setopenCurrencyModal] = useState(false);
  const [openTokenModal, setOpenTokenModal] = useState(false);
  const [openPayModal, setOpenPayModal] = useState(false);
  const [openImageModal, setOpenImageModal] = useState();
  const [openMusicModal, setOpenMusicModal] = useState(false);
  const [openGameModal, setOpenGameModal] = useState(false);
  const [openReceivedModal, setOpenReceivedModal] = useState(false);
  const [openCreateNFT, setOpenCreateNFT] = useState(false);
  const [openGeneratedFile, setOpenGeneratedFile] = useState();

  const [selectedTransferNFT, setSelectedTransferNFT] = useState();
  const [openTab, setOpenTab] = useState("All NFTs");
  const [openSideBar, setOpenSideBar] = useState(false);

  return (
    <div>
      <div>
        <div className="min-h-full bg-alternative flex relative max-h-screen">
          <SideBar
            setOpenComponent={setOpenComponent}
            setOpenSideNav={setOpenSideNav}
            openSideNav={openSideNav}
            openSideBar={openSideBar}
            setOpenSideBar={setOpenSideBar}
          />

          {openComponent == "Dashboard" ? (
            <Dashboard
              setOpenComponent={setOpenComponent}
              addAccountModal={addAccountModal}
              setAddAccountModal={setAddAccountModal}
              setOpenSideBar={setOpenSideBar}
            />
          ) : openComponent == "Swap" ? (
            <Swap
              setOpenComponent={setOpenComponent}
              setOpenSideBar={setOpenSideBar}
            />
          ) : openComponent == "NFTs" ? (
            <NFTs
              setOpenImageModal={setOpenImageModal}
              setOpenComponent={setOpenComponent}
              setOpenSideBar={setOpenSideBar}
            />
          ) : openComponent == "Tokens" ? (
            <Tokens
              setOpenComponent={setOpenComponent}
              setOpenSideBar={setOpenSideBar}
            />
          ) : openComponent == "Create NFTs" ? (
            <CreateNFTs
              setOpenComponent={setOpenComponent}
              setOpenGeneratedFile={setOpenGeneratedFile}
              selectedTransferNFT={selectedTransferNFT}
              openTab={openTab}
              setOpenTab={setOpenTab}
              setOpenSideBar={setOpenSideBar}
            />
          ) : openComponent == "Create Token" ? (
            <CreateToken
              setOpenComponent={setOpenComponent}
              setOpenSideBar={setOpenSideBar}
            />
          ) : openComponent == "Transfer Token" ? (
            <TransferToken
              setOpenComponent={setOpenComponent}
              setOpenSideBar={setOpenSideBar}
            />
          ) : openComponent == "Token Approve" ? (
            <TokenApprove
              setOpenComponent={setOpenComponent}
              setOpenSideBar={setOpenSideBar}
            />
          ) : openComponent == "Allowance" ? (
            <AllowanceToken
              setOpenComponent={setOpenComponent}
              setOpenSideBar={setOpenSideBar}
            />
          ) : openComponent == "Token Details" ? (
            <TokenDetails
              setOpenComponent={setOpenComponent}
              setOpenSideBar={setOpenSideBar}
            />
          ) : openComponent == "All Token List" ? (
            <AllTokenList
              setOpenComponent={setOpenComponent}
              setOpenSideBar={setOpenSideBar}
            />
          ) : openComponent == "Dapps" ? (
            <Dapps
              setOpenComponent={setOpenComponent}
              setOpenSideBar={setOpenSideBar}
            />
          ) : (
            ""
          )}
          {loader && <Loader />}

          {openImageModal && (
            <ImageModal
              setOpenImageModal={setOpenImageModal}
              openImageModal={openImageModal}
              setSelectedTransferNFT={setSelectedTransferNFT}
              setOpenTab={setOpenTab}
            />
          )}
          {openMusicModal && (
            <MusicModal setOpenMusicModal={setOpenMusicModal} />
          )}

          {openGeneratedFile && (
            <NFTOverview
              openGeneratedFile={openGeneratedFile}
              setOpenGeneratedFile={setOpenGeneratedFile}
              HANDLE_UPLOAD={HANDLE_UPLOAD}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default index;

import React, { useEffect, useState } from "react";
import { useAccount } from "wagmi";

import DeskTopBar from "../Reusable/DeskTopBar";
import MobileTobBar from "../Reusable/MobileTobBar";
import DashboardAccount from "../Dashboard/DashboardAccount";

import DashboardTabButton from "../Dashboard/DashboardTabButton";
import Transaction from "../Dashboard/Transaction";
import Analytics from "../Dashboard/Analytics";
import NFTs from "../Dashboard/NFTs";
import { SHORTEN_ADDRESS } from "../../Context/constants";

import {
  Dashboard_1,
  Dashboard_2,
  Dashboard_3,
  Dashboard_4,
  Dashboard_5,
  Dashboard_6,
  Dashboard_7,
  Dashboard_8,
  Dashboard_9,
} from "../SVG/index";
import { useStateContext } from "../../Context/index";

const Dashboard = ({
  setOpenComponent,
  addAccountModal,
  setAddAccountModal,
  setOpenSideBar,
}) => {
  const { CHECK_BALANCE } = useStateContext();
  const { address } = useAccount();

  const [openAccount, setOpenAccount] = useState(false);
  const [openNetwork, setOpenNetwork] = useState(false);
  const [activeTab, setActiveTab] = useState("Analytics");

  const [accountDetails, setAccountDetails] = useState();

  const LOCAT_DATA = async () => {
    if (address) {
      const data = await CHECK_BALANCE(address);

      setAccountDetails(data);
    }
  };

  useEffect(() => {
    LOCAT_DATA();
  }, [address]);
  return (
    <>
      <div className="flex flex-col min-h-screen w-full overflow-y-auto relative">
        <MobileTobBar setOpenSideBar={setOpenSideBar} />
        <main className="flex-1 isolate">
          <div className="flex flex-col h-screen overflow-hidden">
            <DeskTopBar
              component={"Dashboard"}
              setOpenComponent={setOpenComponent}
              addAccountModal={addAccountModal}
              setAddAccountModal={setAddAccountModal}
            />

            <div className="flex flex-1 overflow-hidden">
              <div className="flex-1 overflow-y-auto overflow-x-hidden hide-scrollbar">
                <div className="pb-10 md:mx-4 my-4 lg:mx-8 lg:my-0">
                  <div className="bg-alternative px-4 pb-10 sm:px-10 sm:pt-8 sm:pb-12 lg:px-4 md:-mx-8 md:-my-8 lg:-mx-6 lg:-my-4">
                    <div className="md:mb-8 my-6 md:my-0">
                      <div className="justify-between flex align-bottom">
                        <div className="w-full">
                          <div className="text-md text-alternative">
                            Portfolio value
                          </div>
                          <div className="flex text-2xl md:text-4xl font-semibold text-default space-x-2 leading-10 items-center">
                            <div className="sm:text-[48px] font-bold sm:font-medium">
                              <span>{accountDetails?.balance}</span>
                              <span className="text-alternative"> ETH</span>
                            </div>
                            <button className="bg-alternative hover:bg-alternative-hover p-2 rounded-lg md:h-10">
                              <Dashboard_5 />
                              <span className="sr-only">
                                Hide Monetary values
                              </span>
                            </button>
                          </div>
                          <div className="items-center text-left">
                            <p className="text-sm truncate text-error-default">
                              <span className="mr-2">Gas Price</span>
                              <span>({accountDetails?.gasPrice})</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-5 w-full">
                      <div className="flex bg-alternative -mx-4 top-0 z-10 overflow-hidden static space-x-3 border-b border-muted sm:-mx-6">
                        <DashboardTabButton
                          name={"Analytics"}
                          handleClick={() => setActiveTab("Analytics")}
                          activeTab={activeTab}
                        />
                        <DashboardTabButton
                          name={"NFTs"}
                          handleClick={() => setActiveTab("NFTs")}
                          activeTab={activeTab}
                        />

                        <DashboardTabButton
                          name={"Transactions"}
                          handleClick={() => setActiveTab("Transactions")}
                          activeTab={activeTab}
                        />
                      </div>
                      <div className="flex width-full justify-between mt-6">
                        {activeTab != "Analytics" && (
                          <>
                            <div className="flex flex-wrap gap-x-3 gap-y-6">
                              <div className="relative sm:inline-block text-left">
                                <div>
                                  <button
                                    onClick={() => setOpenAccount(!openAccount)}
                                    className="space-x-2 p-3.5 text-sm rounded-full inline-flex justify-center items-center bg-inherit hover:bg-primary-muted text-default hover:text-info border border-default transition-colors group group py-2.5 sm:h-[42px]"
                                  >
                                    <span className="flex -ml-1.5 -my-0.5 items-center">
                                      <div className="-space-x-1.5 hidden xl:flex">
                                        <div className="flex items-center justify-center rounded-full ring-4 ring-border-muted flex-shrink-0 group-hover:ring-primary-default h-5 w-5">
                                          <div
                                            className="paper"
                                            style={{
                                              borderRadius: 50,
                                              display: "inline-block",
                                              margin: 0,
                                              overflow: "hidden",
                                              padding: 0,
                                              backgroundColor:
                                                "rgb(247, 111, 1)",
                                              height: 20,
                                              width: 20,
                                            }}
                                          >
                                            <Dashboard_6 />
                                          </div>
                                        </div>
                                      </div>
                                    </span>
                                    <div className="flex items-center truncate flex-1">
                                      <span
                                        id="account-multi-name"
                                        className="truncate"
                                      >
                                        {SHORTEN_ADDRESS(address)}
                                      </span>
                                    </div>
                                    <div className="w-4 h-4 ml-2 flex items-center justify-end">
                                      <Dashboard_7 />
                                    </div>
                                  </button>
                                  {openAccount && (
                                    <DashboardAccount
                                      address={address}
                                      SHORTEN_ADDRESS={SHORTEN_ADDRESS}
                                    />
                                  )}
                                </div>
                              </div>
                            </div>
                            <div className="hidden md:flex justify-between">
                              <div className="flex space-x-3 items-center">
                                <a
                                  href="https://priyanshu-portfolio-beta.vercel.app/"
                                  target="_blank"
                                >
                                  <button className="cursor-pointer disabled:cursor-auto transition px-5 py-2 rounded-full border flex items-center justify-center text-center text-sm border-default bg-inherit hover:bg-hover text-alternative">
                                    <Dashboard_8 />
                                  </button>
                                </a>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                      <div className="mt-2">
                        {activeTab == "NFTs" ? (
                          <NFTs />
                        ) : activeTab == "Transactions" ? (
                          <Transaction />
                        ) : activeTab == "Analytics" ? (
                          <Analytics accountDetails={accountDetails} />
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Dashboard;

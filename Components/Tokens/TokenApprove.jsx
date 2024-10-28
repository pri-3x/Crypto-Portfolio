import React, { useState, useEffect } from "react";
import { useBalance, useAccount } from "wagmi";

import DeskTopBar from "../Reusable/DeskTopBar";
import MobileTobBar from "../Reusable/MobileTobBar";
import SwapNetwork from "../Modal/SwapNetwork";
import { TransferToken_1 } from "../SVG/index";
import { SHORTEN_ADDRESS } from "../../Context/constants";
import { useStateContext } from "../../Context/index";

const TokenApprove = ({ setOpenComponent, setOpenSideBar }) => {
  const { READT_TOKEN, APPROVE_TOKEN } = useStateContext();
  const { address } = useAccount();

  const [allToken, setAllToken] = useState();
  const [firstToken, setFirstToken] = useState();
  const [openTokenModal, setOpenTokenModal] = useState(false);

  const [token, setToken] = useState();
  const [approve, setApprove] = useState({
    spender: "",
    amount: "",
  });

  useEffect(() => {
    const LOAD_DATA = async () => {
      const allToken = await READT_TOKEN();
      setAllToken(allToken);
      setFirstToken(allToken[0]);
      setToken(allToken[0]);
    };

    LOAD_DATA();
  }, []);
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
        <div className="pb-10 md:mx-4 my-4 lg:mx-8 lg:my-0">
          <div className="bg-alternative px-4 pb-10 sm:px-10 sm:pt-8 sm:pb-12 lg:px-4">
            <div className="justify-center flex py-2 sm:py-3">
              <div className="!bg-inherit md:!bg-default w-full rounded-2xl sm:max-w-md py-4 sm:px-3 md:px-8 sm:py-8">
                <div className="pb-6">
                  <div className="relative text-left w-full">
                    <button
                      onClick={() =>
                        openTokenModal
                          ? setOpenTokenModal(false)
                          : setOpenTokenModal(true)
                      }
                      className="space-x-2 p-3.5 text-sm rounded-full inline-flex justify-center items-center bg-inherit hover:bg-primary-muted text-default hover:text-info border border-default transition-colors group w-full"
                    >
                      <span className="flex -ml-1.5 -my-0.5 items-center">
                        <img
                          className="inline-block h-6 w-6 rounded-full"
                          src={firstToken?.logo || "theblockchaincoders.png"}
                          alt={firstToken?.name}
                        />
                      </span>
                      <div className="flex items-center truncate flex-1">
                        {firstToken?.name} &nbsp; Balance: &nbsp;
                        {firstToken?.balance} &nbsp;{firstToken?.symbol}
                      </div>
                      <div className="w-4 h-4 ml-2 flex items-center justify-end">
                        <TransferToken_1 />
                      </div>
                    </button>
                    {openTokenModal && (
                      <SwapNetwork
                        allToken={allToken}
                        setFirstToken={setFirstToken}
                        setOpenTokenModal={setOpenTokenModal}
                        setToken={setToken}
                      />
                    )}
                  </div>
                </div>

                <div className="space-y-3 mt-5">
                  <div className="flex justify-between items-end">
                    <div className="font-bold text-left text-default">
                      Approve Address
                    </div>
                  </div>
                  <div>
                    <div className="relative mt-1">
                      <div className="flex relative h-16">
                        <div className="flex flex-1 text-left items-center relative">
                          <input
                            onChange={(e) =>
                              setApprove({
                                ...approve,
                                spender: e.target.value,
                              })
                            }
                            className="rounded-lg pl-6 py-2 w-full h-full rounded-r-lg border border-muted text-lg bg-default cursor-default text-default focus:ring-1 focus:ring-primary-default"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mt-5">
                  <div className="flex justify-between items-end">
                    <div className="font-bold text-left text-default">
                      Amount
                    </div>
                  </div>
                  <div>
                    <div className="relative mt-1">
                      <div className="flex relative h-16">
                        <div className="flex flex-1 text-left items-center relative">
                          <input
                            onChange={(e) =>
                              setApprove({
                                ...approve,
                                amount: e.target.value,
                              })
                            }
                            className="rounded-lg pl-6 py-2 w-full h-full rounded-r-lg border border-muted text-lg bg-default cursor-default text-default focus:ring-1 focus:ring-primary-default"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="justify-center text-center w-full mt-10">
                  <button
                    onClick={() => APPROVE_TOKEN(token, approve)}
                    className=" transition px-5 py-2 rounded-full border flex items-center justify-center text-center w-full text-sm  opacity-100 border-primary-default bg-primary-default text-primary-inverse"
                  >
                    <span>Approve Token</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TokenApprove;

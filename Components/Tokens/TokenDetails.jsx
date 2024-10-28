import React, { useState, useEffect } from "react";
import { useBalance, useAccount } from "wagmi";
import toast from "react-hot-toast";

import DeskTopBar from "../Reusable/DeskTopBar";
import MobileTobBar from "../Reusable/MobileTobBar";
import { SHORTEN_ADDRESS, Notify } from "../../Context/constants";
import { useStateContext } from "../../Context/index";
import { useEthersProvider, useEthersSigner } from "../../provider/hooks";

const TokenDetails = ({ setOpenComponent, setOpenSideBar }) => {
  const { READT_TOKEN, GET_ERC20 } = useStateContext();
  const { address } = useAccount();
  const provider = useEthersProvider();
  const notifySuccess = (msg) => toast.success(msg, { duration: 2000 });

  const [tokenDetails, setTokenDetails] = useState();

  const [token, setToken] = useState();

  useEffect(() => {
    if (token) {
      const LOAD_DATA = async (token) => {
        const tokenDetails = await GET_ERC20(token);
        if (tokenDetails == undefined) {
          console.log("Loading token");
        } else {
          setTokenDetails(tokenDetails);
        }
      };

      LOAD_DATA(token);
    }
  }, [token]);

  const ADD_TOKEN = async (tokenDetails) => {
    const today = Date.now();
    let date = new Date(today);
    const _tokenCreatedData = date.toLocaleDateString("en-US");

    const network = await provider.getNetwork();

    const _token = {
      account: address,
      supply: tokenDetails.supply,
      name: tokenDetails.name,
      symbol: tokenDetails.symbol,
      tokenAddress: tokenDetails.address,
      transactionHash: "User Added Token",
      createdAt: _tokenCreatedData,
      chainID: network.chainId,
    };

    let tokenHistory = [];

    const history = localStorage.getItem("TOKEN_HISTORY");
    if (history) {
      tokenHistory = JSON.parse(localStorage.getItem("TOKEN_HISTORY"));
      tokenHistory.push(_token);
      localStorage.setItem("TOKEN_HISTORY", JSON.stringify(tokenHistory));
    } else {
      tokenHistory.push(_token);
      localStorage.setItem("TOKEN_HISTORY", JSON.stringify(tokenHistory));
    }
    Notify(`${tokenDetails.symbol} token added successfully`);
    notifySuccess("Token added successfully");
  };
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
                <div className="space-y-3 mt-5">
                  <div className="flex justify-between items-end">
                    <div className="font-bold text-left text-default">
                      Token Address
                    </div>
                  </div>
                  <div>
                    <div className="relative mt-1">
                      <div className="flex relative h-16">
                        <div className="flex flex-1 text-left items-center relative">
                          <input
                            onChange={(e) => setToken(e.target.value)}
                            className="rounded-lg pl-6 py-2 w-full h-full rounded-r-lg border border-muted text-lg bg-default cursor-default text-default focus:ring-1 focus:ring-primary-default"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {token && (
                  <>
                    <div className="space-y-3 mt-5">
                      <div>
                        <div className="relative mt-1">
                          <div className="flex relative h-16">
                            <div className="flex flex-1 text-left items-center relative">
                              <input
                                value={`Name: ${tokenDetails?.name}`}
                                desible
                                className="rounded-lg pl-6 py-2 w-full h-full rounded-r-lg border border-muted text-lg bg-default cursor-default text-default focus:ring-1 focus:ring-primary-default"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3 mt-5">
                      <div>
                        <div className="relative mt-1">
                          <div className="flex relative h-16">
                            <div className="flex flex-1 text-left items-center relative">
                              <input
                                value={`Symbol: ${tokenDetails?.symbol}`}
                                desible
                                className="rounded-lg pl-6 py-2 w-full h-full rounded-r-lg border border-muted text-lg bg-default cursor-default text-default focus:ring-1 focus:ring-primary-default"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3 mt-5">
                      <div>
                        <div className="relative mt-1">
                          <div className="flex relative h-16">
                            <div className="flex flex-1 text-left items-center relative">
                              <input
                                value={`Supply: ${tokenDetails?.supply}`}
                                desible
                                className="rounded-lg pl-6 py-2 w-full h-full rounded-r-lg border border-muted text-lg bg-default cursor-default text-default focus:ring-1 focus:ring-primary-default"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3 mt-5">
                      <div>
                        <div className="relative mt-1">
                          <div className="flex relative h-16">
                            <div className="flex flex-1 text-left items-center relative">
                              <input
                                value={`Balance: ${tokenDetails?.balance}`}
                                desible
                                className="rounded-lg pl-6 py-2 w-full h-full rounded-r-lg border border-muted text-lg bg-default cursor-default text-default focus:ring-1 focus:ring-primary-default"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="justify-center text-center w-full mt-10">
                      <button
                        onClick={() => ADD_TOKEN(tokenDetails)}
                        className=" transition px-5 py-2 rounded-full border flex items-center justify-center text-center w-full text-sm  opacity-100 border-primary-default bg-primary-default text-primary-inverse"
                      >
                        <span>Add Token</span>
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TokenDetails;

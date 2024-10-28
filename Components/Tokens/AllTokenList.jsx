import React, { useState, useEffect } from "react";

import DeskTopBar from "../Reusable/DeskTopBar";
import MobileTobBar from "../Reusable/MobileTobBar";
import { SHORTEN_ADDRESS, copyText } from "../../Context/constants";
import { AllTokenList_1, GenerateNFTs_6 } from "../SVG/index";
import { useEthersProvider, useEthersSigner } from "../../provider/hooks";

const AllTokenList = ({ setOpenComponent, setOpenSideBar }) => {
  const provider = useEthersProvider();

  const [allToken, setAllToken] = useState();
  useEffect(() => {
    const load = async () => {
      const allToken = JSON.parse(localStorage.getItem("TOKEN_HISTORY"));
      if (!allToken || allToken.length === 0) return [];

      const networkID = await provider._network.chainId;

      const filteredTokens = allToken.filter(
        (token) => token.chainID === networkID
      );
      if (filteredTokens.length === 0) return [];
      setAllToken(filteredTokens);
    };
    load();
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
        <div className="flex flex-col gap-y-6 m-4 sm:m-6">
          <div className="flex flex-col">
            <div className="mt-4">
              <div className="flex flex-col -mx-4 sm:-mx-6 sm:min-h-[420px]">
                {!allToken?.length ? (
                  <div className="flex w-full rounded-lg justify-center items-center text-center flex-col px-8 h-48 md:h-60 md:bg-default mt-6">
                    <GenerateNFTs_6 />
                    <p className="text-sm sm:text-base font-normal text-alternative">
                      You don't have any tokens yet.
                    </p>
                  </div>
                ) : (
                  <div
                    style={{
                      overflowX: "scroll",
                    }}
                  >
                    <table className="w-full text-left">
                      <thead className="border-b border-muted sm:table-header-group">
                        <tr>
                          <th className="">
                            <div className="flex items-center">Logo</div>
                          </th>
                          <th className="">
                            <div className="flex items-center">Name</div>
                          </th>
                          <th className="">
                            <div className="flex items-center">Symbol</div>
                          </th>
                          <th className="">
                            <div className="flex items-center">Supply</div>
                          </th>
                          <th className="">
                            <div className="flex items-center">
                              Token Address
                            </div>
                          </th>
                          <th className="">
                            <div className="flex items-center">Creator</div>
                          </th>

                          <th className="">
                            <div className="flex items-center">Created At</div>
                          </th>
                          <th className="">
                            <div className="flex items-center">Hash</div>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="sm:divide-y divide-muted">
                        {allToken?.map((item, index) => (
                          <tr className="cursor-pointer hover:bg-alternative group">
                            <td className="text-right sm:text-left text-default">
                              <img
                                src={item?.logo || "theblockchaincoders.png"}
                                style={{
                                  width: "30px",
                                  height: "auto",
                                  borderRadius: "5px",
                                }}
                                alt=""
                              />
                            </td>
                            <td className="text-right sm:text-left text-default">
                              {item?.name}
                            </td>
                            <td className="text-right sm:text-left text-error-default">
                              {item?.symbol}
                            </td>
                            <td className="text-right sm:text-left text-success-default">
                              {item?.supply}
                            </td>
                            <td
                              onClick={() => copyText(item?.tokenAddress)}
                              className="text-right sm:text-left text-success-default"
                            >
                              <span className="flex items-center">
                                {SHORTEN_ADDRESS(item?.tokenAddress)}
                                <AllTokenList_1 />
                              </span>
                            </td>
                            <td
                              onClick={() => copyText(item?.account)}
                              className="text-right sm:text-left text-default"
                            >
                              {" "}
                              <span className="flex items-center">
                                {SHORTEN_ADDRESS(item?.account)}{" "}
                                <AllTokenList_1 />
                              </span>
                            </td>
                            <td className="text-right sm:text-left text-default">
                              {item?.createdAt}
                            </td>
                            <td
                              onClick={() => copyText(item?.account)}
                              className="text-right sm:text-left text-default"
                            >
                              <span className="flex items-center">
                                {SHORTEN_ADDRESS(item?.transactionHash)}{" "}
                                <AllTokenList_1 />
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AllTokenList;

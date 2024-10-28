import React from "react";
import { useChains } from "wagmi";

import {
  TransactionTable_1,
  TransactionTable_2,
  TransactionTable_3,
  TransactionTable_4,
  TransactionTable_5,
  TransactionTable_6,
  TransactionTable_7,
  TransactionTable_8,
  TransactionTable_9,
  TransactionTable_10,
} from "../SVG/index";
import { toEth, SHORTEN_ADDRESS, copyText } from "../../Context/constants";
import { useEthersProvider, useEthersSigner } from "../../provider/hooks";

const HOLESKY_EXPLORER_URL = process.env.NEXT_PUBLIC_HOLESKY_EXPLORER_URL;
const BASE_EXPLORER_URL = process.env.NEXT_PUBLIC_BASE_EXPLORER_URL;
const HOLESKY_LOGO = process.env.NEXT_PUBLIC_HOLESKY_LOGO;
const BASE_LOGO = process.env.NEXT_PUBLIC_BASE_LOGO;

const TransactionTable = ({ item, index }) => {
  const provider = useEthersProvider();

  let network;

  if (provider._network.chainId == 17000) {
    network = provider._network.chainId;
  } else if (provider._network.chainId == 84532) {
    network = provider._network.chainId;
  }

  console.log(item);

  return (
    <div
      key={index}
      className="py-4 -mx-4 sm:-mx-6 px-4 sm:px-6 hover:bg-hover cursor-pointer sm:border-b last:border-none border-muted"
    >
      <div className="flex items-center">
        <div className="relative hidden sm:block">
          <div className="rounded-full bg-alternative border border-muted flex w-8 h-8 items-center justify-center">
            <TransactionTable_1 />
          </div>
        </div>
        <div className="overflow-y-visible overflow-x-auto sm:overflow-x-visible whitespace-nowrap text-ellipsis md:flex flex-wrap flex-1 md:justify-between lg:grid grid-cols-12 gap-4 lg:gap-5 xl:gap-6 items-center sm:pl-4">
          <div className="flex items-center space-x-4 mb-1 sm:mb-0 col-span-4 2xl:col-span-3">
            <div className="text-default flex md:block mb-1 sm:mb-0">
              <div className="flex">
                <div className="flex xl:hidden items-center pr-2 -space-x-1 sm:space-x-0">
                  <div className="flex items-center justify-center rounded-full flex-shrink-0 ring-muted ring-2 hover:-translate-y-2 transition-transform">
                    <div
                      className="paper"
                      style={{
                        borderRadius: 50,
                        display: "inline-block",
                        margin: 0,
                        overflow: "hidden",
                        padding: 0,
                        backgroundColor: "rgb(247, 111, 1)",
                        height: 16,
                        width: 16,
                      }}
                    >
                      <TransactionTable_2 />
                    </div>
                  </div>
                  <img
                    className="block sm:hidden w-4 h-4 rounded-full object-cover ring-muted ring-2 hover:-translate-y-2 transition-transform"
                    src={
                      network == 17000
                        ? HOLESKY_LOGO
                        : network == 84532
                        ? BASE_LOGO
                        : ""
                    }
                    alt=""
                  />
                </div>
                <div className="font-semibold whitespace-nowrap shrink">
                  {item.blockNumber.toString()}
                  <span className="ml-1 font-normal text-alternative truncate hidden sm:inline-flex" />
                </div>
              </div>
              <div className="ml-4 sm:ml-0 text-alternative whitespace-nowrap">
                <div className="flex">Block Number</div>
              </div>
            </div>
            <div className="flex items-center text-icon-default space-x-1">
              <button
                onClick={() => copyText(item.blockNumber.toString())}
                className="p-1.5 rounded-lg items-center flex cursor-pointer w-fit hover:bg-hover"
              >
                <TransactionTable_3 />
                <div data-theme="dark" />
              </button>
            </div>
          </div>
          <div className="overflow-visible justify-start items-center 2xl:col-span-2 hidden 2xl:flex">
            <div className="relative">
              <div className="flex items-center space-x-3 bg-default rounded-full px-3 py-2 font-medium">
                <div>
                  <div className="flex items-center justify-center rounded-full flex-shrink-0">
                    <div
                      className="paper"
                      style={{
                        borderRadius: 50,
                        display: "inline-block",
                        margin: 0,
                        overflow: "hidden",
                        padding: 0,
                        backgroundColor: "rgb(247, 111, 1)",
                        height: 24,
                        width: 24,
                      }}
                    >
                      <TransactionTable_4 />
                    </div>
                  </div>
                </div>
                <div className="text-sm">{SHORTEN_ADDRESS(item?.to)}</div>
              </div>
            </div>
            <div
              style={{
                position: "fixed",
                top: 1,
                left: 1,
                width: 1,
                height: 0,
                padding: 0,
                margin: "-1px",
                overflow: "hidden",
                clip: "rect(0px, 0px, 0px, 0px)",
                whiteSpace: "nowrap",
                borderWidth: 0,
                display: "none",
              }}
            />
          </div>
          <div className="col-span-7 2xl:col-span-5 sm:flex-1 hidden lg:flex truncate">
            <div className="flex sm:flex-1 sm:justify-start items-center space-x-2 sm:space-x-4">
              <div className="group flex space-x-2 items-center justify-left">
                <div className="flex overflow-y-visible overflow-x-hidden sm:overflow-x-visible items-center space-x-3">
                  <div className="relative" id="network-icon-1-ETH">
                    <img
                      src={
                        network == 17000
                          ? HOLESKY_LOGO
                          : network == 84532
                          ? BASE_LOGO
                          : ""
                      }
                      className="w-8 h-8 rounded-full object-cover min-w-[2rem]"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <div>
                      <div className="flex items-center space-x-2 font-medium truncate xs:text-clip text-error-default">
                        <div>{toEth(item?.value)}</div>
                      </div>
                      <div className="text-sm text-alternative truncate max-w-[7rem] sm:max-w-[10rem]">
                        <span>ETH</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="invisible group-hover:visible overflow-visible">
                  <div className="absolute m-auto mb-0 -mt-3">
                    <div
                      id="tokens-more-menu"
                      className="relative sm:inline-block text-left"
                    >
                      <div>
                        <button className="inline-flex justify-center items-center w-6 h-6 text-icon-default transition-colors rounded-lg hover:bg-hover">
                          <TransactionTable_5 />
                          <div data-theme="dark" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-1 sm:mx-2 text-sm">
                <TransactionTable_6 />
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full flex-shrink-0">
                  <div
                    className="paper"
                    style={{
                      borderRadius: 50,
                      display: "inline-block",
                      margin: 0,
                      overflow: "hidden",
                      padding: 0,
                      backgroundColor: "rgb(247, 109, 1)",
                      height: 32,
                      width: 32,
                    }}
                  >
                    <TransactionTable_7 />
                  </div>
                </div>
                <span className="flex flex-col min-w-0">
                  <span className="text-default font-medium truncate">To</span>
                  <span className="text-alternative text-sm">
                    {SHORTEN_ADDRESS(item?.to)}
                  </span>
                </span>
                <div className="flex items-center text-icon-default space-x-1">
                  <button
                    onClick={() => copyText(item?.to)}
                    className="p-1.5 rounded-lg items-center flex cursor-pointer w-fit hover:bg-hover"
                  >
                    <TransactionTable_3 />
                    <div data-theme="dark" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden sm:flex items-center justify-end space-x-2 sm:space-x-4 col-span-1 2xl:col-span-2">
            <div className="text-icon-default hidden 2xl:block">
              <div className="flex items-center space-x-1">
                <div>0.001</div>
                <div>ETH</div>
                <div>
                  <TransactionTable_8 />
                </div>
              </div>
              <div>-</div>
            </div>
            <a
              href={
                network == 17000
                  ? `${HOLESKY_EXPLORER_URL}${item?.hash}`
                  : network == 84532
                  ? `${BASE_EXPLORER_URL}${item?.hash}`
                  : ""
              }
              target="_blank"
              className="text-icon-default hover:bg-hover p-2 rounded-full flex"
            >
              <TransactionTable_9 />
            </a>
          </div>
        </div>
        <div className="block sm:hidden">
          <a
            href={
              network == 17000
                ? `${HOLESKY_EXPLORER_URL}${item?.hash}`
                : network == 84532
                ? `${BASE_EXPLORER_URL}${item?.hash}`
                : ""
            }
            target="_blank"
            className="text-icon-default hover:bg-hover p-2 rounded-full flex"
          >
            <TransactionTable_10 />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TransactionTable;

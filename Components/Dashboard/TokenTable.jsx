import React from "react";

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
import SingleCard from "../Swap/SingleCard";

const TokenTable = ({ address }) => {
  return (
    <div className="flex flex-col gap-y-6 m-4 sm:m-6">
      <div className="flex flex-col">
        <div className="mt-4">
          <div className="flex flex-col -mx-4 sm:-mx-6 sm:min-h-[420px]">
            <div
              style={{
                overflowX: "scroll",
              }}
            >
              <table className="w-full text-left">
                <thead className="border-b border-muted hidden sm:table-header-group">
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
                      <div className="flex items-center">Token Address</div>
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
                  {/* {allToken?.map((item, index) => (
                    <tr
                      data-testid="token-row"
                      className="cursor-pointer hover:bg-alternative group"
                    >
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
                        {" "}
                        {item?.symbol}
                      </td>
                      <td className="text-right sm:text-left text-success-default">
                        {item?.supply}
                      </td>
                      <td
                        onClick={() =>
                          navigator.clipboard.writeText(item?.tokenAddress)
                        }
                        className="text-right sm:text-left text-success-default"
                      >
                        {SHORTEN_ADDRESS(item?.tokenAddress)}
                      </td>
                      <td className="text-right sm:text-left text-default">
                        {SHORTEN_ADDRESS(item?.account)}
                      </td>
                      <td className="text-right sm:text-left text-default">
                        {item?.createdAt}
                      </td>
                      <td className="text-right sm:text-left text-default">
                        {SHORTEN_ADDRESS(item?.transactionHash)}
                      </td>
                    </tr>
                  ))} */}
                  <SingleCard index={2} name={"BNB"} walletAddress={address} />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenTable;

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
import { SHORTEN_ADDRESS, copyText } from "../../Context/constants";

const NFTTable = ({ nfts }) => {
  return (
    <div className="flex flex-col gap-y-6 m-4 sm:m-6 ">
      <div className="flex flex-col">
        <div className="mt-4">
          <div className="flex flex-col -mx-4 sm:-mx-6 sm:min-h-[420px] overflow-x-auto hide-scrollbar">
            <div className="">
              <table className="w-full text-left">
                <thead className="border-b border-muted sm:table-header-group">
                  <tr>
                    <th className="">
                      <div className="flex items-center">Image</div>
                    </th>
                    <th className="">
                      <div className="flex items-center">Name</div>
                    </th>
                    <th className="">
                      <div className="flex items-center">Category</div>
                    </th>
                    <th className="">
                      <div className="flex items-center">Size</div>
                    </th>
                    <th className="">
                      <div className="flex items-center">Type</div>
                    </th>
                    <th className="">
                      <div className="flex items-center">TokenId</div>
                    </th>

                    <th className="">
                      <div className="flex items-center">Creator</div>
                    </th>
                  </tr>
                </thead>
                <tbody className="sm:divide-y divide-muted">
                  {nfts?.map((nft, index) => (
                    <tr className="cursor-pointer hover:bg-alternative group">
                      <td className="text-right sm:text-left text-default">
                        <img
                          src={nft?.image}
                          style={{
                            width: "30px",
                            height: "auto",
                            borderRadius: "5px",
                          }}
                          alt=""
                        />
                      </td>
                      <td className="text-right sm:text-left text-default">
                        {nft?.name}
                      </td>
                      <td className="text-right sm:text-left text-error-default">
                        {" "}
                        {nft?.category}
                      </td>
                      <td className="text-right sm:text-left text-success-default">
                        {nft?.size}
                      </td>
                      <td className="text-right sm:text-left text-success-default">
                        {nft?.type}
                      </td>
                      <td className="text-right sm:text-left text-default">
                        {nft?.tokenId.toString()}
                      </td>

                      <td className="text-right sm:text-left text-default">
                        {SHORTEN_ADDRESS(nft?.creator)}
                        <div className="flex items-center text-icon-default space-x-1"></div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTTable;

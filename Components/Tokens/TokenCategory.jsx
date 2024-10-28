import React from "react";

import { TokenTable_1, TokenTable_2 } from "../SVG/index";

const TokenTable = ({ categoryList }) => {
  console.log(categoryList);
  return (
    <div
      style={{
        overflowX: "scroll",
      }}
    >
      <table className="w-full text-left">
        <thead className="border-b border-muted sm:table-header-group">
          <tr>
            <th className="hidden sm:table-cell">
              <div className="flex items-center" />
            </th>
            <th className="sm:px-0 flex items-center">
              <div className="flex items-center">Token name</div>
              <div className="flex items-center text-default text-sm md:text-base">
                <span className="flex-wrap truncate" />
                <div
                  data-tooltip-id="explore-token-tooltip"
                  data-testid="explore-token-tooltip"
                  className="ml-1 cursor-pointer flex items-center"
                >
                  <TokenTable_1 />
                </div>
                <div data-theme="dark" />
              </div>
            </th>
            <th className="">
              <div className="flex items-center">Title</div>
            </th>
            <th className="">
              <div className="flex items-center">Description</div>
            </th>
            <th className="">
              <div className="flex items-center">No Tokens</div>
            </th>
            <th className="">
              <div className="flex items-center">Market Cap</div>
            </th>
            <th className="">
              <div className="flex items-center">Market Cap Change</div>
            </th>
            <th className="">
              <div className="flex items-center">Volume</div>
            </th>
            <th className="">
              <div className="flex items-center">Volume Change</div>
            </th>
            <th className="">
              <div className="flex items-center">Last Updated</div>
            </th>
            <th className="">
              <div className="flex items-center">Avg Price Change</div>
            </th>
            <th className="">
              <div className="flex items-center">Token ID</div>
            </th>
          </tr>
        </thead>
        <tbody className="sm:divide-y divide-muted">
          {categoryList?.cryptocurrency.map((item, index) => (
            <tr className="cursor-pointer hover:bg-alternative group">
              <td className="px-4 whitespace-nowrap hidden sm:table-cell">
                <div className="flex justify-center">
                  <button className="cursor-pointer items-center flex text-alternative rounded-lg p-1 bg-alternative hover:bg-alternative-hover !bg-transparent">
                    <TokenTable_2 />
                  </button>
                  <div data-theme="dark" />
                </div>
              </td>
              <td className="text-right sm:text-left text-default">
                {item?.name}
              </td>
              <td className="text-right sm:text-left text-error-default">
                {" "}
                {item?.title}
              </td>
              <td className="text-right sm:text-left text-success-default">
                {item?.description}
              </td>
              <td className="text-right sm:text-left text-success-default">
                {item?.num_tokens}
              </td>
              <td className="text-right sm:text-left text-default">
                {item?.market_cap}
              </td>
              <td className="text-right sm:text-left text-default">
                {item?.market_cap_change}
              </td>
              <td className="text-right sm:text-left text-default">
                {item?.volume}
              </td>
              <td className="text-right sm:text-left text-default">
                {item?.volume_change}
              </td>
              <td className="text-right sm:text-left text-default">
                {item?.last_updated}
              </td>
              <td className="text-right sm:text-left text-default">
                {item?.avg_price_change}
              </td>
              <td className="text-right sm:text-left text-default">
                {item?.id}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TokenTable;

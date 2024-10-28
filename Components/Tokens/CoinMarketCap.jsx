import React from "react";

import { CoinMarketCap_1 } from "../SVG/index";

const CoinMarketCap = ({ coinMarketCapMap }) => {
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

            <th className="">
              <div className="flex items-center">Name</div>
            </th>
            <th className="">
              <div className="flex items-center">Slug</div>
            </th>
            <th className="">
              <div className="flex items-center">Symbol</div>
            </th>
            <th className="">
              <div className="flex items-center">Rank</div>
            </th>
            <th className="">
              <div className="flex items-center">Last Historical Data</div>
            </th>
            <th className="">
              <div className="flex items-center">Active</div>
            </th>
            <th className="">
              <div className="flex items-center">Currency ID</div>
            </th>
            <th className="">
              <div className="flex items-center">First Historical Data</div>
            </th>
          </tr>
        </thead>
        <tbody className="sm:divide-y divide-muted">
          {coinMarketCapMap?.CoinMarketCap.map((item, index) => (
            <tr className="cursor-pointer hover:bg-alternative group">
              <td className="px-4 whitespace-nowrap hidden sm:table-cell">
                <div className="flex justify-center">
                  <button className="cursor-pointer items-center flex text-alternative rounded-lg p-1 bg-alternative hover:bg-alternative-hover !bg-transparent">
                    <CoinMarketCap_1 />
                  </button>
                  <div data-theme="dark" />
                </div>
              </td>
              <td className="text-right sm:text-left text-default">
                {item?.name}
              </td>
              <td className="text-right sm:text-left text-error-default">
                {" "}
                {item?.slug}
              </td>
              <td className="text-right sm:text-left text-success-default">
                {item?.symbol}
              </td>
              <td className="text-right sm:text-left text-success-default">
                {item?.rank}
              </td>
              <td className="text-right sm:text-left text-default">
                {item?.last_historical_data}
              </td>
              <td className="text-right sm:text-left text-default">
                {item?.is_active == 1 ? "Yes" : "No"}
              </td>
              <td className="text-right sm:text-left text-default">
                #{item?.id}
              </td>
              <td className="text-right sm:text-left text-default">
                {item?.first_historical_data}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoinMarketCap;

import React from "react";

import { TokenSingleCategory_1 } from "../SVG/index";

const TokenSingleCategory = ({ singleCategory }) => {
  return (
    <div
      style={{
        overflowX: "scroll",
      }}
    >
      <table className="w-full text-left">
        <thead className="border-b border-muted hidden sm:table-header-group">
          <tr>
            <th className="hidden sm:table-cell">
              <div className="flex items-center" />
            </th>
            <th className="sm:px-0 flex items-center">
              <div className="flex items-center">Name</div>
              <div className="flex items-center text-default text-sm md:text-base">
                <span className="flex-wrap truncate" />
                <div className="ml-1 cursor-pointer flex items-center">
                  <TokenSingleCategory_1 />
                </div>
                <div data-theme="dark" />
              </div>
            </th>
            <th className="">
              <div className="flex items-center">Slug</div>
            </th>
            <th className="">
              <div className="flex items-center">Symbol</div>
            </th>
            <th className="">
              <div className="flex items-center">Total Supply</div>
            </th>
            <th className="">
              <div className="flex items-center">Circulating Supply</div>
            </th>
            <th className="">
              <div className="flex items-center">Cmc Rank</div>
            </th>
            <th className="">
              <div className="flex items-center">Date Added</div>
            </th>
            <th className="">
              <div className="flex items-center">Coin ID</div>
            </th>
            <th className="">
              <div className="flex items-center">Infinite Supply</div>
            </th>
            <th className="">
              <div className="flex items-center">Active</div>
            </th>
            <th className="">
              <div className="flex items-center">Fiat</div>
            </th>
            <th className="">
              <div className="flex items-center">Last Updated</div>
            </th>
            <th className="">
              <div className="flex items-center">Max Supply</div>
            </th>
            <th className="">
              <div className="flex items-center">Num Market Pairs</div>
            </th>
            <th className="">
              <div className="flex items-center">USD Diluted Market Cap</div>
            </th>
            <th className="">
              <div className="flex items-center">USD Last updated</div>
            </th>
            <th className="">
              <div className="flex items-center">USD Market cap</div>
            </th>
            <th className="">
              <div className="flex items-center">USD Market Dominance</div>
            </th>
            <th className="">
              <div className="flex items-center">USD Percent Change 1h</div>
            </th>
            <th className="">
              <div className="flex items-center">USD Percent Change 7d</div>
            </th>
            <th className="">
              <div className="flex items-center">USD Percent Change 24h</div>
            </th>
            <th className="">
              <div className="flex items-center">USD Percent Change 30d</div>
            </th>
            <th className="">
              <div className="flex items-center">USD Percent Change 60d</div>
            </th>
            <th className="">
              <div className="flex items-center">USD Percent Change 90d</div>
            </th>
            <th className="">
              <div className="flex items-center">USD Price</div>
            </th>
            <th className="">
              <div className="flex items-center">USD Volume 24h</div>
            </th>
            <th className="">
              <div className="flex items-center">USD Volume Change 24h</div>
            </th>
          </tr>
        </thead>
        <tbody className="sm:divide-y divide-muted">
          {singleCategory?.category.coins.map((item, index) => (
            <tr
              data-testid="token-row"
              className="cursor-pointer hover:bg-alternative group"
            >
              <td className="px-4 whitespace-nowrap hidden sm:table-cell">
                <div className="flex justify-center">
                  <button
                    id="watchlist-star-1-0xb9f599ce614feb2e1bbe58f180f370d05b39344e"
                    data-tooltip-id="star-1-0xb9f599ce614feb2e1bbe58f180f370d05b39344e"
                    className="cursor-pointer items-center flex text-alternative rounded-lg p-1 bg-alternative hover:bg-alternative-hover !bg-transparent"
                    aria-label="Add to watch list"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition w-5 h-5 text-alternative"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
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
                {item?.total_supply}
              </td>
              <td className="text-right sm:text-left text-default">
                {item?.circulating_supply}
              </td>
              <td className="text-right sm:text-left text-default">
                {item?.cmc_rank}
              </td>
              <td className="text-right sm:text-left text-default">
                {item?.date_added}
              </td>
              <td className="text-right sm:text-left text-default">
                {item?.id}
              </td>
              <td className="text-right sm:text-left text-default">
                {item?.infinite_supply ? "Yes" : "No"}
              </td>
              <td className="text-right sm:text-left text-default">
                {item?.is_active}
              </td>
              <td className="text-right sm:text-left text-default">
                {item?.is_fiat}
              </td>
              <td className="text-right sm:text-left text-default">
                {item?.last_updated}
              </td>
              <td className="text-right sm:text-left text-default">
                {item?.max_supply}
              </td>
              <td className="text-right sm:text-left text-default">
                {item?.num_market_pairs}
              </td>
              <td className="text-right sm:text-left text-default">
                {item?.quote.USD.fully_diluted_market_cap}
              </td>
              <td className="text-right sm:text-left text-default">
                {item?.quote.USD.last_updated}
              </td>
              <td className="text-right sm:text-left text-default">
                {item?.quote.USD.market_cap}
              </td>
              <td className="text-right sm:text-left text-default">
                {item?.quote.USD.market_cap_dominance}
              </td>
              <td className="text-right sm:text-left text-default">
                {item?.quote.USD.percent_change_1h}
              </td>
              <td className="text-right sm:text-left text-default">
                {item?.quote.USD.percent_change_7d}
              </td>
              <td className="text-right sm:text-left text-default">
                {item?.quote.USD.percent_change_24h}
              </td>
              <td className="text-right sm:text-left text-default">
                {item?.quote.USD.percent_change_30d}
              </td>
              <td className="text-right sm:text-left text-default">
                {item?.quote.USD.percent_change_60d}
              </td>
              <td className="text-right sm:text-left text-default">
                {item?.quote.USD.percent_change_90d}
              </td>
              <td className="text-right sm:text-left text-default">
                {item?.quote.USD.price}
              </td>
              <td className="text-right sm:text-left text-default">
                {item?.quote.USD.volume_24h}
              </td>
              <td className="text-right sm:text-left text-default">
                {item?.quote.USD.volume_change_24h}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TokenSingleCategory;

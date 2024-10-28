import React from "react";

import { DeskTopBar_6, ListingLatest_1 } from "../SVG/index";

const ListingLatest = ({ listingLatest, setActiveTab, setCurrencyID }) => {
  return (
    <div
      style={{
        overflowX: "scroll",
      }}
    >
      <table className="w-full text-left">
        <thead className="border-b border-muted  sm:table-header-group">
          <tr>
            <th className="hidden sm:table-cell">
              <div className="flex items-center" />
            </th>
            <th className="sm:px-0 flex items-center">
              <div className="flex items-center">Token name</div>
              <div className="flex items-center text-default text-sm md:text-base">
                <span className="flex-wrap truncate" />
                <div className="ml-1 cursor-pointer flex items-center">
                  <ListingLatest_1 />
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
          {listingLatest?.cryptocurrency.map((item, index) => (
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
                <a
                  onClick={() => (
                    setCurrencyID(item?.id), setActiveTab(item?.id)
                  )}
                  className="cursor-pointer disabled:cursor-auto transition px-5 py-2 rounded-full border flex items-center justify-center text-center text-xs border-default bg-inherit hover:bg-hover text-alternative"
                >
                  <span>View</span>
                  <span className="flex ml-2.5 items-center">
                    <DeskTopBar_6 />
                  </span>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListingLatest;

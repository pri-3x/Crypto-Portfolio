import React from "react";

const ExchangeAssets = ({ exchangeAssets }) => {
  return (
    <div
      style={{
        overflowX: "scroll",
      }}
    >
      <table className="w-full text-left">
        <thead className="border-b border-muted  sm:table-header-group">
          <tr>
            <th className="">
              <div className="flex items-center">Address</div>
            </th>
            <th className="">
              <div className="flex items-center">Balance</div>
            </th>
            <th className="">
              <div className="flex items-center">Crypto Id</div>
            </th>
            <th className="">
              <div className="flex items-center">Name</div>
            </th>
            <th className="">
              <div className="flex items-center">Price USD</div>
            </th>
            <th className="">
              <div className="flex items-center">Symbol</div>
            </th>
          </tr>
        </thead>
        <tbody className="sm:divide-y divide-muted">
          {exchangeAssets?.assets.map((item, index) => (
            <tr
              data-testid="token-row"
              className="cursor-pointer hover:bg-alternative group"
            >
              <td className="text-right sm:text-left text-default">
                {item?.wallet_address}
              </td>
              <td className="text-right sm:text-left text-error-default">
                {" "}
                {item?.balance}
              </td>
              <td className="text-right sm:text-left text-success-default">
                {item?.currency.crypto_id}
              </td>
              <td className="text-right sm:text-left text-success-default">
                {item?.currency.name}
              </td>
              <td className="text-right sm:text-left text-default">
                {item?.currency.price_usd}
              </td>
              <td className="text-right sm:text-left text-default">
                {item?.currency.symbol}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExchangeAssets;

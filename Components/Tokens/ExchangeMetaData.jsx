import React from "react";

const ExchangeMetaData = ({ exchangeMetadata }) => {
  const data = exchangeMetadata?.metadata;

  console.log(data);
  return (
    <div
      style={{
        overflowX: "scroll",
      }}
    >
      <table className="w-full text-left">
        <thead className="border-b border-muted sm:table-header-group">
          <tr>
            <th className="">
              <div className="flex items-center">Name</div>
            </th>
            <th className="">
              <div className="flex items-center">Slug</div>
            </th>
            <th className="">
              <div className="flex items-center">Taker Fee</div>
            </th>
            <th className="">
              <div className="flex items-center">Weekly Visits</div>
            </th>
            <th className="">
              <div className="flex items-center">Maker fee</div>
            </th>
            <th className="">
              <div className="flex items-center">Spot Volume USD</div>
            </th>
          </tr>
        </thead>
        <tbody className="sm:divide-y divide-muted">
          <tr
            data-testid="token-row"
            className="cursor-pointer hover:bg-alternative group"
          >
            <td className="text-right sm:text-left text-default">
              {data?.[270].name}
            </td>
            <td className="text-right sm:text-left text-error-default">
              {" "}
              {data?.[270].slug}
            </td>
            <td className="text-right sm:text-left text-success-default">
              {data?.[270].taker_fee}
            </td>
            <td className="text-right sm:text-left text-success-default">
              {data?.[270].weekly_visits}
            </td>
            <td className="text-right sm:text-left text-default">
              {data?.[270].maker_fee}
            </td>
            <td className="text-right sm:text-left text-default">
              {data?.[270].spot_volume_usd}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ExchangeMetaData;

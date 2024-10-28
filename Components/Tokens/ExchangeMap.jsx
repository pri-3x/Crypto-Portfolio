import React from "react";

const ExchangeMap = ({ exchangeMap }) => {
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
              <div className="flex items-center">Name</div>
            </th>
            <th className="">
              <div className="flex items-center">Slug</div>
            </th>
            <th className="">
              <div className="flex items-center">First Historical Data</div>
            </th>
            <th className="">
              <div className="flex items-center">Last Historical Data</div>
            </th>
            <th className="">
              <div className="flex items-center">ID</div>
            </th>
            <th className="">
              <div className="flex items-center">Active</div>
            </th>
          </tr>
        </thead>
        <tbody className="sm:divide-y divide-muted">
          {exchangeMap?.metadata.map((item, index) => (
            <tr
              data-testid="token-row"
              className="cursor-pointer hover:bg-alternative group"
            >
              <td className="text-right sm:text-left text-default">
                {item?.name}
              </td>
              <td className="text-right sm:text-left text-error-default">
                {" "}
                {item?.slug}
              </td>
              <td className="text-right sm:text-left text-success-default">
                {item?.first_historical_data}
              </td>
              <td className="text-right sm:text-left text-success-default">
                {item?.last_historical_data}
              </td>
              <td className="text-right sm:text-left text-default">
                {item?.id}
              </td>
              <td className="text-right sm:text-left text-default">
                {item?.is_active == 1 ? "Yes" : "No"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExchangeMap;

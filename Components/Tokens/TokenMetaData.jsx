import React from "react";

const TokenMetaData = ({ metadatav2 }) => {
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
              <div className="flex items-center">Category</div>
            </th>
            <th className="">
              <div className="flex items-center">Date Added</div>
            </th>
            <th className="">
              <div className="flex items-center">Description</div>
            </th>
            <th className="">
              <div className="flex items-center">Currency ID</div>
            </th>
            <th className="">
              <div className="flex items-center">Infinite Supply</div>
            </th>
          </tr>
        </thead>
        <tbody className="sm:divide-y divide-muted">
          {metadatav2?.Metadata.ETH.map((item, index) => (
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
                {item?.symbol}
              </td>
              <td className="text-right sm:text-left text-success-default">
                {item?.category}
              </td>
              <td className="text-right sm:text-left text-default">
                {item?.date_added}
              </td>
              <td className="text-right sm:text-left text-default">
                {item?.description.slice(0, 25)}...
              </td>
              <td className="text-right sm:text-left text-default">
                #{item?.id}
              </td>
              <td className="text-right sm:text-left text-default">
                {item?.infinite_supply ? "Yes" : "No"}
              </td>
              <td className="text-right sm:text-left text-default">
                {item?.twitter_username}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TokenMetaData;

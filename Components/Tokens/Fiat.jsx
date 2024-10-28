import React from "react";

const Fiat = ({ fiat }) => {
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
              <div className="flex items-center">Sign</div>
            </th>
            <th className="">
              <div className="flex items-center">Symbol</div>
            </th>
            <th className="">
              <div className="flex items-center">Currency ID</div>
            </th>
          </tr>
        </thead>
        <tbody className="sm:divide-y divide-muted">
          {fiat?.fiat.map((item, index) => (
            <tr
              data-testid="token-row"
              className="cursor-pointer hover:bg-alternative group"
            >
              <td className="text-right sm:text-left text-default">
                {item?.name}
              </td>
              <td className="text-right sm:text-left text-error-default">
                {" "}
                {item?.sign}
              </td>
              <td className="text-right sm:text-left text-success-default">
                {item?.symbol}
              </td>
              <td className="text-right sm:text-left text-success-default">
                {item?.id}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Fiat;

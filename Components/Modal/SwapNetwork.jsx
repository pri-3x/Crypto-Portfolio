import React from "react";

const SwapNetwork = ({
  allToken,
  setFirstToken,
  setOpenTokenModal,
  setToken,
}) => {
  return (
    <div className="absolute flex flex-col py-1 mt-1 z-20 rounded-lg shadow-lg outline-none overflow-auto bg-default border border-muted left-0 w-full">
      {allToken?.map((item, index) => (
        <button
          onClick={() => (
            setFirstToken(item), setToken(item), setOpenTokenModal(false)
          )}
          className="text-default select-none relative mx-1 px-3 sm:px-4 rounded-lg hover:bg-hover group text-sm py-3"
        >
          <div className="flex items-center">
            <div className="font-normal truncate flex-1 mr-3 text-left flex items-center">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                  <img
                    src={item?.logo || "theblockchaincoders.png"}
                    className="rounded-full mr-2"
                    alt={item?.name}
                    style={{ height: 22, width: 22 }}
                  />
                  <span className="font-medium">
                    {" "}
                    {item?.name} &nbsp; Balance: &nbsp;
                    {item?.balance} &nbsp;{item?.symbol}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
};

export default SwapNetwork;

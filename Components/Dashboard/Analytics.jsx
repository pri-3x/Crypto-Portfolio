import React, { useEffect, useState } from "react";

import { Analytics_1, Analytics_2 } from "../SVG/index";
import { useEthersProvider, useEthersSigner } from "../../provider/hooks";

const Analytics = ({ accountDetails }) => {
  const [notifications, setNotifications] = useState();
  const [allToken, setAllToken] = useState();

  const provider = useEthersProvider();

  useEffect(() => {
    const notify = JSON.parse(localStorage.getItem("NOTIFICATIONS"));
    setNotifications(notify?.reverse());

    const load = async () => {
      const allToken = JSON.parse(localStorage.getItem("TOKEN_HISTORY"));
      if (!allToken || allToken.length === 0) return [];

      const networkID = await provider._network.chainId;

      const filteredTokens = allToken.filter(
        (token) => token.chainID === networkID
      );
      if (filteredTokens.length === 0) return [];
      setAllToken(filteredTokens);
    };
    load();
  }, []);
  return (
    <>
      <div className="flex gap-x-4 sm:gap-x-6 mt-8">
        <div className="py-5 px-4 sm:px-6 bg-default rounded-lg flex flex-col flex-1 gap-2">
          <div className="flex items-center gap-2">
            <Analytics_1 />
            <p className="text-sm sm:text-base font-normal text-alternative">
              Account Activity
            </p>
          </div>
          <p className="text-default font-bold text-[18px] sm:text-[32px]">
            {notifications?.length || "0"}
          </p>
        </div>
        <div className="py-5 px-4 sm:px-6 bg-default rounded-lg flex flex-col flex-1 gap-2">
          <div className="flex items-center gap-2">
            <Analytics_2 />
            <p className="text-sm sm:text-base font-normal text-alternative">
              Created Tokens
            </p>
          </div>
          <p className="font-bold text-[18px] sm:text-[32px] text-error-default">
            {allToken?.length || "0"}
          </p>
        </div>
      </div>
      <div className="flex gap-x-4 sm:gap-x-6 mt-8">
        <div className="py-5 px-4 sm:px-6 bg-default rounded-lg flex flex-col flex-1 gap-2">
          <div className="flex items-center gap-2">
            <Analytics_1 />
            <p className="text-sm sm:text-base font-normal text-alternative">
              Account Balance
            </p>
          </div>
          <p className="text-default font-bold text-[18px] sm:text-[32px]">
            {accountDetails?.balance} ETH
          </p>
        </div>
        <div className="py-5 px-4 sm:px-6 bg-default rounded-lg flex flex-col flex-1 gap-2">
          <div className="flex items-center gap-2">
            <Analytics_2 />
            <p className="text-sm sm:text-base font-normal text-alternative">
              Current Gas Price
            </p>
          </div>
          <p className="font-bold text-[18px] sm:text-[32px] text-error-default">
            {accountDetails?.gasPrice} ETH
          </p>
        </div>
      </div>
    </>
  );
};

export default Analytics;

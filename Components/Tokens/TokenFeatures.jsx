import React from "react";

import FeatureCard from "./FeatureCard";
import tokenMarketplace from "../Data/TokenMarketplace.json";

const TokenFeatures = () => {
  return (
    <div className="bg-default -mx-4 sm:-mx-6 pt-6 pb-4">
      <p className="text-sm sm:text-base font-normal text-primary-default pl-4 sm:pl-6">
        Featured
      </p>
      <div className="flex flex-col">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-col items-start">
            <h4 className="text-base sm:text-xl text-default pl-4 sm:pl-6 font-medium mt-2">
              Partnered tax providers
            </h4>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-sm sm:text-base font-normal text-alternative pl-4 sm:pl-6 -mt-4 mb-4">
            Connect your wallet and get 10% off your tax services when working
            with our recommended providers.
          </p>
          <div className="flex items-stretch gap-6 pb-4 overflow-x-auto px-4 sm:px-6 hide-scrollbar">
            {tokenMarketplace?.map((item, index) => (
              <FeatureCard item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
//
export default TokenFeatures;

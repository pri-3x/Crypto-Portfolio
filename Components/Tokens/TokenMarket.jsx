import React, { useState, useEffect } from "react";

import TokenCategory from "./TokenCategory";
import TokenSingleCategory from "./TokenSingleCategory";
import CoinMarketCap from "./CoinMarketCap";
import TokenMetaData from "./TokenMetaData";
import ExchangeAssets from "./ExchangeAssets";
import ExchangeMetaData from "./ExchangeMetaData";
import ExchangeMap from "./ExchangeMap";
import Fiat from "./Fiat";
import ListingLatest from "./ListingLatest";
import TokenTabButton from "./TokenTabButton";

import {
  CATEGORIES,
  SINGLE_CATEGORY,
  COIN_MARKET_CAP_ID_MAP,
  METADATA_v2,
  EXCHANGE_ASSETS,
  EXCHANGE_METADATA,
  EXCHANGE_MAP,
  FIAT,
  LISTING_LATEST,
} from "../../Context/api";

const TokenMarket = ({}) => {
  const [categoryList, setCategoryList] = useState();
  const [singleCategory, setSingleCategory] = useState();
  const [coinMarketCapMap, setCoinMarketCapMap] = useState();
  const [metadatav2, setMetadatav2] = useState();
  const [exchangeAssets, setExchangeAssets] = useState();
  const [exchangeMetadata, setExchangeMetadata] = useState();
  const [exchangeMap, setExchangeMap] = useState();
  const [fiat, setFiat] = useState();
  const [listingLatest, setListingLatest] = useState();

  const [activeTab, setActiveTab] = useState("Latest Listing");
  const [currencyID, setCurrencyID] = useState();

  const LOAKING_DATA = async () => {
    if (activeTab == "Latest Listing") {
      const latest = await LISTING_LATEST();
      setListingLatest(latest);
      console.log(latest);
    } else if (activeTab == "Categories") {
      const categories = await CATEGORIES();
      setCategoryList(categories);
    } else if (activeTab == "Coin Market Cap") {
      const marketCap = await COIN_MARKET_CAP_ID_MAP();
      setCoinMarketCapMap(marketCap);
    } else if (activeTab == "Metadata v2") {
      const metadatav2 = await METADATA_v2();
      setMetadatav2(metadatav2);
    } else if (activeTab == "Exchange Assets") {
      const exchangeAssets = await EXCHANGE_ASSETS();
      setExchangeAssets(exchangeAssets);
    } else if (activeTab == "Exchange MetaData") {
      const exchangeMetaData = await EXCHANGE_METADATA();
      setExchangeMetadata(exchangeMetaData);
    } else if (activeTab == "Exchange Map") {
      const exchangeMap = await EXCHANGE_MAP();
      setExchangeMap(exchangeMap);
    } else if (activeTab == "Fiat") {
      const fiat = await FIAT();
      setFiat(fiat);
    } else if (activeTab == currencyID) {
      const single = await SINGLE_CATEGORY(currencyID);
      setSingleCategory(single);
      console.log(single);
    }
  };

  useEffect(() => {
    LOAKING_DATA();
  }, [activeTab]);
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col items-start">
          <h4 className="text-base sm:text-xl text-default font-semibold">
            Market data
          </h4>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex flex-col -mx-4 sm:-mx-6 sm:min-h-[420px]">
          <div className="flex bg-alternative -mx-4 top-0 overflow-hidden sm:px-4 border-b border-muted !mx-0 sm:-mx-6 whitespace-nowrap z-1 static overflow-x-auto hide-scrollbar">
            <TokenTabButton
              name={"Latest Listing"}
              activeTab={activeTab}
              handleClick={() => setActiveTab("Latest Listing")}
            />
            <TokenTabButton
              name={"Categories"}
              activeTab={activeTab}
              handleClick={() => setActiveTab("Categories")}
            />
            <TokenTabButton
              name={"Coin Market Cap"}
              activeTab={activeTab}
              handleClick={() => setActiveTab("Coin Market Cap")}
            />
            <TokenTabButton
              name={"Metadata v2"}
              activeTab={activeTab}
              handleClick={() => setActiveTab("Metadata v2")}
            />
            <TokenTabButton
              name={"Exchange Assets"}
              activeTab={activeTab}
              handleClick={() => setActiveTab("Exchange Assets")}
            />
            <TokenTabButton
              name={"Exchange MetaData"}
              activeTab={activeTab}
              handleClick={() => setActiveTab("Exchange MetaData")}
            />
            <TokenTabButton
              name={"Exchange Map"}
              activeTab={activeTab}
              handleClick={() => setActiveTab("Exchange Map")}
            />
            <TokenTabButton
              name={"Fiat"}
              activeTab={activeTab}
              handleClick={() => setActiveTab("Fiat")}
            />
          </div>
          {activeTab == "Categories" ? (
            <TokenCategory categoryList={categoryList} />
          ) : activeTab == "Coin Market Cap" ? (
            <CoinMarketCap coinMarketCapMap={coinMarketCapMap} />
          ) : activeTab == "Metadata v2" ? (
            <TokenMetaData metadatav2={metadatav2} />
          ) : activeTab == "Exchange Assets" ? (
            <ExchangeAssets exchangeAssets={exchangeAssets} />
          ) : activeTab == "Exchange MetaData" ? (
            <ExchangeMetaData exchangeMetadata={exchangeMetadata} />
          ) : activeTab == "Exchange Map" ? (
            <ExchangeMap exchangeMap={exchangeMap} />
          ) : activeTab == "Fiat" ? (
            <Fiat fiat={fiat} />
          ) : activeTab == "Latest Listing" ? (
            <ListingLatest
              listingLatest={listingLatest}
              setActiveTab={setActiveTab}
              setCurrencyID={setCurrencyID}
            />
          ) : activeTab == currencyID ? (
            <TokenSingleCategory singleCategory={singleCategory} />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default TokenMarket;

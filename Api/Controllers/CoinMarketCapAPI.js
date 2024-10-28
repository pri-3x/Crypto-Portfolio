const axios = require("axios");

const COIN_MARKETCAP_API_KEY = process.env.COINMARKET_CAP_API_KEY;

const CATEGORIES = async (req, res, next) => {
  const { start = 1, limit = 100 } = req.query; // Pagination params
  try {
    const response = await axios({
      method: "GET",
      url: `https://pro-api.coinmarketcap.com/v1/cryptocurrency/categories?start=1&limit=50&CMC_PRO_API_KEY=${COIN_MARKETCAP_API_KEY}`,
    });

    if (response.status == 200) {
      res.status(200).json({ cryptocurrency: response.data.data });
    }
  } catch (error) {
    next(error);
  }
};
const SINGLE_CATEGORY = async (req, res, next) => {
  const { currencyID } = req.params;
  try {
    const response = await axios({
      method: "GET",
      url: `https://pro-api.coinmarketcap.com/v1/cryptocurrency/category?id=${currencyID}&CMC_PRO_API_KEY=${COIN_MARKETCAP_API_KEY}`,
    });

    if (response.status == 200) {
      res.status(200).json({ category: response.data.data });
    }
  } catch (error) {
    next(error);
  }
};

const COIN_MARKET_CAP_ID_MAP = async (req, res, next) => {
  const { start = 1, limit = 100 } = req.query; // Pagination params
  try {
    const response = await axios({
      method: "GET",
      url: `https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?start=1&limit=50&CMC_PRO_API_KEY=${COIN_MARKETCAP_API_KEY}`,
    });

    if (response.status == 200) {
      res.status(200).json({ CoinMarketCap: response.data.data });
    }
  } catch (error) {
    next(error);
  }
};
const METADATA_v2 = async (req, res, next) => {
  const { symbol } = req.params;
  try {
    const response = await axios({
      method: "GET",
      url: `https://pro-api.coinmarketcap.com/v2/cryptocurrency/info?symbol=${"ETH"}&CMC_PRO_API_KEY=${COIN_MARKETCAP_API_KEY}`,
    });

    if (response.status == 200) {
      res.status(200).json({ Metadata: response.data.data });
    }
  } catch (error) {
    next(error);
  }
};

const EXCHANGE_ASSETS = async (req, res, next) => {
  try {
    const response = await axios({
      method: "GET",
      url: `https://pro-api.coinmarketcap.com/v1/exchange/assets?id=270&CMC_PRO_API_KEY=${COIN_MARKETCAP_API_KEY}`,
    });

    if (response.status == 200) {
      res.status(200).json({ assets: response.data.data });
    }
  } catch (error) {
    next(error);
  }
};
const EXCHANGE_METADATA = async (req, res, next) => {
  try {
    const response = await axios({
      method: "GET",
      url: `https://pro-api.coinmarketcap.com/v1/exchange/info?id=270&CMC_PRO_API_KEY=${COIN_MARKETCAP_API_KEY}`,
    });

    if (response.status == 200) {
      res.status(200).json({ metadata: response.data.data });
    }
  } catch (error) {
    next(error);
  }
};
const EXCHANGE_MAP = async (req, res, next) => {
  try {
    const response = await axios({
      method: "GET",
      url: `https://pro-api.coinmarketcap.com/v1/exchange/map?start=1&limit=50&CMC_PRO_API_KEY=${COIN_MARKETCAP_API_KEY}`,
    });

    if (response.status == 200) {
      res.status(200).json({ metadata: response.data.data });
    }
  } catch (error) {
    next(error);
  }
};
const PRICE_CONVERSION = async (req, res, next) => {
  const { exchangeID, amount } = req.params;
  try {
    const response = await axios({
      method: "GET",
      url: `https://pro-api.coinmarketcap.com/v2/tools/price-conversion?id=${exchangeID}&amount=${amount}&CMC_PRO_API_KEY=${COIN_MARKETCAP_API_KEY}`,
    });

    if (response.status == 200) {
      res.status(200).json({ fiat: response.data.data });
    }
  } catch (error) {
    next(error);
  }
};
const FIAT = async (req, res, next) => {
  try {
    const response = await axios({
      method: "GET",
      url: `https://pro-api.coinmarketcap.com/v1/fiat/map?CMC_PRO_API_KEY=${COIN_MARKETCAP_API_KEY}`,
    });

    if (response.status == 200) {
      res.status(200).json({ fiat: response.data.data });
    }
  } catch (error) {
    next(error);
  }
};

const LISTING_LATEST = async (req, res, next) => {
  try {
    const response = await axios({
      method: "GET",
      url: `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${COIN_MARKETCAP_API_KEY}`,
    });

    if (response.status == 200) {
      res.status(200).json({ cryptocurrency: response.data.data });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  CATEGORIES,
  SINGLE_CATEGORY,
  COIN_MARKET_CAP_ID_MAP,
  METADATA_v2,
  EXCHANGE_ASSETS,
  EXCHANGE_METADATA,
  EXCHANGE_MAP,
  PRICE_CONVERSION,
  FIAT,
  LISTING_LATEST,
};

// https://coinmarketcap.com/api/documentation/v1/#operation/getV1ExchangeMap

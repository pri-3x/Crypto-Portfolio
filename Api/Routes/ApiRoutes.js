const express = require("express");
const {
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
} = require("../Controllers/CoinMarketCapAPI");
const { OPEN_AI } = require("../Controllers/OpenAI");

const router = express.Router();

//LISTING_LATEST
router.get("/categories", CATEGORIES);
router.get("/single-category/:currencyID", SINGLE_CATEGORY);
router.get("/coin-market-cap-map", COIN_MARKET_CAP_ID_MAP);
router.get("/metadata-v2", METADATA_v2);
router.get("/exchange-assets", EXCHANGE_ASSETS);
router.get("/exchange-metadata", EXCHANGE_METADATA);
router.get("/exchange-map", EXCHANGE_MAP);
router.get("/price-conversion", PRICE_CONVERSION);
router.get("/fiat", FIAT);
router.get("/latest", LISTING_LATEST);

//CREATE POST WITH IMAGES V3
router.post("/create-image", OPEN_AI);

module.exports = router;

import axios from "axios";

export const CATEGORIES = async () => {
  try {
    const response = await axios({
      method: "GET",
      url: `/api/cryptocurrency/categories`,
    });

    console.log(response);
    if (response.status == 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const SINGLE_CATEGORY = async (currencyID) => {
  try {
    const response = await axios({
      method: "GET",
      url: `/api/cryptocurrency/single-category/${currencyID}`,
    });

    console.log(response);
    if (response.status == 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const COIN_MARKET_CAP_ID_MAP = async () => {
  try {
    const response = await axios({
      method: "GET",
      url: `/api/cryptocurrency/coin-market-cap-map`,
    });

    console.log(response);
    if (response.status == 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const METADATA_v2 = async () => {
  try {
    const response = await axios({
      method: "GET",
      url: `/api/cryptocurrency/metadata-v2`,
    });

    console.log(response);
    if (response.status == 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const EXCHANGE_ASSETS = async () => {
  try {
    const response = await axios({
      method: "GET",
      url: `/api/cryptocurrency/exchange-assets`,
    });

    console.log(response);
    if (response.status == 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const EXCHANGE_METADATA = async () => {
  try {
    const response = await axios({
      method: "GET",
      url: `/api/cryptocurrency/exchange-metadata`,
    });

    console.log(response);
    if (response.status == 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const EXCHANGE_MAP = async () => {
  try {
    const response = await axios({
      method: "GET",
      url: `/api/cryptocurrency/exchange-map`,
    });

    console.log(response);
    if (response.status == 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const PRICE_CONVERSION = async () => {
  try {
    const response = await axios({
      method: "GET",
      url: `/api/cryptocurrency/price-conversion`,
    });

    console.log(response);
    if (response.status == 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const FIAT = async () => {
  try {
    const response = await axios({
      method: "GET",
      url: `/api/cryptocurrency/fiat`,
    });

    console.log(response);
    if (response.status == 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const LISTING_LATEST = async () => {
  try {
    const response = await axios({
      method: "GET",
      url: `/api/cryptocurrency/categories`,
    });

    console.log(response);
    if (response.status == 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};

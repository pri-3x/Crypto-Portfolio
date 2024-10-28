import OpenAI from "openai";
import { ethers } from "ethers";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";

import ERC20 from "./ERC20.json";
import NFTCreator from "./NFTCreator.json";
import TokenMarketplace from "./TokenMarketplace.json";

const notifySuccess = (msg) => toast.success(msg, { duration: 2000 });
const notifyError = (msg) => toast.error(msg, { duration: 2000 });

export const ERC20_ABI = ERC20.abi;
export const ERC20_BYTECODE = ERC20.bytecode;

export const NFT_CREATOR_ABI = NFTCreator.abi;
export const TOKEN_MARKETPLACE_ABI = TokenMarketplace.abi;

//HOLESKY_
export const HOLESKY_NFT_CREATOR_ADDRESS =
  process.env.NEXT_PUBLIC_HOLESKY_NFT_CREATOR;
export const HOLESKY_TOKEN_MARKETPLACE_ADDRESS =
  process.env.NEXT_PUBLIC_HOLESKY_TOKEN_MARKETPLACE;

//BASE
export const BASE_NFT_CREATOR_ADDRESS =
  process.env.NEXT_PUBLIC_BASE_NFT_CREATOR;
export const BASE_TOKEN_MARKETPLACE_ADDRESS =
  process.env.NEXT_PUBLIC_BASE_TOKEN_MARKETPLACE;

//PINATE API - SECRECT KEYS
const PINATA_API_KEY = process.env.NEXT_PUBLIC_PINATA_API_KEY;
const PINATA_SECRET_KEY = process.env.NEXT_PUBLIC_PINATA_SECRET_KEY;

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPEN_AI_KEY,
  dangerouslyAllowBrowser: true,
});

export const copyText = (text) => {
  navigator.clipboard.writeText(text);
  notifySuccess("Text copied successfully");
};

export const SHORTEN_ADDRESS = (address) =>
  `${address?.slice(0, 8)}...${address?.slice(address.length - 4)}`;

///AI V3
export const NFT_GENERATOR = async (promptV3) => {
  try {
    const { name, description, category } = promptV3;
    if (!description || !name || !category) {
      return "Data Missing";
    }
    const AIImage = await openai.images.generate({
      model: "dall-e-3",
      prompt: description,
      n: 1,
      size: "1024x1024",
      quality: "hd",
    });
    const imageUrl = AIImage.data[0].url;

    if (AIImage.data[0].url) {
      const response = await axios({
        method: "POST",
        url: `/api/cryptocurrency/create-image`,
        withCredentials: true,
        data: {
          name: name,
          description: description,
          category: category,
          imageURL: AIImage.data[0].url,
          imageID: uuidv4(),
        },
      });

      const IPFS_UPLOADED_NFT = {
        name: name,
        description: description,
        category: category,
        image: response.data.ipfsImageUrl,
        size: 12345,
        type: "AI Generated",
        creator: response.data.imageID,
        IPFS_URL: response.data._IPFS_URL,
      };

      let localStorageNFTs = [];

      const localNFTs = localStorage.getItem("IPFS_UPLOADED_NFT");
      if (localNFTs) {
        localStorageNFTs = JSON.parse(
          localStorage.getItem("IPFS_UPLOADED_NFT")
        );
        localStorageNFTs.push(IPFS_UPLOADED_NFT);
        localStorage.setItem(
          "IPFS_UPLOADED_NFT",
          JSON.stringify(localStorageNFTs)
        );
      } else {
        localStorageNFTs.push(IPFS_UPLOADED_NFT);
        localStorage.setItem(
          "IPFS_UPLOADED_NFT",
          JSON.stringify(localStorageNFTs)
        );
      }

      return response.data.ipfsImageUrl;
    }
  } catch (error) {
    console.log(error);
  }
};

//--IMAGE UPLOAD
export const UPLOAD_IPFS_IMAGE = async (file) => {
  if (file) {
    const formData = new FormData();
    formData.append("file", file);

    console.log(file);

    const response = await axios({
      method: "post",
      url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
      data: formData,
      headers: {
        pinata_api_key: PINATA_API_KEY,
        pinata_secret_api_key: PINATA_SECRET_KEY,
        "Content-Type": "multipart/form-data",
      },
    });
    const ImgHash = `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`;

    return ImgHash;
  }
};

//--METADAT UPLOAD
export const UPLOAD_METADATA = async (data) => {
  const response = await axios({
    method: "POST",
    url: "https://api.pinata.cloud/pinning/pinJSONToIPFS",
    data: data,
    headers: {
      pinata_api_key: PINATA_API_KEY,
      pinata_secret_api_key: PINATA_SECRET_KEY,
      "Content-Type": "application/json",
    },
  });

  const url = `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`;

  return url;
};

export const HANDLE_UPLOAD = async (openGeneratedFile, creator) => {
  const { name, description, size, type, base64, category, uploadType } =
    openGeneratedFile;
  if (base64) {
    const byteString = atob(base64.split(",")[1]);
    const mimeString = base64.split(",")[0].split(":")[1].split(";")[0];

    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);

    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    const fileBlob = new Blob([ab], { type: mimeString });
    const imgHash = await UPLOAD_IPFS_IMAGE(fileBlob);
    console.log(imgHash);

    const data = JSON.stringify({
      name: name,
      description: description,
      category: category,
      image: imgHash,
      size: size,
      type: uploadType,
      creator: creator,
    });

    const _IPFS_URL = await UPLOAD_METADATA(data);

    const IPFS_UPLOADED_NFT = {
      name: name,
      description: description,
      category: category,
      image: imgHash,
      size: size,
      type: uploadType,
      creator: creator,
      IPFS_URL: _IPFS_URL,
    };

    let localStorageNFTs = [];

    const localNFTs = localStorage.getItem("IPFS_UPLOADED_NFT");
    if (localNFTs) {
      localStorageNFTs = JSON.parse(localStorage.getItem("IPFS_UPLOADED_NFT"));
      localStorageNFTs.push(IPFS_UPLOADED_NFT);
      localStorage.setItem(
        "IPFS_UPLOADED_NFT",
        JSON.stringify(localStorageNFTs)
      );
    } else {
      localStorageNFTs.push(IPFS_UPLOADED_NFT);
      localStorage.setItem(
        "IPFS_UPLOADED_NFT",
        JSON.stringify(localStorageNFTs)
      );
    }

    return localStorageNFTs;
  }
};

export const ALL_NFTS = async (nftArray) => {
  const nfts = await Promise.all(
    nftArray.map(async ({ tokenId, creator, tokenURI }) => {
      const {
        data: { name, description, category, image, size, type },
      } = await axios.get(tokenURI, {});

      return {
        name,
        description,
        category,
        image,
        size,
        type,
        tokenId,
        creator,
        tokenURI,
      };
    })
  );
  console.log(nfts);
  return nfts;
};

export function toWei(amount, decimals = 18) {
  const toWei = ethers.utils.parseUnits(amount, decimals);
  return toWei.toString();
}

export function toEth(amount, decimals = 18) {
  const toEth = ethers.utils.formatUnits(amount, decimals);
  return toEth.toString();
}

export function parseErrorMsg(e) {
  const json = JSON.parse(JSON.stringify(e));
  return json?.reason || json?.error?.message;
}

export const Notify = async (message) => {
  const NOTIFICATIONS = {
    message: message,
    date: new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    time: new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    }),
  };

  let notifications = [];

  const localNFTs = localStorage.getItem("NOTIFICATIONS");
  if (localNFTs) {
    notifications = JSON.parse(localStorage.getItem("NOTIFICATIONS"));
    notifications.push(NOTIFICATIONS);
    localStorage.setItem("NOTIFICATIONS", JSON.stringify(notifications));
  } else {
    notifications.push(NOTIFICATIONS);
    localStorage.setItem("NOTIFICATIONS", JSON.stringify(notifications));
  }
};

export const ACTIVE_CONTRACT = async (provider) => {
  const network = await provider.getNetwork();

  let NFT_CREATOR_ADDRESS;
  let TOKEN_MARKETPLACE_ADDRESS;

  if (network.chainId == 17000) {
    NFT_CREATOR_ADDRESS = HOLESKY_NFT_CREATOR_ADDRESS;
    TOKEN_MARKETPLACE_ADDRESS = HOLESKY_TOKEN_MARKETPLACE_ADDRESS;

    const contract = {
      NFT_CREATOR_ADDRESS,
      TOKEN_MARKETPLACE_ADDRESS,
    };
    return contract;
  } else if (network.chainId == 84532) {
    NFT_CREATOR_ADDRESS = BASE_NFT_CREATOR_ADDRESS;
    TOKEN_MARKETPLACE_ADDRESS = BASE_TOKEN_MARKETPLACE_ADDRESS;

    const contract = {
      NFT_CREATOR_ADDRESS,
      TOKEN_MARKETPLACE_ADDRESS,
    };
    return contract;
  }
};

//https://docs.base.org/docs/tools/network-faucets/
// https://bwarelabs.com/faucets/base-sepolia
// https://cloud.google.com/application/web3/faucet

import React, {
  useMemo,
  useState,
  useContext,
  createContext,
  useEffect,
} from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { BigNumber, ethers } from "ethers";
import { config } from "../Context/wagmiConfigs";
import { getAddress, parseEther } from "viem";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import {
  useAccount,
  useReadContract,
  useWaitForTransactionReceipt,
  useWriteContract,
  useToken,
  useBalance,
  useClient,
  useChains,
} from "wagmi";

import {
  NFT_CREATOR_ABI,
  TOKEN_MARKETPLACE_ABI,
  ALL_NFTS,
  ERC20_ABI,
  ERC20_BYTECODE,
  toWei,
  toEth,
  parseErrorMsg,
  UPLOAD_IPFS_IMAGE,
  UPLOAD_METADATA,
  Notify,
  HOLESKY_NFT_CREATOR_ADDRESS,
  HOLESKY_TOKEN_MARKETPLACE_ADDRESS,
  SEPOLIA_NFT_CREATOR_ADDRESS,
  SEPOLIA_TOKEN_MARKETPLACE_ADDRESS,
  ACTIVE_CONTRACT,
} from "./constants";
import { useEthersProvider, useEthersSigner } from "../provider/hooks";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const notifySuccess = (msg) => toast.success(msg, { duration: 2000 });
  const notifyError = (msg) => toast.error(msg, { duration: 2000 });

  const provider = useEthersProvider();
  const signer = useEthersSigner();
  const chains = useChains();

  const [loader, setLoader] = useState(false);

  const { address, isConnected } = useAccount({
    config: config,
  });

  const HANDLE_UPLOAD = async (openGeneratedFile) => {
    try {
      const { name, description, size, type, base64, category, uploadType } =
        openGeneratedFile;
      if (base64) {
        setLoader(true);
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
          creator: address,
        });

        const _IPFS_URL = await UPLOAD_METADATA(data);

        const IPFS_UPLOADED_NFT = {
          name: name,
          description: description,
          category: category,
          image: imgHash,
          size: size,
          type: uploadType,
          creator: address,
          IPFS_URL: _IPFS_URL,
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
        setLoader(false);
        notifySuccess("Successfully uploaded");
      }
    } catch (error) {
      setLoader(false);
      const errorMessage = parseErrorMsg(error);
      notifyError(errorMessage);
    }
  };

  const CREATE_NFT = async (tokenURI) => {
    try {
      setLoader(true);

      const CONTRACT_ADDRESS = await ACTIVE_CONTRACT(provider);
      console.log(CONTRACT_ADDRESS);

      const contract = new ethers.Contract(
        CONTRACT_ADDRESS.NFT_CREATOR_ADDRESS,
        NFT_CREATOR_ABI,
        signer
      );
      const listingPrice = await contract.mintFee();
      const transaction = await contract.mint(tokenURI, {
        value: listingPrice.toString(),
      });

      const receipt = await transaction.wait();

      const message = "NFT Mint Successfully";

      Notify(message);

      setLoader(false);
      notifySuccess("Successfully created");
    } catch (error) {
      setLoader(false);
      const errorMessage = parseErrorMsg(error);
      notifyError(errorMessage);
    }
  };

  const TRANSFER_NFT = async (nft, recevier) => {
    const { creator, tokenId } = nft;
    try {
      if (!creator || !tokenId || !recevier) return notifyError("Data Missing");
      setLoader(true);
      notifySuccess("Transfering nft..");

      const CONTRACT_ADDRESS = await ACTIVE_CONTRACT(provider);
      console.log(CONTRACT_ADDRESS);

      const contract = new ethers.Contract(
        CONTRACT_ADDRESS.NFT_CREATOR_ADDRESS,
        NFT_CREATOR_ABI,
        signer
      );

      const transaction = await contract.transferNFT(
        creator,
        recevier,
        tokenId
      );

      const receipt = await transaction.wait();
      const message = "NFT Transfer Successfully";

      Notify(message);
      setLoader(false);
      notifySuccess("Successfully Transfered");
    } catch (error) {
      setLoader(false);
      const errorMessage = parseErrorMsg(error);
      notifyError(errorMessage);
    }
  };

  const READT_TOKEN = async () => {
    try {
      const allToken = JSON.parse(localStorage.getItem("TOKEN_HISTORY"));
      if (!allToken || allToken.length === 0) return [];

      const networkID = await provider._network.chainId;

      // Filter tokens by networkID
      const filteredTokens = allToken.filter(
        (token) => token.chainID === networkID
      );
      if (filteredTokens.length === 0) return [];

      // Fetch details for each token asynchronously
      const tokens = await Promise.all(
        filteredTokens.map(async (token) => {
          const contract = new ethers.Contract(
            token.tokenAddress,
            ERC20_ABI,
            signer
          );

          const balance = await contract.balanceOf(signer.getAddress());
          const name = await contract.name();
          const symbol = await contract.symbol();
          const supply = await contract.totalSupply();
          const decimals = await contract.decimals();

          return {
            address: token.tokenAddress,
            name,
            symbol,
            decimals,
            supply: ethers.utils.formatEther(supply.toString()),
            balance: ethers.utils.formatEther(balance.toString()),
            transactionHash: token.transactionHash,
            createdAt: token.createdAt,
            logo: token.logo,
          };
        })
      );

      return tokens;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  const GET_ERC20 = async (token) => {
    try {
      const contract = new ethers.Contract(token, ERC20_ABI, signer);

      const balance = await contract.balanceOf(signer.getAddress());
      const name = await contract.name();
      const symbol = await contract.symbol();
      const supply = await contract.totalSupply();
      const decimals = await contract.decimals();

      const tokenDetails = {
        address: token,
        name: name,
        symbol: symbol,
        decimals: decimals,
        supply: ethers.utils.formatEther(supply.toString()),
        balance: ethers.utils.formatEther(balance.toString()),
      };

      console.log(tokenDetails);

      return tokenDetails;
    } catch (error) {
      console.log(error);
    }
  };

  const TRANSFER_TOKEN = async (token, recevierNew) => {
    const { address: tokenAddress } = token;
    const { recevier, amount } = recevierNew;
    try {
      if (!tokenAddress || !recevier || !amount)
        return notifyError("Data Missing");
      setLoader(true);
      notifySuccess("Transfering token..");

      const contract = new ethers.Contract(tokenAddress, ERC20_ABI, signer);

      const _avalibleBal = await contract.balanceOf(address);
      const avalableToken = ethers.utils.formatEther(_avalibleBal.toString());

      if (avalableToken > 1) {
        const payAmount = ethers.utils.parseUnits(amount.toString(), "ether");

        const transaction = await contract.transfer(recevier, payAmount);

        const receipt = await transaction.wait();

        const message = "Token Transfer Successfully";
        Notify(message);

        setLoader(false);
        notifySuccess("Successfully Transfered Token");
      } else {
        setLoader(false);
        notifyError("YOUR BALANCE: 0");
      }
    } catch (error) {
      setLoader(false);
      const errorMessage = parseErrorMsg(error);
      notifyError(errorMessage);
    }
  };

  const APPROVE_TOKEN = async (token, approve) => {
    const { address: tokenAddress } = token;
    const { spender, amount } = approve;

    try {
      if (!tokenAddress || !spender || !amount)
        return notifyError("Data Missing");
      setLoader(true);
      notifySuccess("Transfering token..");

      const contract = new ethers.Contract(tokenAddress, ERC20_ABI, signer);

      const _avalibleBal = await contract.balanceOf(address);
      const avalableToken = ethers.utils.formatEther(_avalibleBal.toString());

      if (avalableToken > 1) {
        const payAmount = ethers.utils.parseUnits(amount.toString(), "ether");

        const transaction = await contract.approve(spender, payAmount);

        const receipt = await transaction.wait();

        const message = "Token Approve Successfully";
        Notify(message);

        setLoader(false);
        notifySuccess("Successfully Approve Token");
      } else {
        setLoader(false);
        notifyError("YOUR BALANCE: 0");
      }
    } catch (error) {
      setLoader(false);
      const errorMessage = parseErrorMsg(error);
      notifyError(errorMessage);
    }
  };

  const ALLOWANCE_TOKEN = async (token, allowance) => {
    const { address: tokenAddress } = token;
    const { owner, spender } = allowance;

    try {
      if (!tokenAddress || !spender || !owner)
        return notifyError("Data Missing");
      setLoader(true);
      notifySuccess("Transfering token..");

      const contract = new ethers.Contract(tokenAddress, ERC20_ABI, signer);

      const _avalibleBal = await contract.allowance(owner, spender);
      const avalableToken = ethers.utils.formatEther(_avalibleBal.toString());
      setLoader(false);
      return avalableToken;
    } catch (error) {
      console.log(error);
      setLoader(false);
    }
  };

  const GET_USER_OWN_NFTS = async () => {
    try {
      const CONTRACT_ADDRESS = await ACTIVE_CONTRACT(provider);
      console.log(CONTRACT_ADDRESS);
      const contract = new ethers.Contract(
        CONTRACT_ADDRESS.NFT_CREATOR_ADDRESS,
        NFT_CREATOR_ABI,
        signer
      );

      const ownNFTs = await contract.fetchUserOwnedNFTs(address);

      const nfts = await Promise.all(
        ownNFTs.map(async ({ tokenId, creator, tokenURI }) => {
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

      return nfts;
    } catch (error) {
      console.log(error);
    }
  };

  const GET_USER_CREATED_NFTS = async () => {
    try {
      const CONTRACT_ADDRESS = await ACTIVE_CONTRACT(provider);

      const contract = new ethers.Contract(
        CONTRACT_ADDRESS.NFT_CREATOR_ADDRESS,
        NFT_CREATOR_ABI,
        signer
      );

      const ownNFTs = await contract.fetchUserCreatedNFTs(address);

      const nfts = await Promise.all(
        ownNFTs.map(async ({ tokenId, creator, tokenURI }) => {
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

      return nfts;
    } catch (error) {
      console.log(error);
    }
  };

  const ADD_NFT_METAMASK = async (tokenId) => {
    if (window.ethereum) {
      try {
        const nftData = {
          type: "ERC721",
          options: {
            address: NFT_CREATOR_ADDRESS,
            tokenId: tokenId,
          },
        };

        const wasAdded = await window.ethereum.request({
          method: "wallet_watchAsset",
          params: {
            type: "NFT",
            options: nftData,
          },
        });

        if (wasAdded) {
          console.log("NFT added to MetaMask successfully!");
        } else {
          console.log("User rejected adding the NFT.");
        }
      } catch (error) {
        console.error("Error adding NFT to MetaMask:", error);
      }
    } else {
      console.error("MetaMask is not installed!");
    }
  };

  //TOKEN MARKETPLACE

  const swapEthToToken = async (tokenName, amount) => {
    try {
      const CONTRACT_ADDRESS = await ACTIVE_CONTRACT(provider);
      console.log(CONTRACT_ADDRESS);

      const contract = new ethers.Contract(
        CONTRACT_ADDRESS.TOKEN_MARKETPLACE_ADDRESS,
        TOKEN_MARKETPLACE_ABI,
        signer
      );

      const response = await contract.swapEthToToken(tokenName, {
        value: toWei(amount),
      });

      const receipt = await response.wait();

      const message = `Token Swap ETH > ${tokenName}  Successfully`;
      Notify(message);

      return receipt;
    } catch (e) {
      return parseErrorMsg(e);
    }
  };

  const hasValidAllowance = async (tokenName, amount) => {
    try {
      const CONTRACT_ADDRESS = await ACTIVE_CONTRACT(provider);
      console.log(CONTRACT_ADDRESS);

      const contract = new ethers.Contract(
        CONTRACT_ADDRESS.TOKEN_MARKETPLACE_ADDRESS,
        TOKEN_MARKETPLACE_ABI,
        signer
      );
      const tokenAddress = await contract.getTokenAddress(tokenName);

      console.log(contract);
      console.log(tokenName, amount);
      console.log(tokenAddress);

      const tokenContract = new ethers.Contract(
        tokenAddress,
        ERC20_ABI,
        signer
      );

      const data = await tokenContract.allowance(
        address,
        CONTRACT_ADDRESS.TOKEN_MARKETPLACE_ADDRESS
      );

      console.log(data);

      const result = BigNumber.from(data.toString()).gte(
        BigNumber.from(toWei(amount))
      );
      console.log(result);

      return result;
    } catch (e) {
      return parseErrorMsg(e);
    }
  };

  const swapTokenToEth = async (tokenName, amount) => {
    try {
      const CONTRACT_ADDRESS = await ACTIVE_CONTRACT(provider);
      console.log(CONTRACT_ADDRESS);

      const contract = new ethers.Contract(
        CONTRACT_ADDRESS.TOKEN_MARKETPLACE_ADDRESS,
        TOKEN_MARKETPLACE_ABI,
        signer
      );

      const response = await contract.swapTokenToEth(tokenName, toWei(amount));

      const receipt = await response.wait();

      const message = `Token Swap ${tokenName} > ETH Successfully`;
      Notify(message);

      return receipt;
    } catch (e) {
      return parseErrorMsg(e);
    }
  };

  const swapTokenToToken = async (srcToken, destToken, amount) => {
    try {
      const CONTRACT_ADDRESS = await ACTIVE_CONTRACT(provider);
      console.log(CONTRACT_ADDRESS);

      const contract = new ethers.Contract(
        CONTRACT_ADDRESS.TOKEN_MARKETPLACE_ADDRESS,
        TOKEN_MARKETPLACE_ABI,
        signer
      );

      const response = await contract.swapTokenToToken(
        srcToken,
        destToken,
        toWei(amount)
      );

      const receipt = await response.wait();

      const message = `Token Swap ${srcToken} > ${destToken} Successfully`;
      Notify(message);

      return receipt;
    } catch (e) {
      return parseErrorMsg(e);
    }
  };

  const getTokenBalance = async (tokenName, address) => {
    const CONTRACT_ADDRESS = await ACTIVE_CONTRACT(provider);
    console.log(CONTRACT_ADDRESS);

    const contract = new ethers.Contract(
      CONTRACT_ADDRESS.TOKEN_MARKETPLACE_ADDRESS,
      TOKEN_MARKETPLACE_ABI,
      signer
    );

    const balance = contract.getBalance(tokenName, address);
    return balance;
  };

  const getTokenAddress = async (tokenName) => {
    try {
      const CONTRACT_ADDRESS = await ACTIVE_CONTRACT(provider);
      console.log(CONTRACT_ADDRESS);

      const contract = new ethers.Contract(
        CONTRACT_ADDRESS.TOKEN_MARKETPLACE_ADDRESS,
        TOKEN_MARKETPLACE_ABI,
        signer
      );
      const address = await contract.getTokenAddress(tokenName);
      return address;
    } catch (e) {
      return parseErrorMsg(e);
    }
  };

  const increaseAllowance = async (tokenName, amount) => {
    try {
      const CONTRACT_ADDRESS = await ACTIVE_CONTRACT(provider);
      console.log(CONTRACT_ADDRESS);

      const contract = new ethers.Contract(
        CONTRACT_ADDRESS.TOKEN_MARKETPLACE_ADDRESS,
        TOKEN_MARKETPLACE_ABI,
        signer
      );
      const tokenAddress = await contract.getTokenAddress(tokenName);

      const tokenContract = new ethers.Contract(
        tokenAddress,
        ERC20_ABI,
        signer
      );

      const data = await tokenContract.approve(
        CONTRACT_ADDRESS.TOKEN_MARKETPLACE_ADDRESS,
        toWei(amount)
      );

      console.log(data);

      const receipt = await data.wait();

      const message = `${amount} Token Approve ${tokenName} Successfully`;
      Notify(message);

      return receipt;
    } catch (e) {
      return parseErrorMsg(e);
    }
  };

  const getAllHistory = async (tokenName, amount) => {
    try {
      const CONTRACT_ADDRESS = await ACTIVE_CONTRACT(provider);
      console.log(CONTRACT_ADDRESS);

      const contract = new ethers.Contract(
        CONTRACT_ADDRESS.TOKEN_MARKETPLACE_ADDRESS,
        TOKEN_MARKETPLACE_ABI,
        signer
      );
      const getAllHistory = await contract.getAllHistory();

      const historyTransaction = getAllHistory.map((history, i) => ({
        historyId: history.historyId.toNumber(),
        tokenA: history.tokenA,
        tokenB: history.tokenB,
        inputValue: toEth(history?.inputValue),
        outputValue: toEth(history?.outputValue),
        userAddress: history.userAddress,
      }));
      return historyTransaction;
    } catch (e) {
      return parseErrorMsg(e);
    }
  };

  const GET_LATEST_HISTORY = async () => {
    try {
      const getCurrentBlock = await provider.getBlockNumber();
      const previousBlock = getCurrentBlock - 20;

      const transactions = [];

      for (
        let i = getCurrentBlock;
        i > previousBlock && transactions.length < 20;
        i--
      ) {
        const singleBlockData = await provider.getBlockWithTransactions(i);

        for (let tx of singleBlockData.transactions) {
          if (transactions.length < 20) {
            transactions.push(tx);
          } else {
            break;
          }
        }
      }

      return transactions.reverse();
    } catch (e) {
      return parseErrorMsg(e);
    }
  };

  const CHECK_BALANCE = async (address) => {
    try {
      const gasPrice = await provider.getGasPrice();
      const latestGasPrice = ethers.utils.formatUnits(gasPrice);

      const balance = await provider.getBalance(address);

      const balanceInEther = ethers.utils.formatEther(balance);

      const account = {
        gasPrice: latestGasPrice,
        balance: balanceInEther.slice(0, 6),
      };

      return account;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StateContext.Provider
      value={{
        CREATE_NFT,
        TRANSFER_NFT,
        READT_TOKEN,
        TRANSFER_TOKEN,
        APPROVE_TOKEN,
        ALLOWANCE_TOKEN,
        GET_ERC20,
        ADD_NFT_METAMASK,
        swapEthToToken,
        hasValidAllowance,
        swapTokenToEth,
        swapTokenToToken,
        getTokenBalance,
        getTokenAddress,
        increaseAllowance,
        getAllHistory,
        GET_LATEST_HISTORY,
        GET_USER_OWN_NFTS,
        GET_USER_CREATED_NFTS,
        CHECK_BALANCE,
        HANDLE_UPLOAD,
        loader,
        address,
        setLoader,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);

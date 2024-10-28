import React, { useState, useEffect, useCallback } from "react";
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import { useAccount, useChains } from "wagmi";
import axios from "axios";
import { useDropzone } from "react-dropzone";

import DeskTopBar from "../Reusable/DeskTopBar";
import MobileTobBar from "../Reusable/MobileTobBar";
import {
  ERC20_ABI,
  ERC20_BYTECODE,
  UPLOAD_IPFS_IMAGE,
  Notify,
} from "../../Context/constants";
import { useStateContext } from "../../Context/index";
import { useEthersProvider, useEthersSigner } from "../../provider/hooks";

const CreateToken = ({ setOpenComponent, setOpenSideBar }) => {
  const { setLoader } = useStateContext();

  const provider = useEthersProvider();
  const signer = useEthersSigner();

  const [deploying, setDeploying] = useState(false);
  const { address } = useAccount();
  const chains = useChains();

  const [token, setToken] = useState({
    name: "",
    symbol: "",
    supply: "",
    image: "",
  });

  const _deployContract = async (address, name, symbol, supply, image) => {
    try {
      const factory = new ethers.ContractFactory(
        ERC20_ABI,
        ERC20_BYTECODE,
        signer
      );

      const totalSupply = Number(supply);
      const _initialSupply = ethers.utils.parseEther(
        totalSupply.toString(),
        "ether"
      );

      let contract = await factory.deploy(_initialSupply, name, symbol);

      const transaction = await contract.deployed();

      if (contract.address) {
        const today = Date.now();
        let date = new Date(today);
        const _tokenCreatedData = date.toLocaleDateString("en-US");

        const network = await provider.getNetwork();

        const _token = {
          account: address,
          supply: supply.toString(),
          name: name,
          symbol: symbol,
          tokenAddress: contract.address,
          transactionHash: contract.deployTransaction.hash,
          createdAt: _tokenCreatedData,
          logo: image,
          chainID: network.chainId,
        };

        let tokenHistory = [];

        const history = localStorage.getItem("TOKEN_HISTORY");
        if (history) {
          tokenHistory = JSON.parse(localStorage.getItem("TOKEN_HISTORY"));
          tokenHistory.push(_token);
          localStorage.setItem("TOKEN_HISTORY", JSON.stringify(tokenHistory));
        } else {
          tokenHistory.push(_token);
          localStorage.setItem("TOKEN_HISTORY", JSON.stringify(tokenHistory));
        }
        Notify(`${symbol} Token created successfully`);
        setLoader(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const createERC20 = async (token) => {
    const { name, symbol, supply, image } = token;

    try {
      if (!name || !symbol || !supply) {
        console.log("Data Missing");
      } else {
        setLoader(true);
        _deployContract(address, name, symbol, supply, image);
      }
    } catch (error) {
      setLoader(false);
      console.log(error);
    }
  };

  const onDrop = useCallback(async (acceptedFile) => {
    setLoader(true);
    const image = await UPLOAD_IPFS_IMAGE(acceptedFile[0]);
    setToken({ ...token, image: image });
    console.log(image);
    setLoader(false);
  }, []);

  const { getInputProps, getRootProps } = useDropzone({
    onDrop,
    maxSize: 500000000000,
  });

  return (
    <div className="flex flex-col min-h-screen w-full overflow-y-auto relative">
      <MobileTobBar setOpenSideBar={setOpenSideBar} />
      <main className="flex-1 isolate">
        <div className="flex flex-col">
          <DeskTopBar
            component={"Tokens"}
            setOpenComponent={setOpenComponent}
          />
        </div>
        <div className="pb-10 md:mx-4 my-4 lg:mx-8 lg:my-0">
          <div className="bg-alternative px-4 pb-10 sm:px-10 sm:pt-8 sm:pb-12 lg:px-4">
            <div className="justify-center flex py-2 sm:py-3">
              <div className="!bg-inherit md:!bg-default w-full rounded-2xl sm:max-w-md py-4 sm:px-3 md:px-8 sm:py-8">
                {token.image ? (
                  <div>
                    <img
                      style={{ width: "150px", height: "auto" }}
                      src={token.image}
                      alt=""
                    />
                  </div>
                ) : (
                  <div className="upload-container mt-5" {...getRootProps()}>
                    <div className="upload-area  ">
                      <p>
                        Drag and drop your files here or click to select files
                      </p>
                      <input
                        {...getInputProps()}
                        id="file"
                        type="file"
                        multiple
                        style={{ display: "none" }}
                      />
                    </div>
                  </div>
                )}

                <div className="space-y-3 mt-5">
                  <div className="flex justify-between items-end">
                    <div className="font-bold text-left text-default">Name</div>
                  </div>
                  <div>
                    <div className="relative mt-1">
                      <div className="flex relative h-16">
                        <div className="flex flex-1 text-left items-center relative">
                          <input
                            onChange={(e) =>
                              setToken({ ...token, name: e.target.value })
                            }
                            className="rounded-lg pl-6 py-2 w-full h-full rounded-r-lg border border-muted text-lg bg-default cursor-default text-default focus:ring-1 focus:ring-primary-default"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mt-5">
                  <div className="flex justify-between items-end">
                    <div className="font-bold text-left text-default">
                      Symbol
                    </div>
                  </div>
                  <div>
                    <div className="relative mt-1">
                      <div className="flex relative h-16">
                        <div className="flex flex-1 text-left items-center relative">
                          <input
                            onChange={(e) =>
                              setToken({ ...token, symbol: e.target.value })
                            }
                            className="rounded-lg pl-6 py-2 w-full h-full rounded-r-lg border border-muted text-lg bg-default cursor-default text-default focus:ring-1 focus:ring-primary-default"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mt-5">
                  <div className="flex justify-between items-end">
                    <div className="font-bold text-left text-default">
                      Sypply
                    </div>
                  </div>
                  <div>
                    <div className="relative mt-1">
                      <div className="flex relative h-16">
                        <div className="flex flex-1 text-left items-center relative">
                          <input
                            onChange={(e) =>
                              setToken({ ...token, supply: e.target.value })
                            }
                            className="rounded-lg pl-6 py-2 w-full h-full rounded-r-lg border border-muted text-lg bg-default cursor-default text-default focus:ring-1 focus:ring-primary-default"
                          />
                        </div>
                      </div>

                      <div className="flex pt-2 -mb-2 text-xs text-alternative">
                        You do not have any BNB available to swap
                      </div>
                    </div>
                  </div>
                </div>

                <div className="justify-center text-center w-full mt-10">
                  <button
                    onClick={() => createERC20(token)}
                    className=" transition px-5 py-2 rounded-full border flex items-center justify-center text-center w-full text-sm  opacity-100 border-primary-default bg-primary-default text-primary-inverse"
                  >
                    <span> Deploy Token</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CreateToken;

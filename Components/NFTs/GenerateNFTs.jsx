import React, { useState } from "react";

import {
  GenerateNFTs_1,
  GenerateNFTs_2,
  GenerateNFTs_3,
  GenerateNFTs_4,
  GenerateNFTs_5,
  GenerateNFTs_6,
} from "../SVG/index";
import AIUploader from "./AIUploader";
import INLoader from "../INLoader";
import { NFT_GENERATOR } from "../../Context/constants";

const GenerateNFTs = ({ setOpenGeneratedFile, setOpenTab }) => {
  const [loader, setLoader] = useState(false);
  const [createdNFT, setCreatedNFT] = useState();
  const [nfts, setNfts] = useState({
    name: "",
    description: "",
    category: "",
  });

  const CALLING_IMAGE = async (nfts) => {
    setLoader(true);
    const response = await NFT_GENERATOR(nfts);
    console.log(response);
    if (response) {
      setCreatedNFT(response);
      setLoader(false);
    }
  };
  return (
    <div className="mt-2">
      <div className="mt-7 focus:outline-none flex justify-center">
        <div className="w-full max-w-[1344px]">
          <div className="flex flex-col grow md:flex-row gap-6 w-full mt-4">
            <div data-testid="pooled-staking-input-card">
              <div className="flex flex-col gap-6 w-full md:w-[320px] mb-12 xs:m-auto rounded-lg p-0 md:py-6 md:px-4 bg-inherit md:bg-default">
                <div className="flex justify-between items-center content-center">
                  <div className="w-4" />
                  <div className="relative w-full text-center">
                    <button className="space-x-2 p-3.5 text-sm inline-flex justify-center items-center bg-inherit hover:bg-primary-muted text-default hover:text-info transition-colors group px-2 xs:px-3 py-1 xs:py-2 relative rounded-full border-2 border-transparent">
                      <span className="flex -ml-1.5 -my-0.5 items-center">
                        <div className="relative flex">
                          <div className="justify-center rounded-full flex items-center">
                            <div
                              className="paper"
                              style={{
                                borderRadius: 50,
                                display: "inline-block",
                                margin: 0,
                                overflow: "hidden",
                                padding: 0,
                                backgroundColor: "rgb(247, 111, 1)",
                                height: 24,
                                width: 24,
                              }}
                            >
                              <GenerateNFTs_1 />
                            </div>
                          </div>
                        </div>
                      </span>
                      <div className="flex items-center truncate flex-1">
                        <p className="text-xs sm:text-sm leading-5 text-default font-normal">
                          AI Coder V3
                        </p>
                      </div>
                      <div className="w-4 h-4 ml-2 flex items-center justify-end">
                        <GenerateNFTs_2 />
                      </div>
                    </button>
                  </div>
                  <div
                    data-tooltip-id="pooled-staking-more-info"
                    className="flex"
                  >
                    <button aria-label="More information">
                      <GenerateNFTs_3 />
                    </button>
                    <div data-theme="dark" />
                  </div>
                </div>
                {/* //TAG */}
                <div>
                  <p className="text-sm sm:text-base text-default font-medium pb-2">
                    Name
                  </p>
                  <div className="w-full flex flex-col gap-2">
                    <div className="border border-muted bg-alternative rounded-lg">
                      <div className="flex items-center justify-between p-3 gap-2">
                        <div className="flex items-center w-full gap-2">
                          <input
                            onChange={(e) =>
                              setNfts({ ...nfts, name: e.target.value })
                            }
                            placeholder="Name"
                            className="border-none text-md text-default overflow-hidden py-0 px-0 h-full w-full cursor-text bg-transparent focus:ring-0 truncate"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* //PROMPT */}
                <div>
                  <p className="text-sm sm:text-base text-default font-medium pb-2">
                    Prompt
                  </p>
                  <div className="w-full flex flex-col gap-2">
                    <div className="w-full flex flex-col gap-2">
                      <textarea
                        className="border bg-alternative rounded-lg border-muted"
                        cols="4"
                        rows="6"
                        placeholder="Prompt"
                        onChange={(e) =>
                          setNfts({ ...nfts, description: e.target.value })
                        }
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-sm sm:text-base text-default font-medium pb-2">
                    Category
                  </p>
                  <div className="w-full flex flex-col gap-2">
                    <div className="border border-muted bg-alternative rounded-lg">
                      <div className="flex items-center justify-between p-3 gap-2">
                        <div className="flex items-center w-full gap-2">
                          <input
                            onChange={(e) =>
                              setNfts({ ...nfts, category: e.target.value })
                            }
                            placeholder="category"
                            className="border-none text-md text-default overflow-hidden py-0 px-0 h-full w-full cursor-text bg-transparent focus:ring-0 truncate"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="fixed bottom-0 left-0 right-0 w-full xs:static bg-alternative md:bg-default z-10">
                  <div className="border-t border-default p-4 xs:border-0 xs:p-0">
                    <button
                      onClick={() => CALLING_IMAGE(nfts)}
                      className=" transition px-5 py-2 rounded-full border flex items-center justify-center text-center w-full text-sm  border-primary-default bg-primary-default text-primary-inverse mb-4"
                    >
                      <span>Generate NFT</span>
                    </button>
                    <div className="inline-block text-center text-xs text-alternative">
                      <p className="inline">
                        By clicking confirm you agree to MetaMask's
                        <a
                          href="#"
                          className="text-primary-default hover:underline ml-1"
                          target="_blank"
                        >
                          Terms of Use
                        </a>{" "}
                        and understand the
                        <a
                          href="#"
                          className="text-primary-default hover:underline ml-1"
                          target="_blank"
                        >
                          Risk Disclosures
                        </a>
                        .
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full gap-2">
              <div className=" md:block">
                <div data-testid="stake-empty-state">
                  {createdNFT && (
                    <AIUploader
                      createdNFT={createdNFT}
                      setOpenTab={setOpenTab}
                    />
                  )}

                  {!createdNFT && (
                    <div className="flex rounded-lg justify-center items-center text-center flex-col px-8 h-48 md:h-60 md:bg-default mt-6">
                      {loader ? <INLoader /> : <GenerateNFTs_6 />}

                      <p className="text-sm sm:text-base font-normal text-alternative">
                        Generate your NFTs with AI NFTs generator.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenerateNFTs;

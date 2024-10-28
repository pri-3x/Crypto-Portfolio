import React, { useState } from "react";

import {
  GenerateNFTs_1,
  GenerateNFTs_2,
  GenerateNFTs_3,
  GenerateNFTs_4,
  GenerateNFTs_5,
  GenerateNFTs_6,
} from "../SVG/index";
import FileUpload from "./Uploader";

const UploadNFTs = ({ setOpenGeneratedFile }) => {
  const [files, setFiles] = useState([]);

  const [nfts, setNfts] = useState({
    name: "",
    description: "",
    category: "",
  });

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
                          IPFS Upload
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
                            placeholder="name"
                            className="border-none text-md text-default  py-0 px-0 h-full w-full cursor-text bg-transparent focus:ring-0 truncate"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* //PROMPT */}
                <div>
                  <p className="text-sm sm:text-base text-default font-medium pb-2">
                    Description
                  </p>
                  <div className="w-full flex flex-col gap-2">
                    <textarea
                      placeholder="description"
                      className="border bg-alternative rounded-lg border-muted"
                      cols="4"
                      rows="6"
                      onChange={(e) =>
                        setNfts({ ...nfts, description: e.target.value })
                      }
                    ></textarea>
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
                            className="border-none text-md text-default  py-0 px-0 h-full w-full cursor-text bg-transparent focus:ring-0 truncate"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full gap-2">
              <div className=" md:block">
                <div>
                  <FileUpload
                    files={files}
                    setFiles={setFiles}
                    setOpenGeneratedFile={setOpenGeneratedFile}
                    nfts={nfts}
                  />

                  {files.length == 0 && (
                    <div className="flex rounded-lg justify-center items-center text-center flex-col px-8 h-48 md:h-60 md:bg-default mt-6">
                      <GenerateNFTs_6 />
                      <p className="text-sm sm:text-base font-normal text-alternative">
                        You don't have any nfts yet.
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

export default UploadNFTs;

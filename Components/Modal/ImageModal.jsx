import React, { useEffect, useState } from "react";

import { SHORTEN_ADDRESS } from "../../Context/constants";
import { useEthersProvider, useEthersSigner } from "../../provider/hooks";
import { UserModal_2 } from "../SVG/index";

const ImageModal = ({ setOpenImageModal, openImageModal }) => {
  const provider = useEthersProvider();
  const [network, setNetwork] = useState();

  useEffect(() => {
    const network = async () => {
      const networkConnect = await provider.getNetwork();
      setNetwork(networkConnect);
      console.log(networkConnect);
    };
    network();
  }, []);

  return (
    <div className="ReactModalPortal">
      <div
        className="ReactModal__Overlay ReactModal__Overlay--after-open"
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0, 0, 0, 0.6)",
          zIndex: 1001,
          display: "flex",
        }}
      >
        <div
          id="modal-portal"
          className="ReactModal__Content ReactModal__Content--after-open bg-default text-default max-h-screen"
          tabIndex={-1}
          role="dialog"
          aria-label=""
          aria-modal="true"
          style={{
            overflow: "auto",
            borderRadius: "0.5rem",
            outline: "none",
            padding: 24,
            position: "relative",
            width: 644,
            margin: "auto",
            maxWidth: "26rem",
          }}
        >
          <div
            id="modal-title"
            data-testid="modal-title"
            className="flex text-default text-xl font-semibold pb-4 relative"
          >
            <div className="flex flex-1 justify-center">
              {openImageModal?.name}
            </div>
            <svg
              onClick={() => setOpenImageModal(false)}
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-label="Close modal"
              className="cursor-pointer text-icon-default h-6 w-6 absolute right-0 z-50"
              data-testid="x-icon"
            >
              <line x1={18} y1={6} x2={6} y2={18} />
              <line x1={6} y1={6} x2={18} y2={18} />
            </svg>
          </div>
          <div className="flex flex-col items-center gap-4">
            <img
              className="object-contain rounded-xl"
              src={openImageModal?.image}
              alt={openImageModal?.name}
            />
            <div className="flex flex-col gap-y-4 w-full">
              <div className="flex items-center justify-between px-2">
                <p className="text-xs sm:text-sm leading-5 font-normal text-alternative">
                  Chain
                </p>
                <p className="text-xs sm:text-sm leading-5 text-default font-normal capitalize truncate max-w-[55%]">
                  {network?.name}
                </p>
              </div>
              <div className="flex items-center justify-between px-2">
                <p className="text-xs sm:text-sm leading-5 font-normal text-alternative">
                  Category
                </p>
                <p className="text-xs sm:text-sm leading-5 text-default font-normal capitalize truncate max-w-[55%]">
                  {openImageModal?.category}
                </p>
              </div>
              <div className="flex flex-col gap-4 px-2">
                <p className="text-xs sm:text-sm leading-5 font-normal text-alternative">
                  Name: {openImageModal?.name}
                </p>
                <p className="text-xs sm:text-sm leading-5 font-normal text-alternative">
                  Description: {openImageModal?.description}
                </p>
                <div className="flex items-center flex-wrap gap-2 text-xs">
                  <div className="flex items-center text-default text-sm md:text-base !text-xs bg-pressed px-2 py-1 rounded-full">
                    Minted by {SHORTEN_ADDRESS(openImageModal?.creator)}
                    <div className="ml-1 cursor-pointer flex items-center">
                      <UserModal_2 />
                    </div>
                    <div data-theme="dark" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="font-normal text-center text-xs sm:text-sm text-alternative pt-1 mb-2 sm:-mb-2">
            Powered by{" "}
            <a
              className="text-primary-default cursor-pointer"
              href="https://www.theblockchaincoders.com/SourceCode"
              target="_blank"
            >
              @theblockchaincoders
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;

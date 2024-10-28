import React from "react";

import { NFTOverview_1, NFTOverview_2 } from "../SVG/index";
const NFTOverview = ({
  setOpenGeneratedFile,
  openGeneratedFile,
  HANDLE_UPLOAD,
}) => {
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
            maxWidth: 420,
            maxHeight: "100vh",
          }}
        >
          <div id="pooled-staking-info-modal" className="text-default">
            <div className="flex text-default text-xl font-semibold pb-4 relative">
              <div className="flex flex-1 justify-center">More info</div>
              <svg
                onClick={() => setOpenGeneratedFile("")}
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
            <div className="flex flex-col gap-2">
              <img src={openGeneratedFile?.base64} alt="" />
              <span className="flex py-2 items-start">
                <span className="w-4 pr-7 pt-1">
                  <NFTOverview_1 />
                </span>
                <span className="text-left">
                  <p className="text-sm sm:text-base text-default font-normal">
                    <strong>Name</strong>: {openGeneratedFile?.name}
                  </p>
                </span>
              </span>
              <span className="flex py-2 items-start">
                <span className="w-4 pr-7 pt-1">
                  <NFTOverview_2 />
                </span>
                <span className="text-left">
                  <p className="text-sm sm:text-base text-default font-normal">
                    <strong>Description</strong>: Imagine a sleek, majestic cat
                    {openGeneratedFile?.description}
                  </p>
                </span>
              </span>
            </div>
            <div className="fixed bottom-0 left-0 right-0 w-full xs:static bg-alternative md:bg-default z-10">
              <div className="border-t border-default p-4 xs:border-0 xs:p-0">
                <button
                  onClick={() => (
                    HANDLE_UPLOAD(openGeneratedFile), setOpenGeneratedFile("")
                  )}
                  className=" transition px-5 py-2 rounded-full border flex items-center justify-center text-center w-full text-sm border-primary-default bg-primary-default text-primary-inverse mb-4"
                >
                  <span>Upload</span>
                </button>
                <div className="inline-block text-center text-xs text-alternative">
                  <p className="inline">
                    By clicking confirm you agree to @theblockchaincoders
                    <a
                      href="https://priyanshu-portfolio-beta.vercel.app/"
                      className="text-primary-default hover:underline ml-1"
                      target="_blank"
                    >
                      Terms of Use
                    </a>{" "}
                    and understand the
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTOverview;

import React from "react";

const MusicModal = () => {
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
          className="ReactModal__Content ReactModal__Content--after-open bg-default text-default max-h-screen hide-scrollbar"
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
            maxWidth: "27rem",
          }}
        >
          <div
            id="modal-title"
            data-testid="modal-title"
            className="flex text-default text-xl font-semibold pb-4 relative"
          >
            <div className="flex flex-1 justify-center">
              tesh - BLUESKIES 2.0
            </div>
            <svg
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
              data-testid="x-circle-icon"
            >
              <circle cx={12} cy={12} r={10} />
              <line x1={15} y1={9} x2={9} y2={15} />
              <line x1={9} y1={9} x2={15} y2={15} />
            </svg>
          </div>
          <div className="mb-4">
            <video
              poster="https://media-resize-prd.phosphor.xyz/resize/?cid=QmaUb51VAr9nZZxBvnVW4bUATE7hG3H8KjMnp6BMz8PkmB&image=Screenshot_2024-07-18_at_3.31.47_PM.png&size=thumb"
              controls=""
              loop=""
              style={{
                width: "100%",
                objectFit: "cover",
                borderRadius: "1rem",
              }}
            >
              <source
                src="https://nftprodstorage.blob.core.windows.net/public/QmQ1oZtABszPnaNApx9iXH3PwuNgMFgqzCoyYwowMAgDcQ/IMG_7988_1.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="flex items-start gap-3 pb-3 text-alternative">
            <div>
              BLUESKIES2.0 is the second song off my upcoming EP titled Cycles +
              Repetitions. It is actually fully inspired by a day I spent at the
              beach (funny eno
              <span
                role="button"
                tabIndex={0}
                className="text-alternative cursor-pointer"
              >
                ...Read more
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-y-4 w-full pb-3">
            <div className="flex items-center justify-between px-2">
              <p className="text-xs sm:text-sm leading-5 font-normal text-alternative">
                Creator
              </p>
              <p className="text-xs sm:text-sm leading-5 text-default font-normal capitalize truncate max-w-[55%]">
                cooprecs
              </p>
            </div>
            <div className="flex items-center justify-between px-2">
              <p className="text-xs sm:text-sm leading-5 font-normal text-alternative">
                Chain
              </p>
              <p className="text-xs sm:text-sm leading-5 text-default font-normal capitalize truncate max-w-[55%]">
                Linea Mainnet
              </p>
            </div>
            <div className="flex items-center justify-between px-2">
              <p className="text-xs sm:text-sm leading-5 font-normal text-alternative">
                Ends
              </p>
              <p className="text-xs sm:text-sm leading-5 text-default font-normal capitalize truncate max-w-[55%]">
                Jul 22, 2025
              </p>
            </div>
            <div>
              <div
                role="button"
                tabIndex={0}
                className="cursor-pointer px-2 py-1 flex flex-row items-center justify-between"
                data-testid="dropToEarnDropDown-bbebb1d8-40b5-4bd0-803e-bda7b29f1787"
              >
                <div className="flex items-center w-[50%]">
                  <p className="text-xs sm:text-sm text-alternative font-semibold pr-2">
                    NFT + mint fees
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-alternative"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-default">
                    0.000777 ETH
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            id="account-selection-dropdown"
            className="relative inline-block text-left min-w-full mb-4 rounded-lg border-muted pointer-events-none"
          >
            <div>
              <button className="space-x-2 p-3.5 text-sm hover:bg-primary-muted text-default hover:text-info border border-default transition-colors group w-full px-4 sm:px-6 py-4 relative rounded-lg flex items-center justify-between bg-transparent">
                <span className="flex -ml-1.5 -my-0.5 items-center">
                  <div className="relative flex">
                    <div className="flex items-center justify-center w-4 h-4 rounded-full object-cover overflow-hidden absolute ring-1 ring-border-muted -top-1 -right-1">
                      <img
                        alt=""
                        src="https://token.api.cx.metamask.io/assets/networkLogos/bsc.svg"
                      />
                    </div>
                    <div className="items-center justify-center rounded-full flex flex-shrink-0">
                      <div
                        className="paper"
                        style={{
                          borderRadius: 50,
                          display: "inline-block",
                          margin: 0,
                          overflow: "hidden",
                          padding: 0,
                          backgroundColor: "rgb(247, 111, 1)",
                          height: 32,
                          width: 32,
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x={0}
                          y={0}
                          height={32}
                          width={32}
                        >
                          <rect
                            x={0}
                            y={0}
                            rx={0}
                            ry={0}
                            height={32}
                            width={32}
                            transform="translate(3.1568309063898172 -9.420798476832333) rotate(305.6 16 16)"
                            fill="#fc1934"
                          />
                          <rect
                            x={0}
                            y={0}
                            rx={0}
                            ry={0}
                            height={32}
                            width={32}
                            transform="translate(-8.881379272597506 -18.21330311191973) rotate(372.8 16 16)"
                            fill="#f3f200"
                          />
                          <rect
                            x={0}
                            y={0}
                            rx={0}
                            ry={0}
                            height={32}
                            width={32}
                            transform="translate(-21.916162193707635 9.9455481751749) rotate(283.4 16 16)"
                            fill="#156ef2"
                          />
                          <rect
                            x={0}
                            y={0}
                            rx={0}
                            ry={0}
                            height={32}
                            width={32}
                            transform="translate(30.500196234510167 12.984529433114455) rotate(170.4 16 16)"
                            fill="#016c8c"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </span>
                <div className="flex items-center truncate flex-1 !overflow-visible">
                  <div>0xb309...c9eBb0 (Connected)</div>
                </div>
              </button>
            </div>
          </div>
          <div className="flex flex-row w-full justify-between">
            <a
              href="https://app.phosphor.xyz/cooprecs/drops/2b1f245c-ff9b-4b52-addc-197795c8743d/bbebb1d8-40b5-4bd0-803e-bda7b29f1787/b5f072e7-beb6-4428-9aca-40880e66c56b?utm_source=Metamask&utm_medium=Portfolio&utm_campaign=Integration&utm_content=View%20on%20Phosphor"
              className="cursor-pointer disabled:cursor-auto transition px-5 py-2 rounded-full border flex items-center justify-center text-center text-sm bg-inherit hover:bg-hover text-alternative border-primary w-[50%]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="text-default font-normal text-xs sm:text-sm">
                View on Phosphor
              </p>
              <span className="flex ml-2.5 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-default w-4"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1={10} y1={14} x2={21} y2={3} />
                </svg>
              </span>
            </a>
            <button className="cursor-pointer disabled:cursor-auto transition px-5 py-2 rounded-full border flex items-center justify-center text-center border-primary-default bg-primary-default hover:border-primary-default-hover hover:bg-primary-default-hover text-primary-inverse text-xs sm:text-sm max-h-[45px] min-w-[45%] max-w-[50%]">
              <span>Switch network</span>
            </button>
          </div>
          <div className="flex flex-row justify-center items-center pt-5 gap-1">
            <p className="font-normal text-xs sm:text-sm text-alternative">
              Powered by
            </p>
            <a
              className=""
              href="https://studio.phosphor.xyz/?utm_source=Metamask&utm_medium=Portfolio&utm_campaign=Integration&utm_content=Powered%20by%20Phosphor"
              target="_blank"
            >
              <p className="font-normal text-xs sm:text-sm text-primary-default">
                Phosphor
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicModal;

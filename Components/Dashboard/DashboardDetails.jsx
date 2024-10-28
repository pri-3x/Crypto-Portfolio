import React from "react";

const DashboardDetails = () => {
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
            width: "60%",
            margin: "auto",
            maxWidth: 900,
            maxHeight: "95%",
          }}
        >
          <div
            id="transaction-detail-modal"
            className="text-default mb-5 overflow-y-auto lg:overflow-y-fixed"
          >
            <div className="absolute right-5">
              <div
                id="modal-title"
                data-testid="modal-title"
                className="flex text-default text-xl font-semibold pb-4 relative"
              >
                <div className="flex flex-1 justify-center" />
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
                  data-testid="x-icon"
                >
                  <line x1={18} y1={6} x2={6} y2={18} />
                  <line x1={6} y1={6} x2={18} y2={18} />
                </svg>
              </div>
            </div>
            <div className="mt-4 lg:mt-0">
              <div className="mb-5">
                <div className="flex justify-between">
                  <div className="flex items-end truncate space-x-3">
                    <div className="text-2xl md:text-3xl font-semibold text-default">
                      Receive
                    </div>
                    <div className="flex space-x-3">
                      <a
                        href="https://etherscan.io/tx/0xd30ee549453492ae49a4b12908c7c5d45104c4092c9cf2f2974c5baf71c9d503"
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full w-7 h-7 aspect-square bg-white flex items-center justify-center p-1"
                      >
                        <img
                          className="w-4 h-4"
                          alt="Etherscan logo"
                          src="/assets/etherscan-logo-circle-6c37eb63.svg"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-1 text-default font-medium truncate whitespace-pre items-center mb-2">
                  <div>May 22, 2024 at 12:12 pm</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div>
                  <div className="text-alternative sm:text-sm flex mb-2">
                    From{" "}
                  </div>
                  <div className="flex items-center h-8 space-x-2 group">
                    <div className="flex items-center justify-center rounded-full flex-shrink-0">
                      <div
                        className="paper"
                        style={{
                          borderRadius: 50,
                          display: "inline-block",
                          margin: 0,
                          overflow: "hidden",
                          padding: 0,
                          backgroundColor: "rgb(241, 209, 2)",
                          height: 24,
                          width: 24,
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x={0}
                          y={0}
                          height={24}
                          width={24}
                        >
                          <rect
                            x={0}
                            y={0}
                            rx={0}
                            ry={0}
                            height={24}
                            width={24}
                            transform="translate(0.8684135097707906 0.11971970576417243) rotate(128.4 12 12)"
                            fill="#156af2"
                          />
                          <rect
                            x={0}
                            y={0}
                            rx={0}
                            ry={0}
                            height={24}
                            width={24}
                            transform="translate(-7.789716742644851 12.334500690316005) rotate(218.0 12 12)"
                            fill="#f77401"
                          />
                          <rect
                            x={0}
                            y={0}
                            rx={0}
                            ry={0}
                            height={24}
                            width={24}
                            transform="translate(-8.218514890052305 20.0544651453441) rotate(139.6 12 12)"
                            fill="#eff300"
                          />
                          <rect
                            x={0}
                            y={0}
                            rx={0}
                            ry={0}
                            height={24}
                            width={24}
                            transform="translate(7.893665886769872 29.33786793137716) rotate(239.9 12 12)"
                            fill="#fc1930"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="text-default truncate">0xdD27...D12DE0</div>
                    <div className="hidden sm:block text-sm text-alternative">
                      (0xdd2...2de0)
                    </div>
                    <button
                      data-tooltip-id="from-address-0xdd27092201c5ce526dffc3cd7e48b2c58dd12de0"
                      className="p-1.5 rounded-lg items-center flex cursor-pointer w-fit hover:bg-hover"
                      aria-label="Copy to clipboard"
                    >
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
                        className="h-4 w-4 text-current"
                      >
                        <rect
                          x={9}
                          y={9}
                          width={13}
                          height={13}
                          rx={2}
                          ry={2}
                        />
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                      </svg>
                      <div data-theme="dark" />
                    </button>
                    <div className="hidden items-center group-hover:flex">
                      <a
                        href="https://etherscan.io/address/0xdd27092201c5ce526dffc3cd7e48b2c58dd12de0"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center underline decoration-dotted space-x-2 p-1.5 rounded-lg cursor-pointer hover:bg-hover"
                      >
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
                          className="w-4 h-4"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1={10} y1={14} x2={21} y2={3} />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="text-alternative text-sm flex mb-2">
                    To (You)
                  </div>
                  <div className="flex items-center h-8 space-x-2 group">
                    <div className="flex items-center justify-center rounded-full">
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
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x={0}
                          y={0}
                          height={24}
                          width={24}
                        >
                          <rect
                            x={0}
                            y={0}
                            rx={0}
                            ry={0}
                            height={24}
                            width={24}
                            transform="translate(2.3676231797923633 -7.06559885762425) rotate(305.6 12 12)"
                            fill="#fc1934"
                          />
                          <rect
                            x={0}
                            y={0}
                            rx={0}
                            ry={0}
                            height={24}
                            width={24}
                            transform="translate(-6.661034454448131 -13.659977333939796) rotate(372.8 12 12)"
                            fill="#f3f200"
                          />
                          <rect
                            x={0}
                            y={0}
                            rx={0}
                            ry={0}
                            height={24}
                            width={24}
                            transform="translate(-16.437121645280726 7.459161131381175) rotate(283.4 12 12)"
                            fill="#156ef2"
                          />
                          <rect
                            x={0}
                            y={0}
                            rx={0}
                            ry={0}
                            height={24}
                            width={24}
                            transform="translate(22.875147175882624 9.73839707483584) rotate(170.4 12 12)"
                            fill="#016c8c"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="text-default truncate">0xb309...c9eBb0</div>
                    <div className="hidden sm:block text-sm text-alternative">
                      (0xb30...ebb0)
                    </div>
                    <button
                      data-tooltip-id="to-address-0xb309098bcb51e5c687a16fa41bd6055f47c9ebb0"
                      className="p-1.5 rounded-lg items-center flex cursor-pointer w-fit hover:bg-hover"
                      aria-label="Copy to clipboard"
                    >
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
                        className="h-4 w-4 text-current"
                      >
                        <rect
                          x={9}
                          y={9}
                          width={13}
                          height={13}
                          rx={2}
                          ry={2}
                        />
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                      </svg>
                      <div data-theme="dark" />
                    </button>
                    <div className="hidden items-center group-hover:flex">
                      <a
                        href="https://etherscan.io/address/0xb309098bcb51e5c687a16fa41bd6055f47c9ebb0"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center underline decoration-dotted space-x-2 p-1.5 rounded-lg cursor-pointer hover:bg-hover"
                      >
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
                          className="w-4 h-4"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1={10} y1={14} x2={21} y2={3} />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="text-alternative mb-2 text-sm">
                    Transaction ID
                  </div>
                  <div className="flex space-x-1">
                    <div>0xd30e...c9d503</div>
                    <button
                      data-tooltip-id="transaction-list-0xd30ee549453492ae49a4b12908c7c5d45104c4092c9cf2f2974c5baf71c9d503"
                      className="p-1.5 rounded-lg items-center flex cursor-pointer w-fit hover:bg-hover"
                      aria-label="Copy to clipboard"
                    >
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
                        className="h-4 w-4 text-current"
                      >
                        <rect
                          x={9}
                          y={9}
                          width={13}
                          height={13}
                          rx={2}
                          ry={2}
                        />
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                      </svg>
                      <div data-theme="dark" />
                    </button>
                  </div>
                </div>
                <div>
                  <div className="text-alternative mb-2 text-sm">
                    Transaction Fee{" "}
                    {/* <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="gas-pump"
                      className="svg-inline--fa fa-gas-pump fa-sm text-alternative"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M32 64C32 28.7 60.7 0 96 0H256c35.3 0 64 28.7 64 64V256h8c48.6 0 88 39.4 88 88v32c0 13.3 10.7 24 24 24s24-10.7 24-24V222c-27.6-7.1-48-32.2-48-62V96L384 64c-8.8-8.8-8.8-23.2 0-32s23.2-8.8 32 0l77.3 77.3c12 12 18.7 28.3 18.7 45.3V168v24 32V376c0 39.8-32.2 72-72 72s-72-32.2-72-72V344c0-22.1-17.9-40-40-40h-8V448c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32V64zM96 80v96c0 8.8 7.2 16 16 16H240c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16H112c-8.8 0-16 7.2-16 16z"
                      />
                    </svg> */}
                  </div>
                  <div className="flex items-center space-x-1">
                    <div>0.001 ETH</div>
                    <div />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 mb-8">
                <div>
                  <h4 className="text-sm sm:text-base text-default font-bold mb-2">
                    Received
                  </h4>
                  <div className="flex flex-wrap items-center">
                    <div className="group flex space-x-2 items-center justify-left">
                      <div className="flex overflow-y-visible overflow-x-hidden sm:overflow-x-visible items-center space-x-3">
                        <div className="relative" id="network-icon-1-ETH">
                          <img
                            src="https://token.api.cx.metamask.io/assets/nativeCurrencyLogos/ethereum.svg"
                            alt="ETH"
                            className="w-8 h-8 rounded-full object-cover min-w-[2rem]"
                          />
                        </div>
                        <div className="flex items-center space-x-2">
                          <div>
                            <div className="flex items-center space-x-2 font-medium truncate xs:text-clip text-success-default">
                              <div>
                                <span>+</span>0.023
                              </div>
                            </div>
                            <div className="text-sm text-alternative truncate max-w-[7rem] sm:max-w-[10rem]">
                              <span>ETH</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="invisible group-hover:visible overflow-visible">
                        <div className="absolute m-auto mb-0 -mt-3">
                          <div
                            id="tokens-more-menu"
                            className="relative sm:inline-block text-left"
                          >
                            <div>
                              <button
                                className="inline-flex justify-center items-center w-6 h-6 text-icon-default transition-colors rounded-lg hover:bg-hover"
                                data-tooltip-id="token-more-1-0x0000000000000000000000000000000000000000"
                              >
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
                                  className="w-4 h-4"
                                >
                                  <circle cx={12} cy={12} r={1} />
                                  <circle cx={12} cy={5} r={1} />
                                  <circle cx={12} cy={19} r={1} />
                                </svg>
                                <div data-theme="dark" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="text-sm sm:text-base text-default font-bold mb-4">
                  Transaction Details
                </h4>
                <div className="mb-3 flex justify-between">
                  <p className="text-sm font-normal text-alternative sm:text-sm">
                    Blockchain
                  </p>
                  <div className="flex items-center space-x-2">
                    <img
                      src="https://token.api.cx.metamask.io/assets/networkLogos/ethereum.svg"
                      className="rounded-full w-4 h-4"
                      alt=""
                    />
                    <div>Ethereum</div>
                  </div>
                </div>
                <div className="mb-3 flex justify-between">
                  <p className="text-sm font-normal text-alternative sm:text-sm">
                    Status
                  </p>
                  <div>
                    <div className="flex items-center space-x-2 text-success-default">
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
                        className="w-4 h-4"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                      <div>Success</div>
                    </div>
                  </div>
                </div>
                <div className="mb-3 flex justify-between">
                  <p className="text-sm font-normal text-alternative sm:text-sm">
                    Timestamp
                  </p>
                  <div className="flex space-x-1">
                    <div>4 months ago</div>
                    <div>(May 22, 2024 at 12:12 pm)</div>
                  </div>
                </div>
                <div className="mb-3 flex justify-between">
                  <p className="text-sm font-normal text-alternative sm:text-sm">
                    Block Number
                  </p>
                  <div className="flex space-x-1 items-center">
                    <button
                      data-tooltip-id="block-number-19923708"
                      className="p-1.5 rounded-lg items-center flex cursor-pointer w-fit hover:bg-hover"
                      aria-label="Copy to clipboard"
                    >
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
                        className="h-3 w-3 text-current"
                      >
                        <rect
                          x={9}
                          y={9}
                          width={13}
                          height={13}
                          rx={2}
                          ry={2}
                        />
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                      </svg>
                      <div data-theme="dark" />
                    </button>
                    <div className="flex items-center">
                      <a
                        href="https://etherscan.io/block/19923708"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center underline decoration-dotted space-x-2"
                      >
                        <div>19923708</div>
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
                          className="w-4 h-4"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1={10} y1={14} x2={21} y2={3} />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mb-3 flex justify-between">
                  <p className="text-sm font-normal text-alternative sm:text-sm">
                    Block Hash
                  </p>
                  <div className="flex space-x-1">
                    <div className="flex items-center">
                      <button
                        data-tooltip-id="block-hash-0xf08a1cae1f472dbc0d752dc9064bfc5896f5fc637398e47ab15b9eeb2d1866f8"
                        className="p-1.5 rounded-lg items-center flex cursor-pointer w-fit hover:bg-hover text-default truncate"
                        aria-label="Copy to clipboard"
                      >
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
                          className="h-3 w-3 text-current"
                        >
                          <rect
                            x={9}
                            y={9}
                            width={13}
                            height={13}
                            rx={2}
                            ry={2}
                          />
                          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                        </svg>
                        <div data-theme="dark" />
                      </button>
                      <div>0xf08a...1866f8</div>
                    </div>
                  </div>
                </div>
                <div className="mb-3 flex justify-between">
                  <p className="text-sm font-normal text-alternative sm:text-sm">
                    Value
                  </p>
                  <div className="flex items-center space-x-1">
                    <div>0.02251799813685248 ETH</div>
                    <div />
                  </div>
                </div>
                <div className="mb-3 flex justify-between">
                  <p className="text-sm font-normal text-alternative sm:text-sm">
                    Transaction Index
                  </p>
                  <div />
                </div>
                <div className="mb-3 flex justify-between">
                  <p className="text-sm font-normal text-alternative sm:text-sm">
                    Gas Price
                  </p>
                  <div>6063453677</div>
                </div>
                <div className="mb-3 flex justify-between">
                  <p className="text-sm font-normal text-alternative sm:text-sm">
                    Gas Used
                  </p>
                  <div>21000</div>
                </div>
                <div className="mb-3 flex justify-between">
                  <p className="text-sm font-normal text-alternative sm:text-sm">
                    Nonce
                  </p>
                  <div>15</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardDetails;

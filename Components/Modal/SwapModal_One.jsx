import React from "react";

const SwapModal_One = () => {
  return (
    <>
      <div className="absolute flex flex-col py-1 mt-1 z-20 rounded-lg shadow-lg outline-none overflow-auto bg-default border left-0 right-0 divide-y border-muted pb-0">
        <div className="flex flex-col">
          <button className="text-default select-none relative mx-1 sm:px-4 rounded-lg hover:bg-hover p-3 items-center justify-between">
            <div className="flex items-center">
              <div className="flex items-center mr-3">
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
                  className="w-5 h-5 text-icon-default"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div className="truncate flex-1 mr-3 text-left flex items-center font-medium">
                <div className="flex items-center gap-2 whitespace-nowrap w-full">
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
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-default truncate text-xs font-semibold">
                          0xb309...c9eBb0
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </button>
          <button
            data-tooltip-id="acount-address-copy-button-0xb309098bcB51E5C687a16FA41bD6055f47c9eBb0"
            className="p-1.5 rounded-lg items-center flex cursor-pointer w-fit"
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
              <rect x={9} y={9} width={13} height={13} rx={2} ry={2} />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
            <div data-theme="dark" />
          </button>
        </div>
        <span className="text-xs text-alternative" />
      </div>
      <span className="text-alternative text-xs" />
      <div className="mt-1 border-muted">
        <button className="w-full">
          <div className="text-sm text-default cursor-pointer px-4 sm:px-6 py-4 flex min-w-0 items-center rounded-b-md">
            <div className="flex justify-center rounded-md mr-3">
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
                className="text-primary-default h-4 w-4"
              >
                <circle cx={12} cy={12} r={10} />
                <line x1={12} y1={8} x2={12} y2={16} />
                <line x1={8} y1={12} x2={16} y2={12} />
              </svg>
            </div>
            <div className="text-primary-default font-semibold">
              Manage in Accounts Settings
            </div>
          </div>
        </button>
      </div>
    </>
  );
};

export default SwapModal_One;

import React from "react";

const DashboardAccount = ({ address, SHORTEN_ADDRESS }) => {
  return (
    <div className="flex flex-col mt-1 z-20 rounded-lg shadow-lg outline-none overflow-auto bg-default border fixed sm:max-h-96 sm:absolute sm:w-max sm:left-auto sm:right-0 overflow-y-auto overflow-x-hidden hide-scrollbar inset-x-3 max-h-72 py-0 pt-4 divide-y border-muted sm:!left-0">
      <div className="pb-4">
        <div className="px-4 sm:px-6 pb-2">
          <div className="flex justify-between items-center">
            <div className="text-sm font-semibold text-alternative">
              My accounts
            </div>
          </div>
        </div>
        <div>
          <div className="mx-3 px-3 sm:px-4 rounded-lg hover:bg-hover text-default group flex items-center py-3 text-sm cursor-pointer border-b-0">
            <div className="flex items-center h-5">
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
                className="text-default w-5"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <div className="flex ml-3 space-x-3 items-center w-full">
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
                      height: 28,
                      width: 28,
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x={0}
                      y={0}
                      height={28}
                      width={28}
                    >
                      <rect
                        x={0}
                        y={0}
                        rx={0}
                        ry={0}
                        height={28}
                        width={28}
                        transform="translate(2.7622270430910905 -8.243198667228294) rotate(305.6 14 14)"
                        fill="#fc1934"
                      />
                      <rect
                        x={0}
                        y={0}
                        rx={0}
                        ry={0}
                        height={28}
                        width={28}
                        transform="translate(-7.771206863522819 -15.936640222929762) rotate(372.8 14 14)"
                        fill="#f3f200"
                      />
                      <rect
                        x={0}
                        y={0}
                        rx={0}
                        ry={0}
                        height={28}
                        width={28}
                        transform="translate(-19.176641919494184 8.70235465327804) rotate(283.4 14 14)"
                        fill="#156ef2"
                      />
                      <rect
                        x={0}
                        y={0}
                        rx={0}
                        ry={0}
                        height={28}
                        width={28}
                        transform="translate(26.687671705196394 11.361463253975147) rotate(170.4 14 14)"
                        fill="#016c8c"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex-1 flex flex-col">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-default text-sm truncate">
                        {SHORTEN_ADDRESS(address)}
                      </span>
                      <button className="p-1.5 rounded-lg items-center flex cursor-pointer w-fit">
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
                      </button>
                    </div>
                    <span className="text-xs text-alternative">
                      (Connected)
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 justify-end items-center space-x-3">
                <button className="p-1.5 rounded-lg items-center flex cursor-pointer w-fit text-icon-alternative active:bg-pressed hover:bg-hover ml-3">
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
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardAccount;

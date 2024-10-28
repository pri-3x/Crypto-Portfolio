import React from "react";

const DashboardNetwork = () => {
  return (
    <div className="flex flex-col mt-1 z-20 rounded-lg shadow-lg outline-none overflow-auto bg-default border fixed sm:max-h-96 sm:absolute sm:w-max sm:left-auto sm:right-0 m-x-3 overflow-y-auto overflow-x-hidden hide-scrollbar inset-x-3 max-h-72 py-0 divide-y border-default sm:!left-0">
      <div className="min-w-[330px]">
        <div className="pt-4 sm:pt-6">
          <div className="px-4 sm:px-6 pb-2">
            <div className="flex justify-between items-center">
              <p className="text-xs sm:text-sm leading-5 !text-sm font-semibold text-alternative">
                Active Networks
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <button className="text-default select-none relative mx-1 px-3 sm:px-4 py-2 rounded-lg hover:bg-hover group text-sm">
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
                  <div className="flex items-center whitespace-nowrap w-full">
                    <div className="relative min-w-max mr-3 ">
                      <div className="" />
                      <img
                        src="https://token.api.cx.metamask.io/assets/networkLogos/ethereum.svg"
                        className="rounded-full w-6 h-6"
                        alt=""
                      />
                    </div>
                    <div className="text-sm sm:text-base font-medium flex flex-col text-left truncate">
                      <span className="text-default truncate">Ethereum</span>
                      <span className="text-alternative font-normal truncate" />
                    </div>
                  </div>
                </div>
              </div>
            </button>
          </div>
          <div className="flex flex-col">
            <button className="text-default select-none relative mx-1 px-3 sm:px-4 py-2 rounded-lg hover:bg-hover group text-sm">
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
                  <div className="flex items-center whitespace-nowrap w-full">
                    <div className="relative min-w-max mr-3 ">
                      <div className="" />
                      <img
                        src="https://token.api.cx.metamask.io/assets/networkLogos/linea.svg"
                        className="rounded-full w-6 h-6"
                        alt=""
                      />
                    </div>
                    <div className="text-sm sm:text-base font-medium flex flex-col text-left truncate">
                      <span className="text-default truncate">Linea</span>
                      <span className="text-alternative font-normal truncate" />
                    </div>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardNetwork;

import React from "react";

const NetworkModal = () => {
  return (
    <div className="absolute flex flex-col py-1 mt-1 z-20 rounded-lg shadow-lg outline-none overflow-auto bg-default border border-muted right-0 sm:w-max overflow-y-auto h-min max-h-64 w-max">
      <button className="text-default select-none relative mx-1 px-3 sm:px-4 rounded-lg hover:bg-hover group text-sm py-3">
        <div className="flex items-center">
          <div className="w-5 mr-3" />
          <div className="font-normal truncate flex-1 mr-3 text-left flex items-center">
            <img
              src="https://token.api.cx.metamask.io/assets/networkLogos/ethereum.svg"
              className="rounded-full mr-2"
              alt="Ethereum"
              style={{ height: 22, width: 22 }}
            />
            <div>Ethereum</div>
          </div>
        </div>
      </button>
      <button className="text-default select-none relative mx-1 px-3 sm:px-4 rounded-lg hover:bg-hover group text-sm py-3">
        <div className="flex items-center">
          <div className="w-5 mr-3" />
          <div className="font-normal truncate flex-1 mr-3 text-left flex items-center">
            <img
              src="https://token.api.cx.metamask.io/assets/networkLogos/optimism.svg"
              className="rounded-full mr-2"
              alt="Optimism"
              style={{ height: 22, width: 22 }}
            />
            <div>Optimism</div>
          </div>
        </div>
      </button>
      <button className="text-default select-none relative mx-1 px-3 sm:px-4 rounded-lg hover:bg-hover group text-sm py-3">
        <div className="flex items-center">
          <div className="w-5 mr-3" />
          <div className="font-normal truncate flex-1 mr-3 text-left flex items-center">
            <img
              src="https://token.api.cx.metamask.io/assets/networkLogos/cronos.svg"
              className="rounded-full mr-2"
              alt="Cronos"
              style={{ height: 22, width: 22 }}
            />
            <div>Cronos</div>
          </div>
        </div>
      </button>
      <button className="text-default select-none relative mx-1 px-3 sm:px-4 rounded-lg hover:bg-hover group text-sm py-3">
        <div className="flex items-center">
          <div className="w-5 mr-3" />
          <div className="font-normal truncate flex-1 mr-3 text-left flex items-center">
            <img
              src="https://token.api.cx.metamask.io/assets/networkLogos/bsc.svg"
              className="rounded-full mr-2"
              alt="BNB Chain"
              style={{ height: 22, width: 22 }}
            />
            <div>BNB Chain</div>
          </div>
        </div>
      </button>
      <button className="text-default select-none relative mx-1 px-3 sm:px-4 rounded-lg hover:bg-hover group text-sm py-3">
        <div className="flex items-center">
          <div className="w-5 mr-3" />
          <div className="font-normal truncate flex-1 mr-3 text-left flex items-center">
            <img
              src="https://token.api.cx.metamask.io/assets/networkLogos/gnosis.svg"
              className="rounded-full mr-2"
              alt="Gnosis"
              style={{ height: 22, width: 22 }}
            />
            <div>Gnosis</div>
          </div>
        </div>
      </button>
      <button className="text-default select-none relative mx-1 px-3 sm:px-4 rounded-lg hover:bg-hover group text-sm py-3">
        <div className="flex items-center">
          <div className="w-5 mr-3" />
          <div className="font-normal truncate flex-1 mr-3 text-left flex items-center">
            <img
              src="https://token.api.cx.metamask.io/assets/networkLogos/polygon.svg"
              className="rounded-full mr-2"
              alt="Polygon"
              style={{ height: 22, width: 22 }}
            />
            <div>Polygon</div>
          </div>
        </div>
      </button>
      <button className="text-default select-none relative mx-1 px-3 sm:px-4 rounded-lg hover:bg-hover group text-sm py-3">
        <div className="flex items-center">
          <div className="w-5 mr-3" />
          <div className="font-normal truncate flex-1 mr-3 text-left flex items-center">
            <img
              src="https://token.api.cx.metamask.io/assets/networkLogos/ftm.svg"
              className="rounded-full mr-2"
              alt="Fantom"
              style={{ height: 22, width: 22 }}
            />
            <div>Fantom</div>
          </div>
        </div>
      </button>
      <button className="text-default select-none relative mx-1 px-3 sm:px-4 rounded-lg hover:bg-hover group text-sm py-3">
        <div className="flex items-center">
          <div className="w-5 mr-3" />
          <div className="font-normal truncate flex-1 mr-3 text-left flex items-center">
            <img
              src="https://token.api.cx.metamask.io/assets/networkLogos/zksync.svg"
              className="rounded-full mr-2"
              alt="zkSync Era"
              style={{ height: 22, width: 22 }}
            />
            <div>zkSync Era</div>
          </div>
        </div>
      </button>
      <button className="text-default select-none relative mx-1 px-3 sm:px-4 rounded-lg hover:bg-hover group text-sm py-3">
        <div className="flex items-center">
          <div className="w-5 mr-3" />
          <div className="font-normal truncate flex-1 mr-3 text-left flex items-center">
            <img
              src="https://token.api.cx.metamask.io/assets/networkLogos/polygon_zkevm.svg"
              className="rounded-full mr-2"
              alt="Polygon zkEVM"
              style={{ height: 22, width: 22 }}
            />
            <div>Polygon zkEVM</div>
          </div>
        </div>
      </button>
      <button className="text-default select-none relative mx-1 px-3 sm:px-4 rounded-lg hover:bg-hover group text-sm py-3">
        <div className="flex items-center">
          <div className="w-5 mr-3" />
          <div className="font-normal truncate flex-1 mr-3 text-left flex items-center">
            <img
              src="https://token.api.cx.metamask.io/assets/networkLogos/moonbeam.svg"
              className="rounded-full mr-2"
              alt="Moonbeam"
              style={{ height: 22, width: 22 }}
            />
            <div>Moonbeam</div>
          </div>
        </div>
      </button>
      <button className="text-default select-none relative mx-1 px-3 sm:px-4 rounded-lg hover:bg-hover group text-sm py-3">
        <div className="flex items-center">
          <div className="w-5 mr-3" />
          <div className="font-normal truncate flex-1 mr-3 text-left flex items-center">
            <img
              src="https://token.api.cx.metamask.io/assets/networkLogos/moonriver.svg"
              className="rounded-full mr-2"
              alt="Moonriver"
              style={{ height: 22, width: 22 }}
            />
            <div>Moonriver</div>
          </div>
        </div>
      </button>
      <button className="text-default select-none relative mx-1 px-3 sm:px-4 rounded-lg hover:bg-hover group text-sm py-3">
        <div className="flex items-center">
          <div className="w-5 mr-3" />
          <div className="font-normal truncate flex-1 mr-3 text-left flex items-center">
            <img
              src="https://token.api.cx.metamask.io/assets/networkLogos/base.svg"
              className="rounded-full mr-2"
              alt="Base"
              style={{ height: 22, width: 22 }}
            />
            <div>Base</div>
          </div>
        </div>
      </button>
      <button className="text-default select-none relative mx-1 px-3 sm:px-4 rounded-lg hover:bg-hover group text-sm py-3">
        <div className="flex items-center">
          <div className="w-5 mr-3" />
          <div className="font-normal truncate flex-1 mr-3 text-left flex items-center">
            <img
              src="https://token.api.cx.metamask.io/assets/networkLogos/arbitrum.svg"
              className="rounded-full mr-2"
              alt="Arbitrum"
              style={{ height: 22, width: 22 }}
            />
            <div>Arbitrum</div>
          </div>
        </div>
      </button>
      <button className="text-default select-none relative mx-1 px-3 sm:px-4 rounded-lg hover:bg-hover group text-sm py-3">
        <div className="flex items-center">
          <div className="w-5 mr-3" />
          <div className="font-normal truncate flex-1 mr-3 text-left flex items-center">
            <img
              src="https://token.api.cx.metamask.io/assets/networkLogos/celo.svg"
              className="rounded-full mr-2"
              alt="Celo"
              style={{ height: 22, width: 22 }}
            />
            <div>Celo</div>
          </div>
        </div>
      </button>
      <button className="text-default select-none relative mx-1 px-3 sm:px-4 rounded-lg hover:bg-hover group text-sm py-3">
        <div className="flex items-center">
          <div className="w-5 mr-3" />
          <div className="font-normal truncate flex-1 mr-3 text-left flex items-center">
            <img
              src="https://token.api.cx.metamask.io/assets/networkLogos/avalanche.svg"
              className="rounded-full mr-2"
              alt="Avalanche"
              style={{ height: 22, width: 22 }}
            />
            <div>Avalanche</div>
          </div>
        </div>
      </button>
      <button className="text-default select-none relative mx-1 px-3 sm:px-4 rounded-lg hover:bg-hover group text-sm py-3">
        <div className="flex items-center">
          <div className="w-5 mr-3" />
          <div className="font-normal truncate flex-1 mr-3 text-left flex items-center">
            <img
              src="https://token.api.cx.metamask.io/assets/networkLogos/linea.svg"
              className="rounded-full mr-2"
              alt="Linea"
              style={{ height: 22, width: 22 }}
            />
            <div>Linea</div>
          </div>
        </div>
      </button>
      <button className="text-default select-none relative mx-1 px-3 sm:px-4 rounded-lg hover:bg-hover group text-sm py-3">
        <div className="flex items-center">
          <div className="w-5 mr-3" />
          <div className="font-normal truncate flex-1 mr-3 text-left flex items-center">
            <img
              src="https://token.api.cx.metamask.io/assets/networkLogos/aurora.svg"
              className="rounded-full mr-2"
              alt="Aurora"
              style={{ height: 22, width: 22 }}
            />
            <div>Aurora</div>
          </div>
        </div>
      </button>
      <button className="text-default select-none relative mx-1 px-3 sm:px-4 rounded-lg hover:bg-hover group text-sm py-3">
        <div className="flex items-center">
          <div className="w-5 mr-3" />
          <div className="font-normal truncate flex-1 mr-3 text-left flex items-center">
            <img
              src="https://token.api.cx.metamask.io/assets/networkLogos/harmony.svg"
              className="rounded-full mr-2"
              alt="Harmony"
              style={{ height: 22, width: 22 }}
            />
            <div>Harmony</div>
          </div>
        </div>
      </button>
      <button className="text-default select-none relative mx-1 px-3 sm:px-4 rounded-lg hover:bg-hover group text-sm py-3">
        <div className="flex items-center">
          <div className="w-5 mr-3" />
          <div className="font-normal truncate flex-1 mr-3 text-left flex items-center">
            <img
              src="https://token.api.cx.metamask.io/assets/networkLogos/palm.svg"
              className="rounded-full mr-2"
              alt="Palm"
              style={{ height: 22, width: 22 }}
            />
            <div>Palm</div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default NetworkModal;

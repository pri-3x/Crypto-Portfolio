import React, { useEffect, useState, useRef } from "react";
import { useStateContext } from "../../Context/index";
import { ethers } from "ethers";
import toast, { Toaster } from "react-hot-toast";

import {
  ClipboardIcon,
  ClipboardCheckIcon,
  PlusIcon,
} from "@heroicons/react/outline";

const SingleCard = ({ index, name, walletAddress }) => {
  const { getTokenAddress, getTokenBalance, increaseAllowance } =
    useStateContext();

  const [balance, setBalance] = useState("-");
  const [tokenAddress, setTokenAddress] = useState();

  const [copyIcon, setCopyIcon] = useState({ icon: ClipboardIcon });

  const [txPending, setTxPending] = useState(false);

  const notifyError = (msg) => toast.error(msg, { duration: 6000 });
  const notifySuccess = () => toast.success("Transaction completed.");

  useEffect(() => {
    if (name && walletAddress) {
      fetchTokenBalance();
      fetchTokenAddress();
    } else setBalance("-");
  }, [name, walletAddress]);

  async function fetchTokenBalance() {
    const bal = await getTokenBalance(name, walletAddress);

    const fBal = ethers.utils.formatUnits(bal.toString(), 18);
    setBalance(fBal.toString());
  }

  async function fetchTokenAddress() {
    const address = await getTokenAddress(name);
    setTokenAddress(address);
  }
  return (
    <button className="text-default select-none relative mx-1 px-3 sm:px-4 rounded-lg hover:bg-hover group text-sm py-1">
      <div className="flex items-center">
        <div className="font-normal truncate flex-1 mr-3 text-left flex items-center">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2">
              <span className="font-medium">
                {name} &nbsp; Balance: &nbsp;
                {balance}
              </span>
            </div>
            <div className="flex items-center p-2 px-2  bg-[#7765F3] rounded-r-lg">
              <copyIcon.icon
                className="h-6 cursor-pointer"
                onClick={() => {
                  navigator.clipboard.writeText(tokenAddress);
                  setCopyIcon({ icon: ClipboardCheckIcon });
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default SingleCard;

import React, { useState, useEffect } from "react";

import {
  Transaction_1,
  Transaction_2,
  Transaction_3,
  Transaction_4,
  Transaction_5,
  Transaction_6,
  Transaction_7,
} from "../SVG/index";
import TransactionTable from "../Dashboard/TransactionTable";
import { useStateContext } from "../../Context/index";
import InnerLoader from "../Reusable/InnerLoader";

const Transaction = () => {
  const { GET_LATEST_HISTORY } = useStateContext();

  const [history, setHistory] = useState();

  const LOCAT_DATA = async () => {
    const transaction = await GET_LATEST_HISTORY();
    setHistory(transaction);
  };

  useEffect(() => {
    LOCAT_DATA();
  }, []);
  return (
    <div className="mt-7 focus:outline-none">
      <div>
        <div className="rounded-2xl py-2">
          <div>
            <div className="relative border-muted">
              <div className="relative">
                {!history || history.length === 0 ? (
                  <div
                    style={{
                      position: "fixed",
                      top: "5rem",
                      left: 0,
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      zIndex: 999,
                    }}
                  >
                    <InnerLoader />
                  </div>
                ) : (
                  <>
                    {history?.map((item, index) => (
                      <TransactionTable item={item} index={index} />
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaction;

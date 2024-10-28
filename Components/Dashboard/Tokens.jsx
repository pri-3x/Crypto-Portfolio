import React from "react";

import {
  Transaction_1,
  Transaction_2,
  Transaction_3,
  Transaction_4,
  Transaction_5,
  Transaction_6,
  Transaction_7,
} from "../SVG/index";
import TokenTable from "./TokenTable";

const Tokens = ({ address }) => {
  return (
    <div className="mt-7 focus:outline-none">
      <div>
        <div className="rounded-2xl py-2">
          <div>
            <div className="relative border-muted">
              <div className="relative">
                <TokenTable />
                {/* <TokenTable />
                <TokenTable /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokens;

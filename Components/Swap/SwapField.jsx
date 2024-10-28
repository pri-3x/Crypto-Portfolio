import React from "react";
import Selector from "./Selector";

const SwapField = React.forwardRef(({ obj }, inputRef) => {
  const { id, value = "", setValue, defaultValue, setToken, ignoreValue } = obj;

  return (
    <div className="flex items-center rounded-xl">
      <input
        ref={inputRef}
        className={getInputClassname()}
        type={"number"}
        value={value}
        placeholder={"0.0"}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />

      <Selector
        id={id}
        setToken={setToken}
        defaultValue={defaultValue}
        ignoreValue={ignoreValue}
      />
    </div>
  );

  function getInputClassname() {
    let className =
      "rounded-lg pl-6 py-3 w-full h-full rounded-r-lg border border-muted text-lg bg-default cursor-default text-default focus:ring-1 focus:ring-primary-default";
    return className;
  }
});

export default SwapField;

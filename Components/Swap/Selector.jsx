import React, { useEffect, useState } from "react";

import { Dropdown } from "@nextui-org/react";
import {
  COIN_1,
  COIN_2,
  COIN_3,
  COIN_4,
  COIN_5,
  COIN_6,
  COIN_7,
  COIN_8,
  DEFAULT_VALUE,
  ETH,
} from "../../utils/saleToken";

const Selector = ({ defaultValue, ignoreValue, setToken, id }) => {
  const menu = [
    { key: ETH, name: ETH },
    { key: COIN_1, name: COIN_1 },
    { key: COIN_2, name: COIN_2 },
    { key: COIN_3, name: COIN_3 },
    { key: COIN_4, name: COIN_4 },
    { key: COIN_5, name: COIN_5 },
    { key: COIN_6, name: COIN_6 },
    { key: COIN_7, name: COIN_7 },
    { key: COIN_8, name: COIN_8 },
  ];

  const [selectedItem, setSelectedItem] = useState();
  const [menuItems, setMenuItems] = useState(getFilteredItems(ignoreValue));

  function getFilteredItems(ignoreValue) {
    return menu.filter((item) => item["key"] !== ignoreValue);
  }

  useEffect(() => {
    setSelectedItem(defaultValue);
  }, [defaultValue]);

  useEffect(() => {
    setMenuItems(getFilteredItems(ignoreValue));
  }, [ignoreValue]);

  return (
    <Dropdown>
      <Dropdown.Button
        css={{
          backgroundColor:
            selectedItem === DEFAULT_VALUE ? "bg-primary-default" : "#2c2f36",
        }}
      >
        {selectedItem}
      </Dropdown.Button>
      <Dropdown.Menu
        aria-label="Dynamic Actions"
        items={menuItems}
        onAction={(key) => {
          setSelectedItem(key);
          setToken(key);
        }}
      >
        {(item) => (
          <Dropdown.Item
            aria-label={id}
            key={item.key}
            color={item.key === "delete" ? "error" : "default"}
          >
            {item.name}
          </Dropdown.Item>
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
};
export default Selector;

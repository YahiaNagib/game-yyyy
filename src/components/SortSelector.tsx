import React, { useState } from "react";
import { Button, Menu, Portal } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";

const SortSelector = () => {
  const [orderBy, setOrderBy] = useState("Relevance");

  const menuList = ["Relevance", "Date added", "Name", "Release date", "Popularity", "Average rating"];

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button
          variant="subtle"
          size="sm"
          margin={"10px"}
          fontSize={"17px"}
          borderRadius={"8px"}
          outline={"none"}
          padding={"18px"}
        >
          Order by: {orderBy}
          <FaChevronDown style={{ width: "14px", height: "14px" }} />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content width={"230px"}>
            {menuList.map((item) => (
              <Menu.Item
                key={item}
                value={item}
                fontSize="15px"
                padding={"8px"}
                cursor={"pointer"}
                onClick={() => setOrderBy(item)}
              >
                {item}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default SortSelector;

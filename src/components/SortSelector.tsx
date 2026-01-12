import React, { useState } from "react";
import { Button, Menu, Portal } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";

interface Props {
  selectedOrderBy: string;
  onSelectOrder: (selectedOrderBy: string) => void;
}

const SortSelector = ({ selectedOrderBy, onSelectOrder }: Props) => {
  const menuList = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const currentSelectedOrder = menuList.find((item) => item.value === selectedOrderBy);

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
          Order by: {currentSelectedOrder?.label}
          <FaChevronDown style={{ width: "14px", height: "14px" }} />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content width={"230px"}>
            {menuList.map((item) => (
              <Menu.Item
                key={item.value}
                value={item.value}
                fontSize="15px"
                padding={"8px"}
                cursor={"pointer"}
                onClick={() => onSelectOrder(item.value)}
              >
                {item.label}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default SortSelector;

import React from "react";
import { Platform } from "../hooks/usePlatforms";
import { Button, Menu, Portal } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";

interface Props {
  items: Platform[];
  text: string;
}

const ButtonDropdown = ({ items, text }: Props) => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button
          variant="subtle"
          size="sm"
          margin={"10px"}
          fontSize={"17px"}
          borderRadius={"5px"}
          outline={"none"}
        >
          {text}
          <FaChevronDown style={{ width: "14px", height: "14px" }} />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {items.map((item) => (
              <Menu.Item key={item.id} value={item.name}>
                {item.name}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default ButtonDropdown;

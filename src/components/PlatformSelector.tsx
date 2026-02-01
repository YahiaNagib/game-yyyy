import React, { useState } from "react";
import usePlatforms, { Platform } from "../hooks/usePlatforms";
import { Button, Menu, Portal } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";

interface Props {
  selectedPlatformId: number;
  onSelectPlatform: (platformId: number) => void;
}

const PlatformSelector = ({ selectedPlatformId, onSelectPlatform }: Props) => {
  const [selectedPlatformName, setSelectedPlatformName] = useState("Platforms");
  const { data: platforms } = usePlatforms();

  const handleSelectPlatform = (platform: Platform) => {
    onSelectPlatform(platform.id);
    setSelectedPlatformName(platform.name);
  };

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
          {selectedPlatformName}
          <FaChevronDown style={{ width: "14px", height: "14px" }} />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content width={"230px"}>
            <Menu.Item value="All" fontSize="15px" padding={"8px"} cursor={"pointer"}>
              All
            </Menu.Item>
            {platforms?.results.map((platform) => (
              <Menu.Item
                key={platform.id}
                value={platform.name}
                fontSize="15px"
                padding={"8px"}
                cursor={"pointer"}
                onClick={() => handleSelectPlatform(platform)}
              >
                {platform.name}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default PlatformSelector;

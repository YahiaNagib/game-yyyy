import usePlatforms, { Platform } from "../hooks/usePlatforms";
import { Button, Menu, Portal } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";
import useGameQueryStore from "../store";

const PlatformSelector = () => {
  // const [selectedPlatformName, setSelectedPlatformName] = useState("Platforms");
  const { data: platforms } = usePlatforms();

  const setSelectedPlatformId = useGameQueryStore((s) => s.setPlatformId);
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);

  const selectedPlatform = platforms?.results.find((platform) => platform.id === selectedPlatformId);

  const handleSelectPlatform = (platform: Platform) => {
    setSelectedPlatformId(platform.id);
    // setSelectedPlatformName(platform.name);
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
          {selectedPlatform?.name || "Platforms"}
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

import usePlatforms from "../hooks/usePlatforms";
import { Button, Checkbox, Menu, Portal } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";
import useGameQueryStore from "../store";

const PlatformSelector = () => {
  // const [selectedPlatformName, setSelectedPlatformName] = useState("Platforms");
  const { data: platforms } = usePlatforms();

  const setSelectedPlatformId = useGameQueryStore((s) => s.setPlatformId);
  const selectedPlatformIds = useGameQueryStore((s) => s.gameQuery.platformIds);

  // const selectedPlatform = platforms?.results.filter((platform) => selectedPlatformIds?.includes(platform.id));

  const handleSelectPlatform = (platformId: number) => {
    setSelectedPlatformId(platformId);
    // setSelectedPlatformName(platform.name);
  };

  return (
    <Menu.Root closeOnSelect={false}>
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
          {/* {selectedPlatform?.name || "Platforms"} */}
          Platforms
          <FaChevronDown style={{ width: "14px", height: "14px" }} />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content width={"230px"}>
            <Menu.Item
              value="All"
              fontSize="15px"
              padding={"8px"}
              cursor={"pointer"}
              onClick={() => handleSelectPlatform(-1)}
            >
              All
            </Menu.Item>
            {platforms?.results.map((platform) => (
              <Menu.Item
                key={platform.id}
                value={platform.name}
                fontSize="15px"
                padding={"8px"}
                cursor={"pointer"}
                onClick={() => handleSelectPlatform(platform.id)}
              >
                <Checkbox.Root checked={selectedPlatformIds ? selectedPlatformIds.includes(platform.id) : false}>
                  <Checkbox.HiddenInput />
                  <Checkbox.Control />
                  <Checkbox.Label>{platform.name}</Checkbox.Label>
                </Checkbox.Root>
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default PlatformSelector;

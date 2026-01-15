import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { useColorMode, ColorModeButton } from "./ui/color-mode";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const Navbar = ({ onSearch }: Props) => {
  const { colorMode } = useColorMode();

  return (
    <div>
      <HStack justifyContent="space-between" marginBottom={"10px"}>
        <Image src={logo} boxSize="60px" />
        <SearchInput onSearch={onSearch} />
        <HStack>
          <ColorModeButton />
          <Text whiteSpace={"nowrap"} textTransform="capitalize">
            {colorMode} Mode
          </Text>
        </HStack>
      </HStack>
    </div>
  );
};

export default Navbar;

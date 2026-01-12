import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { useColorMode, ColorModeButton } from "./ui/color-mode";
import SearchInput from "./SearchInput";

const Navbar = () => {
  const { colorMode } = useColorMode();

  return (
    <div>
      <HStack justifyContent="space-between" marginBottom={"15px"}>
        <Image src={logo} boxSize="60px" />
        <SearchInput />
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

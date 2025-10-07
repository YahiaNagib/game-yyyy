import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { useColorMode, ColorModeButton } from "./ui/color-mode";

const Navbar = () => {
  const { colorMode } = useColorMode();

  return (
    <div>
      <HStack justifyContent="space-between">
        <Image src={logo} boxSize="60px" />
        <HStack>
          <ColorModeButton />
          <Text textTransform="capitalize">{colorMode} Mode</Text>
        </HStack>
      </HStack>
    </div>
  );
};

export default Navbar;

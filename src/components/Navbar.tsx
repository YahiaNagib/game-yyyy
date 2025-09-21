import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { ColorModeButton } from "./ui/color-mode";

const Navbar = () => {
  return (
    <div>
      <HStack justifyContent="space-between">
        <Image src={logo} boxSize="60px" />
        <HStack>
          <ColorModeButton />
          <Text>Dark Mode</Text>
        </HStack>
      </HStack>
    </div>
  );
};

export default Navbar;

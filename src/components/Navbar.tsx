import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

const Navbar = () => {
  return (
    <div>
      <HStack>
        <Image src={logo} boxSize="60px" />
      </HStack>
    </div>
  );
};

export default Navbar;

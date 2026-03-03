import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { useColorMode, ColorModeButton } from "./ui/color-mode";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";
import useGameQueryStore from "../store";

const Navbar = () => {
  const { colorMode } = useColorMode();
  const resetQuery = useGameQueryStore((s) => s.resetQuery);

  return (
    <div>
      <HStack justifyContent="space-between" marginBottom={"10px"}>
        <Link to="/" onClick={() => resetQuery()}>
          <Image src={logo} boxSize="60px" />
        </Link>
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

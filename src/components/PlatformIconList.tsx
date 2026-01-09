import { Platform } from "../hooks/usePlatforms";
import { HStack, Icon } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
  FaGooglePlay,
  FaQuestion,
} from "react-icons/fa";

import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
    android: FaAndroid,
    xbox360: FaXbox,
    macos: FaApple,
    unknown: FaQuestion,
  };

  const getIcon = (slug: string) => {
    return iconMap.hasOwnProperty(slug) ? slug : "unknown";
  };

  return (
    <HStack marginY="8px">
      {platforms.map((platform) => (
        <Icon
          key={platform.id}
          as={iconMap[getIcon(platform.slug) as keyof IconType]}
          color="gray.500"
        />
      ))}
    </HStack>
  );
};

export default PlatformIconList;

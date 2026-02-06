import useScreenshot from "../hooks/useScreenshots";
import { Image, SimpleGrid } from "@chakra-ui/react";
import React from "react";

const GameScreenshots = (props: { id: number }) => {
  const { data: screenshots, isLoading, error } = useScreenshot(props.id);

  if (isLoading) return null;

  if (error) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} gap={10}>
      {screenshots?.results.map((image) => (
        <Image margin={5} key={image.id} src={image.image}></Image>
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;

import useGame from "../hooks/useGame";
import { Button, Heading, Spinner, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

const GameDetailPage = () => {
  const [expanded, setExpanded] = useState(false);

  const { slug } = useParams();

  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  const handleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Heading fontSize="40px" marginBottom="15px">
        {game.name}
      </Heading>
      <Text display="inline" marginBottom="15px">
        {expanded ? game.description_raw : game.description_raw.substring(0, 300) + "..."}
      </Text>

      <Button fontWeight="bold" size="xs" marginLeft="20px" onClick={handleClick}>
        {expanded ? "Show Less" : "Show More"}{" "}
      </Button>
    </>
  );
};

export default GameDetailPage;

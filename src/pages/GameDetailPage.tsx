import GameTrailer from "../components/GameTrailer";
import CriticScore from "../components/CriticScore";
import useGame from "../hooks/useGame";
import { Button, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import GameScreenshots from "../components/gameScreenshots";

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
      <SimpleGrid columns={{ base: 1, md: 2 }}>
        <div>
          <Heading fontSize="40px" marginBottom="15px">
            {game.name}
          </Heading>
          <Text display="inline" marginBottom="15px">
            {expanded ? game.description_raw : game.description_raw.substring(0, 300) + "..."}
          </Text>

          <Button fontWeight="bold" size="xs" marginLeft="20px" onClick={handleClick}>
            {expanded ? "Show Less" : "Show More"}{" "}
          </Button>
        </div>
        <GameTrailer id={game.id} />
        <div>
          <SimpleGrid columns={2} marginTop={10}>
            <div>
              <Heading>Platforms</Heading>
              {game.parent_platforms.map(({ platform }) => (
                <Text key={platform.id}>{platform.name}</Text>
              ))}
            </div>
            <div>
              <Heading>Metascore</Heading>
              <CriticScore score={game.metacritic} />
            </div>
            <div>
              <Heading>Genres</Heading>
              {game.genres.map((genre) => (
                <Text key={genre.id}>{genre.name}</Text>
              ))}
            </div>
            <div>
              <Heading>Publishers</Heading>
              {game.publishers.map((publisher) => (
                <Text key={publisher.id}>{publisher.name}</Text>
              ))}
            </div>
          </SimpleGrid>
        </div>
        <GameScreenshots id={game.id} />
      </SimpleGrid>
    </>
  );
};

export default GameDetailPage;

import { Game } from "../hooks/useGames";
import { Card, Heading, HStack, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import Emojis from "./Emojis";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  // const getPlatforms = (game: Game) => {
  //   console.log(game.parent_platforms.map((p) => p.platform));
  //   return game.parent_platforms.map((p) => p.platform);
  // };

  return (
    <Card.Root

    // height={{ lg: "400px", sm: "550px", md: "400px", xl: "400px" }}
    >
      <Card.Header padding={0}>
        <Image src={getCroppedImageUrl(game.background_image)} objectFit={"cover"} />
      </Card.Header>
      <Card.Body alignItems="flex-start">
        <HStack justifyContent="space-between" width="100%">
          <PlatformIconList platforms={game.parent_platforms.map((p) => p.platform)} />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl" fontWeight={"bold"} marginBottom={"5px"}>
          <Link to={`games/${game.slug}`}>{game.name}</Link>
        </Heading>
        <Emojis rating={game.rating_top} />
      </Card.Body>
      {/* <Card.Footer> </Card.Footer> */}
    </Card.Root>
  );
};

export default GameCard;

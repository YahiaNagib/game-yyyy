import { Game } from "../hooks/useGames";
import { Card, Heading, Image, Text } from "@chakra-ui/react";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root borderRadius={10} overflow="hidden" alignItems="center">
      <Card.Header>
        <Image src={game.background_image} />
      </Card.Header>
      <Card.Body>
        <Heading fontSize="2xl" fontWeight={"bold"}>
          {game.name}
        </Heading>
        {game.parent_platforms.map(({ platform }) => (
          <Text>{platform.name}</Text>
        ))}
      </Card.Body>
      <Card.Footer>{game.name}</Card.Footer>
    </Card.Root>
  );
};

export default GameCard;

import { Heading, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import usePlatforms from "../hooks/usePlatforms";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import ButtonDropdown from "./ButtonDropdown";
import { Genre } from "../hooks/useGenres";

interface Props {
  selectedGenre: Genre | null;
}

const GameGrid = ({ selectedGenre }: Props) => {
  const { data: games, error, isLoading } = useGames(selectedGenre);

  const { data: platforms } = usePlatforms();

  return (
    <>
      {error && <Text>{error}</Text>}
      <Heading
        marginLeft={"10px"}
        marginBottom={"10px"}
        padding={"10px 0"}
        fontSize={"40px"}
        fontWeight={"bold"}
      >
        Games
      </Heading>
      <ButtonDropdown text="Platfroms" items={platforms} />
      <ButtonDropdown text="Order by: Relevance" items={platforms} />

      <SimpleGrid
        columns={{ lg: 3, sm: 1, md: 2, xl: 4 }}
        padding="10px"
        gap="20px"
      >
        {isLoading && (
          <>
            <GameCardSkeleton />
            <GameCardSkeleton />
            <GameCardSkeleton />
            <GameCardSkeleton />
            <GameCardSkeleton />
            <GameCardSkeleton />
            <GameCardSkeleton />
            <GameCardSkeleton />
          </>
        )}
        {games.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard key={game.id} game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;

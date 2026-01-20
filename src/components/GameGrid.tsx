import { Heading, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import { Platform } from "../hooks/usePlatforms";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import PlatformSelector from "./PlatformSelector";
import { Genre } from "../hooks/useGenres";
import SortSelector from "./SortSelector";
import { GameQuery } from "@/App";

interface Props {
  gameQuery: GameQuery;
  // selectedGenre: Genre | null;
  // selectedPlatform: Platform | null;
  // searchText: string;
  // selectedOrderBy: string;
  onSelectPlatform: (platform: Platform) => void;
  onSelectOrderBy: (selectedOrderBy: string) => void;
}

const GameGrid = ({ gameQuery, onSelectPlatform, onSelectOrderBy }: Props) => {
  const { data: games, error, isLoading } = useGames(gameQuery);

  return (
    <>
      {error && <Text>{error}</Text>}
      <Heading marginLeft={"10px"} marginBottom={"10px"} padding={"10px 0"} fontSize={"40px"} fontWeight={"bold"}>
        {gameQuery.platform?.name} {gameQuery.genre?.name} Games
      </Heading>
      <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={onSelectPlatform} />
      <SortSelector selectedOrderBy={gameQuery.sortOrder} onSelectOrder={onSelectOrderBy} />

      <SimpleGrid columns={{ lg: 3, sm: 1, md: 2, xl: 4 }} padding="10px" gap="20px">
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
        {!isLoading &&
          games.map((game) => (
            <GameCardContainer key={game.id}>
              <GameCard key={game.id} game={game} />
            </GameCardContainer>
          ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;

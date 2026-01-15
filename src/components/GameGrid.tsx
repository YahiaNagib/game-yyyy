import { Heading, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import usePlatforms, { Platform } from "../hooks/usePlatforms";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import PlatformSelector from "./PlatformSelector";
import { Genre } from "../hooks/useGenres";
import { useState } from "react";
import SortSelector from "./SortSelector";

interface Props {
  selectedGenre: Genre | null;
  searchText: string;
}

const GameGrid = ({ selectedGenre, searchText }: Props) => {
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);
  const [selectedOrderBy, setSelectedOrderBy] = useState("");

  const onSelectPlatform = (platform: Platform) => setSelectedPlatform(platform);
  const onSelectOrderBy = (selectedOrderBy: string) => setSelectedOrderBy(selectedOrderBy);

  const { data: games, error, isLoading } = useGames(selectedGenre, selectedPlatform, selectedOrderBy, searchText);

  return (
    <>
      {error && <Text>{error}</Text>}
      <Heading marginLeft={"10px"} marginBottom={"10px"} padding={"10px 0"} fontSize={"40px"} fontWeight={"bold"}>
        {selectedPlatform?.name} {selectedGenre?.name} Games
      </Heading>
      <PlatformSelector selectedPlatform={selectedPlatform} onSelectPlatform={onSelectPlatform} />
      <SortSelector selectedOrderBy={selectedOrderBy} onSelectOrder={onSelectOrderBy} />

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

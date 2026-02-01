import { Button, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import usePlatforms from "../hooks/usePlatforms";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import PlatformSelector from "./PlatformSelector";
import useGenres, { Genre } from "../hooks/useGenres";
import SortSelector from "./SortSelector";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useGameQueryStore from "../store";

// interface Props {
// gameQuery: GameQuery;
// selectedGenre: Genre | null;
// selectedPlatform: Platform | null;
// searchText: string;
// selectedOrderBy: string;
// onSelectPlatform: (platformId: number) => void;
// onSelectOrderBy: (selectedOrderBy: string) => void;
// }

const GameGrid = () => {
  const { data: games, error, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } = useGames();

  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);

  const { data: genres } = useGenres();
  const { data: platforms } = usePlatforms();

  const selectedGenre = genres?.results.find((genre) => genre.id === genreId);
  const selectedPlatform = platforms?.results.find((platform) => platform.id === platformId);

  return (
    <>
      <Heading marginLeft={"10px"} marginBottom={"10px"} padding={"10px 0"} fontSize={"40px"} fontWeight={"bold"}>
        {selectedPlatform?.name} {selectedGenre?.name} Games
      </Heading>
      <PlatformSelector />
      <SortSelector />
      {error && <Text>{error.message}</Text>}

      {/* <InfiniteScroll
        dataLength={games?.pages.reduce((total, page) => total + page.results.length, 0) || 0}
        next={fetchNextPage}
        hasMore={hasNextPage}
        loader={<Spinner />}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>End</b>
          </p>
        }
      > */}
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
          games?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.results.map((game) => (
                <GameCardContainer key={game.id}>
                  <GameCard key={game.id} game={game} />
                </GameCardContainer>
              ))}
            </React.Fragment>
          ))}
      </SimpleGrid>
      {/* </InfiniteScroll> */}
      {hasNextPage && (
        <Button onClick={() => fetchNextPage()}>{isFetchingNextPage ? "Loading..." : "Load More"}</Button>
      )}
    </>
  );
};

export default GameGrid;

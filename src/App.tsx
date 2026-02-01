import "./App.css";
import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/usePlatforms";
import useGameQueryStore from "./store";
export interface GameQuery {
  genreId: number;
  platformId: number;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  const onSelectGenre = (genreId: number) => setGameQuery({ ...gameQuery, genreId });

  const onSelectPlatform = (platformId: number) => setGameQuery({ ...gameQuery, platformId });

  const onSelectOrderBy = (sortOrder: string) => setGameQuery({ ...gameQuery, sortOrder });

  const onSearch = (searchText: string) => setGameQuery({ ...gameQuery, searchText });

  const { gameQuery: gameQuery2, setGenreId, setPlatformId, setSortOrder, setSearchText } = useGameQueryStore();

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      gap={"12px"}
    >
      <GridItem area="nav">
        <Navbar onSearch={onSearch} />
      </GridItem>
      <GridItem area="aside" display={{ base: "none", lg: "block" }}>
        <GenreList selectedGenreId={gameQuery.genreId} onSelectGenre={onSelectGenre} />
      </GridItem>
      <GridItem area="main">
        <GameGrid gameQuery={gameQuery} onSelectPlatform={onSelectPlatform} onSelectOrderBy={onSelectOrderBy} />
      </GridItem>
    </Grid>
  );
}

export default App;

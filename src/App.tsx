import "./App.css";
import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/usePlatforms";
export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  searchText: string;
  sortOrder: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  const onSelectGenre = (genre: Genre) => setGameQuery({ ...gameQuery, genre });

  const onSelectPlatform = (platform: Platform) => setGameQuery({ ...gameQuery, platform });

  const onSelectOrderBy = (sortOrder: string) => setGameQuery({ ...gameQuery, sortOrder });

  const onSearch = (sortOrder: string) => setGameQuery({ ...gameQuery, sortOrder });

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
        <GenreList selectedGenre={gameQuery.genre} onSelectGenre={onSelectGenre} />
      </GridItem>
      <GridItem area="main">
        <GameGrid
          gameQuery={gameQuery}
          onSelectPlatform={onSelectPlatform}
          onSelectOrderBy={onSelectOrderBy}
        />
      </GridItem>
    </Grid>
  );
}

export default App;

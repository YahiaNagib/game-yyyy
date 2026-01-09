import "./App.css";
import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  const onSelectGenre = (genre: Genre) => setSelectedGenre(genre);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      gap={"12px"}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <GridItem area="aside" display={{ base: "none", lg: "block" }}>
        <GenreList
          selectedGenre={selectedGenre}
          onSelectGenre={onSelectGenre}
        />
      </GridItem>
      <GridItem area="main">
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;

import "./App.css";
import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  const [searchText, setSearchText] = useState("");

  const onSearch = (text: string) => setSearchText(text);

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
        <Navbar onSearch={onSearch} />
      </GridItem>
      <GridItem area="aside" display={{ base: "none", lg: "block" }}>
        <GenreList selectedGenre={selectedGenre} onSelectGenre={onSelectGenre} />
      </GridItem>
      <GridItem area="main">
        <GameGrid selectedGenre={selectedGenre} searchText={searchText} />
      </GridItem>
    </Grid>
  );
}

export default App;

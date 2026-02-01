import "./App.css";
import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

export interface GameQuery {
  genreId: number;
  platformId: number;
  sortOrder: string;
  searchText: string;
}

function App() {
  // const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  // const onSelectGenre = (genreId: number) => setGameQuery({ ...gameQuery, genreId });

  // const onSelectPlatform = (platformId: number) => setGameQuery({ ...gameQuery, platformId });

  // const onSelectOrderBy = (sortOrder: string) => setGameQuery({ ...gameQuery, sortOrder });

  // const onSearch = (searchText: string) => setGameQuery({ ...gameQuery, searchText });

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
        <GenreList />
      </GridItem>
      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;

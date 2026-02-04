import GameGrid from "../components/GameGrid";
import GenreList from "../components/GenreList";
import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      gap={"12px"}
    >
      <GridItem area="aside" display={{ base: "none", lg: "block" }}>
        <GenreList />
      </GridItem>
      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;

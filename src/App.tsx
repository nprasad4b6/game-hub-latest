import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import { GameGrid } from "./components/GameGrid";
import { GenereLst } from "./components/GenereList";
import useGeners, { Gener } from "./hooks/useGeners";

function App() {
  const [count, setCount] = useState(0);
  const [selectedGenre, setSelectedGenre] = useState<Gener | null>(null);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>

      <GridItem
        area="aside"
        paddingX={5}
        display={{ base: "none", lg: "block" }}
      >
        <GenereLst
          onGenreSelected={(gener) => setSelectedGenre(gener)}
        ></GenereLst>
      </GridItem>

      <GridItem area="main">
        <GameGrid selectedGener={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;

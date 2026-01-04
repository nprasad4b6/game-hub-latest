import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import { GameGrid } from "./components/GameGrid";
import { GenereLst } from "./components/GenereList";
import useGeners, { Gener } from "./hooks/useGeners";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";

function App() {
  const [count, setCount] = useState(0);
  const [selectedGenre, setSelectedGenre] = useState<Gener | null>(null);
  const [selectedPlatform, setselectedPlatform] = useState<Platform | null>(
    null
  );

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
          selectedGenere={selectedGenre}
          onGenreSelected={(gener) => setSelectedGenre(gener)}
        ></GenereLst>
      </GridItem>

      <GridItem area="main">
        <PlatformSelector
          selectedPlatform={selectedPlatform}
          onPlatFormSelect={(platform) => setselectedPlatform(platform)}
        ></PlatformSelector>
        <GameGrid
          selectedGener={selectedGenre}
          platformSelected={selectedPlatform}
        />
      </GridItem>
    </Grid>
  );
}

export default App;

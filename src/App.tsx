import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Grid, GridItem, HStack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import { GameGrid } from "./components/GameGrid";
import { GenereLst } from "./components/GenereList";
import useGeners, { Gener } from "./hooks/useGeners";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genre: Gener | null;
  platform: Platform | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  // const [selectedGenre, setSelectedGenre] = useState<Gener | null>(null);
  // const [selectedPlatform, setselectedPlatform] = useState<Platform | null>(
  //   null
  // );

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
          selectedGenere={gameQuery?.genre}
          onGenreSelected={(genre) => setGameQuery({ ...gameQuery, genre })}
        ></GenereLst>
      </GridItem>

      <GridItem area="main">
        <HStack marginBottom={3} spacing={5}>
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onPlatFormSelect={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          ></PlatformSelector>
          <SortSelector></SortSelector>
        </HStack>

        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;

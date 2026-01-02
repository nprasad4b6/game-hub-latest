import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";

import { Game, Platform } from "../hooks/useGames";
import PlatFormMappingList from "./PlatFormMappingList";
import CriticScore from "./CriticScore";

interface Props {
  game: Game;
}

export const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card borderRadius={10} overflow={"hidden"}>
        <Image src={game.background_image}></Image>
        <CardBody>
          <Heading fontSize={"2xl"}>{game.name}</Heading>
          <HStack justifyContent="space-between">
            <PlatFormMappingList
              platforms={game.parent_platforms.map((p) => p.platform)}
            ></PlatFormMappingList>
            <CriticScore score={game.metacritic}></CriticScore>
          </HStack>
        </CardBody>
      </Card>
    </>
  );
};

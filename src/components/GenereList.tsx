import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGeners, { Gener } from "../hooks/useGeners";
import getCroppedImageUrl from "../services/image-url";

export const GenereLst = () => {
  const { data, error, isLoading } = useGeners();
  if (isLoading) return <Spinner></Spinner>;
  //   if (error) return null;
  return (
    <List>
      {data.map((genere) => (
        <ListItem key={genere.id} paddingY={"10px"}>
          <HStack>
            <Image
              boxSize={"32px"}
              borderRadius={8}
              src={getCroppedImageUrl(genere.image_background)}
            ></Image>
            <Text fontSize={"lg"}>{genere.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

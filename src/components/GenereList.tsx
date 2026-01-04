import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGeners, { Gener } from "../hooks/useGeners";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onGenreSelected: (gener: Gener) => void;
  selectedGenere: Gener | null;
}

export const GenereLst = ({ onGenreSelected, selectedGenere }: Props) => {
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
            <Button
              fontWeight={genere.id == selectedGenere?.id ? "bold" : "normal"}
              variant="link"
              fontSize={"lg"}
              onClick={() => onGenreSelected(genere)}
            >
              {genere.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

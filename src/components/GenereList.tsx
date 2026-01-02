import useGeners from "../hooks/useGeners";
import { SimpleGrid, Text } from "@chakra-ui/react";

export const GenereLst = () => {
  const { geners, error, isLoading } = useGeners();

  return (
    <ul>
      {geners.map((genere) => (
        <li>{genere.name}</li>
      ))}
    </ul>
  );
};

import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";
import { BsSearch } from "react-icons/bs";

export const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch></BsSearch>}></InputLeftElement>
      <Input
        borderRadius={20}
        variant={"filled"}
        placeholder="Search Games..."
      ></Input>
    </InputGroup>
  );
};
export default SearchInput;

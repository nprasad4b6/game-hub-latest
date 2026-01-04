import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

export const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Sort BY Relevance
      </MenuButton>
      <MenuList>
        <MenuItem>Date</MenuItem>
        <MenuItem>sort</MenuItem>
        <MenuItem>name</MenuItem>
        <MenuItem>bbg</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;

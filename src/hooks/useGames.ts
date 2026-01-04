import React, { useEffect, useState } from "react";
import apiClinet from "../services/api-clinet";
import { CanceledError } from "axios";
import useData from "./useData";
import {Gener} from "./useGeners"

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}



export const useGames = (selectedGener: Gener | null) => useData<Game>("/games", {params: {
  genres: selectedGener?.id
}}, [ selectedGener?.id]);
   

export default useGames;

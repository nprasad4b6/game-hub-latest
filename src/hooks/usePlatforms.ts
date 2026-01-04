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





export const usePlatforms = () => useData<Platform>("/platforms/lists/parents");
   

export default usePlatforms;


import useData from "./useData"



export interface Gener {
  id: number;
  name: string;
  image_background: string
}



export const useGeners = () => useData<Gener>("/genres");
  


export default useGeners;

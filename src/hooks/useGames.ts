import useData from "./useData";
import { Platform } from "./usePlatforms";
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[]; // array of objects, each object has a property called platform
  // and this property is of type Platform.
  metacritic: number;
}

const useGames = () => useData<Game>("/games");

export default useGames;

import useData from "./useData";
import { Genre } from "./useGenres";
import { Platform } from "./usePlatforms";
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[]; // array of objects, each object has a property called platform
  // and this property is of type Platform.
  metacritic: number;
  rating_top: number;
}

const useGames = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null,
  selectedOrderBy: string,
  searchText: string
) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: selectedGenre?.id,
        parent_platforms: selectedPlatform?.id,
        ordering: selectedOrderBy,
        search: searchText,
      },
    },
    [selectedGenre?.id, selectedPlatform?.id, selectedOrderBy, searchText]
  );

export default useGames;

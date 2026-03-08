import { GameQuery } from "@/App";
import { Platform } from "./usePlatforms";
import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import useGameQueryStore from "../store";
import { Genre } from "./useGenres";

export interface Game {
  id: number;
  name: string;
  slug: string;
  genres: Genre[];
  publishers: { id: number; name: string }[];
  background_image: string;
  parent_platforms: { platform: Platform }[]; // array of objects, each object has a property called platform
  // and this property is of type Platform.
  metacritic: number;
  rating_top: number;
  description_raw: string;
}

const apiClient = new APIClient<Game>("/games");

const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);

  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: async ({ pageParam }) => {
      // 1. Fetch data with the backend 'OR' filter
      const response = await apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformIds?.join(","),
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      });

      // 2. Enforce the client-side 'AND' filter
      if (gameQuery.platformIds && gameQuery.platformIds.length > 1) {
        response.results = response.results.filter((game: Game) => {
          // Extract the platform IDs this specific game is available on
          const gamePlatformIds = game.parent_platforms.map((p) => p.platform.id);

          // Check if the game has EVERY platform ID the user selected
          return gameQuery.platformIds!.every((id) => gamePlatformIds.includes(id));
        });
      }

      return response;
    },
    initialPageParam: 1,
    staleTime: 24 * 60 * 60 * 1000,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });
};

// useData<Game>(
//   "/games",
//   {
//     params: {
//       genres: gameQuery.genre?.id,
//       parent_platforms: gameQuery.platform?.id,
//       ordering: gameQuery.sortOrder,
//       search: gameQuery.searchText,
//     },
//   },
//   [gameQuery],
// );

export default useGames;

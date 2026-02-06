import APIClient, { FetchResponse } from "../services/api-client";
import { useQuery } from "@tanstack/react-query";

interface Trailer {
  id: number;
  name: string;
  preview: string;
  data: { 480: string; max: string };
}

const apiClient = new APIClient<Trailer>("/games");

const useTrailers = (gameId: number) =>
  useQuery<FetchResponse<Trailer>, Error>({
    queryKey: ["trailers", gameId],
    queryFn: () => apiClient.getMovie(gameId),
  });

export default useTrailers;

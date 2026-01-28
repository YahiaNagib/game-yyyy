import { useQuery } from "@tanstack/react-query";
import useData from "./useData";
import apiClient from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
// const usePlatfroms = () => useData<Platform>("/platforms/lists/parents");

const usePlatfroms = () => {
  return useQuery<Platform[], Error>({
    queryKey: ["platforms"],
    queryFn: () => apiClient.get("/platforms/lists/parents").then((res) => res.data.results),
    staleTime: 24 * 60 * 60 * 1000,
  });
};

export default usePlatfroms;

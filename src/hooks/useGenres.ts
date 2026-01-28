import { CanceledError } from "axios";
import apiClient from "../services/api-client";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

interface FetchGenreResponse {
  count: number;
  results: Genre[];
}

// const useGenres = () => useData<Genre>("/genres");

const useGenres = () => {
  // const [data, setData] = useState<Genre[]>([]);
  // const [error, setError] = useState("");
  // const [isLoading, setLoading] = useState(true);

  // apiClient.get<FetchGenreResponse>("/genres").then((res) => {
  //   setData(res.data.results);
  //   setLoading(false);
  // });
  // return { data, isLoading };

  // useEffect(() => {
  //   const controller = new AbortController();
  //   setLoading(true);
  //   apiClient
  //     .get<FetchGenreResponse>("/genres", {
  //       signal: controller.signal,
  //     })
  //     .then((res) => {
  //       setData(res.data.results);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       if (err instanceof CanceledError) return;
  //       setError(err.message);
  //       setLoading(false);
  //     });
  //   return () => controller.abort();
  // }, []);
  // return { data, error, isLoading };

  return useQuery<Genre[], Error>({
    queryKey: ["genres"],
    queryFn: () => apiClient.get("/genres").then((res) => res.data.results),
    staleTime: 10 * 1000,
  });
};

export default useGenres;

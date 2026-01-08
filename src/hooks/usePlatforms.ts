import { CanceledError } from "axios";
import apiClient from "../services/api-client";
import { useEffect, useState } from "react";
import { Platform } from "./useGames";

interface FetchPlatformsResponse {
  count: number;
  results: Platform[];
}

const useGames = () => {
  const [platforms, setPlatform] = useState<Platform[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<FetchPlatformsResponse>("/platforms", { signal: controller.signal })
      .then((res) => {
        setPlatform(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
    return () => controller.abort();
  }, []);
  return { platforms, error, isLoading };
};

export default useGames;

import APIClient, { FetchResponse } from "../services/api-client";
import { useQuery } from "@tanstack/react-query";

interface Screenshot {
  id: number;
  image: string;
  width: number;
  height: number;
}

const apiClient = new APIClient<Screenshot>("/games");

const useScreenshot = (id: number) =>
  useQuery<FetchResponse<Screenshot>>({
    queryKey: ["screenshots", id],
    queryFn: () => apiClient.getScreenshots(id),
  });

export default useScreenshot;

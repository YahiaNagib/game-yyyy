import useData from "./useData";

interface FetchPlatformsResponse {
  count: number;
  results: Platform[];
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatfroms = () => useData<Platform>("/platforms");

export default usePlatfroms;

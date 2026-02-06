import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    // key: "397f8799aec84775a06b01474199f47a",
    // key: "a76385dae6b84e84a55c98198839a79d",
    key: "dfa8685f657e446b8e760ced25dec7de",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance.get(this.endpoint, config).then((res) => res.data);
  };

  get = (id: number | string) => {
    return axiosInstance.get<T>(this.endpoint + "/" + id).then((res) => res.data);
  };

  getMovie = (id: number) => {
    return axiosInstance.get(this.endpoint + "/" + id + "/movies").then((res) => res.data);
  };

  getScreenshots = (id: number) => {
    return axiosInstance.get(this.endpoint + "/" + id + "/screenshots").then((res) => res.data);
  };
}

export default APIClient;

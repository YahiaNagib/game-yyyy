import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "397f8799aec84775a06b01474199f47a",
  },
});

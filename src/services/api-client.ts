import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "dfa8685f657e446b8e760ced25dec7de",
  },
});

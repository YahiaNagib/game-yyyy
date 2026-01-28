import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    // key: "397f8799aec84775a06b01474199f47a",
    // key: "a76385dae6b84e84a55c98198839a79d",
    key: "dfa8685f657e446b8e760ced25dec7de",
  },
});

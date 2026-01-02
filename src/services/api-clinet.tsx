import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "19d49227d7df4669b22e95d349020ec6",
  },
});

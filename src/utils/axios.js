import axios from "axios";

export const ApiRequest = axios.create({
  baseURL: "https://nc-games-9h15.onrender.com/api",
});

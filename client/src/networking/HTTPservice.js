import axios from "axios";

export const quoteInstance = axios.create({
  baseURL: "https://quotes.rest/qod?language=en",
});

export const setAuthToken = (token) => {
  axios.defaults.baseURL = "http://localhost:8899";
  axios.defaults.headers.common["Authorization"] = token;
};

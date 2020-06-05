import axios from "axios";

export const setAuthToken = (token) => {
  axios.defaults.baseURL = "http://localhost:8899";
  axios.defaults.headers.common["Authorization"] = token;
};
